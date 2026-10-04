import React from 'react';
import { Phone, Mail, MapPin, Award } from 'lucide-react';
import { contactDetails } from '../../data/contact';
import { Container } from '../ui/Container';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0b1a2d] text-slate-300 text-xs py-2 border-b border-[#162e4e] hidden md:block">
      <Container size="wide">
        <div className="flex items-center justify-between gap-4">
          {/* Left: CBSE Accreditation & Location */}
          <div className="flex items-center gap-4 text-[11px] tracking-wide text-slate-300">
            <span className="flex items-center gap-1.5 font-medium text-amber-300/90">
              <Award className="h-3.5 w-3.5 text-amber-400" />
              <span>{contactDetails.affiliationNumber}</span>
              <span className="text-slate-500">·</span>
              <span>{contactDetails.schoolCode}</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="h-3 w-3 text-slate-400" />
              <span>Dehradun, Uttarakhand, India</span>
            </span>
          </div>

          {/* Right: Direct Admissions Contact & Inquiries */}
          <div className="flex items-center gap-5 text-[11px]">
            <a
              href={`tel:${contactDetails.admissionsHelpline.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3 text-amber-400" />
              <span>Admissions: {contactDetails.admissionsHelpline}</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={`mailto:${contactDetails.admissionsEmail}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="h-3 w-3 text-amber-400" />
              <span>{contactDetails.admissionsEmail}</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href="#admissions"
              className="text-amber-400 hover:text-amber-300 font-medium underline underline-offset-2"
            >
              Session 2026–27 Open
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
