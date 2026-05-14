"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "We craft bold, distinctive brand identities that communicate your vision, establish trust, and create an unmistakable presence across every touchpoint.",
    tags: ["Logo Design", "Visual Language", "Brand Strategy", "Guidelines"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" stroke="#E40101" strokeWidth="1" />
        <path d="M24 10 L24 24 L34 34" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" fill="#E40101" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Product Design",
    description:
      "From concept to pixel-perfect prototypes, we design intuitive, beautiful digital products that users love and businesses scale with.",
    tags: ["UX Research", "Prototyping", "Design Systems", "User Testing"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="4" stroke="#E40101" strokeWidth="1" />
        <rect x="14" y="14" width="20" height="12" rx="2" fill="#E40101" fillOpacity="0.15" stroke="#E40101" strokeWidth="0.5" />
        <line x1="14" y1="32" x2="22" y2="32" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="36" x2="28" y2="36" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Web Design & Development",
    description:
      "High-performance, visually extraordinary websites and web apps. We merge design craft with engineering excellence to deliver experiences that perform.",
    tags: ["Next.js", "React", "Motion", "CMS Integration", "SEO"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="10" width="36" height="26" rx="3" stroke="#E40101" strokeWidth="1" />
        <line x1="6" y1="18" x2="42" y2="18" stroke="#E40101" strokeWidth="0.5" />
        <circle cx="11" cy="14" r="1.5" fill="#E40101" />
        <circle cx="16" cy="14" r="1.5" fill="white" fillOpacity="0.3" />
        <circle cx="21" cy="14" r="1.5" fill="white" fillOpacity="0.3" />
        <path d="M18 28 L22 24 L26 28 L30 22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="18" y1="40" x2="30" y2="40" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="36" x2="24" y2="40" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Mobile App Design & Development",
    description:
      "We design and build native and cross-platform mobile apps that feel premium, perform flawlessly, and keep users engaged from first launch.",
    tags: ["iOS", "Android", "React Native", "Flutter", "App Store"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="14" y="6" width="20" height="36" rx="4" stroke="#E40101" strokeWidth="1" />
        <line x1="14" y1="12" x2="34" y2="12" stroke="#E40101" strokeWidth="0.5" />
        <line x1="14" y1="38" x2="34" y2="38" stroke="#E40101" strokeWidth="0.5" />
        <circle cx="24" cy="41" r="1.5" fill="#E40101" />
        <rect x="19" y="16" width="10" height="16" rx="2" fill="#E40101" fillOpacity="0.1" stroke="#E40101" strokeWidth="0.5" />
        <path d="M21 24 L24 21 L27 24 L24 27 Z" fill="#E40101" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" ref={ref} className="py-20 md:py-32 px-5 sm:px-8 md:px-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label mb-6"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
          >
            Services Built
            <br />
            for <span style={{ color: "#E40101" }}>Ambition</span>
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-white/40 text-sm max-w-xs leading-relaxed md:text-right"
        >
          Every discipline, fully integrated. We work across the complete stack of design
          and development so your brand moves as one.
        </motion.p>
      </div>

      {/* Service Cards */}
      <div className="space-y-0">
        {services.map((service, i) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="service-card group py-8 md:py-10 lg:py-12"
            style={{
              borderTopColor: hovered === i ? "#E40101" : undefined,
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-8 md:gap-16">
              {/* Number + Icon */}
              <div className="flex items-center gap-4 sm:gap-6 sm:w-48 flex-shrink-0">
                <span className="service-number">{service.number}</span>
                <motion.div
                  animate={{
                    opacity: hovered === i ? 1 : 0.4,
                    scale: hovered === i ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="font-display font-bold text-white mb-4 transition-colors duration-300"
                  style={{
                    fontSize: "clamp(24px, 2.5vw, 36px)",
                    color: hovered === i ? "#E40101" : "white",
                  }}
                >
                  {service.title}
                </h3>
                <p className="font-body text-white/40 text-sm leading-relaxed max-w-xl mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-[10px] tracking-widest uppercase px-3 py-1.5 text-white/30 transition-all duration-300"
                      style={{
                        border: "1px solid rgba(255,255,255,0.06)",
                        color: hovered === i ? "rgba(228,1,1,0.7)" : undefined,
                        borderColor: hovered === i ? "rgba(228,1,1,0.2)" : undefined,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-start pt-2 flex-shrink-0">
                <motion.div
                  animate={{
                    x: hovered === i ? 4 : 0,
                    opacity: hovered === i ? 1 : 0.2,
                    color: hovered === i ? "#E40101" : "white",
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-white"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
