import React from 'react';

interface Plan {
  name: string;
  price: string;
  discount?: string;
  features?: string[];
}

interface PricingCardProps {
  selectedPlan?: Plan;
  isAnnual?: boolean;
}

const PricingCard = ({ selectedPlan, isAnnual = true }:PricingCardProps) => {
  const formatPrice = (price: string, annual: boolean) => {
    const numericPrice = Number(price.replace(/[^\d]/g, ''));
    if (annual) {
      const annualPrice = Math.round(numericPrice * 12 * 0.8);
      return `₹${annualPrice}`;
    }
    return price;
  };

  if (!selectedPlan) {
    return (
      <div className="w-full max-w-sm p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg text-white text-center">
        <p className="text-sm text-white/60 py-8">
          Select a plan to view its details here.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full  max-w-sm p-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all duration-300 text-white">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-semibold tracking-tight">{selectedPlan.name}</h3>

        <div className="text-right">
          <p className="text-xl font-bold text-[#e8d5b7]">{formatPrice(selectedPlan.price, isAnnual)}</p>
          <p className="text-xs text-white/50">{isAnnual ? '/year' : '/month'}</p>
          {selectedPlan.discount && isAnnual && (
            <p className="text-xs text-green-400 mt-1">Save 20%</p>
          )}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-medium mb-3 text-white/90">What’s included</h4>
        <ul className="space-y-2 text-sm text-white/70 list-disc list-inside">
          {selectedPlan.features?.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
