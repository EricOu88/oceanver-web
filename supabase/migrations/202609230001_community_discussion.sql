-- Oceanver CommunityDiscussion schema.
-- Apply with Supabase CLI or the Supabase SQL editor.

create extension if not exists pgcrypto;

create table if not exists public.community_comments (
  id uuid primary key default gen_random_uuid(),
  page_key text not null check (char_length(page_key) between 3 and 180),
  nickname text not null check (char_length(nickname) between 1 and 40),
  body text not null check (char_length(body) between 1 and 2000),
  parent_id uuid references public.community_comments(id) on delete cascade,
  status text not null default 'approved' check (status in ('pending', 'approved', 'rejected', 'hidden', 'deleted')),
  is_official boolean not null default false,
  author_user_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  moderated_at timestamptz,
  moderated_by uuid references auth.users(id) on delete set null,
  report_count integer not null default 0,
  source_ip_hash text,
  user_agent_hash text,
  spam_score numeric(5, 2) not null default 0
);

create table if not exists public.community_comment_likes (
  comment_id uuid not null references public.community_comments(id) on delete cascade,
  visitor_hash text not null,
  created_at timestamptz not null default timezone('utc', now()),
  primary key (comment_id, visitor_hash)
);

create table if not exists public.community_comment_reports (
  id uuid primary key default gen_random_uuid(),
  comment_id uuid not null references public.community_comments(id) on delete cascade,
  reason text not null check (char_length(reason) between 1 and 500),
  reporter_hash text not null,
  created_at timestamptz not null default timezone('utc', now()),
  unique (comment_id, reporter_hash)
);

create table if not exists public.community_moderation_audit (
  id uuid primary key default gen_random_uuid(),
  actor_user_id uuid references auth.users(id) on delete set null,
  action text not null check (action in ('approve', 'reject', 'hide', 'delete', 'official_reply')),
  comment_id uuid,
  page_key text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.community_staff_allowlist (
  email text primary key check (email = lower(email)),
  enabled boolean not null default true,
  created_at timestamptz not null default timezone('utc', now())
);

create index if not exists community_comments_page_status_created_idx on public.community_comments(page_key, status, created_at desc);
create index if not exists community_comments_pending_idx on public.community_comments(status, created_at desc);
create index if not exists community_comments_parent_idx on public.community_comments(parent_id);
create index if not exists community_moderation_audit_created_idx on public.community_moderation_audit(created_at desc);

alter table public.community_comments enable row level security;
alter table public.community_comment_likes enable row level security;
alter table public.community_comment_reports enable row level security;
alter table public.community_moderation_audit enable row level security;
alter table public.community_staff_allowlist enable row level security;
revoke all on public.community_staff_allowlist from public, anon, authenticated;

create or replace function public.is_community_staff() returns boolean language sql stable security definer set search_path = public as $$
  select auth.uid() is not null
    and (auth.jwt() -> 'app_metadata' ->> 'role') = 'community_staff'
    and exists (
      select 1 from public.community_staff_allowlist a
      where a.email = lower(auth.jwt() ->> 'email') and a.enabled
    );
$$;
revoke all on function public.is_community_staff() from public;
grant execute on function public.is_community_staff() to anon, authenticated;

drop policy if exists "Anyone can read approved community comments" on public.community_comments;
create policy "Anyone can read approved community comments" on public.community_comments for select using (status = 'approved');
drop policy if exists "Anyone can submit pending community comments" on public.community_comments;

drop policy if exists "Anyone can read approved comment like counts" on public.community_comment_likes;
create policy "Anyone can read approved comment like counts" on public.community_comment_likes for select using (exists (select 1 from public.community_comments c where c.id = comment_id and c.status = 'approved'));
drop policy if exists "Anyone can like approved comments" on public.community_comment_likes;
create policy "Anyone can like approved comments" on public.community_comment_likes for insert with check (exists (select 1 from public.community_comments c where c.id = comment_id and c.status = 'approved'));
drop policy if exists "Anyone can report approved comments" on public.community_comment_reports;
create policy "Anyone can report approved comments" on public.community_comment_reports for insert with check (exists (select 1 from public.community_comments c where c.id = comment_id and c.status = 'approved'));

drop policy if exists "Staff can manage moderation audit" on public.community_moderation_audit;
create policy "Staff can manage moderation audit" on public.community_moderation_audit for all using (public.is_community_staff()) with check (public.is_community_staff());

revoke insert on public.community_comments from public, anon, authenticated;

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
revoke all on function public.submit_community_comment(text, text, text, uuid) from public, anon, authenticated;
grant execute on function public.submit_community_comment(text, text, text, uuid) to service_role;

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
  from public.community_comments c where c.id = p_parent_id;
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
revoke all on function public.create_official_reply(uuid, text) from public, anon, authenticated;
grant execute on function public.create_official_reply(uuid, text) to authenticated;

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
    update public.community_comments set status = p_action, moderated_at = timezone('utc', now()), moderated_by = actor_id where id = p_comment_id;
  end if;
  return jsonb_build_object('comment_id', target.id, 'page_key', target.page_key, 'action', p_action);
end;
$$;
revoke all on function public.moderate_community_comment(uuid, text, jsonb) from public, anon, authenticated;
grant execute on function public.moderate_community_comment(uuid, text, jsonb) to authenticated;

-- Public inserts are normalized here as a second boundary. The API is not the
-- database security boundary, so callers cannot forge moderation metadata or
-- attach a reply to another page or an unapproved comment.
create or replace function public.community_prepare_comment_insert() returns trigger language plpgsql security definer set search_path = public as $$
declare
  is_staff boolean := auth.role() = 'service_role' or public.is_community_staff();
  parent_page_key text;
  parent_status text;
  parent_parent_id uuid;
begin
  if not is_staff then
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

drop trigger if exists community_prepare_comment_insert on public.community_comments;
create trigger community_prepare_comment_insert before insert on public.community_comments for each row execute function public.community_prepare_comment_insert();

create or replace function public.community_increment_report_count() returns trigger language plpgsql security definer set search_path = public as $$
begin update public.community_comments set report_count = report_count + 1 where id = new.comment_id; return new; end; $$;
drop trigger if exists community_report_count on public.community_comment_reports;
create trigger community_report_count after insert on public.community_comment_reports for each row execute function public.community_increment_report_count();

drop policy if exists "Staff can manage community comments" on public.community_comments;
create policy "Staff can manage community comments" on public.community_comments for all using (public.is_community_staff()) with check (public.is_community_staff());
drop policy if exists "Staff can manage community reports" on public.community_comment_reports;
create policy "Staff can manage community reports" on public.community_comment_reports for all using (public.is_community_staff()) with check (public.is_community_staff());
drop policy if exists "Staff can manage community likes" on public.community_comment_likes;
create policy "Staff can manage community likes" on public.community_comment_likes for all using (public.is_community_staff()) with check (public.is_community_staff());

create or replace function public.community_touch_updated_at() returns trigger language plpgsql as $$ begin new.updated_at = timezone('utc', now()); return new; end; $$;
drop trigger if exists community_comments_updated_at on public.community_comments;
create trigger community_comments_updated_at before update on public.community_comments for each row execute function public.community_touch_updated_at();