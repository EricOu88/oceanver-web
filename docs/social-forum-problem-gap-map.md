# Oceanver 小红书 / 论坛真实问题 → 问题网映射

最后更新：2026-10-07

来源：
- `Oceanver_BILL_CHECK_小红书真实问题_2026-09-28.md`
- `Oceanver_美国手机家庭计划_售前售后真实问题_2026-09-28.md`

## 使用边界

这些素材来自小红书帖子与评论中的真实提问、第一人称经历和编辑归纳。

- 价格、优惠、促销、处理结果不当作当前运营商规则。
- 不把单个用户经历改写成普遍保证。
- 只有具备独立判断路径、多个条件分支和明确人工边界的问题，才升级为独立节点。
- 其余问题优先补现有 Diagnosis / Bill Check / Family / FAQ。

---

## 一、核心结论

### 现有问题网已经覆盖较好的主题

- 宽带涨价 / Promotion 到期
- Xfinity / Spectrum / AT&T Fiber 老客涨价
- 宽带 AutoPay / Credit / 设备费
- 手机设备余额 / Trade-in / Bill Credit
- 多线总成本比较
- eSIM / SIM / 设备兼容
- 转网前设备余额
- 宽带换网 / serviceability / 安装受阻
- 宽带取消后的 Final Bill / 设备归还
- 手机优惠 / Credit / Reward 没到账

### 新暴露出的最高价值缺口

1. **家庭计划成员退出 / 户主失联 / 保号 / 号码控制权**
2. **转网后第一张手机账单远高于报价**
3. **手机套餐在网涨价 / 老套餐 / 多线涨幅怎么拆**
4. **国际漫游异常高账单**

其中第 1 个缺口最强，因为同一问题链被多个独立用户反复提出。

---

# 二、家庭计划 24 条问题映射

## A. 已有节点覆盖

| 问题组 | 原始 ID | 当前节点 | 处理 |
|---|---|---|---|
| 多线转网比总成本 | FP-P01 | `/cellphone/providers`、`/cellphone/family-plan-guide` | 已覆盖 |
| 赠机 / Trade-in / 高低档计划一起算 | FP-P02 | Family Guide、Promo Credit 节点、Providers | 已覆盖 |
| 未付清设备时转网 | FP-P03 | Family Guide、Diagnosis | 已覆盖 |
| 免费手机为何有月供 / 税费 | FP-P05、FP-A14 | Family Guide、Promo Credit | 已覆盖 |
| 4 线宣传价与真实总账单 | FP-P08、FP-A09 | Bill Optimization、Family Guide | 已覆盖 |
| eSIM vs 实体 SIM | FP-A15 | Diagnosis | 已覆盖 |
| Gift Card / Reward 没拿到 | FP-A13 | `/cellphone/faq/promo-credit-not-received` | 已覆盖 |

## B. 需要加强现有节点

| 问题组 | 原始 ID | 当前节点 | 建议 |
|---|---|---|---|
| 转网前预估首账单 | FP-P04 | Bill Optimization / Diagnosis | 增加“第一张账单”专项 section |
| 免激活费却被收费 | FP-A10 | Bill Optimization | 放入首账单核对 |
| AutoPay 首账未体现 | FP-A11 | Bill Optimization / Promo Credit | 放入首账单核对 |
| 首月保险何时取消 | FP-A12 | Bill Optimization | 作为附加服务 / 销售承诺核对 |
| 刚转网后账单远高预期 | FP-A16 | Bill Optimization / Diagnosis | 首账单专项入口 |

## C. 明确缺失节点

### 家庭计划成员退出 / 保号 / 户主权限

原始 ID：
- FP-P06
- FP-P07
- FP-A01
- FP-A02
- FP-A03
- FP-A04
- FP-A05
- FP-A06
- FP-A07
- FP-A08

统一问题：

> 我在 Family Plan 里不是户主，怎样退出、保留号码，或者把号码转到自己名下？

必须判断：

1. 你是户主还是成员？
2. 号码要保留还是不要？
3. 是留在同运营商，还是转去其他运营商？
4. 设备是否仍有余额 / Bill Credit？
5. 能否联系户主？
6. 是否拿得到 Account Number / Transfer PIN / 授权？
7. 接收新账户的人是否涉及身份 / 信用核验？
8. 人是否在美国境内？
9. 是要转责任、携号转网，还是直接取消线路？

这个问题不应该由“家庭计划价格页”顺带回答，值得成为独立节点。

---

# 三、33 条 BILL CHECK 问题映射

## 宽带

XHS-001–007、013–018、029–033 基本已经被以下节点覆盖：

- `/bill-optimization`
- `/internet/price-hike`
- `/internet/providers`
- `/internet/diagnosis`
- 各运营商 FAQ
- `/internet/faq/after-cancel-final-bill`

不建议再为每个品牌涨价案例建新页面。

## 手机

### 1. 手机在网涨价 / 老套餐 / 多线涨幅

来源：
- XHS-008–012
- XHS-019–023

现有承接：
- Bill Optimization
- Cellphone Diagnosis
- Family Guide
- Providers

问题不是缺 URL，而是需要增强：

> 手机套餐年度检查 / 在网涨价拆账

应该检查：
- 基础 plan
- 每线费用
- Free Line / line discount
- AutoPay
- 设备分期
- Bill Credit
- 税费
- 老套餐与新套餐差异

先加强 Bill Optimization，不急着独立建页。

### 2. 第一张手机账单远高于报价

来源：
- XHS-024
- XHS-025
- XHS-026
- FP-P04
- FP-A10
- FP-A11
- FP-A12
- FP-A16

这是强问题簇。

建议先在 Bill Optimization 建立完整“首账单核对” section：

- 激活日期
- prorated charge
- activation fee
- 设备税费 / 分期
- 保险
- AutoPay
- Promotion / Credit
- 礼品卡 / Reward
- 报价凭证
- 付款截止日 / dispute 状态

如果后续论坛 / 客服数据继续增长，再升级独立 URL。

### 3. 国际漫游高账单

来源：
- XHS-027
- XHS-028

现有承接：
- `/cellphone/diagnosis` international 分支

目前样本只有两条，先加强现有 International 分支，不独立建页。

---

# 四、下一步执行顺序

## P1 — 已完成

已建立：`/cellphone/family-plan-exit-account-holder`

主题：

> Family Plan 成员怎么退出、保号或转到自己名下？

这是当前最强新缺口。

## P2 — 已完成

已在 `/bill-optimization#first-mobile-bill` 增加：

> 转网后的第一张手机账单为什么比报价高？

不新增独立 URL。

## P3 — 已完成

已加强手机 Diagnosis 的 International 分支：

> 国际漫游异常收费怎么查？

不新增独立 URL。

## P4 — 观察池

手机套餐年度检查 / 在网涨价。

先放进 Bill Optimization，等更多真实问题证明它需要独立节点再升级。

---

# 五、判断结论

Google 评论主要暴露“结果型问题”：
- 涨价
- 退款
- 安装
- 取消
- Credit

小红书家庭计划则暴露“控制权型问题”：

> **号码到底是谁能控制？成员离开家庭计划时，怎样不丢号、不被设备余额和户主权限卡住？**

这是 Google 评论没有明显暴露出来、但对 Oceanver 问题网非常有价值的新节点。
