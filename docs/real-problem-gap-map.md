# Oceanver 真实问题 → 问题网映射（Google 评论 28 条）

最后更新：2026-10-07

来源：`Hongda-Google-reviews-classified.xlsx` 的 “Oceanver问题线索” 工作表。

## 使用边界

这些“提炼的问题”是编辑推导，不当作客户逐字原话。

- 历史价格、优惠、资格和结果不能当作当前规则。
- 评论中的“省钱 / 退款 / 降费”只代表客户当时报告的结果。
- 发布前仍需补充运营商、日期、原价/新价、资格、具体处理步骤、费用与结果。
- 目标不是把 28 条评论改成 28 篇文章，而是判断现有问题网是否覆盖真实用户问题。

---

## 一、总体结论

| 分类 | 数量 | 结论 |
|---|---:|---|
| 已有节点覆盖 | 14 | 不新增页面，继续通过现有 Hub / Diagnosis / Bill Check / Price Hike / Providers 承接 |
| 现有节点需要加强 | 9 | 优先补 section、checklist、横向链接，不急着新增 URL |
| 明确缺失节点 | 3 | 值得进入下一轮节点设计 |
| 不值得单独建页 | 2 | 作为流程提醒 / checklist / 自动提醒逻辑即可 |
| 合计 | 28 | — |

结论：

> 当前 Oceanver 第一版问题网已经覆盖了大多数真实问题。下一步不应该大量加页，而应该先补 3 个明显缺口，再加强 9 个现有节点。

---

## 二、28 条真实问题映射

