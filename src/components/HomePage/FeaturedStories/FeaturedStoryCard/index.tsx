import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useState } from 'react';

interface StoryCard {
    id: any,
    genre: string,
    image: string,
    title: string,
    story: string,
}

const FeaturedStoryCard = ({ id, genre, image, title, story }: StoryCard) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            key={id}
            className="relative w-[80vw]  md:w-[25vw] h-60 sm:h-64 rounded-xl overflow-hidden border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-transform"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link href={`/story/${id}`} passHref>
                <div className="cursor-pointer">
                    <div className="relative w-full h-48 sm:h-56 md:h-64">
                        <Image
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-3xl"
                            priority={true}
                        />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

                    <motion.div
                        className="absolute bottom-0 left-0 z-20 p-3 sm:p-4 rounded-b-3xl w-full backdrop-blur-md bg-black/10 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between">
                            <h3 className="text-white text-base sm:text-lg font-semibold truncate">{title}</h3>
                            <span className="text-blue-300 text-xs sm:text-sm font-medium">{genre}</span>
                        </div>
                        {story && (
                            <p className="text-gray-300 text-xs sm:text-sm mt-1 line-clamp-2">{story}</p>
                        )}
                    </motion.div>
                </div>
            </Link>
        </div>
    );
}

export default FeaturedStoryCard;
