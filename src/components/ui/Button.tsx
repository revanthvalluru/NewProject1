import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  icon,
  iconPosition = 'right',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c1d2f] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap active:scale-[0.98] select-none cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 rounded-md tracking-wider',
    md: 'text-sm px-5 py-2.5 gap-2 rounded-md tracking-wide',
    lg: 'text-base px-6 py-3.5 gap-2.5 rounded-lg tracking-wide font-semibold'
  };

  const variantStyles = {
    primary: 'bg-[#0f2744] hover:bg-[#09192c] text-white shadow-sm hover:shadow-md border border-[#0f2744]',
    secondary: 'bg-[#8c1d2f] hover:bg-[#741625] text-white shadow-sm hover:shadow-md border border-[#8c1d2f]',
    gold: 'bg-[#c59b27] hover:bg-[#b0871d] text-slate-950 font-semibold shadow-sm hover:shadow-md border border-[#c59b27]',
    outline: 'border border-slate-300 text-slate-800 bg-white/80 backdrop-blur-xs hover:bg-slate-50 hover:border-slate-400',
    ghost: 'text-slate-700 hover:text-[#0f2744] hover:bg-slate-100/60'
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
