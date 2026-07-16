type BadgeProps = {
  children: React.ReactNode;
  variant?: "default" | "accent";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-200"
      : "border-white/10 bg-white/5 text-zinc-200";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${styles}`}
    >
      {children}
    </span>
  );
}
