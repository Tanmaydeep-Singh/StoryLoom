'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Moon, Sun, Menu, X, User } from 'lucide-react';
import { useUIStore } from '@/store';
import storyloomLogoDark from "../../../public/favicon/storyloomLogoDark.png";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'Home', href: '/' },

  { label: 'Explore', href: '/explore' },
  // { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const { pathname } = useRouter();
  const { toggleTheme } = useUIStore();
  const theme = useUIStore((state) => state.theme);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: '0%', transition: { type: 'tween', duration: 0.3 } },
    exit: { x: '100%', transition: { type: 'tween', duration: 0.3 } },
  };

  const navLinkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Primary Navigation"
        className={`
          fixed top-4 z-50
          flex items-center justify-between
          px-4 py-3 sm:px-6
          rounded-2xl shadow-lg
          bg-white/10 dark:bg-black/20
          backdrop-blur-xl
          transition-all duration-300
          ${pathname !== '/' ? 'bg-opacity-30' : 'bg-opacity-10'}

          ${isMobileMenuOpen
            ? 'w-full left-0 right-0 rounded-none' // Full width, no rounded corners when mobile menu is open
            : 'w-[92vw] max-w-7xl left-1/2 transform -translate-x-1/2' // Original positioning when mobile menu is closed
          }
          md:w-[92vw] md:max-w-7xl md:left-1/2 md:transform md:-translate-x-1/2 md:rounded-2xl
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1 select-none" aria-label="Go to homepage">
          <Image
            src={theme === 'dark' ? storyloomLogoDark : storyloomLogoDark}
            alt="Storyloom logo"
            width={24}
            height={24}
            className="rounded-md"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
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
          {/* Desktop Login and Sign Up */}
          {/* <Link
            href="/session/login"
            className="text-sm font-medium text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
          >
            Login
          </Link> */}
          {/* <Link
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
          </Link> */}
          {/* Desktop Theme Toggle */}
          <button
            onClick={toggleTheme}
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

        {/* Mobile Actions (Hamburger, Theme Toggle) */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            aria-label="Open Mobile Menu"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition"
          >
            <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 bg-white dark:bg-black z-40 flex flex-col items-center py-8 px-6 overflow-y-auto md:hidden"
            aria-modal="true"
            role="dialog"
          >
            <div className="w-full flex justify-between items-center mb-8">
              {/* Logo in Mobile Menu */}
              <Link href="/" className="flex items-center space-x-1 select-none" aria-label="Go to homepage">
                <Image
                  src={theme === 'dark' ? storyloomLogoDark : storyloomLogoDark}
                  alt="Storyloom logo"
                  width={28}
                  height={28}
                  className="rounded-md"
                />
              </Link>
              {/* Close Button */}
              <button
                onClick={toggleMobileMenu}
                aria-label="Close Mobile Menu"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition"
              >
                <X className="w-6 h-6 text-gray-800 dark:text-white" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 w-full items-start">
              {navLinks.map(({ label, href }, index) => (
                <motion.div
                  key={href}
                  variants={navLinkVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Link
                    href={href}
                    className="text-2xl font-semibold text-gray-800 dark:text-white hover:text-blue-500 transition-colors py-2"
                    onClick={toggleMobileMenu}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col space-y-4 mt-8 w-full items-center">
              <Link
                href="/session/login"
                className="w-full max-w-xs text-center px-6 py-3 text-lg font-medium text-blue-500 dark:text-blue-400 border border-blue-500 dark:border-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
                onClick={toggleMobileMenu}
              >
                Login
              </Link>
              <Link
                href="/session/signup"
                className="w-full max-w-xs text-center px-6 py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-full shadow transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;