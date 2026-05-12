"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      {/* Decorative elements */}
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
            {"// "}About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            I architect systems
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text text-glow-lime">end to end</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          {/* Card glow */}
          <div className="absolute -inset-2 bg-gradient-to-br from-neon-lime/[0.02] to-neon-cyan/[0.01] rounded-3xl blur-xl" />

          <div className="relative glass rounded-2xl p-6 sm:p-8 md:p-12 animate-gradient-border gradient-border">
            {/* Corner markers */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-neon-lime/20 rounded-tl" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-neon-cyan/20 rounded-tr" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-neon-purple/20 rounded-bl" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-neon-lime/20 rounded-br" />

            <div className="space-y-6 text-gray-400 leading-relaxed text-base sm:text-lg">
              <p>
                Full-stack engineer.{" "}
                <span className="text-neon-lime/80 font-medium">
                  I design and ship production web systems
                </span>{" "}
                from schema design through deployment &mdash; not just CRUD
                wrappers, but auth servers, API gateways, and real-time data
                pipelines that hold up in prod.
              </p>
              <p>
                Stack discipline:{" "}
                <span className="text-neon-cyan/80 font-medium">
                  TypeScript on Next.js for the front, Node + Express or FastAPI
                  for the back, PostgreSQL + Redis for state, Prisma for the
                  schema layer.
                </span>{" "}
                Auth done right &mdash; JWT, OAuth 2.0, RBAC. Rate-limited APIs
                behind a gateway. Containerized deploys to Vercel + Docker.
              </p>
              <p>
                AI-native by default. Published research in{" "}
                <span className="text-neon-purple/80 font-medium">
                  IEEE Xplore
                </span>{" "}
                on Vision Transformer activation functions and adversarial
                defense in multi-agent reinforcement learning. Built a data
                cleaning AI environment for{" "}
                <span className="text-neon-lime/80 font-medium">
                  Scaler &times; Meta&apos;s $30K AI Olympics
                </span>
                . I use PyTorch + Hugging Face + LLM APIs as default tooling,
                not buzzwords.
              </p>
              <p>
                I work fast, write clean code, and care about the parts most
                portfolios skip: data integrity, edge cases, deploy reliability.
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/5">
              {[
                { label: "Discipline", value: "Full-Stack + AI", color: "text-neon-lime" },
                { label: "Stack", value: "TS / Next / Node", color: "text-neon-cyan" },
                { label: "Research", value: "IEEE Published", color: "text-neon-purple" },
                { label: "Based In", value: "Chennai, India", color: "text-neon-lime" },
              ].map((item) => (
                <div key={item.label} className="text-center group">
                  <div className={`text-sm font-semibold ${item.color}/80 font-mono`}>
                    {item.value}
                  </div>
                  <div className="text-[10px] text-gray-600 mt-1 font-mono tracking-wider uppercase">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Credential badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {["IEEE Published", "Scaler × Meta", "12+ Production Apps", "Auth Server From Scratch", "VIT Chennai"].map((badge) => (
                <span key={badge} className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider text-gray-500 bg-white/[0.02] border border-white/5 hover:border-neon-lime/10 hover:text-neon-lime/50 transition-all">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
