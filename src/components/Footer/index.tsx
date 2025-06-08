"use client";

import Link from "next/link";
import Image from "next/image";
import { useUIStore } from "@/store";
import StoryloomSubscription from "../HomePage/NewsletterSubscription";
import storyloomLogoDark from "../../../public/favicon/storyloomLogoDark.png";

const Footer = () => {
  const theme = useUIStore((state) => state.theme);

  return (
    <footer className="bg-white dark:bg-[#0f1116] text-gray-900 dark:text-white px-6 py-14 sm:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">
          {/* Contact Prompt */}
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-wide uppercase text-blue-600 dark:text-blue-300">
              Contact Us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
              Interested in exploring the world,
              <br />
              <span className="text-gray-600 dark:text-gray-400">
                trying the platform, or learning more?
              </span>
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex md:justify-end">
            <nav className="space-y-3 text-left md:text-right w-full md:w-auto">
              <Link href="/contribute" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">
                Contribute
              </Link>
              <Link href="/folktales/All" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">
                Folktales
              </Link>
              <Link href="/all" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">
                Genre
              </Link>
              <Link href="/plans" className="block hover:text-blue-600 dark:hover:text-blue-400 transition">
                Plans
              </Link>
            </nav>
          </div>
        </div>

        {/* Contact + Subscription */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-12 gap-10 text-sm">
          <div className="space-y-1">
            <p className="text-gray-600 dark:text-gray-400">Contact Tanmay at:</p>
            <a
              href="mailto:work@storyloom.in"
              className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-800 dark:hover:text-blue-300"
            >
              work@storyloom.in
            </a>
          </div>
          <StoryloomSubscription />
        </div>

        {/* Branding + Socials */}
        <div className="mt-16 sm:mt-24 flex flex-col sm:flex-row justify-between items-center border-t border-gray-300/30 dark:border-white/10 pt-10 sm:pt-12 gap-6">
          <div className="flex items-center space-x-3">
            <Image
              src={storyloomLogoDark}
              alt="Storyloom logo"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-xl font-bold tracking-tight">storyloom</span>
          </div>

          <div className="flex space-x-4 sm:space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <Link href="https://linkedin.com/company/storyloom" className="hover:text-blue-600 dark:hover:text-blue-400">
              LinkedIn
            </Link>
            <Link href="https://facebook.com/storyloom" className="hover:text-blue-600 dark:hover:text-blue-400">
              Facebook
            </Link>
            <Link href="https://twitter.com/storyloom" className="hover:text-blue-600 dark:hover:text-blue-400">
              Twitter
            </Link>
          </div>
        </div>

        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-10">
          © 2024 Storyloom. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
