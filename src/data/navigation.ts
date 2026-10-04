import { NavItem } from '../types';

export const navigationItems: NavItem[] = [
  {
    label: 'About TIS',
    href: '#about',
    children: [
      {
        label: 'The Modern Gurukul',
        href: '#about',
        description: 'Blending ancient Gurukul ethos with modern global education.'
      },
      {
        label: '22-Acre Campus',
        href: '#experience',
        description: 'Lush green sanctuary in the foothills of the Himalayas.'
      },
      {
        label: 'Leadership & Trust',
        href: '#about',
        description: 'Governed by the visionary Rishabh Educational Trust since 2012.'
      },
      {
        label: 'Rankings & Awards',
        href: '#about',
        description: 'Ranked among top co-ed residential boarding schools in India.'
      }
    ]
  },
  {
    label: 'Academics',
    href: '#academics',
    children: [
      {
        label: 'Curriculum (CBSE)',
        href: '#academics',
        description: 'Affiliated with CBSE from Grade IV through Grade XII.'
      },
      {
        label: 'Senior Secondary Streams',
        href: '#academics',
        description: 'Specialized tracks in Science, Commerce, and Humanities.'
      },
      {
        label: 'STEM & Robotics Lab',
        href: '#academics',
        description: 'Experiential tinkering labs and coding masterclasses.'
      },
      {
        label: 'Foreign Languages',
        href: '#academics',
        description: 'Linguistic immersion in German, French, and Spanish.'
      }
    ]
  },
  {
    label: 'Sports Academy',
    href: '#sports',
    children: [
      {
        label: 'Equestrian / Horse Riding',
        href: '#sports',
        description: 'Dedicated paddocks, trained horses, and certified riding masters.'
      },
      {
        label: '10m Air Rifle Shooting',
        href: '#sports',
        description: 'Indoor Olympic-standard shooting range with electronic targets.'
      },
      {
        label: 'Aquatics & Swimming',
        href: '#sports',
        description: 'Temperature-controlled swimming pool with qualified coaches.'
      },
      {
        label: 'Outdoor & Racquet Sports',
        href: '#sports',
        description: 'Lawn tennis, squash, badminton, cricket pitch, and football turf.'
      }
    ]
  },
  {
    label: 'Boarding Life',
    href: '#boarding',
    children: [
      {
        label: 'Hostel Residences',
        href: '#boarding',
        description: 'Separate, air-cooled and air-conditioned wings for boys and girls.'
      },
      {
        label: 'Nutritious Dining',
        href: '#boarding',
        description: 'Wholesome, dietitian-supervised vegetarian multi-cuisine menu.'
      },
      {
        label: 'Pastoral Care & Health',
        href: '#boarding',
        description: '24/7 resident medical infirmary and dedicated housemasters.'
      },
      {
        label: 'Daily Gurukul Routine',
        href: '#boarding',
        description: 'Balanced schedule of morning yoga, classes, sports, and study prep.'
      }
    ]
  },
  {
    label: 'Beyond Academics',
    href: '#beyond-academics',
    children: [
      {
        label: 'Performing & Visual Arts',
        href: '#beyond-academics',
        description: 'Music studios, classical dance hall, pottery, and theatre.'
      },
      {
        label: 'Clubs & MUN',
        href: '#beyond-academics',
        description: 'Model United Nations, debating society, astronomy, and eco club.'
      },
      {
        label: 'Himalayan Expeditions',
        href: '#beyond-academics',
        description: 'Nature trekking, leadership camps, and outbound community service.'
      }
    ]
  },
  {
    label: 'Admissions',
    href: '#admissions'
  },
  {
    label: 'Contact',
    href: '#contact'
  }
];
