import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'crimson' | 'navy' | 'gold' | 'subtle';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'crimson',
  className
}) => {
  // Zero-pill discipline: refined typographic kicker with subtle line or quiet tag, no candy pill capsules
  const variantStyles = {
    crimson: 'text-[#8c1d2f] border-b border-[#8c1d2f]/30',
    navy: 'text-[#0f2744] border-b border-[#0f2744]/30',
    gold: 'text-[#9c7512] border-b border-[#c59b27]/40',
    subtle: 'text-slate-500 border-b border-slate-300'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center text-xs font-semibold uppercase tracking-widest pb-0.5 select-none font-sans',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
