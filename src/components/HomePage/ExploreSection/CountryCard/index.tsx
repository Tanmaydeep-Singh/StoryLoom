"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface CountryCardProps {
  title: string;
  genre: string;
  imageUrl: string;
}

const CountryCard = ({ title, genre, imageUrl }: CountryCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="relative min-w-[10rem] sm:min-w-[12rem] h-64 sm:h-72 rounded-3xl overflow-hidden transition-transform border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
    >
      <Link href={`/folktales/${genre}`} passHref>
        <div className="cursor-pointer w-full h-full relative group">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover w-full h-full transition-transform duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-white text-base sm:text-lg font-semibold">{title}</h3>
            <p className="text-white/70 text-xs sm:text-sm">{genre} Folktales</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CountryCard;
