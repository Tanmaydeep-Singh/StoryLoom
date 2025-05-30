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
import Head from "next/head";
import NewsletterSubscription from "@/components/HomePage/NewsletterSubscription";
import SubPlans from "@/components/HomePage/SubPlans";

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
    <>
      <Head>
        <title>StoryLoom - Discover the World Around</title>

        <meta name="description" content="Discover stories and improve your language skills with StoryLoom." />
        <meta property="og:title" content="StoryLoom - Discover the World Around" />
        <meta property="og:description" content="Discover stories and improve your language skills with StoryLoom." />
        <meta property="og:image" content="/Logos/logo.png" />
        <link rel="canonical" href="https://storyloom.in/" />
      </Head>    <main className="relative">
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

          <section className="my-10 md:mt-20">
            <StoryCategorySection />
          </section>

          <section className="my-10 md:mt-20">
            <SubPlans />
          </section>


          <section className="my-10 md:mt-20">
            <FeaturedStorie />
          </section>


          {/* <section className="my-10 md:mt-20">
            <ParallaxAbout />
          </section> */}


          <section>
            <ContributeAsWriter />
          </section>



          {/* <section>
            <CheckPlans/>
          </section> */}

          <section className="my-10 md:mt-20">
            <FAQ />
          </section>
        </div>
      </main>
    </>

  );
}
