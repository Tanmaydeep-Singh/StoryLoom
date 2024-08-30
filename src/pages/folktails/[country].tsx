import { useRouter } from 'next/router';
import StoryCards from '@/components/StoryCards';
import folkTails from '@/pages/folkTails.json';
import { useState, useEffect } from 'react';
import SkeletonCard from '@/components/HomePage/SkeletonCard';

const FolktailsPage: React.FC = () => {
  const router = useRouter();
  const { country } = router.query;

  const countries: string[] = ['All', 'Russian', 'German', 'French', 'Spanish', 'Japanese', 'Indian'];
  
  const [stories, setStories] = useState(folkTails);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      if (country && country !== 'All') {
        const filteredStories = folkTails.filter((tales) => tales.genre.split(" ")[0] === country);
        setStories(filteredStories);
      } else {
        setStories(folkTails);
      }
      setLoading(false);
    }, ); // Simulate loading time

    return () => clearTimeout(timeoutId);
  }, [country]);

  const tagline = "Dive into the timeless tales and magical legends from around the world.";

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/folktails/${e.target.value}`);
  };

  return (
    <div className="w-[80vw] mx-auto my-8">
      <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 capitalize">Folktales</h1>
      <p className="text-xl text-gray-600 mb-6">{tagline}</p>

      <select 
        value={country || ''} 
        onChange={handleCountryChange} 
        className="mb-6 p-2 bg-gray-700 text-white rounded-md"
      >
        <option value="" disabled>Select a country</option>
        {countries.map((countryName) => (
          <option key={countryName} value={countryName}>{countryName}</option>
        ))}
      </select>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
        ) : (
          stories.map((tales) => (
            <StoryCards 
              key={tales.id} 
              image={tales.image} 
              title={tales.title} 
              story={tales.story} 
              id={tales.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default FolktailsPage;
