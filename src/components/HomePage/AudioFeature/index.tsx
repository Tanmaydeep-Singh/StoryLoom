import Image from 'next/image';
import React from 'react';
import IphonePlayer from '@/components/MockUp/Iphone-player';

const AudioFeature = () => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#0f1116] text-gray-900 dark:text-white px-4 sm:px-6 lg:px-8 py-20">
      <section className="flex flex-col items-center text-center space-y-4  mb-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
          Read or listen to stories in the language you love.
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-xl">
          Discover stories from across the globe—explore something new, exciting, and deeply immersive in your own language.
        </p>
      </section>

      <div className="flex justify-center">
        <IphonePlayer/>
      </div>
    </div>
  );
};

export default AudioFeature;
