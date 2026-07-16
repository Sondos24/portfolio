"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";
import { fadeIn, sectionBase } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <motion.section
      id="experience"
      className={`${sectionBase} py-24`}
      {...fadeIn}
    >
      <GradientDivider />
      <SectionHeader
        label="Experience"
        title="Professional journey in AI, XR, and game development."
        description="Hands-on roles delivering intelligent systems, immersive experiences, and data-driven solutions."
      />
      <div className="relative space-y-8">
        <div className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-400/40 via-purple-400/20 to-transparent md:block" />
        {experience.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative md:pl-12"
          >
            <div className="absolute left-0 top-6 hidden h-3 w-3 rounded-full border-2 border-cyan-400 bg-black md:block" />
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:border-white/20">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-cyan-400/90">{job.company}</p>
                </div>
                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400">
                  {job.period}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {job.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-zinc-400"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <Badge key={tech} variant="accent">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
