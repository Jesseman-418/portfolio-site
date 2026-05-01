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
            Full-stack engineer who
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="gradient-text text-glow-lime">ships end-to-end</span>
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
                Final-year B.Tech Computer Science student at VIT Chennai
                who builds{" "}
                <span className="text-neon-lime/80 font-medium">
                  production web applications from database to deployment
                </span>
                . Stack: TypeScript, Next.js, Node.js, SQL + NoSQL.
              </p>
              <p>
                Built{" "}
                <span className="text-neon-cyan/80 font-medium">
                  full-stack apps with auth systems, REST APIs, payment tracking,
                  and real-time dashboards
                </span>
                . JWT auth from scratch, OAuth 2.0 servers, API gateways
                with rate limiting, Prisma + Mongoose schemas.
              </p>
              <p>
                Published research in{" "}
                <span className="text-neon-purple/80 font-medium">IEEE Xplore</span>.
                Built AI environments for{" "}
                <span className="text-neon-lime/80 font-medium">
                  Meta &amp; Scaler ($30K prize pool)
                </span>.
                PyTorch for ML research. I operate fast and ship working software.
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/5">
              {[
                { label: "University", value: "VIT Chennai", color: "text-neon-lime" },
                { label: "Degree", value: "B.Tech CSE", color: "text-neon-cyan" },
                { label: "Focus", value: "Full-Stack + AI", color: "text-neon-purple" },
                { label: "Location", value: "India", color: "text-neon-lime" },
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
              {["IEEE Published", "VIT Chennai", "$30K Hackathon", "12+ Projects", "Full-Stack"].map((badge) => (
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
