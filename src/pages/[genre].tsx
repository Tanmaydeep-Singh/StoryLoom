// pages/[genre].tsx
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

const GenrePage = () => {
  const router = useRouter();
  const { genre } = router.query;

  // Mock data for the stories (replace with actual data fetching logic)
  const stories = [
    {
      id: 1,
      title: "The Lost City",
      excerpt: "An adventure through the mystical ruins of an ancient city.",
      image: "/fantasy.jpg",
    },
    {
      id: 2,
      title: "A Love Beyond Time",
      excerpt: "A romance that transcends time and space.",
      image: "/fantasy.jpg",
    },
    {
      id: 3,
      title: "Mystery of the Haunted Manor",
      excerpt: "Unravel the secrets of a haunted mansion.",
      image: "/fantasy.jpg",
    },
    // Add more stories related to the genre
  ];
  return (
    <div className="w-[80vw] mx-auto mt-8">
      <h1 className="text-3xl font-bold text-darkGreen mb-6 capitalize">
        {genre} Stories
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
                        <Link href={`/story/${story.id}`}>

            <div className="relative w-full h-48 sm:h-56 md:h-64">
              <Image
                src={story.image}
                alt={story.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-teal mb-2">{story.title}</h3>
              <p className="text-mediumGreen text-sm sm:text-base">{story.excerpt}</p>
              <Link href={`/story/${story.id}`} className="text-teal hover:text-darkGreen mt-4 inline-block font-semibold">
                  Read More
                
              </Link>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenrePage;