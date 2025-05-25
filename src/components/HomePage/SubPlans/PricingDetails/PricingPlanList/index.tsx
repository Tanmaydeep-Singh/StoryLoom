import React from 'react';

interface PricingPlanListProps {
  name: string;
  discount?: string;
  price: string;
  selected?: boolean;
  isAnnual?: boolean; // new optional prop
}

const PricingPlanList: React.FC<PricingPlanListProps> = ({
  name,
  discount,
  price,
  selected = false,
  isAnnual = true,
}) => {

  const formatPrice = (price: string, annual: boolean) => {
    const numericPrice = Number(price.replace(/[^\d]/g, ''));
    if (annual) {
      const annualPrice = Math.round(numericPrice * 12 * 0.8);
      return `₹${annualPrice}`;
    }
    return price;
  };

  return (
    <div
      className={`
        w-full rounded-2xl px-6 py-5
        backdrop-blur-lg bg-white/10 border border-white/30 
        shadow-md hover:shadow-lg transition-all duration-300
        ${selected ? 'ring-2 ring-blue-400' : ''}
      `}
    >
      <div className="flex justify-between items-center text-white">
        <div>
          <h3 className="text-lg font-medium tracking-tight">{name}</h3>
          {discount && isAnnual && (
            <p className="text-xs text-blue-300 mt-1">Save {discount}</p>
          )}
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-[#e8d5b7]">{formatPrice(price, isAnnual)}</p>
          <p className="text-xs text-white/50">{isAnnual ? '/year' : '/month'}</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanList;
