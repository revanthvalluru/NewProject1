import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { admissionSteps } from '../../data/contact';
import { Button } from '../ui/Button';
import { CheckCircle2, FileText, Calendar, Check, HelpCircle } from 'lucide-react';

export const AdmissionsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: 'Grade VII',
    residentialType: 'Full Boarding',
    currentSchool: '',
    city: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone) return;
    setFormSubmitted(true);
  };

  const eligibilityList = [
    { grade: 'Grade IV', age: '9+ Years', requirement: 'Passing Grade III with basic literacy & numeracy' },
    { grade: 'Grades V – VIII', age: '10–13 Years', requirement: 'Foundational CBSE/ICSE/State Board clearance' },
    { grade: 'Grades IX – X', age: '14–15 Years', requirement: 'Academic transcripts & aptitude assessment' },
    { grade: 'Grade XI', age: '16+ Years', requirement: 'Grade X Board results & stream counselling (Sci/Comm/Arts)' }
  ];

  return (
    <section id="admissions" className="py-20 md:py-28 bg-[#faf8f5] border-b border-stone-200">
      <Container size="wide">
        <SectionHeading
          index="09"
          eyebrow="Admissions Open 2026–27"
          title="Begin Your Child's Journey at The Modern Gurukul"
          description="We welcome students from all across India and the globe who aspire to excel in academics, sports, and life with integrity and confidence."
          align="center"
        />

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {admissionSteps.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl border bg-white shadow-xs transition-all duration-200 relative ${
                activeStep === idx
                  ? 'border-[#8c1d2f] ring-1 ring-[#8c1d2f]'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-2xl font-bold text-[#8c1d2f]">
                  {item.step}
                </span>
                <span className="text-[11px] font-sans text-slate-400">Step {idx + 1}</span>
              </div>
              <h3 className="text-base font-serif font-bold text-[#0f2744] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Application Form & Criteria Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Eligibility and Documents Matrix */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs">
              <h3 className="text-lg font-serif font-bold text-[#0f2744] mb-3">
                Age Criteria &amp; Eligibility
              </h3>
              <div className="divide-y divide-slate-100 text-xs font-sans">
                {eligibilityList.map((row, idx) => (
                  <div key={idx} className="py-2.5 flex items-start justify-between gap-4">
                    <div>
                      <div className="font-bold text-slate-900">{row.grade}</div>
                      <div className="text-slate-500 mt-0.5">{row.requirement}</div>
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-[#8c1d2f] shrink-0 bg-stone-100 px-2 py-0.5 rounded">
                      {row.age}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-3">
              <h3 className="text-base font-serif font-bold text-[#0f2744]">
                Documents for Enrollment
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 font-sans">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Child&apos;s Official Birth Certificate copy</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Report cards of past two academic years</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Transfer Certificate (TC) countersigned by Board</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Recent passport size photographs (Student &amp; Parents)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Medical fitness record and blood group certificate</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Comprehensive Admission Lead Capture Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8c1d2f] font-sans">
                    Session 2026–27
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0f2744]">
                    Online Admission Enquiry Form
                  </h3>
                  <p className="text-xs text-slate-500 font-sans mt-0.5">
                    Fill the details below to receive the detailed prospectus and fee schedule.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Student&apos;s Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="e.g. Aryan Malhotra"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#8c1d2f]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Vikram Malhotra"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#8c1d2f]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Mobile Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#8c1d2f]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="parent@domain.com"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#8c1d2f]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Grade Applying For *
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#8c1d2f]"
                    >
                      <option value="Grade IV">Grade IV</option>
                      <option value="Grade V">Grade V</option>
                      <option value="Grade VI">Grade VI</option>
                      <option value="Grade VII">Grade VII</option>
                      <option value="Grade VIII">Grade VIII</option>
                      <option value="Grade IX">Grade IX</option>
                      <option value="Grade X">Grade X (Transfer only)</option>
                      <option value="Grade XI - Science">Grade XI (Science Stream)</option>
                      <option value="Grade XI - Commerce">Grade XI (Commerce Stream)</option>
                      <option value="Grade XI - Humanities">Grade XI (Humanities Stream)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Residential Preference
                    </label>
                    <select
                      value={formData.residentialType}
                      onChange={(e) => setFormData({ ...formData, residentialType: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#8c1d2f]"
                    >
                      <option value="Full Boarding">Full Residential Boarding</option>
                      <option value="Weekly Boarding">Weekly Boarding (Regional)</option>
                      <option value="International Student">International Scholar</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Current City &amp; State
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. New Delhi / Dubai"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#8c1d2f]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Current School Name
                    </label>
                    <input
                      type="text"
                      value={formData.currentSchool}
                      onChange={(e) => setFormData({ ...formData, currentSchool: e.target.value })}
                      placeholder="e.g. Delhi Public School"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#8c1d2f]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="secondary"
                    size="md"
                    className="w-full py-3"
                  >
                    Submit Official Admission Enquiry
                  </Button>
                </div>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-[#0f2744]">
                  Enquiry Submitted Successfully
                </h4>
                <p className="text-sm text-slate-600 font-sans max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{formData.parentName}</span>. We have registered your application for <span className="font-semibold text-slate-900">{formData.studentName}</span> for <span className="font-semibold text-slate-900">{formData.grade}</span> ({formData.residentialType}).
                </p>
                <div className="p-4 bg-slate-50 rounded-lg text-xs text-slate-600 max-w-md mx-auto">
                  A digital prospectus and entrance assessment syllabus have been sent to <span className="font-mono text-slate-900">{formData.email}</span>. Our Admissions Dean will call you on <span className="font-mono text-slate-900">{formData.phone}</span>.
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-[#8c1d2f] underline font-semibold cursor-pointer"
                >
                  Register Another Student
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
