"use client"
import React, { useEffect, useRef } from "react"
import anime from "animejs"

const resources = [
 
  {
    name: "WHAT IS PADEL",
    description: "is a sport which combines action with fun and social interaction. It’s a great sport for players of all ages and skills, as it is both quick and easy to pick up."
  },
  {
    name: "Sports Management",
    description: "An important skill is match-craft, as points are won rather by strategy than by sheer strength and power."
  },
  {
    name: "THE PADEL COURT",
    description: "Padel is a mix between Tennis and Squash. It’s usually played in doubles on an enclosed court surrounded by walls of glass and metallic mash. The court is one third of the size of a tennis court."
  },
  {
    name: "PADEL RACQUET & BALL",
    description: "The game is quick and easy to learn, making it a fun and addictive sport to play. Using a short, stringless racquet with an elastic surface with holes and a low compression tennis ball, the service is made underarm."
  },
  {
    name: "SCORING",
    description: "The scoring and rules are very similar to Tennis, with the biggest difference being that the serve in Padel is underarm and that balls can be played off the glass walls in a similar way as in Squash. "
  },
  {
    name: "RULES",
    description: "The rules allow for the use of the back and sidewalls, which results in longer rallies than in a conventional tennis match. Points are won rather by strategy than by strength and power."
  },
   

  {
    name: "STRATEGY ",
    description: "Padel is not as dominated by strength, technique and serve as it happens in Tennis and therefore is an ideal game for men, women and youth to compete together."
  },
];



export default function ResourcesPage() {
  const ref = useRef(null)

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
            delay: index * 100, // slight stagger effect
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
}, [])


  const sortedArr = resources // keep original order

  const rows = []
  for (let i = 0; i < sortedArr.length; i += 2) {
    rows.push([sortedArr[i], sortedArr[i + 1] || {}])
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 sm:px-6 lg:px-12 py-16 text-teal-400">
      
      <p className="fade-in text-3xl sm:text-4xl md:text-5xl font-bold text-teal-400 mb-6">
        Learn about padel today
      </p>

      <div ref={ref} className="relative">
        {/* Vertical Line (hidden on small screens) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-l-2 border-neutral-500"></div>

        <div className="space-y-16">
          {rows.map((pair, rowIdx) => (
            <div
              key={rowIdx}
              className="flex flex-col md:flex-row gap-6 relative"
            >
              {/* Timeline Circle */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-10">
                <div className="w-4 h-4 rounded-full bg-neutral-500 opacity-80" />
              </div>

             {pair.map((item, colIdx) =>
  item.name ? (
    <div
      key={colIdx}
      className={`resource-box w-full md:w-1/2 min-h-[200px] p-6 sm:p-10 rounded-xl bg-black shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
        colIdx === 0 ? "order-last md:order-first" : "order-first md:order-last"
      }`}
    >
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl sm:text-3xl font-bold underline hover:text-teal-400"
      >
        {item.name}
      </a>
      <p className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-300">
        {item.description}
      </p>
    </div>
  ) : (
    <div
      key={colIdx}
      className="resource-box w-full md:w-1/2 p-6 hidden md:block"
    />
  )
)}


            </div>
          ))}
        </div>
      </div>
    </main>
  )
}