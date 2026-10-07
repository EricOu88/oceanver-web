# Oceanver Phase 2 第一批发布就绪清单

最后更新：2026-10-07

## 当前状态

Phase 1 仍然有效：

- 根布局 robots：index=false, follow=false
- sitemap：空数组
- robots.txt：允许爬虫访问页面，以便未来读取页面级索引指令
- Phase 2 第一批名单已经单独写入 sitemap-allowlist.ts
- 现在没有任何页面因为本次准备工作提前开放收录

## 第一批 12 页

### 核心答案页
1. /bill-optimization
2. /internet/price-hike
3. /cellphone/price-hike
4. /cellphone/family-plan-exit-account-holder
5. /cellphone/faq/promo-credit-not-received
6. /internet/faq/after-cancel-final-bill
7. /cellphone/family-plan-guide
8. /internet/home-network-guide

### 网络入口页
9. /cellphone
10. /internet
11. /cellphone/faq
12. /internet/faq

## 已完成的发布前检查

- 已有明确 canonical 或 canonical helper
- 已清理 Family Plan 退出主题的重复 URL
- 旧重复 URL 改为永久重定向
- 宽带涨价页 metadata 已从“只讲 Promotion 到期”升级为完整长期涨价判断
- 页面不以固定促销价作为答案
- 页面不承诺一定省钱、一定符合资格或固定到账时间
- 关键专项页都有“先不要做什么”或风险边界
- 关键专项页都有人工核实边界
- 手机与宽带之间已有 Bill Optimization 桥梁
- Phase 2 第一批不包含运营商品牌页，避免 Oceanver 被识别成促销/比价站

## 真正开放 Phase 2 前还要做的最后动作

1. 本地 TypeScript 检查
2. git diff --check
3. Production build
4. 第一批 12 页逐页打开确认无 500 / hydration 错误
5. 确认 canonical 输出
6. 确认 redirect 输出
7. 设计并启用“只让第一批 12 页 index”的页面级 robots 机制
8. sitemap 只输出第一批 12 页
9. 部署后抽查实际 HTML meta robots
10. 再提交 Google Search Console / Bing

## Phase 2 不应该做的事情

- 不把全站一次性改成 index
- 不把所有运营商详情 FAQ 一次放出去
- 不因为某个论坛帖子热就新建品牌促销页
- 不把历史优惠、客户价格或客服口头承诺写成当前政策
- 不为了 sitemap 数量而扩大索引面

## 发布后的观察周期

第一批开放后，先观察约 4–8 周：

- 哪些问题查询开始出现 Impression
- 哪些页开始获得自然点击
- Bing / AI 是否抓取专项答案
- 哪些节点能带来真实咨询
- 哪些页面有曝光但没有后续行为
- 哪些人工咨询反复集中在同一子问题

第二批是否开放，由第一批表现决定，不按固定日期自动开放。

## 当前结论

Oceanver 已经从“页面重构”进入“可控发布准备”阶段。

下一次真正切换到 Phase 2 时，目标不是“让整个站上线”，而是：

> 只放出 12 个最能代表 Oceanver 问题判断能力的页面。
