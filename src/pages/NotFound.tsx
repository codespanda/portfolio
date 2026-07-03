import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { AnimatedBackground } from '@/components/common/AnimatedBackground';
import { Seo } from '@/lib/seo';
import { portfolio } from '@/data/portfolio';
import { cn } from '@/lib/utils';

export default function NotFound() {
  return (
    <>
      <Seo title={`Page not found — ${portfolio.personal.name}`} />
      <main className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <AnimatedBackground />
        <p className="text-brand text-7xl font-extrabold sm:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">This page wandered off</h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link to="/" className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'mt-8')}>
          <Home className="h-4 w-4" aria-hidden="true" />
          Back to home
        </Link>
      </main>
    </>
  );
}
