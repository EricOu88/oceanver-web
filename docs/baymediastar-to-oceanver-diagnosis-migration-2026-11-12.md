# BayMediaStar → Oceanver 已撤下诊断内容迁移对照表（准备稿）

核对日期：2026-11-12。源站 PR：BayMediaStar #283、#284、#286。迁移总任务：Oceanver #88。

**仅作为下一阶段实施清单；尚未迁移或发表这些内容。** 迁移前须读取历史原文、核实运营商来源及更新时间，并与现有 Oceanver 内容逐段查重。

| 主站原始 URL 或来源 | 归属与现有落点 | 后续动作 | 当前状态 |
| --- | --- | --- | --- |
| `/internet/price-hike` 旧专题 | Oceanver `/internet/price-hike` | 核对源版中的账单变化步骤，查重后仅补缺失说明；办理前价格内容保留主站 | 待逐项核对 |
| `/bill-optimization` 旧专题 | Oceanver `/bill-optimization` | 整理账单逐项对照、一次性费用与证据记录，保留具体账户争议由运营商处理说明 | 待逐项核对 |
| `/internet/spectrum/faq/spectrum-price-increase` 与旧 Spectrum 账单 FAQ | Oceanver `/internet/spectrum/faq`、`/internet/spectrum/bill-increase-20` | 优先增强现有文章；检查优惠到期、设备费、AutoPay、税费；“多 $20”须明确为示例非普遍涨幅 | 待查重 |
| `/cellphone/att/price-increase` 旧 AT&T 专题 | Oceanver `/cellphone/price-hike` | 核验旧计划官方调价日期、适用计划名、单/多线影响、bill credits 与分期；必要时独立建 AT&T 专题 | 待核验来源 |
| Xfinity FAQ 删除的涨价、断网和最终账单项目 | Oceanver 现有综合账单页，Xfinity 专题待确认路由 | 先检查是否已有 Xfinity 文章，新增内容仅围绕已有客户的费用差异和官方故障确认 | 待查重 |
| AT&T Fiber FAQ 删除的最终账单项目 | Oceanver `/internet/price-hike` 或适当运营商专题 | 重点留存最后账单、设备归还及争议记录；不混入新装报价 | 待审查 |
| Frontier 等旧账单异常/故障 FAQ、旧博客 | Oceanver 相关运营商或通用诊断文章 | 审核源页面是否仍活跃及历史流量，逐项补充 | 待发现与核实 |

## 必须遵守的边界
- BayMediaStar 主站三处首页「账单涨价后重新比较」「解决账单涨价」「办理后协助账单涨价」由业务方**明确要求原文保留**，不得在迁移中改动。
- 主站可保留办理前价格、优惠期限、设备与安装费、重新比较套餐的说明；**不把这些销售信息迁成重复诊断文章**。
- Oceanver 中文撰写；账单上实际存在的英文费用名称可在首次出现时中文解释；不使用英文客服模板。
- Oceanver 当前 Phase 2 可索引白名单只包含 `/internet/price-hike`、`/cellphone/price-hike`。新增/其他页面默认 `noindex`，不得未经授权开放。
- 实际所属主体 Bay Media Star Inc. 应如实披露，两站电话不得混用：主站 +1-510-651-1888，副站 +1-510-849-6191。
- 避免把未经核实的 2026 年价格、涨幅、折扣、客服承诺和假设账单当作真实案例。
- 发布前逐页核对可见 FAQ 与 JSON-LD、canonical、站内链接、重定向链和 Vercel 生产部署。

## 执行次序
1. 源内容与 Git 历史归档、逐项标注“可迁移 / 重复 / 办理前应留主站”。
2. 对照 Oceanver 已有页面，制作差异清单、引用官方链接与最后核对日期。
3. 分运营商增补，经 Vercel 预览验证后再提交可供审阅的 PR。
4. 待逐页确认后合并，不在本准备稿中直接发布新诊断内容。
