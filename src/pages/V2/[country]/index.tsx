import { useRouter } from 'next/router';
<<<<<<< HEAD

const CountryPage = () => {
  const router = useRouter();
  const { country } = router.query;

  const handleStateClick = (state: string) => {
    router.push(`/V2/${country}/${state}`);
  };

  return (
    <div className="w-[80vw] mx-auto my-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Map of {country}</h1>
      <div 
        onClick={() => handleStateClick('Punjab')}
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Click on Punjab
      </div>
    </div>
  );
};

export default CountryPage;
=======
import Image from 'next/image'; // Import only if you use it in your code
import { useState, useEffect } from 'react';

export default function Country() {
    const router = useRouter();
    const { country } = router.query;

    return (
        <div className="min-h-screen py-12 flex flex-col items-center text-white">
            {country ? (
                <h1>{country}</h1>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
>>>>>>> 7b252cfaeb4d445f46e5b92cf049b0aecb293eb4
