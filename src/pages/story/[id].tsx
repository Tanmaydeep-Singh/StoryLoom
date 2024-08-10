import { useRouter } from 'next/router';
import  Image  from 'next/image';
import { useState, useEffect } from 'react';
import data from '../data.json';
import ShareIcon from '/public/Logos/share.svg'; // Import the SVG


const img = "https://images.unsplash.com/photo-1426840963626-ffdf2d7ef80b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
  const [storyImage, setStoryImage] = useState(img);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageCode>('en');

  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      const storyData = data.find((s) => s.id == router.query.id);
      
      setTimeout(() => {
        if (storyData) {
          setStoryTitle(storyData.title);
          setStory(storyData.story)
          // setStory(storyData.story[selectedLanguage] || storyData.story.en);
          setStoryImage(storyData.image || img);
        } else {
          setStoryTitle('Story not found');
          setStory('Sorry, the story you are looking for does not exist.');
          setStoryImage(img);
        }
      }, 1000);
    }
  }, [router.query.id, selectedLanguage]);

  const handleLanguageChange = (language: LanguageCode) => {
    setSelectedLanguage(language);
  };

  // const handleShare = () => {
  //   const storyUrl = window.location.href;
  //   navigator.clipboard.writeText(storyUrl)
  //     .catch((error) => console.log('Error copying link:', error));
  // };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: storyTitle,
        text: story,
        url: window.location.href,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      console.log('Web Share API is not supported in this browser.');
    }
  };

  return (
    <div className="min-h-screen py-12 flex flex-col items-center">
      <div className="max-w-2xl w-[80vw] rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-72 md:h-96 bg-black">
          <img src={storyImage} alt={storyTitle} className="object-cover w-full h-full opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 flex items-center justify-center">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-center text-white drop-shadow-lg px-4">
              {storyTitle}
            </h1>
          </div>
        </div>
        {/* Language and Share */}
        <div className="flex justify-between p-4">
          <div className="flex text-white space-x-2">
            {(['en', 'es', 'de', '日本', 'fr', 'РУ'] as LanguageCode[]).map((language) => (
              <button
                key={language}
                onClick={() => handleLanguageChange(language)}
                className={` p-2 rounded-lg ${selectedLanguage === language ? 'font-bold	' : ''} hover:font-semibold	`}
              >
                {language}
              </button>
            ))}
          </div>
          <div className="flex justify-center md:justify-end">
            <button onClick={handleShare} className=" text-white px-3 py-2">
              <Image src={ShareIcon} alt="Share" width={24} height={24} />
            </button>
          </div>
        </div>
        <div className="p-8">
          <div className="text-lg lg:text-xl leading-relaxed text-white">
            <p>{story}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
