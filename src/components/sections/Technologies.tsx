"use client";

import { motion } from "framer-motion";
import { allTechnologies } from "@/data/portfolio";
import { fadeIn, sectionBase } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { Badge } from "@/components/ui/Badge";

export function Technologies() {
  return (
    <motion.section
      id="technologies"
      className={`${sectionBase} py-24`}
      {...fadeIn}
    >
      <GradientDivider />
      <SectionHeader
        label="Technologies"
        title="Tools and frameworks across every project."
        description="Technologies inferred from professional experience and project work."
      />
      <div className="flex flex-wrap gap-2.5">
        {allTechnologies.map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
          >
            <Badge variant="accent">{tech}</Badge>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
