"use client";

import { motion } from "framer-motion";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-6 py-20 sm:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 space-y-8"
      >
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-400 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.7)]" />
          {personalInfo.availability}
        </div>

        <div className="space-y-4">
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="text-xl font-medium text-zinc-300 sm:text-2xl">
            {personalInfo.title}
          </p>
          <p className="text-base text-cyan-400/90 sm:text-lg">
            {personalInfo.subtitle}
          </p>
        </div>

        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
          {personalInfo.intro}
        </p>

        <div className="flex flex-wrap gap-2">
          {["AI & ML", "Computer Vision", "Unreal Engine", "Unity", "XR/VR/MR", "Python", "C#"].map(
            (tag) => (
              <Badge key={tag}>{tag}</Badge>
            ),
          )}
        </div>

        <div className="flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={personalInfo.cvPath}
            download
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition"
          >
            Download CV
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
          >
            Contact Me
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:text-white"
          >
            View Projects
          </motion.a>
        </div>

        <SocialLinks links={socialLinks} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-12 flex shrink-0 justify-center lg:mt-0"
      >
        {/* TODO: Replace with professional profile photo at /public/profile.jpg */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-500/20 blur-2xl" />
          <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-2 border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.15),transparent_60%)]" />
            <div className="relative z-10 flex flex-col items-center gap-2 text-center">
              <span className="text-5xl font-bold text-white/20 sm:text-6xl">
                SA
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Profile Photo
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
