"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with deep listening. Understanding your business, your users, your competitors, and your ambitions. This shapes everything that follows.",
    duration: "1–2 Weeks",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We translate discovery into a clear strategic direction — positioning, messaging, visual language, and technical architecture — all before a single pixel is pushed.",
    duration: "1 Week",
  },
  {
    number: "03",
    title: "Design",
    description:
      "From wireframes to high-fidelity compositions, we design with precision. Every detail is considered. Every decision is intentional.",
    duration: "2–4 Weeks",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Our engineers build exactly what was designed — no corners cut. Clean code, optimized performance, and scalable architecture that grows with you.",
    duration: "3–8 Weeks",
  },
  {
    number: "05",
    title: "Launch & Grow",
    description:
      "We don't disappear after launch. We monitor, iterate, and optimize — ensuring your product performs and evolves.",
    duration: "Ongoing",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="process" ref={ref} className="py-20 md:py-32 px-5 sm:px-8 md:px-16 grid-line">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label mb-6"
          >
            How We Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            Our
            <br />
            <span style={{ color: "#E40101" }}>Process</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-white/40 text-sm max-w-xs leading-relaxed"
        >
          A clear, structured approach that eliminates uncertainty and delivers
          exceptional results — every time.
        </motion.p>
      </div>

      {/* Steps */}
      <div className="space-y-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-8 md:gap-16 py-8 md:py-10 border-b"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            {/* Number */}
            <div className="flex items-center gap-4 sm:w-32 flex-shrink-0">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#E40101]"
                style={{ border: "1px solid rgba(228,1,1,0.4)" }}
              >
                <span className="font-body text-[10px] text-[#E40101] group-hover:text-white transition-colors">
                  {step.number}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3
                className="font-display font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#E40101]"
                style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
              >
                {step.title}
              </h3>
              <p className="font-body text-white/40 text-sm leading-relaxed max-w-xl">
                {step.description}
              </p>
            </div>

            {/* Duration */}
            <div className="sm:w-36 flex-shrink-0 flex sm:justify-end sm:pt-2">
              <div
                className="font-body text-[10px] tracking-widest uppercase px-3 py-2 self-start"
                style={{
                  color: "rgba(228,1,1,0.6)",
                  border: "1px solid rgba(228,1,1,0.15)",
                }}
              >
                {step.duration}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
