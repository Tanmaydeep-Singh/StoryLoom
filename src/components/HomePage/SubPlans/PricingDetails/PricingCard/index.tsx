import React from "react";
import { Check } from "lucide-react";

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
    const numericPrice = Number(price.replace(/[^\d]/g, ""));
    if (annual) {
      const annualPrice = Math.round(numericPrice * 12 * 0.8);
      return `${annualPrice}`;
    }
    return price;
  };

  if (!selectedPlan) {
    return (
      <div className="w-full  p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg text-center text-neutral-300">
        <p className="text-sm py-10">Select a plan to view its details here.</p>
      </div>
    );
  }

  return (
    <div className="w-full min-w-72  p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#1C1C1E] to-[#2C2C2E] shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-lg">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-white tracking-tight">
            {selectedPlan.name}
          </h3>
          {selectedPlan.details === "plus" && (
            <span className="text-xs font-semibold text-indigo-300 bg-white/5 px-3 py-1 rounded-full border border-indigo-400/30">
              Most Popular
            </span>
          )}
        </div>

        <div className="flex items-end gap-1">
          <span className="text-lg font-medium text-white">$</span>
          <span className="text-4xl font-extrabold text-white tracking-tight">
            {formatPrice(selectedPlan.price, isAnnual)}
          </span>
          <span className="text-sm text-neutral-400 font-medium">
            {isAnnual ? "/yr" : "/mo"}
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="text-white text-sm font-medium mb-2">What’s included</div>
      <ul className="text-sm text-neutral-300 space-y-3 mb-6">
        {selectedPlan.features?.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Check size={16} className="text-green-400 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        type="button"
        className="w-full rounded-xl bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-semibold text-sm py-2.5 transition-all duration-200 shadow-md shadow-indigo-900/20 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Purchase Plan
      </button>
    </div>
  );
};

export default PricingCard;
