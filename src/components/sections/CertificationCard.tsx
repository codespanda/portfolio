import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { staggerItem } from '@/lib/animations';
import type { Certification } from '@/types';

export function CertificationCard({ cert }: { cert: Certification }) {
  const content = (
    <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <CardContent className="flex h-full items-start gap-4 p-5">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Award className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-semibold leading-snug">{cert.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {cert.issuer} · {cert.date}
          </p>
        </div>
        {cert.credentialUrl && (
          <ExternalLink
            className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
            aria-hidden="true"
          />
        )}
      </CardContent>
    </Card>
  );

  return (
    <motion.div variants={staggerItem} className="h-full">
      {cert.credentialUrl ? (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`View credential: ${cert.name} from ${cert.issuer}`}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
}
