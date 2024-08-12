// components/Hero.tsx
import { motion } from "framer-motion";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <div className="relative top-0 items-center justify-center w-full h-screen overflow-hidden">
      <Navbar />
      {/* Video Background */}
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

     
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-4 text-4xl font-bold">
        <h1 className="text-5xl md:text-6xl">Discover, Read, and Learn Across Cultures.</h1>
        <p className="text-lg md:text-2xl mt-4">
          Explore captivating stories and dive into magical worlds.
        </p>
      </div>
    </div>
  );
};

export default Hero;

// import { motion } from "framer-motion";
// import Link from "next/link";
// import TextCycle from "./TextCycle";

// const Hero = () => {
//   return (
//     <div
//       className="relative top-0 flex items-center justify-center w-full h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url('/BGTemp.jpg')` }}
//     >
//       <div className="relative z-10 flex flex-col items-center justify-center w-[90vw] h-[60vh] text-center text-white px-4 text-4xl font-bold">
//           Discover, Read, and Learn Across Cultures.
//       <p className="text-lg md:text-2xl mb-8">
//           Explore captivating stories and dive into magical worlds.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Hero;