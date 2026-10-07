# Oceanver Phase 2 索引开关

最后更新：2026-10-07

## 当前默认状态

默认不设置：

`OCEANVER_INDEX_PHASE2`

或设置为任何不是 `true` 的值时，站点都处于 Phase 1：

- 根 metadata：noindex, nofollow
- HTML 响应头：X-Robots-Tag: noindex, nofollow
- sitemap.xml：空
- robots.txt：允许抓取，但页面本身明确 noindex

因此，代码合并或部署本身不会自动进入 Phase 2。

## 真正进入 Phase 2 的唯一开关

只有部署环境明确设置：

`OCEANVER_INDEX_PHASE2=true`

并重新部署后，才进入 Phase 2。

## Phase 2 开启后会发生什么

### 第一批 12 页

`app/sitemap-allowlist.ts` 中的第一批页面：

- 根 metadata 允许 index / follow
- 不添加 X-Robots-Tag noindex
- 出现在 sitemap.xml

### 其他所有页面

即使根 metadata 已进入 Phase 2：

- proxy 仍添加 `X-Robots-Tag: noindex, follow`
- 不进入 sitemap
- 允许爬虫沿内链继续发现已开放的权威节点
- 不应该进入索引

## 为什么采用双保险

Phase 1：
- meta robots noindex
- response header noindex
- empty sitemap

Phase 2：
- allowlist 决定 sitemap
- proxy 决定非 allowlist 继续 noindex

这样不会因为某一个页面漏写 robots，就把全站意外放开。

## 开启 Phase 2 前禁止事项

未经明确确认，不要：

- 在 Vercel / production 环境设置 `OCEANVER_INDEX_PHASE2=true`
- 把根 metadata 永久改成 index=true
- 删除 proxy 的 allowlist 保护
- 把 sitemap 改成自动扫描全站路由
- 把第二批候选直接并入第一批

## 正式启用步骤

只有在第一批 12 页最终运行检查通过后：

1. 在 production 环境设置 `OCEANVER_INDEX_PHASE2=true`
2. 重新部署
3. 检查一个第一批页面的实际 HTML meta robots
4. 检查一个非 allowlist 页面是否返回 `X-Robots-Tag: noindex, follow`
5. 检查 sitemap.xml 只有 12 个 URL
6. 检查 robots.txt 仍可抓取
7. 再提交 Google Search Console / Bing

## 回滚

如果 Phase 2 上线后发现异常：

- 删除 `OCEANVER_INDEX_PHASE2`
- 或改为 `false`
- 重新部署

站点就回到 Phase 1：

- 全站 noindex
- 空 sitemap

不需要紧急逐页改代码。
