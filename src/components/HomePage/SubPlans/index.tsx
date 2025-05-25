import React from 'react';
import PricingDetails from './PricingDetails';

const SubPlans = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-bold text-[#e8d5b7] mb-4">
          Discover the Perfect Plan for You
        </h2>
        <p className="text-[#b8a58c] text-base sm:text-lg xl:text-xl leading-relaxed max-w-2xl mx-auto">
          Whether you&apos;re looking for a free plan or something more, we&apos;ve got you covered. Explore our plans to find the one that fits your needs.
        </p>
      </div>

      <PricingDetails />
    </section>
  );
};

export default SubPlans;