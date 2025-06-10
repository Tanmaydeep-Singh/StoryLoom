'use client';

import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import data from '../data.json';
import { Moon, Sun } from 'lucide-react';
import storyloomLogoDark from '/public/favicon/storyloomLogoDark.png';
import { useUIStore } from '@/store';
import { AnimatePresence, motion } from 'framer-motion';

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1426840963626-ffdf2d7ef80b?q=80&w=2070&auto=format&fit=crop";

type LanguageCode = 'en' | 'de' | 'fr' | 'ru' | 'ja';

interface StoryDataInterface {
  id: string;
  title: string;
  genre: string;
  story: Record<LanguageCode, string>;
  image: string;
}

const Story = () => {
  const router = useRouter();
  const { id } = router.query;

  const { toggleTheme } = useUIStore();
  const theme = useUIStore((state) => state.theme);

  const [storyTitle, setStoryTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [storyImage, setStoryImage] = useState(DEFAULT_IMAGE);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>('en');
  const [availableLanguages, setAvailableLanguages] = useState<LanguageCode[]>([]);
  const [spreadPages, setSpreadPages] = useState<string[][][]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (!id) return;

    const storyData = (data as StoryDataInterface[]).find((s) => s.id === id);
    if (storyData) {
      setStoryTitle(storyData.title);
      setGenre(storyData.genre);
      setStoryImage(storyData.image || DEFAULT_IMAGE);
      setAvailableLanguages(Object.keys(storyData.story) as LanguageCode[]);
      paginateStory(storyData.story[selectedLanguage] || storyData.story['en']);
    } else {
      setStoryTitle('Story not found');
      setGenre('');
      setStoryImage(DEFAULT_IMAGE);
      paginateStory('Sorry, the story does not exist.');
    }
  }, [id, selectedLanguage]);

  console.log("selectedLanguage", selectedLanguage)
  const [isLangOpen, setIsLangOpen] = useState(false);

  const handleLanguageChange = (lang: LanguageCode) => {
    setSelectedLanguage(lang);
    setIsLangOpen(false);
  };

  const paginateStory = (fullText: string) => {
    const paragraphs = fullText.split('\n').filter((p) => p.trim() !== '');
    const perHalf = 3; // paragraphs per side
    const spreadPages: string[][][] = [];

    // Page 0: Title/Image
    spreadPages.push([]); // First spread handled separately

    for (let i = 0; i < paragraphs.length; i += perHalf * 2) {
      const left = paragraphs.slice(i, i + perHalf);
      const right = paragraphs.slice(i + perHalf, i + perHalf * 2);
      spreadPages.push([left, right]);
    }

    setSpreadPages(spreadPages);
    setCurrentPage(0);
  };

  const goNext = () => setCurrentPage((prev) => Math.min(prev + 1, spreadPages.length - 1));
  const goPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  return (
    <div className="w-full h-screen overflow-hidden bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white relative">
      {/* Top Controls */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <Image src={storyloomLogoDark} alt="Logo" width={24} height={24} />
        <span className="font-semibold text-lg">{storyTitle}</span>
      </div>

      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-yellow-300" />
          ) : (
            <Moon className="w-5 h-5 text-gray-800" />
          )}
        </button>
        <div className="relative">
          <button onClick={() => setIsLangOpen((prev) => !prev)} className="p-2 rounded-full text-sm">
            {selectedLanguage.toUpperCase()}
          </button>
          {isLangOpen && (
            <div className="absolute right-0 mt-2 rounded-md shadow-lg z-30 bg-white dark:bg-zinc-900">
              {availableLanguages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`block px-4 py-2 text-left w-full text-sm ${selectedLanguage === lang ? 'font-semibold' : ''}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          )}
          </div>
      </div>

        {/* Page Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full flex"
          >
            {/* Left Column */}
            <div className="w-1/2 h-full p-12 overflow-y-auto flex flex-col justify-center">
              {currentPage === 0 ? (
                <Image
                  src={storyImage}
                  alt="Story Cover"
                  width={1000}
                  height={1000}
                  className="w-full h-[90vh] rounded-xl shadow-lg object-cover"
                />
              ) : (
                spreadPages[currentPage]?.[0]?.map((para, idx) => (
                  <p key={idx} className="mb-4 text-base leading-relaxed">
                    {para}
                  </p>
                ))
              )}
            </div>

            {/* Right Column */}
            <div className="w-1/2 h-full p-12 overflow-y-auto flex flex-col justify-center">
              {currentPage === 0 ? (
                <div>
                  <h1 className="text-4xl font-bold mb-2">{storyTitle}</h1>
                  <p className="text-indigo-500 text-sm mb-6">{genre}</p>
                  <div className="w-20 h-1 bg-indigo-500 rounded-full mb-8"></div>
                  <p className="text-lg">
                    Welcome to your story. Use the navigation buttons to read just like a real book.
                  </p>
                </div>
              ) : (
                spreadPages[currentPage]?.[1]?.map((para, idx) => (
                  <p key={idx} className="mb-4 text-base leading-relaxed">
                    {para}
                  </p>
                ))
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-6 right-6 z-30 flex gap-4">
          <button
            onClick={goPrev}
            disabled={currentPage === 0}
            className="bg-zinc-200 dark:bg-zinc-700 px-4 py-2 rounded-full text-sm hover:bg-zinc-300 dark:hover:bg-zinc-600 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={goNext}
            disabled={currentPage >= spreadPages.length - 1}
            className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      );
};

      export default Story;
