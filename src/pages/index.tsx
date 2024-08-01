import Carousel from "@/components/Carousel";
import StoyCard from "@/components/StoryCard";
import StoryGener from "@/components/StoryGener";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Carousel/>

        {/* Card */}
        <section className=" grid grid-cols-2	md:grid-cols-4 gap-8 m-5	">
          <StoyCard/><StoyCard/><StoyCard/><StoyCard/>   
          <StoyCard/><StoyCard/><StoyCard/><StoyCard/>   
        </section>

        <section>
          <StoryGener/>
        </section>
    </main>
  );
}
