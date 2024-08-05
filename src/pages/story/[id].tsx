import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import data from '../data.json';

const img = "https://images.unsplash.com/photo-1426840963626-ffdf2d7ef80b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Story() {
  const [storyTitle, setStoryTitle] = useState('Title Loading...');
  const [story, setStory] = useState('Story Loading...');
  const [storyImage, setStoryImage] = useState(img);
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      const storyData = data.find((s) => s.id == router.query.id);
  
      setTimeout(() => {
        if (storyData) {
          setStoryTitle(storyData.title);
          setStory(storyData.story); 
          setStoryImage(storyData.image == "/thriller.jpg" ? "/thriller.jpg" : img);
        } else {
          setStoryTitle('Story not found');
          setStory('Sorry, the story you are looking for does not exist.');
          setStoryImage('img');
        }
      }, 1000);
    }
  }, [router.query.id]);

  return (
    <div className="min-h-screen py-12 flex flex-col items-center">
      <div className="max-w-2xl w-[80vw] rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-60 sm:h-72 md:h-96">
          <img src={storyImage} alt={storyTitle} className="object-cover w-full h-full" />
          <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">{storyTitle}</h1>
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
