'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import headshot from '../../public/headshot.png';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const res = await fetch(
  `/api/Login/Player?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
);

const data = await res.json();


      if (!res.ok) throw new Error(data.error || 'Login failed');

      setSubmitted(true);
      console.log('Login success redirecting to yoour account', data);
      localStorage.setItem("playerName", data.name);
      localStorage.setItem("playerId", data.id)


      router.push('/Dashboard/PlayerPage');
      // Optionally: store player data or redirect
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl border border-white/30 shadow-2xl bg-white/10 backdrop-blur-lg text-black space-y-6">
        <div className="flex flex-col items-center text-center">
          <Image src={headshot} alt="Headshot" width={120} height={120} className="rounded-full shadow-lg" />
          <h2 className="text-xl sm:text-3xl font-bold text-teal-300 mt-4">Welcome Back</h2>
          <p className="text-white text-sm sm:text-base">Please log in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block font-semibold mb-1 text-white">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm placeholder:text-black/60"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold mb-1 text-white">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm placeholder:text-black/60"
              placeholder="Your password"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded font-semibold text-white transition ${submitted ? 'bg-green-600' : 'bg-black hover:bg-gray-800'}`}
            disabled={loading || submitted}
          >
            {submitted ? 'Logged in ✅' : loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="text-center mt-3">
          <button className="text-sm text-teal-500 hover:text-teal-300 font-semibold">Forgot Password?</button>
        </div>
        <div className="text-center mt-3">
          <p className="text-sm text-white">
            Don't have an Account?{' '}
            <a href="/SignUp" className="text-teal-500 hover:text-teal-300 font-semibold">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
