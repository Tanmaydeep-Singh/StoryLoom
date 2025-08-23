import Link from 'next/link';
import React from 'react';

const FeedbackCTA = () => {
    return (
        <section className="h-[60vh] flex items-center py-16 px-6 md:px-12 lg:px-24  ">
            <div className="max-w-4xl mx-auto text-center">

                <div className="text-center mb-10">

                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
                        Shape the Future of Storyloom
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                        We’re just getting started — and your feedback matters.
                        Share your thoughts, suggest features, and join our beta
                        program to get early access.
                    </p>
                </div>
                <Link
                    href="/contribute"
                    className="px-4 py-2 rounded-full text-sm font-medium transition-colors  bg-black text-white dark:bg-white dark:text-black">
                    Give Feedback & Join Beta
                </Link>
            </div>
        </section>
    );
};

export default FeedbackCTA;
