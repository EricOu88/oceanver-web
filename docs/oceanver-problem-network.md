# Oceanver 问题网络母表

最后更新：2026-10-07

## 一、总原则

Oceanver 不是“页面树”，而是“问题网”。

每个重要节点都应尽量具备四类连接：

1. **向上**：回到母题 / Hub / Diagnosis
2. **向下**：进入更具体的问题节点
3. **横向**：连接相关问题或相关判断
4. **向外**：网页无法确认时进入人工核实

新增内容时，不是“再写一篇文章”，而是：

> 给现有问题网增加一个节点，并把它与已有节点正确连接。

---

## 二、全站核心入口

| 节点 | 角色 | 向上 | 向下 / 横向 | 人工边界 |
|---|---|---|---|---|
| `/` | 全站入口 | — | 手机 Diagnosis、宽带 Diagnosis、宽带 Price Hike、案例 | 通过问题链进入 Contact |
| `/bill-optimization` | 手机 + 宽带共同账单母节点 | 首页 | 手机 Diagnosis / FAQ / Providers；宽带 Diagnosis / Price Hike / FAQ / Providers | `/contact` |
| `/why-us` | 案例 / 信任层 | 首页 | 根据案例回问题节点 | `/contact` |
| `/contact` | 最终人工核实出口 | 各问题节点 | — | 本身就是人工边界 |

---

# 三、手机问题网

## 1. 手机母节点

| 节点 | 角色 | 向上 | 向下 | 横向 | 人工边界 |
|---|---|---|---|---|---|
| `/cellphone` | 手机问题 Hub | 首页 | Diagnosis、FAQ、Family、No-SSN、Lifeline、Business vs Consumer | Providers | 通过后续节点进入 Contact |
| `/cellphone/diagnosis` | 手机问题诊断中心 | 手机 Hub | 账单、信号、SIM/eSIM、转号、设备分期、家庭多线、国际使用等判断 | FAQ、Family、Prepaid/Postpaid、Providers | 结果需要账户数据时进入 Contact |
| `/cellphone/faq` | 手机知识路由 Hub | 手机 Hub | 具体手机知识节点 | Diagnosis、Family、Providers、Lifeline、Business vs Consumer | 通过具体节点进入 Contact |
| `/cellphone/providers` | 已确定值得比较后的方案比较节点 | Diagnosis / 手机 Hub | 比较真实账单、设备、多线、信号、转网代价 | Family、FAQ | `/contact` |

## 2. 手机专项知识节点

| 节点 | 母问题 | 上级入口 | 横向相关 | 下一步 | 人工边界 |
|---|---|---|---|---|---|
| `/cellphone/family-plan-guide` | 家庭多线 | Hub / Diagnosis / FAQ | 设备余额、Bill Credit、转号、Providers | 逐条线路判断后再比较 | `/contact` |
| `/cellphone/faq/how-to-choose-us-cellphone-plan` | 手机方案怎么选 | FAQ | Diagnosis、Family、Prepaid/Postpaid | Providers | 通过 Providers / Contact |
| `/cellphone/faq/prepaid-vs-postpaid` | Prepaid vs Postpaid | FAQ / Diagnosis | Family、No-SSN | Providers | 当前资格由真实账户规则确认 |
| `/cellphone/faq/no-ssn-us-cellphone-internet` | 无 SSN / 开户资格 | 手机 FAQ | Prepaid/Postpaid、宽带 Hub | 手机 Diagnosis / 宽带 Hub | `/contact` |
| `/cellphone/government` | Lifeline | 手机 Hub / FAQ | Diagnosis | USAC 当前规则 | `/contact` |
| `/cellphone/att/business-faq` | Business vs Consumer 账户差异 | 手机 Hub / FAQ / 旧 Business URL | Diagnosis、Providers | 根据真实 plan tier / 使用条件判断 | `/contact` |

## 3. 手机退役 URL

| 旧 URL | 当前去向 |
|---|---|
| `/cellphone/prepaid` | `/cellphone/faq/prepaid-vs-postpaid` |
| `/cellphone/att-family` | `/cellphone/family-plan-guide` |
| `/cellphone/att/family-faq` | `/cellphone/family-plan-guide` |
| `/cellphone/att-business` | `/cellphone/att/business-faq` |
| `/cellphone/att` | `/cellphone/providers` |
| `/cellphone/tmobile` | `/cellphone/providers` |
| `/cellphone/ultra` | `/cellphone/providers` |
| `/cellphone/genmobile` | `/cellphone/providers` |

---

# 四、宽带问题网

## 1. 宽带母节点

| 节点 | 角色 | 向上 | 向下 | 横向 | 人工边界 |
|---|---|---|---|---|---|
| `/internet` | 宽带问题 Hub | 首页 | Diagnosis、FAQ、Home Network、Price Hike | Bill Check、Providers | `/contact` |
| `/internet/diagnosis` | 宽带诊断中心 | 宽带 Hub | 涨价、Wi-Fi、断网、设备、安装、地址等判断 | FAQ / Providers | `/contact` |
| `/internet/faq` | 通用宽带知识 Hub | 宽带 Hub | 具体宽带知识问题 | Diagnosis、Bill Check | `/contact` |
| `/internet/price-hike` | 已确认长期涨价后的判断节点 | 宽带 Hub / Bill Check | Xfinity / Spectrum / AT&T Fiber / Frontier 涨价知识 | Diagnosis、Providers | `/contact` |
| `/internet/providers` | 已确定值得比较后的宽带方案比较节点 | Diagnosis / Price Hike | 运营商判断页、Business vs Residential | FAQ | `/contact` |

