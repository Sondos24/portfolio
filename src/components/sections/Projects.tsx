"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { fadeIn, sectionBase, staggerContainer, staggerItem } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { Badge } from "@/components/ui/Badge";
import { ProjectImagePlaceholder } from "@/components/ui/ProjectImagePlaceholder";

export function Projects() {
  return (
    <motion.section id="projects" className={`${sectionBase} py-24`} {...fadeIn}>
      <GradientDivider />
      <SectionHeader
        label="Projects"
        title="Selected work across AI, XR, simulation, and web development."
        description="Twelve projects spanning graduation capstones, medical simulations, computer vision systems, and educational games."
      />
      <motion.div
        className="grid gap-8 lg:grid-cols-2"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.05 }}
      >
        {projects.map((project) => (
          <motion.article
            key={project.id}
            variants={staggerItem}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <div className="p-5 pb-0">
              <ProjectImagePlaceholder
                title={project.title}
                category={project.category}
              />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-400/80">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>

              <div className="space-y-3 text-sm leading-relaxed text-zinc-400">
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Problem
                  </p>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    Solution
                  </p>
                  <p>{project.solution}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    My Contribution
                  </p>
                  <p>{project.contribution}</p>
                </div>
                {project.challenges && (
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Challenges
                    </p>
                    <p>{project.challenges}</p>
                  </div>
                )}
                {project.impact && (
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                      Impact
                    </p>
                    <p className="text-zinc-300">{project.impact}</p>
                  </div>
                )}
              </div>

              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}
