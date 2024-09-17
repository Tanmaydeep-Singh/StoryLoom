import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import StoryCards from '@/components/StoryCards';
import storiesData from './data.json';
import SkeletonCard from '@/components/HomePage/SkeletonCard';

const GenrePage = () => {
  const router = useRouter();
  const { genre } = router.query;

  const [selectedGenre, setSelectedGenre] = useState(genre || 'All');
  const [stories, setStories] = useState(storiesData);
  const [loading, setLoading] = useState(true);

  const genres = [
    "All", "Adventure", "Romance", "Mystery", 
    "Fantasy", "Science Fiction", "Thriller", 
    "Horror", "Comedy"
  ];

  let filteredStories = storiesData;


  useEffect(() => {
    setLoading(true); 
    setTimeout(() => {
      
      let filteredStories = storiesData;

      if (selectedGenre != 'All') {
        console.log(selectedGenre)
        filteredStories = storiesData.filter(
          (story) => story.genre == selectedGenre
        );
        setStories(filteredStories);
        }

  
      setLoading(false); 
    }, );
  }, [selectedGenre]);

  const handleGenreChange = (e: any) => {
    const newGenre = e.target.value;
    setSelectedGenre(newGenre);
    router.push(`/${newGenre}`);
  };

  return (
    <div className="w-[80vw] mx-auto my-8">
      <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 capitalize">
        {selectedGenre} Stories
      </h1>

      <div className="mb-6">
        <select
          value={selectedGenre}
          onChange={handleGenreChange}
          className="p-2 rounded bg-gray-800 text-white"
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array(6).fill(null).map((_, index) => <SkeletonCard key={index} />)
        ) : (
          stories.map((story) => (
            <StoryCards
              key={story.id}
              image={story.image}
              title={story.title}
              story={story.story}
              id={story.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default GenrePage;
