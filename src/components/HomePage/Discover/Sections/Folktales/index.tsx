import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const FolktalesMarquee = () => {
    return (
        <div>

            <div className="relative overflow-hidden w-[90vw] mx-auto">
                {/* Left Gradient Overlay */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-[30%] z-10 
                  bg-gradient-to-r from-white/90 to-transparent 
                  dark:from-[#0f1116] dark:to-transparent" />

                {/* Right Gradient Overlay */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-[30%] z-10 
                  bg-gradient-to-l from-white/90 to-transparent 
                  dark:from-[#0f1116] dark:to-transparent" />

                <Marquee
                    autoFill={true}
                    gradient={false}
                    speed={30}
                    delay={0}
                    play={true}
                    className='my-4'

                >
                    {Array(8).fill(null).map((_, index) => (
                        <div key={index} className="flex flex-col items-center mx-4">
                            <div
                                className="relative w-64 h-96 rounded-2xl overflow-hidden border border-indigo-500 bg-zinc-100 dark:bg-zinc-800 shadow-md transition-all duration-300 group"
                            >
                                {/* Background Image */}
                                <Image
                                    src="https://i.pinimg.com/736x/05/ea/50/05ea502f26a243e48e48dd21be9923fb.jpg"
                                    width={1000}
                                    height={1000}
                                    alt="Story Cover"
                                    className="w-full h-full object-cover"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button className="px-5 py-2 text-sm font-semibold bg-white text-black rounded-full shadow-lg hover:bg-zinc-100 transition">
                                        Read Now
                                    </button>
                                </div>
                            </div>

                            {/* Title and Genre Below Card */}
                            <div className="mt-3 w-full ml-5 ">
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white">Story Title</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Genre</p>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>

        </div>
    );
};

export default FolktalesMarquee;
