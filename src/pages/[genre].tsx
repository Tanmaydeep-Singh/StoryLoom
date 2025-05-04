import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import StoryCards from '@/components/StoryCards';
import storiesData from './data.json';
import SkeletonCard from '@/components/HomePage/SkeletonCard';

const GenrePage = () => {
  const router = useRouter();
  const { genre } = router.query;

  const genres = [
    "All", "Adventure", "Romance", "Mystery",
    "Fantasy", "Science Fiction", "Thriller",
    "Horror", "Comedy", "Reflective"
  ];


  const [stories, setStories] = useState(storiesData);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      if (genre && genre != 'All') {
        const filteredStories = storiesData.filter(
          (story) => story.genre == genre
        );
        setStories(filteredStories);
      } else {
        setStories(storiesData);
      }
      setLoading(false);
    },);

    return () => clearTimeout(timeoutId);
  }, [genre]);

  const handleGenreChange = (e: any) => {
    const newGenre = e.target.value;
    router.push(`/${newGenre}`);
  };

  return (
    <div className="w-[80vw] mx-auto my-8">
      <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 capitalize">
        {genre} Stories
      </h1>

      <div className="mb-6">
        <select
          value={genre}
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
