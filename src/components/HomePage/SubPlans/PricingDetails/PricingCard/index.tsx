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
      <div className="w-full max-w-sm p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl text-center text-neutral-300">
        <p className="text-sm py-10">Select a plan to view its details here.</p>
      </div>
    );
  }

  return (
    <div className="w-80 transition-transform duration-300 hover:scale-105">
      <div className="relative flex flex-col h-full p-6 rounded-3xl bg-gradient-to-b from-[#1C1C1E] to-[#2C2C2E] border border-white/10 shadow-lg shadow-black/30 backdrop-blur-xl">

        {/* Plan Header */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white">
              {selectedPlan.name}
            </h3>
            {selectedPlan.details === 'plus' && (
              <span className="text-xs font-semibold text-indigo-300 bg-white/5 px-3 py-1 rounded-full border border-indigo-400/30 shadow-sm">
                Most Popular
              </span>
            )}
          </div>

          <div className="flex items-end gap-1">
            <span className="text-xl text-white font-semibold">$</span>
            <span className="text-4xl font-extrabold text-white tracking-tight">
              {formatPrice(selectedPlan.price, isAnnual)}
            </span>
            <span className="text-sm text-neutral-400 font-medium">
              {isAnnual ? '/yr' : '/mo'}
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="text-white text-sm font-medium mb-2">Whats included</div>
        <ul className="text-sm text-neutral-300 space-y-2 flex-1 mb-6">
          {selectedPlan.features?.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <div className="w-4 h-4 text-green-400">
                <svg viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          type="button"
          className="w-full rounded-2xl bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-semibold text-sm py-2.5 transition-all duration-200 shadow-lg shadow-indigo-900/30 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          Purchase Plan
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
