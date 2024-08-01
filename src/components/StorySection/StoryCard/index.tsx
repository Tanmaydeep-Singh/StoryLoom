import { motion } from "framer-motion";
import Link from "next/link";

interface StoryCardProps {
  id: string;
  title: string;
  imageUrl: string;
}

export default function StoryCard({ id, title, imageUrl }: StoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      className=" w-[125px] h-[125px]  md:w-[175px] md:h-[175px] bg-mediumGreen rounded-md p-2 m-2 overflow-hidden"
    >
      <Link href={`/story/${id}`}>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-[100px] object-cover rounded-md"
          />
          <h1 className="text-white mt-2 text-center">{title}</h1>
      </Link>
    </motion.div>
  );
}
