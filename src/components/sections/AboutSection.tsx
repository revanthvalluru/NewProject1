import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../animation/Reveal';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Compass, BookOpen, Heart, Award, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Mind (Manas)',
      subtitle: 'Intellectual Rigor & Innovation',
      desc: 'Inquiry-driven CBSE learning, digital smart classes, foreign language immersion (French, German, Spanish), and Atal Tinkering STEM laboratories.',
      icon: BookOpen
    },
    {
      title: 'Body (Shareer)',
      subtitle: 'Physical Vigor & Sportsmanship',
      desc: 'Daily horse riding on dedicated equestrian paddocks, Olympic shooting, swimming, athletics, and organic vegetarian nutrition.',
      icon: Compass
    },
    {
      title: 'Soul (Atman)',
      subtitle: 'Character, Empathy & Mindfulness',
      desc: 'Dawn meditation and yoga in the Himalayan breeze, ethical leadership, community service, and lifelong Gurukul values of humility.',
      icon: Heart
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#faf8f5]">
      <Container size="default">
        <SectionHeading
          index="01"
          eyebrow="The Modern Gurukul Ethos"
          title="Rooted in Heritage. Geared for the Future."
          description="Tula's International School was established in 2012 under the aegis of the Rishabh Educational Trust to revive the revered Gurukul bond between mentor and disciple in a state-of-the-art residential ecosystem."
          align="center"
        />

        {/* Editorial Story Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 space-y-5">
            <Reveal direction="up" delay={0.1}>
              <p className="text-base sm:text-lg text-slate-700 font-sans leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#8c1d2f] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                At Tula&apos;s International School, education is not a mere transaction of syllabus and examinations; it is a profound metamorphosis. In the ancient Gurukuls of India, students learned amidst nature, developing emotional equanimity, mental sharpness, and unflinching integrity alongside academic scholarship.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                We have translated this ancient philosophy into a contemporary residential boarding school in Dehradun. Here, our students dwell in an atmosphere free from metropolitan chaos and screen addiction, surrounded by Himalayan pine and sal forests. Guided round-the-clock by resident teachers and housemasters, every child is challenged to discover their unique potential.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-800 font-medium">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#8c1d2f] shrink-0" />
                  <span>Governed by Rishabh Educational Trust</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#8c1d2f] shrink-0" />
                  <span>Ranked Top Co-Ed Boarding School</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#8c1d2f] shrink-0" />
                  <span>Pollution-Free 22-Acre Green Campus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#8c1d2f] shrink-0" />
                  <span>CBSE Affiliated from Grade IV to XII</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 bg-white rounded-xl p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8c1d2f]">
              <Award className="h-4 w-4 text-amber-500" />
              <span>Chairman&apos;s Vision</span>
            </div>
            <blockquote className="font-serif italic text-base sm:text-lg text-slate-800 leading-snug border-l-2 border-[#8c1d2f] pl-4">
              &ldquo;We do not merely prepare students to pass examinations; we prepare them to navigate the complexities of life with wisdom, courage, and compassion.&rdquo;
            </blockquote>
            <div className="pt-2 text-xs text-slate-500 font-sans">
              <div className="font-semibold text-slate-900">Sunil Kumar Jain</div>
              <div>Chairman, Rishabh Educational Trust &amp; Tula&apos;s Group</div>
            </div>
          </div>
        </div>

        {/* The 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <AnimatedCard key={idx} delay={idx * 0.1} className="h-full flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-lg bg-[#0f2744]/5 flex items-center justify-center text-[#0f2744] mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#8c1d2f] mb-1 font-sans">
                    {pillar.title}
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-[#0f2744] mb-2">
                    {pillar.subtitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#8c1d2f] font-medium">
                  <span>Explore Pillar</span>
                  <span aria-hidden="true">&rarr;</span>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
