# CommunityDiscussion 配置

## 外部配置

在 Oceanver 副站运行环境中配置以下变量，不要把真实值提交到仓库：

- `NEXT_PUBLIC_SUPABASE_URL`：Supabase Project URL。
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`：Supabase anon/publishable key。
- `SUPABASE_SECRET_KEY`：仅服务端读取的 `sb_secret_...` key，用于评论提交 RPC；禁止使用 `NEXT_PUBLIC_` 前缀。
- `COMMUNITY_STAFF_EMAILS`：允许进入社区后台的员工邮箱，多个邮箱用逗号分隔。
- `TURNSTILE_SECRET_KEY`：Cloudflare Turnstile 服务端密钥。生产环境必须配置。
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`：Cloudflare Turnstile 站点密钥。
- `COMMUNITY_HASH_SALT`：用于限流和举报去重哈希的随机盐值。

## Supabase SQL Editor 操作

1. 新建 Supabase 项目时，执行完整的 `supabase/migrations/202609230001_community_discussion.sql`。
2. 已经执行过初始迁移的项目，只执行增量的 `supabase/migrations/202609240002_community_security_and_moderation.sql`，不要重复执行旧迁移。
3. 在 Table Editor 确认 `community_comments`、`community_comment_likes`、`community_comment_reports`、`community_moderation_audit`、`community_staff_allowlist` 已创建并显示 RLS enabled。
4. 在 Authentication 中创建员工账号，并把该用户的 `app_metadata` 设置为 `{ "role": "community_staff" }`。
5. 在 SQL Editor 将员工邮箱以小写写入 `community_staff_allowlist`，例如 `insert into public.community_staff_allowlist (email) values ('staff@example.com');`。同时将同一邮箱加入 `COMMUNITY_STAFF_EMAILS`，重新启动 Oceanver 服务端后访问 `/admin/community`。

迁移启用评论、点赞、举报、审核日志和员工白名单表的 RLS；评论默认 `approved`，但评论提交 RPC 不再授予 anon/authenticated，只有带 `SUPABASE_SECRET_KEY` 的服务端 API 可以调用。官方回复和审核操作使用事务 RPC，并和 audit 写入原子完成。数据库触发器仍会管理系统字段并阻止跨页面或多级回复。数据库员工权限同时要求邮箱白名单和 `app_metadata.role=community_staff`，服务端 API 还会检查 `COMMUNITY_STAFF_EMAILS`。

## 测试步骤

1. 未配置登录时，访问公开评论 API，只能获得 `approved` 评论；确认 `pending`、`rejected`、`hidden` 不出现在响应中。
2. 不登录直接调用 `submit_community_comment`，确认 anon/authenticated 收到权限错误；通过 Oceanver 表单提交后，确认数据库新增记录的 `status=approved`、`is_official=false`，并确认客户端不能提交审核时间、审核人、计数、时间戳或官方标识。
3. 尝试直接使用 anon key INSERT、UPDATE、DELETE 或批准评论，确认评论表 INSERT 权限和其他写操作均被拒绝。
4. 尝试用不同 `page_key`、pending 父评论或二级父评论创建回复，确认 RPC 和数据库触发器拒绝；对已审核同页一级评论回复则进入 pending。
5. 员工使用 Auth 登录后台，分别测试缺少邮箱白名单、缺少 `app_metadata.role` 和完整双重配置的账号，确认只有完整配置账号能审核和官方回复。
6. 测试点赞去重、举报去重、点赞/举报限流、同源校验、Turnstile 失败和敏感账户信息拦截。
7. 检查浏览器网络请求和构建产物，确认没有出现 service role key、数据库密码或 Turnstile secret。

社区 API 不需要 `SUPABASE_SERVICE_ROLE_KEY`；员工审核和官方回复使用带员工 JWT 的 SSR client，并由数据库 staff RLS policy 保护。不要为社区功能新增或暴露 service role key。

没有 Supabase 配置时，公开页面仍可正常构建和浏览，但评论区不会显示内容；生产环境没有 Turnstile 密钥时，评论提交会被拒绝。