'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import headshot from '../../../../public/headshot.png';

const UpdateClubForm = () => {
  const [clubData, setClubData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchClub = async () => {
      const clubId = localStorage.getItem('clubId');
      if (!clubId) return alert('Club ID not found');

      try {
        const res = await fetch(`/api/Club/get?id=${clubId}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || 'Failed to fetch club');
        setClubData(data);
      } catch (err) {
        console.error('Fetch error:', err);
        alert(err.message);
      }
    };

    fetchClub();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const res = await fetch('/api/Club/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Update failed');

      setSubmitted(true);
      alert('Club password updated!');
    } catch (err) {
      console.error('Update error:', err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!clubData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Loading club info...
      </div>
    );
  }

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
            Update Club details
          </h2>
          <p className="text-white text-sm sm:text-base">
            Change your club&#39;s password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block font-semibold mb-1 text-white">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={clubData.email || ''}
              required
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm"
              placeholder="Your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block font-semibold mb-1 text-white">
            Repeat password Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm"
              placeholder="New password"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded font-semibold text-white transition ${
              submitted ? 'bg-green-600' : 'bg-black hover:bg-gray-800'
            }`}
            disabled={loading || submitted}
          >
            {submitted ? 'Updated ✅' : loading ? 'Updating...' : 'Update'}
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/Dashboard/ClubPage" className="text-sm text-teal-500 hover:text-teal-300 font-semibold">
            ← Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpdateClubForm;
