import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import data from './data.json';
import Link from 'next/link';

const StoriesMarquee = () => {

    const arr1 = data.slice(0, data.length / 2);
    const arr2 = data.slice(data.length / 2, data.length);

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
                    speed={25}
                    delay={0}
                    play={true}
                    className='my-4'
                >
                    {arr1.map((story, index) => (
                        <div key={index} className="flex flex-col items-center mx-4">
                            <div
                                className="relative w-40 h-40 rounded-2xl overflow-hidden border border-indigo-500 bg-zinc-100 dark:bg-zinc-800 shadow-md transition-all duration-300 group"
                            >
                                {/* Background Image */}
                                <Image
                                    src={story.image}
                                    width={1000}
                                    height={1000}
                                    alt="Story Cover"
                                    className="w-full h-full object-cover"
                                />


                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Link href={`/story/${story?.id}`} >

                                        <button className="px-4 py-1 text-xs font-semibold bg-white text-black rounded-full shadow hover:bg-zinc-100">
                                            Read Now
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Title and Genre */}
                            <div className="mt-2 w-full ml-4">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{story.title.slice(0, 20)}</h3>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{story.genre}</p>
                            </div>
                        </div>
                    ))}
                </Marquee>
                <Marquee
                    autoFill={true}
                    gradient={false}
                    speed={20}
                    delay={0}
                    play={true}
                    direction='right'
                    className='my-4'

                >
                    {arr2.map((story, index) => (
                        <div key={index} className="flex flex-col items-center mx-4">
                            <div
                                className="relative w-40 h-40 rounded-2xl overflow-hidden border border-indigo-500 bg-zinc-100 dark:bg-zinc-800 shadow-md transition-all duration-300 group"
                            >
                                {/* Background Image */}
                                <Image
                                    src={story.image}
                                    width={1000}
                                    height={1000}
                                    alt="Story Cover"
                                    className="w-full h-full object-cover"
                                />


                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Link href={`/story/${story?.id}`} >
                                        <button className="px-4 py-1 text-xs font-semibold bg-white text-black rounded-full shadow hover:bg-zinc-100">
                                            Read Now
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Title and Genre */}
                            <div className="mt-2 w-full ml-4">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">{story.title.slice(0, 20)}</h3>
                                <p className="text-xs text-gray-600 dark:text-gray-400">{story.genre}</p>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>

        </div>
    );
};

export default StoriesMarquee;
