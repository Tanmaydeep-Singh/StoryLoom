'use client';

import React from 'react';
import Link from 'next/link';
import { useUIStore } from '@/store';

const About = () => {
  const theme = useUIStore((state) => state.theme);

  return (
    <main className="min-h-screen w-full bg-white dark:bg-[#0f1116] text-gray-900 dark:text-white px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Intro Section */}
        <section className="flex flex-col justify-center items-center text-center space-y-4 h-[60vh]">
          <h1 className="text-4xl sm:text-5xl font-bold">Storyloom</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Kids read interactive stories → improving literacy, building language skills, and connecting deeply with their roots.
          </p>
        </section>

        {/* Why Storyloom */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">Why Storyloom?</h2>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed">
            <p>
              Today, children grow up in a fast-paced, digital-first world—yet the cultural wisdom and language traditions of their families are slipping away. Storyloom is built to change that.
            </p>
            <p>
              We blend <span className="font-semibold">interactive storytelling</span> with <span className="font-semibold">language learning</span>, so kids don’t just read tales but live them—gaining literacy, empathy, and a stronger sense of identity.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold">What We Stand For</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[ 
              {
                title: '📖 Interactive Literacy',
                description: 'Stories designed to build reading confidence, vocabulary, and comprehension skills—just like games teach through play.',
              },
              {
                title: '🌍 Cultural Connection',
                description: 'Every folktale, myth, or legend is a bridge. Kids explore the world while reconnecting with their own roots.',
              },
              {
                title: '👨‍👩‍👧 Diaspora Families',
                description: 'For parents abroad, Storyloom becomes a way to pass down language and culture to children who may feel distant from their heritage.',
              },
              {
                title: '🏫 Schools & Learning',
                description: 'We partner with schools to integrate cultural storytelling into literacy and language curricula—turning classrooms into cultural playgrounds.',
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
            To be the global platform where kids discover, learn, and celebrate culture through interactive stories—so that no child grows up disconnected from their heritage.
          </p>
        </section>

        {/* Impact */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">The Impact We Aim For</h2>
          <div className="space-y-4 text-base sm:text-lg leading-relaxed max-w-4xl">
            <p>
              We’re not just creating another reading app—we’re building a movement. One where bedtime stories double as cultural lessons, classrooms encourage multilingual pride, and diaspora kids grow up proud of their roots.
            </p>
            <p>
              Imagine: a child in New York learning Punjabi through folk tales, or a classroom in Delhi discovering Japanese myths. That’s the world Storyloom is making possible.
            </p>
          </div>
        </section>

        {/* Founder Quote */}
        <section className="bg-[#f9f9f9] dark:bg-[#1a1c20] rounded-2xl px-6 py-12 shadow-sm">
          <figure className="max-w-3xl mx-auto text-center space-y-6">
            <svg className="w-8 h-8 mx-auto text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.17 3A2.17 2.17 0 0 0 5 5.17v5.66A2.17 2.17 0 0 0 7.17 13H9v1.5A3.5 3.5 0 0 1 5.5 18H5a1 1 0 0 0 0 2h.5a5.5 5.5 0 0 0 5.5-5.5V5.17A2.17 2.17 0 0 0 9.83 3H7.17ZM15.17 3A2.17 2.17 0 0 0 13 5.17v5.66A2.17 2.17 0 0 0 15.17 13H17v1.5A3.5 3.5 0 0 1 13.5 18H13a1 1 0 0 0 0 2h.5a5.5 5.5 0 0 0 5.5-5.5V5.17A2.17 2.17 0 0 0 17.83 3h-2.66Z" />
            </svg>
            <blockquote>
              <p className="text-xl sm:text-2xl italic font-medium">
                “Storyloom is my promise that no child should lose their culture while learning new ones. Every story is a seed—we’re here to help it grow.”
              </p>
            </blockquote>
            <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              <span className="font-semibold">Tanmaydeep Singh</span> – Founder, Storyloom
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
    </main>
  );
};

export default About;
