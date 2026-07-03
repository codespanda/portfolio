import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LazyImage } from '@/components/common/LazyImage';
import { buttonVariants } from '@/components/ui/button';
import { staggerItem } from '@/lib/animations';
import { cn } from '@/lib/utils';
import type { Project } from '@/types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div variants={staggerItem} className="h-full">
      <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
        <div className="relative">
          <LazyImage
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            wrapperClassName="aspect-[16/10]"
            className="transition-transform duration-500 group-hover:scale-105"
            width={800}
            height={500}
          />
          {project.featured && (
            <Badge
              variant="default"
              className="absolute left-3 top-3 gap-1 bg-background/80 backdrop-blur"
            >
              <Star className="h-3 w-3 fill-current" aria-hidden="true" />
              Featured
            </Badge>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li key={tech}>
                <Badge variant="outline">{tech}</Badge>
              </li>
            ))}
          </ul>

          {(project.githubUrl || project.liveUrl) && (
            <div className="mt-6 flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'flex-1')}
                  aria-label={`View ${project.title} source on GitHub`}
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: 'default', size: 'sm' }), 'flex-1')}
                  aria-label={`Open the live demo of ${project.title}`}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
