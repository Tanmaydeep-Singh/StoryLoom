'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Moon, Sun } from 'lucide-react';
import { useUIStore } from '@/store';
import storyloomLogoDark from "../../../public/favicon/storyloomLogoDark.png";
import Image from 'next/image';

const navLinks = [
  { label: 'Explore', href: '/explore' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const { pathname } = useRouter();
  const { toggleTheme } = useUIStore();
  const theme = useUIStore((state) => state.theme);

  return (
    <nav
      role="navigation"
      aria-label="Primary Navigation"
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2
        w-[92vw] max-w-7xl
        flex items-center justify-between
        px-6 py-3
        rounded-2xl shadow-lg z-50
        bg-white/10 dark:bg-black/20
        backdrop-blur-xl
        transition-all duration-300
        ${pathname !== '/' ? 'bg-opacity-30' : 'bg-opacity-10'}
      `}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-1 select-none" aria-label="Go to homepage">
           <Image
            src={theme == 'dark' ? storyloomLogoDark : storyloomLogoDark}
            alt="Storyloom logo"
            width={24}
            height={24}
            className="rounded-md"
          />
     </Link>

      {/* Navigation */}
      <div className="hidden md:flex space-x-8">
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`
                relative text-sm font-medium transition-colors duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 rounded-md
                ${isActive ? 'text-blue-500 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-500'}
              `}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-blue-400"
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
     
        {/* Login */}
        <Link
          href="/session/login"
          className="text-sm font-medium text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
        >
          Login
        </Link>

        {/* Sign Up */}
        <Link
          href="/session/signup"
          className="
            px-4 py-1.5 text-sm font-semibold
            text-white bg-blue-500 hover:bg-blue-600
            dark:bg-blue-600 dark:hover:bg-blue-700
            rounded-full shadow
            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
            transition-all duration-300
          "
        >
          Sign Up
        </Link>
        {/* Theme Toggle */}
        <button
          onClick={() => {toggleTheme()}}
          aria-label="Toggle Theme"
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-yellow-300" />
          ) : (
            <Moon className="w-5 h-5 text-gray-800" />
          )}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
