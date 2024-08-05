// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="relative top-4 flex items-center justify-between mx-auto p-4 rounded-full shadow-xl w-11/12 max-w-4xl lg:w-3/5 ">
      <div className="flex items-center">
        <Link href="/" className="text-white font-serif text-3xl font-bold mr-10">
            stori<span className="text-gray-400">averse</span>
          
        </Link>
        {/* <div className="flex space-x-8">
          <Link href="/writers" className="text-gray-300 hover:text-white transition duration-300">Writers
          </Link>
          <Link href="/animators" className="text-gray-300 hover:text-white transition duration-300">Animators
          </Link>
          <Link href="/spotlights"className="text-gray-300 hover:text-white transition duration-300">Spotlights
          </Link>
          <Link href="/stories" className="text-gray-300 hover:text-white transition duration-300">Stories
          </Link>
        </div> */}
      </div>
      <Link href="/contact" className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition duration-300">
          Contact
        
      </Link>
    </nav>
  );
};

export default Navbar;
