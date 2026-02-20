// AT&T Fiber FAQ 数据
// 四大分类：住家售前、住家售后、商业售前、商业售后

export interface FAQItem {
  question: string
  answer: string
  id?: string
  isHot?: boolean
}

export interface FAQSubCategory {
  id: string
  title: string
  items: FAQItem[]
}

export interface FAQMainCategory {
  id: string
  title: string
  shortTitle: string
  description: string
  subCategories: FAQSubCategory[]
}

// ==================== 住家光纤 · 售前 ====================
export const residentialPreSale: FAQMainCategory = {
  id: 'residential-pre-sales',
  title: '住家光纤 · 售前',
  shortTitle: '住家售前',
  description: '安装前你想了解的问题',
  subCategories: [
    {
      id: 'coverage-install',
      title: '地址覆盖与安装',
      items: [
        {
          question: '我的地址能装 AT&T 吗？',
          answer: `AT&T Fiber 覆盖范围比 Cable 小，主要在湾区部分城市：
• Fremont、Milpitas、San Jose、Sunnyvale、Santa Clara 等
• 即使同一街道，不同门牌号覆盖可能不同

我们提供免费地址覆盖查询，1 分钟内确认结果。`,
          isHot: true,
        },
        {
          question: '公寓能装 AT&T 吗？',
          answer: `公寓能否安装取决于：
• 物业是否允许
• 大楼是否已有 AT&T 光纤线路
• 地址是否在覆盖范围内

很多新公寓已经预装光纤，安装更方便。老旧公寓可能需要物业批准。`,
        },
        {
          question: 'AT&T 安装需要多长时间？',
          answer: `安装时间线：
• 查询覆盖：即时
• 申请办理：1-2 天
• 预约安装：2-4 周

如果地址已有光纤线路，可能 1 周内完成。首次铺设需要技术人员上门施工。`,
        },
        {
          question: '安装费用是多少？',
          answer: `新用户通常免安装费！可能涉及的费用：
• 设备费：$10/月（租用路由器）或自备
• 激活费：$0-$35（部分套餐免）

促销期间经常有免安装费活动。`,
        },
        {
          question: '可以自己安装吗？',
          answer: `AT&T Fiber 需要专业安装，无法 DIY：
• 需要铺设光纤入户
• 需要安装 ONT（光网络终端）设备
• 需要专业设备调试

安装通常 1-2 小时完成。`,
        },
      ],
    },
    {
      id: 'plan-selection',
      title: '套餐选择',
      items: [
        {
          question: 'AT&T 有哪些套餐？',
          answer: `AT&T Fiber 主要套餐：

【Internet 300】$55/月
• 300Mbps 上下行对称
• 适合 1-3 人家庭

【Internet 500】$65/月
• 500Mbps 上下行对称
• 适合 3-5 人家庭

【Internet 1000】$80/月
• 1Gbps 上下行对称
• 适合重度用户、远程办公

【Internet 2000/5000】$110-$180/月
• 超高速，适合专业需求`,
          isHot: true,
        },
        {
          question: '住家和商业宽带有什么区别？',
          answer: `主要区别：

【住家 Fiber】
• 价格更便宜
• 无 SLA 保障
• 标准技术支持

【商业 Fiber】
• 有 SLA 服务保障
• 静态 IP 地址
• 优先技术支持
• 价格高 30-50%

普通家庭选住家即可，对稳定性要求极高选商业。`,
        },
        {
          question: '应该选择多少速度？',
          answer: `速度选择建议：

【300Mbps】够用场景
• 1-2 人上网
• 日常浏览、视频

【500Mbps】推荐
• 3-5 人家庭
• 多设备同时使用

【1000Mbps】重度用户
• 远程办公 + 视频会议
• 游戏 + 4K 流媒体
• 大文件上传

Fiber 上下行对称，上传也很快！`,
        },
        {
          question: 'AT&T 有流量上限吗？',
          answer: `AT&T Fiber 没有流量上限！

这是相比 Cable 宽带的重要优势：
• 无限下载、上传
• 不会因流量超标降速
• 不会额外收费

放心使用，不必担心流量。`,
          isHot: true,
        },
        {
          question: '可以只装宽带不办手机吗？',
          answer: `可以，完全独立：
• Fiber 和手机是分开的服务
• 不需要捆绑
• 单独办理宽带即可

不过，如果同时办理手机，可能有额外折扣（$10-20/月）。`,
        },
      ],
    },
    {
      id: 'pricing-promo',
      title: '价格与优惠',
      items: [
        {
          question: '新用户有哪些优惠？',
          answer: `新用户常见优惠：
• 前 12 个月促销价（低 $10-30/月）
• 免安装费（$99 价值）
• 免费路由器或设备折扣
• 免激活费

优惠经常更新，我们帮你申请当前最佳方案。`,
          isHot: true,
        },
        {
          question: '促销价格会持续多久？',
          answer: `促销价格通常持续 12 个月：
• 第 1-12 个月：促销价
• 第 13 个月起：恢复标准价（涨 $10-30）

我们可以在到期前帮你重新申请优惠！`,
        },
        {
          question: '可以锁定价格吗？',
          answer: `目前没有永久锁价方案，但可以：
• 签长期合约获得更低价格
• 到期前重新协商
• 申请老客户优惠

我们帮你在涨价前处理续约。`,
        },
        {
          question: '设备费用是多少？',
          answer: `设备选项：

【租用 AT&T 路由器】
• $10/月
• 包含技术支持
• 设备故障免费换

【自备路由器】
• 一次性购买（$100-300）
• 长期更省钱
• 需确认兼容性

建议：用一年以上选自备设备更划算。`,
        },
      ],
    },
    {
      id: 'no-ssn',
      title: '无 SSN 办理',
      items: [
        {
          question: '没有 SSN 可以办理 AT&T 吗？',
          answer: `可以！我们专门提供无 SSN 办理服务：
• 支持护照 + 地址证明办理
• 可能需要押金（可退）
• 全程中文协助

新移民、留学生、访问学者都可以办！`,
          isHot: true,
        },
        {
          question: '无 SSN 需要多少押金？',
          answer: `押金根据套餐不同：
• 通常 $50-$200
• 账单正常 12 个月后可退
• 部分促销可减免

押金不是额外费用，是信用保证金。`,
        },
        {
          question: '新移民可以办吗？',
          answer: `完全可以！我们专门服务新移民：
• 无 SSN 可办
• 无信用记录可办
• 中文全程协助
• 帮你准备所有材料

刚到美国就能用上网络！`,
          isHot: true,
        },
        {
          question: '需要什么材料？',
          answer: `无 SSN 办理需要：
• 护照（或其他身份证明）
• 地址证明（租房合同 / 水电账单）
• 支付方式（信用卡 / 银行账户）
• 押金（如需要）

材料不全？我们帮你想办法！`,
        },
        {
          question: '无 SSN 办理流程复杂吗？',
          answer: `不复杂！我们全程代办：
1. 你提供材料
2. 我们帮你填表、提交
3. 预约安装时间
4. 安装当天在家等候

通常 1-2 天完成申请，整个过程中文沟通。`,
        },
      ],
    },
    {
      id: 'contract',
      title: '合约与期限',
      items: [
        {
          question: 'AT&T 有合约吗？',
          answer: `大部分促销套餐有合约：
• 通常 12 个月
• 提前解约需付违约金
• 无合约套餐价格更高

合约套餐性价比最高，大部分人选这个。`,
        },
        {
          question: '可以按月付费吗？',
          answer: `可以选无合约套餐：
• 月付价格比合约高 $10-20
• 随时可取消
• 适合短期居住

长期住建议签合约更划算。`,
        },
        {
          question: '合约到期后怎么办？',
          answer: `合约到期后：
• 自动转为月付（价格上涨）
• 可以重新签约申请优惠
• 可以更换套餐或运营商

建议到期前 30 天联系我们，帮你续约优惠。`,
        },
        {
          question: '可以提前解约吗？',
          answer: `可以提前解约：
• 违约金 = $10 × 剩余月数
• 例：还剩 6 个月 = $60 违约金

特殊情况免违约金：
• 搬家到不覆盖区域
• 服务质量严重问题`,
        },
        {
          question: '搬家可以转移服务吗？',
          answer: `可以！搬家转移流程：
• 新地址有覆盖：免费转移
• 通常需要重新安装
• 合约继续，不用重签

新地址没覆盖可以免费取消。`,
        },
      ],
    },
    {
      id: 'equipment',
      title: '设备与路由器',
      items: [
        {
          question: '需要买路由器吗？',
          answer: `两种选择：

【租用】$10/月
• 无需一次性投入
• 设备故障免费换
• 含技术支持

【自备】一次性购买
• 长期更省钱
• 选择更多
• 需确认兼容性

用超过 1 年建议自备。`,
        },
        {
          question: 'AT&T 路由器质量如何？',
          answer: `AT&T 官方路由器：
• 速度达标，覆盖中等
• 适合普通公寓
• 大房子可能信号弱

如果房子大或设备多，建议：
• 使用 Mesh 路由器
• 添加 WiFi 扩展器`,
        },
        {
          question: '可以随时更换设备吗？',
          answer: `可以随时更换：
• 租用设备：联系 AT&T 换新
• 自备设备：自行更换，更新账户设置

更换后可能需要重新配置网络。`,
        },
      ],
    },
    {
      id: 'speed-performance',
      title: '速度与性能',
      items: [
        {
          question: 'AT&T 速度稳定吗？',
          answer: `Fiber 是最稳定的宽带类型：
• 光纤直接入户
• 不受高峰期影响
• 不受天气影响
• 延迟极低（<10ms）

比 Cable 稳定得多！`,
          isHot: true,
        },
        {
          question: '实际速度能达到宣传速度吗？',
          answer: `Fiber 实际速度表现：
• 通常达到宣传速度的 95%+
• 有线连接最准确
• WiFi 会有损耗（正常）

比 Cable 的"最高可达"真实得多。`,
        },
        {
          question: '为什么速度有时慢？',
          answer: `速度慢的常见原因：
• WiFi 信号弱（距离远 / 障碍物）
• 路由器性能不足
• 设备太多同时使用
• 路由器需要重启

Fiber 本身很稳定，问题通常在设备端。`,
        },
        {
          question: '上传速度是多少？',
          answer: `Fiber 最大优势：上下行对称！

• 1000Mbps 套餐 → 上传也是 1000Mbps
• Cable 通常上传只有 10-35Mbps

远程办公、视频会议、上传大文件，Fiber 完胜。`,
          isHot: true,
        },
        {
          question: '适合远程办公吗？',
          answer: `Fiber 是远程办公首选：
• 视频会议不卡顿
• 屏幕共享流畅
• 大文件秒传
• 延迟低，实时协作顺畅

上传速度快是关键优势。`,
        },
      ],
    },
    {
      id: 'comparison',
      title: '与其他运营商对比',
      items: [
        {
          question: 'AT&T Fiber 和 Xfinity 哪个好？',
          answer: `各有优势：

【选 AT&T Fiber】
• 速度更稳定
• 上下行对称
• 无流量上限
• 延迟更低

【选 Xfinity】
• 覆盖更广
• 促销更多
• 价格更灵活

有 Fiber 覆盖优先选 Fiber！`,
          isHot: true,
        },
        {
          question: 'AT&T Fiber 和 Spectrum 哪个好？',
          answer: `对比：

【AT&T Fiber 优势】
• 速度更稳定
• 上传速度快
• 技术更先进

【Spectrum 优势】
• 无合约
• 价格透明
• 覆盖更广

地址有 Fiber 建议选 Fiber。`,
        },
        {
          question: '什么时候选 AT&T？',
          answer: `选 AT&T Fiber 的情况：
• 地址有光纤覆盖
• 需要稳定速度
• 大量上传需求
• 远程办公 / 游戏
• 对延迟敏感

这些场景 Fiber 明显更好。`,
        },
        {
          question: '什么时候不选 AT&T？',
          answer: `不选 AT&T 的情况：
• 地址没有 Fiber 覆盖
• 预算有限（Cable 更便宜）
• 只是轻度使用
• 不想签合约

没覆盖就没办法，其他情况可以权衡。`,
        },
        {
          question: '可以同时装两家吗？',
          answer: `技术上可以，但不推荐：
• 两份月费太贵
• 一般没必要

备用方案：
• 手机热点作为备份
• 选择一家最可靠的即可`,
        },
      ],
    },
  ],
}

