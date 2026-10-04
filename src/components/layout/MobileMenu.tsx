import React, { useEffect } from 'react';
import { X, Phone, Mail, Award } from 'lucide-react';
import { NavItem } from '../../types';
import { MobileNavigation } from '../navigation/MobileNavigation';
import { contactDetails } from '../../data/contact';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, items }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-10 overflow-y-auto animate-in slide-in-from-right duration-200">
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-[#0f2744] text-white">
          <div>
            <div className="text-base font-serif font-bold tracking-tight">Tula&apos;s International</div>
            <div className="text-[11px] text-amber-300 font-sans">The Modern Gurukul · Dehradun</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 px-4 py-2">
          <MobileNavigation items={items} onClose={onClose} />
        </div>

        {/* Footer contact info inside mobile drawer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-xs text-slate-600 space-y-2">
          <div className="flex items-center gap-2 text-slate-900 font-medium">
            <Award className="h-4 w-4 text-[#8c1d2f]" />
            <span>CBSE Affiliated · Co-Ed Residential</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-slate-500" />
            <a href={`tel:${contactDetails.admissionsHelpline.replace(/\s+/g, '')}`} className="hover:underline">
              {contactDetails.admissionsHelpline}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-3.5 w-3.5 text-slate-500" />
            <a href={`mailto:${contactDetails.admissionsEmail}`} className="hover:underline">
              {contactDetails.admissionsEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
