"use client";

import Link from "next/link";
import StoryloomSubscription from "../HomePage/NewsletterSubscription";
import storyloomLogoDark from "../../../public/favicon/storyloomLogoDark.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>

      <footer className="bg-background-card text-white px-6 py-16 sm:py-20 relative">
        <div className="max-w-7xl mx-auto relative">
          {/* Top Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
            {/* Left Section */}
            <div className="space-y-6">
              <p className="text-xs text-blue-400 font-medium tracking-widest uppercase">
                + Contact Us
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug">
                Interested in exploring the world,
                <br />
                <span className="text-gray-400">
                  trying out the platform or simply learning more?
                </span>
              </h2>
            </div>

            {/* Right Navigation Links */}
            <div className="flex md:justify-end items-start">
              <div className="space-y-3 text-left md:text-right w-full md:w-auto">
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

          <div className="flex flex-col md:flex-row  md:justify-between md:items-center pt-10 text-sm w-full space-y-16 md:space-y-0">
            <div>
              <p className="text-gray-400">Contact Tanmay at:</p>
              <a
                href="mailto:work@storyloom.in"
                className="text-white underline underline-offset-4 hover:text-blue-400"
              >
                work@storyloom.in
              </a>
            </div>
            <StoryloomSubscription />
          </div>


          {/* Footer Bottom Branding */}
          <div className="mt-16 sm:mt-24 flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-10 sm:pt-12 space-y-6 sm:space-y-0">
            {/* Logo + Brand Name */}
            <div className="flex items-center space-x-4 ">
              <Image
                src={storyloomLogoDark}
                alt="Storyloom logo"
                width={128}
                height={128}
                className="rounded-md  w-6 h-6"
              />
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                storyloom
              </h1>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 sm:space-x-6 text-sm text-gray-400">
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
          <p className="text-xs text-gray-600 text-center mt-8 sm:mt-10">
            © 2024 Storyloom. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
