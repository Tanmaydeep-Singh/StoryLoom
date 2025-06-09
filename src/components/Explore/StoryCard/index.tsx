'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface StoryCardProps {
    id: string;
    title: string;
    genre: string;
    image: string;
}

const StoryCard = ({ id, title, genre, image }: StoryCardProps) => {
    return (
        <Link href={`/stories/${id}`} className="group">
            {/* Card Container */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-indigo-500 bg-zinc-100 dark:bg-zinc-800 shadow-md transition-all duration-300 transform group-hover:scale-[1.03]">
                {/* Story Image */}
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-5 py-2 text-sm font-semibold bg-white text-black rounded-full shadow-lg hover:bg-zinc-100 transition">
                        Read Now
                    </button>
                </div>
            </div>

            {/* Title and Genre */}
            <div className="mt-3 text-left px-1">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{genre}</p>
            </div>
        </Link>
    );
};

export default StoryCard;
