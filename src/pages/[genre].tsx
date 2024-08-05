// pages/[genre].tsx
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import storiesData from './data.json';

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
          <div
            key={story.id}
            className="bg-background-card bg-opacity-80 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <Link href={`/story/${story.id}`} passHref>
              <div className="cursor-pointer">
                <div className="relative w-full h-40 sm:h-44 md:h-48">
                  <Image
                    src={story.image}
                    alt={story.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary-100 mb-2">{story.title}</h3>
                  <p className="text-primary-200 text-sm sm:text-base">
                    {story.story.slice(0, 45) + '...'}
                  </p>
                  <span className="text-accent-200 hover:text-darkGreen mt-4 inline-block font-semibold">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
