"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: "◆",
    color: "lime",
    primary: ["TypeScript", "React", "Next.js (App Router)"],
    secondary: ["Tailwind CSS", "Framer Motion", "Radix / Shadcn"],
  },
  {
    title: "Backend",
    icon: "▸",
    color: "cyan",
    primary: ["Node.js", "Express", "Python / FastAPI"],
    secondary: ["REST", "GraphQL", "WebSockets", "Webhooks"],
  },
  {
    title: "Databases",
    icon: "⬡",
    color: "purple",
    primary: ["PostgreSQL", "MongoDB", "Redis"],
    secondary: ["Prisma ORM", "Mongoose", "Schema design", "Indexing"],
  },
  {
    title: "Auth + Security",
    icon: "⚡",
    color: "lime",
    primary: ["OAuth 2.0", "JWT", "NextAuth.js"],
    secondary: ["RBAC", "ABAC", "Rate limiting", "API gateway design"],
  },
  {
    title: "AI / ML",
    icon: "◇",
    color: "cyan",
    primary: ["PyTorch", "LLM APIs", "Hugging Face"],
    secondary: ["Vision Transformers", "Multi-agent RL", "Gradio", "LangChain"],
  },
  {
    title: "DevOps + Infra",
    icon: "▣",
    color: "purple",
    primary: ["Docker", "Vercel", "Git / GitHub Actions"],
    secondary: ["Linux", "CI/CD", "Microservices", "Observability"],
  },
];

const colorClasses: Record<string, { text: string; bg: string; border: string }> = {
  lime: { text: "text-neon-lime/80", bg: "bg-neon-lime/5", border: "border-neon-lime/15" },
  cyan: { text: "text-neon-cyan/80", bg: "bg-neon-cyan/5", border: "border-neon-cyan/15" },
  purple: { text: "text-neon-purple/80", bg: "bg-neon-purple/5", border: "border-neon-purple/15" },
};

export default function Skills() {
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
            {"// "}Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Tools I reach for
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text text-glow-lime">when shipping</span>
          </h2>
          <p className="mt-6 text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            No skill bars. No percentages. The list of what I&apos;ve put into
            production &mdash; with what I lean on daily versus what I&apos;ve
            shipped at least once.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const colors = colorClasses[cat.color];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className={`group glass rounded-xl p-6 transition-all duration-300 border border-transparent hover:${colors.border} relative overflow-hidden`}
              >
                {/* Corner marker */}
                <div className={`absolute top-2 right-2 w-3 h-3 border-t border-r ${colors.border} rounded-tr opacity-50`} />

                <div className="flex items-center gap-2.5 mb-4">
                  <span className={`${colors.text} text-base`}>{cat.icon}</span>
                  <h3 className={`text-xs font-mono font-bold ${colors.text} uppercase tracking-[0.2em]`}>
                    {cat.title}
                  </h3>
                </div>

                {/* Primary (daily-driver) */}
                <div className="mb-4">
                  <p className="text-[9px] font-mono uppercase tracking-widest text-gray-700 mb-2">
                    {"// "}Daily
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.primary.map((s) => (
                      <span
                        key={s}
                        className={`px-2.5 py-1 text-xs font-mono rounded-md ${colors.bg} ${colors.text} border ${colors.border}`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Secondary (familiar) */}
                <div>
                  <p className="text-[9px] font-mono uppercase tracking-widest text-gray-700 mb-2">
                    {"// "}Shipped
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.secondary.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 text-xs font-mono rounded-md text-gray-500 border border-white/5 group-hover:text-gray-400 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
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
