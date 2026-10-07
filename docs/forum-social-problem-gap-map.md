# Oceanver 论坛 / 小红书真实问题 → 问题网映射

最后更新：2026-10-07

来源：
- 小红书家庭手机计划 24 条真实问题样本
- 美卡论坛宽带与手机涨价长期讨论汇总

## 使用边界

- 用户帖子与评论用于发现真实问题，不作为当前运营商规则。
- 历史价格、促销、Free Line、AutoPay、设备优惠和取消政策不能直接当作当前答案。
- 不复制绕新客资格、虚假搬家、虚假身份等灰色流程。
- 新页面必须继续遵循：先判断、再算账、最后核实。

---

## 一、总体结论

这两套素材相比 Google 评论，多暴露了三类此前明显不足的问题：

| 新问题簇 | 证据强度 | 当前覆盖 | 处理 |
|---|---:|---|---|
| 家庭计划成员退出 / 户主失联 / 保号 / 账单责任转移 | 很强 | 分散在 Family Guide、Diagnosis、No-SSN | **新增独立节点** |
| 转网后首张手机账单高于报价 | 很强 | Bill Optimization + Credit 节点只能部分覆盖 | **候选独立节点** |
| 手机套餐涨价 / 旧套餐迁移风险 | 很强 | 只有 Diagnosis 的账单分支 | **新增通用手机涨价节点** |
| 免费手机 / Trade-in / Bill Credit | 强 | 已有专门节点 | 不新增 |
| 设备未付清能否转网 | 强 | Family Guide + Diagnosis | 加强即可 |
| eSIM / 实体 SIM | 中 | Diagnosis | 不新增 |
| 宽带 Promotion 到期 / 换网 | 很强 | Price Hike 已覆盖 | 不新增 |
| 宽带取消后 Final Bill / 设备 | 强 | 已新增取消后节点 | 不新增 |
| 宽带 + 手机捆绑互相影响 | 中高 | Bill Optimization 只部分覆盖 | 先加强跨业务检查 |
| 家庭组线路减少后每线价格变化 | 强 | Family Guide 只部分覆盖 | 加强 Family Guide |

---

## 二、小红书 24 条家庭手机计划问题映射

### A. 已有节点可以承接

| ID | 问题 | 当前节点 |
|---|---|---|
| FP-P01 | 多线从 AT&T 转到 Verizon/T-Mobile 怎么比较 | Family Guide / Providers |
| FP-P02 | 赠机是否需要 Trade-in、档位与抵扣怎么一起算 | Promo Credit Node / Providers |
| FP-P03 | 未付清设备能否整组转网 | Family Guide / Diagnosis |
| FP-P05 | 免费手机是否还有税、首付、月付 | Promo Credit Node / Bill Optimization |
| FP-A09 | 六条线账单结构如何拆 | Bill Optimization / Family Guide |
| FP-A13 | 转网奖励 / Gift Card 没拿到 | Promo Credit Node |
| FP-A14 | 免费手机为何仍有设备款 / 税费 | Promo Credit Node / Family Guide |
| FP-A15 | eSIM 与实体 SIM 不符合需求 | Diagnosis |

### B. 需要加强现有节点

| ID | 问题 | 加强位置 |
|---|---|---|
| FP-P04 | 转网前怎样估首账单、激活费、保险、AutoPay、设备 | Bill Optimization |
| FP-P08 | 宣传月费与实际税费、手续费、设备款不一致 | Bill Optimization |
| FP-A10 | 说免激活费但首账单仍收费 | Bill Optimization |
| FP-A11 | 首账单没 AutoPay 折扣 | Bill Optimization |
| FP-A12 | 为优惠加的保险何时可取消 | Bill Optimization / 人工边界 |
| FP-A16 | 刚转网后账单远高预期 | Bill Optimization + 候选首账单节点 |

### C. 明确缺失：家庭计划成员退出 / 户主权限

以下 8 条属于同一个问题簇：

- FP-A01 户主失联，成员怎么退出并保号
- FP-A02 无 SSN 能否接受账单责任转移
- FP-A03 无 SSN + 异地，如何拆分家庭组
- FP-A04 户主要解散家庭组，成员异地且无 SSN
- FP-A05 非户主能否自己转出，什么时候必须户主授权
- FP-A06 从家庭组携号去其他运营商或预付费，如何保号
- FP-A07 离境后如何远程取消或保号
- FP-A08 不要号码，只想退出并注销线路

