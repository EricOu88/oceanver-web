'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FamilyPlanQuestionFlow() {
  const [keep, setKeep] = useState('');
  const [authorized, setAuthorized] = useState('');
  const [credit, setCredit] = useState('');
  const reset = () => { setKeep(''); setAuthorized(''); setCredit(''); };
  const result = keep === 'no'
    ? ['先核对取消线路的后果', '确认设备余额、折扣及剩余成员的新月费。确定不保号后，再按运营商流程取消。', '/cellphone/price-hike']
    : keep === 'yes' && authorized !== '' && authorized !== 'yes'
    ? ['先解决户主授权', '户主失联、拒绝配合或权限不明时，先咨询运营商允许的核验和授权路径；不要绕过身份验证。', '/cellphone/family-plan-exit-account-holder']
    : keep === 'yes' && authorized === 'yes' && credit !== ''
    ? credit === 'no'
      ? ['准备携号转出', '确认号码有效、转号资料、设备解锁和目标网络资格。转号成功前不要取消旧号码。', '/cellphone/faq/family-plan-leave-keep-number']
      : ['先核实设备与抵扣', '存在设备分期、未发账单抵扣或不确定时，先核对账户和活动规则。', '/cellphone/faq/promo-credit-not-received']
    : null;
  const choice = (value: string, label: string, current: string, onClick: () => void) => <button type="button" key={value} aria-pressed={current === value} onClick={onClick} className={`min-h-11 rounded-xl border px-4 py-3 text-left font-semibold text-[#164B78] ${current === value ? 'border-[#164B78] bg-[#F4F8FA]' : 'border-[#D5E5EC] bg-white'}`}>{label}</button>;
  return <section className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5 sm:p-8">
    <h2 className="text-2xl font-bold">家庭计划连续追问：按你的情况判断</h2>
    <p className="mt-3 leading-7 text-[#526170]">无需填写手机号或账户资料；页面仅提供判断路径，具体操作须按运营商当前规则核实。</p>
    <div className="mt-5"><p className="font-bold">第一步：需要保留原号码吗？</p><div className="mt-3 grid gap-3 sm:grid-cols-2">{choice('yes','需要保留',keep,()=>{setKeep('yes');setAuthorized('');setCredit('');})}{choice('no','不需要保留',keep,()=>{setKeep('no');setAuthorized('');setCredit('');})}</div></div>
    {keep === 'yes' && <div className="mt-5"><p className="font-bold">第二步：户主是否同意并能提供授权资料？</p><div className="mt-3 grid gap-3 sm:grid-cols-3">{choice('yes','可以',authorized,()=>{setAuthorized('yes');setCredit('');})}{choice('no','拒绝或失联',authorized,()=>{setAuthorized('no');setCredit('');})}{choice('unknown','不确定',authorized,()=>{setAuthorized('unknown');setCredit('');})}</div></div>}
    {keep === 'yes' && authorized === 'yes' && <div className="mt-5"><p className="font-bold">第三步：有设备分期或尚未发完的抵扣吗？</p><div className="mt-3 grid gap-3 sm:grid-cols-3">{choice('yes','有',credit,()=>setCredit('yes'))}{choice('no','确认没有',credit,()=>setCredit('no'))}{choice('unknown','不确定',credit,()=>setCredit('unknown'))}</div></div>}
    {result && <div role="status" aria-live="polite" className="mt-6 rounded-xl border border-[#D5E5EC] bg-white p-5"><h3 className="font-bold">{result[0]}</h3><p className="mt-2 leading-7 text-[#526170]">{result[1]}</p><div className="mt-4 flex flex-wrap items-center gap-4"><Link href={result[2]} className="inline-flex font-semibold text-[#164B78] underline">继续查看处理路径 →</Link><Link href="/contact" className="inline-flex min-h-11 items-center rounded-xl bg-[#164B78] px-4 py-2 font-semibold text-white hover:bg-[#103B60]">联系人工核实 →</Link></div></div>}
    {keep && <button type="button" onClick={reset} className="mt-4 text-sm font-semibold text-[#246B95] underline">重新开始</button>}
  </section>;
}
