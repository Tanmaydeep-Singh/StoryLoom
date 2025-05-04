'use client';

import StoryCard from "../StoryCard";
const stories = [
  {
    id: "1",
    title: "Adventure",
    imageUrl: "/adventure.jpg",
    description: "Embark on thrilling journeys through uncharted lands and daring quests.",
    storyCount: 12,
  },
  {
    id: "2",
    title: "Romance",
    imageUrl: "https://images.unsplash.com/photo-1527628173875-3c7bfd28ad78?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Heartwarming tales of love, passion, and emotional journeys.",
    storyCount: 18,
  },
  {
    id: "3",
    title: "Mystery",
    imageUrl: "/mystery.jpg",
    description: "Solve enigmatic puzzles and unravel dark secrets.",
    storyCount: 10,
  },
  {
    id: "4",
    title: "Fantasy",
    imageUrl: "/fantasy.jpg",
    description: "Dive into magical realms filled with mythical creatures and epic legends.",
    storyCount: 15,
  },
  {
    id: "5",
    title: "Science Fiction",
    imageUrl: "https://images.unsplash.com/photo-1589874186480-ecd085096d68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Futuristic adventures exploring space, time, and technology.",
    storyCount: 9,
  },
  {
    id: "6",
    title: "Thriller",
    imageUrl: "/thriller.jpg",
    description: "Fast-paced stories packed with suspense and unexpected twists.",
    storyCount: 11,
  },
  {
    id: "7",
    title: "Horror",
    imageUrl: "/horror.jpg",
    description: "Terrifying tales that will keep you up at night.",
    storyCount: 7,
  },
  {
    id: "8",
    title: "Comedy",
    imageUrl: "https://images.unsplash.com/photo-1495332711843-da64862d07e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Lighthearted stories that bring laughter and joy.",
    storyCount: 14,
  },
];


export function StoryMarquess() {

  const firstRow = stories.slice(0, stories.length / 2);
const secondRow = stories.slice(stories.length / 2);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[20%] bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[20%] bg-gradient-to-l from-black to-transparent z-10" />

      {/* Marquee Container */}
      <div className="flex gap-6 py-4 w-max animate-marquee hover:[animation-play-state:paused]">
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-6">
            {firstRow.map(story => (
              <StoryCard
                key={story.id}
                title={story.title}
                imageUrl={story.imageUrl}
                description={story?.description}
              />
            ))}

          </div>
        ))}
      </div>
      <div className="flex gap-6 py-4 w-max animate-marqueeReverse hover:[animation-play-state:paused]">
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-6">
            {secondRow.map(story => (
              <StoryCard
                key={story.id}
                title={story.title}
                imageUrl={story.imageUrl}
                description={story?.description}
              />
            ))}

          </div>
        ))}
      </div>
  
  
    </div>
  );
}
