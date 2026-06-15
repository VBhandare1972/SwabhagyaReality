// Shared project data for Swabhagya Realty

export interface Project {
  id: number;
  name: string;
  loc: string;
  type: 'residential' | 'commercial';
  status: 'available' | 'launching' | 'sold';
  price: string;
  bhk: string;
  area: string;
  amenities: string;
  rera: string;
  desc: string;
  thumb: string;
  possession: string;
  progress: number;
  // Unsplash image URL
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 0,
    name: 'Greenfields Residency',
    loc: 'Gangapur Road, Nashik',
    type: 'residential',
    status: 'available',
    price: '₹58L – ₹82L',
    bhk: '2 & 3 BHK',
    area: '850 – 1,250 sq.ft',
    amenities: 'Clubhouse, Garden, 24/7 Security, Gym',
    rera: 'P52100001',
    desc: 'Landscaped gated township with premium amenities.',
    thumb: '🌿',
    possession: 'Dec 2025',
    progress: 78,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  },
  {
    id: 1,
    name: 'Skyline Heights',
    loc: 'College Road, Nashik',
    type: 'residential',
    status: 'available',
    price: '₹1.1Cr – ₹1.45Cr',
    bhk: '3 BHK',
    area: '1,450 – 1,800 sq.ft',
    amenities: 'Sky Lounge, Modular Kitchen, Reserve Parking',
    rera: 'P52100002',
    desc: 'Panoramic city views from premium sky villas.',
    thumb: '🌆',
    possession: 'Mar 2026',
    progress: 62,
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  },
  {
    id: 2,
    name: 'Swabhagya Vista',
    loc: 'Nashik Road',
    type: 'residential',
    status: 'launching',
    price: '₹28L – ₹46L',
    bhk: '1 & 2 BHK',
    area: '480 – 760 sq.ft',
    amenities: 'Community Hall, Play Area, CCTV',
    rera: 'P52100003',
    desc: 'Affordable first homes near the highway corridor.',
    thumb: '🏡',
    possession: 'Jun 2027',
    progress: 18,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  },
  {
    id: 3,
    name: 'Commerce Square',
    loc: 'Dwarka Circle, Nashik',
    type: 'commercial',
    status: 'available',
    price: '₹42L – ₹1.8Cr',
    bhk: 'Office / Retail',
    area: '300 – 2,400 sq.ft',
    amenities: 'High Street Retail, Covered Parking, 24/7 Power',
    rera: 'P52100004',
    desc: 'Prime commercial spaces in Nashik\'s business hub.',
    thumb: '🏢',
    possession: 'Ready',
    progress: 100,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
  },
  {
    id: 4,
    name: 'Palm Grove Villas',
    loc: 'Trimbak Road',
    type: 'residential',
    status: 'available',
    price: '₹2.2Cr – ₹3.1Cr',
    bhk: '4 BHK Villa',
    area: '2,800 – 3,600 sq.ft',
    amenities: 'Private Garden, Pool Option, Borewell, Vastu',
    rera: 'P52100005',
    desc: 'Standalone villas on large plots with private gardens.',
    thumb: '🌴',
    possession: 'Ready',
    progress: 100,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
  },
  {
    id: 5,
    name: 'Mangal Enclave',
    loc: 'Satpur MIDC',
    type: 'commercial',
    status: 'sold',
    price: 'Sold Out',
    bhk: 'Warehouse / Industrial',
    area: '1,200 – 8,000 sq.ft',
    amenities: 'Loading Bay, 3-Phase Power, NH Access',
    rera: 'P52100006',
    desc: 'Industrial warehouses — fully transacted.',
    thumb: '🏭',
    possession: 'Delivered',
    progress: 100,
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
  },
  {
    id: 6,
    name: 'Anand Nagar Plots',
    loc: 'Ozar, Nashik',
    type: 'residential',
    status: 'available',
    price: '₹18L – ₹35L',
    bhk: 'Plot',
    area: '1,200 – 2,400 sq.ft',
    amenities: 'Gated Society, Roads, Underground Utilities',
    rera: 'P52100007',
    desc: 'NA plots in a planned gated layout with clear title.',
    thumb: '🗺',
    possession: 'Immediate',
    progress: 100,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
  },
  {
    id: 7,
    name: 'Harmony Flats',
    loc: 'Cidco, Nashik',
    type: 'residential',
    status: 'launching',
    price: '₹35L – ₹55L',
    bhk: '2 BHK',
    area: '720 – 950 sq.ft',
    amenities: 'Terrace Garden, Solar Power, EV Charging',
    rera: 'P52100008',
    desc: 'Eco-conscious living in the city\'s fastest-growing zone.',
    thumb: '🌱',
    possession: 'Dec 2027',
    progress: 8,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
  },
  {
    id: 8,
    name: 'Silver Arcade',
    loc: 'Mahatma Nagar',
    type: 'commercial',
    status: 'available',
    price: '₹65L – ₹2.4Cr',
    bhk: 'Showroom / Office',
    area: '600 – 3,200 sq.ft',
    amenities: 'Ground+3 Floors, Generator, Lift',
    rera: 'P52100009',
    desc: 'High-visibility commercial units on a main arterial road.',
    thumb: '🛍',
    possession: 'Ready',
    progress: 100,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
  },
];

export const BANKS = ['SBI', 'HDFC', 'ICICI', 'Axis', 'Bank of Baroda', 'Kotak', 'PNB Housing'];

export const TESTIMONIALS = [
  {
    name: 'Amit Deshmukh',
    sub: 'Software Engineer, Pune',
    q: '"Found our dream 3 BHK on College Road within 3 weeks. The team handled everything — from shortlist to registration. Truly professional."',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    name: 'Sunita Joshi',
    sub: 'IT Professional, Dubai',
    q: '"As an NRI investor, I couldn\'t visit Nashik. Swabhagya coordinated everything remotely — site videos, legal checks, and registration by PoA. Seamless."',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    name: 'Kavita Patil',
    sub: 'Doctor, Nashik',
    q: '"The EMI calculator and property comparison tool helped me decide between three projects. Transparent pricing, zero pressure. Booked Greenfields in 48 hours."',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
  },
  {
    name: 'Ramesh Kulkarni',
    sub: 'Businessman, Nashik',
    q: '"Swabhagya\'s team made buying our first home effortless. Every document, every step — sorted. They truly put the family first."',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
  },
  {
    name: 'Priya Sharma',
    sub: 'Teacher, Nashik',
    q: '"The site visit was arranged same day. The advisor explained everything in simple Marathi. No jargon, no pressure. A wonderful experience overall."',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80',
  },
  {
    name: 'Nikhil Pawar',
    sub: 'Engineer, Mumbai',
    q: '"I was relocating to Nashik and needed to buy fast. Swabhagya shortlisted 4 properties and arranged back-to-back visits in one day. Done deal."',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
];

export const TEAM = [
  {
    initials: 'SK',
    name: 'Suresh Kulkarni',
    role: 'Founder & Director',
    bio: '12 years in Nashik real estate. Personally oversees every major transaction and builder tie-up. His philosophy: a deal is only done when the buyer is at peace.',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80',
  },
  {
    initials: 'PM',
    name: 'Priya Marathe',
    role: 'Senior Property Advisor',
    bio: 'Specialist in residential properties across Gangapur Road and College Road corridors. Known for her clear explanations of complex documentation.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
  },
  {
    initials: 'RD',
    name: 'Rahul Desai',
    role: 'Legal & Documentation Head',
    bio: '8 years in property law. Handles all agreement drafting, stamp duty optimization, and registration workflows in-house, with zero outsourcing.',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80',
  },
];
