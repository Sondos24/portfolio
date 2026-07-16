export function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-600/15 blur-[120px]" />
      <div className="absolute right-[-8%] top-[20%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/12 blur-[140px]" />
      <div className="absolute bottom-[-10%] left-[30%] h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.04),transparent_50%)]" />
    </div>
  );
}
