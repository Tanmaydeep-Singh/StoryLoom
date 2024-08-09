import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import data from '../data.json';
import LanguageSelection from '@/components/Navbar/LanguageSelection';

const img = "https://images.unsplash.com/photo-1426840963626-ffdf2d7ef80b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

type LanguageCode = 'en' | 'es' | 'de' | '日本' | 'fr' | 'РУ';

interface StoryData {
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
      const storyData = data.find((s) => s.id === router.query.id);
      // const storyData = (data as unknown as StoryData[]).find((s) => s.id === router.query.id);

      setTimeout(() => {
        if (storyData) {
          setStoryTitle(storyData.title);

          // const languageKey = selectedLanguage.toLowerCase() as LanguageCode;
          // setStory(storyData.story[languageKey] || storyData.story.en  );
          setStory(storyData.story);
          
          setStoryImage(storyData.image || img);
        } else {
          setStoryTitle('Story not found');
          setStory('Sorry, the story you are looking for does not exist.');
          setStoryImage(img);
        }
      }, 1000);
    }
  }, [router.query.id, selectedLanguage]);


  return (
    <div className="min-h-screen py-12 flex flex-col items-center">
     <div> 
      <div className="max-w-2xl w-[80vw] rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-72 md:h-96 bg-black">
          <img src={storyImage} alt={storyTitle} className="object-cover w-full h-full opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 flex items-center justify-center">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-center text-white drop-shadow-lg px-4">
              {storyTitle}
            </h1>
          </div>
        </div>
        <div className="p-8">
          <div className="text-lg lg:text-xl leading-relaxed text-white">
            <p>{story}</p>
          </div>
        </div>
      
      </div>
  
      </div>
    </div>
  );
}
