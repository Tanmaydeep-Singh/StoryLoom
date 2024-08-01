import Carousel from "@/components/Carousel";
import StoryGener from "@/components/StoryGener";
import StorySection from "@/components/StorySection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
        <Carousel/>

        {/* Card */}
        <StorySection/>

        <section>
          <StoryGener/>
        </section>
    </main>
  );
}
