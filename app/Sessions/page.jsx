"use client";

import React, { useState } from "react";
import Image from "next/image";
import DecayCard from "@/page.jsx/DecayCard/DecayCard";
import { format } from "date-fns";
import headshot from "../../public/headshot.png";

const hours = Array.from({ length: 16 }, (_, i) => i + 7);
const courts = ["Court 1", "Court 2", "Court 3"];

const Session = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formData, setFormData] = useState({
    player_email: "",
    club_id: "",
    court_id: "",
    time: [],
    date: format(new Date(), "yyyy-MM-dd"),
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const bookings = {
    "Court 1": [9, 10],
    "Court 2": [12],
    "Court 3": [16, 17],
  };

  const myBooking = {
    "Court 2": [13],
  };

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(new Date(date));
    setFormData({ ...formData, date });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/Sessions/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          time: ["22:00"],
        }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        alert(data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const isBooked = (court, hour) => bookings[court]?.includes(hour);
  const isMine = (court, hour) => myBooking[court]?.includes(hour);

  return (
    <main className="min-h-screen px-4 py-10 text-white bg-gray-900">
      <section className="flex items-center justify-center px-4 sm:px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">Welcome <br /><p>Book your sessions here</p></h1>
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80  shrink-0">
            <div className="relative w-60 h-60">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-teal-300 to-orange-300 opacity-80 blur-3xl z-0"></div>
              <DecayCard width={300} height={300} image="https://picsum.photos/300/400?grayscale">
                <h2>PRoGen<br />Padel</h2>
              </DecayCard>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-8 text-center">
        <label className="text-lg mr-3">Select Date:</label>
        <input
          type="date"
          value={format(selectedDate, "yyyy-MM-dd")}
          onChange={handleDateChange}
          className="text-black px-4 py-2 rounded-lg"
        />
      </div>

      {/* Table */}
<div className="w-full px-4 sm:px-8">
  <div className="overflow-x-auto mx-auto max-w-5xl">
    <div className="min-w-[700px]">
      <table className="text-sm border-collapse text-center w-full table-fixed">
        <thead>
          <tr className="bg-teal-700 text-white">
            <th className="border px-1 py-2 w-20">Court</th>
            {hours.map((hour) => (
              <th key={hour} className="border px-1 py-2 w-16">
                {hour}:00
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {courts.map((court) => (
            <tr key={court}>
              <td className="border px-1 py-2 font-semibold w-20">{court}</td>
              {hours.map((hour) => {
                const booked = isBooked(court, hour);
                const mine = isMine(court, hour);
                const bgColor = mine
                  ? "bg-green-500"
                  : booked
                  ? "bg-blue-500"
                  : "bg-white";

                const textColor = mine || booked ? "text-white" : "text-black";

                return (
                  <td
                    key={`${court}-${hour}`}
                    className={`border px-2 py-8 w-16 ${bgColor} ${textColor}`}
                  >
                    {/* Slot */}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>


      <div className="min-h-screen flex items-center justify-center p-2">
        <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl border border-white/30 shadow-2xl bg-white/10 backdrop-blur-lg text-black space-y-6">
          <div className="flex flex-col items-center text-center">
            <Image src={headshot} alt="Headshot" width={120} height={120} className="rounded-full shadow-lg" />
            <h2 className="text-xl sm:text-3xl font-bold text-teal-300 mt-4">Book a Session</h2>
            <p className="text-white text-sm sm:text-base">Fill the form below to reserve your spot</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="player_email" className="block font-semibold mb-1 text-white">Email</label>
              <input
                id="player_email"
                type="email"
                required
                value={formData.player_email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm placeholder:text-black/60"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="club_id" className="block font-semibold mb-1 text-white">Club</label>
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

            <div>
              <label htmlFor="court_id" className="block font-semibold mb-1 text-white">Court</label>
              <select
                id="court_id"
                required
                value={formData.court_id}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded bg-white/20 text-black border border-white/20 backdrop-blur-sm"
              >
                <option value="">Select your court</option>
                <option value="1">Court 1</option>
                <option value="2">Court 2</option>
                <option value="3">Court 3</option>
              </select>
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded font-semibold text-white transition ${
                submitted ? "bg-green-600" : "bg-black hover:bg-gray-800"
              }`}
              disabled={loading || submitted}
            >
              {submitted ? "Session Booked ✅" : loading ? "Booking..." : "Book Session"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Session;
