import { motion } from "framer-motion";
import Link from "next/link";

interface StoryCardProps {
  title: string;
  imageUrl: string;
}

export default function StoryCard({ title, imageUrl }: StoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }} // Slightly larger scale for hover effect
      whileTap={{ scale: 0.95 }}  // Slightly smaller scale for tap effect
      className="relative w-[125px] h-[125px] md:w-[175px] md:h-[175px] bg-background-card rounded-md overflow-hidden m-2 backdrop-blur-sm"
    >
      <Link href={`/${title}`} passHref>
        <div className="w-full h-full">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-background-default p-2">
            <h1 className="text-accent-300 text-center text-sm md:text-base">{title}</h1>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
