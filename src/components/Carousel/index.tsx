import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import carouselConfig from './carouselConfig';

const images = [
  'https://images.unsplash.com/photo-1515966097209-ec48f3216288?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1426840963626-ffdf2d7ef80b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1688507383637-78f49f095269?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (carouselConfig.autoPlay) {
      const interval = setInterval(handleNext, carouselConfig.autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="relative w-full md:w-[70vw] h-96 sm:h-128 md:h-[55vh] overflow-hidden rounded-lg">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={images[currentIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 200, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt="carousel image"
            layout="fill"
            objectFit="cover"
            priority={true} // Use priority if you want to load the image eagerly
          />
        </motion.div>
      </AnimatePresence>
      {carouselConfig.showButtons && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 hover:bg-opacity-100 text-white p-4 rounded-full focus:outline-none transition-all duration-300 z-10"
          >
            {`<`}
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 hover:bg-opacity-100 text-white p-4 rounded-full focus:outline-none transition-all duration-300 z-10"
          >
            {`>`}
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