// ==================== 住家光纤 · 售后 ====================
export const residentialAfterSale: FAQMainCategory = {
  id: 'residential-after-sales',
  title: '住家光纤 · 售后',
  shortTitle: '住家售后',
  description: '使用中遇到的问题',
  subCategories: [
    {
      id: 'billing',
      title: '账单问题',
      items: [
        {
          question: '为什么账单突然涨价？',
          answer: `涨价常见原因：
• 促销期到期（最常见！）
• 设备费开始收取
• 套餐自动升级
• 税费调整

我们可以帮你分析账单，找出涨价原因。`,
          isHot: true,
        },
        {
          question: '账单涨价了能降回来吗？',
          answer: `可以尝试！方法：
• 联系 Retention 部门协商
• 申请老客户优惠
• 更换更合适的套餐
• 威胁转网（有效果）

我们帮你准备话术，成功率很高。`,
          isHot: true,
        },
        {
          question: '如何查看账单明细？',
          answer: `查看账单方法：
• 登录 att.com → My AT&T
• 下载 myAT&T App
• 打客服电话索要

我们帮你分析账单，找出可以省钱的地方。`,
        },
        {
          question: '账单有错误怎么办？',
          answer: `发现错误立即申诉：
1. 截图保存错误账单
2. 联系客服说明问题
3. 要求退款或调整

我们帮你准备材料、与客服沟通，争取退款。`,
        },
        {
          question: '可以设置自动付款吗？',
          answer: `可以，而且有好处：
• 避免逾期费（$10+）
• 部分套餐有 Auto Pay 折扣
• 设置方便，账户内操作

建议绑定信用卡，方便又有积分。`,
        },
      ],
    },
    {
      id: 'speed-issues',
      title: '速度问题',
      items: [
        {
          question: '实际网速比宣传慢很多？',
          answer: `排查步骤：
1. 用网线直连测速（排除 WiFi 问题）
2. 重启路由器和 ONT
3. 检查是否有设备占用带宽
4. 联系技术支持检测线路

有线测速达标说明是 WiFi 问题。`,
          isHot: true,
        },
        {
          question: 'WiFi 信号弱怎么办？',
          answer: `增强 WiFi 信号方法：
• 移动路由器到中心位置
• 减少障碍物（墙、金属）
• 添加 WiFi 扩展器 / Mesh
• 升级高性能路由器

大房子建议用 Mesh 系统。`,
        },
        {
          question: '如何测试真实网速？',
          answer: `正确测速方法：
1. 用网线连接电脑
2. 关闭其他设备和程序
3. 使用 speedtest.net 或 fast.com
4. 多次测试取平均值

WiFi 测速会有损耗，属正常。`,
        },
        {
          question: '速度问题可以要求退款吗？',
          answer: `如果持续不达标可以：
• 要求技术人员上门检测
• 申请服务质量补偿
• 降级到更低套餐

我们帮你准备证据、与客服沟通。`,
        },
      ],
    },
    {
      id: 'connection-issues',
      title: '连接问题',
      items: [
        {
          question: '经常断网怎么办？',
          answer: `Fiber 很少断网，如果频繁断：
• 检查 ONT 指示灯是否正常
• 重启 ONT 和路由器
• 检查光纤线是否损坏
• 联系技术支持检测

可能是设备故障或线路问题。`,
          isHot: true,
        },
        {
          question: '路由器需要经常重启吗？',
          answer: `建议定期重启：
• 每周重启一次
• 遇到问题先重启
• 可设置定时重启

重启能清理缓存，保持最佳状态。`,
        },
        {
          question: '无法连接 WiFi 怎么办？',
          answer: `排查步骤：
1. 确认路由器开机（指示灯亮）
2. 检查密码是否正确
3. 重启路由器
4. 检查设备是否被屏蔽
5. 尝试其他设备连接

一个设备连不上可能是设备问题。`,
        },
        {
          question: '有线正常但 WiFi 不行？',
          answer: `这是路由器问题：
• 重启路由器
• 更新路由器固件
• 更换 WiFi 频道
• 路由器可能需要更换

AT&T 租用设备可以免费换。`,
        },
        {
          question: '多设备同时使用很卡？',
          answer: `解决方案：
• 升级套餐速度
• 升级路由器（支持更多设备）
• 使用 5GHz 频段
• 限制某些设备带宽

Fiber 速度够，通常是路由器瓶颈。`,
        },
      ],
    },
    {
      id: 'equipment-issues',
      title: '设备问题',
      items: [
        {
          question: '路由器坏了怎么办？',
          answer: `根据情况处理：

【租用设备】
• 联系 AT&T 免费更换
• 通常 2-3 天送达

【自备设备】
• 自行购买新路由器
• 确认兼容性后更换`,
        },
        {
          question: '可以更换路由器吗？',
          answer: `可以随时更换：
• 租用的联系 AT&T 换
• 自备的随时换

更换后需要重新配置 WiFi 名称和密码。`,
        },
        {
          question: '免费设备有押金吗？',
          answer: `AT&T 租用设备：
• 月租 $10，无押金
• 设备故障免费换
• 取消服务需归还

不归还会收取设备费用。`,
        },
        {
          question: '设备什么时候退还？',
          answer: `取消服务后需退还：
• 30 天内归还
• 可邮寄或送门店
• 保留归还凭证

逾期不还会收取设备费（$100-200）。`,
        },
        {
          question: '设备升级需要费用吗？',
          answer: `设备升级：
• 租用设备：可能免费升级
• 自备设备：自己购买

升级套餐时可以申请设备升级优惠。`,
        },
      ],
    },
    {
      id: 'upgrade-downgrade',
      title: '升级与降速',
      items: [
        {
          question: '可以升级套餐吗？',
          answer: `可以随时升级：
• 立即生效
• 可能有升级优惠
• 合约不变

我们帮你申请升级优惠价。`,
        },
        {
          question: '可以降级套餐吗？',
          answer: `可以降级，但注意：
• 合约期内可能有限制
• 下个账单周期生效
• 可能失去某些优惠

建议先咨询具体影响。`,
        },
        {
          question: '升级后价格会变吗？',
          answer: `升级后价格：
• 按新套餐价格收费
• 可能有升级优惠
• 原有折扣可能保留

我们帮你申请最佳价格。`,
        },
        {
          question: '降级后速度够用吗？',
          answer: `降级前评估：
• 分析你的使用习惯
• 看看当前带宽占用
• 500→300 大部分人够用

我们帮你分析是否适合降级。`,
        },
        {
          question: '可以临时升级吗？',
          answer: `可以临时升级：
• 例如有大项目需要更快速度
• 升级 1-2 个月后降回
• 灵活调整

提前告诉我们需求，帮你安排。`,
        },
      ],
    },
    {
      id: 'cancel-switch',
      title: '取消与转网',
      items: [
        {
          question: '如何取消 AT&T 服务？',
          answer: `取消流程：
1. 联系客服提出取消
2. 确认是否有违约金
3. 安排设备归还
4. 确认最后账单

我们帮你处理取消手续。`,
        },
        {
          question: '取消需要提前通知吗？',
          answer: `建议提前 30 天：
• 避免下月账单
• 有时间处理设备归还
• 可以安排新运营商

突然取消可能多付一个月。`,
        },
        {
          question: '违约金是多少？',
          answer: `违约金计算：
• $10 × 剩余合约月数
• 例：剩 6 个月 = $60

免违约金情况：
• 搬家到不覆盖区域
• 服务质量严重问题`,
        },
        {
          question: '可以转网到其他运营商吗？',
          answer: `可以随时转网：
1. 先确定新运营商可用
2. 不要先取消 AT&T
3. 新运营商安装后再取消
4. 处理设备归还

我们帮你无缝切换。`,
        },
        {
          question: '取消后设备怎么办？',
          answer: `设备处理：
• 租用设备：30 天内归还
• 可邮寄或送门店
• 保留归还凭证

自备设备是你的，可以继续用。`,
        },
      ],
    },
    {
      id: 'moving',
      title: '搬家转移',
      items: [
        {
          question: '搬家可以转移服务吗？',
          answer: `可以转移：
• 新地址有覆盖：免费转移
• 合约继续，不用重签
• 需要重新安装

新地址没覆盖可免费取消。`,
          isHot: true,
        },
        {
          question: '转移需要费用吗？',
          answer: `通常免费，可能涉及：
• 新地址安装费（有时免）
• 设备运送费（自己带更好）

提前申请可能有搬家优惠。`,
        },
        {
          question: '新地址不支持 AT&T 怎么办？',
          answer: `新地址没覆盖：
• 可以免费取消（无违约金）
• 我们帮你找新地址的运营商
• 推荐当地最佳选择

搬家前帮你查好新地址覆盖。`,
        },
        {
          question: '转移需要多长时间？',
          answer: `转移时间：
• 有现成线路：1 周内
• 需要新铺设：2-4 周

建议搬家前 2-3 周申请转移。`,
        },
        {
          question: '转移期间会断网吗？',
          answer: `会有短暂断网：
• 旧地址停止当天断
• 新地址安装后恢复
• 通常断 1-3 天

可以用手机热点临时过渡。`,
        },
      ],
    },
    {
      id: 'tech-support',
      title: '技术支持',
      items: [
        {
          question: '如何联系 AT&T 技术支持？',
          answer: `联系方式：
• 电话：1-800-288-2020
• 在线聊天：att.com
• myAT&T App
• 门店

我们帮你准备问题描述，协助沟通。`,
        },
        {
          question: '技术支持是 24 小时吗？',
          answer: `支持时间：
• 电话：24/7（高峰期等待久）
• 在线聊天：24/7
• 门店：营业时间内

紧急问题建议打电话。`,
        },
        {
          question: '技术支持会收费吗？',
          answer: `收费情况：
• 电话支持：免费
• 上门服务：可能收费（$99+）
• 设备故障上门：通常免费

设备问题尽量先电话排查。`,
        },
        {
          question: '问题解决不了怎么办？',
          answer: `升级投诉：
• 要求转接主管
• 联系 Retention 部门
• 向 FCC 投诉（严重问题）

我们帮你准备材料，争取更好解决方案。`,
        },
      ],
    },
    {
      id: 'renewal',
      title: '续约与优惠',
      items: [
        {
          question: '促销到期后可以续约吗？',
          answer: `可以申请续约优惠：
• 联系 Retention 部门
• 表示考虑转网
• 通常能拿到新优惠

我们帮你在到期前 30 天处理。`,
          isHot: true,
        },
        {
          question: '可以协商价格吗？',
          answer: `可以协商！技巧：
• 说明考虑转网
• 提供竞争对手报价
• 态度坚定但礼貌
• 要求转 Retention 部门

我们帮你准备话术。`,
        },
        {
          question: '续约有什么优惠？',
          answer: `续约可能获得：
• 价格锁定 6-12 个月
• 免费速度升级
• 设备折扣
• 礼品卡奖励

优惠因人而异，需要谈判。`,
        },
        {
          question: '什么时候续约最好？',
          answer: `最佳续约时机：
• 促销到期前 30 天
• 有竞争对手促销时
• 季度末（销售有指标）

我们帮你把握最佳时机。`,
        },
      ],
    },
    {
      id: 'other',
      title: '其他常见问题',
      items: [
        {
          question: '可以暂停服务吗？',
          answer: `可以暂停服务：
• 适合长期出差 / 旅行
• 暂停期间收少量费用
• 比完全取消更灵活

需要联系客服申请。`,
        },
        {
          question: '可以更改账户信息吗？',
          answer: `可以在线更改：
• 联系方式
• 支付方式
• 服务地址（需确认覆盖）

登录 att.com 或打客服电话。`,
        },
        {
          question: 'AT&T 有官方 App 吗？',
          answer: `有 myAT&T App：
• 查看账单
• 管理账户
• 联系客服
• 控制 WiFi 设置

建议下载，管理账户很方便。`,
        },
        {
          question: '遇到问题可以找你们解决吗？',
          answer: `当然可以！我们提供：
• 中文全程支持
• 账单分析
• 协商降价
• 技术问题协助
• 转网 / 取消手续

任何问题都可以找我们！`,
          isHot: true,
        },
      ],
    },
  ],
}

