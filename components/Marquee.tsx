"use client";

const items = [
  "Brand Identity",
  "★",
  "Product Design",
  "★",
  "Web Development",
  "★",
  "Mobile Apps",
  "★",
  "UI/UX Design",
  "★",
  "Visual Identity",
  "★",
  "Design Systems",
  "★",
  "Motion Design",
  "★",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y"
      style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0a0a0a" }}
    >
      <div className="flex animate-marquee whitespace-nowrap py-5">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={
              item === "★"
                ? "mx-6 text-[#E40101] text-lg"
                : "mx-8 font-display font-bold text-sm tracking-widest uppercase text-white/20"
            }
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
