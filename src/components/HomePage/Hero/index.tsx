import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-2">
          Discover Stories. Connect Cultures.
        </h2>

        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl">
          From ancient legends to modern tales — explore diverse narratives that inspire, educate, and entertain.
        </p>

       
      </div>
    </div>
  );
};

export default Hero;
