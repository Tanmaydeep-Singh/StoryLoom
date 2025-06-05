'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import storyloomLogoDark from "../../../../public/favicon/storyloomLogoDark.png";
import { useUIStore } from '@/store';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { toggleTheme } = useUIStore();
  const theme = useUIStore((state) => state.theme);

  const router = useRouter();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white dark:bg-[#0f1116] text-gray-900 dark:text-white transition-colors duration-300 relative">
      {/* Header: Logo + Toggle */}
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
          onClick={() => {toggleTheme()}}
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

      {/* Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10 sm:p-12 md:p-16">
        <form onSubmit={handleLogin} className="w-full max-w-md space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            Log in to your account
          </h1>

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
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-300 dark:border-gray-600 px-4 py-3 bg-white dark:bg-transparent text-gray-900 dark:text-white shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-black dark:bg-white text-white dark:text-black py-3 font-semibold hover:bg-gray-900 dark:hover:bg-gray-200 transition-colors duration-200"
          >
            Log In
          </button>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{' '}
            <Link href="/session/signup" className="text-blue-600 dark:text-blue-400 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>

      {/* Video Panel */}
      <div className="hidden md:flex md:w-1/2 bg-gray-100 dark:bg-gray-900 items-center justify-center pl-4">
        <video
          src="/signupVid.webm"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-screen rounded-l-2xl object-cover shadow-lg"
          aria-label="Login introduction video"
        />
      </div>
    </div>
  );
};

export default Login;
