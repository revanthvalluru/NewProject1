import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | 'auto';
  caption?: string;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className,
  aspectRatio = '16/9',
  caption
}) => {
  const [hasError, setHasError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const aspectClasses = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/4': 'aspect-[3/4]',
    'auto': 'h-full w-full'
  };

  return (
    <figure className="relative w-full overflow-hidden rounded-xl">
      <div
        className={cn(
          'relative w-full overflow-hidden bg-slate-100',
          aspectClasses[aspectRatio],
          className
        )}
      >
        {!hasError ? (
          <motion.img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            whileHover={
              !shouldReduceMotion ? { scale: 1.03, transition: { duration: 0.4 } } : undefined
            }
            className="h-full w-full object-cover object-center transition-transform will-change-transform"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0f2744] to-[#1e3a5f] p-6 text-center text-white">
            <span className="font-serif text-lg font-medium">{alt}</span>
            <span className="mt-1 text-xs text-amber-200/80">Tula&apos;s International School · Dehradun</span>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2 text-xs text-slate-500 font-sans italic text-right">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
