import StoryCard from "./StoryCard";

const stories = [
  { id: "1", title: "Adventure", imageUrl: "https://source.unsplash.com/random/175x175?adventure" },
  { id: "2", title: "Romance", imageUrl: "https://source.unsplash.com/random/175x175?romance" },
  { id: "3", title: "Mystery", imageUrl: "https://source.unsplash.com/random/175x175?mystery" },
  { id: "4", title: "Fantasy", imageUrl: "https://source.unsplash.com/random/175x175?fantasy" },
  { id: "5", title: "Science Fiction", imageUrl: "https://source.unsplash.com/random/175x175?science-fiction" },
  { id: "6", title: "Thriller", imageUrl: "https://source.unsplash.com/random/175x175?thriller" },
  { id: "7", title: "Horror", imageUrl: "https://source.unsplash.com/random/175x175?horror" },
  { id: "8", title: "Comedy", imageUrl: "https://source.unsplash.com/random/175x175?comedy" },
];

export default function StorySection() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-8 m-5">
      {stories.map(story => (
        <StoryCard
          key={story.id}
          id={story.id}
          title={story.title}
          imageUrl={story.imageUrl}
        />
      ))}
    </section>
  );
}
