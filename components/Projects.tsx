"use client";

import { motion } from "framer-motion";

const projects = [
  {
    tag: "Full-Stack",
    title: "SplitPay — Expense Splitting App",
    description:
      "Full-stack expense splitting app with group management, smart balance calculation, and settlement tracking. NextAuth credentials auth, Prisma ORM, REST API with full CRUD.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "REST API"],
    github: "https://github.com/Jesseman-418/splitpay",
    featured: true,
    highlight: true,
    color: "lime",
  },
  {
    tag: "Full-Stack",
    title: "QuickInvoice — Invoice & Payment Tracker",
    description:
      "Invoice generator with client management, line-item calculations, payment status tracking, and revenue dashboard. Custom JWT auth with httpOnly cookies, Mongoose ODM.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "JWT", "REST API"],
    github: "https://github.com/Jesseman-418/quickinvoice",
    featured: true,
    highlight: true,
    color: "cyan",
  },
  {
    tag: "Full-Stack",
    title: "DevHub — API Key Management Platform",
    description:
      "Developer platform with API key generation, per-key rate limiting (sliding window), usage analytics dashboard, and sample API endpoints. Keys stored hashed, shown once on creation.",
    tech: ["Next.js", "TypeScript", "Prisma", "SQLite", "NextAuth", "Rate Limiting"],
    github: "https://github.com/Jesseman-418/devhub",
    featured: true,
    highlight: true,
    color: "purple",
  },
  {
    tag: "Security",
    title: "OAuth2 Authorization Server",
    description:
      "Full OAuth 2.0 / OpenID Connect authorization server. Authorization Code + PKCE flow, JWT/RS256 tokens, RBAC, automatic token rotation.",
    tech: ["TypeScript", "Node.js", "JWT", "OIDC", "PKCE"],
    github: "https://github.com/Jesseman-418/oauth2-authorization-server",
    featured: true,
    color: "lime",
  },
  {
    tag: "Security",
    title: "Zero-Trust API Gateway",
    description:
      "Production-grade API gateway with JWT/JWKS auth, RBAC + ABAC policy engine, per-identity rate limiting, and tamper-proof audit logging.",
    tech: ["TypeScript", "Node.js", "JWT", "RBAC", "ABAC"],
    github: "https://github.com/Jesseman-418/zero-trust-api-gateway",
    featured: true,
    color: "cyan",
  },
  {
    tag: "Hackathon — Milan AI Week",
    title: "ShadowOS",
    description:
      "Autonomous multi-agent business system for solo operators. Runs outreach, content creation, and ops with coordinated AI agents. Built for AI Agent Olympics at Milan AI Week 2026.",
    tech: ["Next.js", "Python", "FastAPI", "Gemini API", "Multi-Agent"],
    github: "https://github.com/Jesseman-418/ShadowOS",
    featured: true,
    status: "building",
    color: "purple",
  },
  {
    tag: "Hackathon — Scaler x Meta",
    title: "Data Cleaning AI Environment",
    description:
      "AI environment for training agents to clean messy tabular data. Built for the Scaler x Meta PyTorch OpenEnv Hackathon ($30K prize pool). 3 difficulty tiers with multi-dimensional grading.",
    tech: ["Python", "FastAPI", "Gradio", "PyTorch"],
    github: "https://github.com/Jesseman-418/data-cleaning-env",
    live: "https://jesse1811-data-cleaning-env.hf.space",
    featured: true,
    color: "lime",
  },
  {
    tag: "Research — IEEE Xplore",
    title: "Contact Tracing with Ball-tree",
    description:
      "Spatial indexing algorithm for contact tracing using Ball-tree data structures. Published in IEEE Xplore. Sub-linear query time on 10K+ data points.",
    tech: ["Python", "Ball-tree", "Spatial Indexing", "IEEE"],
    github: "https://github.com/Jesseman-418/Contact-Tracing-using-Ball-tree-Algorithm",
    featured: true,
    color: "cyan",
  },
  {
    tag: "Research — Capstone",
    title: "ViT Activation Function Study",
    description:
      "Compared GELU, ReLU, SiLU, Mish across ViT, CaiT, and Swin Transformers. 30 experiments, 93.68% CIFAR-10 accuracy. CaiT most stable, Tanh catastrophic on Swin.",
    tech: ["Python", "PyTorch", "Vision Transformers", "CIFAR-10"],
    github: "https://github.com/Jesseman-418/vit-activation-functions-capstone",
    color: "purple",
  },
  {
    tag: "Full-Stack",
    title: "TaskFlow — Kanban Board",
    description:
      "Full-stack Kanban board with drag-and-drop. Next.js 14, Prisma ORM, SQLite. Dark theme with smooth interactions.",
    tech: ["TypeScript", "Next.js", "Prisma", "SQLite"],
    github: "https://github.com/Jesseman-418/taskflow",
    color: "lime",
  },
  {
    tag: "Full-Stack",
    title: "Pollchain — Blockchain Voting",
    description:
      "Decentralized voting app on blockchain. MetaMask wallet integration, poll creation, live results, dark glassmorphism UI.",
    tech: ["TypeScript", "Blockchain", "MetaMask", "Next.js"],
    github: "https://github.com/Jesseman-418/Pollchain-frontend",
    color: "cyan",
  },
  {
    tag: "ML Research",
    title: "Adversarial Attack Defense (MARL)",
    description:
      "Multi-agent reinforcement learning defense against adversarial attacks. PGD and FGSM attack methods with defense mechanisms on MNIST.",
    tech: ["Python", "PyTorch", "MARL", "Adversarial ML"],
    github: "https://github.com/Jesseman-418/Adversarial-Attack-defense-using-MARL-approach",
    color: "purple",
  },
];

