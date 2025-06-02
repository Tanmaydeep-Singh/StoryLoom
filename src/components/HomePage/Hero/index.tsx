import { motion } from "framer-motion";
import Navbar from "../../Navbar";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navbar />

      {/* Video Background */}
      <div className="w-full h-full relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/WithNightFilterSlow.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

        {/* Content */}
        <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl  font-serif font-extrabold tracking-tight leading-tight max-w-5xl">
            Discover, Read, and Learn Across Cultures.
          </h1>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl font-serif font-semibold max-w-2xl text-white/90">
            Explore captivating stories and dive into magical worlds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
