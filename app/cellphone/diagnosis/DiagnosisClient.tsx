'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

// 诊断问题数据（请根据实际需求替换为Q1-Q5的具体内容）
const questions = [
  {
    id: 'q1',
    question: '你通常在哪里使用手机？',
    options: [
      { value: 'urban', label: '城市或郊区' },
      { value: 'rural', label: '乡村或覆盖较少的地区' },
      { value: 'travel', label: '经常跨地区旅行' },
      { value: 'unsure', label: '不确定' }
    ]
  },
  {
    id: 'q2',
    question: '你的主要使用场景是？',
    options: [
      { value: 'family', label: '家庭多线使用' },
      { value: 'business', label: '商务/工作' },
      { value: 'student', label: '留学生/短期使用' },
      { value: 'personal', label: '个人日常使用' }
    ]
  },
  {
    id: 'q3',
    question: '你是否有SSN或信用记录？',
    options: [
      { value: 'yes', label: '有SSN和信用记录' },
      { value: 'no', label: '没有SSN，需要预付费' },
      { value: 'limited', label: '信用记录有限' }
    ]
  },
  {
    id: 'q4',
    question: '你经常需要国际通话或出国使用吗？',
    options: [
      { value: 'frequent', label: '经常往返中美或国际旅行' },
      { value: 'occasional', label: '偶尔需要国际通话' },
      { value: 'rare', label: '很少或不需要' }
    ]
  },
  {
    id: 'q5',
    question: '你最看重手机套餐的哪个方面？',
    options: [
      { value: 'signal', label: '信号稳定性和覆盖' },
      { value: 'price', label: '价格和性价比' },
      { value: 'international', label: '国际使用支持' },
      { value: 'flexibility', label: '灵活性和无合约' }
    ]
  }
];

function TradeInCreditGuide() {
  return (
    <section className="mb-8 rounded-2xl border border-blue-200 bg-white p-6 md:p-8">
      <h2 className="text-2xl font-black text-slate-900">手机 trade-in credit 为什么没了？</h2>
      <p className="mt-3 leading-7 text-slate-700">Trade-in credit 暂时没有出现在账单上，不一定代表抵扣永久取消。抵扣可能尚未开始，也可能受账期延迟、线路或套餐资格、设备分期状态、旧设备评估或交付条件影响；账户变更也可能影响需要持续满足条件的促销。</p>
      <h3 className="mt-5 font-bold text-slate-900">先检查什么</h3>
      <ul className="mt-2 grid gap-2 text-slate-700 sm:grid-cols-2">
        {['原促销名称', '设备分期状态', '对应线路', 'trade-in 状态', '最近几期账单变化', '是否更改套餐或线路'].map((item) => <li key={item} className="rounded-lg bg-slate-50 p-3">{item}</li>)}
      </ul>
      <p className="mt-5 leading-7 text-slate-700">是否还能恢复抵扣，需要根据具体账户、促销条款和设备状态核实。如果看不出抵扣期数或资格变化，请向运营商核对促销记录及设备评估结果；不要仅凭一张账单判断原因。</p>
    </section>
  );
}

// 诊断结果映射（根据答案组合推荐方案）
type Recommendation = { type: string; reasons: string[]; providers: string[] };

function getRecommendation(answers: Record<string, string>): Recommendation {
  const hasSSN = answers.q3 === 'yes';
  const needsInternational = answers.q4 === 'frequent' || answers.q4 === 'occasional';
  const priority = answers.q5;
  const scenario = answers.q2;

  if (scenario === 'student' || !hasSSN) {
    return {
      type: '预付费方案',
      reasons: [
        '无需SSN和信用检查，适合新移民和留学生',
        '灵活自由，可随时停用，无合约绑定',
        '价格透明，避免突然涨价'
      ],
      providers: ['Ultra Mobile', 'Gen Mobile']
    };
  }

  if (needsInternational && priority === 'international') {
    return {
      type: '国际友好方案',
      reasons: [
        '包含免费国际漫游和通话',
        '适合经常往返中美的用户',
        '国际使用费用大幅节省'
      ],
      providers: ['T-Mobile', 'Ultra Mobile']
    };
  }

  if (priority === 'signal' || scenario === 'business') {
    return {
      type: '信号稳定方案',
      reasons: [
        '全美覆盖最广，信号稳定可靠',
        '适合商务和家庭多线使用',
        '网络质量优先，通话稳定'
      ],
      providers: ['AT&T', 'Verizon']
    };
  }

  if (priority === 'price') {
    return {
      type: '性价比方案',
      reasons: [
        '价格结构透明，避免突然涨价',
        '适合价格敏感用户',
        '长期使用成本更低'
      ],
      providers: ['Gen Mobile', 'Ultra Mobile']
    };
  }

  // 默认推荐
  return {
    type: '综合方案',
    reasons: [
      '平衡信号、价格和灵活性',
      '适合大多数用户需求',
      '可根据实际使用调整'
    ],
    providers: ['AT&T', 'T-Mobile']
  };
}

