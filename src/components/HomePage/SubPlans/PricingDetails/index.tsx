import React, { useState } from 'react';
import PricingPlanList from './PricingPlanList';
import PricingCard from './PricingCard';

const pricingData = [
  {
    name: 'Basic Plan',
    price: '₹0',
    details: 'base',
    features: [
      'Unlimited stories',
      'All supported languages',
      'Basic AI translations',
      'Ads displayed',
    ],
  },
  {
    name: 'Plus Plan',
    price: '₹99',
    details: 'plus',
    discount: 'Save 15%',
    features: [
      'Ad-free experience',
      'Offline access to saved stories',
      'TTS-based audio narration',
      'Enhanced translations',
      'Bookmarks & Dark Mode',
      'Reading history sync',
    ],
  },
  {
    name: 'Pro Plan',
    price: '₹199',
    details: 'pro',
    discount: 'Save 20%',
    features: [
      'Everything in Plus',
      'Unlimited downloads',
      'Priority story access',
      'Narration speed control',
      'Reading dashboard',
      'Smart recommendations',
    ],
  },
];

const PricingDetails = () => {
  const [selectedPlan, setSelectedPlan] = useState(pricingData[0]);

  const handleSelect = (planName: string) => {
    const selected = pricingData.find((plan) => plan.name === planName);
    if (selected) setSelectedPlan(selected);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 xl:px-32 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Plan List */}
        <div className="flex flex-col gap-4">
          {pricingData.map((plan) => (
            <button
              key={plan.name}
              className="w-full text-left focus:outline-none"
              onClick={() => handleSelect(plan.name)}
            >
              <PricingPlanList
                name={plan.name}
                price={plan.price}
                discount={plan.discount}
                selected={selectedPlan.name === plan.name}
              />
            </button>
          ))}
        </div>

        {/* Plan Details Card */}
        <div className="w-full h-full">
          <PricingCard selectedPlan={selectedPlan} />
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
