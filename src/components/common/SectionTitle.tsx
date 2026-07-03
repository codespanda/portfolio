import { motion } from 'framer-motion';
import { fadeInUp, viewportOnce } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  /** Small kicker label shown above the title. */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        'mb-12 flex flex-col gap-3',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-base text-muted-foreground sm:text-lg',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
