import Link from 'next/link';
import React from 'react';

const ContributeAsWriter = () => {
  return (
    <section className="h-[60vh] flex items-center text-white py-16 px-6 md:px-12 lg:px-24  ">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contribute as a Writer</h2>
        <p className="text-lg mb-8">
          Join our community of storytellers! Share your stories, folktales, and creative narratives with the world. Your voice can inspire, educate, and entertain readers across the globe.
        </p>
        <Link
          href="/contribute"
className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition duration-300"        >
          Start Writing
        </Link>
      </div>
    </section>
  );
};

export default ContributeAsWriter;
