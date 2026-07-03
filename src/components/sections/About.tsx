import { motion } from 'framer-motion';
import { MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { LazyImage } from '@/components/common/LazyImage';
import { Badge } from '@/components/ui/badge';
import { fadeInUp, staggerItem, viewportOnce } from '@/lib/animations';
import { portfolio } from '@/data/portfolio';

export function About() {
  const { personal, skills, education } = portfolio;
  const topSkills = skills.flatMap((c) => c.skills.map((s) => s.name)).slice(0, 8);

  return (
    <Section id="about" ariaLabel="About me">
      <SectionTitle eyebrow="About" title="A bit about me" />

      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,320px)_1fr]">
        {/* Portrait */}
        <motion.div variants={fadeInUp} className="mx-auto w-full max-w-xs">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-2xl bg-primary/30 blur-2xl" />
            <LazyImage
              src={personal.avatarUrl}
              alt={`Portrait of ${personal.name}`}
              wrapperClassName="aspect-[4/5] rounded-2xl border border-border shadow-xl"
              width={320}
              height={400}
            />
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div variants={staggerItem} className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {personal.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Briefcase className="h-4 w-4 text-primary" aria-hidden="true" />
              {personal.yearsOfExperience}+ years experience
            </span>
          </div>

          {personal.bio.map((paragraph, i) => (
            <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}

          {education.length > 0 && (
            <div className="flex flex-col gap-2">
              {education.map((edu) => (
                <div key={edu.institution} className="flex items-start gap-2 text-sm">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="font-medium text-foreground">{edu.degree}</span>
                    {' — '}
                    {edu.institution}{' '}
                    <span className="text-muted-foreground">({edu.duration})</span>
                  </span>
                </div>
              ))}
            </div>
          )}

          <div>
            <p className="mb-3 text-sm font-medium text-muted-foreground">Core toolkit</p>
            <motion.ul
              variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-wrap gap-2"
            >
              {topSkills.map((skill) => (
                <motion.li key={skill} variants={staggerItem}>
                  <Badge variant="outline">{skill}</Badge>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
