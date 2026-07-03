/**
 * Decorative animated background: soft purple blobs + a subtle grid.
 * Purely presentational, hidden from assistive tech, and respects
 * prefers-reduced-motion (animations are neutralized globally in index.css).
 */
export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_60%,transparent_100%)]" />

      {/* Gradient blobs */}
      <div className="absolute -left-24 top-[-6rem] h-[28rem] w-[28rem] animate-float rounded-full bg-primary/25 opacity-60 blur-3xl" />
      <div
        className="absolute -right-24 top-24 h-[26rem] w-[26rem] animate-float rounded-full bg-primary/25 opacity-50 blur-3xl"
        style={{ animationDelay: '-3s' }}
      />
      <div
        className="absolute bottom-[-8rem] left-1/3 h-[24rem] w-[24rem] animate-float rounded-full bg-primary/15 opacity-40 blur-3xl"
        style={{ animationDelay: '-6s' }}
      />
    </div>
  );
}
