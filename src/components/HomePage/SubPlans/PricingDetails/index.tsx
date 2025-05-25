import React, { useState, useCallback } from 'react';
import PricingCard from './PricingCard';

interface Plan {
  name: string;
  price: string;
  details?: string;
  description?: string;
  discount?: string;
  features?: string[];
}

const pricingData: Plan[] = [
  {
    name: 'Basic Plan',
    price: '0',
    details: 'base',
    description: 'For casual readers',
    features: [
      'Unlimited stories',
      'All supported languages',
      'Basic AI translations',
      'Ads displayed',
    ],
  },
  {
    name: 'Plus Plan',
    price: '10',
    details: 'plus',
    discount: '15%',
    description: 'Enhanced features',
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
    price: '25',
    details: 'pro',
    discount: '20%',
    description: 'Power users & enthusiasts',
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

const PricingDetails= () => {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(pricingData[0]);
  const [isAnnual, setIsAnnual] = useState(true);

  const handleSelect = useCallback((planName: string) => {
    const plan = pricingData.find((p) => p.name === planName);
    if (plan) setSelectedPlan(plan);
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      {/* Billing toggle */}
      <div className="flex justify-center max-w-[16rem] mx-auto mb-6 sm:mb-12">
        <div className="relative flex w-full p-1 rounded-full border border-white/30 bg-white/10 text-white">
          <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
            <span
              className={`absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${isAnnual ? 'translate-x-0' : 'translate-x-full'
                }`}
            />
          </span>

          <button
            type="button"
            className={`relative flex-1 text-sm font-medium h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-colors duration-150 ease-in-out ${isAnnual ? 'text-white' : 'text-slate-400'
              }`}
            onClick={() => setIsAnnual(true)}
            aria-pressed={isAnnual}
            aria-label="Select yearly billing"
          >
            Yearly{' '}
            <span className={`ml-1 ${isAnnual ? 'text-indigo-200' : 'text-slate-400'}`}>
              -20%
            </span>
          </button>

          <button
            type="button"
            className={`relative flex-1 text-sm font-medium h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-colors duration-150 ease-in-out ${!isAnnual ? 'text-white' : 'text-slate-400'
              }`}
            onClick={() => setIsAnnual(false)}
            aria-pressed={!isAnnual}
            aria-label="Select monthly billing"
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Responsive Plan Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pricingData.map((plan) => (
          <PricingCard
            selectedPlan={plan}
            isAnnual={isAnnual}
            key={plan.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingDetails;
