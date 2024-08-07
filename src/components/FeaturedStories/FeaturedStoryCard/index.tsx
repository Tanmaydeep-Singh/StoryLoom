import Link from 'next/link';
import Image from 'next/image';

interface StoryCard {
    id: any,
    image: string,
    title: string,
    story: string,
}

const FeaturedStoryCard = ({ id, image, title, story }: StoryCard) => {
    return (
        <div
            key={id}
            className="bg-background-card bg-opacity-90 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
            <Link href={`/story/${id}`} passHref>
                <div className="cursor-pointer">
                    <div className="relative w-full h-48 sm:h-56 md:h-64">
                        <Image
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-xl"
                        />
                    </div>
                    <div className="p-5 bg-background-card">
                        <h3 className="text-lg font-bold text-primary-100 mb-2">{title}</h3>
                        <p className="text-primary-200 text-sm sm:text-base mb-4">
                            {story.slice(0, 45) + '...'}
                        </p>
                        <span className="text-accent-200 hover:text-darkGreen font-semibold">
                            Read More
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default FeaturedStoryCard;