// ==================== 商业光纤 · 售前 ====================
export const businessPreSale: FAQMainCategory = {
  id: 'business-pre-sales',
  title: '商业光纤 · 售前',
  shortTitle: '商业售前',
  description: '商业宽带办理前的问题',
  subCategories: [
    {
      id: 'business-basics',
      title: '商业宽带基础',
      items: [
        {
          question: '商业宽带和住家有什么区别？',
          answer: `核心区别：

【商业 Fiber】
• 有 SLA 服务保障（99.9%+ 在线率）
• 故障优先响应（4 小时内）
• 静态 IP 地址
• 专属客服通道
• 价格高 30-50%

【住家 Fiber】
• 无 SLA 保障
• 标准技术支持
• 动态 IP
• 价格更便宜

对稳定性要求高选商业。`,
          isHot: true,
        },
        {
          question: '商业宽带价格是多少？',
          answer: `商业 Fiber 价格参考：
• 100Mbps：$80-120/月
• 300Mbps：$120-180/月
• 1Gbps：$200-350/月
• 专线：$500+/月

价格因地址、合约长度而异。`,
        },
        {
          question: '需要营业执照吗？',
          answer: `一般需要提供：
• 营业执照 / Business License
• EIN（雇主识别号）
• 商业地址证明

小型家庭办公室可能用住家 Fiber 即可。`,
        },
        {
          question: '商业宽带有合约吗？',
          answer: `商业 Fiber 合约：
• 通常 12-36 个月
• 合约越长价格越低
• 提前解约违约金更高

建议签长约，价格更优惠。`,
        },
        {
          question: '商业宽带技术支持如何？',
          answer: `商业技术支持优势：
• 专属客服热线
• 4 小时响应承诺
• 优先派单上门
• 7×24 小时服务

出问题处理比住家快得多。`,
          isHot: true,
        },
      ],
    },
    {
      id: 'business-process',
      title: '办理流程',
      items: [
        {
          question: '办理 AT&T 需要多长时间？',
          answer: `商业 Fiber 办理时间：
• 地址覆盖查询：即时
• 申请审批：3-5 个工作日
• 安装预约：2-6 周

比住家时间长，因为需要商业审批。`,
        },
        {
          question: '需要本人到场吗？',
          answer: `办理阶段：
• 申请：可远程完成
• 签合约：可电子签名
• 安装：需要有人在场

安装可以安排员工在场。`,
        },
        {
          question: '可以远程办理吗？',
          answer: `完全可以远程办理：
• 材料扫描件即可
• 电子签名合约
• 只有安装需要现场

我们全程中文协助远程办理。`,
        },
        {
          question: '办理需要什么材料？',
          answer: `商业办理材料：
• 营业执照 / Business License
• EIN 或 SSN
• 商业地址证明
• 授权人身份证明
• 支付方式

我们帮你准备所有材料。`,
        },
        {
          question: '中文办理流程复杂吗？',
          answer: `不复杂！我们全程代办：
1. 你提供材料
2. 我们填表、提交
3. 帮你跟进审批
4. 安排安装时间

全程中文沟通，无语言障碍。`,
          isHot: true,
        },
      ],
    },
  ],
}

