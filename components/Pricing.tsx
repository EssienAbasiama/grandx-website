"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PricingPlan {
  name: string;
  priceNgn: number | "Custom";
  priceUsd: number | "Custom";
  period?: string;
  popular?: boolean;
  description: string;
  features: string[];
  ctaLabel: string;
  whatsappMsg: string;
}

const websitePlans: PricingPlan[] = [
  {
    name: "Corporate",
    priceNgn: 350000,
    priceUsd: 290,
    description: "Sleek, high-performance website tailored to position your brand with maximum authority.",
    features: [
      "Up to 5 Pages (Custom Layouts)",
      "Free Domain & Hosting (1 Year)",
      "Professional Business Emails",
      "Bespoke Logo Design",
      "On-Page SEO Optimization",
      "Modern Responsive Layout (Mobile/Tablet)",
      "Standard WhatsApp Integration",
      "Security Shield & SSL Certificate"
    ],
    popular: false,
    ctaLabel: "Get Corporate Plan",
    whatsappMsg: "Hi GrandX, I'd like to order the Corporate Web Design package."
  },
  {
    name: "E-Commerce",
    priceNgn: 500000,
    priceUsd: 420,
    description: "Full-scale online storefront equipped with advanced retail features and payment systems.",
    features: [
      "Up to 100 Products Setup",
      "Free Domain & Hosting (1 Year)",
      "Professional Business Emails",
      "Bespoke Logo Design",
      "On-Page SEO Optimization",
      "Secure Payment Gateways (Paystack, Flutterwave)",
      "Advanced Analytics Integration",
      "1-Month Post-Launch Tech Support",
      "Inventory & Order Management"
    ],
    popular: true,
    ctaLabel: "Get E-Commerce Plan",
    whatsappMsg: "Hi GrandX, I'd like to order the E-Commerce Web Design package."
  },
  {
    name: "Custom Web / App",
    priceNgn: "Custom",
    priceUsd: "Custom",
    description: "Complex portals, web applications, SaaS dashboards, and customized digital architectures.",
    features: [
      "User & Admin Dashboards",
      "Tailor-made Tech Stack (Next.js / React)",
      "Bespoke Database & API Integrations",
      "On-Page & Off-Page SEO Setup",
      "Advanced Automation Workflows",
      "Analytics & Visual Performance Tracking",
      "Continuous Dedicated Engineering Support",
      "Social Media & Third-party Integrations"
    ],
    popular: false,
    ctaLabel: "Request Custom Quote",
    whatsappMsg: "Hi GrandX, I'd like to discuss a Custom Web/App project."
  }
];

const seoPlans: PricingPlan[] = [
  {
    name: "Starter SEO",
    priceNgn: 200000,
    priceUsd: 170,
    period: "month",
    description: "Optimize key landing pages, repair index issues, and start ranking for high-intent queries.",
    features: [
      "Complete Website SEO Audit",
      "Targeted Keyword Research",
      "On-Page Optimization (5 Pages)",
      "3 High-quality Blog Posts / Content Assets",
      "Title, Heading, Image Alt & Meta Tags Edit",
      "Google Search Console Indexing Setup",
      "Detailed Monthly Performance Report"
    ],
    popular: false,
    ctaLabel: "Start SEO Starter",
    whatsappMsg: "Hi GrandX, I'd like to order the Starter SEO package."
  },
  {
    name: "Growth SEO",
    priceNgn: 350000,
    priceUsd: 290,
    period: "month",
    description: "Dominate competitors on search results and secure valuable organic brand traffic.",
    features: [
      "Complete Website SEO Audit",
      "Targeted Keyword Research",
      "On-Page Optimization (10 Pages)",
      "5 High-quality Blog Posts / Content Assets",
      "Title, Heading, Image Alt & Meta Tags Edit",
      "Google Search Console & Google Analytics Setup",
      "Competitor Tracking & Content Gaps Analysis",
      "Detailed Monthly Performance Report"
    ],
    popular: true,
    ctaLabel: "Start SEO Growth",
    whatsappMsg: "Hi GrandX, I'd like to order the Growth SEO package."
  },
  {
    name: "Custom SEO",
    priceNgn: "Custom",
    priceUsd: "Custom",
    period: "month",
    description: "Enterprise campaign including intensive off-page link acquisition and content systems.",
    features: [
      "Custom Audit & Keyword Planning",
      "On-Page SEO (Unlimited Pages)",
      "Custom Blog Post Strategy (Bi-weekly/Daily)",
      "Full Google Analytics 4 Setup & Training",
      "Advanced Off-Page SEO & Backlinks Building",
      "Technical Schema Markup Optimization",
      "Dedicated Search Marketing Manager",
      "Bi-Weekly Executive Progress Calls"
    ],
    popular: false,
    ctaLabel: "Contact for SEO Plan",
    whatsappMsg: "Hi GrandX, I'd like to discuss a Custom SEO strategy."
  }
];

