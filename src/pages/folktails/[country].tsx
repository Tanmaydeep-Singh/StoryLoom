import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import StoryCards from '@/components/StoryCards';
import folkTails from '@/pages/folkTails.json';

const FolktailsPage = () => {
  const router = useRouter();
  const { country } = router.query;

  // Mock data for the stories (replace with actual data fetching logic)
  const stories = folkTails.filter((tales : any) => tales.genre.split(" ")[0] === country);

  // Define a tagline for the header
  const tagline = "Dive into the timeless tales and magical legends from around the world.";

  return (
    <div className="w-[80vw] mx-auto mt-8">
      <h1 className="text-3xl  lg:text-4xl font-bold text-white mb-2 capitalize">{country} Folktales</h1>
      <p className="text-xl text-gray-600 mb-6">{tagline}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((tales) => (
          <StoryCards key={tales.id} image={tales.image} title={tales.title} story={tales.story} id={tales.id}/>
        ))}
      </div>
    </div>
  );
};

export default FolktailsPage;
