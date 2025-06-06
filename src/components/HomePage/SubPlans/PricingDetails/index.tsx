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

const pricingData: Plan[] = [
  {
    name: "Basic Plan",
    price: "0",
    details: "base",
    description: "For casual readers",
    features: [
      "Unlimited stories",
      "All supported languages",
      "Basic AI translations",
      "Ads displayed",
    ],
  },
  {
    name: "Plus Plan",
    price: "5",
    details: "plus",
    discount: "15%",
    description: "Enhanced features",
    features: [
      "Ad-free experience",
      "Offline access to saved stories",
      "TTS-based audio narration",
      "Enhanced translations",
      "Bookmarks & Dark Mode",
      "Reading history sync",
    ],
  },
  {
    name: "Pro Plan",
    price: "15",
    details: "pro",
    discount: "20%",
    description: "Power users & enthusiasts",
    features: [
      "Everything in Plus",
      "Unlimited downloads",
      "Priority story access",
      "Narration speed control",
      "Reading dashboard",
      "Smart recommendations",
    ],
  },
];

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
