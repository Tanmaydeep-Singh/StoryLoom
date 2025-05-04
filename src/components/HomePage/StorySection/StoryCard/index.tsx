"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface StoryCardProps {
  title: string;
  imageUrl: string;
  description?: string;
}

export default function StoryCard({ title, imageUrl, description }: StoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative min-w-[10rem] sm:min-w-[30rem] h-64 sm:h-72 rounded-3xl overflow-hidden border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-transform"
      whileHover={{ scale: 1.05, zIndex: 10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/${title}`}>
        <div className="relative w-full h-full cursor-pointer">
          {/* Background image with zoom effect */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={imageUrl}
              alt={title || "Story image"}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

          {/* Glassmorphism + text content (only on hover) */}
          <motion.div
            className={`absolute bottom-0 left-0  z-20 p-4 rounded-b-xl text-left w-full ${
              isHovered ? "backdrop-blur-sm bg-white/10" : ""
            } transition-all duration-300`}
          >
            <h3 className="text-white text-sm sm:text-lg font-semibold">{title}</h3>
            {isHovered && description && (
              <p className="text-white text-xs sm:text-sm mt-1 line-clamp-2">{description}</p>
            )}
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
