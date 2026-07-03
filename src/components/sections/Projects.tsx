import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EmptyState } from '@/components/common/EmptyState';
import { ProjectCard } from './ProjectCard';
import { portfolio } from '@/data/portfolio';

export function Projects() {
  const { projects } = portfolio;

  // Featured projects first, preserving their configured order within each group.
  const ordered = [...projects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  );

  return (
    <Section id="projects" ariaLabel="Projects">
      <SectionTitle
        eyebrow="Projects"
        title="Things I've built"
        description="A selection of products, tools, and experiments I'm proud of."
      />

      {projects.length === 0 ? (
        <EmptyState
          title="No projects yet"
          description="Add projects in src/data/portfolio.ts."
        />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {ordered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}
    </Section>
  );
}
