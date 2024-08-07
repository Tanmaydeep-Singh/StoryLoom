// pages/[genre].tsx
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import storiesData from './data.json';
import StoryCards from '@/components/StoryCards';

const GenrePage = () => {
  const router = useRouter();
  const { genre } = router.query;

  // Mock data for the stories (replace with actual data fetching logic)
  const stories = storiesData.filter((story) => story.genre === genre);

  return (
    <div className="w-[80vw] mx-auto mt-8">
      <h1 className="text-3xl font-bold text-darkGreen mb-6 capitalize">{genre} Stories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stories.map((story) => (
          <StoryCards key={story.id} id={story.id} image={story.image} title={story.title} story={story.story}/>
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
