import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const navLinks = [
  { label: 'Explore', href: '/explore' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <nav
      role="navigation"
      aria-label="Primary Navigation"
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2
        w-[95%] max-w-6xl
        flex items-center justify-between
        px-6 py-3
        bg-white bg-opacity-10 backdrop-blur-md
        rounded-[1.5rem] shadow-md
        transition-all duration-300
        z-50
        ${pathname !== '/' ? 'bg-opacity-30 shadow-lg' : 'bg-opacity-10'}
      `}
    >
      {/* Logo */}
      <Link
        href="/"
        aria-label="Go to homepage"
        className="flex items-center space-x-1 select-none"
        tabIndex={0}
      >
        <span className="text-2xl font-serif font-bold text-white tracking-tight leading-tight">
          story
        </span>
        <span className="text-2xl font-serif font-bold text-gray-300 tracking-tight leading-tight">
          loom
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-10">
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`
                relative text-base font-semibold
                transition-colors duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 rounded-md
                ${
                  isActive
                    ? 'text-blue-400'
                    : 'text-white hover:text-blue-400'
                }
              `}
              aria-current={isActive ? 'page' : undefined}
            >
              {label}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-6px] left-0 w-full h-1 rounded-full bg-blue-400"
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-6">
        <Link
          href="/session/login"
          className="text-white text-base font-medium hover:text-blue-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 rounded-md"
        >
          Login
        </Link>

        <Link
          href="/session/signup"
          className="
            px-5 py-2
            border border-blue-400
            text-blue-400
            rounded-full
            text-sm font-semibold
            hover:bg-blue-400 hover:text-white
            transition-colors duration-300
            shadow-sm
            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2
            select-none
          "
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
