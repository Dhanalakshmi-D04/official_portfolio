import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React from "react";

const Work = () => {
  return (
    <section className="relative w-full max-w-screen-2xl mx-auto px-6 sm:px-52 py-32 bg-white text-neutral-900 overflow-hidden">

      {/* BIG ABOUT ME */}
      <div className="mb-24">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: Power4.out }}
          className="text-6xl sm:text-9xl font-semibold tracking-tight"
        >
          ABOUT ME
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: Power4.out }}
          className="origin-left mt-6 h-[2px] w-28 bg-neutral-900"
        />
      </div>

      {/* CONTENT GRID */}
      <div className="grid sm:grid-cols-12 gap-20 items-start">

        {/* LEFT — TEXT */}
        <div className="sm:col-span-7 text-xl leading-relaxed text-neutral-700">
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            I’m{" "}
            <span className="text-neutral-900 font-medium">Dhanalakshmi D</span> — an AI &
            Machine Learning student focused on designing systems where{" "}
            <span className="relative text-neutral-900 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full">
              intelligence feels invisible
            </span>
            .
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8"
          >
            My work lives at the intersection of artificial intelligence, modern
            web technologies, and thoughtful design. I enjoy turning complex
            ideas into{" "}
            <span className="relative text-neutral-900 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-neutral-900 after:transition-all after:duration-300 hover:after:w-full">
              clear, intuitive, and interactive
            </span>{" "}
            experiences.
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8"
          >
            I believe the best digital products don’t demand attention — they earn
            trust by feeling effortless to use.
          </motion.p>
        </div>

        {/* RIGHT — INTERACTIVE FOCUS AREAS */}
        <div className="sm:col-span-5 flex flex-col gap-7">
          {[
            "AI / Machine Learning",
            "Creative Development",
            "Vision",
            "Problem Solving",
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              whileHover={{ x: 12 }}
              className="group cursor-pointer border-b border-neutral-300 pb-6"
            >
              <p className="text-sm tracking-[0.35em] uppercase text-neutral-500 group-hover:text-neutral-900 transition">
                {item}
              </p>

              {/* subtle reveal */}
              <p className="mt-2 text-xs text-neutral-400 opacity-0 group-hover:opacity-100 transition">
                Focus area
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FLOATING BACKGROUND SIGNATURE */}
      <motion.h1
        initial={{ y: 0 }}
        whileInView={{ y: -40 }}
        transition={{ duration: 2, ease: "linear" }}
        className="pointer-events-none absolute bottom-[-7rem] right-[-5rem] text-[18rem] font-bold text-neutral-100 select-none"
      >
        Laksh
      </motion.h1>
    </section>
  );
};

export default Work;
