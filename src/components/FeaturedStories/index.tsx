import Link from "next/link";

  export default function FeaturedStories() {
    const featuredStories = [
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
      <div className="mt-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-darkGreen mb-6">Featured Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStories.map((story) => (
            <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <Link href={`/story/${story.id}`}>
              <img src={story.image} alt={story.title} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-teal mb-2">{story.title}</h3>
                <p className="text-mediumGreen text-sm sm:text-base">{story.excerpt}</p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
  