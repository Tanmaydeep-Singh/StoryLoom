/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (email && password) {
      router.push('/'); // Redirect to home page after login
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-lightGreen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold text-teal text-center mb-6">Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-teal-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 px-3 py-2 text-sm text-gray-600"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleLogin}
              className="w-full bg-darkGreen text-white font-bold py-2 px-4 rounded hover:bg-teal focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Don't have an account?{' '}
          <Link href="/signup" className="text-teal hover:text-darkGreen font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
