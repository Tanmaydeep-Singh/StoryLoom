import React from 'react'
import Searchbar from './Searchbar';
import StoryCard from './StoryCard';

const Explore = () => {
    return (
        <div className="min-h-screen w-full bg-white dark:bg-[#0f1116] text-gray-900 dark:text-white px-4 sm:px-6 lg:px-8 py-20">

            <section className="flex flex-col justify-center items-center text-center space-y-4 h-[30vh]">
                <h1 className="text-4xl md:text-5xl font-bold">Explore </h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Browse our collection of stories from around the world- fing something new and unexpected to immerse yoursel in.
                </p>
            </section>

            {/* Searchbar */}

            <Searchbar
                onSearch={(query) => {
                    console.log('Debounced search:', query);
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {Array(20).fill(null).map((_, index) => (
                        <StoryCard
                            key={index}
                            id={`${index}`}
                            title={`Story Title ${index + 1}`}
                            genre="Folktale"
                            image="https://i.pinimg.com/736x/3c/c9/da/3cc9da3dc2a49f6dd1a3a5ffb5b8455a.jpg"
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Explore