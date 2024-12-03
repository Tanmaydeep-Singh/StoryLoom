import { useRouter } from 'next/router';
import Image from 'next/image'; // Import only if you use it in your code
import { useState, useEffect } from 'react';

export default function State() {
    const router = useRouter();
    const { state } = router.query;

    return (
        <div className="min-h-screen py-12 flex flex-col items-center text-white">
            {state ? (
                <h1>{state}</h1>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
