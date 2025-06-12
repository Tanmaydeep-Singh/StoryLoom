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
import AudioFeature from "@/components/HomePage/AudioFeature";

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

          <section className="my-10 md:mt-20">
            <AudioFeature />
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
