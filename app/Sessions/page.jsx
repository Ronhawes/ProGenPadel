"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";
import Image from "next/image";
import DecayCard from "@/page.jsx/DecayCard/DecayCard";
import { format } from "date-fns";
import headshot from "../../public/headshot.png";

const hours = Array.from({ length: 16 }, (_, i) => i + 7);

const Session = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [clubsData, setClubsData] = useState([]);
  const [courts, setCourts] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [formData, setFormData] = useState({
    player_email: "",
    club_id: "",
    court_id: "",
    time: [],
    date: format(new Date(), "yyyy-MM-dd"),
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedClub, setSelectedClub] = useState(null);

  const fetchClubsData = async (clubName) => {
    if (!clubName) return;

    try {
      const res = await fetch(`/api/Club/getclub?name=${encodeURIComponent(clubName)}`);
      if (!res.ok) {
        const errMsg = await res.text();
        throw new Error(`Fetch failed: ${res.status} ${res.statusText} - ${errMsg}`);
      }

      const data = await res.json();
      setClubsData([data]);
      setFormData((prev) => ({ ...prev, club_id: data.id }));

      const allCourts = data.Courts.map((court) => ({
        ...court,
        clubId: data.id,
        clubName: data.name,
      }));
      setCourts(allCourts);

      const allSessions = data.Sessions.map((session) => ({
        ...session,
        clubId: data.id,
        courtName: session.Courts?.name || "",
      }));
      setSessions(allSessions);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const isBooked = (courtId, hour) => {
    return sessions.some((session) => {
      if (!session?.court_id || !session?.time?.[0] || !session?.date) return false;

      const bookedHour = parseInt(session.time[0]?.split(":")[0]);
      const selectedHour = parseInt(hour);

      return (
        session.court_id === courtId &&
        bookedHour === selectedHour &&
        format(new Date(session.date), "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
      );
    });
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
        body: JSON.stringify(formData),
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

  return (
    <main className="min-h-screen px-4 py-10 text-white bg-gray-900">
      <section className="flex items-center justify-center px-4 sm:px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white">
            Welcome <br />
            <p>Book your sessions here</p>
          </h1>
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 shrink-0">
            <div className="relative w-60 h-60">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-teal-300 to-orange-300 opacity-80 blur-3xl z-0"></div>
              <DecayCard width={300} height={300} image="https://picsum.photos/300/400?grayscale">
                <h2>PRoGen<br />Padel</h2>
              </DecayCard>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex flex-col">
          <label className="text-lg mb-1 text-white">Select Date:</label>
          <input
            type="date"
            value={format(selectedDate, "yyyy-MM-dd")}
            onChange={handleDateChange}
            className="text-black px-4 py-2 rounded-lg"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="club_id" className="text-lg mb-1 text-white">Select Club:</label>
          <Select
            id="club_id"
            options={["Goan", "Padel254", "Premium", "Padelpoint", "Nanyuki"].map(name => ({
              value: name,
              label: name,
            }))}
            onChange={(selectedOption) => setSelectedClub(selectedOption)}
            className="text-black w-72"
            placeholder="Search or select club"
          />
        </div>

        <button
          onClick={() => fetchClubsData(selectedClub?.value)}
          className="mt-6 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg"
        >
          Search
        </button>
      </div>

      <div className="w-full px-4 sm:px-8">
        <div className="overflow-x-auto mx-auto max-w-5xl">
          <div className="min-w-[700px]">
            <table className="text-sm border-collapse text-center w-full table-fixed">
              <thead>
                <tr className="bg-teal-700 text-white">
                  <th className="border px-1 py-2 w-20">Court</th>
                  {hours.map((hour) => (
                    <th key={hour} className="border px-1 py-2 w-16">{hour}:00</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {courts.map((court) => (
                  <tr key={court.name}>
                    <td className="border px-1 py-2 font-semibold w-20">{court.name}</td>
                    {hours.map((hour) => {
                      const booked = isBooked(court.id, hour);
                      const bgColor = booked ? "bg-blue-500" : "bg-green-500";
                      const textColor = "text-white";

                      return (
                        <td
                          title={`Court: ${court.name}`}
                          key={`${court.name}-${hour}`}
                          className={`border px-2 py-8 w-16 cursor-pointer ${bgColor} ${textColor} ${
                            booked ? "opacity-60 cursor-not-allowed" : "hover:ring-2 ring-yellow-300"
                          }`}
                          onClick={() => {
                            if (!booked) {
                              setSelectedSlot({ court: court.name, hour });
                              setFormData({
                                ...formData,
                                time: [`${hour}:00`],
                                court_id: `${court.id}`,
                                club_id: `${court.clubId}`,
                              });
                              setSubmitted(false);
                            }
                          }}
                        ></td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedSlot && (
        <div className="min-h-screen flex items-center justify-center p-2 mt-10">
          <div className="w-full max-w-md p-6 sm:p-8 rounded-2xl border border-white/30 shadow-2xl bg-white/10 backdrop-blur-lg text-black space-y-6">
            <div className="flex flex-col items-center text-center">
              <Image src={headshot} alt="Headshot" width={120} height={120} className="rounded-full shadow-lg" />
              <h2 className="text-xl sm:text-3xl font-bold text-teal-300 mt-4">Book a Session</h2>
              <p className="text-white text-sm sm:text-base">
                You selected <span className="text-yellow-300">{selectedSlot.court}</span> at <span className="text-yellow-300">{selectedSlot.hour}:00</span>
              </p>
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
      )}
    </main>
  );
};

export default Session;
