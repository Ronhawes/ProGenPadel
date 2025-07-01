'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import headshot from '../../public/headshot.png';
import { useRouter } from 'next/navigation';

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    club_id: '',
  });

  const router = useRouter();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: formData.full_name,
        email: formData.email,
        password: formData.password,
        picture: '', // Optional: Add picture later
        club_id: formData.club_id ? parseInt(formData.club_id) : undefined,
      };

      const res = await fetch('/api/Players/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to sign up');

      setSubmitted(true);
      alert('Account created successfully!');
      router.push('/LogIn');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl border border-white/30 shadow-2xl bg-white/10 backdrop-blur-lg text-black space-y-6">
        <div className="flex flex-col items-center text-center">
          <Image src={headshot} alt="Headshot" width={120} height={120} className="rounded-full shadow-lg" />
          <h2 className="text-xl sm:text-3xl font-bold text-teal-300 mt-4">Create an Account</h2>
          <p className="text-white text-sm sm:text-base">Join us by signing up below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="full_name" className="block font-semibold mb-1 text-white">Full Name</label>
            <input
              id="full_name"
              type="text"
              required
              value={formData.full_name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm placeholder:text-black/60"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-1 text-white">Email</label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm placeholder:text-black/60"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold mb-1 text-white">Password</label>
            <input
              id="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm placeholder:text-black/60"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block font-semibold mb-1 text-white">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm placeholder:text-black/60"
              placeholder="Repeat your password"
            />
          </div>

          <div>
            <label htmlFor="club_id" className="block font-semibold mb-1 text-white">Club Name</label>
            <select
              id="club_id"
              required
              value={formData.club_id}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm"
            >
              <option value="">Select your club</option>
              <option value="1">Goan</option>
              <option value="2">Padel254</option>
              <option value="3">Premium</option>
              <option value="4">Padelpoint</option>
              <option value="5">Nanyuki</option>
            </select>
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
