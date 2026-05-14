"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Vaultex",
    category: "Brand Identity",
    description: "Complete visual identity for a fintech startup disrupting private wealth management.",
    color: "#E40101",
    bg: "#0f0000",
    accent: "Finance",
    year: "2024",
  },
  {
    id: "02",
    title: "Forma Studio",
    category: "Web Design & Dev",
    description: "Editorial portfolio site for an award-winning architecture firm with custom 3D elements.",
    color: "#fff",
    bg: "#0a0a0a",
    accent: "Architecture",
    year: "2024",
  },
  {
    id: "03",
    title: "Kairos App",
    category: "Mobile App",
    description: "AI-powered productivity app with a custom design system and React Native build.",
    color: "#E40101",
    bg: "#050508",
    accent: "Productivity",
    year: "2025",
  },
  {
    id: "04",
    title: "Meridian",
    category: "Product Design",
    description: "SaaS dashboard redesign boosting user retention by 62% through systematic UX improvements.",
    color: "#fff",
    bg: "#0d0d0d",
    accent: "SaaS",
    year: "2025",
  },
  {
    id: "05",
    title: "NovaSport",
    category: "Brand Identity",
    description: "Complete brand overhaul for a performance apparel brand entering the global market.",
    color: "#E40101",
    bg: "#080808",
    accent: "Sports",
    year: "2025",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="work-card flex-shrink-0 group"
      style={{ width: "clamp(320px, 35vw, 520px)", height: "clamp(420px, 55vh, 680px)" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{ background: project.bg }}
      />

      {/* Grid pattern inside card */}
      <div className="absolute inset-0 grid-line opacity-50" />

      {/* Content always visible */}
      <div className="relative z-10 h-full flex flex-col justify-between p-10">
        {/* Top */}
        <div className="flex items-start justify-between">
          <span className="font-body text-[10px] tracking-widest text-white/20">
            {project.id}
          </span>
          <span
            className="font-body text-[10px] tracking-widest uppercase px-3 py-1.5"
            style={{
              color: project.color,
              border: `1px solid ${project.color}30`,
            }}
          >
            {project.accent}
          </span>
        </div>

        {/* Decorative large number */}
        <div
          className="absolute font-display font-bold select-none pointer-events-none"
          style={{
            fontSize: "clamp(120px, 15vw, 200px)",
            color: project.color,
            opacity: 0.04,
            right: "-10px",
            top: "40%",
            transform: "translateY(-50%)",
            lineHeight: 1,
          }}
        >
          {project.id}
        </div>

        {/* Bottom */}
        <div>
          <p className="font-body text-white/30 text-xs leading-relaxed max-w-xs mb-6 transition-all duration-500 group-hover:text-white/50">
            {project.description}
          </p>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px" style={{ background: project.color }} />
            <span
              className="font-body text-[10px] tracking-widest uppercase"
              style={{ color: project.color + "99" }}
            >
              {project.category}
            </span>
          </div>
          <h3
            className="font-display font-bold leading-none"
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              color: project.color === "#E40101" ? "white" : "white",
            }}
          >
            {project.title}
          </h3>

          {/* Hover arrow */}
          <motion.div
            className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{ color: project.color }}
          >
            <span className="font-body text-[10px] tracking-widest uppercase">View Case Study</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.div>

          <span className="font-body text-[10px] text-white/15 mt-2 block">{project.year}</span>
        </div>
      </div>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${project.color}05 0%, transparent 100%)`,
        }}
      />
      {/* Red left border on hover */}
      <div
        className="absolute top-0 left-0 w-px h-0 group-hover:h-full transition-all duration-500"
        style={{ background: project.color }}
      />
    </motion.div>
  );
}

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section id="work" ref={sectionRef} className="py-20 md:py-32">
      {/* Header */}
      <div className="px-5 sm:px-8 md:px-16 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label mb-6"
            >
              Selected Work
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
            >
              Recent
              <br />
              <span style={{ color: "#E40101" }}>Projects</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <span className="font-body text-[10px] tracking-widest text-white/30 uppercase">
              Scroll to explore
            </span>
            <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
              <path d="M0 6H30M30 6L25 1M30 6L25 11" stroke="#E40101" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Horizontal scrolling cards */}
      <div className="horizontal-scroll-container">
        <div className="flex gap-4 sm:gap-6 px-5 sm:px-8 md:px-16 pb-4" style={{ width: "max-content" }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
          {/* End CTA card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 flex flex-col items-center justify-center gap-6 px-16"
            style={{ width: "clamp(240px, 25vw, 400px)", height: "clamp(360px, 55vh, 680px)" }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ border: "1px solid rgba(228,1,1,0.3)" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V19M5 12H19" stroke="#E40101" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="font-display font-bold text-xl text-white/30 text-center">
              See All Work
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
