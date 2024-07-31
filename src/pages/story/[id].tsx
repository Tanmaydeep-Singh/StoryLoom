import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Story() {
  const [storyTitle, setStoryTitle] = useState('Title Loading...');
  const [story, setStory] = useState('Story Loading...');
  const router = useRouter();
  
  useEffect(() => {
    if (router.query.id) {
      setTimeout(() => {
        setStoryTitle('The Mysterious Forest');
        setStory('Once upon a time in a mysterious forest, there were tales of ...');
      }, 1000); 
    }
  }, [router.query.id]);

  return (
    <div className="min-h-screen bg-gray-100 py-12 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">{storyTitle}</h1>
        <p className="text-gray-600 text-center mb-8">Story ID: {router.query.id}</p>
        <div className="text-lg leading-relaxed text-gray-700">
          <p>{story}</p>
        </div>
      </div>
    </div>
  );
}
