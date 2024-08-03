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
      "title": "The Lost Expedition",
      "excerpt": "Deep within the heart of the forest lies a magical place where creatures of myth and legend roam freely.",
      "image": "/thriller.jpg",
      "content": "Deep in the heart of the Amazon jungle, a team of adventurers embarked on a quest to find a long-lost city rumored to be filled with ancient treasures. The leader of the expedition, Dr. Emily Carter, had spent years studying old maps and deciphering cryptic texts to locate the fabled city of Zandor. As the team hacked their way through dense foliage and crossed treacherous rivers, they faced numerous obstacles, including dangerous wildlife and unpredictable weather. After weeks of grueling travel, they finally stumbled upon the entrance to Zandor, hidden behind a massive waterfall. Inside, they discovered intricate carvings on the walls, depicting the city's history and its people. However, they soon realized that the city was not as abandoned as they had thought. Strange occurrences, like sudden temperature drops and eerie noises, suggested that they were not alone. As they explored further, they uncovered a series of traps and puzzles designed to protect the city's secrets. The team had to work together, using their knowledge and skills to navigate these challenges. In the end, they discovered that Zandor was not just a city of wealth but a place of great spiritual significance. The team emerged from the jungle forever changed, having learned valuable lessons about courage, teamwork, and the importance of respecting the unknown."
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
          <div className="text-lg lg:text-xl leading-relaxed">
            <p>{story}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
