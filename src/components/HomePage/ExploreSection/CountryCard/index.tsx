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
      whileHover={{ scale: 1.045 }}
      whileTap={{ scale: 0.97 }}
      className="relative min-w-[10rem] sm:min-w-[12rem] h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-md  transition-transform"
    >
      <Link href={`/folktales/${genre}`}>
        <div className="cursor-pointer w-full h-full relative group">
          <Image
            src={imageUrl}
            alt={`${title} Flag`}
            fill
            priority
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-white text-lg font-semibold">{title}</h3>
            <p className="text-white/70 text-xs sm:text-sm">{genre} Folktales</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CountryCard;
