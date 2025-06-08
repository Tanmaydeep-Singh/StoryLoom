'use client';

import { useUIStore } from '@/store';
import React, { useState } from 'react';
import StoriesMarquee from './Sections/Stories';
import BooksMarquee from './Sections/Books';
import FolktalesMarquee from './Sections/Folktales';
import { AnimatePresence, motion } from 'framer-motion';

const tabs = ['Folktales', 'Stories', 'Books'];

const Discover = () => {
  const [activeTab, setActiveTab] = useState(tabs[1]);
  const { theme } = useUIStore();

  const renderTabContent = (tab: string) => {
    switch (tab) {
      case 'Folktales':
        return <FolktalesMarquee />;
      case 'Stories':
        return <StoriesMarquee />;
      case 'Books':
        return <BooksMarquee />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 transition-colors duration-300">
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
          Discover stories to get lost in.
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Curated collections from our editors and what readers love right now.
        </p>
      </div>

      <div className="flex justify-center gap-3 mb-8 flex-wrap px-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ease-in-out
              ${activeTab === tab
                ? 'bg-black text-white dark:bg-white dark:text-black'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="relative min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {renderTabContent(activeTab)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Discover;
