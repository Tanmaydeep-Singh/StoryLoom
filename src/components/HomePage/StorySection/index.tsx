import { StoryMarquess } from "./StoryMarquee";

export default function StoryCategorySection() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8 mt-16 text-center"
      aria-label="Story Categories"
    >
      <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-[#e8d5b7] mb-10 font-serif">
        Choose from Various Categories
      </h2>

      <div className="mx-auto max-w-6xl w-full">
        <StoryMarquess />
      </div>
    </section>
  );
}
