"use client";

import Link from "next/link";
import { FolktailsMarquess } from "./FolktaleMarquee";

const ExploreCultures = () => {
  return (
    <section className="w-full min-h-[80vh] py-20 px-6 sm:px-8 md:px-16 bg-gradient-to-br from-[#050505] to-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col xl:flex-row items-center gap-16 z-10">

        {/* Left: Text */}
        <div className="w-full xl:w-2/5 text-center xl:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-extrabold tracking-tight text-[#e8d5b7]">
            Explore Cultures
          </h2>
          <p className="text-[#b8a58c] text-base sm:text-lg xl:text-xl font-medium leading-relaxed max-w-md mx-auto xl:mx-0">
            Learn about diverse cultural traditions and heritage through storytelling.
          </p>
          <div className="pt-2">
            <Link href="/folktales/All">
              <button className="px-6 py-2 border border-[#3c6255] text-[#3c6255] rounded-full font-semibold hover:bg-[#3c6255] hover:text-white transition duration-300">
                Discover
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Marquee */}
        <div className="w-full xl:w-3/5">
          <FolktailsMarquess />
        </div>
      </div>
    </section>
  );
};

export default ExploreCultures;
