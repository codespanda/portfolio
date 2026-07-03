import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EmptyState } from '@/components/common/EmptyState';
import { TimelineItem } from './TimelineItem';
import { portfolio } from '@/data/portfolio';

export function Experience() {
  const { experience } = portfolio;

  return (
    <Section id="experience" ariaLabel="Work experience">
      <SectionTitle
        eyebrow="Experience"
        title="Where I've worked"
        description="A timeline of the teams and products I've helped build."
      />

      {experience.length === 0 ? (
        <EmptyState
          title="No experience listed yet"
          description="Add roles in src/data/portfolio.ts."
        />
      ) : (
        <ol className="mx-auto max-w-3xl">
          {experience.map((item, i) => (
            <TimelineItem
              key={`${item.company}-${item.role}`}
              item={item}
              isLast={i === experience.length - 1}
            />
          ))}
        </ol>
      )}
    </Section>
  );
}
