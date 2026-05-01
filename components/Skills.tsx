"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "◆",
    color: "lime",
    skills: [
      { name: "TypeScript", level: 92 },
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML/CSS", level: 93 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend",
    icon: "▸",
    color: "cyan",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Python", level: 87 },
      { name: "FastAPI", level: 82 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 70 },
    ],
  },
  {
    title: "Databases",
    icon: "⬡",
    color: "purple",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 83 },
      { name: "Prisma ORM", level: 88 },
      { name: "Mongoose", level: 82 },
      { name: "JWT / OAuth 2.0", level: 90 },
      { name: "NextAuth.js", level: 85 },
    ],
  },
  {
    title: "DevOps",
    icon: "⚡",
    color: "lime",
    skills: [
      { name: "Git / GitHub", level: 93 },
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 90 },
      { name: "Linux", level: 80 },
      { name: "CI/CD", level: 78 },
      { name: "Redis", level: 72 },
    ],
  },
  {
    title: "AI / ML",
    icon: "◇",
    color: "cyan",
    skills: [
      { name: "PyTorch", level: 85 },
      { name: "Vision Transformers", level: 80 },
      { name: "Hugging Face", level: 78 },
      { name: "Reinforcement Learning", level: 72 },
      { name: "Gradio", level: 80 },
      { name: "LLM APIs", level: 88 },
    ],
  },
  {
    title: "Architecture",
    icon: "▣",
    color: "purple",
    skills: [
      { name: "Microservices", level: 78 },
      { name: "Rate Limiting", level: 85 },
      { name: "API Gateway Design", level: 82 },
      { name: "RBAC / ABAC", level: 80 },
      { name: "System Design", level: 78 },
      { name: "Agile / Scrum", level: 75 },
    ],
  },
];

const colorClasses: Record<string, { text: string; bg: string; border: string; bar: string }> = {
  lime: { text: "text-neon-lime/80", bg: "bg-neon-lime/5", border: "border-neon-lime/15", bar: "from-neon-lime/60 to-neon-lime/30" },
  cyan: { text: "text-neon-cyan/80", bg: "bg-neon-cyan/5", border: "border-neon-cyan/15", bar: "from-neon-cyan/60 to-neon-cyan/30" },
  purple: { text: "text-neon-purple/80", bg: "bg-neon-purple/5", border: "border-neon-purple/15", bar: "from-neon-purple/60 to-neon-purple/30" },
};

function SkillBar({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) {
  const colors = colorClasses[color];
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-gray-400 group-hover:text-white transition-colors font-mono text-xs tracking-wider">{name}</span>
        <span className={`text-[10px] font-mono ${colors.text}`}>{level}%</span>
      </div>
      <div className="h-1 bg-white/[0.03] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${colors.bar} relative`}
        >
          <div className="absolute inset-0 animate-shimmer" />
          {/* End pip */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/30" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-neon-purple/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-lime/60 text-xs font-mono tracking-[0.3em] uppercase mb-4">
            {"// "}Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Full-stack
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text text-glow-lime">toolkit</span>
          </h2>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none justify-start lg:justify-center">
          {skillCategories.map((cat, i) => {
            const colors = colorClasses[cat.color];
            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono transition-all whitespace-nowrap tracking-wider ${
                  activeTab === i
                    ? `${colors.bg} ${colors.text} border ${colors.border} shadow-[0_0_15px_rgba(0,255,0,0.03)]`
                    : "text-gray-600 hover:text-gray-400 glass border border-transparent"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active category */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-xl p-6 sm:p-8 md:p-10 max-w-2xl mx-auto gradient-border animate-gradient-border relative"
        >
          {/* Corner markers */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-neon-lime/10 rounded-tl" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-neon-lime/10 rounded-br" />

          <div className="space-y-4">
            {skillCategories[activeTab].skills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} color={skillCategories[activeTab].color} />
            ))}
          </div>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {skillCategories.map((cat, i) => {
            const colors = colorClasses[cat.color];
            return (
              <motion.div
                key={cat.title}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className={`group glass rounded-lg p-4 transition-all duration-300 border border-transparent hover:${colors.border}`}
                onClick={() => setActiveTab(i)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`${colors.text} text-sm`}>{cat.icon}</span>
                  <h3 className={`text-[10px] font-mono font-bold ${colors.text} uppercase tracking-[0.2em]`}>
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1">
                  {cat.skills.map((s) => (
                    <span key={s.name} className="text-[10px] text-gray-600 group-hover:text-gray-400 transition-colors font-mono">
                      {s.name}{cat.skills.indexOf(s) < cat.skills.length - 1 ? " ·" : ""}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
