import React, { useState } from 'react';
import { ArrowRight, Calendar, Compass, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Reveal } from '../animation/Reveal';
import campusHeroImg from '../../assets/images/tis_campus_hero_1791112079319.jpg';

export const HeroSection: React.FC = () => {
  const [quickFormSubmitted, setQuickFormSubmitted] = useState(false);
  const [parentName, setParentName] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [grade, setGrade] = useState('Grade VI');

  const handleQuickEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName || !parentPhone) return;
    setQuickFormSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f5f0e6]/50 via-[#faf8f5] to-white pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200/80">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Statement & Editorial Pitch */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="up" delay={0.1}>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8c1d2f]">
                <span>Estd. 2012</span>
                <span className="text-slate-300">·</span>
                <span>Co-Ed Residential Boarding</span>
                <span className="text-slate-300">·</span>
                <span className="text-[#0f2744]">Dehradun</span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0f2744] tracking-tight leading-[1.12] [text-wrap:balance]">
                The Modern Gurukul for Tomorrow&apos;s Global Leaders.
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-slate-600 font-sans leading-relaxed max-w-2xl">
                Nestled across a serene 22-acre campus in the foothills of the Himalayas, Tula&apos;s International School blends timeless Gurukul values of character, discipline, and mindfulness with an internationally acclaimed CBSE curriculum and Olympic-tier sports.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  variant="secondary"
                  size="lg"
                  href="#admissions"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Admissions 2026–27 Open
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="#contact"
                  icon={<Calendar className="h-4 w-4 text-[#8c1d2f]" />}
                  iconPosition="left"
                >
                  Book Campus Experience
                </Button>
              </div>
            </Reveal>

            {/* Unboxed Metadata Proof Strip */}
            <Reveal direction="up" delay={0.5}>
              <div className="pt-6 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div>
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-[#0f2744] tabular-nums">
                    22 Acres
                  </div>
                  <div className="text-xs text-slate-500 font-sans mt-0.5">
                    Himalayan Campus
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-[#0f2744] tabular-nums">
                    1 : 8
                  </div>
                  <div className="text-xs text-slate-500 font-sans mt-0.5">
                    Faculty Mentorship
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-[#0f2744] tabular-nums">
                    16+
                  </div>
                  <div className="text-xs text-slate-500 font-sans mt-0.5">
                    Sports & Equestrian
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl lg:text-3xl font-bold text-[#0f2744] tabular-nums">
                    Grades IV-XII
                  </div>
                  <div className="text-xs text-slate-500 font-sans mt-0.5">
                    CBSE Boarding
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Visual & Interactive Fast-Track Card */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="left" delay={0.3}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-300/80 bg-stone-100">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={campusHeroImg}
                    alt="Tula's International School Campus Dehradun"
                    className="h-full w-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle contrast gradient scrim for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2744]/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-semibold uppercase tracking-widest text-amber-300">
                      Dehradun, Uttarakhand
                    </div>
                    <div className="text-base font-serif font-medium mt-0.5">
                      Pollution-Free Himalayan Foothills Sanctuary
                    </div>
                  </div>
                </div>

                {/* High-Converting Fast-Track Admissions Box */}
                <div className="p-6 bg-white">
                  {!quickFormSubmitted ? (
                    <form onSubmit={handleQuickEnquiry} className="space-y-3.5">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0f2744]">
                          Quick Prospectus & Callback
                        </span>
                        <span className="text-[11px] font-semibold text-[#8c1d2f]">
                          Limited Seats
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[11px] font-medium text-slate-700 mb-1">
                            Parent / Guardian Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={parentName}
                            onChange={(e) => setParentName(e.target.value)}
                            placeholder="e.g. Dr. Rajesh Sharma"
                            className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#8c1d2f]"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium text-slate-700 mb-1">
                            Mobile Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={parentPhone}
                            onChange={(e) => setParentPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#8c1d2f]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div>
                          <label className="block text-[11px] font-medium text-slate-700 mb-1">
                            Admission Sought For
                          </label>
                          <select
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                            className="w-full text-xs px-3 py-2 rounded border border-slate-300 focus:outline-none focus:border-[#8c1d2f] bg-white"
                          >
                            <option value="Grade IV">Grade IV (Boarding)</option>
                            <option value="Grade V">Grade V</option>
                            <option value="Grade VI">Grade VI</option>
                            <option value="Grade VII">Grade VII</option>
                            <option value="Grade VIII">Grade VIII</option>
                            <option value="Grade IX">Grade IX (Secondary)</option>
                            <option value="Grade XI - Science">Grade XI (Science - Medical/Non-Med)</option>
                            <option value="Grade XI - Commerce">Grade XI (Commerce)</option>
                            <option value="Grade XI - Humanities">Grade XI (Humanities)</option>
                          </select>
                        </div>
                        <div className="flex items-end">
                          <button
                            type="submit"
                            className="w-full text-xs py-2 px-3 bg-[#8c1d2f] hover:bg-[#701625] text-white font-medium rounded transition-colors"
                          >
                            Request Information
                          </button>
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-500 font-sans text-center">
                        Our admissions dean responds within 2 hours during working hours.
                      </p>
                    </form>
                  ) : (
                    <div className="py-4 text-center space-y-2">
                      <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto" />
                      <div className="text-sm font-semibold text-slate-900 font-serif">
                        Thank You, {parentName}!
                      </div>
                      <p className="text-xs text-slate-600">
                        Our Admissions Counselor will contact you shortly at <span className="font-mono text-slate-900">{parentPhone}</span> regarding {grade} enrollment.
                      </p>
                      <button
                        onClick={() => setQuickFormSubmitted(false)}
                        className="text-[11px] text-[#8c1d2f] underline pt-1 font-medium"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
