import Link from 'next/link';

interface TileProps {
  title: string;
}

export default function Tile({ title }: TileProps) {
  return (
    <Link href={`/genre/${title.toLowerCase()}`} passHref>
      <div className="w-[150px] h-[100px] rounded-lg shadow-lg bg-darkGreen flex items-center justify-center text-white text-center px-2 py-4 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
    </Link>
  );
}