export default function DiagnosisClient() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    // 如果是最后一题，计算推荐结果
    if (currentStep === questions.length - 1) {
      const result = getRecommendation(newAnswers);
      setRecommendation(result);
      setShowResult(true);
    } else {
      // 继续下一题
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
    setRecommendation(null);
  };

  if (showResult && recommendation) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <TradeInCreditGuide />
          {/* 返回链接 */}
          <div className="mb-6">
            <Link
              href="/cellphone/providers"
              className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 transition"
            >
              ← 返回手机套餐选择
            </Link>
          </div>

          {/* 结果展示 */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-green-600" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                推荐方案类型
              </h2>
              <p className="text-3xl md:text-4xl font-black text-blue-600 mb-4">
                {recommendation.type}
              </p>
            </div>

            {/* 原因说明 */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">为什么推荐这个方案？</h3>
              <ul className="space-y-3">
                {recommendation.reasons.map((reason: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 推荐运营商 */}
            {recommendation.providers && (
              <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">推荐运营商：</p>
                <p className="text-lg font-bold text-slate-900">
                  {recommendation.providers.join(' · ')}
                </p>
              </div>
            )}

            {/* 主CTA */}
            <div className="space-y-4">
              <Link
                href="/contact"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-4 px-6 rounded-2xl font-black text-lg transition-all shadow-lg hover:shadow-xl"
              >
                获取适合你的手机套餐方案 →
              </Link>
              
              <button
                onClick={handleRestart}
                className="w-full text-center py-3 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
              >
                重新诊断
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <TradeInCreditGuide />
        {/* 返回链接 */}
        <div className="mb-6">
          <Link
            href="/cellphone/providers"
            className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 transition"
          >
            ← 返回手机套餐选择
          </Link>
        </div>

        {/* 先了解基础规则提示 */}
        <div className="mb-8 p-5 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
          <p className="text-slate-800 text-sm leading-relaxed">
            <strong className="text-slate-900">💡 先了解基础规则：</strong>
            不知道 Prepaid、Postpaid、Family Plan 的区别？
            <Link
              href="/cellphone/faq/how-to-choose-us-cellphone-plan"
              className="text-blue-600 hover:underline font-semibold ml-1"
            >
              查看《美国手机套餐怎么选》新手指南
            </Link>
            ，再开始诊断更高效。
            如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">Oceanver 首页</Link>。
            常见问题如<Link href="/cellphone/faq/prepaid-vs-postpaid" className="text-blue-600 hover:text-blue-700 font-semibold underline">预付费和后付费手机卡有什么区别？</Link>都有详细解答。
          </p>
        </div>

        {/* H1 和副标题 */}
        <section className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-4">
            美国手机套餐智能诊断
          </h1>
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
            用 1 分钟，帮你判断适合哪种手机方案
          </p>
        </section>

        {/* 进度条 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-slate-600">
              问题 {currentStep + 1} / {questions.length}
            </span>
            <span className="text-sm font-semibold text-slate-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* 当前问题 */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-200">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQuestion.id, option.value)}
                className="w-full text-left p-4 border-2 border-slate-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all font-semibold text-slate-900"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* 底部提示 */}
        <p className="text-center text-sm text-slate-500 mt-8">
          所有问题均为单选，请根据你的实际情况选择
        </p>
      </div>
    </main>
  );
}
