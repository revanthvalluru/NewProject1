import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { NavItem } from '../../types';
import { Button } from '../ui/Button';

interface MobileNavigationProps {
  items: NavItem[];
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ items, onClose }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <nav className="flex flex-col gap-1 py-4">
      {items.map((item, idx) => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedIndex === idx;

        return (
          <div key={idx} className="border-b border-slate-100 last:border-b-0 py-1">
            {hasChildren ? (
              <div>
                <button
                  onClick={() => toggleExpand(idx)}
                  className="flex w-full items-center justify-between py-2.5 px-3 text-left font-serif text-base font-medium text-slate-800 hover:text-[#8c1d2f]"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-[#8c1d2f]' : ''
                    }`}
                  />
                </button>
                {isExpanded && (
                  <div className="bg-slate-50 rounded-lg p-2 mb-2 space-y-1">
                    {item.children?.map((child, cIdx) => (
                      <a
                        key={cIdx}
                        href={child.href}
                        onClick={onClose}
                        className="block px-3 py-2 text-xs text-slate-600 hover:text-[#0f2744] hover:bg-slate-100 rounded"
                      >
                        <div className="font-semibold text-slate-900">{child.label}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{child.description}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between py-2.5 px-3 font-serif text-base font-medium text-slate-800 hover:text-[#8c1d2f]"
              >
                <span>{item.label}</span>
                <ArrowRight className="h-4 w-4 text-slate-400" />
              </a>
            )}
          </div>
        );
      })}

      <div className="mt-6 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
        <Button
          variant="secondary"
          size="md"
          href="#admissions"
          onClick={onClose}
          className="w-full text-center"
        >
          Admissions 2026-27
        </Button>
        <Button
          variant="outline"
          size="md"
          href="#contact"
          onClick={onClose}
          className="w-full text-center"
        >
          Book Campus Visit
        </Button>
      </div>
    </nav>
  );
};
