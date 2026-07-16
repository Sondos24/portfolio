"use client";

import { motion } from "framer-motion";
import { navLinks, personalInfo } from "@/data/portfolio";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-white transition hover:text-cyan-300"
        >
          {personalInfo.name.split(" ")[0]}
          <span className="text-cyan-400">.</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white backdrop-blur transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
