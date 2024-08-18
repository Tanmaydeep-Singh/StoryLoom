// components/Navbar.tsx
import  { useState } from 'react';
import Link from 'next/link';
import LanguageSelection from './LanguageSelection';
import { useRouter } from 'next/router';

const Navbar = () => {
 
  
//     <nav className="relative top-4 flex items-center justify-between mx-auto p-4 pb-6 rounded-full w-11/12 max-w-4xl lg:w-3/5   z-50">
const { pathname } = useRouter();


  return (
    <nav
    className={`relative top-4 flex items-center justify-between mx-auto p-4 pb-6 w-11/12 max-w-4xl lg:w-3/5 z-50 ${
      pathname !== '/'
        ? 'rounded-full shadow-2xl backdrop-blur-md bg-gradient-to-r from-[rgba(0,0,0,0.8)] via-gray-900 to-[rgba(0,0,0,0.8)]  bg-opacity-30 '
        : ''
    }`}
  >   
  
      <div className="flex items-center">
        <Link href="/" className="text-white font-serif text-3xl font-bold mr-10">
        story<span className="text-gray-400">loom</span>
        </Link>
      </div>
      <Link href="/contact" className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition duration-300">
          Contact
        
      </Link>
    </nav>
  );
};

export default Navbar;
