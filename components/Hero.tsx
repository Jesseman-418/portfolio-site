"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const codeLines = [
  { text: "const", color: "text-neon-purple" },
  { text: " jesse", color: "text-neon-cyan" },
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
  { text: "['PyTorch', 'ViT', 'Agents']", color: "text-neon-lime/80" },
  { text: ",", color: "text-gray-500" },
  { text: "\n  security", color: "text-neon-cyan" },
  { text: ": ", color: "text-gray-500" },
  { text: "['OAuth2', 'JWT', 'RBAC']", color: "text-neon-lime/80" },
  { text: ",", color: "text-gray-500" },
  { text: "\n  status", color: "text-neon-cyan" },
  { text: ": ", color: "text-gray-500" },
  { text: "'building'", color: "text-neon-lime" },
  { text: " ", color: "text-gray-500" },
  { text: "// always", color: "text-gray-600" },
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
              <span className="tracking-widest uppercase">Open to opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-2"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Jesse</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-6"
            >
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                <span className="gradient-text">
                  Full-Stack
                </span>
              </h2>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                <span className="gradient-text-alt">
                  Engineer
                </span>
              </h2>
            </motion.div>

            {/* Handwritten note */}
            <motion.div
              initial={{ opacity: 0, rotate: -3 }}
              animate={{ opacity: 1, rotate: -2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="handwritten text-xl sm:text-2xl text-neon-lime/40">
                I build things that work ^
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-gray-500 max-w-xl mb-10 leading-relaxed font-light"
            >
              Production web apps end-to-end. Database design → REST APIs →
              responsive React UIs → deployment. Plus AI/ML research published in IEEE.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
            >
              <a
                href="https://www.linkedin.com/in/jesse-man-devamirtham/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-xl bg-neon-lime/10 hover:bg-neon-lime/20 text-neon-lime font-semibold text-lg transition-all border border-neon-lime/20 hover:shadow-[0_0_30px_rgba(0,255,0,0.15)] overflow-hidden flex items-center justify-center"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-neon-lime/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  Hire Me
                </span>
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-xl glass text-gray-400 hover:text-neon-cyan font-medium text-lg transition-all hover:border-neon-cyan/20 gradient-border group flex items-center justify-center"
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </motion.div>
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
                  <span className="text-[10px] text-gray-600 ml-2 font-mono tracking-wider">~/jesse/portfolio</span>
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
                $30K Hackathon
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-2 bottom-4 px-3 py-1.5 rounded-lg bg-dark-800/80 border border-neon-lime/20 text-[10px] font-mono text-neon-lime/70 backdrop-blur"
              >
                12+ Projects
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
          <AnimatedCounter value="12+" label="Projects Shipped" />
          <AnimatedCounter value="5+" label="Full-Stack Apps" />
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
