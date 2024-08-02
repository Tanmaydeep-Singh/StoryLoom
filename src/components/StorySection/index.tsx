import StoryCard from "./StoryCard";

const stories = [
  { id: "1", title: "Adventure", imageUrl: "/adventure.jpg" },
  { id: "2", title: "Romance", imageUrl: "/romance.jpg" },
  { id: "3", title: "Mystery", imageUrl: "/mystery.jpg" },
  { id: "4", title: "Fantasy", imageUrl: "/fantasy.jpg" },
  { id: "5", title: "Science Fiction", imageUrl: "/science-fiction.jpg" },
  { id: "6", title: "Thriller", imageUrl: "/thriller.jpg" },
  { id: "7", title: "Horror", imageUrl: "/horror.jpg" },
  { id: "8", title: "Comedy", imageUrl: "/comedy.jpg" },
];

export default function StorySection() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-8 m-5">
      {stories.map(story => (
        <StoryCard
          key={story.id}
          title={story.title}
          imageUrl={story.imageUrl}
        />
      ))}
    </section>
  );
}
