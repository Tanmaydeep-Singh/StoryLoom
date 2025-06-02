import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl flex items-center justify-between px-6 py-3 bg-white bg-opacity-10 backdrop-blur-md rounded-[var(--radius,_1.5rem)] shadow-md transition-all duration-300 z-50 ${
        pathname !== '/' ? 'bg-opacity-30 shadow-lg' : 'bg-opacity-10'
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-1">
        <span className="text-2xl font-serif font-bold text-white tracking-tight leading-tight">
          story
        </span>
        <span className="text-2xl font-serif font-bold text-gray-300 tracking-tight leading-tight">
          loom
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8">
        {[
          ['Explore', '/explore'],
          ['Pricing', '/pricing'],
          ['About', '/about'],
          ['Contact', '/contact']
        ].map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="text-white text-base font-semibold hover:text-blue-400 transition-colors duration-200"
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-5">
        <Link
          href="/login"
          className="text-white text-base font-medium hover:text-blue-400 transition-colors duration-200"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-4 py-1.5 bg-transparent border border-blue-400 text-blue-400 rounded-full text-sm font-semibold hover:bg-blue-400 hover:text-white transition duration-300 shadow-sm"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
