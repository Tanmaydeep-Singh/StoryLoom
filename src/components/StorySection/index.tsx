import StoryCard from "./StoryCard";

const stories = [
  { id: "1", title: "Adventure", imageUrl: "/adventure.jpg" },
  { id: "2", title: "Romance", imageUrl: "https://images.unsplash.com/photo-1527628173875-3c7bfd28ad78?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "3", title: "Mystery", imageUrl: "/mystery.jpg" },
  { id: "4", title: "Fantasy", imageUrl: "/fantasy.jpg" },
  { id: "5", title: "Science Fiction", imageUrl: "https://images.unsplash.com/photo-1589874186480-ecd085096d68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "6", title: "Thriller", imageUrl: "/thriller.jpg" },
  { id: "7", title: "Horror", imageUrl: "/horror.jpg" },
  { id: "8", title: "Comedy", imageUrl: "https://images.unsplash.com/photo-1495332711843-da64862d07e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export default function StoryCategorySection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-8 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
        Choose from Various Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stories.map(story => (
          <StoryCard
            key={story.id}
            title={story.title}
            imageUrl={story.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}
