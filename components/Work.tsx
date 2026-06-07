"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "Wibe Studio",
    category: "Web Design & Dev",
    description: "California-based Fashion Studio: Crafting unique designs and exquisite jewelry. Fashion, our art, transcends boundaries with creativity and happiness.",
    color: "#E40101",
    bg: "#0e0606",
    accent: "Fashion",
    year: "2024",
    liveLink: "https://wibe-studio-umber.vercel.app/",
    codeLink: "https://github.com/EssienAbasiama/wibe-studio-house",
    tags: ["React", "CSS Animation", "JS"],
  },
  {
    id: "02",
    title: "GeegPay",
    category: "Web Design & Dev",
    description: "Finance monitoring dashboard for tracking spending, monitoring income, setting budgets, and gaining analytics for smart financial decisions.",
    color: "#fff",
    bg: "#050a0f",
    accent: "Finance",
    year: "2024",
    liveLink: "https://geegpay-challenge-eta.vercel.app/",
    codeLink: "https://github.com/EssienAbasiama/geegpay-Challenge",
    tags: ["React", "Chart.js", "Tooltip"],
  },
  {
    id: "03",
    title: "getLinked",
    category: "Web Design & Dev",
    description: "Vision-driven hackathon portal built to solve real-world challenges, showcase technology innovation, and push software design boundaries.",
    color: "#E40101",
    bg: "#0d0514",
    accent: "Hackathon",
    year: "2024",
    liveLink: "https://get-linked2-0.vercel.app/",
    codeLink: "https://github.com/EssienAbasiama/linked",
    tags: ["React", "REST API", "Animation"],
  },
  {
    id: "04",
    title: "ClearLink",
    category: "Web Design & Dev",
    description: "Crystal-clear, simple video communication platform with AI assistant avatars, virtual group calling, and custom scheduling.",
    color: "#fff",
    bg: "#050f05",
    accent: "SaaS",
    year: "2024",
    liveLink: "https://clear-link-swart.vercel.app/",
    codeLink: "https://github.com/EssienAbasiama/clearLink",
    tags: ["React", "CSS3", "Bootstrap"],
  },
  {
    id: "05",
    title: "Grammercetamol",
    category: "Web Design & Dev",
    description: "Diction and English clinic site. Helping users improve pronunciation, boost vocabulary, and speak English with confidence and fluency.",
    color: "#E40101",
    bg: "#0c0c0d",
    accent: "Education",
    year: "2025",
    liveLink: "https://grammercetamoll.netlify.app/",
    codeLink: "https://github.com/EssienAbasiama/grammercetamol-interface",
    tags: ["React", "REST API", "Redux"],
  },
  {
    id: "06",
    title: "MovieBox",
    category: "Web Design & Dev",
    description: "Interactive movie discovery app offering instant access to cinematic reviews, trailers, ratings, and trending movie database.",
    color: "#fff",
    bg: "#120a05",
    accent: "Movies",
    year: "2025",
    liveLink: "https://moviebox-amber.vercel.app/",
    codeLink: "https://github.com/EssienAbasiama/MBox",
    tags: ["React", "Movie API", "CSS3"],
  },
  {
    id: "07",
    title: "Trip Guide",
    category: "Web Design & Dev",
    description: "Travel booking platform facilitating hotel, flight, and car rentals alongside curated local recommendations.",
    color: "#E40101",
    bg: "#050c12",
    accent: "Travel",
    year: "2025",
    liveLink: "https://geegpay-challenge-eta.vercel.app/",
    codeLink: "",
    tags: ["Next.js", "Supabase", "CSS3"],
  },
  {
    id: "08",
    title: "QCloseHR",
    category: "Mobile App",
    description: "Cloud-based HR and workforce management platform designed for modern organizations. It enables businesses to manage employee attendance, productivity, HR operations, and workforce analytics.",
    color: "#E40101",
    bg: "#080c09",
    accent: "HR Tech",
    year: "2026",
    liveLink: "https://apps.apple.com/ng/app/qclosehr/id6751410996",
    codeLink: "https://play.google.com/store/apps/details?id=com.qclosellc.QCloseHR&pcampaignid=web_share",
    tags: ["React Native", "TypeScript", "Node.js", "Laravel"],
    features: [
      "Attendance & Time Tracking: Employees can clock in/out, track working hours, and monitor daily attendance directly from the mobile app.",
      "Shift & Timesheet Management: Supports shift scheduling, timesheet tracking, and overtime monitoring.",
      "Leave & Time-Off Management: Employees can request leave, view balances, and managers can approve or reject requests.",
      "Payroll & Payslip Access: Employees can securely access payroll information and payslips.",
      "Task & To-Do Management: Allows employees to manage assigned tasks and track productivity.",
      "Invoices & Requests: Employees and teams can submit internal requests and manage service or invoice submissions.",
      "Calendar & Scheduling: Integrated calendar system for managing work schedules and HR events.",
      "Disciplinary Management: Supports documentation and tracking of disciplinary records.",
      "Performance Management: Includes KPI tracking, employee appraisals, and performance evaluation tools.",
      "Policies & Procedures: Centralized access to company HR policies and procedures.",
      "Announcements: Allows organizations to broadcast company announcements to employees.",
      "Workforce Reporting & Insights: Provides workforce analytics and HR reporting dashboards."
    ],
    caseStudy: {
      projectOverview: [
        { label: "Role", value: "Senior Mobile Engineer" },
        { label: "Platform", value: "iOS and Android" },
        { label: "Technology", value: "React Native" },
        { label: "Status", value: "Production Application" }
      ],
      problem: [
        "Many organizations struggle with inefficient HR processes, manual attendance tracking, and limited visibility into employee productivity. Traditional HR systems are often complex and not optimized for mobile-first workflows.",
        "Organizations needed a simple, mobile-first platform that allows employees and managers to manage HR operations from anywhere while maintaining accurate workforce data."
      ],
      solution: [
        "QCloseHR was designed as a mobile-first HR and workforce management platform that allows organizations to manage employee attendance, tasks, leave requests, and workforce analytics directly from mobile devices.",
        "The mobile application integrates with backend services to deliver real-time workforce insights and productivity data for employees, managers, and administrators."
      ],
      myRoleIntro: "As the Senior Mobile Engineer, I was responsible for the end-to-end development of the mobile application.",
      responsibilities: [
        "Designing the mobile application architecture",
        "Developing core mobile UI systems using React Native",
        "Integrating the mobile client with backend APIs",
        "Implementing authentication and secure API communication",
        "Optimizing performance for mobile devices",
        "Preparing builds and deployments for the App Store"
      ],
      architecture: [
        {
          title: "Mobile Application",
          items: ["React Native", "TypeScript", "Reusable component-based UI architecture"]
        },
        {
          title: "Backend Services",
          items: ["Node.js", "Laravel", "Java Spring Boot"]
        },
        {
          title: "API Communication",
          items: ["REST APIs", "Secure authentication and token-based requests"]
        },
        {
          title: "Deployment",
          items: ["Apple App Store", "Google Play Store"]
        }
      ],
      challenges: [
        {
          title: "Performance Optimization",
          description: "Optimized API requests and improved data loading efficiency to ensure fast and reliable user interactions."
        },
        {
          title: "Reusable Component Systems",
          description: "Built reusable UI components to accelerate development and maintain consistency across the application."
        },
        {
          title: "Secure API Integration",
          description: "Implemented secure authentication and reliable API communication between the mobile application and backend systems."
        }
      ],
      impact: [
        "Delivered a production HR platform used internally by the organization",
        "Enabled mobile workforce management and attendance tracking",
        "Improved operational visibility and productivity insights",
        "Established reusable mobile architecture for future products"
      ]
    }
  },
  {
    id: "09",
    title: "QCloseSafety",
    category: "Mobile App",
    description: "QCloseSafety is a productivity and service management platform designed to improve operational efficiency by simplifying workflows and providing real-time workforce insights.",
    color: "#fff",
    bg: "#09090b",
    accent: "Safety Tech",
    year: "2026",
    liveLink: "https://apps.apple.com/ng/app/qclosesafety/id6755178119",
    codeLink: "https://play.google.com/store/apps/details?id=com.qclosellc.QCloseSafety&pcampaignid=web_share",
    tags: ["React Native", "API Integrations", "Mobile-First"],
    features: [
      "Service workflow management",
      "Employee activity tracking",
      "Operational analytics",
      "Mobile productivity tools"
    ]
  },
  {
    id: "10",
    title: "SOFO Sticker Logo",
    category: "Graphic Design",
    description: "Sticker and mascot logo design for SOFO, featuring a customized green sticker illustration with bubble typography.",
    color: "#E40101",
    bg: "#1a331e",
    accent: "Mascot Logo",
    year: "2025",
    liveLink: "/images/graphics/sofo_green.jpg",
    codeLink: "",
    tags: ["Illustrator", "Branding", "Vector Art"],
    features: [
      "Sticker-style border contour detailing.",
      "Custom vector mascot character illustration.",
      "Playful bubble lettering brand text.",
      "Vibrant high-contrast green branding color palette."
    ]
  },
  {
    id: "11",
    title: "Rema Heis Poster",
    category: "Graphic Design",
    description: "Creative black and white promotional poster design for Rema's Heis album, blending high-contrast visual themes with experimental typography.",
    color: "#fff",
    bg: "#141414",
    accent: "Poster Design",
    year: "2025",
    liveLink: "/images/graphics/rema_heis.jpg",
    codeLink: "",
    tags: ["Photoshop", "Typography", "Art Direction"],
    features: [
      "Experimental distorted vertical layout typography.",
      "High-contrast grain filtered black and white portrait work.",
      "Clean double exposure layout styling overlaying a giant '25'.",
      "Sleek editorial poster layout for digital promo."
    ]
  },
  {
    id: "12",
    title: "Mixed Minds Collage",
    category: "Graphic Design",
    description: "Sketchbook-style collage art design labeled 'Mixed Minds' and 'TFVISUAL', mixing pencil outlines, music nodes, and street style aesthetics.",
    color: "#E40101",
    bg: "#1f1e1c",
    accent: "Concept Art",
    year: "2025",
    liveLink: "/images/graphics/sketch_notebook.jpg",
    codeLink: "",
    tags: ["Collage", "Mixed Media", "Illustration"],
    features: [
      "Collage layer combination style with paper textures.",
      "Scribbled annotations, sketch elements, and pencil illustrations.",
      "Cohesive urban streetwear lifestyle art direction.",
      "Sticker style cutout overlay graphics."
    ]
  },
  {
    id: "13",
    title: "Dami Shades Promo",
    category: "Graphic Design",
    description: "Product advertisement poster for Dami Shades, combining bold headline elements with clean luxury eyewear imagery.",
    color: "#fff",
    bg: "#2e2d2c",
    accent: "Ad Campaign",
    year: "2026",
    liveLink: "/images/graphics/dami_shades.jpg",
    codeLink: "",
    tags: ["Retouching", "Typography", "Ad Layout"],
    features: [
      "Luxury editorial advertising layouts.",
      "High-fidelity glass refraction and reflection retouching.",
      "Sophisticated black and primary red contrast font hierarchy.",
      "Social-first Instagram ad format design."
    ]
  },
  {
    id: "14",
    title: "Spoof Animation Valentine",
    category: "Graphic Design",
    description: "Custom promotional Valentine's greeting card design for Spoof Animation, featuring a stylized group card layout with clean visual branding.",
    color: "#E40101",
    bg: "#2d0e0e",
    accent: "Branded Card",
    year: "2026",
    liveLink: "/images/graphics/spoof_valentine.jpg",
    codeLink: "",
    tags: ["Branding", "Social Layout", "Spoof! Design"],
    features: [
      "Cohesive brand color matching (Primary Red & White theme).",
      "Stunning hand-drawn script logotype greeting typography.",
      "Custom vector character graphics framing the card header.",
      "Premium texture backdrop overlay for print readiness."
    ]
  }
];

