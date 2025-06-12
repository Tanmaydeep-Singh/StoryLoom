'use client';

import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import data from '../data.json';
import { Moon, Sun } from 'lucide-react';
import storyloomLogoDark from '/public/favicon/storyloomLogoDark.png';
import { useUIStore } from '@/store';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1426840963626-ffdf2d7ef80b?q=80&w=2070&auto=format&fit=crop";
const PARAGRAPHS_PER_SIDE_DESKTOP = 3;
const PARAGRAPHS_PER_PAGE_MOBILE = 6;
const ANIMATION_DURATION = 0.5;

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
  const { toggleTheme, theme } = useUIStore();

  const [storyData, setStoryData] = useState<StoryDataInterface | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>('en');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!id) return;

    const foundStory = (data as StoryDataInterface[]).find((s) => s.id === id);

    if (foundStory) {
      setStoryData(foundStory);
      if (!foundStory.story[selectedLanguage]) {
        setSelectedLanguage('en');
      }
    } else {
      setStoryData({
        id: 'not-found',
        title: 'Story not found',
        genre: '',
        story: { en: 'Sorry, the story does not exist.' } as Record<LanguageCode, string>,
        image: DEFAULT_IMAGE,
      });
      setSelectedLanguage('en');
    }
    setCurrentPage(0);
  }, [id, selectedLanguage]);

  const spreadPages = useMemo(() => {
    if (!storyData) return [];

    const fullText = storyData.story[selectedLanguage] || storyData.story['en'] || '';
    const paragraphs = fullText.split('\n').filter((p) => p.trim() !== '');
    const pages: string[][][] = [];

    pages.push([]);

    if (isMobile) {
      for (let i = 0; i < paragraphs.length; i += PARAGRAPHS_PER_PAGE_MOBILE) {
        const pageContent = paragraphs.slice(i, i + PARAGRAPHS_PER_PAGE_MOBILE);
        pages.push([pageContent, []]);
      }
    } else {
      for (let i = 0; i < paragraphs.length; i += PARAGRAPHS_PER_SIDE_DESKTOP * 2) {
        const left = paragraphs.slice(i, i + PARAGRAPHS_PER_SIDE_DESKTOP);
        const right = paragraphs.slice(i + PARAGRAPHS_PER_SIDE_DESKTOP, i + PARAGRAPHS_PER_SIDE_DESKTOP * 2);
        pages.push([left, right]);
      }
    }
    return pages;
  }, [storyData, selectedLanguage, isMobile]);

  const storyTitle = useMemo(() => storyData?.title || 'Loading...', [storyData]);
  const genre = useMemo(() => storyData?.genre || '', [storyData]);
  const storyImage = useMemo(() => storyData?.image || DEFAULT_IMAGE, [storyData]);
  const availableLanguages = useMemo(() => {
    if (!storyData) return [];
    return Object.keys(storyData.story) as LanguageCode[];
  }, [storyData]);

  const handleLanguageChange = useCallback((lang: LanguageCode) => {
    setSelectedLanguage(lang);
    setIsLangOpen(false);
    setCurrentPage(0);
  }, []);

  const goNext = useCallback(() => {
    setCurrentPage((prev) => Math.min(prev + 1, spreadPages.length - 1));
  }, [spreadPages.length]);

  const goPrev = useCallback(() => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  }, []);

  const audioExists = useMemo(() => {
    if (!id) return false;
    // This is a placeholder; a real check might involve a server call
    // or checking for the file's existence in a more robust way.
    return true; 
  }, [id]);

  return (
    <div className="w-full h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white relative flex flex-col">
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <Link href="/">
          <Image src={storyloomLogoDark} alt="Storyloom Logo" width={24} height={24} />
        </Link>
        <span className="font-semibold text-lg">{storyTitle}</span>
      </div>

      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-yellow-300" />
          ) : (
            <Moon className="w-5 h-5 text-gray-800" />
          )}
        </button>
        <div className="relative">
          <button
            onClick={() => setIsLangOpen((prev) => !prev)}
            className="p-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-haspopup="true"
            aria-expanded={isLangOpen}
          >
            {selectedLanguage.toUpperCase()}
          </button>
          <AnimatePresence>
            {isLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 rounded-md shadow-lg z-30 bg-white dark:bg-zinc-900 origin-top-right"
              >
                {availableLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`block px-4 py-2 text-left w-full text-sm hover:bg-gray-100 dark:hover:bg-zinc-800 transition ${selectedLanguage === lang ? 'font-semibold text-indigo-600 dark:text-indigo-400' : ''}`}
                    role="menuitem"
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: ANIMATION_DURATION }}
          className="w-full flex flex-col md:flex-row flex-1 pt-16 pb-20 overflow-hidden"
        >
          <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
            {currentPage === 0 ? (
              <Image
                src={storyImage}
                alt="Story Cover"
                sizes="(max-width: 767px) 100vw, (min-width: 768px) 50vw"
                width={1000}
                height={1000}
                className="w-full md:h-[90vh] h-auto max-h-[80vh] md:max-h-none rounded-xl shadow-lg object-contain md:object-cover"
                priority
              />
            ) : (
              (isMobile
                ? [...(spreadPages[currentPage]?.[0] || []), ...(spreadPages[currentPage]?.[1] || [])]
                : spreadPages[currentPage]?.[0]
              )?.map((para, idx) => (
                <p key={idx} className="mb-4 text-base leading-relaxed">
                  {para}
                </p>
              ))
            )}
          </div>

          {!isMobile || currentPage === 0 ? (
            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
              {currentPage === 0 ? (
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{storyTitle}</h1>
                  <p className="text-indigo-500 text-sm mb-6">{genre}</p>
                  <div className="w-20 h-1 bg-indigo-500 rounded-full mb-8"></div>
                  <p className="text-base md:text-lg">
                    Welcome to your story. Use the navigation buttons to read just like a real book.
                  </p>
                </div>
              ) : (
                !isMobile && spreadPages[currentPage]?.[1]?.map((para, idx) => (
                  <p key={idx} className="mb-4 text-base leading-relaxed">
                    {para}
                  </p>
                ))
              )}
            </div>
          ) : null}
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 z-30 flex justify-between items-center p-6 bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-700 md:relative md:p-0 md:border-t-0 md:bg-transparent">
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          Page {currentPage + 1} of {spreadPages.length}
        </div>

        <div className="flex gap-4">
          <button
            onClick={goPrev}
            disabled={currentPage === 0}
            className="bg-zinc-200 dark:bg-zinc-700 px-4 py-2 rounded-full text-sm hover:bg-zinc-300 dark:hover:bg-zinc-600 disabled:opacity-50 transition-colors duration-200"
            aria-label="Previous page"
          >
            Previous
          </button>
          <button
            onClick={goNext}
            disabled={currentPage >= spreadPages.length - 1}
            className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 disabled:opacity-50 transition-colors duration-200"
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      </div>

      {audioExists && <audio ref={audioRef} src={`/Audio/${id}.mp3`} preload="auto" />}
    </div>
  );
};

export default Story;