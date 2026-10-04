import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { academicPrograms, academicStats } from '../../data/programs';
import { Reveal } from '../animation/Reveal';
import { Button } from '../ui/Button';
import { CheckCircle2, BookOpen, Cpu, Globe, GraduationCap } from 'lucide-react';
import academicsStemImg from '../../assets/images/tis_academics_stem_1791112103601.jpg';

export const AcademicsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(academicPrograms[0].id);

  const selectedProgram = academicPrograms.find((p) => p.id === activeTab) || academicPrograms[0];

  return (
    <section id="academics" className="py-20 md:py-28 bg-[#faf8f5]">
      <Container size="default">
        <SectionHeading
          index="03"
          eyebrow="Academic Excellence"
          title="Intellectual Rigor from Grade IV to Grade XII"
          description="Affiliated with the Central Board of Secondary Education (CBSE), New Delhi, our pedagogy emphasizes deep conceptual mastery, analytical inquiry, and holistic intellectual discovery."
          align="center"
        />

        {/* Academic Stats Strip */}
        <Reveal direction="up" delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-xs mb-12">
            {academicStats.map((stat, idx) => (
              <div key={idx} className="text-center p-2 border-r border-slate-100 last:border-r-0">
                <div className="font-serif text-3xl font-bold text-[#8c1d2f] tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-[#0f2744] mt-1 font-sans">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 font-sans mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Segmented Interactive Grade Stage Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-200/70 rounded-xl max-w-full overflow-x-auto">
            {academicPrograms.map((prog) => {
              const isActive = prog.id === activeTab;
              return (
                <button
                  key={prog.id}
                  onClick={() => setActiveTab(prog.id)}
                  className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#0f2744] text-white shadow-sm font-semibold'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <span className="font-serif">{prog.gradeSpan}</span>
                  <span className="hidden sm:inline text-slate-300 font-sans ml-1.5">·</span>
                  <span className="hidden sm:inline font-sans ml-1.5 opacity-90">{prog.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Program Detailed Showcase */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#8c1d2f] font-sans">
                  {selectedProgram.curriculum} · {selectedProgram.gradeSpan}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0f2744] mt-1">
                  {selectedProgram.title}
                </h3>
                <div className="text-xs font-medium text-amber-700 mt-1 font-sans">
                  {selectedProgram.ratio}
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                {selectedProgram.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 font-sans">
                  Curricular Distinctions &amp; Methodologies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProgram.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                      <CheckCircle2 className="h-4 w-4 text-[#8c1d2f] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 font-sans">
                  Academic Disciplines &amp; Electives
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProgram.subjects.map((sub, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Button
                  variant="secondary"
                  size="sm"
                  href="#admissions"
                >
                  Download Curriculum Guide
                </Button>
              </div>
            </div>

            {/* Right Media Spotlight */}
            <div className="lg:col-span-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-md">
                <img
                  src={academicsStemImg}
                  alt="Students in modern STEM robotics and digital science lab at Tula's International School"
                  className="w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-[#0f2744] text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
                    <Cpu className="h-4 w-4" />
                    <span>Atal Tinkering Robotics &amp; AI Lab</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 font-sans">
                    Nurturing hands-on computational innovation, 3D printing, and design thinking alongside traditional scholarship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
