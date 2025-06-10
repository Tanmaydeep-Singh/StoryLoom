import Link from 'next/link';

const Custom404 = () => {

    return (
        <div className="h-screen w-screen flex items-center justify-center  px-6">
            <div className="max-w-xl text-center space-y-6">
                <p className="text-xl md:text-2xl font-medium">
                    Oops! Seems like you’re lost while exploring the world...
                </p>
                <p className="text-md md:text-lg text-gray-600 dark:text-gray-400">
                    Let’s take you back to a place you know.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center px-4 py-2 rounded-full transition-colors  bg-black text-white dark:bg-white dark:text-black duration-200 text-sm font-semibold"
                >
                    Home
                </Link>
            </div>
        </div>
    );
}
export default Custom404 