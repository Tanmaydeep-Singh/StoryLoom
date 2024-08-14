// pages/[genre].tsx
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import storiesData from './data.json';
import StoryCards from '@/components/StoryCards';

const GenrePage = () => {
  const router = useRouter();
  const { genre } = router.query;

  const stories = storiesData.filter((story) => story.genre == genre);

  return (
    <div className="w-[80vw] mx-auto mt-8">
      <h1 className="text-3xl  lg:text-4xl font-bold text-white mb-2 capitalize">{genre} Stories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stories.map((story) => (
          <StoryCards key={story.id} image={story.image} title={story.title} story={story.story} id={story.id}/>
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
