import React, { useState, useCallback, useMemo } from "react";
import PricingCard from "./PricingCard";
import clsx from "clsx"; // Optional: for cleaner className logic

interface Plan {
  name: string;
  price: string;
  details?: string;
  description?: string;
  discount?: string;
  features?: string[];
}

const pricingData: Plan[] =[
  {
    "name": "Explorer",
    "price": "0",
    "details": "free",
    "description": "For casual readers",
    "features": [
      "Unlimited stories",
      "All available languages",
      "Bookmark & Like stories",
      "Reading history access",
      "Ads displayed"
    ]
  },
  {
    "name": "Seeker",
    "price": "199",
    "details": "tier-2",
    "discount": "15%",
    "description": "Ad-free reading with audio and offline support",
    "features": [
      "Ad-free experience",
      "Offline access to saved stories",
      "Audio playback for 5 stories/month",
      "On-request language translation (1/month)",
      "Priority support",
      "All Explorer features"
    ]
  },
  {
    "name": "Loom Master",
    "price": "499",
    "details": "tier-3",
    "discount": "20%",
    "description": "Unlimited features for power readers and institutions",
    "features": [
      "Unlimited audio playback",
      "Unlimited custom language translations",
      "Early access to premium stories",
      "Beta access to new features",
      "VIP badge on profile",
      "All Seeker features"
    ]
  }
]


const PricingDetails = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const handleToggle = useCallback((value: boolean) => {
    setIsAnnual(value);
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 font-serif">
      {/* Billing toggle */}
      <div className="flex justify-center max-w-xs mx-auto mb-10">
        <div className="relative flex w-full rounded-full border border-white/20 bg-white/10 p-1 text-white backdrop-blur-lg shadow-inner shadow-white/10">
          <button
            type="button"
            className={clsx(
              "flex-1 py-2.5 rounded-full text-sm font-medium transition-colors duration-200",
              isAnnual
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            )}
            onClick={() => handleToggle(true)}
            aria-pressed={isAnnual}
            aria-label="Select yearly billing"
          >
            Yearly <span className="ml-1 text-indigo-300">-20%</span>
          </button>
          <button
            type="button"
            className={clsx(
              "flex-1 py-2.5 rounded-full text-sm font-medium transition-colors duration-200",
              !isAnnual
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            )}
            onClick={() => handleToggle(false)}
            aria-pressed={!isAnnual}
            aria-label="Select monthly billing"
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingData.map((plan) => (
          <PricingCard
            key={plan.name}
            selectedPlan={plan}
            isAnnual={isAnnual}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingDetails;
