import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { LazyImage } from '@/components/common/LazyImage';
import { staggerItem } from '@/lib/animations';
import { portfolio } from '@/data/portfolio';

export function Testimonials() {
  const { testimonials } = portfolio;

  // Optional section: render nothing when there are no testimonials.
  if (testimonials.length === 0) return null;

  return (
    <Section id="testimonials" ariaLabel="Testimonials">
      <SectionTitle
        eyebrow="Testimonials"
        title="What people say"
        description="Kind words from teammates, managers, and collaborators."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <motion.div key={t.name} variants={staggerItem} className="h-full">
            <Card className="relative h-full">
              <CardContent className="flex h-full flex-col p-6">
                <Quote className="h-8 w-8 text-primary/30" aria-hidden="true" />
                <blockquote className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <LazyImage
                    src={t.avatar}
                    alt={`Photo of ${t.name}`}
                    wrapperClassName="h-11 w-11 shrink-0 rounded-full"
                    width={44}
                    height={44}
                  />
                  <div>
                    <p className="font-semibold leading-tight">{t.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </figcaption>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
