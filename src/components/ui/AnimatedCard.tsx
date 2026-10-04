import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  hoverEffect?: boolean;
  className?: string;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  delay = 0,
  hoverEffect = true,
  className,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.45,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={
        hoverEffect && !shouldReduceMotion
          ? { y: -4, transition: { duration: 0.2 } }
          : undefined
      }
      className={cn(
        'relative bg-white rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-200 p-6 overflow-hidden',
        className
      )}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
};
