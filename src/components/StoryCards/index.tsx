import Link from 'next/link';
import Image from 'next/image';

type LanguageCode = 'en' | 'es' | 'de'  | 'fr' | 'РУ';

interface storyCards {
  id: any;
  title: string;
  story: any;
  image: string;
}


const StoryCards = ({ id, image, title, story }:storyCards) => {
    return (
        <div
            key={id}
            className="bg-background-card bg-opacity-80 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
            <Link href={`/story/${id}`} passHref>
                <div className="cursor-pointer">
                    <div className="relative w-full h-40 sm:h-44 md:h-48">
                        <Image
                            src={image}
                            alt={title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-primary-100 mb-2">{title}</h3>
                        <p className="text-primary-200 text-sm sm:text-base">
                            {story['en'].slice(0, 45) + '...'}
                        </p>
                        <span className="text-accent-200 hover:text-darkGreen mt-4 inline-block font-semibold">
                            Read More
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default StoryCards;