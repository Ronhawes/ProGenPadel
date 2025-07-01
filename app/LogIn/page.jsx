'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import headshot from '../../public/headshot.png';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [showForgotPrompt, setShowForgotPrompt] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const res = await fetch(`/api/Login/Player?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');

      setSubmitted(true);
      localStorage.setItem("playerName", data.name);
      localStorage.setItem("playerId", data.id);
      router.push('/Dashboard/PlayerPage');
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotSubmit = async () => {
    if (!forgotEmail) return alert("Please enter your email.");
    try {
      const res = await fetch('/api/Players/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: forgotEmail }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send reset email');
      alert("Password reset email sent.");
      setShowForgotPrompt(false);
      setForgotEmail('');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl border border-white/30 shadow-2xl bg-white/10 backdrop-blur-lg text-black space-y-6 relative">
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
          <button
            onClick={() => setShowForgotPrompt(true)}
            className="text-sm text-teal-500 hover:text-teal-300 font-semibold"
          >
            Forgot Password?
          </button>
        </div>

        <div className="text-center mt-3">
          <p className="text-sm text-white">
            Don't have an Account?{' '}
            <a href="/SignUp" className="text-teal-500 hover:text-teal-300 font-semibold">
              Sign up here
            </a>
          </p>
        </div>

        {showForgotPrompt && (
          <div className="absolute top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-gray p-6 rounded-xl shadow-lg w-full max-w-sm">
              <h3 className="text-lg font-bold text-teal-500 mb-4">Reset your password</h3>
              <input
                type="email"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
                placeholder="Enter your email"
              />
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowForgotPrompt(false)}
                  className="px-4 py-2 rounded bg-gray-300 text-black hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleForgotSubmit}
                  className="px-4 py-2 rounded bg-teal-500 text-white hover:bg-teal-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
