import { motion } from "framer-motion";
import Link from "next/link";
import TextCycle from "./TextCycle";

const Hero = () => {
  return (
    <div
      className="relative top-0 flex items-center justify-center w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/Frame.png')` }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center w-[90vw] h-[60vh] text-center text-white px-4">
        <TextCycle />
        <p className="text-lg md:text-2xl mb-8">
          Explore captivating stories and dive into magical worlds.
        </p>
      </div>
    </div>
  );
};

export default Hero;
