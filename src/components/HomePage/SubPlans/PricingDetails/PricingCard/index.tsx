import React from 'react';


interface Plan {
  name: string;
  price: string;
  details?: string;
  description?: string;
  discount?: string;
  features?: string[];
}
interface PricingCardProps {
  selectedPlan?: Plan;
  isAnnual?: boolean;
}

const PricingCard = ({ selectedPlan, isAnnual = true }: PricingCardProps) => {
  const formatPrice = (price: string, annual: boolean) => {
    const numericPrice = Number(price.replace(/[^\d]/g, ''));
    if (annual) {
      const annualPrice = Math.round(numericPrice * 12 * 0.8);
      return `${annualPrice}`;
    }
    return price;
  };

  if (!selectedPlan) {
    return (
      <div className="w-full max-w-sm p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg text-white text-center">
        <p className="text-sm text-white/60 py-8">Select a plan to view its details here.</p>
      </div>
    );
  }

  return (
    <div className="w-80 transition-transform duration-300 hover:scale-[1.015]">
      <div className="relative flex flex-col h-full p-6 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 shadow-xl shadow-black/20 ring-1 ring-white/10">

        {/* Plan Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-base sm:text-lg font-semibold text-white">
              {selectedPlan.name}
            </h3>

            {selectedPlan?.details === 'plus' && (
              <span className="text-xs sm:text-sm font-semibold text-indigo-400 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow shadow-indigo-500/20">
                Most Popular
              </span>
            )}
          </div>
          <div className="inline-flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white">$</span>
            <span className="text-4xl font-extrabold text-white tracking-tight">
              {formatPrice(selectedPlan.price, isAnnual)}
            </span>
            <span className="text-sm text-slate-400 font-medium">{isAnnual ? '/yr' : '/mo'}</span>
          </div>
        </div>

        {/* Features */}
        <div className="text-white font-medium mb-2">Includes:</div>
        <ul className="text-sm text-slate-300 space-y-3 flex-1 mb-6">
          {selectedPlan.features?.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <svg
                className="w-4 h-4 mt-1 text-emerald-400 shrink-0"
                fill="currentColor"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#0"
          className="w-full inline-flex items-center justify-center rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold py-2.5 px-4 transition-all duration-200 shadow-md shadow-indigo-800/30 focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:outline-none"
        >
          Purchase Plan
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
