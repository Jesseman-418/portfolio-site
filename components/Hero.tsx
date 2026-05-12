"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const codeLines = [
  { text: "const", color: "text-neon-purple" },
  { text: " jesseman", color: "text-neon-cyan" },
  { text: " = ", color: "text-gray-500" },
  { text: "new", color: "text-neon-purple" },
  { text: " Engineer", color: "text-neon-lime" },
  { text: "({", color: "text-gray-500" },
  { text: "\n  stack", color: "text-neon-cyan" },
  { text: ": ", color: "text-gray-500" },
  { text: "['Next.js', 'TypeScript', 'Node']", color: "text-neon-lime/80" },
  { text: ",", color: "text-gray-500" },
  { text: "\n  database", color: "text-neon-cyan" },
  { text: ": ", color: "text-gray-500" },
  { text: "['PostgreSQL', 'MongoDB', 'Redis']", color: "text-neon-lime/80" },
  { text: ",", color: "text-gray-500" },
  { text: "\n  ai", color: "text-neon-cyan" },
  { text: ": ", color: "text-gray-500" },
  { text: "['PyTorch', 'ViT', 'LLM Agents']", color: "text-neon-lime/80" },
  { text: ",", color: "text-gray-500" },
  { text: "\n  security", color: "text-neon-cyan" },
  { text: ": ", color: "text-gray-500" },
  { text: "['OAuth2', 'JWT', 'RBAC']", color: "text-neon-lime/80" },
  { text: ",", color: "text-gray-500" },
  { text: "\n  shipping", color: "text-neon-cyan" },
  { text: ": ", color: "text-gray-500" },
  { text: "true", color: "text-neon-lime" },
  { text: ",", color: "text-gray-500" },
  { text: "\n});", color: "text-gray-500" },
];

