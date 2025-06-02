"use client";

import Link from "next/link";
import StoryloomSubscription from "../HomePage/NewsletterSubscription";
import storyloomLogoDark from "../../../public/favicon/storyloomLogoDark.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-background-card text-white px-6 py-14 sm:py-20 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">
          {/* Left Section */}
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-wider uppercase text-accent-200">
              + Contact Us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
              Interested in exploring the world,
              <br />
              <span className="text-muted-foreground">
                trying out the platform or simply learning more?
              </span>
            </h2>
          </div>

          {/* Navigation Links */}
          <div className="flex md:justify-end">
            <div className="space-y-3 text-left md:text-right w-full md:w-auto">
              <Link href="/contribute" className="block hover:text-accent-200 transition">
                Contribute
              </Link>
              <Link href="/folktales/All" className="block hover:text-accent-200 transition">
                Folktales
              </Link>
              <Link href="/all" className="block hover:text-accent-200 transition">
                Genre
              </Link>
              <Link href="/plans" className="block hover:text-accent-200 transition">
                Plans
              </Link>
            </div>
          </div>
        </div>

        {/* Contact + Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-12 gap-10 text-sm w-full">
          <div className="space-y-1">
            <p className="text-muted-foreground">Contact Tanmay at:</p>
            <a
              href="mailto:work@storyloom.in"
              className="text-white underline underline-offset-4 hover:text-accent-200"
            >
              work@storyloom.in
            </a>
          </div>
          <StoryloomSubscription />
        </div>

        {/* Bottom Branding */}
        <div className="mt-16 sm:mt-24 flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-10 sm:pt-12 gap-6">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <Image
              src={storyloomLogoDark}
              alt="Storyloom logo"
              width={24}
              height={24}
              className="rounded-md"
            />
            <span className="text-xl font-extrabold tracking-tight">
              storyloom
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 sm:space-x-6 text-sm text-muted-foreground">
            <Link href="https://linkedin.com/company/storyloom" className="hover:text-white">
              LinkedIn
            </Link>
            <Link href="https://facebook.com/storyloom" className="hover:text-white">
              Facebook
            </Link>
            <Link href="https://twitter.com/storyloom" className="hover:text-white">
              Twitter
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground text-center mt-10">
          © 2024 Storyloom. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
