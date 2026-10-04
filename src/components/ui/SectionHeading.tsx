import React from 'react';
import { cn } from '../../lib/utils';
import { Badge } from './Badge';

interface SectionHeadingProps {
  eyebrow?: string;
  index?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  badgeVariant?: 'crimson' | 'navy' | 'gold' | 'subtle';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  index,
  title,
  description,
  align = 'center',
  badgeVariant = 'crimson',
  className
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        isCenter ? 'text-center mx-auto' : 'text-left',
        'max-w-3xl',
        className
      )}
    >
      {(eyebrow || index) && (
        <div className={cn('mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8c1d2f]', isCenter && 'justify-center')}>
          {index && <span className="text-[#c59b27] font-mono">{index}</span>}
          {index && eyebrow && <span className="text-slate-300">/</span>}
          {eyebrow && <Badge variant={badgeVariant}>{eyebrow}</Badge>}
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#0f2744] tracking-tight leading-[1.18] [text-wrap:balance]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}

      <div
        className={cn(
          'mt-5 flex items-center gap-1.5',
          isCenter ? 'justify-center' : 'justify-start'
        )}
      >
        <span className="h-[2px] w-12 bg-[#8c1d2f]" />
        <span className="h-[2px] w-2 bg-[#c59b27]" />
      </div>
    </div>
  );
};