| # | 评论编号 | 提炼问题 | 分类 | 当前承接节点 | 建议 |
|---:|---|---|---|---|---|
| 0 | G0005 | 涨价前如何检查账单并调整方案？ | 已有节点 | `/bill-optimization`、`/internet/price-hike` | 不新增页 |
| 1 | G0014 | 摄像头连不上 2.4GHz Wi-Fi 怎么办？ | 需要加强 | `/internet/home-network-guide`、`/internet/diagnosis` | Home Network 增加 IoT / 2.4GHz 小节；先不独立建页 |
| 2 | G0027 | 两条手机线转 AT&T 需要准备什么？ | 已有节点 | `/cellphone/family-plan-guide`、`/cellphone/diagnosis`、`/cellphone/providers` | Family Guide 强化转网准备清单即可 |
| 3 | G0031 | 网络设备反复出故障，先换设备还是换套餐？ | 已有节点 | `/internet/home-network-guide`、`/internet/diagnosis` | 已覆盖“设备 vs 入户线路 vs 方案”判断 |
| 4 | G0033 | 宽带账单可以通过哪些方式降低？ | 已有节点 | `/bill-optimization`、`/internet/price-hike`、`/internet/providers` | 不新增页 |
| 5 | G0035 | 手机与宽带怎样一起检查费用？ | 已有节点 | `/bill-optimization` | 这是 Bill Optimization 的核心职责 |
| 6 | G0040 | AT&T 外部线路导致装不了网，有哪些替代方案？ | 需要加强 | `/internet/diagnosis`、`/internet/att-fiber`、`/internet/providers` | 加强“安装受阻 / 外线 / serviceability 与替代方案”判断 |
| 7 | G0063 | 宽带频繁掉线，如何判断故障、换网并取消旧服务？ | 需要加强 | `/internet/diagnosis`、`/internet/providers`、运营商 FAQ | 增加“新网稳定后再取消旧网”的切换顺序 checklist |
| 8 | G0067 | Xfinity 多收了几个月网费，如何核对并申请退款？ | 已有节点 | `/internet/xfinity/faq/xfinity-billing-error-appeal`、`xfinity-overcharge-refund` | 已有详情节点 |
| 9 | G0070 | 转网后 AutoPay 折扣没生效、旧运营商收费怎么办？ | 需要加强 | `/cellphone/diagnosis`、`/bill-optimization` | 手机账单分支增加“新运营商折扣未生效 + 旧运营商残余收费”检查 |
| 10 | G0081 | 换机抵扣、转网奖励、自动付款优惠分别何时到账？ | **缺失节点** | 目前分散在 Diagnosis / Family / Providers | 建立“手机优惠 / Credit 到账异常”统一节点 |
| 11 | G0088 | 宽带合约到期涨价，如何比较续约与换网？ | 已有节点 | `/internet/price-hike`、`/internet/providers` | 不新增页 |
| 12 | G0126 | 新装宽带同时出现安装与账单问题怎么处理？ | 已有节点 | `/internet/diagnosis`、`/bill-optimization` | 通过两个节点交叉处理 |
| 13 | G0151 | 优惠到期前多久应开始检查新方案？ | 需要加强 | `/internet/price-hike` | 不给固定天数；增加“看到到期信号后先准备什么”的 checklist |
| 14 | G0160 | Xfinity 账单翻倍，如何判断是否换方案？ | 已有节点 | `/internet/xfinity/faq/xfinity-bill-sudden-increase`、`/internet/price-hike` | 已覆盖 |
| 15 | G0166 | 优惠到期后重新办理的资格和费用怎么核实？ | 需要加强 | `/internet/price-hike`、`/internet/providers`、`/contact` | 强化“重新办理资格属于实时账户/地址条件，必须核实” |
| 16 | G0174 | 办理前如何确认领取、归还和上门次数？ | **不单独建页** | 安装 / 设备 / Contact 流程 | 做“下单前确认事项” checklist，不值得独立 GEO 页面 |
| 17 | G0206 | 家庭宽带换网有哪些容易遗漏的费用？ | 已有节点 | `/internet/providers`、`/internet/price-hike` | Providers 已负责长期成本 |
| 18 | G0211 | 更换 Xfinity 方案怎样核算实际节省？ | 已有节点 | `/internet/price-hike`、`/internet/providers`、Xfinity FAQ | 不新增页 |
| 19 | G0227 | 换网前如何确认费用，出现争议后如何跟进？ | 需要加强 | `/internet/providers`、`/contact` | 增加“报价 / 订单 / 账单证据保存”与争议处理边界 |
| 20 | G0266 | 取消 Xfinity 后仍收到电话，应怎样核实账户状态？ | **缺失节点** | 现有 Xfinity 取消节点只覆盖取消前 | 建立“取消后账户 / Final Bill / 设备 / 状态确认”节点，优先做通用宽带而非只做 Xfinity |
| 21 | G0335 | 宽带账单降低后还需要检查哪些条件？ | 需要加强 | `/bill-optimization` | 增加“调整后复核” checklist：新月费、Credit、设备、账期、AutoPay |
| 22 | G0353 | 手机与宽带同时迁移如何避免漏取消旧服务？ | **缺失节点** | Bill Optimization 目前只连接两业务 | 建立跨业务“迁移 / 切换检查清单”节点或先做 Bill Optimization 子模块 |
| 23 | G0402 | 宽带续约前需要确认哪些条款？ | 已有节点 | `/internet/price-hike`、`/internet/providers` | 不新增页 |
| 24 | G0509 | AT&T 换 Xfinity，如何比较总费用？ | 已有节点 | `/internet/providers` | Providers 不按品牌排名，而按真实长期成本比较 |
| 25 | G0512 | 优惠快到期时，怎样安排换网与调整？ | 需要加强 | `/internet/price-hike` | 与 #13 合并为“到期前准备 checklist” |
| 26 | G0514 | 家庭宽带每年检查哪些内容？ | **不单独建页** | `/bill-optimization`、`/internet/price-hike` | 作为年度检查清单 / 自动提醒逻辑，不单独建 GEO 页 |
| 27 | G0520 | 套餐到期如何及时比较与更换？ | 已有节点 | `/internet/price-hike`、`/internet/providers` | 已覆盖 |

---

## 三、明确缺失的 3 个节点

### P1：手机优惠 / Credit 到账异常

真实问题来源：G0081。

建议母题：

> 手机优惠为什么还没到账？

覆盖：

- Trade-in Credit
- Bill Credit
- Port-in / switch reward
- AutoPay discount
- 多线优惠
- Promotion 生效周期
- 设备收件 / 验收状态
- 哪些情况继续等
- 哪些情况需要查账单 / 订单
- 哪些情况必须人工核实

