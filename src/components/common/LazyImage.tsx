import { useState, type ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  /** Wrapper className (controls aspect ratio / sizing). */
  wrapperClassName?: string;
};

/**
 * Image with native lazy loading, async decoding, and a shimmer skeleton
 * shown until the image loads (prevents layout shift and blank flashes).
 */
export function LazyImage({
  className,
  wrapperClassName,
  alt = '',
  onLoad,
  ...props
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn('relative overflow-hidden bg-muted', wrapperClassName)}>
      {!loaded && <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />}
      <img
        loading="lazy"
        decoding="async"
        alt={alt}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        {...props}
      />
    </div>
  );
}
