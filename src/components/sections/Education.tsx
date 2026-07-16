"use client";

import { motion } from "framer-motion";
import { education, achievements } from "@/data/portfolio";
import { fadeIn, sectionBase } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { GlassCard } from "@/components/ui/GlassCard";

export function Education() {
  return (
    <motion.section
      id="education"
      className={`${sectionBase} py-24`}
      {...fadeIn}
    >
      <GradientDivider />
      <SectionHeader
        label="Education & Achievements"
        title="Academic foundation and competitive recognition."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((item) => (
              <GlassCard key={item.degree}>
                <h4 className="text-base font-semibold text-white">
                  {item.degree}
                </h4>
                <p className="mt-1 text-sm text-cyan-400/90">
                  {item.institution}
                </p>
                <p className="mt-1 text-xs text-zinc-500">{item.period}</p>
              </GlassCard>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            Achievements
          </h3>
          <div className="space-y-4">
            {achievements.map((item) => (
              <GlassCard key={item.event}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-500/20 text-xl">
                    🏆
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-zinc-400">{item.event}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
