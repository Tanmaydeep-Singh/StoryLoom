interface TileProps {
    title: string;
}

export default function Tile({ title }: TileProps) {
    return (
        <div className="w-[150px] h-[50px] rounded-lg shadow-lg bg-darkGreen flex items-center justify-center text-white text-center px-2 py-4 hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            <h1 className="text-lg font-semibold">{title}</h1>
        </div>
    );
}