const socialPlans: PricingPlan[] = [
  {
    name: "Starter SM",
    priceNgn: 80000,
    priceUsd: 70,
    period: "month",
    description: "Basic organic presence on your primary social channel with professional visual assets.",
    features: [
      "1 Social Media Platform",
      "10 Premium Designed Posts / Month",
      "Profile Optimization & Setup",
      "Creative Content & Copywriting",
      "Basic Graphic Designs",
      "Active Community Management (Reviews/Replies)",
      "Monthly Analytics Report"
    ],
    popular: false,
    ctaLabel: "Start Social Starter",
    whatsappMsg: "Hi GrandX, I'd like to order the Starter Social Media package."
  },
  {
    name: "Professional SM",
    priceNgn: 150000,
    priceUsd: 130,
    period: "month",
    description: "Multi-platform growth engine, producing engaging graphics and video assets.",
    features: [
      "2 Social Media Platforms",
      "15 Premium Designed Posts / Month",
      "Profile Optimization & Setup",
      "Premium Content & Copywriting",
      "Custom Branded Graphics & Short Videos",
      "Active Community & Inbox Management",
      "High-reach Hashtag Strategy",
      "Detailed Growth Analytics & Insights"
    ],
    popular: true,
    ctaLabel: "Start Social Professional",
    whatsappMsg: "Hi GrandX, I'd like to order the Professional Social Media package."
  },
  {
    name: "Enterprise SM",
    priceNgn: 250000,
    priceUsd: 220,
    period: "month",
    description: "Complete social presence with video content, stories, ads, and dedicated community cover.",
    features: [
      "3-4 Social Media Platforms",
      "Daily Posts (30+ per Month)",
      "Profile Optimization & Setup",
      "Premium Content & Short Video Production",
      "Custom Graphics, Animations & Reels",
      "Daily Story Management",
      "24/7 Active Community Management",
      "Advanced Paid Ads Management (Ad Budget Extra)",
      "Targeted Hashtag & Trends Strategy",
      "Dedicated Social Media Manager",
      "Competitor Analysis & Monthly Auditing"
    ],
    popular: false,
    ctaLabel: "Start Social Enterprise",
    whatsappMsg: "Hi GrandX, I'd like to order the Enterprise Social Media package."
  }
];

const aiPlans: PricingPlan[] = [
  {
    name: "Starter Automation",
    priceNgn: "Custom",
    priceUsd: "Custom",
    description: "Integrate basic AI features to optimize manual workflows and capture queries.",
    features: [
      "Custom AI Web Chatbot (Lead Capture)",
      "Simple CRM & Lead Sync (Zapier / Make)",
      "Email & Scheduling Automation",
      "Standard AI API Setup (OpenAI / Claude)",
      "Employee Onboarding Guides"
    ],
    popular: false,
    ctaLabel: "Get Automation Quote",
    whatsappMsg: "Hi GrandX, I'd like to inquire about the Starter AI Automation package."
  },
  {
    name: "Enterprise Automation",
    priceNgn: "Custom",
    priceUsd: "Custom",
    description: "Scale your organization's performance with multi-tier custom LLM assistants and bots.",
    features: [
      "Custom Enterprise LLM Fine-Tuning / RAG",
      "Multi-platform Workflow Automations",
      "Automated Voice & Telephony Bots",
      "Cognitive Database Search & Analytics",
      "Dedicated Tech Team Audit & Support"
    ],
    popular: true,
    ctaLabel: "Get Enterprise Quote",
    whatsappMsg: "Hi GrandX, I'd like to inquire about the Enterprise AI Automation package."
  },
  {
    name: "Mobile App Design",
    priceNgn: "Custom",
    priceUsd: "Custom",
    description: "Bespoke Android and iOS native mobile products, built to handle massive scale.",
    features: [
      "Native iOS & Android Engineering",
      "React Native or Flutter Technology",
      "Sleek UI/UX Custom Design Frames",
      "Push Notifications & Chat Integration",
      "App Store & Google Play Store Submission",
      "Complete Admin Portal Configuration"
    ],
    popular: false,
    ctaLabel: "Get Mobile App Quote",
    whatsappMsg: "Hi GrandX, I'd like to discuss Mobile App Design and Development."
  }
];

const categories = [
  { id: "websites", label: "Websites & Shops", plans: websitePlans },
  { id: "seo", label: "SEO Services", plans: seoPlans },
  { id: "social", label: "Social Media", plans: socialPlans },
  { id: "ai", label: "AI & Apps", plans: aiPlans }
];

