import { motion } from "framer-motion";
import Link from "next/link";
import TextCycle from "./TextCycle";

const Hero = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-[60vw] h-[60vh] text-center text-white px-4">
      <TextCycle/>
      <p className="text-lg md:text-2xl mb-8">Explore captivating stories and dive into magical worlds.</p>
    </div>
  );
};

export default Hero;
