import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';
const countries = [
    { name: 'Russia', genre: 'Russian', image: 'https://i.pinimg.com/236x/54/93/22/549322041d3eb23527fbf1d5e1d4bafa.jpg' },
    { name: 'Germany', genre: 'German', image: 'https://i.pinimg.com/564x/0e/c7/aa/0ec7aa1383c347acb0b1a91bf506f51b.jpg' },
    { name: 'France', genre: 'French', image: 'https://i.pinimg.com/564x/a7/87/8d/a7878d054c0c281018d5b08049d9f0d7.jpg' },
    { name: 'Spain', genre: 'Spanish', image: 'https://i.pinimg.com/564x/fc/87/6a/fc876ac2ec535f0e964da8b04b914248.jpg' },
    { name: 'Italy', genre: 'Italian', image: 'https://i.pinimg.com/736x/b0/89/95/b089951b2b827070692989b3345ca3aa.jpg' },
    { name: 'Japan', genre: 'Japanese', image: 'https://i.pinimg.com/564x/f9/e2/54/f9e254112c69629fab7bb6acc9ac5a17.jpg' }
];

const FolktalesMarquee = () => {
    return (
        <div>

            <div className="relative overflow-hidden w-[90vw] mx-auto">
                {/* Left Gradient Overlay */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-[20%] z-10 
                  bg-gradient-to-r from-white to-transparent 
                  dark:from-[#0f1116] dark:to-transparent" />

                {/* Right Gradient Overlay */}
                <div className="pointer-events-none absolute right-0 top-0 h-full w-[20%] z-10 
                  bg-gradient-to-l from-white to-transparent 
                  dark:from-[#0f1116] dark:to-transparent" />

                <Marquee
                    autoFill={true}
                    gradient={false}
                    speed={30}
                    delay={0}
                    play={true}
                    className='my-4'

                >
                    {countries.map((story, index) => (
                        <div key={index} className="flex flex-col items-center mx-4">
                            <div
                                className="relative w-64 h-96 rounded-2xl overflow-hidden border border-indigo-500 bg-zinc-100 dark:bg-zinc-800 shadow-md transition-all duration-300 group"
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
                                    <Link 
                                    href={`/explore?q=${story.genre}`}
                                     className="px-5 py-2 text-sm font-semibold bg-white text-black rounded-full shadow-lg hover:bg-zinc-100 transition"
                                     >
                                        
                                     Read Now
                                    </Link>
                                </div>
                            </div>

                            {/* Title and Genre Below Card */}
                            <div className="mt-3 w-full ml-5 ">
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white">{story.genre}</h3>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>

        </div>
    );
};

export default FolktalesMarquee;
