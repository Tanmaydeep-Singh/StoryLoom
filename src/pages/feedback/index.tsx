'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthStore, useUIStore } from '@/store';
import { Moon, Sun } from 'lucide-react';
import storyloomLogoDark from "../../../public/favicon/storyloomLogoDark.png";
// import storyloomLogoLight from "../../../../public/favicon/storyloomLogoLight.png";
import Image from 'next/image';



const Feedback = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [features, setFeatures] = useState('');
    const [isBeta, setIsBeta] = useState(false);

    const { toggleTheme } = useUIStore();
    const theme = useUIStore((state) => state.theme);
    const router = useRouter();

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const handleSignup = (e: React.FormEvent) => {

        let beta = isBeta ? "yes" : "no";


        const dataSend = async () => {
            
            const url = `https://docs.google.com/forms/d/e/1FAIpQLScwwOkY3chmTlzE47coz5ObVhzfQ9qfi0dNxoSTEKr5H1cFtQ/formResponse?entry.1813728080=${name}&entry.967573300=${email}&entry.98824864=${feedback}&entry.713699182=${features}&entry.680875743=${beta}`;
            const  res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
        };
        dataSend();
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-[#0f1116] text-gray-900 dark:text-white transition-colors duration-300 relative">
            {/* Header: Logo + Theme Toggle */}
            <div className="absolute top-4 left-4 flex items-center gap-2 z-20">
                <Link href="/" className="flex items-center space-x-1 select-none">
                    <Image
                        src={theme == 'dark' ? storyloomLogoDark : storyloomLogoDark}
                        alt="Storyloom logo"
                        width={24}
                        height={24}
                        className="rounded-md"
                    />
                </Link>
            </div>
            <div className="absolute top-4 right-4 z-20">
                <button
                    onClick={() => { toggleTheme() }}
                    aria-label="Toggle theme"
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition"
                >
                    {theme === 'dark' ? (
                        <Sun className="w-5 h-5 text-yellow-300" />
                    ) : (
                        <Moon className="w-5 h-5 text-gray-800" />
                    )}
                </button>
            </div>

            {/* Signup Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-10 sm:p-12 md:p-16">
                <form onSubmit={handleSignup} className="w-full max-w-md space-y-8">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                        Create your account
                    </h1>

                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-transparent text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-transparent text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="feedback" className="block text-sm font-medium mb-1">
                            Feedback
                        </label>
                        <textarea
                            id="feedback"
                            required
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-transparent text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Share your thoughts, suggestions, or issues you faced while using Storyloom"
                        />
                    </div>
                    <div>
                        <label htmlFor="features" className="block text-sm font-medium mb-1">
                            Features
                        </label>
                        <textarea
                            id="features"
                            value={features}
                            onChange={(e) => setFeatures(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-transparent text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Tell us about the features you would like to see in storyloom"
                        />
                    </div>


                    <button
                        type="submit"
                        className="w-full rounded-xl bg-black dark:bg-white text-white dark:text-black py-3 font-semibold hover:bg-gray-900 dark:hover:bg-gray-200 transition-colors duration-200"
                    >
                        Submit
                    </button>

                </form>
            </div>
            {/* Right Video Panel with Blur + Overlay Text */}
            <div className="hidden md:flex md:w-1/2 relative items-center justify-center">

                <video
                    src="/signupVid.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-screen object-cover rounded-l-2xl filter blur-[40px] brightness-[0.3]"
                    aria-label="Signup introduction video"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 space-y-6">
                    <h1 className="text-4xl font-extrabold text-white drop-shadow-xl mb-6">
                        We Value Your Feedback
                    </h1>

                    <p className="max-w-xl  text-gray-200 leading-relaxed mb-4">
                        Storyloom is just getting started, and your input will shape its future.
                        Share feedback, suggest features, or join our beta program to access early releases.
                    </p>

                    <p className="max-w-xl  text-gray-200 leading-relaxed mb-4">
                        Whether you’re a parent helping your child stay connected to their roots,
                        an educator looking to bring stories into the classroom,
                        or simply someone passionate about languages — your voice matters.
                    </p>
                    <p className="max-w-xl  text-gray-200 leading-relaxed mb-4">
                        By sharing feedback or suggesting features, you’re helping us build
                        the tools that will make learning cultural literacy playful, interactive,
                        and meaningful for kids everywhere.
                    </p>
                    <p className="max-w-xl  text-gray-200 leading-relaxed mb-4">
                        Want to experience the future first? Join our Beta Program to gain early access,
                        test new features, and shape the product alongside us.
                    </p>

                    <Link
                        href="/about"
                        className="inline-block rounded-xl bg-white/90 text-black font-semibold px-6 py-3 shadow-lg hover:bg-white hover:shadow-xl transition"
                    >
                        Learn More About Storyloom
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default Feedback;

