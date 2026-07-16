"use client";

import { motion } from "framer-motion";
import { certificates } from "@/data/portfolio";
import { fadeIn, sectionBase } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { GlassCard } from "@/components/ui/GlassCard";

export function Certificates() {
  return (
    <motion.section
      id="certificates"
      className={`${sectionBase} py-24`}
      {...fadeIn}
    >
      <GradientDivider />
      <SectionHeader
        label="Certifications"
        title="Continuous learning across AI, game engines, and VR."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <GlassCard className="h-full">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-500/20 text-lg">
                🏅
              </div>
              <h3 className="text-sm font-semibold leading-snug text-white">
                {cert.title}
              </h3>
              <p className="mt-2 text-xs text-cyan-400/80">{cert.issuer}</p>
              <p className="mt-1 text-xs text-zinc-500">{cert.year}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
