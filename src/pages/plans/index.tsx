import React from 'react';
import { motion } from 'framer-motion';
import PlansHeader from '@/components/Plans/Header';
import Table from '@/components/Plans/Table';

const Plans = () => {
  return (
    <main className="bg-gradient-to-r from-black via-gray-900 to-black shadow-md backdrop-blur-md bg-opacity-30 text-white">

      <PlansHeader/>
    

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-6 lg:px-12 py-16">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-blue-800 bg-opacity-20 text-white p-8 rounded-lg shadow-md border border-blue-700 transition-all duration-200"
        >
          <h2 className="text-3xl font-bold text-center">StoryLoom Free</h2>
          <p className="text-center text-lg mt-4">
            Start your cultural journey for free.
          </p>
          <div className="mt-6 text-center">
            <span className="text-4xl font-bold text-blue-300">$0</span>
            <p className="text-lg mt-2">Per Month</p>
          </div>
          <ul className="mt-6 space-y-4 text-gray-400">
            <li>Access to 100+ folktales from around the world</li>
            <li>Basic customer translations</li>
            <li>Access to 3 genres: Adventure, Romance, Mystery</li>
            <li>Community forums access</li>
            <li>Listen to 10+ audio stories</li>
            <li>Basic visual stories</li>
            <li>Ads-supported experience</li>
          </ul>
          <div className="mt-8 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-200">
              Get Started for Free
            </button>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-blue-800 bg-opacity-30 text-white p-8 rounded-lg shadow-md border border-blue-700 transition-all duration-200"
        >
          <h2 className="text-3xl font-bold text-center">StoryLoom Pro</h2>
          <p className="text-center text-lg mt-4">
            Unlock more features for a richer experience.
          </p>
          <div className="mt-6 text-center">
            <span className="text-4xl font-bold">$3.99</span>
            <p className="text-lg mt-2">Per Month</p>
          </div>
          <ul className="mt-6 space-y-4 text-gray-400">
            <li>Access to 200+ stories</li>
            <li>Enhanced translations</li>
            <li>Access to 5 genres, including Sci-Fi and Historical</li>
            <li>Listen to 50+ audio stories</li>
            <li>Limited offline reading for selected stories</li>
            <li>Reduced ads experience</li>
            <li>Exclusive community events</li>
          </ul>
          <div className="mt-8 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-200">
              Go Pro
            </button>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-blue-900 text-white p-8 rounded-lg shadow-md border border-blue-800 transition-all duration-200"
        >
          <h2 className="text-3xl font-bold text-center">StoryLoom Premium</h2>
          <p className="text-center text-lg mt-4">
            Unlock the full cultural experience.
          </p>
          <div className="mt-6 text-center">
            <span className="text-4xl font-bold">$7.99</span>
            <p className="text-lg mt-2">Per Month</p>
          </div>
          <ul className="mt-6 space-y-4">
            <li>Access to all stories from 200+ countries</li>
            <li>Unlimited customer translations</li>
            <li>Exclusive genres: Historical, Sci-Fi, Folklore</li>
            <li>Listen to 100+ audio stories</li>
            <li>Download stories for offline reading</li>
            <li>Ad-free experience</li>
            <li>Advanced visual stories with immersive effects</li>
            <li>Priority access to community events</li>
            <li>Personalized recommendations</li>
          </ul>
          <div className="mt-8 text-center">
            <button className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-2 px-6 rounded-full transition-colors duration-200">
              Go Premium
            </button>
          </div>
        </motion.div>
      </section>
    <Table/>
      <section className="text-center py-12  text-white">
        <h4 className="text-2xl lg:text-3xl font-bold">
          Ready to dive deeper into cultural stories?
        </h4>
        <p className="mt-4">
          Get started with StoryLoom Premium and enjoy the full experience.
        </p>
        <div className="mt-8">
          <button className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-2 px-6 rounded-full transition-colors duration-200">
            Go Premium Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default Plans;
