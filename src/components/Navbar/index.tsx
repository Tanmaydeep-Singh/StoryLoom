// components/Navbar.tsx
import  { useState } from 'react';
import Link from 'next/link';
import LanguageSelection from './LanguageSelection';

const Navbar = () => {
 
  

  return (
    <nav className="relative top-4 flex items-center justify-between mx-auto p-4 pb-6 rounded-full shadow-xl w-11/12 max-w-4xl lg:w-3/5 backdrop-blur-md bg-gradient-to-r from-black via-gray-800 to-black bg-opacity-30 z-50">
      <div className="flex items-center">
        <Link href="/" className="text-white font-serif text-3xl font-bold mr-10">
          stori<span className="text-gray-400">averse</span>
        </Link>
      </div>
      <Link href="/contact" className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition duration-300">
          Contact
        
      </Link>
    </nav>
  );
};

export default Navbar;
