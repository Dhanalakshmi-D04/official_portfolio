import React, { useEffect, useRef, useState } from "react";

const certificates = [
  {
    id: 1,
    title: "R Trainning Certificate",
    year: "2025",
    desc: "Completed R Training with a 95% score, gaining strong foundations in statistical computing and data analysis using R.",
    image: "/cert1.png",
  },
  {
    id: 2,
    title: "TCSion",
    year: "2025",
    desc: "Successfully completed the TCS iON Career Edge program, developing communication, professional, IT foundational, and AI awareness skills.",
    image: "/cert2.png",
  },
  {
    id: 3,
    title: "GenAI Powered Data Analytics Job Simulation Certificate",
    year: "2025",
    desc: "Successfully completed a GenAI-powered data analytics job simulation, working on real-world analytical tasks and AI-driven insights.",
    image: "/cert3.png",
  },
  {
    id: 4,
    title: "Codec Technologies Internship Certificate",
    year: "2025",
    desc: "Successfully completed a 58+ hour Python developer internship, strengthening problem-solving skills and core Python concepts.",
    image: "/cert4.png",
  },
  {
    id: 5,
    title: "AI Fusion workshop Certificate",
    year: "2025",
    desc: "Participated in the AI Fusion workshop, gaining practical exposure to building intelligent systems and applied AI concepts.",
    image: "/cert5.png",
  },

  { 
    id: 7, 
    title: "3D Printing Design- Additive Manufacturing workshop Certificate", 
    year: "2025", 
    desc: "Participated in a 2-day workshop on 3D Printing & Additive Manufacturing, gaining exposure to modern manufacturing techniques.", 
    image: "/cert7.jpeg" 
  }, 
  { 
    id: 8, 
    title: "Block By Block Championship- Power BI Certificate", 
    year: "2025", 
    desc: " Secured 2nd place in the Block by Block Championship – Power BI, demonstrating strong data visualization and analytical skills.", 
    image: "/cert8.jpeg" 
  }, 
  { 
    id: 9, 
    title: "Yugaantar Hackathon Certificate", 
    year: "2025", 
    desc: "Actively participated in DevForge at Yugantar, contributing creatively to innovation-driven technical challenges.", 
    image: "/cert9.jpeg"
   },
  { 
    id: 10, 
    title: "TATA Crucible Campus Quiz Certificate", 
    year: "2025", 
    desc: "Participated in Tata Crucible Campus Quiz 2025, strengthening aptitude, analytical thinking, and general business awareness.", 
    image: "/cert10.jpeg" 
  }, 
  { 
    id: 11, 
    title: "RAG Certificate", 
    year: "2025", 
    desc: "Completed a 2-day hands-on workshop on RAGFLOW, gaining practical exposure to Retrieval AI, LangChain, Gemini, FastAPI, Firebase, React, and Tailwind.", 
    image: "/cert11.jpeg"
   }, 
  { 
    id: 12, 
    title: "Code Cubicle 5.0 Hackathon", 
    year: "2025", 
    desc: "Participated in Code Cubicle 5.0 Hackathon, presenting innovative problem-solving ideas during the online round and gaining hands-on hackathon experience.", 
    image: "/cert12.jpeg" 
  }, 
  { 
    id: 13, 
    title: "Internship Completion Certificate", 
    year: "2025", 
    desc: "Completed Python Development training, building strong foundations in programming, logic, and problem-solving.", 
    image: "/cert13.jpeg" 
  }, 
  { 
    id: 14, 
    title: "ML Maze – Navigate the World of AI (VertechX 12.0)", 
    year: "2025", 
    desc: "Participated in the ML Maze AI workshop, exploring machine learning concepts and real-world AI applications.", 
    image: "/cert14.jpeg"
   },
];

// 🔧 TUNING CONSTANTS
const CARD_WIDTH = 460;
const AUTO_SPEED = 1;      // 👈 always-moving base speed
const DRAG_FORCE = 0.4;      // drag influence
const FRICTION = 0.92;       // inertia decay
const MAX_DRAG_SPEED = 8;    // safety cap

const Spread = () => {
  const trackRef = useRef(null);

  const position = useRef(0);     // base position
  const dragVelocity = useRef(0); // drag-only momentum
  const isDragging = useRef(false);
  const lastX = useRef(0);

  const [active, setActive] = useState(null);

  const totalWidth = certificates.length * CARD_WIDTH;

  /* ================= ANIMATION LOOP ================= */
  useEffect(() => {
    let raf;

    const animate = () => {
      // 🟢 BASE AUTO LOOP (ALWAYS RUNS)
      position.current += AUTO_SPEED;

      // 🟣 DRAG INERTIA (temporary)
      position.current += dragVelocity.current;

      // Decay drag inertia
      dragVelocity.current *= FRICTION;

      // Clamp drag speed
      dragVelocity.current = Math.max(
        -MAX_DRAG_SPEED,
        Math.min(MAX_DRAG_SPEED, dragVelocity.current)
      );

      // 🔁 INFINITE WRAP
      if (position.current > totalWidth) position.current -= totalWidth;
      if (position.current < 0) position.current += totalWidth;

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${-position.current}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(raf);
  }, [totalWidth]);

  /* ================= DRAG CONTROLS ================= */
  const onMouseDown = (e) => {
    isDragging.current = true;
    lastX.current = e.clientX;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;

    const dx = e.clientX - lastX.current;
    lastX.current = e.clientX;

    // Add momentum, don’t replace it
    dragVelocity.current += dx * DRAG_FORCE;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };


  return (
    <section className="relative h-screen overflow-hidden text-white">

      {/* 🎥 BACKGROUND VIDEO */}
      <div
  className="absolute inset-0 -z-10 bg-cover bg-center"
  style={{ backgroundImage:  "url('/cd.jpg')" }}
>
  <div className="absolute inset-0 bg-black/60" />
</div>

      {/* HEADER */}
      <div className="px-8 pt-16">
        <h1 className="text-5xl sm:text-7xl font-bold">Credentials</h1>
        <p className="text-neutral-400 mt-2">
          Knowledge motion😉 click on the credentials to know the details<br/>
          wanna play? click-lock-rotate👾
        </p>
      </div>

      {/* HORIZONTAL LOOP */}
      <div
        className="mt-20 cursor-grab active:cursor-grabbing"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div ref={trackRef} className="flex gap-8 px-8 select-none">
          {[...certificates, ...certificates].map((item, i) => (
            <div
              key={`${item.id}-${i}`}
              onClick={() => setActive(item)}
              className="min-w-[420px] bg-neutral-900/80 backdrop-blur
                         rounded-2xl overflow-hidden
                         hover:scale-[1.03] transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🟣 NETFLIX-STYLE MODAL */}
      {active && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur flex items-center justify-center px-6">
          <div className="bg-[#111] max-w-5xl w-full rounded-2xl p-10 grid md:grid-cols-2 gap-10">
            <img src={active.image} alt="" className="rounded-xl w-full" />
            <div>
              <h2 className="text-3xl font-semibold">{active.title}</h2>
              <p className="text-neutral-400">{active.year}</p>
              <p className="mt-6 text-neutral-300">{active.desc}</p>
              <button
                onClick={() => setActive(null)}
                className="mt-10 border-b border-neutral-500 hover:border-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Spread;
