import { Section } from '@/components/common/Section';
import { SectionTitle } from '@/components/common/SectionTitle';
import { EmptyState } from '@/components/common/EmptyState';
import { CertificationCard } from './CertificationCard';
import { portfolio } from '@/data/portfolio';

export function Certifications() {
  const { certifications } = portfolio;

  return (
    <Section id="certifications" ariaLabel="Certifications" className="bg-muted/30">
      <SectionTitle
        eyebrow="Certifications"
        title="Credentials & certifications"
        description="Professional certifications I've earned along the way."
      />

      {certifications.length === 0 ? (
        <EmptyState
          title="No certifications yet"
          description="Add certifications in src/data/portfolio.ts."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <CertificationCard key={cert.name} cert={cert} />
          ))}
        </div>
      )}
    </Section>
  );
}
