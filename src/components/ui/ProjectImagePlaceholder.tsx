type ProjectImagePlaceholderProps = {
  title: string;
  category: string;
};

export function ProjectImagePlaceholder({
  title,
  category,
}: ProjectImagePlaceholderProps) {
  return (
    /* TODO: Replace with actual project screenshot at /public/projects/{project-id}.jpg */
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-800/80 to-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
      <div className="relative z-10 flex flex-col items-center gap-2 px-6 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400/70">
          {category}
        </span>
        <span className="text-sm font-medium text-zinc-400">
          Screenshot placeholder
        </span>
        <span className="max-w-[200px] text-xs text-zinc-500">{title}</span>
      </div>
    </div>
  );
}
