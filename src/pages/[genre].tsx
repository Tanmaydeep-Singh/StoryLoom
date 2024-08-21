// pages/[genre].tsx
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import storiesData from './data.json';
import StoryCards from '@/components/StoryCards';

const GenrePage = () => {
  const router = useRouter();
  const { genre } = router.query;

  const [selectedGenre, setSelectedGenre] = useState(genre || 'explore');

  let stories = storiesData;

  if (selectedGenre !== 'explore') {
    stories = storiesData.filter((story) => story.genre == selectedGenre);
  }

  const handleGenreChange = (e: any) => {
    const newGenre = e.target.value;
    setSelectedGenre(newGenre);
    router.push(`/${newGenre}`); // Navigate to the new genre page
  };

  return (
    <div className="w-[80vw] mx-auto mt-8">
      <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 capitalize">
        {selectedGenre} Stories
      </h1>

      {/* Genre Dropdown */}
      <div className="mb-6">
        <select
          value={selectedGenre}
          onChange={handleGenreChange}
          className="p-2 rounded bg-gray-800 text-white"
        >
          <option value="explore">All</option>
          <option value="Adventure">Adventure</option>
          <option value="Romance">Romance</option>
          <option value="Mystery">Mystery</option>       
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Sci-Fi</option>
          <option value="Thriller">Thriller</option>
          <option value="Horror">Horror</option>
          <option value="Comedy">Comedy</option>
          {/* Add more options as needed */}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <StoryCards
            key={story.id}
            image={story.image}
            title={story.title}
            story={story.story}
            id={story.id}
          />
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
