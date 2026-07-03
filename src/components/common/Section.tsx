import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { staggerContainer, viewportOnce } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  /** Accessible label for the section landmark. */
  ariaLabel: string;
  children: ReactNode;
  className?: string;
  /** Set false to render full-bleed content without the centered container. */
  contained?: boolean;
}

/**
 * A semantic <section> landmark with scroll-margin for the sticky navbar,
 * a staggered reveal-on-scroll animation, and an optional centered container.
 */
export function Section({
  id,
  ariaLabel,
  children,
  className,
  contained = true,
}: SectionProps) {
  const inner = contained ? <Container>{children}</Container> : children;

  return (
    <motion.section
      id={id}
      aria-label={ariaLabel}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn('section-padding scroll-mt-20', className)}
    >
      {inner}
    </motion.section>
  );
}
