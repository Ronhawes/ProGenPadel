'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import headshot from '../../../../public/headshot.png';

const UpdatePlayerForm = () => {
  const [playerData, setPlayerData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchPlayer = async () => {
      const playerId = localStorage.getItem('playerId');
      if (!playerId) return alert('Player ID not found');

      try {
        const res = await fetch(`/api/Players/get?id=${playerId}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || 'Failed to fetch player');

        setPlayerData(data);
      } catch (err) {
        console.error('Fetch error:', err);
        alert(err.message);
      }
    };

    fetchPlayer();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const name = formData.get('full_name');
    const picture = formData.get('picture');
    const club_id = formData.get('club_id');
    const playerId = localStorage.getItem('playerId');

    try {
      const res = await fetch('/api/Players/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: playerId,
          name,
          picture,
          club_id,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Update failed');

      setSubmitted(true);
      alert('Profile updated!');
    } catch (err) {
      console.error('Update error:', err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!playerData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Loading player info...
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
            Update Your Profile
          </h2>
          <p className="text-white text-sm sm:text-base">Make changes to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="full_name" className="block font-semibold mb-1 text-white">
              Full Name
            </label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              defaultValue={playerData.name || ''}
              required
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="picture" className="block font-semibold mb-1 text-white">
              Picture URL
            </label>
            <input
              id="picture"
              name="picture"
              type="text"
              defaultValue={playerData.picture || ''}
              required
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm"
              placeholder="Link to your profile picture"
            />
          </div>

          <div>
            <label htmlFor="club_id" className="block font-semibold mb-1 text-white">
              Club ID
            </label>
            <input
              id="club_id"
              name="club_id"
              type="number"
              defaultValue={playerData.club_id || ''}
              required
              className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm"
              placeholder="Enter your club ID"
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
          <a href="/Dashboard/PlayerPage" className="text-sm text-teal-500 hover:text-teal-300 font-semibold">
            ← Back to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default UpdatePlayerForm;