function TypedCode() {
  const [visibleChars, setVisibleChars] = useState(0);
  const fullText = codeLines.map((l) => l.text).join("");

  useEffect(() => {
    if (visibleChars < fullText.length) {
      const timeout = setTimeout(() => setVisibleChars((v) => v + 1), 25);
      return () => clearTimeout(timeout);
    }
  }, [visibleChars, fullText.length]);

  let charCount = 0;
  return (
    <pre className="code-block text-sm leading-relaxed font-mono">
      {codeLines.map((line, i) => {
        const start = charCount;
        charCount += line.text.length;
        const visible = Math.min(line.text.length, Math.max(0, visibleChars - start));
        return (
          <span key={i} className={line.color}>
            {line.text.slice(0, visible)}
          </span>
        );
      })}
      <span className="animate-blink text-neon-lime">█</span>
    </pre>
  );
}

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const num = parseInt(value);
  const isNum = !isNaN(num);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isNum || !started) return;
    const duration = 1500;
    const steps = 30;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [num, isNum, started]);

  return (
    <motion.div
      className="group text-center relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onViewportEnter={() => setStarted(true)}
    >
      <div className="text-3xl font-bold gradient-text transition-all font-mono">
        {isNum ? count : value}
        {isNum && value.includes("+") ? "+" : ""}
      </div>
      <div className="text-[10px] text-gray-600 mt-1 uppercase tracking-[0.25em] font-mono">{label}</div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-40 bg-gradient-to-b from-transparent via-neon-lime/[0.015] to-transparent animate-scan" />
      </div>

      {/* Section-specific orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-lime/[0.06] rounded-full blur-[128px] pointer-events-none animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon-cyan/[0.04] rounded-full blur-[100px] pointer-events-none animate-float-delayed" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-neon-purple/[0.04] rounded-full blur-[80px] pointer-events-none animate-float" />

      {/* Decorative circuit lines */}
      <div className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-neon-lime/10 to-transparent pointer-events-none" />
      <div className="absolute top-20 left-10 w-20 h-px bg-gradient-to-r from-neon-lime/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-px h-40 bg-gradient-to-t from-neon-cyan/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-20 h-px bg-gradient-to-l from-neon-cyan/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-neon-lime/80 mb-8 border border-neon-lime/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-lime opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-lime" />
              </span>
              <span className="tracking-widest uppercase">Engineering in production</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-2"
            >
              <span className="gradient-text">Jesseman</span>{" "}
              <span className="text-gray-200">Devamirtham</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-8"
            >
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.1]">
                <span className="gradient-text-alt">
                  Full-stack engineer
                </span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-500 font-light mt-3">
                Database to deployment. AI-native.
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-gray-500 max-w-xl mb-10 leading-relaxed font-light"
            >
              I architect production web systems &mdash; auth servers, API
              gateways, payment flows, real-time dashboards. Stack: TypeScript,
              Next.js, Node, PostgreSQL, Redis. Research published in IEEE
              Xplore on Vision Transformers and adversarial defense.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href="#projects"
                className="group relative w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-xl bg-neon-lime/10 hover:bg-neon-lime/20 text-neon-lime font-semibold text-lg transition-all border border-neon-lime/20 hover:shadow-[0_0_30px_rgba(0,255,0,0.15)] overflow-hidden flex items-center justify-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-neon-lime/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Selected Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
              <a
                href="https://github.com/Jesseman-418"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-xl glass text-gray-400 hover:text-neon-cyan font-medium text-lg transition-all hover:border-neon-cyan/20 gradient-border group flex items-center justify-center"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2c-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39s1.98.13 2.9.39c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.7.41.36.78 1.05.78 2.12v3.14c0 .31.21.66.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
                  </svg>
                  GitHub
                </span>
              </a>
            </motion.div>

            <p className="mt-8 text-xs text-gray-600 font-mono tracking-wider">
              Currently: B.Tech Computer Science @ VIT Chennai &middot; Final year
            </p>
          </div>

          {/* Right - Code Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Terminal glow */}
              <div className="absolute -inset-4 bg-neon-lime/[0.02] rounded-3xl blur-xl" />

              <div className="relative glass rounded-2xl overflow-hidden box-glow animate-gradient-border gradient-border">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.01]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70 hover:bg-red-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70 hover:bg-yellow-500 transition-colors" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70 hover:bg-green-500 transition-colors" />
                  </div>
                  <span className="text-[10px] text-gray-600 ml-2 font-mono tracking-wider">~/jesseman/portfolio</span>
                  <div className="ml-auto flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-lime/50" />
                    <span className="text-[10px] text-gray-700 font-mono">node v22</span>
                  </div>
                </div>
                {/* Terminal body */}
                <div className="p-6 bg-dark-950/50 relative">
                  {/* Line numbers gutter */}
                  <div className="absolute left-2 top-6 flex flex-col gap-[0.375rem] text-[10px] text-gray-800 font-mono select-none">
                    {[1,2,3,4,5,6,7,8].map(n => <span key={n}>{n}</span>)}
                  </div>
                  <div className="ml-6">
                    <div className="text-[10px] text-gray-600 mb-3 font-mono flex items-center gap-2">
                      <span className="text-neon-lime/60">❯</span> cat engineer.ts
                    </div>
                    <TypedCode />
                  </div>
                </div>
                {/* Terminal footer */}
                <div className="px-4 py-2 border-t border-white/5 bg-white/[0.005] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-neon-lime/40 font-mono">● main</span>
                    <span className="text-[10px] text-gray-700 font-mono">TypeScript</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-gray-700 font-mono">UTF-8</span>
                    <span className="text-[10px] text-gray-700 font-mono">LF</span>
                    <span className="text-[10px] text-gray-700 font-mono">Spaces: 2</span>
                  </div>
                </div>
              </div>

              {/* Floating badges around terminal */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 px-3 py-1.5 rounded-lg bg-dark-800/80 border border-neon-cyan/20 text-[10px] font-mono text-neon-cyan/70 backdrop-blur"
              >
                IEEE Published
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 bottom-16 px-3 py-1.5 rounded-lg bg-dark-800/80 border border-neon-purple/20 text-[10px] font-mono text-neon-purple/70 backdrop-blur"
              >
                Scaler × Meta finalist
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-2 bottom-4 px-3 py-1.5 rounded-lg bg-dark-800/80 border border-neon-lime/20 text-[10px] font-mono text-neon-lime/70 backdrop-blur"
              >
                Shipping production
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto lg:mx-0"
        >
          <AnimatedCounter value="12+" label="Production Apps" />
          <AnimatedCounter value="5" label="Full-Stack Systems" />
          <AnimatedCounter value="IEEE" label="Published Research" />
          <AnimatedCounter value="$30K" label="Hackathon Pool" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-700 font-mono tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-neon-lime/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-neon-lime/50 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
