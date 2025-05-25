import React from 'react';

interface Plan {
  name: string;
  price: string;
  discount?: string;
  features?: string[];
}

const PricingCard = ({ selectedPlan }: { selectedPlan?: Plan }) => {
  return (
    <div className=" w-full max-w-md mx-auto m-4 p-6 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-md hover:shadow-xl transition-all duration-300 text-white">
      {selectedPlan ? (
        <>
          <h3 className="text-2xl font-bold mb-2">{selectedPlan.name}</h3>
          <p className="text-xl font-semibold text-[#e8d5b7]">{selectedPlan.price}</p>
          {selectedPlan.discount && (
            <p className="text-sm text-green-400 mt-1">{selectedPlan.discount}</p>
          )}
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Includes:</h4>
            <ul className="list-disc list-inside text-sm space-y-1 text-white/80">
              {selectedPlan.features?.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p className="text-white/70">
          Choose a plan on the left to see more details here.
        </p>
      )}
    </div>
  );
};

export default PricingCard;
