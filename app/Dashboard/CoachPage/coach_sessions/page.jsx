'use client'
import React, { useEffect, useRef, useState } from "react"
import anime from "animejs"

export default function ResourcesPage() {
  const [sessions, setSessions] = useState([])
  const ref = useRef(null)

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const coachId = localStorage.getItem("coachId")
        if (!coachId) return alert("Coach ID not found in localStorage")

        const res = await fetch(`/api/Sessions/coach_sessions?id=${coachId}`)
        const data = await res.json()

        if (!res.ok) throw new Error(data.error || "Failed to fetch sessions")
        setSessions(data)
      } catch (error) {
        console.error("Fetch error:", error)
      }
    }

    fetchSessions()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0", 10)
            const isEven = index % 2 === 0

            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateX: isEven ? [-100, 0] : [100, 0],
              easing: "easeOutExpo",
              duration: 800,
              delay: index * 100,
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    const sections = ref.current?.querySelectorAll(".resource-box") || []
    sections.forEach((section, i) => {
      section.setAttribute("data-index", i.toString())
      section.style.opacity = "0"
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [sessions])

  const rows = []
  for (let i = 0; i < sessions.length; i += 2) {
    rows.push([sessions[i], sessions[i + 1] || {}])
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 sm:px-6 lg:px-12 py-16 text-teal-400">
      <p className="fade-in text-3xl sm:text-4xl md:text-5xl font-bold text-teal-400 mb-6">
        My Sessions
      </p>

      <div ref={ref} className="relative">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-l-2 border-neutral-500"></div>

        <div className="space-y-16">
          {rows.map((pair, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-col md:flex-row gap-6 relative"
            >
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-10">
                <div className="w-4 h-4 rounded-full bg-neutral-500 opacity-80" />
              </div>

              {pair.map((item, colIdx) =>
                item?.court_name ? (
                  <div
                    key={colIdx}
                    className={`resource-box w-full md:w-1/2 min-h-[200px] p-6 sm:p-10 rounded-xl bg-black shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
                      colIdx === 0 ? "order-last md:order-first" : "order-first md:order-last"
                    }`}
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold underline text-white">
                      Session at {item.court_name}
                    </h2>
                    <p className="mt-3 text-base sm:text-lg text-neutral-300 space-y-2">
                      <span>🏫 <strong>Club:</strong> {item.club_name}</span><br />
                      <span>🎾 <strong>Coach:</strong> {item.coach_name}</span><br />
                      <span>🧑‍🎓 <strong>Player:</strong> {item.player_name || "N/A"}</span><br />
                      <span>💸 <strong>Court Charges:</strong> KES {item.court_charges}</span><br />
                      <span>💰 <strong>Total Charges:</strong> KES {item.charges}</span><br />
                      <span>📅 <strong>Date:</strong> {new Date(item.created_at).toLocaleDateString()}</span>
                    </p>
                  </div>
                ) : (
                  <div key={colIdx} className="resource-box w-full md:w-1/2 p-6 hidden md:block" />
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
