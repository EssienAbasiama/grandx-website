"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 80, suffix: "+", label: "Projects Delivered" },
  { value: 97, suffix: "%", label: "Client Satisfaction" },
  { value: 4, suffix: "x", label: "Avg. ROI Increase" },
  { value: 12, suffix: "", label: "Industry Awards" },
];

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="stat-number">
        {count}
        <span style={{ color: "#E40101" }}>{suffix}</span>
      </div>
      <div
        className="font-body text-[11px] tracking-widest uppercase mt-3"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-16"
      style={{ background: "#272727" }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 md:gap-8">
        {stats.map((stat) => (
          <Counter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
