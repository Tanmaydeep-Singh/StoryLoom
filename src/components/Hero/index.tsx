import { motion } from "framer-motion";
import Link from "next/link";
import TextCycle from "./TextCycle";

const Hero = () => {
  return (
    <div >
      {/* <motion.div
        drag
        dragConstraints={{
          top: -100,
          left: -100,
          right: 100,
          bottom: 100,
        }}
        className="w-20 h-20 rounded-full  bg-white "
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          boxShadow: "0 0 20px 5px rgba(256, 256, 256, 0.7)",
        }}
      /> */}

      <div className="relative z-10 flex flex-col items-center justify-center w-[90vw] h-[60vh] text-center text-white px-4 text-5xl  font-bold mb-4">
        Discover, Read, and Learn Across Cultures.
        <p className="text-lg md:text-2xl mb-8">
          Explore captivating stories and dive into magical worlds.
        </p>
      </div>
    </div>
  );
};

export default Hero;
