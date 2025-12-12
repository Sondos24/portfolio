"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const mailtoLink =
  "mailto:sondosalqaisi323@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Sondos%2C%0A%0A";

const sectionBase =
  "relative mx-auto flex max-w-5xl flex-col gap-8 px-6 sm:px-12 lg:px-20";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
  viewport: { once: true, amount: 0.2 },
};

export default function Home() {
  const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    if (!formspreeEndpoint) {
      setErrorMsg("Form is not configured. Please add your Formspree endpoint.");
      return;
    }

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }
    if (!validateEmail(formData.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (formData.honeypot.trim()) {
      setErrorMsg("Spam detected.");
      return;
    }

    setIsSubmitting(true);
    try {
      const body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("subject", formData.subject);
      body.append("message", formData.message);
      body.append("_gotcha", formData.honeypot);

      const res = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      setSuccessMsg("Thanks for reaching out! I’ll reply within 24 hours.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-[-10%] h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),transparent_45%)]" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16 sm:px-12 lg:px-20">
        <div className="mb-8 flex flex-col gap-3 text-sm text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.6)]" />
            <span>Available for XR / AI / Game projects</span>
          </div>
          <a
            href={mailtoLink}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
          >
            <span aria-hidden>✉️</span>
            sondosalqaisi323@gmail.com
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-zinc-300 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
            Sondos Alqaisi
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            XR &amp; AI Developer
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500">
              Unreal Engine Specialist
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
            I’m Sondos Alqaisi, crafting immersive XR worlds and intelligent
            game systems with Unreal Engine, Meta Quest, and AI pipelines—built
            for performance, presence, and playful realism.
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-zinc-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              XR / Mixed Reality
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Unreal Engine
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              AI Systems
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Python &amp; C++
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Meta Quest
            </span>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.99 }}
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.99 }}
              href={mailtoLink}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/30"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </main>

      <motion.section
        id="about"
        className={`${sectionBase} pb-20 pt-4`}
        {...fadeIn}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            About Me
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Building presence-rich XR with AI-driven gameplay.
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
            I architect and prototype immersive experiences that merge XR, mixed
            reality, and AI-powered systems. From Meta Quest builds to Unreal
            Engine pipelines, I craft performant, visually striking worlds that
            respond intelligently to players and context.
          </p>
          <div className="grid gap-4 text-sm text-zinc-300 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                XR &amp; Mixed Reality
              </p>
              <p className="mt-2 text-base text-white">
                Spatial interaction design, passthrough blending, and intuitive
                MR UX that feels grounded and responsive.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                AI + Game Development
              </p>
              <p className="mt-2 text-base text-white">
                AI-driven behaviors, procedural systems, and gameplay tuning that
                adapts to players in real time.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                Meta Quest &amp; Unreal Engine
              </p>
              <p className="mt-2 text-base text-white">
                Optimization-first builds, VR comfort, and polished rendering
                pipelines tailored for Quest and UE.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className={`${sectionBase} pb-24`}
        {...fadeIn}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            Skills
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Technical range across XR, AI, and real-time engines.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "XR & Game Development",
              icon: "🕶️",
              items: [
                "Unreal Engine (VR/MR)",
                "Meta Quest optimization",
                "Gameplay systems & prototyping",
                "Spatial interaction & UX",
              ],
            },
            {
              title: "AI & Programming",
              icon: "🤖",
              items: [
                "AI-driven behaviors",
                "Python & C++",
                "Procedural workflows",
                "Performance tuning",
              ],
            },
            {
              title: "Tools & Engines",
              icon: "🛠️",
              items: [
                "Unreal Engine toolchain",
                "Blender for assets",
                "Version control & CI",
                "Profiling & debugging",
              ],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <div className="mb-4 flex items-center gap-3 text-lg font-semibold text-white">
                <span className="text-2xl">{card.icon}</span>
                {card.title}
              </div>
              <ul className="space-y-2 text-sm text-zinc-300">
                {card.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-lg border border-transparent px-2 py-1 transition group-hover:border-white/10 group-hover:bg-white/[0.04]"
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className={`${sectionBase} pb-24`}
        {...fadeIn}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            Projects
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Selected work across XR, AI, and real-time experiences.
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
            A snapshot of builds spanning MR prototypes, AI-driven gameplay, and
            Unreal Engine pipelines. More case studies coming soon.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "HoloQuest Arena",
              description:
                "Mixed reality combat prototype blending passthrough, spatial anchors, and AI-driven opponents tuned for Meta Quest.",
              tech: ["Unreal Engine", "Meta Quest", "AI Behaviors", "MR UX"],
              link: "#",
              label: "View Details",
            },
            {
              title: "Sentient Spaces",
              description:
                "Procedural XR exploration with reactive environments, dynamic lighting, and performance-optimized shaders.",
              tech: ["Unreal Engine", "Procedural", "XR", "C++"],
              link: "#",
              label: "View Details",
            },
            {
              title: "Neon Circuit",
              description:
                "AI-assisted level generation and gameplay tuning for a fast-paced sci-fi arcade experience.",
              tech: ["AI Systems", "Python", "Gameplay Tuning", "UE"],
              link: "#",
              label: "GitHub",
            },
            {
              title: "Echo Forge",
              description:
                "Tooling pipeline to profile, optimize, and package Quest builds with automated visual checks.",
              tech: ["Tooling", "CI", "Profiling", "Meta Quest"],
              link: "#",
              label: "View Details",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <span className="text-sm text-cyan-300 opacity-0 transition group-hover:opacity-100">
                  • • •
                </span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  {project.label}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="experience"
        className={`${sectionBase} pb-24`}
        {...fadeIn}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            Experience / Achievements
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Delivering XR, AI, and game work through study, competitions, and
            leadership.
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
            Highlights across university builds, competitive wins, certified
            expertise, and roles guiding teams.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "University Projects",
              period: "XR / AI capstones",
              items: [
                "Built MR prototypes blending passthrough, anchors, and UE blueprints.",
                "AI-driven gameplay loops tested on Meta Quest.",
                "Performance optimization sprints with profiling and LOD passes.",
              ],
            },
            {
              title: "Competitions",
              period: "Hackathons & game jams",
              items: [
                "Rapid prototyping of XR experiences under 48 hours.",
                "AI-assisted level generation to ship playable builds fast.",
                "Top placements for technical polish and immersion.",
              ],
            },
            {
              title: "Certificates",
              period: "XR / UE / AI",
              items: [
                "Meta Quest XR fundamentals and MR interaction patterns.",
                "Unreal Engine performance and rendering tracks.",
                "AI/ML coursework applied to gameplay systems.",
              ],
            },
            {
              title: "Leadership",
              period: "Tech lead / organizer",
              items: [
                "Led small teams across design, code, and 3D pipelines.",
                "Set up CI/build tooling for rapid Quest deploys.",
                "Mentored peers on UE, profiling, and XR UX best practices.",
              ],
            },
          ].map((entry) => (
            <div
              key={entry.title}
              className="group flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <div className="flex items-center justify-between text-sm text-zinc-400">
                <span>{entry.period}</span>
                <span className="opacity-0 transition group-hover:opacity-100">
                  —
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">{entry.title}</h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                {entry.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-lg border border-transparent px-2 py-1 transition group-hover:border-white/10 group-hover:bg-white/[0.04]"
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className={`${sectionBase} pb-24`}
        {...fadeIn}
      >
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
            Contact
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s build your next XR, AI, or game experience.
          </h2>
          <p className="max-w-3xl text-lg leading-relaxed text-zinc-300">
            Reach out with project details or connect via GitHub and LinkedIn.
            I typically reply within 24 hours.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-col gap-4">
              {[
                {
                  label: "Email",
                  value: "sondosalqaisi323@gmail.com",
                  href: mailtoLink,
                },
                {
                  label: "GitHub",
                  value: "github.com/Sondos24",
                  href: "https://github.com/Sondos24",
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/sondos-alqaisi-091a442bb",
                  href: "https://www.linkedin.com/in/sondos-alqaisi-091a442bb",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between rounded-xl border border-transparent px-4 py-3 transition hover:border-white/10 hover:bg-white/[0.06]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-white">{item.value}</p>
                  </div>
                  <span className="text-sm text-cyan-300 opacity-0 transition group-hover:opacity-100">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
          <form
            className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            onSubmit={handleSubmit}
            action={formspreeEndpoint || undefined}
            method="POST"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-zinc-300">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                  required
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-zinc-300">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                  required
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm text-zinc-300">
              Project details
              <textarea
                name="subject"
                rows={2}
                placeholder="Project subject"
                value={formData.subject}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-zinc-300">
              Message
              <textarea
                name="message"
                rows={4}
                placeholder="Scope, goals, timeline..."
                value={formData.message}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40"
                required
              />
            </label>
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(59,130,246,0.35)] transition hover:translate-y-[-1px] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {successMsg && (
              <p className="text-sm text-emerald-300">{successMsg}</p>
            )}
            {errorMsg && <p className="text-sm text-red-300">{errorMsg}</p>}
          </form>
        </div>
      </motion.section>

      <footer className={`${sectionBase} pb-16`}>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="flex flex-col gap-4 text-sm text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.16em] text-zinc-400">
              Contact
            </span>
            <a
              href={mailtoLink}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              <span aria-hidden>✉️</span>
              sondosalqaisi323@gmail.com
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/Sondos24"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200 transition hover:border-white/25 hover:bg-white/10"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sondos-alqaisi-091a442bb"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200 transition hover:border-white/25 hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

