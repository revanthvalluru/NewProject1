import { AcademicProgram } from '../types';

export const academicPrograms: AcademicProgram[] = [
  {
    id: 'middle-school',
    gradeSpan: 'Grades IV – VIII',
    title: 'Middle School & Foundational Gurukul',
    curriculum: 'CBSE / NEP 2020 Integrated',
    description: 'Nurturing curiosity, conceptual foundations, and ethical values during the most critical developmental years through joyful inquiry, experiential lab work, and reading habits.',
    keyFeatures: [
      'Inquiry-based STEM and hands-on experimental science labs',
      'Foreign language immersion: German, French, or Spanish from Grade VI',
      'Atal Tinkering Robotics Lab, coding basics, and digital literacy',
      'Holistic Gurukul value-education and daily public speaking circles'
    ],
    subjects: ['English & Literature', 'Mathematics & Mental Math', 'Integrated Sciences', 'Social Sciences & Geography', 'Second Language (Hindi/Sanskrit)', 'Third Language (French/German/Spanish)', 'Visual & Performing Arts', 'Computer Coding'],
    ratio: '1:8 Teacher-Student Mentorship'
  },
  {
    id: 'secondary-school',
    gradeSpan: 'Grades IX – X',
    title: 'Secondary School',
    curriculum: 'CBSE Board Examination Pathway',
    description: 'Transitioning from exploration to rigorous academic discipline, analytical reasoning, and board examination preparedness while continuing athletic and creative pursuits.',
    keyFeatures: [
      'Concept-mastery workshops and weekly formative diagnostic assessments',
      'Dedicated science laboratories for Physics, Chemistry, and Biology',
      'Artificial Intelligence, design thinking, and computational logic modules',
      'Extensive career profiling, psychometric evaluation, and subject counselling'
    ],
    subjects: ['English Communicative', 'Mathematics Standard / Advanced', 'Physics, Chemistry & Biology', 'History, Civics & Economics', 'Information Technology / AI', 'Modern Foreign / Regional Language'],
    ratio: '1:10 Class Ratio with Evening Remedial Support'
  },
  {
    id: 'senior-secondary',
    gradeSpan: 'Grades XI – XII',
    title: 'Senior Secondary School (Specialized Streams)',
    curriculum: 'CBSE Senior Secondary with Career Acceleration',
    description: 'Rigorous pre-university academic excellence in Science, Commerce, and Humanities paired with integrated competitive coaching for JEE, NEET, CLAT, CUET, and SAT.',
    keyFeatures: [
      'Three specialized streams: Science (PCM/PCB), Commerce, and Humanities',
      'Integrated preparation for national entrance examinations by expert faculty',
      'Individual career counselling, university application portfolio development',
      'Alumni mentorship network and university placement guidance cell'
    ],
    subjects: [
      'Science: Physics, Chemistry, Mathematics, Biology, Computer Science',
      'Commerce: Accountancy, Business Studies, Economics, Applied Mathematics',
      'Humanities: Political Science, Psychology, Sociology, History, English Elective'
    ],
    ratio: '1:8 Pre-University Academic Mentorship'
  }
];

export const academicStats = [
  { value: '100%', label: 'CBSE Pass Percentage', subtext: 'Consecutive batch distinction' },
  { value: '1:8', label: 'Student-Teacher Ratio', subtext: 'Personalized attention in all grades' },
  { value: '20,000+', label: 'Library Volumes', subtext: 'Reference books, journals & digital archives' },
  { value: '45+', label: 'National Olympiad Laurels', subtext: 'Science, Math & Cyber distinctions' }
];
