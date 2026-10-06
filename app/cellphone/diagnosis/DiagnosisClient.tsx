'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { QADocument } from '@/ai/index/types';

type ProblemId = 'billing' | 'signal' | 'porting' | 'sim' | 'device' | 'unknown';
type Option = { value: string; label: string };
type Question = { prompt: string; options: Option[] };

type DiagnosisClientProps = {
  knowledge: QADocument[];
};

const problems: { id: ProblemId; title: string; description: string }[] = [
  { id: 'billing', title: '手机账单突然变贵', description: '首账单、折扣、附加费用或账单项目有变化' },
  { id: 'signal', title: '手机信号差 / 网速慢', description: '通话、移动数据或特定地点连接异常' },
  { id: 'porting', title: '转网 / 保号出了问题', description: '号码转出、转入或新线路激活进度不清楚' },
  { id: 'sim', title: 'eSIM / SIM 卡出了问题', description: '误删配置、换机、激活失败或没有信号' },
  { id: 'device', title: '手机分期 / Trade-in 有问题', description: '设备遗失、提前结清或抵扣没有显示' },
  { id: 'unknown', title: '不确定是哪一种', description: '可以先选“看不懂”或“不知道”，流程仍会给出下一步' },
];

const followUps: Record<ProblemId, Question[]> = {
  billing: [
    {
      prompt: '这是第一张账单出现变化吗？',
      options: [
        { value: 'first-bill', label: '是，刚开通或刚换方案' },
        { value: 'later-bill', label: '不是，之前账单比较稳定' },
        { value: 'unknown', label: '不确定 / 看不懂账单' },
      ],
    },
    {
      prompt: '最近哪一项可能发生了变化？',
      options: [
        { value: 'plan', label: '换套餐、加线路或升级设备' },
        { value: 'credit', label: 'Trade-in 或 bill credit 没显示' },
        { value: 'autopay', label: 'AutoPay 折扣或付款方式' },
        { value: 'one-time', label: '漫游、设备或一次性费用' },
        { value: 'unknown', label: '不知道 / 看不懂' },
      ],
    },
    {
      prompt: '你现在使用哪家手机运营商？',
      options: [
        { value: 'att', label: 'AT&T' },
        { value: 'other', label: '其他运营商' },
        { value: 'unknown', label: '不确定' },
      ],
    },
  ],
  signal: [
    {
      prompt: '问题主要出现在哪里？',
      options: [
        { value: 'one-place', label: '固定地点或室内比较慢' },
        { value: 'everywhere', label: '到处都慢或信号都差' },
        { value: 'unknown', label: '不确定' },
      ],
    },
    {
      prompt: '更接近哪种情况？',
      options: [
        { value: 'data-only', label: '电话正常，只有移动数据慢' },
        { value: 'calls-data', label: '电话和数据都受影响' },
        { value: 'recent-change', label: '刚换套餐、SIM 或 eSIM' },
        { value: 'unknown', label: '不知道' },
      ],
    },
    {
      prompt: '你现在使用哪家手机运营商？',
      options: [
        { value: 'att', label: 'AT&T' },
        { value: 'other', label: '其他运营商' },
        { value: 'unknown', label: '不确定' },
      ],
    },
  ],
  porting: [
    {
      prompt: '转网现在进行到哪一步？',
      options: [
        { value: 'in-progress', label: '正在转入，状态还没完成' },
        { value: 'not-started', label: '还没提交转网' },
        { value: 'unknown', label: '不确定' },
      ],
    },
    {
      prompt: '旧号码和新线路目前是什么状态？',
      options: [
        { value: 'old-active', label: '旧号码还可以正常使用' },
        { value: 'old-down', label: '旧号码已经不能正常使用' },
        { value: 'unknown', label: '不清楚 / 看不懂状态' },
      ],
    },
  ],
  sim: [
    {
      prompt: '最接近哪种 SIM / eSIM 情况？',
      options: [
        { value: 'deleted', label: '误删了 eSIM' },
        { value: 'new-phone', label: '换了新手机，想转移线路' },
        { value: 'activation', label: '无法激活或没有信号' },
        { value: 'multiple', label: '手机里有多个 SIM / eSIM' },
        { value: 'unknown', label: '不确定' },
      ],
    },
  ],
  device: [
    {
      prompt: '设备或抵扣遇到什么情况？',
      options: [
        { value: 'lost', label: '手机丢失，但仍有设备分期' },
        { value: 'payoff', label: '想提前付清设备分期' },
        { value: 'trade-in', label: 'Trade-in / bill credit 没出现' },
        { value: 'switching', label: '准备转网，担心分期或抵扣' },
        { value: 'unknown', label: '不确定 / 看不懂账单' },
      ],
    },
    {
      prompt: '这项设备分期属于哪家运营商？',
      options: [
        { value: 'att', label: 'AT&T' },
        { value: 'other', label: '其他运营商' },
        { value: 'unknown', label: '不确定' },
      ],
    },
  ],
  unknown: [
    {
      prompt: '哪一类最像你现在遇到的情况？',
      options: [
        { value: 'billing', label: '账单或费用看不懂' },
        { value: 'signal', label: '信号或网速异常' },
        { value: 'sim', label: 'SIM / eSIM 或号码问题' },
        { value: 'device', label: '设备分期或抵扣问题' },
        { value: 'unknown', label: '还是不知道' },
      ],
    },
  ],
};

