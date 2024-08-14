import React from 'react';
import CountryCard from './CountryCard';

const countries = [
    { name: 'Russia', flagSrc: 'https://i.pinimg.com/236x/54/93/22/549322041d3eb23527fbf1d5e1d4bafa.jpg' },
    { name: 'Germany', flagSrc: 'https://i.pinimg.com/564x/0e/c7/aa/0ec7aa1383c347acb0b1a91bf506f51b.jpg' },
    { name: 'France', flagSrc: 'https://i.pinimg.com/564x/a7/87/8d/a7878d054c0c281018d5b08049d9f0d7.jpg' },
    { name: 'Spain', flagSrc: 'https://i.pinimg.com/564x/fc/87/6a/fc876ac2ec535f0e964da8b04b914248.jpg' },
    // Add more countries as needed
];

const ExploreSection = () => {
    return (
        <div className="relative w-full h-auto  top-12 md:top-0 flex flex-col items-center justify-center bg-cover bg-center mx-auto mb-8 p-4 lg:p-0">
            <div className="container mx-auto text-center mb-10 text-white">
                <h2 className="text-2xl md:text-4xl font-bold text-white">Explore the World Around</h2>
                <p className="mt-4 text-base md:text-lg text-gray-400">
                    Discover folktales from different cultures and immerse yourself in their magic.
                </p>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 justify-items-center w-full">
                {countries.map((country) => (
                    <CountryCard
                        key={country.name}
                        title={country.name}
                        imageUrl={country.flagSrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExploreSection;
