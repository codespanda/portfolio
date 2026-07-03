import { Container } from '@/components/common/Container';
import { SocialLinks } from '@/components/common/SocialLinks';
import { portfolio } from '@/data/portfolio';

export function Footer() {
  const { personal } = portfolio;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} {personal.name}. All rights reserved.
          </p>

          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
