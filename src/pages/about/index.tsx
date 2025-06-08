'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import storyloomLogoDark from "../../../public/favicon/storyloomLogoDark.png";
import { useUIStore } from '@/store';

const About = () => {
      const theme = useUIStore((state) => state.theme);
    
    return (
        <main className="min-h-screen w-full bg-white dark:bg-[#0f1116] text-gray-900 dark:text-white px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-6xl mx-auto space-y-24">

                {/* Intro Section */}
                <section className="flex flex-col justify-center items-center text-center space-y-4 h-[60vh]">
                    {/* <Image
                        src={theme == 'dark' ? storyloomLogoDark : storyloomLogoDark}
                        alt="Storyloom logo"
                        width={60}
                        height={60}
                        className="rounded-md"
                    /> */}
                <h1 className="text-4xl sm:text-5xl font-bold">Our Story</h1>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    StoryLoom is a cultural storytelling platform crafted to inspire young minds through the timeless magic of folktales, myths, and forgotten legends.
                </p>
            </section>

            {/* Why StoryLoom */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Why StoryLoom?</h2>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed">
                    <p>
                        In a fast-paced world, beautiful stories once passed down by grandparents or hidden in manuscripts are fading. StoryLoom preserves them for future generations.
                    </p>
                    <p>
                        We believe stories are more than entertainment—they’re bridges across cultures, time, and generations.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="space-y-8">
                <h2 className="text-3xl font-semibold">What We Value</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                    {[
                        {
                            title: '🌍 Diversity',
                            description: 'Stories from India, Japan, Germany, Spain, and beyond—every culture has magic to share.',
                        },
                        {
                            title: '🧠 Accessibility',
                            description: 'Whether online or offline, with narration or dark mode, we make it easy for kids to enjoy stories anytime, anywhere.',
                        },
                        {
                            title: '🌱 Rooted Learning',
                            description: 'We aim to help school children reconnect with their languages, values, and traditions.',
                        },
                    ].map((value, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl p-6 bg-[#f5f5f5] dark:bg-[#1b1c24] shadow-sm space-y-2"
                        >
                            <h3 className="text-xl font-semibold">{value.title}</h3>
                            <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Vision */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">Our Vision</h2>
                <p className="text-base sm:text-lg leading-relaxed max-w-3xl">
                    To become the leading platform where young readers can discover tales from around the world and feel proud of their own heritage.
                </p>
            </section>

            {/* Impact Section */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold">The Impact We Aim to Make</h2>
                <div className="space-y-4 text-base sm:text-lg leading-relaxed max-w-4xl">
                    <p>
                        At StoryLoom, we envision more than storytelling—we spark cultural connection. From towns to cities, classrooms to homes, our stories inspire imagination and empathy.
                    </p>
                    <p>
                        We dream of a future where a child in Punjab learns about Mizoram’s legends, a school in Spain celebrates Indian tales, and families bond across generations through timeless stories.
                    </p>
                    <p>
                        Our impact isn’t measured in downloads, but in a child’s smile at a bedtime tale that feels like home.
                    </p>
                </div>
            </section>

            {/* Quote Section */}
            <section className="bg-[#f9f9f9] dark:bg-[#1a1c20] rounded-2xl px-6 py-12 shadow-sm">
                <figure className="max-w-3xl mx-auto text-center space-y-6">
                    <svg className="w-8 h-8 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.17 3A2.17 2.17 0 0 0 5 5.17v5.66A2.17 2.17 0 0 0 7.17 13H9v1.5A3.5 3.5 0 0 1 5.5 18H5a1 1 0 0 0 0 2h.5a5.5 5.5 0 0 0 5.5-5.5V5.17A2.17 2.17 0 0 0 9.83 3H7.17ZM15.17 3A2.17 2.17 0 0 0 13 5.17v5.66A2.17 2.17 0 0 0 15.17 13H17v1.5A3.5 3.5 0 0 1 13.5 18H13a1 1 0 0 0 0 2h.5a5.5 5.5 0 0 0 5.5-5.5V5.17A2.17 2.17 0 0 0 17.83 3h-2.66Z" />
                    </svg>
                    <blockquote>
                        <p className="text-xl sm:text-2xl italic font-medium">
                            “When I was little, my grandmother told me stories I can’t find in any book. StoryLoom is my promise to preserve those moments—for every child, everywhere.”
                        </p>
                    </blockquote>
                    <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        <span className="font-semibold">Tanmaydeep Singh</span> – Founder, StoryLoom
                    </figcaption>
                </figure>
            </section>

            {/* CTA */}
            <section className="text-center">
                <Link
                    href="/explore"
                    className="inline-block bg-[#1B1A55] hover:bg-[#535C91] text-white font-semibold text-lg py-3 px-6 rounded-xl transition-transform hover:scale-105"
                >
                    Explore Stories
                </Link>
            </section>
        </div>
    </main >
  );
};

export default About;
