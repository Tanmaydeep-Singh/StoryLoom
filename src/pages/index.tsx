import { useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import HighlightSection from "@/components/HighlightSection";
import StoryCategorySection from "@/components/StorySection";
import ParallaxAbout from "@/components/Parallex/About";
import FeaturedStorie from "@/components/FeaturedStories";
import FAQ from "@/components/FAQ";
import YTranslateCubic from "@/components/AnimationSection/YTranslateCubic";
import ExploreSection from "@/components/ExploreSection";

export default function Home() {
  const controls = useAnimation();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.clientHeight;
        const scrollY = window.scrollY;
        const opacity = Math.min(scrollY / heroHeight, 1);
        controls.start({ opacity });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <main className="relative">
      <div ref={heroRef} className="relative">
        <Hero />
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={controls}
        />
      </div>

      <div className="flex min-h-screen flex-col items-center justify-between md:pt-0 md:p-24">
        <YTranslateCubic>
          <ExploreSection/>
        </YTranslateCubic>

        <YTranslateCubic>
          <HighlightSection />
        </YTranslateCubic>

        <section className="my-10 md:mt-20">
          <StoryCategorySection />
        </section>

        <section className="my-10 md:mt-20">
          <ParallaxAbout />
        </section>

        <section>
          <FeaturedStorie />
        </section>

        <section className="my-10 md:mt-20">
          <FAQ />
        </section>
      </div>
    </main>
  );
}