const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  lime: { bg: "bg-neon-lime/5", text: "text-neon-lime/70", border: "border-neon-lime/15" },
  cyan: { bg: "bg-neon-cyan/5", text: "text-neon-cyan/70", border: "border-neon-cyan/15" },
  purple: { bg: "bg-neon-purple/5", text: "text-neon-purple/70", border: "border-neon-purple/15" },
};

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      {/* Section accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-neon-cyan/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-neon-lime/60 text-xs font-mono tracking-[0.3em] uppercase mb-4">
            {"// "}Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Full-stack apps I&apos;ve
          </h2>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="gradient-text text-glow-lime">built &amp; shipped</span>
          </h2>
          <p className="text-gray-500 text-base font-light">
            Production apps with auth, databases, APIs, and polished UIs.
            Plus research, hackathons, and security tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => {
            const colors = tagColors[project.color || "lime"];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group glass rounded-xl p-6 transition-all duration-300 flex flex-col relative overflow-hidden border ${colors.border} hover:shadow-[0_0_30px_rgba(0,255,0,0.03)]`}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-lime/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px ${colors.bg}`} />

                {/* Corner markers */}
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/5 rounded-tr opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/5 rounded-bl opacity-0 group-hover:opacity-100 transition-opacity" />

                {project.highlight && (
                  <div className={`absolute top-3 right-3 px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider ${colors.bg} ${colors.text} border ${colors.border}`}>
                    New
                  </div>
                )}

                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider ${colors.bg} ${colors.text} border ${colors.border}`}>
                      {project.tag}
                    </span>
                    {project.status === "building" && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-yellow-500/5 text-yellow-400/70 border border-yellow-500/15 animate-pulse tracking-wider">
                        In Dev
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-semibold text-gray-200 mb-3 group-hover:text-neon-lime/80 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-grow font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono text-gray-500 bg-white/[0.02] border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-neon-lime transition-colors tracking-wider"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-neon-cyan transition-colors tracking-wider"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Jesseman-418"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-neon-lime transition-colors tracking-wider group"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View all on GitHub
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
