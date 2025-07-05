"use client";


import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import headshot from "../public/headshot.png";
import ResourcesPage from "./resources/page";
import { useRouter } from "next/navigation"; // ✅ Correct for app directory
import DecayCard from "@/components/DecayCard";

import CircularGallery from "@/page.jsx/CircularGallery/CircularGallery";




export default function Home() {
  const router=useRouter();
  
  const [showFirstSection, setShowFirstSection] = useState(true);

  useEffect(() => {
    const sectionInterval = setInterval(() => {
      setShowFirstSection((prev) => !prev);
    }, 4000);
    return () => clearInterval(sectionInterval);
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="min-h-screen  text-white">
      {/* Hero Section */}
      <section className="flex items-center justify-center px-4 sm:px-6 md:px-12 py-16">
              <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
                {/* Text Section */}
                <div className="text-left space-y-6 max-w-xl w-full">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
                    Welcome 
                  </h1>
                  <p className="text-lg sm:text-xl text-teal-400 font-semibold">
                    Explore  and stay updated with upcoming sessions.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-6 py-3 text-white bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold shadow-lg transition"
                    onClick={() => router.push("/LogIn")}
                  >
                    Book A Session
                  </motion.button>
                </div>
      
                {/* Image Section */}
                <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80  shrink-0">
                  <div className="absolute inset-0  bg-gradient-to-br from-blue-400 via-teal-300 via-30% to-orange-300 opacity-80 blur-3xl z-0"></div>
                  <DecayCard 
                  width={300} 
                  height={300}
                  image="https://picsum.photos/300/400?grayscale">
                      <h2>PRoGen<br/>Padel</h2>
                  </DecayCard>
                </div>
              </div>
             

            </section>
           
      

      {/* ResourcesPage below the hero section */}
      <section className="text-black py-16 px-4 sm:px-12 md:px-16">
        <ResourcesPage />
         {/*coaches section */}

         <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white px-16">
                    Our Coaches
                  </h1>
                  <p className="text-lg sm:text-xl text-teal-400 font-semibold">
                    Explore  and see our talented coaches.
                  </p>
        <div style={{ height: '600px', position: 'relative' }}>
                  <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
        </div>
      </section>
       <section className="text-black py-16 px-4 sm:px-8 md:px-12">
        
            </section>
    </main>
  );
}
