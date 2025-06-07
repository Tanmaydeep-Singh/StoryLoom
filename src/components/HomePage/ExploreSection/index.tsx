"use client";

import Link from "next/link";
import { FolktailsMarquess } from "./FolktaleMarquee";

const ExploreCultures = () => {
  return (
    <section className="w-full min-h-[80vh] py-20 px-6 sm:px-8 md:px-16 bg-white dark:bg-[#0f1116] text-gray-900 dark:text-white transition-colors duration-300  flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col xl:flex-row items-center gap-16 z-10">

        {/* Left: Text */}
        <div className="w-full xl:w-2/5 text-center xl:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
            Explore Cultures
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Learn about diverse cultural traditions and heritage through storytelling.
          </p>
          <div className="">
            <Link href="/folktales/All">
              <button className="px-4 py-2 rounded-full text-sm font-medium transition-colors  bg-black text-white dark:bg-white dark:text-black">
                Discover
              </button>
            </Link>
          </div>
        </div>
        {/* Right: Marquee */}
        <div className="w-screen xl:w-3/5">
          <FolktailsMarquess />
        </div>
      </div>
    </section>
  );
};


export default ExploreCultures;
