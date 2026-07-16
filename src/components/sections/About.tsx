"use client";

import { motion } from "framer-motion";
import { aboutHighlights, personalInfo } from "@/data/portfolio";
import { fadeIn, sectionBase } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { GlassCard } from "@/components/ui/GlassCard";

export function About() {
  return (
    <motion.section id="about" className={`${sectionBase} py-24`} {...fadeIn}>
      <GradientDivider />
      <SectionHeader
        label="About Me"
        title="Engineering intelligent systems and immersive experiences."
        description={personalInfo.summary}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {aboutHighlights.map((item) => (
          <GlassCard key={item.title}>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-400/80">
              {item.title}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              {item.description}
            </p>
          </GlassCard>
        ))}
      </div>
      <GlassCard hover={false} className="mt-2">
        <p className="text-sm leading-relaxed text-zinc-400">
          From graduation capstone projects to professional XR deployments at
          Beyond Universe, I bring a multi-domain skill set spanning AI agent
          design, computer vision pipelines, and real-time 3D engines. I leverage
          modern AI tools—LangChain, Hugging Face, GitHub Copilot—to accelerate
          development while maintaining production quality. Passionate about
          pushing the boundaries of immersive technology across gaming,
          healthcare, science, and engineering.
        </p>
      </GlassCard>
    </motion.section>
  );
}
