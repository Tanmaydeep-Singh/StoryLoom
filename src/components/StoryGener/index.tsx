import Tile from "./Tiles";

export default function StoryGenres() {
    const genres = [
        "Adventure", "Romance", "Mystery", "Fantasy", "Science Fiction",
        "Thriller", "Horror", "Drama", "Historical", "Comedy"
    ];

    return (
        <div className="w-[80vw] grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
            {genres.map((genre, index) => (
                <Tile key={index} title={genre} />
            ))}
        </div>
    );
}
