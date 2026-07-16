"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { fadeIn, sectionBase } from "@/lib/motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GradientDivider } from "@/components/ui/GradientDivider";
import { SocialLinks } from "@/components/ui/SocialLinks";

function ContactIcon({ type }: { type: string }) {
  const className = "h-5 w-5 text-cyan-400";
  switch (type) {
    case "email":
      return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "github":
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    default:
      return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
  }
}

export function Contact() {
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

      if (!res.ok) throw new Error("Submission failed");

      setSuccessMsg("Thanks for reaching out! I'll reply within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "", honeypot: "" });
    } catch {
      setErrorMsg("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: "email",
    },
    {
      label: "GitHub",
      value: "github.com/Sondos24",
      href: "https://github.com/Sondos24",
      icon: "github",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/sondos-alqaisi-091a442bb",
      href: "https://www.linkedin.com/in/sondos-alqaisi-091a442bb",
      icon: "linkedin",
    },
  ];

  return (
    <motion.section id="contact" className={`${sectionBase} py-24`} {...fadeIn}>
      <GradientDivider />
      <SectionHeader
        label="Contact"
        title="Let's build your next AI, XR, or game experience."
        description="Reach out for collaborations, freelance projects, or technical inquiries. I typically reply within 24 hours."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <div className="space-y-1">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.icon !== "email" ? "_blank" : undefined}
                  rel={item.icon !== "email" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-xl px-3 py-4 transition hover:bg-white/[0.05]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <ContactIcon type={item.icon} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-white group-hover:text-cyan-300 transition">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <SocialLinks links={socialLinks} />
        </div>

        <form
          className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-zinc-400">
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-zinc-400">
              Email
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                required
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-zinc-400">
            Subject
            <input
              type="text"
              name="subject"
              placeholder="Project subject"
              value={formData.subject}
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-zinc-400">
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Scope, goals, timeline..."
              value={formData.message}
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-2.5 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
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
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(59,130,246,0.35)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          {successMsg && (
            <p className="text-sm text-emerald-400">{successMsg}</p>
          )}
          {errorMsg && <p className="text-sm text-red-400">{errorMsg}</p>}
        </form>
      </div>
    </motion.section>
  );
}
