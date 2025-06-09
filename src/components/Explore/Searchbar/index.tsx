'use client';

import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

interface SearchbarProps {
    onSearch: (query: string) => void;
    delay?: number;
}

const Searchbar = ({ onSearch, delay = 400 }: SearchbarProps) => {
    const [input, setInput] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(input);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [input, delay]);

    useEffect(() => {
        onSearch(debouncedValue);
    }, [debouncedValue, onSearch]);

    return (
        <div className="max-w-xl mx-auto flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-full px-4 py-2 shadow-md">
            <Search className="w-5 h-5 text-gray-500 dark:text-gray-300 mr-2" />
            <input
                type="text"
                placeholder="Search for a story, genre, or keyword..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent border-none focus:outline-none focus:ring-0 w-full text-base text-gray-900 dark:text-white"
            />
        </div>
    );
};

export default Searchbar;
