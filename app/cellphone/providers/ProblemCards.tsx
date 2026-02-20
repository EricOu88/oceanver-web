import Link from 'next/link';
import { problemCards, providerSlugMap, solutionButtonStyleSet } from './problem-cards-data';
import { CardButtons } from './CardButtons';

const colorClasses = {
  blue: 'bg-blue-100 text-blue-600 border-blue-200',
  indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
  green: 'bg-green-100 text-green-600 border-green-200',
  orange: 'bg-orange-100 text-orange-800 border-orange-200',
  purple: 'bg-purple-100 text-purple-600 border-purple-200',
};

/** Server Component: solutions 只由服务端渲染，无 hydration，消除 mismatch */
export default function ProblemCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {problemCards.map((card, index) => {
        const IconComponent = card.icon;
        return (
          <div
            key={index}
            className="bg-white border border-slate-200 rounded-3xl p-8 space-y-5 hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${colorClasses[card.color as keyof typeof colorClasses]}`}>
                <IconComponent className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-black text-slate-900 leading-tight">
                  {card.question}
                </h2>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed line-clamp-2">
              {card.whyImportant}
            </p>

            <p className="text-slate-600 font-medium">
              适合：{card.suitableFor.join(' / ')}
            </p>

            {/* solutions 同构：有映射用 Link，无映射纯文本；key 用 solution；不原地修改 */}
            {card.solutions.length > 0 && (
              <ul className="space-y-2 text-slate-700">
                {(Array.isArray(card.solutions) ? [...card.solutions] : []).map((solution) => {
                  const href = providerSlugMap[solution];
                  const isButton = href && solutionButtonStyleSet.has(solution);
                  return (
                    <li key={solution}>
                      • {href ? (
                        <Link
                          href={href}
                          className={isButton
                            ? 'inline-block mt-1 px-3 py-1.5 rounded-xl font-semibold text-sm bg-green-600 hover:bg-green-700 text-white transition-all active:scale-95'
                            : 'text-slate-700 hover:underline focus:underline focus:outline-none'}
                        >
                          {solution}
                        </Link>
                      ) : (
                        solution
                      )}
                    </li>
                  );
                })}
              </ul>
            )}

            {/* 按钮由 Client Component 渲染 */}
            <CardButtons
              solutionHref={card.solutionHrefs[0]}
              color={card.color}
              buttonText={(card as { buttonText?: string }).buttonText}
            />
          </div>
        );
      })}
    </div>
  );
}
