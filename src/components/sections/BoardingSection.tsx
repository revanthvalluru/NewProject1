import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../animation/Reveal';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Home, Utensils, HeartPulse, Clock, ShieldCheck, Sun } from 'lucide-react';
import boardingImg from '../../assets/images/tis_boarding_life_1791112115295.jpg';

export const BoardingSection: React.FC = () => {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  const routineItems = [
    { time: '06:00 AM', title: 'Awakening & Himalayan Yoga', desc: 'Students begin the day with fresh mountain air, Pranayama, and surya namaskar for mental clarity.' },
    { time: '07:30 AM', title: 'Nutritious Breakfast', desc: 'Wholesome vegetarian breakfast in the central dining hall supervised by resident staff.' },
    { time: '08:30 AM', title: 'Academic Sessions & Labs', desc: 'Engaging CBSE curriculum, interactive digital boards, science experiments, and foreign language classes.' },
    { time: '02:00 PM', title: 'Community Lunch & Rest', desc: 'Balanced multi-cuisine vegetarian lunch followed by an hour of reading or restful downtime in dormitories.' },
    { time: '03:45 PM', title: 'Subject Remedial Prep', desc: 'Faculty-led academic reinforcement where students receive one-on-one doubt clarification.' },
    { time: '04:45 PM', title: 'Sports Academy & Equestrian', desc: 'Two hours of active athletics: horse riding, rifle shooting, swimming, lawn tennis, or team sports.' },
    { time: '07:30 PM', title: 'Supervised Evening Prep', desc: 'Quiet, disciplined study hours in classrooms where teachers assist with homework and exam preparation.' },
    { time: '08:45 PM', title: 'Dinner & House Reflections', desc: 'Hot dinner followed by housemaster meetings, bonding activities, and spiritual gratitude before lights out.' }
  ];

  const boardingFeatures = [
    {
      icon: Home,
      title: 'Separate Boys & Girls Residences',
      desc: 'Modern, airy rooms with individual study stations, wardrobes, ergonomic bedding, and air-conditioning or cooling systems.'
    },
    {
      icon: Utensils,
      title: 'Dietitian-Curated Vegetarian Dining',
      desc: 'State-of-the-art steam kitchen serving 100% vegetarian Indian, Continental, and Oriental cuisines prepared under strict hygiene standards.'
    },
    {
      icon: HeartPulse,
      title: '24/7 Medical Care & Resident Infirmary',
      desc: 'On-campus health center staffed with round-the-clock resident medical practitioners, qualified nursing staff, and tie-ups with super-specialty hospitals.'
    },
    {
      icon: ShieldCheck,
      title: 'Zero-Tolerance Pastoral Safety',
      desc: 'Strict anti-bullying and anti-ragging protocols, 24/7 CCTV surveillance across perimeters, biometric access, and empathetic housemasters.'
    }
  ];

  return (
    <section id="boarding" className="py-20 md:py-28 bg-[#faf8f5]">
      <Container size="default">
        <SectionHeading
          index="05"
          eyebrow="Residential Life"
          title="A Caring Home Away From Home"
          description="Boarding at TIS is not merely accommodation; it is a close-knit family ecosystem fostering self-reliance, social grace, and lifelong camaraderie."
          align="center"
        />

        {/* Boarding Showcase Photo and Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6">
            <Reveal direction="up" delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <img
                  src={boardingImg}
                  alt="Boarding life and student lounge at Tula's International School"
                  className="w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#0f2744] text-white flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    Hostel Life in Dehradun
                  </div>
                  <div className="text-xs text-slate-300">
                    100% Residential Campus
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {boardingFeatures.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <div className="h-9 w-9 rounded-lg bg-[#8c1d2f]/10 text-[#8c1d2f] flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-serif font-bold text-[#0f2744]">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* The Gurukul Daily Routine Interactive Timeline */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8c1d2f]">
                Schedule of Excellence
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0f2744] mt-0.5">
                The Daily Gurukul Routine
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-sans">
              Click any schedule slot for details
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {routineItems.map((slot, idx) => {
              const isSelected = selectedSlot === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedSlot(isSelected ? null : idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'border-[#8c1d2f] bg-[#8c1d2f]/5 shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-bold text-[#8c1d2f]">
                      {slot.time}
                    </span>
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                  </div>
                  <h4 className="text-sm font-serif font-bold text-[#0f2744]">
                    {slot.title}
                  </h4>
                  <p className="text-xs text-slate-600 font-sans mt-1 leading-relaxed">
                    {slot.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
