import { personalInfo, socialLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative mx-auto max-w-6xl px-6 pb-12 pt-8 sm:px-10 lg:px-16">
      <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="flex flex-col gap-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-white">{personalInfo.name}</p>
          <p className="mt-1 text-xs">{personalInfo.title}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.icon !== "email" ? "_blank" : undefined}
              rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-300 transition hover:border-white/25 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
