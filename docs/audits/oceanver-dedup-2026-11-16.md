# Oceanver.com 全站内容去重审计记录

**核对日期：2026-11-16（美西）**  
**GitHub：** `EricOu88/oceanver-web`  
**审查基线：** `d08a8de59946c07f570b99223fd817e0eafb20d2`  
**范围：** 57 个 App Router 页面入口、17 个 client 组件（包含后台组件）、2 篇 `content/blog` 正文、13 个 `content/qa` JSON 文件，以及 Xfinity FAQ 数据文件中的 32 条问题。

## 原则

1. Oceanver 保留诊断/解释方向：账单涨价、设备费、Discount/AutoPay、网速和 Wi-Fi、故障、账户、取消及最终账单。不要搬入 BayMediaStar 的新办、报价或促销转化内容。
2. 同页重复相同检查清单、重复提示或同一问题解释时，保留更完整的一份；其他地方用简短说明和**站内链接**分流。
3. 同主题但意图不同（运营商独有条款、账单如何查、何时联系官方、是否值得换网、家庭/商业、不同设备）的内容不是无效重复，不一刀切。
4. 不删除金额/适用条件/明确的政策日期，不随意改官方链接、Schema、Canonical、URL、重定向、robots、noindex 或历史索引计划。
5. 不在本站添加 BayMediaStar 的 URL、电话、品牌引导，不为减少两站关键词冲突而改写真实事实。

## 已实施并合并