export default function Pricing() {
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [activeTab, setActiveTab] = useState("websites");

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  const formatPrice = (plan: PricingPlan) => {
    const value = currency === "NGN" ? plan.priceNgn : plan.priceUsd;
    if (value === "Custom") return "Custom Quote";
    const symbol = currency === "NGN" ? "₦" : "$";
    return `${symbol}${value.toLocaleString()}`;
  };

  const getWhatsAppLink = (plan: PricingPlan) => {
    const base = "https://wa.me/2347075876888";
    const text = encodeURIComponent(plan.whatsappMsg);
    return `${base}?text=${text}`;
  };

  return (
    <section id="pricing" className="py-20 md:py-32 px-5 sm:px-8 md:px-16 border-t border-zinc-900 bg-black">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12 md:mb-20">
        <div className="section-label mb-6">Pricing Plans</div>
        <h2
          className="font-display font-bold text-white leading-tight mb-6"
          style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}
        >
          Investment in <span style={{ color: "#E40101" }}>Performance</span>
        </h2>
        <p className="font-body text-white/40 text-sm max-w-lg leading-relaxed mb-10">
          Transparent, value-driven rates tailored for high-growth businesses. 
          Mirroring premium standards for websites, SEO, marketing, and custom automation.
        </p>

        {/* Controls Layout */}
        <div className="flex flex-col sm:flex-row items-center gap-6 z-10">
          {/* Currency Toggle */}
          <div className="relative inline-flex rounded-full bg-zinc-900 p-1 border border-zinc-800">
            <button
              onClick={() => setCurrency("NGN")}
              className={`relative z-10 px-5 py-2 rounded-full font-body text-xs tracking-wider uppercase font-semibold transition-colors duration-300 ${
                currency === "NGN" ? "text-white" : "text-white/40 hover:text-white"
              }`}
            >
              NGN (₦)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`relative z-10 px-5 py-2 rounded-full font-body text-xs tracking-wider uppercase font-semibold transition-colors duration-300 ${
                currency === "USD" ? "text-white" : "text-white/40 hover:text-white"
              }`}
            >
              USD ($)
            </button>

            {/* Slide animation background */}
            <motion.div
              layout
              className="absolute top-1 bottom-1 left-1 bg-[#E40101] rounded-full"
              style={{
                width: "calc(50% - 4px)",
              }}
              animate={{
                x: currency === "NGN" ? 0 : "100%",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {/* Category Tabs Wrapper */}
          <div className="flex flex-wrap justify-center gap-2 bg-zinc-900/50 p-1.5 rounded-xl border border-zinc-900">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="relative px-4 py-2.5 rounded-lg font-body text-xs tracking-wider uppercase transition-colors duration-300"
                style={{
                  color: activeTab === cat.id ? "#fff" : "rgba(255,255,255,0.4)"
                }}
              >
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTabPricingBg"
                    className="absolute inset-0 bg-zinc-800 rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="relative max-w-7xl mx-auto">
        {/* Glow decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E40101]/5 rounded-full blur-3xl pointer-events-none" />

        <motion.div
          layout
          className="grid md:grid-cols-3 gap-8 items-stretch relative z-10"
        >
          <AnimatePresence mode="popLayout">
            {currentCategory.plans.map((plan, index) => (
              <motion.div
                key={`${activeTab}-${plan.name}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-500 border bg-zinc-950/80 backdrop-blur-md ${
                  plan.popular
                    ? "border-[#E40101] md:scale-105 shadow-2xl shadow-[#E40101]/10 md:z-10"
                    : "border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E40101] text-white text-[10px] tracking-widest uppercase font-bold px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <h3 className="font-display font-bold text-xl text-white mb-2">{plan.name}</h3>
                  <p className="font-body text-white/40 text-xs leading-relaxed mb-6 h-10 overflow-hidden">
                    {plan.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="flex items-baseline gap-1.5 mb-8">
                    <span className="font-display font-extrabold text-white" style={{ fontSize: "clamp(32px, 3.5vw, 44px)" }}>
                      {formatPrice(plan)}
                    </span>
                    {plan.period && plan.priceNgn !== "Custom" && (
                      <span className="font-body text-xs text-white/40 tracking-wider">
                        / {plan.period}
                      </span>
                    )}
                  </div>

                  <div className="h-px bg-zinc-900 mb-8" />

                  {/* Plan Features Checklist */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-white/70 font-body leading-relaxed">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ stroke: "#E40101" }}
                        >
                          <path
                            d="M20 6L9 17L4 12"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Booking Button */}
                <a
                  href={getWhatsAppLink(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-xl font-body text-xs tracking-widest uppercase font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#E40101] hover:bg-[#c30101] text-white"
                      : "bg-zinc-900 hover:bg-zinc-850 text-white border border-zinc-800"
                  }`}
                >
                  {plan.ctaLabel}
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Info Notice */}
      <div className="text-center mt-12">
        <p className="font-body text-xs text-white/30">
          Looking for a custom enterprise setup?{" "}
          <a
            href="mailto:hello@grandx.studio"
            className="text-[#E40101] hover:underline"
          >
            Reach out to our engineering team
          </a>
          .
        </p>
      </div>
    </section>
  );
}
