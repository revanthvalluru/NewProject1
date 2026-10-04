import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Music, Palette, Globe2, Compass, Mountain, Sparkles } from 'lucide-react';

export const BeyondAcademicsSection: React.FC = () => {
  const clubs = [
    {
      icon: Music,
      title: 'Music & Performing Arts',
      kicker: 'Acoustic & Classical Studios',
      desc: 'Specialized vocal coaching in Indian classical and Western traditions, alongside instrumental mastery in piano, violin, guitar, tabla, and drums.'
    },
    {
      icon: Palette,
      title: 'Fine Arts, Sculpture & Pottery',
      kicker: 'Clay & Canvas Studios',
      desc: 'Hands-on pottery wheels, ceramic firing kilns, oil and acrylic painting studios allowing creative expression under veteran resident artists.'
    },
    {
      icon: Globe2,
      title: 'Model United Nations & Debating',
      kicker: 'Diplomatic & Rhetorical Arena',
      desc: 'Students actively participate in prestigious national and international MUN conferences, developing diplomacy, research depth, and impromptu speaking.'
    },
    {
      icon: Mountain,
      title: 'Himalayan Treks & Outbound',
      kicker: 'Garhwal Mountain Expeditions',
      desc: 'Termly guided treks through the Garhwal foothills, rock climbing certifications, wilderness survival workshops, and environmental conservation.'
    },
    {
      icon: Sparkles,
      title: 'Dramatics & Theatrical Society',
      kicker: 'Stagecraft & Elocution',
      desc: 'Annual theatre productions, Shakespearean drama, Hindi stage plays, street theatre for social consciousness, and backstage lighting design.'
    },
    {
      icon: Compass,
      title: 'Community Social Outreach',
      kicker: 'Empathetic Service',
      desc: 'Students teach literacy to local rural children, conduct plantation drives in Dehradun, and drive social impact projects true to Gurukul values.'
    }
  ];

  return (
    <section id="beyond-academics" className="py-20 md:py-28 bg-white border-b border-stone-200">
      <Container size="default">
        <SectionHeading
          index="06"
          eyebrow="Co-Curricular Exploration"
          title="Beyond the Classroom Walls"
          description="Nurturing multifaceted individuals who write poetry, ride horses, program algorithms, debate global treaties, and lead with empathy."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club, idx) => {
            const Icon = club.icon;
            return (
              <AnimatedCard key={idx} delay={idx * 0.08} className="flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-lg bg-[#8c1d2f]/10 text-[#8c1d2f] flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#c59b27] font-sans">
                    {club.kicker}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#0f2744] mt-1 mb-2">
                    {club.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {club.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 text-xs font-semibold text-[#8c1d2f] flex items-center justify-between">
                  <span>Explore Society</span>
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
