/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import Link from "next/link";

interface StoryCardProps {
  title: string;
  imageUrl: string;
}

export default function StoryCard({ title, imageUrl }: StoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }} 
      className="relative w-[160px] h-[160px] md:w-[225px] md:h-[350px] bg-background-card rounded-lg overflow-hidden m-2 shadow-lg transform transition-transform duration-300"
    >
      <Link href={`/${title}`} passHref>
        <div className="w-full h-full cursor-pointer">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 backdrop-blur-md">
            <h1 className="text-white text-center text-sm md:text-base font-semibold">{title}</h1>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

