import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';
import { AcademicsSection } from '../components/sections/AcademicsSection';
import { SportsSection } from '../components/sections/SportsSection';
import { BoardingSection } from '../components/sections/BoardingSection';
import { BeyondAcademicsSection } from '../components/sections/BeyondAcademicsSection';
import { EventsSection } from '../components/sections/EventsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { AdmissionsSection } from '../components/sections/AdmissionsSection';
import { ContactSection } from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <AcademicsSection />
      <SportsSection />
      <BoardingSection />
      <BeyondAcademicsSection />
      <EventsSection />
      <TestimonialsSection />
      <AdmissionsSection />
      <ContactSection />
    </>
  );
}