function questionFor(problem: ProblemId, step: number) {
  return followUps[problem][step];
}

function knowledgeFor(problem: ProblemId, answers: Record<number, string>, knowledge: QADocument[]) {
  let id: string | undefined;
  if (problem === 'billing' && answers[0] === 'first-bill' && answers[2] === 'att') {
    id = 'att-first-bill-higher-001';
  } else if (problem === 'signal' && answers[2] === 'att') {
    id = 'att-mobile-slow-network-001';
  } else if (problem === 'sim' && answers[0] === 'deleted') {
    id = 'mobile-esim-deleted-restore-001';
  } else if (problem === 'device' && answers[0] === 'lost') {
    id = 'mobile-lost-device-installment-001';
  } else if (problem === 'device' && answers[0] === 'payoff' && answers[1] === 'att') {
    id = 'att-installment-early-payoff-001';
  }
  return id ? knowledge.find((doc) => doc.id === id) : undefined;
}

function DataList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <section>
      <h3 className="mb-2 font-bold text-[#202D3A]">{title}</h3>
      <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-[#526170]">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

export default function DiagnosisClient({ knowledge }: DiagnosisClientProps) {
  const [problem, setProblem] = useState<ProblemId | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [complete, setComplete] = useState(false);

  const question = problem ? questionFor(problem, step) : undefined;
  const result = useMemo(
    () => problem ? knowledgeFor(problem, answers, knowledge) : undefined,
    [answers, knowledge, problem],
  );

  const chooseProblem = (id: ProblemId) => {
    setProblem(id);
    setStep(0);
    setAnswers({});
    setComplete(false);
  };

  const answerQuestion = (value: string) => {
    if (problem === 'unknown') {
      if (value === 'unknown') {
        setAnswers({ 0: value });
        setComplete(true);
      } else {
        setProblem(value as ProblemId);
        setStep(0);
        setAnswers({});
      }
      return;
    }

    const nextAnswers = {
      ...Object.fromEntries(Object.entries(answers).filter(([index]) => Number(index) < step)),
      [step]: value,
    };
    setAnswers(nextAnswers);
    const nextStep = step + 1;
    const nextQuestion = problem ? followUps[problem][nextStep] : undefined;
    const lostDeviceResolved = problem === 'device' && step === 0 && value === 'lost';
    if (value === 'unknown' || value === 'cannot-understand' || lostDeviceResolved || !nextQuestion) {
      setComplete(true);
    } else {
      setStep(nextStep);
    }
  };

  const restart = () => {
    setProblem(null);
    setStep(0);
    setAnswers({});
    setComplete(false);
  };

  const selectedProblem = problems.find((item) => item.id === problem);
  const needHumanReview = result?.review_status === 'time_sensitive' || problem === 'porting' || problem === 'sim' || problem === 'device' || answers[0] === 'switching' || (problem === 'billing' && ['credit', 'autopay', 'one-time', 'unknown'].includes(answers[1]));
  const totalQuestions = problem === 'billing' || problem === 'signal'
    ? 3
    : problem === 'porting' || (problem === 'device' && answers[0] !== 'lost')
      ? 2
      : 1;

  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Link href="/cellphone/faq" className="inline-flex text-sm font-medium text-[#526170] hover:text-[#164B78]">
          ← 返回手机常见问题
        </Link>

        <header className="py-8 text-center sm:py-10">
          <h1 className="text-3xl font-black tracking-tight text-[#202D3A] sm:text-5xl">
            手机出了问题？先判断是哪一种
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">
            从账单变贵、信号或网速、转号 / 保号、eSIM / SIM、设备分期或 Trade-in，到暂时不确定问题类型，都可以先判断问题在哪，再看下一步怎么处理。
          </p>
        </header>

        {!problem && (
          <section aria-labelledby="problem-options-heading">
            <h2 id="problem-options-heading" className="mb-4 text-lg font-bold text-[#202D3A]">你现在遇到哪类问题？</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {problems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => chooseProblem(item.id)}
                  className="rounded-2xl border border-[#D8E2EA] bg-white p-5 text-left shadow-sm transition hover:border-[#2786A5] hover:bg-[#EDF5F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164B78]"
                >
                  <span className="block text-lg font-bold text-[#202D3A]">{item.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-[#526170]">{item.description}</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {problem && !complete && question && (
          <section className="rounded-3xl border border-[#D8E2EA] bg-white p-5 shadow-sm sm:p-8" aria-live="polite">
            <div className="mb-5 flex items-center justify-between gap-3 text-sm text-[#526170]">
              <span>{selectedProblem?.title}</span>
              <span>问题 {step + 1} / {totalQuestions}</span>
            </div>
            <h2 className="text-xl font-bold leading-snug text-[#202D3A] sm:text-2xl">{question.prompt}</h2>
            <div className="mt-5 grid gap-3">
              {question.options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => answerQuestion(option.value)}
                  className="w-full rounded-xl border border-[#D8E2EA] bg-white p-4 text-left font-semibold leading-6 text-[#202D3A] transition hover:border-[#2786A5] hover:bg-[#EDF5F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164B78]"
                >{option.label}</button>
              ))}
            </div>
            <button type="button" onClick={() => step === 0 ? restart() : setStep(step - 1)} className="mt-5 text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
              {step === 0 ? '← 返回问题分类' : '← 上一步'}
            </button>
          </section>
        )}

        {problem && complete && (
          <section className="rounded-3xl border border-[#D8E2EA] bg-white p-5 shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-[#2786A5]">你的情况更像</p>
            <h2 className="mt-1 text-2xl font-black text-[#202D3A]">{selectedProblem?.title}</h2>

            {result ? (
              <div className="mt-5 space-y-6">
                {result.summary && <p className="rounded-xl bg-[#EDF5F9] p-4 leading-7 text-[#202D3A]">{result.summary}</p>}
                {result.answer && <section><h3 className="mb-2 font-bold text-[#202D3A]">为什么可能这样</h3><p className="text-sm leading-7 text-[#526170]">{result.answer}</p></section>}
                <DataList title="先检查这几项" items={result.check_first} />
                <DataList title="现在可以自己做什么" items={result.self_help} />
                <DataList title="还不能确定什么" items={result.cannot_determine} />
                {result.next_step && <section><h3 className="mb-2 font-bold text-[#202D3A]">下一步处理方向</h3><p className="text-sm leading-7 text-[#526170]">{result.next_step}</p></section>}
                {result.review_status === 'time_sensitive' && <p className="rounded-xl border border-[#D8E2EA] bg-[#F1F4F7] p-4 text-sm leading-6 text-[#526170]">这类内容可能受当前账户、促销或运营商规则影响，具体情况需要按账户信息进一步核实。</p>}
              </div>
            ) : (
              <div className="mt-5 space-y-4 rounded-xl bg-[#EDF5F9] p-4 text-sm leading-7 text-[#526170]">
                <p>目前提供的信息不足以确定具体原因，页面也没有可直接引用的对应知识条目。</p>
                {problem === 'porting'
                  ? <p>你可以先记录错误提示、转网状态和新旧线路情况。转网完成前，不要主动取消仍在使用的旧号码。</p>
                  : <p>你可以先记录错误提示、发生时间和受影响的线路；也可以返回选择更接近的手机问题类型。</p>}
                <div className="flex flex-wrap gap-x-5 gap-y-2 font-semibold">
                  {(problem === 'billing' || problem === 'unknown') && <Link href="/bill-optimization" className="text-[#164B78] hover:text-[#103B60]">先看手机账单判断 →</Link>}
                  <Link href="/contact" className="text-[#164B78] hover:text-[#103B60]">需要核对具体账户时联系中文客服 →</Link>
                </div>
              </div>
            )}

            {needHumanReview && (
              <p className="mt-5 rounded-xl border border-[#D8E2EA] p-4 text-sm leading-6 text-[#526170]">
                这类问题可能涉及账户状态、促销资格、设备分期或运营商后台，需结合具体账户进一步核实。{' '}
                <Link href="/contact" className="font-semibold text-[#164B78] underline-offset-4 hover:text-[#103B60] hover:underline">联系中文客服 →</Link>
              </p>
            )}

            {result?.public_case === true && result.review_status === 'approved' && (
              <p className="mt-4 text-sm"><Link href="/why-us" className="font-semibold text-[#164B78] hover:text-[#103B60]">看看类似真实案例 →</Link></p>
            )}
            <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              {problem === 'billing' && <Link href="/bill-optimization" className="text-[#164B78] hover:text-[#103B60]">继续查看账单判断 →</Link>}
              {(problem === 'signal' || problem === 'porting' || problem === 'sim' || problem === 'device') && <Link href="/cellphone/faq" className="text-[#164B78] hover:text-[#103B60]">手机常见问题 →</Link>}
            </p>
            <button type="button" onClick={restart} className="mt-6 block text-sm font-semibold text-[#526170] underline underline-offset-4 hover:text-[#164B78]">重新开始判断</button>
          </section>
        )}

        {!problem && (
          <p className="mt-5 text-center text-sm text-[#526170]">
            不知道怎么选也没关系，可以选“不确定是哪一种”，或先查看<Link href="/bill-optimization" className="mx-1 font-semibold text-[#164B78] underline">手机账单判断</Link>。
          </p>
        )}
        <p className="mt-8 text-center text-xs text-[#526170]">最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前账户与官方规则为准。</p>
      </div>
    </main>
  );
}
