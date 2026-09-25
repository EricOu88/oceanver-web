-- Incremental security migration for projects that already applied
-- 202609230001_community_discussion.sql.
-- Safe for existing comments, staff allowlist rows, and test data.

alter table public.community_comments alter column status set default 'approved';
revoke insert on public.community_comments from public, anon, authenticated;
drop policy if exists "Anyone can submit pending community comments" on public.community_comments;

revoke all on function public.submit_community_comment(text, text, text, uuid) from public, anon, authenticated;
grant execute on function public.submit_community_comment(text, text, text, uuid) to service_role;
create or replace function public.submit_community_comment(
  p_page_key text,
  p_nickname text,
  p_body text,
  p_parent_id uuid default null
) returns uuid language plpgsql security definer set search_path = public as $$
declare
  normalized_page_key text := btrim(p_page_key);
  normalized_nickname text := btrim(p_nickname);
  normalized_body text := btrim(p_body);
  parent_page_key text;
  parent_status text;
  parent_parent_id uuid;
  inserted_id uuid;
begin
  if char_length(normalized_page_key) not between 3 and 180
    or char_length(normalized_nickname) not between 1 and 40
    or char_length(normalized_body) not between 1 and 2000 then
    raise exception 'Invalid community comment input';
  end if;
  if normalized_body ~* '[0-9]{5,}|账单截图|身份证|驾照|社会安全号|完整地址|account\s*(number|#)|ssn\b' then
    raise exception 'Sensitive account data is not allowed';
  end if;
  if p_parent_id is not null then
    select c.page_key, c.status, c.parent_id into parent_page_key, parent_status, parent_parent_id
    from public.community_comments c where c.id = p_parent_id;
    if parent_page_key is null or parent_page_key <> normalized_page_key or parent_status <> 'approved' or parent_parent_id is not null then
      raise exception 'Replies must target an approved top-level comment on the same page';
    end if;
  end if;
  insert into public.community_comments (page_key, nickname, body, parent_id, status, is_official)
  values (normalized_page_key, normalized_nickname, normalized_body, p_parent_id, 'approved', false)
  returning id into inserted_id;
  return inserted_id;
end;
$$;

revoke all on function public.create_official_reply(uuid, text) from public, anon, authenticated;
create or replace function public.create_official_reply(
  p_parent_id uuid,
  p_body text
) returns uuid language plpgsql security definer set search_path = public as $$
declare
  actor_id uuid := auth.uid();
  parent_page_key text;
  parent_status text;
  parent_parent_id uuid;
  normalized_body text := btrim(p_body);
  inserted_id uuid;
begin
  if not public.is_community_staff() then
    raise exception 'Community staff authorization required';
  end if;
  if char_length(normalized_body) not between 1 and 2000 then
    raise exception 'Invalid official reply';
  end if;
  select c.page_key, c.status, c.parent_id into parent_page_key, parent_status, parent_parent_id
  from public.community_comments c where c.id = p_parent_id for update;
  if parent_page_key is null or parent_status <> 'approved' or parent_parent_id is not null then
    raise exception 'Official replies must target an approved top-level comment';
  end if;
  insert into public.community_comments (page_key, nickname, body, parent_id, status, is_official, author_user_id, moderated_at, moderated_by)
  values (parent_page_key, '美国鸿达电讯 · 中文客服', normalized_body, p_parent_id, 'approved', true, actor_id, timezone('utc', now()), actor_id)
  returning id into inserted_id;
  insert into public.community_moderation_audit (actor_user_id, action, comment_id, page_key, metadata)
  values (actor_id, 'official_reply', p_parent_id, parent_page_key, jsonb_build_object('reply_id', inserted_id));
  return inserted_id;
end;
$$;
grant execute on function public.create_official_reply(uuid, text) to authenticated;

create or replace function public.community_prepare_comment_insert() returns trigger language plpgsql security definer set search_path = public as $$
declare
  trusted_writer boolean := auth.role() = 'service_role' or public.is_community_staff();
  parent_page_key text;
  parent_status text;
  parent_parent_id uuid;
begin
  if not trusted_writer then
    new.status = 'approved';
    new.is_official = false;
    new.author_user_id = null;
    new.moderated_at = null;
    new.moderated_by = null;
    new.report_count = 0;
    new.spam_score = 0;
    new.created_at = timezone('utc', now());
    new.updated_at = new.created_at;
  end if;
  if new.parent_id is not null then
    select c.page_key, c.status, c.parent_id into parent_page_key, parent_status, parent_parent_id
    from public.community_comments c where c.id = new.parent_id;
    if parent_page_key is null or parent_page_key <> new.page_key or parent_status <> 'approved' or parent_parent_id is not null then
      raise exception 'Replies must target an approved top-level comment on the same page';
    end if;
  end if;
  return new;
end;
$$;

create or replace function public.moderate_community_comment(
  p_comment_id uuid,
  p_action text,
  p_metadata jsonb default '{}'::jsonb
) returns jsonb language plpgsql security definer set search_path = public as $$
declare
  actor_id uuid := auth.uid();
  target public.community_comments%rowtype;
  audit_action text;
begin
  if not public.is_community_staff() then
    raise exception 'Community staff authorization required';
  end if;
  if p_action not in ('approved', 'rejected', 'hidden', 'deleted') then
    raise exception 'Unsupported moderation action';
  end if;
  select * into target from public.community_comments where id = p_comment_id for update;
  if not found then raise exception 'Comment not found'; end if;
  audit_action := case p_action when 'approved' then 'approve' when 'rejected' then 'reject' when 'hidden' then 'hide' else 'delete' end;
  insert into public.community_moderation_audit (actor_user_id, action, comment_id, page_key, metadata)
  values (actor_id, audit_action, target.id, target.page_key, coalesce(p_metadata, '{}'::jsonb));
  if p_action = 'deleted' then
    delete from public.community_comments where id = p_comment_id;
  else
    update public.community_comments
    set status = p_action, moderated_at = timezone('utc', now()), moderated_by = actor_id
    where id = p_comment_id;
  end if;
  return jsonb_build_object('comment_id', target.id, 'page_key', target.page_key, 'action', p_action);
end;
$$;
revoke all on function public.moderate_community_comment(uuid, text, jsonb) from public, anon, authenticated;
grant execute on function public.moderate_community_comment(uuid, text, jsonb) to authenticated;