同时售前的 FP-P06 / FP-P07 证明这个问题应该前置：

> 加入家庭计划前，就应确认户主权限、付款责任、设备分期归属和退出预案。

**结论：应建立独立节点。**

建议 URL：

`/cellphone/family-plan-exit-account-holder`

母问题：家庭多线

向上：
- Family Guide
- Cellphone FAQ
- Diagnosis

横向：
- No SSN
- Porting
- Device balance
- Prepaid/Postpaid

人工边界：
- 账户 owner / authorized user 状态
- Transfer of billing responsibility eligibility
- Transfer PIN
- SSN / identity verification
- 设备余额 / Promotion
- 号码转移后台状态

---

## 三、候选独立节点：首张手机账单为什么高于报价

多条小红书问题集中在：

- 激活费
- AutoPay 折扣未体现
- 保险
- Gift Card / Reward
- 设备税费 / 首付 / 分期
- 促销未开始
- 报价没有把一次性费用说清楚

建议母题：

> 刚转网，第一张手机账单为什么比报价高？

建议 URL 候选：

`/cellphone/faq/first-bill-higher-than-quote`

当前先不急着上线，先加强 Bill Optimization；如果论坛 / 客服再出现独立来源，则升级为独立节点。

---

## 四、明确缺失：手机套餐涨价总判断

美卡论坛反复出现：

- 每条线统一加价
- AutoPay 折扣缩水
- Surcharge 增加
- Free Line 到期
- 家庭组线路减少后每线价格变化
- 旧计划迁移到新计划
- 换计划可能失去 Free Line / Insider / 设备 Credit
- 旧套餐涨价但仍未必值得换

这些问题不能只靠一个通用 Diagnosis 分支承接。

建议建立：

`/cellphone/price-hike`

核心问题：

> 手机套餐涨价了，是继续留、改现有计划，还是换运营商？

应覆盖：

1. 先分清涨价来自哪一层
   - 基础月费
   - 每线费用
   - AutoPay
   - Surcharge / 税费
   - Free Line / 多线折扣
   - 设备 / Credit
2. 线路数变化为什么可能让每线更贵
3. 换新计划前要检查什么
   - 设备余额
   - Bill Credit
   - Free Line / 账户折扣
   - 国际 / hotspot 等实际需求
4. 什么时候先不换
5. 什么时候值得比较其他方案
6. 什么必须结合真实账户核实

不做运营商特定涨价页作为第一步。

---

## 五、论坛宽带问题：大部分已被当前网覆盖

| 论坛问题 | 当前节点 |
|---|---|
| Xfinity Promotion 到期 | Internet Price Hike |
| 每年都要谈价格 | Price Hike / Bill Optimization |
| 速度降级是否足够 | Home Network / Providers |
| Spectrum 反复涨价 | Price Hike / Spectrum FAQ |
| 同地址新客价更低 | Price Hike + 人工资格核实 |
| 取消是否按比例结算 | Cancel / Final Bill 节点 |
| 设备 / Unlimited Data 变化 | Bill Optimization / FAQ |
| 新网开通前何时取消旧网 | Bill Optimization move-both / Diagnosis |

因此宽带目前不应该继续大量新建涨价页。

---

## 六、跨业务新问题：取消宽带可能影响手机价格

美卡论坛的 Spectrum Mobile 讨论暴露了一个跨业务风险：

> 宽带和手机有 bundle / qualification 关系时，取消宽带可能让手机线价格或优惠变化。

当前建议：

先加强 `/bill-optimization`：

- 取消宽带前检查绑定的手机线
- 检查 mobile credit / free line / bundle condition
- 比较“宽带省下的钱”与“手机可能增加的钱”

暂时不独立建 `/internet-mobile-bundle/price-check`，除非后续出现更多运营商与更多真实来源。

---

## 七、执行顺序

### P1 — 立即建立
家庭计划退出 / 户主权限 / 保号节点

### P2 — 立即建立
手机套餐涨价总判断 `/cellphone/price-hike`

### P3 — 先加强，不建新 URL
Bill Optimization：
- 首账单高于报价
- 手机 / 宽带 bundle 依赖
- 取消服务前检查关联优惠

Family Guide：
- 线路减少后每线价格可能变化
- 加入陌生家庭组前的退出预案

### P4 — 观察池
首张手机账单高于报价独立节点

升级条件：
- 至少再有一个独立来源
- 或客服真实咨询持续出现
- 或现有 Bill Optimization 页面已经难以承接判断分支
