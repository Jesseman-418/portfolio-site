"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-neon-lime/10 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
        >
          {/* Background orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-neon-lime/[0.04] rounded-full blur-[120px] pointer-events-none animate-float" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-neon-cyan/[0.04] rounded-full blur-[100px] pointer-events-none animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-neon-purple/[0.03] rounded-full blur-[80px] pointer-events-none animate-float-slow" />

          <div className="relative glass rounded-2xl p-6 sm:p-12 md:p-16 text-center animate-gradient-border gradient-border">
            {/* Corner markers */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-neon-lime/15 rounded-tl" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-neon-cyan/15 rounded-tr" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-neon-purple/15 rounded-bl" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-neon-lime/15 rounded-br" />

            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 mx-auto mb-8 rounded-xl bg-neon-lime/5 border border-neon-lime/15 flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-neon-lime/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
              Let&apos;s build
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text text-glow-lime">something together</span>
            </h2>

            {/* Handwritten note */}
            <p className="handwritten text-xl text-neon-lime/30 mb-6">
              seriously, let&apos;s go →
            </p>

            <p className="text-gray-500 text-base max-w-xl mx-auto mb-10 leading-relaxed font-light">
              Looking for full-time SWE roles, internships, and freelance projects.
              If you&apos;re building something interesting, let&apos;s talk.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://www.linkedin.com/in/jesse-man-devamirtham/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-xl bg-neon-lime/10 hover:bg-neon-lime/20 text-neon-lime font-semibold text-lg transition-all border border-neon-lime/20 hover:shadow-[0_0_30px_rgba(0,255,0,0.15)] flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-neon-lime/5 to-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="w-5 h-5 relative" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="relative">Hire Me on LinkedIn</span>
              </a>
              <a
                href="https://github.com/Jesseman-418"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-xl glass text-gray-400 hover:text-neon-cyan font-medium text-lg transition-all flex items-center justify-center gap-2 gradient-border"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View GitHub
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-xs font-mono text-gray-600">
              <a
                href="mailto:njessemandevamirtham@gmail.com"
                className="flex items-center gap-2 hover:text-neon-lime/60 transition-colors group tracking-wider break-all"
              >
                <svg className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                njessemandevamirtham@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
