"use client";

import { motion } from "framer-motion";

const layers = [
  {
    label: "Frontend",
    color: "lime",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    icon: "◆",
  },
  {
    label: "API Layer",
    color: "cyan",
    items: ["REST APIs", "Route Handlers", "Server Actions", "Middleware", "JWT Auth"],
    icon: "◇",
  },
  {
    label: "Backend",
    color: "purple",
    items: ["Node.js", "Express", "Python", "FastAPI", "WebSockets"],
    icon: "▸",
  },
  {
    label: "Data",
    color: "green",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose", "Redis"],
    icon: "⬡",
  },
  {
    label: "Infrastructure",
    color: "orange",
    items: ["Vercel", "Docker", "GitHub Actions", "CI/CD", "Linux"],
    icon: "⚡",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; glow: string; neon: string }> = {
  lime: { bg: "bg-neon-lime/5", border: "border-neon-lime/15", text: "text-neon-lime/80", glow: "shadow-[0_0_20px_rgba(0,255,0,0.05)]", neon: "#00FF00" },
  cyan: { bg: "bg-neon-cyan/5", border: "border-neon-cyan/15", text: "text-neon-cyan/80", glow: "shadow-[0_0_20px_rgba(0,255,255,0.05)]", neon: "#00FFFF" },
  purple: { bg: "bg-neon-purple/5", border: "border-neon-purple/15", text: "text-neon-purple/80", glow: "shadow-[0_0_20px_rgba(191,0,255,0.05)]", neon: "#BF00FF" },
  green: { bg: "bg-green-500/5", border: "border-green-500/15", text: "text-green-400/80", glow: "shadow-[0_0_20px_rgba(34,197,94,0.05)]", neon: "#22C55E" },
  orange: { bg: "bg-orange-500/5", border: "border-orange-500/15", text: "text-orange-400/80", glow: "shadow-[0_0_20px_rgba(249,115,22,0.05)]", neon: "#F97316" },
};

export default function ArchitectureDiagram() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-lime/60 text-xs font-mono tracking-[0.3em] uppercase mb-4">
            {"// "}Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            How I build
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text text-glow-lime">full-stack apps</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto font-light">
            Every layer of the stack, from pixel to production.
          </p>
        </motion.div>

        <div className="space-y-3 relative">
          {/* Vertical connection line */}
          <div className="absolute left-8 md:left-[72px] top-0 bottom-0 w-px bg-gradient-to-b from-neon-lime/20 via-neon-cyan/10 to-neon-purple/20 pointer-events-none" />

          {layers.map((layer, i) => {
            const colors = colorMap[layer.color];
            return (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass rounded-xl p-5 border ${colors.border} hover:${colors.glow} transition-all duration-300 group relative`}
              >
                {/* Data flow indicator */}
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: colors.neon, boxShadow: `0 0 8px ${colors.neon}40` }} />

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3 sm:w-44 shrink-0">
                    <span className={`text-lg ${colors.text}`}>{layer.icon}</span>
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-[0.2em] ${colors.text} font-mono`}>
                        {layer.label}
                      </span>
                      <div className="text-[10px] text-gray-700 font-mono">Layer {i + 1}</div>
                    </div>
                  </div>

                  {/* Connection line */}
                  <div className="hidden sm:block w-8 h-px bg-gradient-to-r from-white/10 to-transparent" />

                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className={`px-3 py-1.5 rounded-md text-xs font-mono ${colors.bg} ${colors.text} border ${colors.border} transition-all group-hover:scale-[1.02] hover:shadow-[0_0_10px_${colors.neon}10]`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Data flow label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <span className="text-[10px] text-gray-700 font-mono tracking-widest uppercase">↑ Data Flow ↓</span>
        </motion.div>
      </div>
    </section>
  );
}
