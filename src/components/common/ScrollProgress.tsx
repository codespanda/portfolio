import { useScrollProgress } from '@/hooks/useScrollProgress';

/** Thin purple bar fixed to the top of the viewport indicating scroll depth. */
export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary"
      style={{ transform: `scaleX(${progress})` }}
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
