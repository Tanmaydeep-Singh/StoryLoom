import { motion } from "framer-motion";
import Link from "next/link";

interface StoryCardProps {
  title: string;
  imageUrl: string;
}

export default function StoryCard({ title, imageUrl }: StoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }} // Slightly smaller scale for a more subtle hover effect
      whileTap={{ scale: 0.95 }}  // Slightly smaller scale for a more subtle tap effect
      className="relative w-[125px] h-[125px] md:w-[175px] md:h-[175px] bg-mediumGreen rounded-md overflow-hidden m-2"
    >
      <Link href={`/${title}`} passHref>
        <div className="w-full h-full">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 bg-black p-2">
            <h1 className="text-white text-center text-sm md:text-base">{title}</h1>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
