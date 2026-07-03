import { portfolio } from '@/data/portfolio';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <ul className={cn('flex items-center gap-2', className)}>
      {portfolio.socials.map(({ label, href, icon: Icon }) => {
        const isMail = href.startsWith('mailto:');
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(!isMail && { target: '_blank', rel: 'noopener noreferrer' })}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Icon className={cn('h-5 w-5', iconClassName)} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
