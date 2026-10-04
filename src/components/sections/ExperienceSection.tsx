import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../animation/Reveal';
import { Trees, Compass, Users2, Globe2, ShieldCheck, SunMedium } from 'lucide-react';
import campusHeroImg from '../../assets/images/tis_campus_hero_1791112079319.jpg';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      icon: Trees,
      title: 'Pollution-Free Himalayan Haven',
      desc: 'Located away from urban congestion in Dehradun, our students breathe pure mountain air, surrounded by rich flora, ensuring physical vigor and mental tranquility.'
    },
    {
      icon: Users2,
      title: '24/7 Resident Faculty Guardianship',
      desc: 'Teachers and housemasters reside on campus, eating meals together with students and offering round-the-clock academic and emotional mentorship.'
    },
    {
      icon: SunMedium,
      title: 'Holistic Mind-Body Rhythm',
      desc: 'Each day is rhythmically paced: dawn yoga and meditation, focused academic sessions, rigorous sports training, evening prep, and peaceful sleep.'
    },
    {
      icon: Globe2,
      title: 'Global Citizen Foundation',
      desc: 'Multilingual fluency in French, German, or Spanish, Model United Nations debates, and cross-cultural exchanges broaden horizons for international universities.'
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-white border-y border-stone-200">
      <Container size="default">
        <SectionHeading
          index="02"
          eyebrow="The TIS Experience"
          title="A Transformative 22-Acre Himalayan Campus"
          description="Every corner of Tula's International School has been thoughtfully engineered to inspire curiosity, foster genuine brotherhood and sisterhood, and instill independence."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Interactive Feature List */}
          <div className="lg:col-span-6 space-y-6">
            {experiences.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={idx} direction="up" delay={idx * 0.1}>
                  <div className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-[#faf8f5]/80 transition-all duration-200">
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-[#0f2744] text-white flex items-center justify-center mt-0.5">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-serif font-semibold text-[#0f2744]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Large Visual Feature with Campus Metrics Overlay */}
          <div className="lg:col-span-6">
            <Reveal direction="left" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
                <img
                  src={campusHeroImg}
                  alt="Tula's International School Himalayan campus panorama"
                  className="w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2744]/90 via-[#0f2744]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300 font-sans">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Safe &amp; Secure Residential Sanctuary</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-serif font-bold leading-tight">
                    Where Ancient Wisdom Meets Himalayan Serenity.
                  </h4>
                  <p className="text-xs text-slate-200 font-sans leading-relaxed line-clamp-2">
                    CCTV monitored 24/7 security, zero ragging tolerance, and warm housemasters ensure your child thrives in a secure second home.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
