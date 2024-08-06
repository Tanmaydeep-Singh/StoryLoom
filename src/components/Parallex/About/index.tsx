import React from 'react';

export default function ParallaxAbout() {
  return (
    <section className=" py-12 ">
      <div className="relative space-x-10 flex justify-evenly	 overflow-hidden items-center whitespace-nowrap ">
          <div className="flex space-x-10 animate-loop-scroll">
            <div className="text-3xl font-extrabold text-white shadow-lg">Discover the Magic</div>
            <div className="text-3xl font-extrabold text-white shadow-lg">Explore New Stories</div>
            <div className="text-3xl font-extrabold text-white shadow-lg">Uncover Hidden Gems</div>
            <div className="text-3xl font-extrabold text-white shadow-lg">Dive into Adventures</div>
            <div className="text-3xl font-extrabold text-white shadow-lg">Join the Community</div>
          </div>
          <div className="flex space-x-10 animate-loop-scroll">
            <div className="text-3xl font-extrabold text-white shadow-lg">Discover the Magic</div>
            <div className="text-3xl font-extrabold text-white shadow-lg">Explore New Stories</div>
            <div className="text-3xl font-extrabold text-white shadow-lg">Uncover Hidden Gems</div>
            <div className="text-3xl font-extrabold text-white shadow-lg">Dive into Adventures</div>
            <div className="text-3xl font-extrabold text-white shadow-lg">Join the Community</div>
          </div>
        </div>
    </section>
  );
}
