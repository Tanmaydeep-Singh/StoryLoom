import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


export default function Story() {
  const [storyTitle, setStoryTitle] = useState('Title Loading...');
  const [story, setStory] = useState('Story Loading...');
  const [storyImage, setStoryImage] = useState('https://source.unsplash.com/random');
  const router = useRouter();

  
const storyData = [
  {
    "id": 1,
    "title": "The Enchanted Forest",
    "excerpt": "Deep within the heart of the forest lies a magical place where creatures of myth and legend roam freely.",
    "image": "/thriller.jpg",
    "content": "In the heart of the Enchanted Forest, magic flows like a river through the ancient trees. Legends tell of a place where the boundaries between the real world and the mystical realm blur, allowing mythical creatures to wander freely. As you journey deeper into the forest, the air becomes thick with enchantment. Glowing plants light your path, and whispers of long-forgotten spells tickle your ears. Beware of the mischievous faeries who guard their secrets fiercely, but if you can gain their trust, they may reveal the hidden wonders of their world."
  },
  {
    "id": 2,
    "title": "The Time Traveler's Secret",
    "excerpt": "A young scientist discovers a way to travel through time, uncovering secrets of the past and future.",
    "image": "https://source.unsplash.com/random/800x400?time,machine",
    "content": "Dr. Emily Carter, a brilliant young scientist, stumbles upon a hidden formula in an old manuscript that allows her to travel through time. Her first journey takes her to the ancient pyramids of Egypt, where she witnesses the construction of these great monuments. As she continues her travels, Emily discovers startling truths about historical events and their impact on the future. Each trip reveals more about a secret society that has been shaping history from the shadows, leading her to confront ethical dilemmas and the true nature of time itself."
  },
  {
    "id": 3,
    "title": "Beyond the Horizon",
    "excerpt": "An epic journey across uncharted waters leads to a discovery that changes the world forever.",
    "image": "https://source.unsplash.com/random/800x400?ocean,adventure",
    "content": "Captain James Turner and his crew set sail on an expedition to chart the uncharted waters beyond the horizon. Their journey is fraught with challenges, from treacherous storms to encounters with unknown sea creatures. When they finally reach a hidden island, they discover an ancient civilization with advanced technology and wisdom. The knowledge and artifacts they bring back to their world revolutionize science and history, but they also face the challenge of integrating these discoveries into their own society while guarding against those who seek to exploit them."
  },
 
];

  useEffect(() => {
    if (router.query.id) {
      setTimeout(() => {
        setStoryTitle(storyData[0].title);
        setStory(storyData[0].content);
        setStoryImage(storyData[0].image); 
      }, 1000); 
    }
  
  
  }, [router.query.id]);

  return (
    <div className="min-h-screen bg-lightGreen py-12 flex flex-col items-center">
      <div className="max-w-2xl w-[80vw] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative w-full h-60 sm:h-72 md:h-96">
          <img src={storyImage} alt={storyTitle} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">{storyTitle}</h1>
          </div>
        </div>
        <div className="p-8">
          <div className="prose lg:prose-lg prose-darkGreen">
            <p>{story}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
