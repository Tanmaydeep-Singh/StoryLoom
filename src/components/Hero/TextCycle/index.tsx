import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "Discover Your Next Adventure",
  "Explore Captivating Stories",
  "Dive into Magical Worlds",
];

const TextCycle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const cycleText = async () => {
      while (true) {
        await controls.start({ opacity: 0, transition: { duration: 0.5 } });
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        await controls.start({ opacity: 1, transition: { duration: 0.5 } });
        await new Promise((resolve) => setTimeout(resolve, 3000));
      }
    };

    cycleText();
  }, [controls]);

  return (
    <motion.h1 className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        {texts[currentIndex]}

    </motion.h1>
  );
};

export default TextCycle;
