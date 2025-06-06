import React from "react";
import PricingDetails from "./PricingDetails";

const SubPlans = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-24">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
          Discover the Perfect Plan for You
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Whether you&apos;re starting out or ready to unlock more features, our plans are designed to suit every reader’s journey.
        </p>
      </div>

      <PricingDetails />
    </section>
  );
};

export default SubPlans;