// Reusable CSS Phone or Browser Simulator
function ScreenSimulator({ project }: { project: typeof projects[0] }) {
  const isMobile = project.category === "Mobile App";
  const isGraphic = project.category === "Graphic Design";

  if (isGraphic) {
    return (
      <div className="relative mx-auto w-full max-w-[280px] rounded-lg shadow-2xl overflow-hidden border border-white/10 bg-black/40 p-2">
        <img
          src={project.liveLink}
          alt={project.title}
          className="w-full h-auto object-cover max-h-[380px] rounded-md"
        />
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="relative mx-auto w-[250px] h-[500px] bg-[#000] border-[10px] border-[#1f1f1f] rounded-[36px] shadow-2xl overflow-hidden flex flex-col">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#1f1f1f] rounded-b-xl z-20" />
        
        {/* Status bar */}
        <div className="px-5 pt-3 pb-1 flex justify-between items-center text-[9px] text-white/40 z-10 font-mono">
          <span>9:41</span>
          <div className="flex items-center gap-1 font-sans">
            <span>5G</span>
            <div className="w-4 h-2 border border-white/20 rounded-sm p-0.5 flex items-center"><div className="w-1.5 h-full bg-white rounded-2xs" /></div>
          </div>
        </div>

        {/* Dynamic Simulated UI */}
        <div className="flex-1 p-4 flex flex-col justify-between" style={{ background: project.bg }}>
          {/* Header */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-[7px] uppercase tracking-widest text-[#E40101] font-bold">SECURE WORKSPACE</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            </div>
            <h4 className="font-display font-bold text-white text-base leading-tight mb-0.5">{project.title}</h4>
            <span className="text-[8px] text-white/30">{project.accent}</span>
          </div>

          {/* App Core Dashboard Widget */}
          <div className="space-y-2.5 flex-1 justify-center flex flex-col">
            <div className="bg-white/5 border border-white/10 rounded-xl p-2.5 text-center">
              <span className="text-[7px] text-white/30 uppercase tracking-wider block mb-0.5">Workforce Status</span>
              <span className="font-mono text-white text-xs font-bold block">08:42:15 hrs</span>
              <div className="mt-1.5 text-[8px] bg-[#E40101] text-white py-1 rounded-full font-bold">
                CLOCKED IN
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-2.5">
              <div className="flex justify-between items-center mb-1 text-[7px]">
                <span className="text-white/40 uppercase">Operational Analytics</span>
                <span className="text-[#E40101] font-bold">98.4%</span>
              </div>
              <div className="flex items-end gap-1 h-6 pt-1">
                <div className="bg-white/10 flex-1 h-2 rounded-t-sm" />
                <div className="bg-white/10 flex-1 h-4 rounded-t-sm" />
                <div className="bg-[#E40101] flex-1 h-5 rounded-t-sm" />
                <div className="bg-white/10 flex-1 h-3 rounded-t-sm" />
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-2 flex items-center justify-between text-[7px]">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center font-bold text-[7px] text-white">JD</div>
                <div className="text-left"><span className="text-white font-medium block">Active Task</span><span className="text-white/30 text-[6px]">Leave Approved</span></div>
              </div>
              <span className="px-1 py-0.2 rounded-full bg-green-500/10 text-green-500 text-[6px]">Active</span>
            </div>
          </div>

          {/* Nav */}
          <div className="border-t border-white/10 pt-2 flex justify-between text-[8px] text-white/30 font-medium">
            <span className="text-[#E40101]">App</span>
            <span>Logs</span>
            <span>Profile</span>
          </div>
        </div>
      </div>
    );
  }

  // Web Browser Simulator
  return (
    <div className="relative mx-auto w-full max-w-[420px] h-[260px] bg-[#000] border-[6px] border-[#1f1f1f] rounded-xl shadow-2xl overflow-hidden flex flex-col">
      {/* Header bar */}
      <div className="px-3 py-2 bg-[#121212] flex justify-between items-center text-[8px] text-white/40">
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E40101]" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>
        <div className="bg-black/50 px-4 py-0.5 rounded text-[7px] text-white/30 font-mono select-none">https://grandx.studio/work/{project.title.toLowerCase().replace(" ", "-")}</div>
        <div className="w-4" />
      </div>
      
      {/* Browser screen */}
      <div className="flex-1 p-5 flex flex-col justify-between relative" style={{ background: project.bg }}>
        <div className="absolute inset-0 grid-line opacity-20" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[7px] tracking-widest uppercase px-1.5 py-0.5 border border-white/10 text-white/40 font-mono">{project.accent}</span>
            <span className="text-[7px] text-white/20">{project.year}</span>
          </div>
          <h4 className="font-display font-bold text-white text-lg leading-tight mb-2">{project.title}</h4>
          <p className="text-[9px] text-white/40 leading-relaxed max-w-[280px]">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 flex justify-between items-center">
          <div className="flex gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[7px] text-white/30 tracking-wider font-mono">#{tag.toLowerCase()}</span>
            ))}
          </div>
          <span className="text-[7px] text-[#E40101] uppercase tracking-widest font-bold">Interactive Launch</span>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onCardClick,
}: {
  project: typeof projects[0];
  index: number;
  onCardClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = project.category === "Mobile App";
  const isGraphic = project.category === "Graphic Design";

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onClick={onCardClick}
      className="work-card flex-shrink-0 group cursor-pointer"
      style={{ width: "clamp(320px, 35vw, 520px)", height: "clamp(420px, 55vh, 680px)" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        style={{
          background: isGraphic
            ? `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.85) 100%), url(${project.liveLink})`
            : project.bg,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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
            className="font-display font-bold leading-none mb-4"
            style={{
              fontSize: "clamp(36px, 4vw, 56px)",
              color: "white",
            }}
          >
            {project.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-body text-[9px] tracking-wider uppercase px-2.5 py-1"
                style={{
                  border: `1px solid ${project.color}15`,
                  color: "rgba(255,255,255,0.4)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hover Actions */}
          <div className="mt-6 flex flex-row items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase px-4 py-2 transition-all duration-300"
              style={{
                border: `1px solid ${project.color}`,
                color: project.color === "#fff" ? "#000" : "#fff",
                background: project.color,
                fontWeight: 600,
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <span>{isMobile ? "App Store" : isGraphic ? "View Art" : "Live Site"}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase px-4 py-2 transition-all duration-300"
                style={{
                  border: `1px solid ${project.color}40`,
                  color: "#fff",
                  background: "rgba(255,255,255,0.05)",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <span>{isMobile ? "Play Store" : "Code"}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>

          <span className="font-body text-[10px] text-white/15 mt-4 block">{project.year}</span>
        </div>
      </div>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${project.color}05 0%, transparent 100%)`,
        }}
      />
      {/* Accent left border on hover */}
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
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  // Disable main body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  // Handle ESC key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

      {/* Category Filters */}
      <div className="px-5 sm:px-8 md:px-16 mb-12">
        <div className="flex flex-wrap gap-3">
          {["All", "Web Design & Dev", "Mobile App", "Graphic Design"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="font-body text-[10px] tracking-widest uppercase px-4 py-2 min-h-[38px] transition-all duration-300 border font-semibold"
              style={{
                borderColor: activeFilter === cat ? "#E40101" : "rgba(255,255,255,0.08)",
                color: activeFilter === cat ? "#fff" : "rgba(255,255,255,0.3)",
                background: activeFilter === cat ? "#E40101" : "transparent",
              }}
            >
              {cat === "Mobile App" ? "Mobile Apps" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal scrolling cards */}
      <div className="horizontal-scroll-container">
        <motion.div
          layout
          className="flex gap-4 sm:gap-6 px-5 sm:px-8 md:px-16 pb-4"
          style={{ width: "max-content" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onCardClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>

          {/* Graphic Design Empty State Placeholder */}
          <AnimatePresence>
            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-4 px-10 border border-white/5 bg-white/2 rounded-xl"
                style={{ width: "clamp(320px, 35vw, 520px)", height: "clamp(420px, 55vh, 680px)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5">
                    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-display font-bold text-sm text-white/40 text-center uppercase tracking-widest">
                  New designs coming soon
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* End CTA card */}
          {filteredProjects.length > 0 && (
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
          )}
        </motion.div>
      </div>

      {/* Case Study Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md overflow-y-auto py-10 px-4 flex justify-center items-start"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-[#0c0c0d] border border-white/10 rounded-2xl w-full max-w-5xl overflow-hidden relative flex flex-col md:flex-row shadow-2xl mt-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors z-30"
                onClick={() => setSelectedProject(null)}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Left Side - Simulator mockup */}
              <div className="w-full md:w-[40%] bg-black/45 border-r border-white/5 p-8 flex flex-col justify-center items-center gap-6 min-h-[300px]">
                <ScreenSimulator project={selectedProject} />
                
                {/* Store or Redirect Links */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase px-5 py-2.5 rounded transition-all duration-300"
                    style={{
                      border: `1px solid ${selectedProject.color}`,
                      color: selectedProject.color === "#fff" ? "#000" : "#fff",
                      background: selectedProject.color,
                      fontWeight: 600,
                    }}
                  >
                    <span>{selectedProject.category === "Mobile App" ? "App Store" : selectedProject.category === "Graphic Design" ? "View Art" : "Live Site"}</span>
                  </a>
                  {selectedProject.codeLink && (
                    <a
                      href={selectedProject.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-body text-[10px] tracking-widest uppercase px-5 py-2.5 rounded transition-all"
                      style={{
                        border: `1px solid ${selectedProject.color}40`,
                        color: "#fff",
                        background: "rgba(255,255,255,0.05)",
                      }}
                    >
                      <span>{selectedProject.category === "Mobile App" ? "Play Store" : "Code"}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Side - Project/Case Study details */}
              <div className="w-full md:w-[60%] p-8 md:p-12 overflow-y-auto max-h-[90vh]">
                <span className="text-[10px] font-mono tracking-widest text-[#E40101] uppercase font-bold block mb-2">
                  {selectedProject.accent} — {selectedProject.year}
                </span>
                <h2 className="font-display font-bold text-white text-3xl md:text-4xl leading-tight mb-4">
                  {selectedProject.title}
                </h2>
                <span className="inline-block font-body text-[9px] tracking-widest uppercase px-2 py-1 bg-white/5 border border-white/10 text-white/55 mb-6">
                  {selectedProject.category}
                </span>

                {/* Sub Description */}
                <p className="font-body text-white/60 text-sm leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                {/* Tech Stack tags */}
                <div className="mb-8">
                  <h4 className="text-white font-display text-xs tracking-wider uppercase mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[9px] text-[#E40101] border border-[#E40101]/20 px-3 py-1 rounded bg-[#E40101]/5 font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Standard features render (if present) */}
                {selectedProject.features && (
                  <div className="mb-8 border-t border-white/5 pt-8">
                    <h4 className="text-white font-display text-xs tracking-wider uppercase mb-4">Core Features</h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E40101] mt-2 flex-shrink-0" />
                          <span className="font-body text-white/60 text-xs leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Detailed QCloseHR Case Study details */}
                {selectedProject.caseStudy && (
                  <div className="space-y-8 border-t border-white/5 pt-8">
                    {/* Project Overview */}
                    <div>
                      <h4 className="text-white font-display text-xs tracking-wider uppercase mb-4">Project Overview</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedProject.caseStudy.projectOverview.map((item, i) => (
                          <div key={i} className="bg-white/5 border border-white/5 p-3 rounded">
                            <span className="text-[8px] font-mono text-white/30 uppercase block mb-0.5">{item.label}</span>
                            <span className="text-xs text-white/70 font-body font-semibold">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Problem */}
                    <div>
                      <h4 className="text-white font-display text-xs tracking-wider uppercase mb-3 text-red-500/90">The Challenge</h4>
                      <ul className="space-y-2">
                        {selectedProject.caseStudy.problem.map((prob, i) => (
                          <li key={i} className="font-body text-white/50 text-xs leading-relaxed">
                            {prob}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-white font-display text-xs tracking-wider uppercase mb-3 text-green-500/90">The Solution</h4>
                      <ul className="space-y-2">
                        {selectedProject.caseStudy.solution.map((sol, i) => (
                          <li key={i} className="font-body text-white/50 text-xs leading-relaxed">
                            {sol}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-white font-display text-xs tracking-wider uppercase mb-3">Role &amp; Responsibilities</h4>
                      <p className="font-body text-white/50 text-xs mb-3 italic">{selectedProject.caseStudy.myRoleIntro}</p>
                      <ul className="space-y-2">
                        {selectedProject.caseStudy.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-center gap-2 font-body text-white/50 text-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E40101] flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Architecture */}
                    <div>
                      <h4 className="text-white font-display text-xs tracking-wider uppercase mb-4">Technical Architecture</h4>
                      <div className="space-y-4">
                        {selectedProject.caseStudy.architecture.map((arch, i) => (
                          <div key={i} className="border-l border-[#E40101]/30 pl-4 py-1">
                            <span className="text-[10px] font-bold text-white block mb-1">{arch.title}</span>
                            <div className="flex flex-wrap gap-1.5">
                              {arch.items.map((item, j) => (
                                <span key={j} className="text-[9px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Challenges details */}
                    <div>
                      <h4 className="text-white font-display text-xs tracking-wider uppercase mb-4">Core Challenges Overcome</h4>
                      <div className="space-y-4">
                        {selectedProject.caseStudy.challenges.map((chal, i) => (
                          <div key={i} className="bg-white/5 border border-white/5 p-4 rounded">
                            <h5 className="text-white font-display text-xs font-semibold mb-1">{chal.title}</h5>
                            <p className="font-body text-white/50 text-xs leading-relaxed">{chal.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Business Impact */}
                    <div>
                      <h4 className="text-white font-display text-xs tracking-wider uppercase mb-3 text-[#E40101]">Business Impact</h4>
                      <ul className="space-y-2">
                        {selectedProject.caseStudy.impact.map((imp, i) => (
                          <li key={i} className="flex items-start gap-2.5 font-body text-white/60 text-xs">
                            <span className="text-[#E40101] font-bold">✓</span>
                            <span>{imp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
