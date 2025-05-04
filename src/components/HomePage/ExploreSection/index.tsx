"use client";

import Link from "next/link";
import { FolktailsMarquess } from "./FolktaleMarquee";

const ExploreCultures = () => {
    return (
        <section className="w-full h-[80vh] py-16 px-6 md:px-12 bg-gradient-to-br from-[#050505] to-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
            <div className="max-w-7xl w-full flex flex-col md:flex-row items-center  z-10">

                {/* Left: Text */}
                <div className="space-y-6 md:w-2/5 pb-20">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#e8d5b7]">
                        Explore Cultures.
                    </h2>
                    <p className="text-[#b8a58c] text-base md:text-lg max-w-md leading-relaxed">
                        Learn about diverse cultural traditions and heritage through storytelling.
                    </p>
                    <Link href="/folktales/All">
                        <button className="mt-4 px-6 py-2 bg-[#3c6255] text-white rounded-full text-sm font-medium hover:bg-[#2f4e43] transition duration-200">
                            Discover
                        </button>
                    </Link>
                </div>

                {/* Right: Folktails Marquee */}
                <div className="w-[80vw]  md:w-3/5">
                    <FolktailsMarquess />
                </div>

            </div>
        </section>
    );
};

export default ExploreCultures;
