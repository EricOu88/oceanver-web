# Oceanver Knowledge Base — Single Source of Truth

## 唯一正式知识库

Oceanver 的客户问题、员工一线问题、FAQ、论坛问题、真实案例、售前和售后问题统一存放于 `content/qa/`。这是 AI 问答、FAQ、`/why-us` 案例、BILL CHECK、DECIDE、SOLVE 及后续 GEO 问题内容的唯一数据源。新增资料前必须先检查并复用这里的内容。

- Schema：`content/qa/schema.json`
- AI 索引构建入口：`ai/index/buildIndex.ts`
- 索引结果：`ai/index/manifest.json`

除非用户明确要求改变架构，禁止建立 `app/data/cases/`、`caseKnowledgeBase.ts`、独立 FAQ 数据库、独立案例数据库或第二套问题库。页面和功能不得各自维护重复答案。

## 固定入库触发语

用户说“放进知识库”“把这些问题加入知识库”“整理进知识库”或“这批资料进知识库”时，默认执行下列完整流程，不询问知识库位置，也不只保存原始文件：

1. 阅读资料，并检查 `content/qa/` 中相同或高度相似的问题；去重后只新增真正不同的问题，必要时更新旧条目。
2. 保留真实用户的口语问法；可改善可读性，但不要全部改成客服话术。每条至少保留 3 个自然的 `question_variants`。
3. 删除或匿名化员工姓名、员工微信昵称、客户姓名、具体地址、客户电话、内部备注，以及号码 `510-651-1888`。Oceanver 对外电话固定为 `510-849-6191`。
4. 按现有 schema 填写并判断 `provider`、`category`、`stage`、`tags`；`stage` 使用 `bill-check`、`decide` 或 `solve`。
5. 将答案整理为中性、可核验的标准说明，涵盖核心判断、原因、先检查什么、用户可自行采取的步骤、仍无法确定的部分及何时需要进一步核实。不要照抄员工原答，也不要作无依据的承诺。
6. 判断时效性。价格、促销、bill credit、返现、trade-in、设备数量、安装费、解约费、退换期限、签收规则、提前付清规则、运营商资格、套餐名称及政策期限等内容默认标为 `review_status: "time_sensitive"`，不得写成永久事实。资料明显不确定时标为 `needs_review`；稳定且无明显政策风险时才标为 `approved`。
7. 判断 `public_case`。只有适合公开展示且已去隐私的条目才标为 `true`；其他标为 `false`。适合公开评估的主题包括账单涨价、地址覆盖异常、安装、Wi-Fi 故障、手机分期、eSIM、转网、信号、套餐决策和 trade-in/bill credit 问题。
8. 写入最合适的现有 `content/qa/` JSON 文件。可按需使用 `mobile/`、`internet/`、`billing/`、`decision/` 子目录；不要为少量问题创建大量文件，也不要为了整理而批量搬动旧文件。
9. 若新增字段，向后兼容地更新 `content/qa/schema.json`；若影响类型，同步 `ai/index/types.ts`，保持现有 `buildIndex` 和 retrieval 可用。
10. 运行现有索引流程，检查 `ai/index/manifest.json` 的数量变化，并验证 JSON 可解析、ID 不重复、分类正确、没有隐私或明显内部备注。
11. 执行 `git diff --check`、`npx tsc --noEmit`、相关 ESLint 和 `npm run build`，说明失败是本轮引入还是已有问题。

## 公开案例筛选

`/why-us` 不得硬编码案例，只能从 `content/qa/` 读取并筛选 `public_case === true` 且 `review_status === "approved"` 的条目。`time_sensitive` 条目默认不公开；只有明确标出时效性并完成当前政策复核后才可例外展示。

## 范围边界

入库本身不授权创建公开路由，也不授权修改 robots、noindex、电话、Supabase 或 Community。除非用户明确要求，不自动 commit 或 push。不要顺手重构知识库或移动大量旧文件。

## 入库完成报告

每次完成“放进知识库”后，按以下顺序报告：

1. 原始资料条数
2. 去重后新增条数
3. 更新的旧问题条数
4. 写入的 JSON 文件
5. 各分类数量
6. `approved`、`needs_review`、`time_sensitive` 数量
7. `public_case: true` 数量
8. 是否发现并清除隐私信息或 `510-651-1888`
9. AI index 是否重建成功
10. manifest 最新 count
11. build/typecheck 结果
12. 是否 commit/push（默认否）
