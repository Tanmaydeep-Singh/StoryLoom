import { StoryMarquess } from "./StoryMarquee";

export default function StoryCategorySection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-8 text-center">
      <h2 className="text-2xl sm:text-3xl xl:text-4xl font-serif font-bold text-[#e8d5b7] pb-10">
        Choose from Various Categories
      </h2>

      <div className="w-[80vw]">
        <StoryMarquess />
      </div>
    </section>
  );
}


