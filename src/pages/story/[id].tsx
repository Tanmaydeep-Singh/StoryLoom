import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import data from '../data.json';
import ShareIcon from '/public/Logos/share.svg';
import ClapIcon from '/public/Logos/share.svg';
import CommentIcon from '/public/Logos/share.svg';
import SaveIcon from '/public/Logos/share.svg';

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1426840963626-ffdf2d7ef80b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

type LanguageCode = 'en' | 'es' | 'de' | '日本' | 'fr' | 'РУ';

interface StoryDataInterface {
  id: string;
  title: string;
  story: Record<LanguageCode, string>;
  image: string;
}

export default function Story() {
  const [storyTitle, setStoryTitle] = useState('Title Loading...');
  const [story, setStory] = useState('Story Loading...');
  const [storyImage, setStoryImage] = useState(DEFAULT_IMAGE);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>('en');
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    if (id) {
      const storyData = data.find((s) => s.id === id);

      setTimeout(() => {
        if (storyData) {
          setStoryTitle(storyData.title);
setStory(storyData.story)
          // setStory(storyData.story[selectedLanguage] || storyData.story.en);
          setStoryImage(storyData.image || DEFAULT_IMAGE);
        } else {
          setStoryTitle('Story not found');
          setStory('Sorry, the story you are looking for does not exist.');
          setStoryImage(DEFAULT_IMAGE);
        }
      }, 1000);
    }
  }, [router.query.id, selectedLanguage]);

  const handleLanguageChange = (language: LanguageCode) => {
    setSelectedLanguage(language);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: storyTitle,
        url: window.location.href,
      }).then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      console.log('Web Share API is not supported in this browser.');
    }
  };

  return (
    <div className="min-h-screen py-12 flex flex-col items-center text-white">
      <div className="max-w-3xl w-full sm:w-[95vw] md:w-[90vw] lg:w-[80vw] rounded-lg shadow-2xl overflow-hidden transform transition-transform duration-500">
        <div className="relative w-full h-48 sm:h-72 md:h-96 lg:h-[30rem] bg-black">
          <img src={storyImage} alt={storyTitle} className="object-cover w-full h-full opacity-80" />
        </div>
        <div className="pt-6 px-4 sm:px-6 md:px-8 lg:px-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {storyTitle}
          </h1>
          <div className="flex items-center space-x-4 justify-between">
            <div className="flex text-gray-300 space-x-2">
              {(['en', 'es', 'de', '日本', 'fr', 'РУ'] as LanguageCode[]).map((language) => (
                <button
                  key={language}
                  onClick={() => handleLanguageChange(language)}
                  className={`p-2 text-xs sm:text-sm md:text-base rounded-lg transition-all duration-300 ${
                    selectedLanguage === language ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={handleShare}>
                <Image src={ShareIcon} alt="Share" width={18} height={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6 md:p-8 lg:p-12 bg-opacity-80">
          <div className="text-base sm:text-lg md:text-xl leading-relaxed">
            <p>{story}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
