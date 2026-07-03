import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { staggerItem } from '@/lib/animations';
import type { ExperienceItem } from '@/types';

interface TimelineItemProps {
  item: ExperienceItem;
  /** True for the last item, which hides the connecting line's tail. */
  isLast: boolean;
}

export function TimelineItem({ item, isLast }: TimelineItemProps) {
  return (
    <motion.li variants={staggerItem} className="relative pl-10">
      {/* Connector line */}
      {!isLast && (
        <span
          className="absolute left-[11px] top-3 h-full w-px bg-border"
          aria-hidden="true"
        />
      )}
      {/* Node */}
      <span
        className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background"
        aria-hidden="true"
      >
        <span className="h-2 w-2 rounded-full bg-primary" />
      </span>

      <div className="pb-10">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-lg font-semibold">
            {item.role}{' '}
            <span className="text-primary">@ {item.company}</span>
          </h3>
          <span className="text-sm font-medium text-muted-foreground">{item.duration}</span>
        </div>

        {item.location && (
          <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {item.location}
          </p>
        )}

        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <li key={tech}>
              <Badge variant="secondary">{tech}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
}
