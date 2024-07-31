import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className=" bg-mediumGreen text-lightGreen">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="text-2xl font-semibold flex items-center">
                        <Image src="/images/logo.png" alt="" width={40} height={40} />
                        <span className="ml-2">StoryVerse</span>
                    </Link>
                </div>

                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-lightGreen">Home</Link>
                    <Link href="/stories" className="hover:text-lightGreen">Stories</Link>
                    <Link href="/about" className="hover:text-lightGreen">About</Link>
                    <Link href="/profile" className="hover:text-lightGreen">Profile</Link>
                    <Link href="/contact" className="hover:text-lightGreen">Contact</Link>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/twitter.svg" alt="Twitter" width={24} height={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} />
                    </a>
                </div>

                <button
                    className="md:hidden text-lightGreen focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-teal text-lightGreen`}>
                <Link href="/" className="block px-4 py-2 hover:bg-darkGreen">Home</Link>
                <Link href="/stories" className="block px-4 py-2 hover:bg-darkGreen">Stories</Link>
                <Link href="/about" className="block px-4 py-2 hover:bg-darkGreen">About</Link>
                <Link href="/profile" className="block px-4 py-2 hover:bg-darkGreen">Profile</Link>
                <Link href="/contact" className="block px-4 py-2 hover:bg-darkGreen">Contact</Link>
                <div className="flex space-x-4 p-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/twitter.svg" alt="Twitter" width={24} height={24} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
