import { motion } from "framer-motion";
import Link from "next/link";

interface CountryCardProps {
  title: string;
  imageUrl: string;
}

const CountryCard = ({ title, imageUrl }: CountryCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-[120px] h-[180px] sm:w-[150px] sm:h-[220px] md:w-[200px] md:h-[300px] lg:w-[250px] lg:h-[400px] bg-background-card rounded-xl overflow-hidden m-4 shadow-xl transform transition-transform duration-300"
    >
      <Link href={`/${title}`} passHref>
        <div className="w-full h-full cursor-pointer">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 backdrop-blur-lg">
            <h1 className="text-white text-center text-sm sm:text-base md:text-lg font-semibold">
              {title}
            </h1>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CountryCard;
