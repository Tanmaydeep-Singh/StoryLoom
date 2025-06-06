'use client';

import { useUIStore } from '@/store';
import React, { useState } from 'react';

const tabs = ['Editor’s Picks', 'Popular', 'New Arrivals'];

const Discover = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { theme } = useUIStore();

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-16 transition-colors duration-300">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
          Discover stories to get lost in.
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Curated collections from our editors and what readers love right now.
        </p>
      </div>

      {/* Toggle Tabs */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${activeTab === tab
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Placeholder for story cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className={`h-48 rounded-xl shadow-sm transition-colors duration-200 
              ${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-100'}`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Discover;
