"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2026",
    title: "AI Agent Olympics — Milan AI Week",
    description: "Building ShadowOS: autonomous multi-agent business system. Solo entry, international hackathon.",
    tech: ["Next.js", "Python", "FastAPI", "Gemini API"],
    type: "hackathon",
  },
  {
    year: "2026",
    title: "Full-Stack Apps Portfolio",
    description: "Shipped SplitPay, QuickInvoice, DevHub — production apps with auth, databases, REST APIs, dashboards.",
    tech: ["Next.js", "Prisma", "MongoDB", "JWT", "OAuth"],
    type: "project",
  },
  {
    year: "2025",
    title: "Security Infrastructure",
    description: "Built OAuth 2.0 Authorization Server (PKCE + RS256) and Zero-Trust API Gateway (RBAC + ABAC + rate limiting).",
    tech: ["TypeScript", "Node.js", "JWT", "OIDC"],
    type: "project",
  },
  {
    year: "2025",
    title: "Scaler x Meta Hackathon ($30K Pool)",
    description: "Built AI training environment for data cleaning agents. 3 difficulty tiers, multi-dimensional grading. Live on HuggingFace.",
    tech: ["Python", "FastAPI", "Gradio", "PyTorch"],
    type: "hackathon",
  },
  {
    year: "2024",
    title: "IEEE Xplore Publication",
    description: "Published research on Ball-tree spatial indexing for contact tracing. Sub-linear query time at scale.",
    tech: ["Python", "Spatial Indexing", "Algorithms"],
    type: "research",
  },
  {
    year: "2024",
    title: "ViT Activation Function Study",
    description: "Capstone: 30 experiments comparing activation functions across Vision Transformers. 93.68% CIFAR-10 accuracy.",
    tech: ["PyTorch", "ViT", "CaiT", "Swin"],
    type: "research",
  },
  {
    year: "2022",
    title: "Started B.Tech CSE at VIT Chennai",
    description: "Computer Science & Engineering. Focus on AI/ML and full-stack development.",
    tech: [],
    type: "education",
  },
];

const typeColors: Record<string, { bg: string; text: string; border: string; dot: string; neon: string }> = {
  hackathon: { bg: "bg-yellow-500/5", text: "text-yellow-400/70", border: "border-yellow-500/15", dot: "bg-yellow-400", neon: "#FACC15" },
  project: { bg: "bg-neon-lime/5", text: "text-neon-lime/70", border: "border-neon-lime/15", dot: "bg-neon-lime", neon: "#00FF00" },
  research: { bg: "bg-neon-cyan/5", text: "text-neon-cyan/70", border: "border-neon-cyan/15", dot: "bg-neon-cyan", neon: "#00FFFF" },
  education: { bg: "bg-neon-purple/5", text: "text-neon-purple/70", border: "border-neon-purple/15", dot: "bg-neon-purple", neon: "#BF00FF" },
};

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-neon-lime/10 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-lime/60 text-xs font-mono tracking-[0.3em] uppercase mb-4">
            {"// "}Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            What I&apos;ve been
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text text-glow-lime">building</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-neon-lime/30 via-neon-cyan/15 to-neon-purple/10" />

          {timeline.map((item, i) => {
            const colors = typeColors[item.type];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative flex items-start gap-6 mb-10 md:mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 top-2 z-10">
                  <div className="relative">
                    <div className={`w-3 h-3 rounded-full ${colors.dot}`} style={{ boxShadow: `0 0 8px ${colors.neon}40` }} />
                    <div className={`absolute inset-0 w-3 h-3 rounded-full ${colors.dot} opacity-40 animate-pulse-ring`} />
                  </div>
                </div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className={`glass rounded-lg p-5 transition-all duration-300 hover:bg-white/[0.03] group border border-transparent hover:${colors.border}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-mono text-gray-600 tracking-wider">{item.year}</span>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-mono font-medium tracking-wider uppercase ${colors.bg} ${colors.text} border ${colors.border}`}>
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-200 mb-2 group-hover:text-neon-lime/80 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3 font-light">
                      {item.description}
                    </p>
                    {item.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[9px] font-mono text-gray-600 bg-white/[0.02] border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
