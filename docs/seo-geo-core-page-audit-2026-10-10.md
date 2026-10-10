# 双站核心页面 SEO / GEO 审计

检查时间：2026-10-10（美国太平洋时间）。依据：实际 HTTP GET、响应头、服务器输出 HTML，以及 Oceanver main 93e5c8a 的源代码。

## 结论

- Oceanver 第一批 12 页全部 HTTP 200、meta robots 为 index, follow、自指 canonical 正确。12 页均有 /contact 人工核实链接；没有直接电话链接不等于没有咨询入口。
- 首页及 AT&T 非白名单页返回 X-Robots-Tag: noindex, follow。HTML 的 index 不覆盖响应头 noindex；首页目前符合保留 noindex 的边界。
- 主站抽查 5 个核心页，均 HTTP 200、index, follow、自指 canonical 正确，电话为 510-651-1888。
- 已确认错误：Oceanver 12 页标题由页面完整标题再叠加根模板，品牌重复两次；本次仅将这些页面的 metadata.title 改成 absolute。
- 已确认主站错误：/cellphone/verizon 返回 404，却仍存在 sitemap 和 /cellphone/providers 推荐入口。主站代码本次未改。

## Oceanver 逐页结果

| 页面 | 状态 | canonical | 索引 | 咨询入口 | 本次修复 |
|---|---|---|---|---|---|
| [/bill-optimization](https://oceanver.com/bill-optimization) | 200 | 自指 | index, follow | /contact | 标题品牌去重 |
| [/internet/price-hike](https://oceanver.com/internet/price-hike) | 200 | 自指 | index, follow | /contact | 标题品牌去重 |
| [/cellphone/price-hike](https://oceanver.com/cellphone/price-hike) | 200 | 自指 | index, follow | /contact | 标题品牌去重 |
| [/cellphone/family-plan-exit-account-holder](https://oceanver.com/cellphone/family-plan-exit-account-holder) | 200 | 自指 | index, follow | /contact | 标题品牌去重 |
| [/cellphone/faq/promo-credit-not-received](https://oceanver.com/cellphone/faq/promo-credit-not-received) | 200 | 自指 | index, follow | /contact | 标题品牌去重 |
| [/internet/faq/after-cancel-final-bill](https://oceanver.com/internet/faq/after-cancel-final-bill) | 200 | 自指 | index, follow | /contact | 标题品牌去重 |
| [/cellphone/family-plan-guide](https://oceanver.com/cellphone/family-plan-guide) | 200 | 自指 | index, follow | /contact | 标题品牌去重 |
| [/internet/home-network-guide](https://oceanver.com/internet/home-network-guide) | 200 | 自指 | index, follow | /contact | 标题品牌去重 |
| [/cellphone](https://oceanver.com/cellphone) | 200 | 自指 | index, follow | /contact | 标题品牌去重 |
| [/internet](https://oceanver.com/internet) | 200 | 自指 | index, follow | /contact | 标题品牌去重 |
| [/cellphone/faq](https://oceanver.com/cellphone/faq) | 200 | 自指 | index, follow | /contact | 标题品牌去重 |
| [/internet/faq](https://oceanver.com/internet/faq) | 200 | 自指 | index, follow | /contact | 标题品牌去重 |

## 主站核心页结果

| 页面 | 状态 | canonical | 电话 |
|---|---|---|---|
| [/internet/providers](https://baymediastar.com/internet/providers) | 200 | 自指 | 510-651-1888 |
| [/internet/coverage](https://baymediastar.com/internet/coverage) | 200 | 自指 | 510-651-1888 |
| [/cellphone/providers](https://baymediastar.com/cellphone/providers) | 200 | 自指 | 510-651-1888 |
| [/cellphone/usa-sim-card-guide](https://baymediastar.com/cellphone/usa-sim-card-guide) | 200 | 自指 | 510-651-1888 |
| [/cellphone/att](https://baymediastar.com/cellphone/att) | 200 | 自指 | 510-651-1888 |

## 内容与证据差距

- Oceanver 账单总入口、手机涨价、宽带涨价等答案已能区分原因、条件、下一步和人工核实边界，可复用现有答案结构。
- 本次检查的 17 个核心页中，服务端输出的外部 http(s) 锚点未发现官方来源链接。这是证据可追溯性差距，不表示内容一定错误。应先在关键规则旁补充经过核实的官方出处，再考虑扩大页面数量。
- 主站美国手机卡办理指南仍把 T-Mobile 后付费家庭方案放进推荐路径；对照鸿达目前主推 Prepaid 的服务边界，应改成明确区分市场存在与鸿达可办理范围。
- 主站与 Oceanver 同时存在涨价、家庭网络、FAQ 主题，不能仅凭同题认定关键词竞争；下一轮逐页比较答案任务、GSC 查询和咨询结果后再决定合并或缩减。
- Oceanver robots.txt 允许抓取，但没有 Sitemap 声明；可在下一次索引配置维护时补充，不是本次发布阻断项。
- Oceanver sitemap 的 lastmod 使用统一审查日期，而非每页正文变更日期。后续不应因例行检查刷新整批 lastmod；应改用可追溯的正文更新日期或省略。

## 后续处理顺序

1. 主站：从 sitemap 移除 Verizon 404 页面，并处理运营商比较页的死链推荐；按主站 AGENTS.md 完成方案确认和 GitNexus 检查。
2. 主站：修正办理指南的 T-Mobile 可办理范围表述，保留价格、资格和覆盖核实边界。
3. Oceanver：优先给账单总入口、手机涨价、宽带涨价、优惠抵扣未到账、取消后的最终账单补官方证据。只引用核实的规则，不发布内部代理优惠。
4. 经授权并匿名化的真实案例再进入页面；本次没有虚构客户、节省金额或案例结果。
5. 获取 GSC / Bing 的查询与索引记录及实际咨询来源，再做标题和页面扩展决策。

## 验证与限制

- 本次可确认抓取响应和页面索引指令，不能据此宣称 Google 已收录或 AI 已引用。
- 未接入 GSC、GA4、Bing Webmaster 或电话咨询后台，不能确认流量、转化事件是否触发或有效咨询数量。
- 未进行浏览器交互、移动端布局、评论提交或电话拨号测试。
- 本次代码只修改 Oceanver 白名单 12 页的 metadata.title，未改变正文、canonical、robots、sitemap、电话、索引范围或报价。