| PR | 页面/源码 | 结果 |
|---|---|---|
| [#95](https://github.com/EricOu88/oceanver-web/pull/95) | `/internet/price-hike` → `app/internet/price-hike/PriceHikeClient.tsx` | 删除重复六项检查清单；合并两张一次性 vs 持续月费卡片 |
| [#95](https://github.com/EricOu88/oceanver-web/pull/95) | `/internet/spectrum/price-increase` | 原先五项预览与18项详细清单重叠，改为简要说明并跳转同页18项清单 |
| [#96](https://github.com/EricOu88/oceanver-web/pull/96) | `/cellphone/price-hike` | 家庭减线重复说明合并进证据卡；移除再次列出的核实事项 |

以上改动保留各品牌独立原因、官方规则、资费适用限制、FAQ、咨询电话 `510-849-6191`、内部诊断路径。两批 PR 已通过 Vercel 预览构建及生产 READY 核验。

## 对尚未删除的页面如何判断

- `/bill-optimization` 是总入口，只解释基本核账步骤并引导到各品牌详情；不应复制18项品牌清单。
- AT&T、Frontier、Spectrum、Xfinity 的专项价格/FAQ 之间存在共通条目，但以产品具体条件、账单证据、取消设备规则区分；不能直接互相覆盖。
- Spectrum `/bill-increase-20` 的收费类别和“六步核对”分别承担**分类**与**执行步骤**功能。
- 家庭手机退出户主、Free Line、Trade-in/账单抵扣对应不同用户动作，保留独立说明。
- Xfinity FAQ 数据中的 32 条问题标题无完全相同条目；已确认其分组检索和详情导航按不同问题组织。
- 13 个 QA JSON 内，逐文件未发现重复文档 id 或完全相同的同文件 question variant；允许同一答复包含不同合法提问变体。
- 2 篇博客各自针对手机账单/宽带账单不同问题，未发现完全相同的长段落。

## 逐页入口台账（含重定向、后台和动态模板）

| 页面源码 | Git 树记录字节 | 结论 |
|---|---:|---|
| `app/about/page.tsx` | 5250 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/admin/ai/page.tsx` | 4166 | 后台工具：保留 |
| `app/admin/community/page.tsx` | 243 | 后台工具：保留 |
| `app/bill-optimization/page.tsx` | 849 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/blog/[slug]/page.tsx` | 6841 | 动态模板：检查问题入口，实际正文按 FAQ/博客数据管理 |
| `app/blog/page.tsx` | 635 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/cellphone/att-business/page.tsx` | 164 | 重定向或短入口：保留 SEO 跳转 |
| `app/cellphone/att-family/page.tsx` | 163 | 重定向或短入口：保留 SEO 跳转 |
| `app/cellphone/att/business-faq/page.tsx` | 9274 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/cellphone/att/family-faq/page.tsx` | 161 | 重定向或短入口：保留 SEO 跳转 |
| `app/cellphone/att/page.tsx` | 152 | 重定向或短入口：保留 SEO 跳转 |
| `app/cellphone/coverage/bay-area-los-angeles/page.tsx` | 145 | 重定向或短入口：保留 SEO 跳转 |
| `app/cellphone/diagnosis/page.tsx` | 1593 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/cellphone/family-plan-exit-account-holder/page.tsx` | 16897 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/cellphone/family-plan-guide/page.tsx` | 20528 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/cellphone/faq/family-plan-leave-keep-number/page.tsx` | 185 | 重定向或短入口：保留 SEO 跳转 |
| `app/cellphone/faq/how-to-choose-us-cellphone-plan/page.tsx` | 10153 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/cellphone/faq/no-ssn-us-cellphone-internet/page.tsx` | 10070 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/cellphone/faq/page.tsx` | 9644 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/cellphone/faq/prepaid-vs-postpaid/page.tsx` | 10464 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/cellphone/faq/promo-credit-not-received/page.tsx` | 12127 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/cellphone/genmobile/page.tsx` | 152 | 重定向或短入口：保留 SEO 跳转 |
| `app/cellphone/government/page.tsx` | 109 | 重定向或短入口：保留 SEO 跳转 |
| `app/cellphone/page.tsx` | 955 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/cellphone/prepaid/page.tsx` | 162 | 重定向或短入口：保留 SEO 跳转 |
| `app/cellphone/price-hike/page.tsx` | 19362 | PR #96: 合并家庭减线解释，移除再次出现的核实清单 |
| `app/cellphone/providers/page.tsx` | 12580 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/cellphone/tmobile/page.tsx` | 152 | 重定向或短入口：保留 SEO 跳转 |
| `app/cellphone/ultra/page.tsx` | 152 | 重定向或短入口：保留 SEO 跳转 |
| `app/contact/page.tsx` | 1352 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/att-fiber/faq/page.tsx` | 152 | 重定向或短入口：保留 SEO 跳转 |
| `app/internet/att-fiber/page.tsx` | 1464 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/att-fiber/price-increase/page.tsx` | 22569 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/att/fiber/faq/[slug]/page.tsx` | 7928 | 动态模板：检查问题入口，实际正文按 FAQ/博客数据管理 |
| `app/internet/att/fiber/faq/page.tsx` | 2287 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/business-vs-residential/page.tsx` | 8828 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/diagnosis/page.tsx` | 1459 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/faq/after-cancel-final-bill/page.tsx` | 10163 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/faq/page.tsx` | 13934 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/frontier/faq/page.tsx` | 5242 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/frontier/page.tsx` | 862 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/frontier/price-increase/page.tsx` | 20276 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/home-network-guide/page.tsx` | 13164 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/page.tsx` | 13018 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/price-hike/page.tsx` | 1692 | PR #95: 页面内容由 PriceHikeClient 渲染，删除重复六项检查、合并两张一次性/持续收费卡 |
| `app/internet/providers/faq/page.tsx` | 5004 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/providers/page.tsx` | 17090 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/spectrum/bill-increase-20/page.tsx` | 15476 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/spectrum/faq/page.tsx` | 14370 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/spectrum/page.tsx` | 1420 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/spectrum/price-increase/page.tsx` | 15669 | PR #95: 删除重复五项初查，保留18项 Spectrum 专项清单、例子、联络方法 |
| `app/internet/xfinity/faq/[slug]/page.tsx` | 14089 | 动态模板：检查问题入口，实际正文按 FAQ/博客数据管理 |
| `app/internet/xfinity/faq/page.tsx` | 2559 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/internet/xfinity/page.tsx` | 2796 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/page.tsx` | 5319 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/privacy-policy/page.tsx` | 1822 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |
| `app/why-us/page.tsx` | 1265 | 已核查标题/章节/问题路径；不同诊断任务，未发现明确可安全删除的相同模块 |

## 组件检查清单

| 组件 | 处理状态 |
|---|---|
| `app/admin/community/CommunityAdminClient.tsx` | 后台，不改 |
| `app/bill-optimization/BillOptimizationClient.tsx` | 主要标题与关键区块审查；无安全删除的完全重复模块 |
| `app/blog/[slug]/BlogPostClient.tsx` | 主要标题与关键区块审查；无安全删除的完全重复模块 |
| `app/blog/BlogListClient.tsx` | 主要标题与关键区块审查；无安全删除的完全重复模块 |
| `app/cellphone/CellphoneClient.tsx` | 主要标题与关键区块审查；无安全删除的完全重复模块 |
| `app/cellphone/diagnosis/DiagnosisClient.tsx` | 主要标题与关键区块审查；无安全删除的完全重复模块 |
| `app/contact/ContactClient.tsx` | 主要标题与关键区块审查；无安全删除的完全重复模块 |
| `app/HomeClient.tsx` | 主要标题与关键区块审查；无安全删除的完全重复模块 |
| `app/internet/att-fiber/AttFiberClient.tsx` | 主要标题与关键区块审查；无安全删除的完全重复模块 |
| `app/internet/att/fiber/faq/ATTFiberFAQClient.tsx` | 主要标题与关键区块审查；无安全删除的完全重复模块 |
| `app/internet/diagnosis/DiagnosisClient.tsx` | 主要标题与关键区块审查；无安全删除的完全重复模块 |
| `app/internet/frontier/FrontierClient.tsx` | 主要标题与关键区块审查；无安全删除的完全重复模块 |
| `app/internet/price-hike/PriceHikeClient.tsx` | #95 已精简 |
| `app/internet/spectrum/SpectrumClient.tsx` | 主要标题与关键区块审查；无安全删除的完全重复模块 |
| `app/internet/xfinity/faq/XfinityFAQClient.tsx` | 主要标题与关键区块审查；无安全删除的完全重复模块 |
| `app/internet/xfinity/XfinityClient.tsx` | 主要标题与关键区块审查；无安全删除的完全重复模块 |
| `app/why-us/WhyUsClient.tsx` | 主要标题与关键区块审查；无安全删除的完全重复模块 |

## 后续验证边界

- 该台账已对页面入口、主要 JSX 模块、FAQ 标题和数据项作审视，但**不能视作跨所有生成 URL 的逐字全文相似度报告**，尤其动态 FAQ 的每个 URL 还需查实际生产 HTML 和索引状态。
- Vercel READY 只代表构建部署成功；不等于逐个页面手机/桌面端截图和内部链接已全部完成手工回归测试。
- SEO/GEO 指标需要 Google Search Console/Bing Webmaster 的后续数据，不能因删除几个重复模块就宣称排名提高。
