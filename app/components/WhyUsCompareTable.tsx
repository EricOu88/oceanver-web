'use client'

interface CompareRow {
  title: string
  left: string[]
  right: string[]
}

const COMPARE_DATA: CompareRow[] = [
  {
    title: '关注重点',
    left: ['按系统流程完成下单', '以当前页面展示信息为准'],
    right: ['先判断是否值得处理', '解释条款背后的长期影响'],
  },
  {
    title: '价格理解',
    left: ['以当前促销价为主', '涨价规则不一定明确说明'],
    right: ['帮助理解长期费用结构', '避免不必要的附加费用'],
  },
  {
    title: '时间成本',
    left: ['需要自行研究套餐', '问题需多次联系客服'],
    right: ['快速判断是否需要处理', '由我们协助沟通与跟进'],
  },
  {
    title: '语言与沟通',
    left: ['主要为英文流程', '条款理解存在门槛'],
    right: ['全程中文沟通', '逐条解释关键条款'],
  },
  {
    title: '信用与条件',
    left: ['通常需要 SSN', '可能要求押金'],
    right: ['部分方案支持无 SSN', '协助判断是否可减免押金'],
  },
  {
    title: '后续协助',
    left: ['账单或问题需自行处理', '每次需重新说明情况'],
    right: ['持续中文协助', '熟悉常见账单与规则问题'],
  },
]

export default function WhyUsCompareTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            <th className="p-4 text-left w-1/4">对比项目</th>
            <th className="p-4 text-left">官网流程</th>
            <th className="p-4 text-left">中文协助判断服务</th>
          </tr>
        </thead>
        <tbody className="text-slate-700">
          {COMPARE_DATA.map((row, i) => (
            <tr key={i} className="border-b last:border-none hover:bg-slate-50">
              <td className="p-4 font-bold">{row.title}</td>
              <td className="p-4">
                <ul className="list-disc ml-4 space-y-1">
                  {row.left.map((t, j) => (
                    <li key={j}>{t}</li>
                  ))}
                </ul>
              </td>
              <td className="p-4">
                <ul className="list-disc ml-4 space-y-1">
                  {row.right.map((t, j) => (
                    <li key={j}>{t}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
