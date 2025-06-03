import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/'); // Redirect to home after login
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* Left Side: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10 sm:p-12 md:p-16">
        <form onSubmit={handleLogin} className="w-full max-w-md space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Log in to your account
          </h1>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-black py-3 text-white font-semibold hover:bg-gray-900 transition-colors duration-200"
          >
            Log In
          </button>

          <p className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/session/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>

      {/* Right Side: Video */}
      <div className="hidden md:flex md:w-1/2 bg-gray-100 items-center justify-center pl-4">
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
