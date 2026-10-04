import React from 'react';
import { Phone, Mail, MapPin, Award, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Container } from '../ui/Container';
import { contactDetails } from '../../data/contact';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1a2d] text-slate-300 pt-16 pb-12 border-t border-[#162e4e]">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: School Identity & Gurukul Ethos */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <div className="text-2xl font-serif font-bold text-white tracking-tight">
                Tula&apos;s International School
              </div>
              <div className="text-xs uppercase tracking-widest text-amber-400 font-sans mt-1">
                The Modern Gurukul · Dehradun
              </div>
            </div>
            <p className="text-sm text-slate-400 font-sans leading-relaxed max-w-md">
              Established under the Rishabh Educational Trust, Tula&apos;s International School is a premier co-educational residential boarding institution. We nurture young minds by intertwining timeless Gurukul principles of discipline, values, and mindfulness with internationally accredited CBSE education and Olympic-standard sports.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1.5 font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span className="text-slate-300">{contactDetails.affiliatedWith}</span>
              </div>
              <div className="text-slate-400 pl-6">
                <span>{contactDetails.affiliationNumber}</span> · <span>{contactDetails.schoolCode}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Academic & Boarding Pathways */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4 font-sans">
              Academics & Life
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#academics" className="hover:text-white transition-colors">
                  Middle School (Grades IV-VIII)
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors">
                  Secondary School (Grades IX-X)
                </a>
              </li>
              <li>
                <a href="#academics" className="hover:text-white transition-colors">
                  Senior Secondary (Science/Comm/Arts)
                </a>
              </li>
              <li>
                <a href="#boarding" className="hover:text-white transition-colors">
                  Boarding & Pastoral Care
                </a>
              </li>
              <li>
                <a href="#sports" className="hover:text-white transition-colors">
                  Horse Riding & Sports Academy
                </a>
              </li>
              <li>
                <a href="#beyond-academics" className="hover:text-white transition-colors">
                  Performing Arts & Model UN
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Admissions & Governance */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4 font-sans">
              Admissions & Trust
            </div>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#admissions" className="hover:text-white transition-colors">
                  Admission Procedure 2026–27
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-white transition-colors">
                  Eligibility & Criteria
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Schedule Campus Visit
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Rishabh Educational Trust
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Mandatory CBSE Disclosures
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Campus Address & Emergency Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4 font-sans">
              Campus Coordinates
            </div>
            <div className="space-y-3 text-xs text-slate-300 font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun, Uttarakhand – 248011
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <div>
                  <a href={`tel:${contactDetails.admissionsHelpline.replace(/\s+/g, '')}`} className="hover:text-white">
                    {contactDetails.admissionsHelpline}
                  </a>
                  <div className="text-[11px] text-slate-400">Admissions Helpline</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <a href={`mailto:${contactDetails.admissionsEmail}`} className="hover:text-white">
                  {contactDetails.admissionsEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and anti-slop clean metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Tula&apos;s International School. All Rights Reserved. Affiliated to CBSE, New Delhi.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#about" className="hover:text-white">Privacy Policy</a>
            <span>·</span>
            <a href="#about" className="hover:text-white">Terms of Admission</a>
            <span>·</span>
            <a href="#contact" className="hover:text-white">Campus Map</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
