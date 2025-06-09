/* eslint-disable @next/next/no-img-element */
'use client';

import { useAnimation, motion } from "framer-motion";
import { useEffect, useRef, useCallback } from "react";
import Head from "next/head";

import Hero from "@/components/HomePage/Hero";
import FeaturedStorie from "@/components/HomePage/FeaturedStories";
import FAQ from "@/components/HomePage/FAQ";
import YTranslateCubic from "@/components/AnimationSection/YTranslateCubic";
import ContributeAsWriter from "@/components/HomePage/Contribute/Writer";
import SubPlans from "@/components/HomePage/SubPlans";
import Ipad from "@/components/MockUp/Ipad";
import Iphone from "@/components/MockUp/Iphone";
import Discover from "@/components/HomePage/Discover";

export default function Home() {
  const controls = useAnimation();
  const heroRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    if (heroRef.current) {
      const heroHeight = heroRef.current.clientHeight;
      const scrollY = window.scrollY;
      const opacity = Math.min(scrollY / heroHeight, 1);

      requestAnimationFrame(() => {
        controls.start({ opacity });
      });
    }
  }, [controls]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Head>
        <title>StoryLoom - Discover the World Around</title>
        <meta
          name="description"
          content="Discover stories and improve your language skills with StoryLoom."
        />
        <meta property="og:title" content="StoryLoom - Discover the World Around" />
        <meta
          property="og:description"
          content="Discover stories and improve your language skills with StoryLoom."
        />
        <meta property="og:image" content="/Logos/logo.png" />
        <link rel="canonical" href="https://storyloom.in/" />
      </Head>

      <main className="relative">

        <div className="flex flex-col items-center justify-between md:p-24">
          <Hero />


          <Ipad />
          <Iphone />

          <section className="my-10 md:mt-20">
            <Discover />
          </section>

          {/* TODO */}

          <section className="my-10 md:mt-20">

            <h1 >TODO= 09-06-2025</h1>
            <h2>Add Content to stories and books.</h2>
            <h2>Clean and filter Stories</h2>
            <h2>Revamp the Read and listen section</h2>
            <h2>Revamp and link the explore page</h2>



          </section>


          <section className="my-10 md:mt-20">
            <section className="w-full px-6 md:px-12 lg:px-24 py-20 bg-gray-50 dark:bg-zinc-900 transition-colors duration-300">
              <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Text Block */}
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Read and Listen in Your Language
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    Experience timeless folktales and stories in the language you connect with most.
                    Whether youre reading or listening, immerse yourself fully.
                  </p>

                  {/* Language Tags */}
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-4">
                    {['EN', 'ES', 'FR', 'HI', 'JP', 'RU'].map(lang => (
                      <span key={lang} className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black rounded-full text-xs font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card UI */}
                <div className="md:w-1/2 max-w-md bg-white dark:bg-zinc-800 rounded-xl shadow p-6 space-y-4 relative">
                  <img
                    src="https://images.unsplash.com/photo-1589874186480-ecd085096d68?q=80&w=1887&auto=format"
                    alt="Story Preview"
                    className="rounded-lg w-full h-40 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">The Sound of Stillness</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                    A story that transports you to the edge of the world...
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    {/* Language Selector */}
                    <select className="bg-gray-100 dark:bg-zinc-700 text-sm px-3 py-2 rounded-md text-gray-700 dark:text-white">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>Hindi</option>
                      <option>Japanese</option>
                    </select>

                    {/* Play Audio */}
                    <button className="bg-black dark:bg-white text-white dark:text-black text-sm px-4 py-2 rounded-md font-medium hover:opacity-90">
                      ▶ Play Audio
                    </button>
                  </div>
                </div>
              </div>
            </section>

          </section>



          <section className="my-10 md:mt-20">
            <SubPlans />
          </section>


          <section className="my-10 md:mt-20">
            <ContributeAsWriter />
          </section>

          <section className="my-10 md:mt-20">
            <FAQ />
          </section>

        </div>
      </main>
    </>
  );
}
