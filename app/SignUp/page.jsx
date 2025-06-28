'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import headshot from '../../public/headshot.png';

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace with your actual signup logic
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl border border-white/30 shadow-2xl bg-white/10 backdrop-blur-lg text-black space-y-6">
        <div className="flex flex-col items-center text-center">
          <Image
            src={headshot}
            alt="Headshot"
            width={120}
            height={120}
            className="rounded-full shadow-lg"
          />
          <h2 className="text-xl sm:text-3xl font-bold text-teal-300 mt-4">
            Create an Account
          </h2>
          <p className="text-white text-sm sm:text-base">Join us by signing up below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="full_name" className="block font-semibold mb-1 text-white">
              Full Name
            </label>
            <input
              id="full_name"
              type="text"
              required
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm placeholder:text-black/60"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-1 text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm placeholder:text-black/60"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold mb-1 text-white">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm placeholder:text-black/60"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label htmlFor="club_name" className="block font-semibold mb-1 text-white">
              Club Name
            </label>
            <input
              id="club_name"
              type="text"
              required
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm placeholder:text-black/60"
              placeholder="Enter your club name"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded font-semibold text-white transition ${
              submitted ? 'bg-green-600' : 'bg-black hover:bg-gray-800'
            }`}
            disabled={loading || submitted}
          >
            {submitted ? 'Signed Up ✅' : loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="text-sm text-white">
            Already have an account?{' '}
            <a href="/LogIn" className="text-teal-500 hover:text-teal-300 font-semibold">
              Log in here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
