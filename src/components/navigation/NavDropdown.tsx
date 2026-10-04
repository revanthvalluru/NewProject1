import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { NavItem } from '../../types';
import { cn } from '../../lib/utils';

interface NavDropdownProps {
  item: NavItem;
}

export const NavDropdown: React.FC<NavDropdownProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (!item.children || item.children.length === 0) {
    return (
      <a
        href={item.href}
        className="text-sm font-medium text-slate-700 hover:text-[#0f2744] hover:underline underline-offset-8 transition-colors whitespace-nowrap py-2"
      >
        {item.label}
      </a>
    );
  }

  return (
    <div
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={cn(
          'inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-[#0f2744] transition-colors whitespace-nowrap py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8c1d2f] rounded-xs',
          isOpen && 'text-[#0f2744] font-semibold'
        )}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={cn(
            'h-3.5 w-3.5 text-slate-400 transition-transform duration-200',
            isOpen && 'rotate-180 text-[#8c1d2f]'
          )}
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          className="absolute left-0 top-full pt-2 z-50 w-72 origin-top-left animate-in fade-in zoom-in-95 duration-150"
        >
          <div className="bg-white rounded-lg border border-slate-200/90 shadow-lg p-2 divide-y divide-slate-100">
            <div className="py-1">
              {item.children.map((child, idx) => (
                <a
                  key={idx}
                  href={child.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex flex-col px-3 py-2.5 rounded-md hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-[#8c1d2f]">
                    <span>{child.label}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#8c1d2f]" />
                  </div>
                  <p className="text-[11px] text-slate-500 font-sans mt-0.5 line-clamp-1">
                    {child.description}
                  </p>
                </a>
              ))}
            </div>
            <div className="pt-2 px-3 pb-1">
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-[11px] font-semibold text-[#8c1d2f] hover:underline flex items-center gap-1"
              >
                <span>Explore all {item.label}</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
