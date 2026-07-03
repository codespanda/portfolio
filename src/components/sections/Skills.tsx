import { motion } from 'framer-motion';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { EmptyState } from '@/components/common/EmptyState';
import { staggerItem } from '@/lib/animations';
import { portfolio } from '@/data/portfolio';

export function Skills() {
  const { skills } = portfolio;

  return (
    <Section id="skills" ariaLabel="Skills" className="bg-muted/30">
      <SectionTitle
        eyebrow="Skills"
        title="Technologies I work with"
        description="A snapshot of the tools and platforms I use to design, build, and ship."
      />

      {skills.length === 0 ? (
        <EmptyState title="No skills listed yet" description="Add skills in src/data/portfolio.ts." />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => {
            const CategoryIcon = group.icon;
            return (
              <motion.div key={group.category} variants={staggerItem}>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <CategoryIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="font-semibold">{group.category}</h3>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className="rounded-md border border-border bg-background px-2.5 py-1 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                        >
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}
    </Section>
  );
}
