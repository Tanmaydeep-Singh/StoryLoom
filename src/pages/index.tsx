import { useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Hero from "@/components/HomePage/Hero";
import HighlightSection from "@/components/HomePage/HighlightSection";
import StoryCategorySection from "@/components/HomePage/StorySection";
import ParallaxAbout from "@/components/HomePage/Parallex/About";
import FeaturedStorie from "@/components/HomePage/FeaturedStories";
import FAQ from "@/components/HomePage/FAQ";
import YTranslateCubic from "@/components/AnimationSection/YTranslateCubic";
import ExploreSection from "@/components/HomePage/ExploreSection";
import ContributeAsWriter from "@/components/HomePage/Contribute/Writer";

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
          <ExploreSection />
        </YTranslateCubic>

        <YTranslateCubic>
          <HighlightSection />
        </YTranslateCubic>

        <YTranslateCubic>
          <StoryCategorySection />
        </YTranslateCubic>


        <YTranslateCubic>
          <ParallaxAbout />
        </YTranslateCubic>

        <YTranslateCubic>

          <FeaturedStorie />
        </YTranslateCubic>

        <YTranslateCubic>

          <ContributeAsWriter />
        </YTranslateCubic>

        <YTranslateCubic>
          <FAQ />
        </YTranslateCubic>
      </div>
    </main>
  );
}
