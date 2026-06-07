"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "High-performance, visually extraordinary websites and web apps. We merge design craft with engineering excellence to deliver modern, lightning-fast digital experiences.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CMS Integration"],
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
    number: "02",
    title: "Ecommerce Web Design",
    description:
      "Stunning, secure, and conversion-optimized online stores. From custom checkouts to high-performance catalogs, we build digital storefronts that turn visitors into loyal buyers.",
    tags: ["WooCommerce", "Cart Optimization", "Payment Gateways", "Scalable Catalog"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M6 10 h6 l6 20 h18 l5 -14 H16" stroke="#E40101" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="36" r="2.5" fill="white" stroke="#E40101" strokeWidth="1" />
        <circle cx="32" cy="36" r="2.5" fill="white" stroke="#E40101" strokeWidth="1" />
        <path d="M22 17 h8 M26 13 v8" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "SEO (Search Engine Optimization)",
    description:
      "Strategic optimization to shoot your digital platforms to the top of Google and other search engines. We target high-intent keywords to capture organic traffic and build search authority.",
    tags: ["Search Audits", "Keyword Strategy", "On-Page SEO", "Link Profile", "Rankings"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M8 40 h32 M12 34 l8 -10 l8 6 l10 -14" stroke="#E40101" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="38" cy="16" r="4" fill="white" stroke="#E40101" strokeWidth="1" />
        <line x1="38" y1="20" x2="42" y2="24" stroke="#E40101" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Mobile App Design & Development",
    description:
      "Premium native and cross-platform mobile apps for iOS and Android. Seamless performance, elegant interfaces, and custom capabilities that keep users engaged from launch.",
    tags: ["iOS App", "Android App", "React Native", "Flutter", "App Store Release"],
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
  {
    number: "05",
    title: "Social Media Management",
    description:
      "Strategic content curation, social growth, and community management. We establish a premium, cohesive voice for your brand across major channels to drive genuine engagement.",
    tags: ["Content Strategy", "Creative Design", "Growth Auditing", "Analytics"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="34" cy="12" r="4" stroke="#E40101" strokeWidth="1.2" />
        <circle cx="14" cy="24" r="4" stroke="white" strokeWidth="1.2" />
        <circle cx="34" cy="36" r="4" stroke="#E40101" strokeWidth="1.2" />
        <line x1="17.5" y1="22.5" x2="30.5" y2="13.5" stroke="white" strokeWidth="1.2" />
        <line x1="17.5" y1="25.5" x2="30.5" y2="34.5" stroke="white" strokeWidth="1.2" />
        <circle cx="14" cy="24" r="2" fill="#E40101" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "AI Automation",
    description:
      "Integrate cutting-edge AI features directly into your business. From custom AI agents and workflow automation to LLM integrations, we build systems that scale operations and productivity.",
    tags: ["AI Agents", "API Integration", "Workflow Flows", "Custom LLMs", "Bots"],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="12" y="12" width="24" height="24" rx="3" stroke="#E40101" strokeWidth="1.2" />
        <rect x="18" y="18" width="12" height="12" rx="1" fill="#E40101" fillOpacity="0.2" stroke="white" strokeWidth="1" />
        <path d="M6 18 h6 M6 24 h6 M6 30 h6 M36 18 h6 M36 24 h6 M36 30 h6 M18 6 v6 M24 6 v6 M30 6 v6 M18 36 v6 M24 36 v6 M30 36 v6" stroke="white" strokeWidth="1" strokeLinecap="round" />
        <circle cx="24" cy="24" r="2.5" fill="#E40101" />
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
