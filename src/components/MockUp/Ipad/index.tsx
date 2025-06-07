import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, Moon, Sun } from 'lucide-react';
import storyloomLogoDark from "../../../../public/favicon/storyloomLogoDark.png";
import { useUIStore } from '@/store';

const Ipad = () => {
    const { toggleTheme } = useUIStore();
    const theme = useUIStore((state) => state.theme);


    // Language
    const [selectedLang, setSelectedLang] = useState('en');
    const [isOpen, setIsOpen] = useState(false);

    const languages = ['en', 'rs', 'sp'];


    return (
        <div className="hidden md:block relative w-full max-w-[912px] mx-auto aspect-[1.44] border-[12px] border-gray-800 bg-gray-800 rounded-[2rem] shadow-xl">
            {/* Power & Volume Buttons */}
            <div className="absolute w-[4px] h-[12%] bg-gray-800 left-[-14px] top-[8%] rounded-xl" />
            <div className="absolute h-[4px] w-[8%] bg-gray-800 top-[-13px] left-[10%] rounded-xl" />
            <div className="absolute h-[4px] w-[8%] bg-gray-800 top-[-13px] left-[18%] rounded-xl" />

            {/* Screen */}
            <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden bg-white dark:bg-[#0f1116] text-gray-900 dark:text-white transition-colors duration-300 flex">
                {/* Header: Logo & Theme Toggle */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                    <Image
                        src={storyloomLogoDark}
                        alt="Storyloom logo"
                        width={24}
                        height={24}
                        className="rounded-md"
                    />
                </div>
                <div className="absolute top-4 right-4 z-20 flex">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition"
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-5 h-5 text-yellow-300" />
                        ) : (
                            <Moon className="w-5 h-5 text-gray-800" />
                        )}
                    </button>
                    <div className="relative inline-block text-left z-30">
                        <button
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition"
                        >
                            {selectedLang.toUpperCase()}
                        </button>

                        {isOpen && (
                            <div className="absolute right-0 mt-2 origin-top-right bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                                {languages.map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => {
                                            setSelectedLang(lang);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${selectedLang === lang ? 'font-semibold' : ''
                                            }`}
                                    >
                                        {lang.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

                {/* Left Panel: Video */}
                <div className="hidden md:flex w-1/2 bg-gray-100 dark:bg-gray-900 items-center justify-center pr-4">
                    <video
                        src="/signupVid.webm"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-screen object-cover rounded-l-2xl shadow-lg"
                        title="Signup introduction video"
                    />
                </div>

                {/* Right Panel: Story */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-10 sm:p-12 md:p-16">
                    STORY
                </div>
            </div>
        </div>
    );
};

export default Ipad;
