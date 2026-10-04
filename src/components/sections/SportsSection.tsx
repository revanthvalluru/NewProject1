import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { sportsData } from '../../data/sports';
import { Reveal } from '../animation/Reveal';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Trophy, Award, MapPin } from 'lucide-react';
import sportsEquestrianImg from '../../assets/images/tis_sports_equestrian_1791112091525.jpg';

export const SportsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Olympic' | 'Outdoor' | 'Indoor' | 'Traditional'>('All');

  const filteredSports = filter === 'All'
    ? sportsData
    : sportsData.filter((s) => s.category === filter);

  return (
    <section id="sports" className="py-20 md:py-28 bg-white border-b border-stone-200">
      <Container size="wide">
        <SectionHeading
          index="04"
          eyebrow="Athletics &amp; Sports Academy"
          title="World-Class Sporting Infrastructure in Dehradun"
          description="At Tula's International School, physical vigor and grit are fundamental to character formation. We offer specialized academies led by certified national coaches."
          align="center"
        />

        {/* Equestrian Highlight Hero Banner */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-stone-50">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto h-full min-h-[300px] overflow-hidden relative">
              <img
                src={sportsEquestrianImg}
                alt="Horse riding and equestrian sports academy at Tula's International School"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-stone-50/20 hidden lg:block" />
            </div>

            <div className="lg:col-span-5 p-8 lg:p-10 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#8c1d2f] font-sans">
                Signature Athletic Academy
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0f2744]">
                Equestrian &amp; Horse Riding Academy
              </h3>
              <p className="text-sm text-slate-600 font-sans leading-relaxed">
                TIS is among the rare elite residential schools in India providing comprehensive on-campus equestrian training. Students learn horse stewardship, dressage, and show jumping under certified cavalry and national-level instructors.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-sans text-slate-700">
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-bold text-[#0f2744]">Dedicated Paddocks</div>
                  <div className="text-slate-500 mt-0.5">Full sand arena &amp; stables</div>
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-bold text-[#0f2744]">Certified Trainers</div>
                  <div className="text-slate-500 mt-0.5">National equestrian masters</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls (Allowed functional button tabs per design system) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-100 rounded-lg max-w-full overflow-x-auto">
            {(['All', 'Olympic', 'Outdoor', 'Indoor', 'Traditional'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  filter === cat
                    ? 'bg-white text-[#0f2744] font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat === 'All' ? 'All Disciplines (16+)' : `${cat} Sports`}
              </button>
            ))}
          </div>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSports.map((sport, idx) => (
            <AnimatedCard key={sport.id} delay={idx * 0.05} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 pb-2 mb-3 border-b border-slate-100 font-sans">
                  <span className="font-semibold text-[#8c1d2f] uppercase tracking-wider">{sport.category}</span>
                  <span>{sport.badgeText}</span>
                </div>

                <h4 className="text-lg font-serif font-bold text-[#0f2744] mb-1.5">
                  {sport.title}
                </h4>

                <p className="text-xs text-amber-700 font-medium font-sans mb-3">
                  {sport.highlight}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {sport.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-500 font-sans">
                <div className="flex items-center gap-1.5">
                  <Award className="h-3.5 w-3.5 text-[#8c1d2f]" />
                  <span className="font-medium text-slate-800">{sport.coach}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-slate-400" />
                  <span>{sport.facility}</span>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </Container>
    </section>
  );
};