上级：
- `/cellphone/diagnosis`
- `/cellphone/family-plan-guide`

横向：
- 设备余额
- 提前转网
- 家庭多线
- Providers

人工边界：
- Promotion eligibility
- Trade-in 验收
- 后台 reward / credit 状态
- 当前账户条款

**优先级：最高。**

---

### P2：宽带取消后账户 / Final Bill / 设备状态

真实问题来源：G0266，同时与 G0063、G0174、G0227 有交叉。

建议母题：

> 宽带取消以后，怎么确认账户真的结束了？

覆盖：

- Cancellation confirmation
- Final bill
- 设备归还
- 设备序列号 / 收据
- 旧账户是否仍 active
- 取消后继续来电
- 自动付款是否还会扣款
- 未结余额 / adjustment
- 什么时候需要再次联系运营商

建议先做**通用宽带节点**，Xfinity FAQ 横向链接过去，不先做一个只属于 Xfinity 的孤立页。

**优先级：高。**

---

### P3：手机 + 宽带一起迁移 / 切换检查清单

真实问题来源：G0353。

建议母题：

> 手机和宽带一起换时，怎样避免漏取消、重复收费和中断？

覆盖：

- 新服务先确认可用
- 哪个先开、哪个后关
- 手机号码转移
- 宽带新地址 serviceability
- 旧设备归还
- Final bill
- AutoPay
- Promotion / Credit
- 旧账户是否真正关闭

这个节点同时连接手机网与宽带网。

建议先作为 `/bill-optimization` 的子模块；如果论坛 / Reddit / 客服数据继续证明高频，再升级为独立 URL。

**优先级：中高。**

---

## 四、9 个“先加强，不新建 URL”的问题

### 手机

1. AutoPay 未生效 + 旧运营商残余收费
2. 两条/多条线路转网准备
3. 优惠到账的检查路径（在 P1 新节点建立前，先由 Diagnosis 承接）

### 宽带

4. IoT / 摄像头 / 2.4GHz Wi-Fi
5. 外线 / serviceability / 安装受阻
6. 新网开通后什么时候取消旧网
7. 优惠到期前准备清单
8. 换网费用争议的证据保存
9. 账单降低后的复核清单

原则：

> 先把这些问题加进已有节点的 section、checklist、横向链接；只有真实问题量继续增加时才升级为独立页。

---

## 五、两个不值得单独建页的问题

### 1. 领取 / 归还 / 上门次数

价值在流程提醒，不在搜索主题。

放到：
- 安装 checklist
- 设备归还 checklist
- 人工核实前准备

### 2. 每年什么时候检查宽带

不应该给统一固定月份或天数。

更适合：
- Bill Check 的年度检查清单
- 运营自动提醒
- CRM / 自动化任务

而不是单独做一个 GEO 页面。

---

## 六、下一步执行顺序

### 第一批只做 1 个新节点

先做：

> **手机优惠 / Credit 到账异常**

原因：

- 当前问题网缺口最明显
- 同时覆盖 Trade-in、设备分期、家庭计划、转网和账单
- 与真实客户问题直接对应
- 对 GEO / AI 问答非常适合
- 不需要发布固定价格
- 能自然进入人工账户核实

### 第二批

先加强现有宽带节点：

- Home Network：2.4GHz / IoT
- Diagnosis：安装受阻 / 外线 / serviceability
- Price Hike：到期前准备
- Bill Optimization：调整后复核

### 第三批

再决定是否新增：

> 宽带取消后账户 / Final Bill / 设备状态

### 第四批

把手机 + 宽带迁移 checklist 先放进 Bill Optimization，观察真实问题量后再决定独立 URL。

---

## 七、判断标准

以后真实问题进入问题库时，按这个顺序判断：

1. 现有页面已经能完整回答？
   - 是 → 不新增。
2. 现有页面只缺一个 section / checklist？
   - 是 → 加强现有节点。
3. 问题有独立判断路径、多个条件分支、明确人工边界？
   - 是 → 候选独立节点。
4. 只是流程细节或固定时间提醒？
   - 是 → 不单独建页。
5. 是否有至少两个独立真实来源支持？
   - 没有 → 先放观察池，不急着建页。

