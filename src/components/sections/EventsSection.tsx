import React from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../animation/Reveal';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export const EventsSection: React.FC = () => {
  const events = [
    {
      month: 'NOV',
      day: '14-16',
      title: 'Confluence: Annual Cultural & Arts Festival',
      category: 'Arts & Cultural Heritage',
      location: 'Central Amphitheatre & Arts Complex',
      desc: 'Three exhilarating days of inter-school classical and western music concerts, theatrical drama, folk dances, and fine art showcases drawing top schools across India.'
    },
    {
      month: 'DEC',
      day: '08',
      title: 'Annual Sports Meet & Equestrian Showcase',
      category: 'Athletics & Horsemanship',
      location: 'Athletics Arena & Equestrian Paddocks',
      desc: 'A grand athletic spectacle featuring show-jumping equestrian parades, 100m sprint finals, torch relay, Taekwondo demonstrations, and house trophy distributions.'
    },
    {
      month: 'JAN',
      day: '24',
      title: 'Himalayan Science, Robotics & Innovation Expo',
      category: 'STEM & Applied Science',
      location: 'Atal Tinkering & Digital Labs',
      desc: 'Showcasing student-built autonomous robots, IoT environmental sensors, 3D printed mechanical prototypes, and mathematics logic exhibitions.'
    },
    {
      month: 'FEB',
      day: '12',
      title: 'Founders\' Day & Gurukul Utsav',
      category: 'Institutional Tradition',
      location: 'Main Auditorium & Lawns',
      desc: 'Commemorating the inception of Tula\'s International School with traditional Vedic recitations, alumni homecoming, and conferral of Scholar Badges.'
    }
  ];

  return (
    <section id="events" className="py-20 md:py-28 bg-[#faf8f5]">
      <Container size="default">
        <SectionHeading
          index="07"
          eyebrow="Campus Calendar &amp; Traditions"
          title="Celebrations of Spirit, Talent &amp; Valour"
          description="Life at Tula's International School is animated by landmark annual traditions that build unbreakable camaraderie and celebrate individual excellence."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((evt, idx) => (
            <Reveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="h-full bg-white rounded-xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                <div className="flex items-start gap-4">
                  {/* Editorial Calendar Stamp */}
                  <div className="shrink-0 flex flex-col items-center justify-center w-14 h-16 rounded-lg bg-[#0f2744] text-white text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 font-sans">
                      {evt.month}
                    </span>
                    <span className="text-lg font-serif font-bold tabular-nums">
                      {evt.day}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-[11px] font-semibold text-[#8c1d2f] uppercase tracking-wider font-sans">
                      {evt.category}
                    </div>
                    <h3 className="text-base font-serif font-bold text-[#0f2744] leading-snug">
                      {evt.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {evt.desc}
                </p>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-sans">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                    <span>{evt.location}</span>
                  </div>
                  <span className="text-[#8c1d2f] font-semibold inline-flex items-center gap-1 hover:underline">
                    Details &rarr;
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