// ==================== 商业光纤 · 售后 ====================
export const businessAfterSale: FAQMainCategory = {
  id: 'business-after-sales',
  title: '商业光纤 · 售后',
  shortTitle: '商业售后',
  description: '商业宽带使用中的问题',
  subCategories: [
    {
      id: 'business-outage',
      title: '断网与故障',
      items: [
        {
          question: '商业网络断网怎么办？',
          answer: `商业断网应急步骤：
1. 检查 ONT 和路由器指示灯
2. 重启设备（等 2 分钟）
3. 拨打商业支持热线
4. 报告故障，获取工单号

商业客户有优先响应，通常 4 小时内处理。`,
          isHot: true,
        },
        {
          question: 'SLA 未达标可以赔偿吗？',
          answer: `可以申请 SLA 赔偿：

【AT&T 商业保障】
• 断网 20 分钟以上可申请
• 需要有工单记录
• 30 天内提交申请
• 赔偿为账单抵扣

我们帮你准备申请材料。`,
          isHot: true,
        },
        {
          question: '商业账单异常如何处理？',
          answer: `账单异常处理：
1. 下载账单明细
2. 标注异常项目
3. 联系商业客服
4. 提交书面申诉

我们帮你分析账单、准备申诉材料。`,
        },
        {
          question: '餐厅 / POS 掉线怎么办？',
          answer: `POS 掉线紧急处理：
1. 检查网线连接
2. 重启路由器
3. 切换到备用网络（手机热点）
4. 联系商业支持

建议：配置备用网络，关键时刻不断线。`,
          isHot: true,
        },
        {
          question: '商业网络可以备用线路吗？',
          answer: `可以配置备用线路：
• 主线 Fiber + 备用 Cable
• 主线 Fiber + 备用 4G/5G
• 双线自动切换

关键业务建议配备用线路，我们帮你设计方案。`,
        },
      ],
    },
    {
      id: 'business-upgrade',
      title: '升级与扩展',
      items: [
        {
          question: '商业宽带能否临时升速？',
          answer: `可以临时升速：
• 适合短期大流量需求
• 例如促销活动期间
• 活动后降回原套餐

提前申请，通常 1-3 天生效。`,
        },
        {
          question: '商业网络可以多 IP 吗？',
          answer: `商业 Fiber 支持多 IP：

【静态 IP 块】
• 8 个地址：5 个可用
• 16 个地址：13 个可用
• 32 个地址：29 个可用

适合服务器、VPN、远程访问等需求。`,
          isHot: true,
        },
        {
          question: '商业 WiFi 覆盖不够怎么办？',
          answer: `扩展 WiFi 覆盖方案：
• 添加企业级 AP
• 部署 Mesh 网络
• 有线回程 + 多 AP

我们帮你设计适合店面 / 办公室的方案。`,
        },
        {
          question: '可以升级到专线吗？',
          answer: `可以从 Fiber 升级到专线：
• 专线：对称速度 + 更高 SLA
• 价格更高（$500+/月）
• 适合关键业务

我们帮你评估是否需要专线。`,
        },
      ],
    },
    {
      id: 'business-moving',
      title: '搬迁与变更',
      items: [
        {
          question: '商业地址搬迁如何处理？',
          answer: `商业搬迁流程：
1. 提前 30-60 天通知
2. 确认新地址覆盖
3. 安排新地址安装
4. 协调旧地址停用

新地址没覆盖可以免违约金取消。`,
          isHot: true,
        },
        {
          question: '可以更改账户信息吗？',
          answer: `商业账户变更：
• 联系人信息：可随时改
• 公司名称：需要证明文件
• 地址变更：需重新审批

涉及公司变更的需要提交材料。`,
        },
        {
          question: '员工离职如何交接账户？',
          answer: `账户交接步骤：
1. 更新授权联系人
2. 更新登录信息
3. 更新支付方式（如需要）

确保新负责人有完整访问权限。`,
        },
      ],
    },
    {
      id: 'business-billing',
      title: '账单与合约',
      items: [
        {
          question: '商业账单和住家有什么不同？',
          answer: `商业账单特点：
• 可开具正规发票
• 支持公司抬头
• 可能有税务优惠
• 账单周期可调整

需要报税凭证可以申请正式发票。`,
        },
        {
          question: '合约到期如何续约？',
          answer: `续约建议：
• 到期前 60 天开始谈
• 可以协商更好价格
• 比较竞争对手报价
• 不续约自动转月付

我们帮你谈续约优惠。`,
        },
        {
          question: '提前解约违约金多少？',
          answer: `商业违约金计算：
• 通常高于住家
• 可能按剩余合约价值百分比
• 具体看合约条款

搬迁到不覆盖区域可能免违约金。`,
        },
      ],
    },
  ],
}

// 所有分类
export const allCategories: FAQMainCategory[] = [
  residentialPreSale,
  residentialAfterSale,
  businessPreSale,
  businessAfterSale,
]

// 生成 Schema 用的所有问题
export function getAllFAQsForSchema() {
  const allFaqs: { question: string; answer: string }[] = []
  
  allCategories.forEach(mainCat => {
    mainCat.subCategories.forEach(subCat => {
      subCat.items.forEach(item => {
        allFaqs.push({
          question: item.question,
          answer: item.answer.replace(/\n/g, ' ').replace(/•/g, '-').replace(/【/g, '').replace(/】/g, ': '),
        })
      })
    })
  })
  
  return allFaqs
}

// 按主分类获取 Schema
export function getFAQsForSchemaByCategory(categoryId: string) {
  const category = allCategories.find(c => c.id === categoryId)
  if (!category) return []
  
  const faqs: { question: string; answer: string }[] = []
  category.subCategories.forEach(subCat => {
    subCat.items.forEach(item => {
      faqs.push({
        question: item.question,
        answer: item.answer.replace(/\n/g, ' ').replace(/•/g, '-').replace(/【/g, '').replace(/】/g, ': '),
      })
    })
  })
  
  return faqs
}
