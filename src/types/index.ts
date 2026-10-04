export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: NavItemChild[];
}

export interface NavItemChild {
  label: string;
  href: string;
  description: string;
  iconName?: string;
}

export interface SportItem {
  id: string;
  title: string;
  category: 'Olympic' | 'Outdoor' | 'Indoor' | 'Traditional';
  highlight: string;
  description: string;
  coach: string;
  facility: string;
  badgeText: string;
  icon: string;
}

export interface AcademicProgram {
  id: string;
  gradeSpan: string;
  title: string;
  curriculum: string;
  description: string;
  keyFeatures: string[];
  subjects: string[];
  ratio: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  batchOrRelation: string;
  avatarInitials: string;
}

export interface SchoolStat {
  value: string;
  label: string;
  subtext: string;
}

export interface ContactInfo {
  campusAddress: string;
  admissionsHelpline: string;
  generalInquiries: string;
  admissionsEmail: string;
  officeHours: string;
  affiliatedWith: string;
  affiliationNumber: string;
  schoolCode: string;
}
