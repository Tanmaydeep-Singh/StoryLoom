import React, { useState } from 'react';
import Image from 'next/image';
import { Moon, Sun } from 'lucide-react';
import storyloomLogoDark from "../../../../public/favicon/storyloomLogoDark.png";
import { useUIStore } from '@/store';

const Iphone = () => {
  const { toggleTheme } = useUIStore();
  const theme = useUIStore((state) => state.theme);

  const [selectedLang, setSelectedLang] = useState('en');
  const [isOpen, setIsOpen] = useState(false);
  const languages = ['en', 'rs', 'sp'];

  return (
    <div className="block md:hidden relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      {/* Top notch */}
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20" />

      {/* Side buttons */}
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

      {/* Screen */}
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-[#0f1116] text-gray-900 dark:text-white flex flex-col">
        
        {/* Header + Video merged section */}
        <div className="relative h-[200px] w-full overflow-hidden">
          <video
            src="/signupVid.webm"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-[50vh] object-cover -top-6"
            title="Signup introduction video"
          />
          
          {/* Overlay UI */}
          <div className="absolute top-2 left-2 right-2 flex items-center justify-between z-30 px-2">
            <Image
              src={storyloomLogoDark}
              alt="Storyloom logo"
              width={24}
              height={24}
              className="rounded-md"
            />
            <div className="flex items-center gap-1">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-yellow-300" />
                ) : (
                  <Moon className="w-4 h-4 text-gray-800" />
                )}
              </button>
              <div className="relative inline-block text-left z-30">
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="px-1 py-0.5 rounded hover:bg-gray-200 dark:hover:bg-white/10 transition text-sm"
                >
                  {selectedLang.toUpperCase()}
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-1 bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedLang(lang);
                          setIsOpen(false);
                        }}
                        className={`block w-full px-3 py-1 text-sm text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                          selectedLang === lang ? 'font-semibold' : ''
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
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 p-4 space-y-3 text-sm overflow-y-auto">
          <h1 className="text-xl font-semibold leading-tight">
            What is <span className="text-indigo-400">Storyloom</span>?
          </h1>
          <div className="w-12 h-[2px] bg-indigo-500 rounded-full" />

          <p className="text-[13px] leading-snug font-light">
            A storytelling platform reimagined — <span className="font-medium">Storyloom</span> brings you closer to forgotten legends, cultural wisdom, and modern tales in the language of your soul.
          </p>

          <ul className="space-y-2 text-[13px]">
            <li className="flex gap-2 items-start">
              <span>🌏</span>
              <span><strong>Explore</strong> diverse stories from cultures across the globe.</span>
            </li>
            <li className="flex gap-2 items-start">
              <span>🗣</span>
              <span><strong>Listen</strong> in your native tongue — or discover new languages.</span>
            </li>
            <li className="flex gap-2 items-start">
              <span>🎧</span>
              <span><strong>Immerse</strong> in rich narration and ambient storytelling.</span>
            </li>
            <li className="flex gap-2 items-start">
              <span>📚</span>
              <span><strong>Reconnect</strong> with ancestral heritage through timeless narratives.</span>
            </li>
          </ul>

          <p className="text-[13px] pt-2">
            ➡️ <span className="font-medium">Begin your journey through stories that move the soul.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Iphone;
