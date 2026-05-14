"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";

const WORDS = ["BOLD.", "PRECISE.", "FEARLESS.", "GRANDX."];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.3,
    },
  },
};

const charVariant = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SplitText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="show"
      aria-label={text}
      className={className}
      style={{ display: "inline-block" }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={charVariant}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const redLineRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-16 sm:pb-20 md:pb-24 px-5 sm:px-8 md:px-16 grid-line overflow-hidden">

      {/* Background large "G" watermark */}
      <div
        className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 select-none pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="text-white font-display font-bold"
          style={{ fontSize: "clamp(200px, 50vw, 700px)", lineHeight: 1, color: "white" }}
        >
          G
        </motion.div>
      </div>

      {/* Red accent corner line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
        style={{ transformOrigin: "left" }}
        className="absolute top-0 left-0 w-24 sm:w-48 h-px bg-[#E40101]"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
        style={{ transformOrigin: "top" }}
        className="absolute top-0 left-0 w-px h-24 sm:h-48 bg-[#E40101]"
      />

      {/* Top status bar */}
      <div className="absolute top-20 sm:top-24 md:top-28 left-5 sm:left-8 md:left-16 flex items-center gap-4 z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E40101] animate-pulse" />
          <span className="font-body text-[9px] sm:text-[10px] tracking-widest text-white/30 uppercase">
            Available for Projects
          </span>
        </motion.div>
      </div>

      {/* Year / Index */}
      <motion.div
        className="absolute top-20 sm:top-24 md:top-28 right-5 sm:right-8 md:right-16 font-body text-[9px] sm:text-[10px] tracking-widest text-white/20 uppercase z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        EST. 2024 — ©
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[1400px]">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="section-label mb-5 sm:mb-8"
        >
          Design &amp; Technology Studio
        </motion.div>

        {/* Giant headline */}
        <div className="overflow-hidden mb-1 sm:mb-2">
          <h1 className="hero-title text-white leading-none">
            <SplitText text="WE BUILD" />
          </h1>
        </div>
        <div className="overflow-hidden mb-1 sm:mb-2">
          <h1 className="hero-title leading-none" style={{ color: "#E40101" }}>
            <SplitText text="BRANDS" />
          </h1>
        </div>
        <div className="overflow-hidden mb-8 sm:mb-10 md:mb-12">
          <h1 className="hero-title text-white leading-none opacity-20">
            <SplitText text="THAT MOVE." />
          </h1>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="font-body text-white/40 text-sm sm:text-base max-w-xs leading-relaxed"
          >
            Identity. Product. Web. Mobile. We design and build digital experiences that are
            impossible to forget.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
            className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <button
              className="btn-primary text-center"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start a Project
            </button>
            <button
              className="btn-outline text-center"
              onClick={() => {
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Work
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — hidden on very small screens */}
      <motion.div
        ref={scrollIndicatorRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="hidden sm:flex absolute bottom-8 right-5 sm:right-8 md:right-16 flex-col items-center gap-3"
      >
        <span className="font-body text-[9px] tracking-widest text-white/20 uppercase" style={{ writingMode: "vertical-rl" }}>
          Scroll
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-[#E40101] to-transparent" />
      </motion.div>
    </section>
  );
}
