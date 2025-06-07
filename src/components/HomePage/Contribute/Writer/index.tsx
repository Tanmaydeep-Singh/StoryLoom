import Link from 'next/link';
import React from 'react';

const ContributeAsWriter = () => {
  return (
    <section className="h-[60vh] flex items-center text-white py-16 px-6 md:px-12 lg:px-24  ">
      <div className="max-w-4xl mx-auto text-center">

        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
            Contribute as a Writer.
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Join our vibrant community of storytellers! Share your stories, folktales, and creative narratives with the world.
            Your voice has the power to inspire, educate, and entertain readers across the globe.
          </p>
        </div>
        <Link
          href="/contribute"
          className="px-4 py-2 rounded-full text-sm font-medium transition-colors  bg-black text-white dark:bg-white dark:text-black">
          Start Writing
        </Link>
      </div>
    </section>
  );
};

export default ContributeAsWriter;
