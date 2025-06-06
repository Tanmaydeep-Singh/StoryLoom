'use client';

import CountryCard from "../CountryCard";

const countries = [
  { name: 'Russia', genre: 'Russian', flagSrc: 'https://i.pinimg.com/236x/54/93/22/549322041d3eb23527fbf1d5e1d4bafa.jpg' },
  { name: 'Germany', genre: 'German', flagSrc: 'https://i.pinimg.com/564x/0e/c7/aa/0ec7aa1383c347acb0b1a91bf506f51b.jpg' },
  { name: 'France', genre: 'French', flagSrc: 'https://i.pinimg.com/564x/a7/87/8d/a7878d054c0c281018d5b08049d9f0d7.jpg' },
  { name: 'Spain', genre: 'Spanish', flagSrc: 'https://i.pinimg.com/564x/fc/87/6a/fc876ac2ec535f0e964da8b04b914248.jpg' },
  { name: 'Italy', genre: 'Italian', flagSrc: 'https://i.pinimg.com/736x/b0/89/95/b089951b2b827070692989b3345ca3aa.jpg' },
  { name: 'Japan', genre: 'Japanese', flagSrc: 'https://i.pinimg.com/564x/f9/e2/54/f9e254112c69629fab7bb6acc9ac5a17.jpg' }
];

export function FolktailsMarquess() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[20%] bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[20%] bg-gradient-to-l from-black to-transparent z-10" />

      {/* Marquee Container */}
      <div className="flex gap-6 py-4 w-max animate-marquee hover:[animation-play-state:paused]">
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-6">
            {countries.map((card) => (
              <CountryCard
                key={card.name}
                title={card.name}
                genre={card.genre}
                imageUrl={card.flagSrc}
              />

            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
