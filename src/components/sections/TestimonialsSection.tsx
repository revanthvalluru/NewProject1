import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonialsData } from '../../data/testimonials';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonialsData.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonialsData.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white border-b border-stone-200">
      <Container size="default">
        <SectionHeading
          index="08"
          eyebrow="Voices of Trust"
          title="What Parents &amp; Alumni Say"
          description="The lasting measure of our Gurukul is the character, resilience, and lifelong achievements of our students."
          align="center"
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#faf8f5] rounded-2xl p-8 sm:p-12 border border-slate-200/90 shadow-sm">
            <Quote className="h-10 w-10 text-[#8c1d2f]/20 mb-4" />

            <blockquote className="text-lg sm:text-2xl font-serif text-[#0f2744] leading-relaxed italic">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-[#0f2744] text-amber-300 font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  {current.avatarInitials}
                </div>
                <div>
                  <div className="font-serif font-bold text-base text-slate-900">
                    {current.author}
                  </div>
                  <div className="text-xs text-slate-600 font-sans">
                    {current.role} · <span className="text-[#8c1d2f] font-medium">{current.location}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                    {current.batchOrRelation}
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="p-2 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <span className="text-xs font-mono text-slate-500 tabular-nums px-1">
                  {currentIndex + 1} / {testimonialsData.length}
                </span>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="p-2 rounded-full border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
