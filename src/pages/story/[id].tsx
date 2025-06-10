'use client';

import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import data from '../data.json';
import ShareIcon from '/public/Logos/share.svg';
import storyloomLogoDark from '/public/favicon/storyloomLogoDark.png';
import { Moon, Sun } from 'lucide-react';
import { useUIStore } from '@/store';

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1426840963626-ffdf2d7ef80b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
  console.log("theme", theme)
  const [storyTitle, setStoryTitle] = useState('Loading...');
  const [storyText, setStoryText] = useState('Please wait...');
  const [genre, setGenre] = useState('');
  const [storyImage, setStoryImage] = useState(DEFAULT_IMAGE);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>('en');
  const [availableLanguages, setAvailableLanguages] = useState<LanguageCode[]>([]);
  const [isLangOpen, setIsLangOpen] = useState(false);



  useEffect(() => {
    if (!id) return;

    const storyData = (data as unknown as StoryDataInterface[]).find((s) => s.id === id);
    if (storyData) {
      setStoryTitle(storyData.title);
      setGenre(storyData.genre);
      setStoryImage(storyData.image || DEFAULT_IMAGE);
      setAvailableLanguages(Object.keys(storyData.story) as LanguageCode[]);
      setStoryText(storyData.story[selectedLanguage] || storyData.story['en']);
    } else {
      setStoryTitle('Story not found');
      setStoryText('Sorry, the story you are looking for does not exist.');
      setStoryImage(DEFAULT_IMAGE);
    }
  }, [id, selectedLanguage]);

  const handleLanguageChange = (lang: LanguageCode) => {
    setSelectedLanguage(lang);
    setIsLangOpen(false);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: storyTitle,
          text: 'Check out this amazing story!',
          url: window.location.href,
        })
        .then(() => console.log('Shared successfully'))
        .catch((err) => console.error('Error sharing:', err));
    } else {
      alert('Web Share API not supported.');
    }
  };

  const storyParagraphs = storyText.split('\n').filter((p) => p.trim() !== '');

  return (
    <div className="inset-0 rounded-[1.5rem] overflow-hidden    flex">
      {/* Top Controls */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <Image src={storyloomLogoDark} alt="Storyloom logo" width={24} height={24} className="rounded-md" />
        <span className="font-semibold text-xl">{storyTitle}</span>
      </div>

      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover: /10 transition">
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-yellow-300" />
          ) : (
            <Moon className="w-5 h-5 text-gray-800" />
          )}
        </button>

        <div className="relative">
          <button
            onClick={() => setIsLangOpen((prev) => !prev)}
            className="p-2 rounded-full transition text-sm"
          >
            {selectedLanguage.toUpperCase()}
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2    rounded-md shadow-lg z-30">
              {availableLanguages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={`w-full px-4 py-2 text-left text-sm ${selectedLanguage === lang ? 'font-semibold' : ''
                    }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Left Video (optional) */}
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <Image
          src={storyImage}
          alt={storyTitle}
          width={1000}
          height={1000}
          className="w-full h-screen object-cover rounded-l-2xl shadow-lg"
        />

      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 py-16 sm:px-12 md:px-16">
        <div className="max-w-md space-y-6 text-left">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{storyTitle}</h1>
            <p className="text-sm mt-1 text-indigo-400">{genre}</p>
            <div className="mt-3 w-14 h-[3px] bg-indigo-500 rounded-full" />
          </div>


          <div className="space-y-4 text-base leading-relaxed">
            {storyParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="pt-4 flex gap-4">
            <button onClick={handleShare} className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700">
              Share
            </button>
            <button onClick={() => router.back()} className="border border-gray-400 px-4 py-2 rounded-full hover:bg-gray-100 dark:hover: /10">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Story