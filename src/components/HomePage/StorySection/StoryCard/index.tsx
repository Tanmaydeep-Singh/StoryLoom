import Link from "next/link";
import Image from "next/image";

interface StoryCardProps {
  title: string;
  imageUrl: string;
}

export default function StoryCard({ title, imageUrl }: StoryCardProps) {
  return (
    <div
      className="relative w-[160px] h-[160px] md:w-[225px] md:h-[350px] bg-background-card rounded-lg overflow-hidden m-2 shadow-lg transform transition-transform duration-300 hover:scale-110"
    >
      <Link href={`/${title}`} passHref>
        <div className="w-full h-full cursor-pointer">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
            priority={true}  // This ensures lazy loading is enabled.
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 backdrop-blur-md">
            <h1 className="text-white text-center text-sm md:text-base font-semibold">{title}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}
