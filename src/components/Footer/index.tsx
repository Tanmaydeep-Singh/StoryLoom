"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background-card text-white px-8 py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Section */}
          <div className="space-y-6">
            <p className="text-xs text-blue-400 font-medium tracking-widest uppercase">
              + Contact Us
            </p>
            <h2 className="text-3xl md:text-4xl font-medium leading-snug">
              Interested in exploring the world,
              <br />
              <span className="text-gray-400">
                trying out the platform or simply learning more?
              </span>
            </h2>
            <div className="pt-4 text-sm">
              <p className="text-gray-400">Contact Tanmay at:</p>
              <a
                href="mailto:work@storyloom.in"
                className="text-white underline underline-offset-4 hover:text-blue-400"
              >
                work@storyloom.in
              </a>
            </div>
          </div>

          {/* Right Navigation Links */}
          <div className="flex md:justify-end items-start">
            <div className="space-y-4 text-right">
              <Link href="/contribute" className="block hover:text-blue-400 transition">
                Contribute
              </Link>
              <Link href="/folktales/All" className="block hover:text-blue-400 transition">
                Folktales
              </Link>
              <Link href="/all" className="block hover:text-blue-400 transition">
                Genre
              </Link>
              <Link href="/plans" className="block hover:text-blue-400 transition">
                Plans
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Branding */}
        <div className="mt-24 flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-12">
          {/* Logo + Brand Name */}
          <div className="flex items-center space-x-4">
            {/* Replace with your own logo */}
            <div className="bg-white rounded-md w-12 h-12" />
            <h1 className="text-4xl font-extrabold tracking-tight">storyloom</h1>
          </div>

          {/* Social Links */}
          <div className="mt-6 sm:mt-0 flex space-x-6 text-sm text-gray-400">
            <Link href="https://linkedin.com/company/storyloom" className="hover:text-white">LinkedIn</Link>
            <Link href="https://facebook.com/storyloom" className="hover:text-white">Facebook</Link>
            <Link href="https://twitter.com/storyloom" className="hover:text-white">Twitter</Link>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-600 text-center mt-10">
          © 2024 Storyloom. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
