import React from 'react';

interface PricingPlanListProps {
  name: string;
  discount?: string;
  price: string;
  selected?: boolean;
}

const PricingPlanList: React.FC<PricingPlanListProps> = ({
  name,
  discount,
  price,
  selected = false,
}) => {
  return (
    <div
      className={`
        rounded-xl p-6 m-4 w-full max-w-md 
        backdrop-blur-lg bg-white/10 border border-white/30 
        shadow-md hover:shadow-xl transition-all duration-300
        ${selected ? 'ring-2 ring-blue-400' : ''}
      `}
    >
      <div className="flex justify-between items-center text-white">
        <div className="text-left">
          <h3 className="text-xl font-semibold">{name}</h3>
          {discount && (
            <p className="text-sm text-blue-300 mt-1">Save {discount}</p>
          )}
        </div>

        <div className="text-right">
          <p className="text-2xl font-bold">{price}</p>
          <span className="text-xs text-gray-300">/month</span>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanList;
