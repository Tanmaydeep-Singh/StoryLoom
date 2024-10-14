import React from 'react';
import { useRouter } from 'next/router';

function Home() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/V2/country/India');
    };

    return (
        <div
            className="min-h-screen py-12 flex flex-col items-center justify-center text-white"
            style={{
                backgroundImage: 'url("https://i.pinimg.com/736x/49/b1/09/49b109913be2cc3ecffd792444bf4af6.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            onClick={handleClick}
        >
            <h1 className="text-4xl font-bold">GLOBE</h1>
        </div>
    );
}

export default Home;
