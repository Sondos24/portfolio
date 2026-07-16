"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { fadeIn, sectionBase, staggerContainer, staggerItem } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { GlassCard } from "@/components/ui/GlassCard";

export function Skills() {
  return (
    <motion.section id="skills" className={`${sectionBase} py-24`} {...fadeIn}>
      <GradientDivider />
      <SectionHeader
        label="Skills"
        title="Technical expertise across AI, XR, and real-time development."
        description="A comprehensive skill set built through academic projects, professional XR work, and freelance game development."
      />
      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skillCategories.map((category) => (
          <motion.div key={category.title} variants={staggerItem}>
            <GlassCard className="h-full">
              <div className="mb-4 flex items-center gap-3">
                <span className="text-2xl" aria-hidden>
                  {category.icon}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2 text-sm text-zinc-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
