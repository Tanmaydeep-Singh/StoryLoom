import YTranslateCubic from "@/components/AnimationSection/YTranslateCubic";
import Carousel from "@/components/Carousel";
import FAQ from "@/components/FAQ";
import FeaturedStorie from "@/components/FeaturedStories";
import Hero from "@/components/Hero";
import HighlightSection from "@/components/HighlightSection";
import ParallaxAbout from "@/components/Parallex/About";
import StoryCategorySection from "@/components/StorySection";
import { useInView } from "framer-motion";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const reviews = [
  {
    id: 1,
    user: "John Doe",
    rating: 4,
    comment: "A fascinating story that kept me hooked till the end!",
  },
  {
    id: 2,
    user: "Jane Smith",
    rating: 5,
    comment: "Absolutely loved the characters and the plot twists!",
  },
  {
    id: 3,
    user: "Alice Johnson",
    rating: 3,
    comment: "Good story, but some parts felt a bit slow.",
  },
];


export default function Home() {

  const [scrollY, setScrollY] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log(scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [scrollY]);





  return (


    <main className="">
      <Hero />
      <div className="flex min-h-screen flex-col items-center justify-between md:pt-0 md:p-24">
        {/* <Carousel /> */}

        {/* Card */}



        <YTranslateCubic>
          <HighlightSection />
        </YTranslateCubic>

        <section className=" my-10 md:mt-20">
          <StoryCategorySection />
        </section>

        <section className=" my-10 md:mt-20">
          <ParallaxAbout />
        </section>

        <section>
          <FeaturedStorie />
        </section>

        <section className=" my-10 md:mt-20">
          <FAQ />
        </section>


        {/* <div className="mt-8">
  <h2 className="text-xl font-bold mb-4">User Reviews</h2>
  <div className="space-y-4">
    {reviews.map((review) => (
      <div key={review.id} className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center">
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.18a1 1 0 00.95.69h4.394c.969 0 1.371 1.24.588 1.81l-3.558 2.589a1 1 0 00-.364 1.118l1.357 4.18c.3.921-.755 1.688-1.54 1.118L10 13.651l-3.557 2.589c-.785.57-1.841-.197-1.54-1.118l1.357-4.18a1 1 0 00-.364-1.118L2.337 9.607c-.783-.57-.38-1.81.588-1.81h4.394a1 1 0 00.95-.69l1.357-4.18z" />
              </svg>
            ))}
          </div>
          <p className="ml-4">{review.user}</p>
        </div>
        <p className="mt-2 text-gray-600">{review.comment}</p>
      </div>
    ))}
  </div>
</div> */}

      </div>
    </main>
  );
}
