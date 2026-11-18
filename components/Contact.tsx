"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const services = [
  "Web Design & Dev",
  "Ecommerce Web Design",
  "SEO",
  "Mobile App",
  "Social Media",
  "AI Automation",
  "Full Package",
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const toggle = (s: string) =>
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-32 px-5 sm:px-8 md:px-16"
      style={{ background: "#050505" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label mb-6"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(40px, 6vw, 96px)", lineHeight: 0.9 }}
          >
            Let's Build
            <br />
            <span style={{ color: "#E40101" }}>Something</span>
            <br />
            Extraordinary.
          </motion.h2>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
              {/* Service Selector */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-12"
              >
                <p className="font-body text-[10px] tracking-widest text-white/30 uppercase mb-4">
                  I'm interested in
                </p>
                <div className="flex flex-wrap gap-3">
                  {services.map((s) => (
                    <button
                      key={s}
                      onClick={() => toggle(s)}
                      className="font-body text-[11px] tracking-widest uppercase px-4 py-2.5 min-h-[44px] transition-all duration-300"
                      style={{
                        border: selected.includes(s)
                          ? "1px solid #E40101"
                          : "1px solid rgba(255,255,255,0.1)",
                        color: selected.includes(s) ? "#E40101" : "rgba(255,255,255,0.3)",
                        background: selected.includes(s)
                          ? "rgba(228,1,1,0.08)"
                          : "transparent",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-10"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="form-input font-body"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="form-input font-body"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="form-input font-body resize-none"
                    style={{ width: "100%" }}
                  />
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <p className="font-body text-white/20 text-xs max-w-xs leading-relaxed">
                    We typically respond within 24 hours. All projects start with a free
                    30-minute discovery call.
                  </p>
                  <button type="submit" className="btn-primary">
                    Send Message →
                  </button>
                </div>
              </motion.form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="py-20 text-center"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8"
                style={{ border: "1px solid #E40101", background: "rgba(228,1,1,0.1)" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12L10 17L19 8" stroke="#E40101" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-white text-4xl mb-4">
                Message Received.
              </h3>
              <p className="font-body text-white/40 text-sm">
                We'll be in touch within 24 hours. Looking forward to working with you.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Direct contact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-24 pt-10 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div>
            <p className="font-body text-[10px] tracking-widest text-white/20 uppercase mb-2">
              Or reach us directly
            </p>
            <a
              href="mailto:thegrandxstudios@gmail.com"
              className="font-display font-bold text-2xl text-white hover:text-[#E40101] transition-colors duration-300"
            >
              thegrandxstudios@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            {[
              { name: "Twitter", href: "https://twitter.com/grandxstudios" },
              { name: "Instagram", href: "https://www.instagram.com/grandxstudios/" },
              { name: "LinkedIn", href: "#" },
              { name: "Dribbble", href: "#" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.href}
                {...(s.href !== "#" && { target: "_blank", rel: "noopener noreferrer" })}
                className="footer-link font-body text-[10px] tracking-widest uppercase"
              >
                {s.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
