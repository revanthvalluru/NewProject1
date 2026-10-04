import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { contactDetails } from '../../data/contact';
import { Button } from '../ui/Button';
import { MapPin, Phone, Mail, Clock, Calendar, CheckCircle2, Plane, Train, Car } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [tourBooked, setTourBooked] = useState(false);
  const [tourData, setTourData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (10:00 AM)',
    attendees: '2 Adults, 1 Student'
  });

  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tourData.name || !tourData.phone || !tourData.date) return;
    setTourBooked(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <Container size="wide">
        <SectionHeading
          index="10"
          eyebrow="Visit &amp; Connect"
          title="Experience Our Dehradun Campus in Person"
          description="We encourage prospective parents and students to visit our 22-acre Himalayan campus, interact with resident housemasters, and experience Gurukul life firsthand."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Campus Coordinates & Transport Guides */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#faf8f5] rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#8c1d2f] font-sans">
                  Campus Address
                </div>
                <h3 className="text-xl font-serif font-bold text-[#0f2744] mt-1">
                  Tula&apos;s International School
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#8c1d2f] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Campus Location</div>
                    <p className="text-slate-600 leading-relaxed mt-0.5">
                      {contactDetails.campusAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#8c1d2f] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Admissions Helplines</div>
                    <p className="text-slate-600 leading-relaxed mt-0.5 font-mono">
                      {contactDetails.admissionsHelpline} / {contactDetails.generalInquiries}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#8c1d2f] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Email Inquiries</div>
                    <p className="text-slate-600 leading-relaxed mt-0.5">
                      {contactDetails.admissionsEmail}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#8c1d2f] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-slate-900">Campus Visiting Hours</div>
                    <p className="text-slate-600 leading-relaxed mt-0.5">
                      {contactDetails.officeHours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 font-sans">
                  How to Reach Us
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-sans">
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    <Plane className="h-4 w-4 text-[#8c1d2f] mx-auto mb-1" />
                    <div className="font-semibold text-slate-900">Dehradun Airport</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">~45 mins drive</div>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    <Train className="h-4 w-4 text-[#8c1d2f] mx-auto mb-1" />
                    <div className="font-semibold text-slate-900">Railway Station</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">~30 mins drive</div>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    <Car className="h-4 w-4 text-[#8c1d2f] mx-auto mb-1" />
                    <div className="font-semibold text-slate-900">Chakrata Road</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Direct Highway</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Schedule a Campus Visit Booking Form */}
          <div className="lg:col-span-7 bg-[#faf8f5] rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            {!tourBooked ? (
              <form onSubmit={handleTourSubmit} className="space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#8c1d2f] font-sans">
                    Personalized Orientation
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0f2744]">
                    Book an On-Campus Tour
                  </h3>
                  <p className="text-xs text-slate-600 font-sans mt-0.5">
                    Our Admissions Dean conducts personal campus walkthroughs with prospective families.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={tourData.name}
                      onChange={(e) => setTourData({ ...tourData, name: e.target.value })}
                      placeholder="e.g. Meera Singhania"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#8c1d2f]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={tourData.phone}
                      onChange={(e) => setTourData({ ...tourData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#8c1d2f]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Preferred Date of Visit *
                    </label>
                    <input
                      type="date"
                      required
                      value={tourData.date}
                      onChange={(e) => setTourData({ ...tourData, date: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#8c1d2f]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Preferred Time Slot
                    </label>
                    <select
                      value={tourData.timeSlot}
                      onChange={(e) => setTourData({ ...tourData, timeSlot: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#8c1d2f]"
                    >
                      <option value="Morning (10:00 AM)">Morning (10:00 AM – 12:00 PM)</option>
                      <option value="Mid-Day (01:00 PM)">Mid-Day (01:00 PM – 03:00 PM)</option>
                      <option value="Afternoon (03:30 PM)">Afternoon (03:30 PM – 05:30 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Number of Attendees &amp; Family Members
                  </label>
                  <input
                    type="text"
                    value={tourData.attendees}
                    onChange={(e) => setTourData({ ...tourData, attendees: e.target.value })}
                    placeholder="e.g. 2 Parents, 1 Student (Grade VI)"
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#8c1d2f]"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full py-3"
                    icon={<Calendar className="h-4 w-4" />}
                  >
                    Confirm Campus Visit Appointment
                  </Button>
                </div>
              </form>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="h-14 w-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-serif font-bold text-[#0f2744]">
                  Campus Tour Confirmed
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-sans max-w-md mx-auto leading-relaxed">
                  We look forward to hosting you, <span className="font-semibold text-slate-900">{tourData.name}</span>, on <span className="font-semibold text-[#8c1d2f]">{tourData.date}</span> at <span className="font-semibold text-[#0f2744]">{tourData.timeSlot}</span>.
                </p>
                <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto">
                  Directions &amp; Gate Pass have been sent via SMS/WhatsApp to <span className="font-mono text-slate-900">{tourData.phone}</span>.
                </div>
                <button
                  onClick={() => setTourBooked(false)}
                  className="text-xs text-[#8c1d2f] underline font-semibold cursor-pointer"
                >
                  Modify or Book another visit
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
