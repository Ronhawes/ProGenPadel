'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import headshot from '../../../public/headshot.png';
import ResourcesPage from './player_sessions/page';

export default function PlayerPage() {
  const [name, setName] = useState('Player');
  const router = useRouter();

  useEffect(() => {
    const storedName = localStorage.getItem('playerName');
    if (storedName) setName(storedName);
  }, []);

  return (
    <main className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 sm:px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
          {/* Text Section */}
          <div className="text-left space-y-6 max-w-xl w-full">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
              Welcome Back {name}
            </h1>
            <p className="text-lg sm:text-xl text-teal-400 font-semibold">
              Explore your dashboard and stay updated with upcoming sessions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-6 py-3 text-white bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold shadow-lg transition"
              onClick={() => router.push("/Dashboard/PlayerPage/update")}
            >
              My Account
            </motion.button>
          </div>

          {/* Image Section */}
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full ring-4 ring-white shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-teal-300 via-30% to-orange-300 opacity-80 blur-3xl z-0"></div>
            <Image
              src={headshot}
              alt="Headshot"
              fill
              className="object-cover rounded-full relative z-10"
              priority
            />
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="text-black py-16 px-4 sm:px-8 md:px-12">
        <ResourcesPage />
      </section>
    </main>
  );
}