## 2. 宽带专项知识节点

| 节点 | 母问题 | 上级入口 | 横向相关 | 下一步 | 人工边界 |
|---|---|---|---|---|---|
| `/internet/home-network-guide` | 入户宽带 vs 家庭 Wi-Fi | 宽带 Hub | Diagnosis、FAQ、Providers | 判断 Wi-Fi / Router / Mesh / 入户线路 | **待补直接人工出口** |
| `/internet/business-vs-residential` | Business vs Residential | Providers / 宽带 Hub | Diagnosis | Providers | `/contact` |
| `/internet/providers/faq` | 比较方法 FAQ | Providers | 通用 FAQ / Diagnosis | Providers | 通过 Providers / Contact |

## 3. 运营商判断节点

| 节点 | 角色 | 上级 | 详情知识 | 横向 | 人工边界 |
|---|---|---|---|---|---|
| `/internet/xfinity` | Xfinity 问题判断页 | Providers / Diagnosis | `/internet/xfinity/faq` + 20 个详情节点 | Price Hike / Bill Check | `/contact` |
| `/internet/spectrum` | Spectrum 问题判断页 | Providers / Diagnosis | `/internet/spectrum/faq` | Price Hike | `/contact` |
| `/internet/att-fiber` | AT&T Fiber 问题判断页 | Providers / Diagnosis / Hub | `/internet/att/fiber/faq` + 6 个详情节点 | Price Hike | `/contact` |
| `/internet/frontier` | Frontier 问题判断页 | Providers / Diagnosis | `/internet/frontier/faq` | Price Hike | `/contact` |

## 4. 运营商 FAQ 总览

| 节点 | 当前连接 | 状态 |
|---|---|---|
| `/internet/xfinity/faq` | Xfinity、Diagnosis、Price Hike、Providers、Contact | 完整 |
| `/internet/spectrum/faq` | Spectrum、Diagnosis | **待补 Providers / Contact / Price Hike** |
| `/internet/att/fiber/faq` | Diagnosis、Providers、Price Hike | **待补 Contact / AT&T Fiber 主节点** |
| `/internet/frontier/faq` | Frontier、Diagnosis、Providers、Price Hike、Contact | 完整 |

## 5. 宽带退役 / 兼容 URL

| 旧 URL | 当前行为 |
|---|---|
| `/internet/att-fiber/faq` | 永久重定向到 `/internet/att/fiber/faq` |
| `/internet-wifi/frontier/faq/[slug]` | 410 历史兼容 |
| `/internet-wifi/spectrum/faq/[slug]` | 410 历史兼容 |

---

# 五、手机与宽带之间的桥梁

目前三个核心跨网节点：

1. **`/bill-optimization`**
   - 手机账单 ↔ 宽带账单
   - 负责“费用为什么变贵”的共同入口

2. **`/cellphone/faq/no-ssn-us-cellphone-internet`**
   - 手机开户资格 ↔ 家庭宽带地址 / 身份 / 信用条件
   - 负责“没有 SSN 怎么判断”的跨业务问题

3. **`/contact`**
   - 所有网页无法确认的数据统一进入人工核实
   - 不承担第一层问题入口职责

---

# 六、当前第二轮补线清单

按优先级：

### P1 — 已完成

1. `/internet/spectrum/faq`
   - 已增加 `/internet/providers`
   - 已增加 `/internet/price-hike`
   - 已增加 `/contact`

2. `/internet/att/fiber/faq`
   - 已增加 `/internet/att-fiber`
   - 已增加 `/contact`

3. `/internet/home-network-guide`
   - 已增加明确人工边界与 `/contact`
   - 仅在“地址 / 设备兼容 / 线路 / 当前服务条件无法确认”时进入人工

### P2 — 下一阶段问题库增长

未来新增问题时优先补这些“问题节点”，而不是继续写泛文章：

#### 手机
- Trade-in Credit 没到账
- 设备余额 / 提前转网
- 号码转移失败 / Transfer PIN
- eSIM 激活失败
- 回国保号 / 国际使用
- 家庭成员是否应同时换运营商

#### 宽带
- Promotion 到期 / Credit 消失
- Router / Gateway / Mesh 判断
- 搬家：旧网什么时候取消
- 新地址 serviceability 异常
- Self-install 失败
- 设备归还 / Final Bill
- 断网后 credit / adjustment

---

# 七、节点新增规则

以后每新增一个页面，必须填这 7 项：

| 字段 | 必填内容 |
|---|---|
| 问题 | 用户真实提问 |
| 母问题 | 属于手机 / 宽带哪一类 |
| 上级入口 | 从哪里进入 |
| 横向相关 | 和哪些问题有关 |
| 下一步 | 用户下一步去哪 |
| 人工边界 | 哪些数据网页不能确认 |
| 状态 | Active / Redirect / 410 / Draft |

没有这 7 项，不新增页面。

---

# 八、Oceanver 的最终网络逻辑

```text
用户真实问题
    ↓
Hub
    ↕
Diagnosis
    ↕
知识节点 ←→ 相关知识节点
    ↕
Family / Bill Check / Price Hike / Home Network
    ↕
Providers / 运营商判断页
    ↕
具体 FAQ / 详情问题
    ↓
只有网页无法确认时
    ↓
人工核实
```

Oceanver 的目标不是拥有最多页面，而是：

> 用户或 AI 从任何一个问题进入，都能知道这是什么问题、为什么发生、下一步查什么、什么时候不要换、什么时候值得比较、什么时候必须人工核实。
