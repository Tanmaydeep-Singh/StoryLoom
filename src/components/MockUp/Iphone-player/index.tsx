import React, { useState } from 'react';
import Image from 'next/image';
import { Moon, Sun, Play, Pause, SkipForward, SkipBack, BookOpenText, ListFilter } from 'lucide-react';
import storyloomLogoDark from "../../../../public/favicon/storyloomLogoDark.png";
import { useUIStore } from '@/store';

const IphonePlayer = () => {
    const { toggleTheme } = useUIStore();
    const theme = useUIStore((state) => state.theme);

    const [selectedLang, setSelectedLang] = useState('en');
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const languages = ['en', 'rs', 'sp'];

    return (
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            {/* Top notch */}
            <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20" />

            {/* Side buttons (often hidden or more subtle in a real player view) */}
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

            {/* Screen */}
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] relative">
                {/* Background Image - Audiobook Cover */}
                <Image
                    src="https://i.pinimg.com/736x/ad/47/0c/ad470c079f3e16fd51414e6b656af29c.jpg" // Replace with a high-res audiobook cover
                    alt="Audiobook Cover"
                    layout="fill"
                    objectFit="cover"
                    priority // Prioritize loading the main background image
                    className="z-0"
                />

                {/* Overlay for UI elements - semi-transparent */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-between z-10 p-4">
                    {/* Top Bar: Logo (Back/Home) and Actions (Theme, Chapters/Settings) */}
                    <div className="flex items-center justify-between w-full">
                        {/* Storyloom Logo (acting as a back/home indicator) */}
                        <button className="p-2 rounded-full hover:bg-white/20 transition">
                            <Image
                                src={storyloomLogoDark}
                                alt="Storyloom logo"
                                width={28}
                                height={28}
                                className="rounded-md"
                            />
                        </button>

                        {/* Theme Toggle and Audiobook Actions */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                                className="p-2 rounded-full hover:bg-white/20 transition"
                            >
                                {theme === 'dark' ? (
                                    <Sun className="w-5 h-5 text-yellow-300" />
                                ) : (
                                    <Moon className="w-5 h-5 text-gray-200" />
                                )}
                            </button>
                            <button
                                onClick={() => alert('Open Audiobook Chapters/Settings')}
                                aria-label="Open Audiobook Chapters or Settings"
                                className="p-2 rounded-full hover:bg-white/20 transition"
                            >
                                <BookOpenText className="w-5 h-5 text-white" />
                            </button>
                            <div className="relative"> {/* Wrap language dropdown for positioning */}
                                <button
                                    onClick={() => setIsOpen((prev) => !prev)}
                                    className="p-2 rounded-full hover:bg-white/20 transition"
                                >
                                    <ListFilter className="w-5 h-5 text-white" />
                                </button>
                                {isOpen && (
                                    <div className="absolute right-0 mt-2 bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg overflow-hidden z-20">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang}
                                                onClick={() => {
                                                    setSelectedLang(lang);
                                                    setIsOpen(false);
                                                }}
                                                className={`block w-full px-4 py-2 text-sm text-left text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${selectedLang === lang ? 'font-semibold bg-gray-100 dark:bg-gray-700' : ''
                                                    }`}
                                            >
                                                {lang.toUpperCase()}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Main Content: Audiobook Title and Author */}
                    <div className="flex-grow flex flex-col justify-center items-center text-white text-center px-4">
                        <h2 className="text-2xl font-bold drop-shadow mb-1">The Art of Storytelling</h2>
                        <p className="text-md opacity-90 drop-shadow">by Taylor Shin</p>
                    </div>

                    {/* Bottom Control Bar */}
                    <div className="w-full bg-black bg-opacity-50 backdrop-blur-md rounded-xl p-3 pt-4">
                        {/* Progress Bar */}
                        <div className="w-full bg-white/30 h-1.5 rounded-full mb-1 "> {/* Reduced mb-4 to mb-3 */}
                            <div className="bg-teal-400 h-1.5 rounded-full w-1/2"></div>
                        </div>
                        {/* Timestamps */}
                        <div className="flex justify-between text-xs text-white opacity-80 mb-1">
                            <span>01:57</span>
                            <span>03:53:12</span>
                        </div>

                        {/* Playback Controls - Smaller Icons, Optimized Spacing */}
                        <div className="flex justify-center items-center gap-x-6"> {/* Increased gap-x for breathing room */}
                            <button className="p-2 rounded-full hover:bg-white/20 focus:outline-none text-white">
                                <SkipBack size={20} /> {/* Smaller icon */}
                            </button>
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none text-white" // Reduced padding from p-4 to p-3
                            >
                                {isPlaying ? (
                                    <Pause size={20} /> // Slightly smaller main icon
                                ) : (
                                    <Play size={20} /> // Slightly smaller main icon
                                )}
                            </button>
                            <button className="p-2 rounded-full hover:bg-white/20 focus:outline-none text-white">
                                <SkipForward size={20} /> {/* Smaller icon */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IphonePlayer;