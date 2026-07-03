import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Container } from '@/components/common/Container';
import { AnimatedBackground } from '@/components/common/AnimatedBackground';
import { SocialLinks } from '@/components/common/SocialLinks';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { portfolio } from '@/data/portfolio';

export function Hero() {
  const { personal } = portfolio;

  const scrollTo = (id: string) => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <AnimatedBackground />
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {personal.availableForWork && (
            <motion.div variants={staggerItem}>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 text-sm font-medium backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Available for new opportunities
              </span>
            </motion.div>
          )}

          <motion.p
            variants={staggerItem}
            className="mb-3 flex items-center gap-2 text-base font-medium text-muted-foreground"
          >
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            Hi, I&apos;m {personal.name}
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="text-balance text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="text-brand">{personal.title}</span>
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            {personal.intro}
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button
              variant="default"
              size="lg"
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto"
            >
              View Projects
            </Button>
            <a
              href={personal.resumeUrl}
              download
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full sm:w-auto')}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={staggerItem} className="mt-10">
            <SocialLinks />
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full p-2 text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ArrowDown className="h-5 w-5" aria-hidden="true" />
        </motion.span>
      </motion.button>
    </section>
  );
}
