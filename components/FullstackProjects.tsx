"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "NexusFlow AI",
    type: "SaaS Platform",
    description:
      "AI-powered workflow automation platform with smart integrations, real-time analytics, and team collaboration. Dark glassmorphism design with animated gradient mesh backgrounds.",
    tech: ["Next.js 14", "Tailwind CSS", "Framer Motion", "TypeScript"],
    color: "from-violet-500 to-cyan-400",
    glowColor: "rgba(139, 92, 246, 0.3)",
    borderColor: "border-violet-500/20",
    textColor: "text-violet-400",
    bgAccent: "bg-violet-500/10",
    live: "https://nexusflow-ai.vercel.app",
    github: "https://github.com/Jesseman-418/nexusflow-ai",
  },
  {
    name: "Solara Studio",
    type: "Creative Agency",
    description:
      "Premium design and branding agency website with luxury editorial aesthetic. Warm amber accents, serif typography, infinite marquee strips, and curated portfolio showcase.",
    tech: ["Next.js 14", "Tailwind CSS", "Framer Motion", "TypeScript"],
    color: "from-amber-500 to-yellow-400",
    glowColor: "rgba(245, 158, 11, 0.3)",
    borderColor: "border-amber-500/20",
    textColor: "text-amber-400",
    bgAccent: "bg-amber-500/10",
    live: "https://solara-studio-rust.vercel.app",
    github: "https://github.com/Jesseman-418/solara-studio",
  },
  {
    name: "VitalEdge Fitness",
    type: "Coaching Platform",
    description:
      "Online fitness coaching platform with bold dark theme and crimson/blue dual accents. Features program cards, transformation stats, vertical timeline, and energetic typography.",
    tech: ["Next.js 14", "Tailwind CSS", "Framer Motion", "TypeScript"],
    color: "from-red-500 to-blue-500",
    glowColor: "rgba(220, 38, 38, 0.3)",
    borderColor: "border-red-500/20",
    textColor: "text-red-400",
    bgAccent: "bg-red-500/10",
    live: "https://vitaledge-fitness.vercel.app",
    github: "https://github.com/Jesseman-418/vitaledge-fitness",
  },
  {
    name: "Artisan Eats",
    type: "Restaurant",
    description:
      "Farm-to-table fine dining restaurant website with warm minimal design. Earth tones, elegant serif typography, interactive menu, reservation system, and private events showcase.",
    tech: ["Next.js 14", "Tailwind CSS", "Framer Motion", "TypeScript"],
    color: "from-orange-400 to-amber-300",
    glowColor: "rgba(194, 125, 56, 0.3)",
    borderColor: "border-orange-500/20",
    textColor: "text-orange-400",
    bgAccent: "bg-orange-500/10",
    live: "https://artisan-eats.vercel.app",
    github: "https://github.com/Jesseman-418/artisan-eats",
  },
];

export default function FullstackProjects() {
  return (
    <section id="fullstack" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      {/* Section accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-neon-cyan/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/5 border border-neon-cyan/10 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-neon-cyan/70 text-xs font-mono tracking-widest uppercase">
              Client Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text-alt">Fullstack Projects</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-mono text-sm">
            Production websites built for real businesses. Each project features
            modern design patterns, responsive layouts, and optimized
            performance.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative glass rounded-xl overflow-hidden border ${project.borderColor} hover:shadow-[0_0_40px_${project.glowColor}] transition-all duration-500`}
            >
              {/* Gradient top bar */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${project.color}`}
              />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-neon-lime transition-colors">
                      {project.name}
                    </h3>
                    <span
                      className={`text-xs font-mono ${project.textColor} tracking-wider uppercase`}
                    >
                      {project.type}
                    </span>
                  </div>
                  <div
                    className={`px-2 py-1 rounded text-[10px] font-mono ${project.bgAccent} ${project.textColor} border ${project.borderColor}`}
                  >
                    LIVE
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-1 rounded bg-white/5 text-gray-500 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg ${project.bgAccent} ${project.textColor} border ${project.borderColor} hover:shadow-[0_0_20px_${project.glowColor}] transition-all`}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono px-4 py-2 rounded-lg bg-white/5 text-gray-400 border border-white/10 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 text-xs font-mono">
            <span className="text-neon-lime/40">//</span> All projects deployed
            on Vercel with CI/CD from GitHub
          </p>
        </motion.div>
      </div>
    </section>
  );
}
