"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-5 sm:px-8 md:px-16 py-10 md:py-12 border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)", background: "#000" }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-6">
        {/* Left: Logo + tagline */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/images/logos/GrandX_20260510_020239_0000-removebg-preview.png"
              alt="GRANDX"
              width={30}
              height={30}
              className="object-contain"
            />
            <span className="font-bold text-white tracking-wider text-base" style={{ letterSpacing: "0.15em", fontFamily: "'HK Modular', sans-serif" }}>
              GRANDX
            </span>
          </div>
          <p className="font-body text-white/20 text-xs max-w-xs leading-relaxed">
            Design &amp; Technology Studio. Building bold brands and extraordinary digital experiences.
          </p>
        </div>

        {/* Center: Nav links */}
        <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
          {["Services", "Work", "Process", "Contact"].map((link) => (
            <button
              key={link}
              onClick={() => {
                document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="footer-link text-left"
            >
              {link}
            </button>
          ))}
        </nav>

        {/* Right: Copyright */}
        <div className="flex flex-col items-start md:items-end gap-2">
          <p className="font-body text-[10px] tracking-widest text-white/15 uppercase">
            © {year} GRANDX Studio
          </p>
          <p className="font-body text-[10px] tracking-widest text-white/10 uppercase">
            All Rights Reserved
          </p>
          {/* Red dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#E40101] animate-pulse mt-1" />
        </div>
      </div>

      {/* Giant GRANDX at bottom */}
      <div
        className="mt-16 select-none pointer-events-none overflow-hidden"
        style={{ marginLeft: "-2px" }}
      >
        <span
          className="font-bold text-stroke leading-none block"
          style={{
            fontSize: "clamp(40px, 12vw, 160px)",
            letterSpacing: "-0.02em",
            opacity: 0.15,
            fontFamily: "'HK Modular', sans-serif",
          }}
        >
          GRANDX
        </span>
      </div>
    </footer>
  );
}
