import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { TESTIMONIALS } from '@/lib/data';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Why Choose Us — Swabhagya Realty Nashik',
  description: 'Discover why 500+ families trust Swabhagya Realty — transparent pricing, RERA verified listings, expert advisors, and post-sale support in Nashik.',
};

const CLIENT_IMAGES = [
  { name: 'Amit Deshmukh', detail: 'Software Engineer, Pune', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  { name: 'Sunita Joshi', detail: 'IT Professional, Dubai', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
  { name: 'Kavita Patil', detail: 'Doctor, Nashik', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80' },
  { name: 'Ramesh Kulkarni', detail: 'Businessman, Nashik', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
  { name: 'Priya Sharma', detail: 'Teacher, Nashik', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80' },
  { name: 'Nikhil Pawar', detail: 'Engineer, Mumbai', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' },
  { name: 'Meera Jain', detail: 'Entrepreneur, Nashik', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80' },
  { name: 'Suresh Nair', detail: 'Retired Officer, Nashik', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80' },
];

// Professional SVG Icons for Features
const ReraIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L6 16V32L24 44L42 32V16L24 4Z" stroke="#9AB17A" strokeWidth="2" fill="none"/>
    <circle cx="24" cy="24" r="6" stroke="#9AB17A" strokeWidth="2"/>
    <path d="M24 18V24L27 27" stroke="#9AB17A" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const DataIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12H42" stroke="#C3CC9B" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 24H30" stroke="#C3CC9B" strokeWidth="2" strokeLinecap="round"/>
    <path d="M6 36H24" stroke="#C3CC9B" strokeWidth="2" strokeLinecap="round"/>
    <rect x="34" y="18" width="10" height="24" rx="2" stroke="#C3CC9B" strokeWidth="2"/>
    <path d="M37 22V38" stroke="#C3CC9B" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ZeroCostIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="18" stroke="#E4DFB5" strokeWidth="2"/>
    <path d="M18 24H30" stroke="#E4DFB5" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 18V30" stroke="#E4DFB5" strokeWidth="2" strokeLinecap="round"/>
    <path d="M24 6L28 12H20L24 6Z" fill="#E4DFB5"/>
  </svg>
);

const SpeedIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z" stroke="#9AB17A" strokeWidth="2"/>
    <path d="M24 14V24L30 30" stroke="#9AB17A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M34 8L38 4" stroke="#9AB17A" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const BankIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="20" width="36" height="20" rx="2" stroke="#C3CC9B" strokeWidth="2"/>
    <path d="M12 20V12H36V20" stroke="#C3CC9B" strokeWidth="2"/>
    <path d="M24 26V34" stroke="#C3CC9B" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="30" r="2" fill="#C3CC9B"/>
  </svg>
);

const SupportIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 8C14.0589 8 6 14.0589 6 22V34C6 36.2091 7.79086 38 10 38H14C16.2091 38 18 36.2091 18 34V28C18 25.7909 16.2091 24 14 24H10V22C10 14.0589 18 8 24 8Z" stroke="#E4DFB5" strokeWidth="2"/>
    <path d="M38 24H34C31.7909 24 30 25.7909 30 28V34C30 36.2091 31.7909 38 34 38H38C40.2091 38 42 36.2091 42 34V28C42 25.7909 40.2091 24 38 24Z" stroke="#E4DFB5" strokeWidth="2"/>
  </svg>
);

const LocalIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L6 16V32L24 44L42 32V16L24 4Z" stroke="#9AB17A" strokeWidth="2"/>
    <path d="M24 20C26.2091 20 28 18.2091 28 16C28 13.7909 26.2091 12 24 12C21.7909 12 20 13.7909 20 16C20 18.2091 21.7909 20 24 20Z" stroke="#9AB17A" strokeWidth="2"/>
    <path d="M24 20V28" stroke="#9AB17A" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 30H30" stroke="#9AB17A" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const TechIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="32" height="32" rx="4" stroke="#C3CC9B" strokeWidth="2"/>
    <path d="M20 16L28 24L20 32" stroke="#C3CC9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="32" cy="24" r="2" fill="#C3CC9B"/>
  </svg>
);

const LegalIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 4L6 14V24C6 32 14 38 24 42C34 38 42 32 42 24V14L24 4Z" stroke="#E4DFB5" strokeWidth="2"/>
    <path d="M20 24L22 26L28 20" stroke="#E4DFB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 34H32" stroke="#E4DFB5" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// SVG Icons for Stats
const TrendingUpIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M3 25L11 17L16 22L28 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 10H28V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HeartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M16 27.5L13.5 25.2C7.5 19.7 3 15.6 3 10.5C3 6.4 6.1 3.5 10 3.5C12.1 3.5 14.1 4.6 16 6.5C17.9 4.6 19.9 3.5 22 3.5C25.9 3.5 29 6.4 29 10.5C29 15.6 24.5 19.7 18.5 25.2L16 27.5Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

const BuildingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="6" y="12" width="20" height="15" rx="1.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M11 6H21V12H11V6Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M13 16H19M13 20H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 9V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ConsultationIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="16" r="6" stroke="#9AB17A" strokeWidth="2"/>
    <path d="M14 28C14 24.7 16.7 22 20 22H28C31.3 22 34 24.7 34 28" stroke="#9AB17A" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="24" cy="32" r="10" stroke="#9AB17A" strokeWidth="2"/>
    <path d="M24 28V32L26 34" stroke="#9AB17A" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const SiteVisitIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M24 6L8 18L24 30L40 18L24 6Z" stroke="#C3CC9B" strokeWidth="2" fill="none"/>
    <path d="M8 18V32L24 44L40 32V18" stroke="#C3CC9B" strokeWidth="2" fill="none"/>
    <path d="M24 30V44" stroke="#C3CC9B" strokeWidth="2"/>
  </svg>
);

const HandoverIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path d="M12 20L24 12L36 20L24 28L12 20Z" stroke="#FBE8CE" strokeWidth="2" fill="none"/>
    <path d="M24 28V40" stroke="#FBE8CE" strokeWidth="2"/>
    <path d="M16 24V36" stroke="#FBE8CE" strokeWidth="2"/>
    <path d="M32 24V36" stroke="#FBE8CE" strokeWidth="2"/>
    <path d="M18 40H30" stroke="#FBE8CE" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const FEATURES = [
  {
    icon: <ReraIcon />,
    title: 'RERA Verified Only',
    desc: 'Every project passes RERA check, title search, and builder background verification. We never list a property we wouldn\'t buy ourselves.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&q=80'
  },
  {
    icon: <DataIcon />,
    title: 'Data-Driven Advice',
    desc: '14 years of transaction data across Nashik micro-markets. We give you real price benchmarks — not inflated listing prices.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80'
  },
  {
    icon: <ZeroCostIcon />,
    title: 'Zero Hidden Charges',
    desc: 'We give you the full cost picture upfront — stamp duty, GST, registration, maintenance — before you sign anything.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80'
  },
  {
    icon: <SpeedIcon />,
    title: 'Speed & Efficiency',
    desc: 'Site visit confirmed in 2 hours. Loan processed in 14 days on average. We move as fast as you do.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80'
  },
  {
    icon: <BankIcon />,
    title: 'Bank Tie-Ups',
    desc: 'Live tie-ups with SBI, HDFC, ICICI, Axis, and more. Competitive rates, parallel processing, no branch visits needed.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80'
  },
  {
    icon: <SupportIcon />,
    title: 'Post-Sale Support',
    desc: 'We don\'t vanish at registration. Possession walkthroughs, snagging lists, builder escalations — all covered.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80'
  },
  {
    icon: <LocalIcon />,
    title: 'Deep Local Roots',
    desc: 'Born in Nashik. We know every lane, every builder, every project — because we\'ve lived this market for 14 years.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80'
  },
  {
    icon: <TechIcon />,
    title: 'Tech-Enabled Buying',
    desc: 'AI chatbot, EMI calculator, property comparison, online booking — all on one platform, available 24/7.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80'
  },
  {
    icon: <LegalIcon />,
    title: 'Legal Expertise In-House',
    desc: 'Our legal team handles agreements, stamp duty optimization, and registration — in plain language, zero outsourcing.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80'
  },
];

// Updated Premium Testimonials
const PREMIUM_TESTIMONIALS = [
  {
    name: "Amit Deshmukh",
    role: "Software Engineer, Pune",
    quote: "Found our dream 3 BHK on College Road within 3 weeks. The team handled everything — from shortlist to registration. Truly professional.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    location: "Pune",
    verified: true
  },
  {
    name: "Sunita Joshi",
    role: "IT Professional, Dubai",
    quote: "As an NRI investor, I couldn't visit Nashik. Swabhagya coordinated everything remotely — site videos, legal checks, and registration by PoA. Seamless.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    location: "Dubai",
    verified: true
  },
  {
    name: "Kavita Patil",
    role: "Doctor, Nashik",
    quote: "The EMI calculator and property comparison tool helped me decide between three projects. Transparent pricing, zero pressure. Booked Greenfields in 48 hours.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    location: "Nashik",
    verified: true
  },
  {
    name: "Ramesh Kulkarni",
    role: "Businessman, Nashik",
    quote: "Swabhagya's team made buying our first home effortless. Every document, every step — sorted. They truly put the family first.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    location: "Nashik",
    verified: true
  },
  {
    name: "Priya Sharma",
    role: "Teacher, Nashik",
    quote: "The site visit was arranged same day. The advisor explained everything in simple Marathi. No jargon, no pressure.",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 5,
    location: "Nashik",
    verified: true
  },
  {
    name: "Nikhil Pawar",
    role: "Engineer, Mumbai",
    quote: "I was relocating to Nashik and needed to buy fast. Swabhagya shortlisted 4 properties and arranged back-to-back visits in one day.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
    location: "Mumbai",
    verified: true
  }
];

export default function WhyUsPage() {
  return (
    <>
      <style>{`
        :root {
          --sage: #9AB17A;
          --moss: #C3CC9B;
          --fern: #E4DFB5;
          --parch: #FBE8CE;
          --bg: #F5F2EA;
          --bg1: #EDE9DE;
          --text1: #2C2C1E;
          --text2: #5C5C42;
          --text3: #9A9A7A;
          --shadow-sm: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02);
          --shadow-md: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -6px rgba(0, 0, 0, 0.02);
          --shadow-lg: 0 25px 30px -12px rgba(0, 0, 0, 0.15);
          --shadow-xl: 0 35px 40px -15px rgba(0, 0, 0, 0.2);
          --transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: var(--text1);
          background: var(--bg);
          overflow-x: hidden;
        }

        /* Hero Section */
        .inner-hero {
          position: relative;
          height: 85vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .inner-hero-img {
          object-fit: cover;
          object-position: center 30%;
          transition: transform 12s ease-out;
        }

        .inner-hero:hover .inner-hero-img {
          transform: scale(1.08);
        }

        .inner-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(44, 44, 30, 0.7) 0%, rgba(44, 44, 30, 0.4) 100%);
        }

        .inner-hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          padding: 0 24px;
          animation: fadeInUp 0.8s ease-out;
        }

        .inner-hero-label {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 6px;
          font-weight: 700;
          color: var(--parch);
          background: rgba(44, 44, 30, 0.3);
          backdrop-filter: blur(8px);
          display: inline-block;
          padding: 10px 24px;
          border-radius: 50px;
          margin-bottom: 24px;
        }

        .inner-hero-h {
          font-size: 4rem;
          font-weight: 800;
          color: white;
          line-height: 1.2;
          margin-bottom: 24px;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
          letter-spacing: -0.02em;
        }

        .inner-hero-sub {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.95);
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Stats Section */
        .stats-modern {
          padding: 80px 24px;
          background: linear-gradient(135deg, var(--bg) 0%, var(--bg1) 100%);
        }

        .stats-modern-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .stat-modern-card {
          background: white;
          border-radius: 28px;
          padding: 40px 24px;
          text-align: center;
          transition: var(--transition);
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(154, 177, 122, 0.2);
        }

        .stat-modern-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: var(--sage);
        }

        .stat-icon-wrapper {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--sage) 0%, var(--moss) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
        }

        .stat-icon-wrapper svg {
          color: white;
        }

        .stat-number-modern {
          font-size: 3rem;
          font-weight: 800;
          color: var(--text1);
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .stat-label-modern {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text2);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .stat-trend {
          display: inline-block;
          margin-top: 12px;
          font-size: 0.7rem;
          color: var(--sage);
          font-weight: 600;
          padding: 4px 12px;
          background: rgba(154, 177, 122, 0.1);
          border-radius: 20px;
        }

        /* Process Section */
        .process-modern {
          padding: 100px 24px;
          background: linear-gradient(135deg, var(--parch) 0%, var(--bg) 100%);
        }

        .process-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .process-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 6px;
          font-weight: 700;
          color: var(--sage);
          margin-bottom: 16px;
          display: inline-block;
        }

        .process-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--text1);
          line-height: 1.2;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .process-subtitle {
          font-size: 1.125rem;
          color: var(--text2);
          max-width: 600px;
          margin: 0 auto;
        }

        .process-grid-modern {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .process-card-modern {
          background: white;
          border-radius: 30px;
          padding: 40px;
          transition: var(--transition);
          border: 1px solid rgba(154, 177, 122, 0.15);
          position: relative;
          overflow: hidden;
        }

        .process-card-modern::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--sage), var(--moss), var(--fern));
          transform: scaleX(0);
          transition: transform 0.5s;
        }

        .process-card-modern:hover::before {
          transform: scaleX(1);
        }

        .process-card-modern:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: var(--sage);
        }

        .process-card-icon {
          margin-bottom: 24px;
        }

        .process-step {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--sage);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .process-card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text1);
          margin-bottom: 16px;
        }

        .process-card-desc {
          font-size: 0.9rem;
          color: var(--text2);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .process-card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--sage);
          font-weight: 600;
          font-size: 0.85rem;
          text-decoration: none;
          transition: gap 0.3s;
        }

        .process-card-link:hover {
          gap: 12px;
        }

        /* Features Section */
        .features-section {
          background: linear-gradient(135deg, var(--bg) 0%, var(--bg1) 100%);
          padding: 80px 24px;
        }

        .features-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card-premium {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          transition: var(--transition);
          border: 1px solid rgba(154, 177, 122, 0.15);
          cursor: pointer;
        }

        .feature-card-premium:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: var(--sage);
        }

        .feature-image-wrapper {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .feature-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .feature-card-premium:hover .feature-image {
          transform: scale(1.08);
        }

        .feature-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(44, 44, 30, 0.4), transparent);
        }

        .feature-icon-overlay {
          position: absolute;
          bottom: -25px;
          left: 20px;
          background: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-sm);
          border: 2px solid var(--sage);
        }

        .feature-icon-overlay svg {
          width: 32px;
          height: 32px;
        }

        .feature-content {
          padding: 32px 24px 24px;
        }

        .feature-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text1);
          margin-bottom: 12px;
        }

        .feature-desc {
          font-size: 0.85rem;
          color: var(--text2);
          line-height: 1.6;
        }

        /* Premium Testimonials Section */
        .testimonials-premium {
          padding: 80px 24px;
          background: linear-gradient(135deg, var(--parch) 0%, var(--bg) 100%);
        }

        .testimonials-premium-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .testimonials-premium-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .testimonial-premium-card {
          background: white;
          border-radius: 28px;
          padding: 32px;
          transition: var(--transition);
          border: 1px solid rgba(154, 177, 122, 0.15);
          position: relative;
          box-shadow: var(--shadow-sm);
        }

        .testimonial-premium-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
          border-color: var(--sage);
        }

        .testimonial-premium-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--sage), var(--moss), var(--fern));
          border-radius: 28px 28px 0 0;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .testimonial-premium-card:hover::after {
          opacity: 1;
        }

        .testimonial-premium-rating {
          display: flex;
          gap: 4px;
          margin-bottom: 20px;
        }

        .testimonial-premium-star {
          color: #f5b042;
          font-size: 1rem;
        }

        .testimonial-premium-quote {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text2);
          margin-bottom: 24px;
          font-style: italic;
          position: relative;
          padding-left: 24px;
        }

        .testimonial-premium-quote::before {
          content: '"';
          position: absolute;
          left: 0;
          top: -10px;
          font-size: 3rem;
          color: var(--sage);
          opacity: 0.3;
          font-family: serif;
        }

        .testimonial-premium-author {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-top: 20px;
          border-top: 1px solid rgba(154, 177, 122, 0.15);
        }

        .testimonial-premium-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--sage);
        }

        .testimonial-premium-info {
          flex: 1;
        }

        .testimonial-premium-name {
          font-weight: 700;
          color: var(--text1);
          font-size: 1rem;
          margin-bottom: 4px;
        }

        .testimonial-premium-role {
          font-size: 0.75rem;
          color: var(--text2);
        }

        .testimonial-premium-location {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.7rem;
          color: var(--sage);
          margin-top: 4px;
        }

        .testimonial-premium-verified {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: rgba(154, 177, 122, 0.1);
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.65rem;
          color: var(--sage);
          font-weight: 600;
        }

        /* Clients Grid */
        .clients-section {
          background: var(--bg1);
          padding: 80px 24px;
        }

        .clients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .client-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: white;
          padding: 16px 24px;
          border-radius: 60px;
          transition: var(--transition);
          border: 1px solid rgba(154, 177, 122, 0.15);
        }

        .client-card:hover {
          transform: translateX(8px);
          border-color: var(--sage);
          box-shadow: var(--shadow-sm);
        }

        .client-img {
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--sage);
        }

        .client-info {
          flex: 1;
        }

        .client-name {
          font-weight: 700;
          color: var(--text1);
          font-size: 0.95rem;
          margin-bottom: 2px;
        }

        .client-detail {
          font-size: 0.7rem;
          color: var(--text2);
        }

        .client-stars {
          font-size: 0.7rem;
          color: #f5b042;
          margin-top: 4px;
          letter-spacing: 2px;
        }

        /* CTA Band */
        .cta-band {
          background: linear-gradient(135deg, var(--sage) 0%, var(--moss) 100%);
          border-radius: 40px;
          margin: 60px auto;
          padding: 70px 48px;
          text-align: center;
          color: white;
          max-width: 1200px;
        }

        .cta-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 6px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .cta-h {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 40px;
          line-height: 1.3;
        }

        .cta-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-block;
          padding: 14px 36px;
          border-radius: 60px;
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition);
          font-size: 0.9rem;
        }

        .btn-p {
          background: white;
          color: var(--sage);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .btn-p:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .btn-o {
          background: transparent;
          border: 2px solid white;
          color: white;
        }

        .btn-o:hover {
          background: white;
          color: var(--sage);
          transform: translateY(-3px);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .inner-hero-h { font-size: 3rem; }
          .process-title { font-size: 2.5rem; }
          .stats-modern-container { grid-template-columns: repeat(2, 1fr); gap: 20px; }
          .process-grid-modern { gap: 20px; }
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonials-premium-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .inner-hero { min-height: 500px; }
          .inner-hero-h { font-size: 2rem; }
          .process-title { font-size: 2rem; }
          .process-grid-modern { grid-template-columns: 1fr; }
          .stats-modern-container { grid-template-columns: 1fr; }
          .cta-band { margin: 40px 20px; padding: 50px 24px; border-radius: 30px; }
          .cta-h { font-size: 1.5rem; }
          .features-grid { grid-template-columns: 1fr; }
          .testimonials-premium-grid { grid-template-columns: 1fr; }
          .clients-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .process-card-modern { padding: 28px; }
          .feature-card-premium { max-width: 100%; }
          .testimonial-premium-card { padding: 24px; }
          .cta-actions { flex-direction: column; align-items: center; }
          .btn { width: 100%; max-width: 280px; text-align: center; }
        }
      `}</style>

      <main>
        {/* Hero Section */}
        <div className="inner-hero">
          <Image
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80"
            alt="Happy family in new home"
            fill
            className="inner-hero-img"
            priority
            unoptimized
          />
          <div className="inner-hero-overlay" />
          <div className="inner-hero-content">
            <p className="inner-hero-label">Why Swabhagya</p>
            <h1 className="inner-hero-h">Nashik&apos;s most trusted<br />real estate partner.</h1>
            <p className="inner-hero-sub">
              14 years. 600+ families. ₹75Cr+ transacted. We&apos;ve built our reputation
              not through advertising — but through honest deals, repeat clients, and
              referrals that never stop coming.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-modern">
          <div className="stats-modern-container">
            <div className="stat-modern-card">
              <div className="stat-icon-wrapper"><HeartIcon /></div>
              <div className="stat-number-modern">600+</div>
              <div className="stat-label-modern">Happy Families</div>
              <div className="stat-trend">↑ Growing every month</div>
            </div>
            <div className="stat-modern-card">
              <div className="stat-icon-wrapper"><TrendingUpIcon /></div>
              <div className="stat-number-modern">98%</div>
              <div className="stat-label-modern">Client Satisfaction</div>
              <div className="stat-trend">⭐ 4.9/5 average rating</div>
            </div>
            <div className="stat-modern-card">
              <div className="stat-icon-wrapper"><BuildingIcon /></div>
              <div className="stat-number-modern">25+</div>
              <div className="stat-label-modern">Projects Delivered</div>
              <div className="stat-trend">✓ 100% RERA verified</div>
            </div>
            <div className="stat-modern-card">
              <div className="stat-icon-wrapper"><ClockIcon /></div>
              <div className="stat-number-modern">14</div>
              <div className="stat-label-modern">Years Experience</div>
              <div className="stat-trend">📈 Since 2012</div>
            </div>
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="process-modern">
          <div className="process-header">
            <p className="process-label">How we work</p>
            <h2 className="process-title">Our 4-Step Process.</h2>
            <p className="process-subtitle">Simple, transparent, and stress-free home buying journey</p>
          </div>
          <div className="process-grid-modern">
            <div className="process-card-modern">
              <div className="process-card-icon"><ConsultationIcon /></div>
              <p className="process-step">Step 01</p>
              <h3 className="process-card-title">Consultation & Shortlisting</h3>
              <p className="process-card-desc">We understand your budget, location preferences, and lifestyle needs, then present only RERA-verified properties that match your criteria perfectly.</p>
              <Link href="/contact" className="process-card-link">Learn More →</Link>
            </div>
            <div className="process-card-modern">
              <div className="process-card-icon"><SiteVisitIcon /></div>
              <p className="process-step">Step 02</p>
              <h3 className="process-card-title">Guided Site Visits</h3>
              <p className="process-card-desc">Our experts accompany you to the shortlisted sites, providing objective pros and cons without any builder pressure or sales tactics.</p>
              <Link href="/book" className="process-card-link">Book a Visit →</Link>
            </div>
            <div className="process-card-modern">
              <div className="process-card-icon"><LegalIcon /></div>
              <p className="process-step">Step 03</p>
              <h3 className="process-card-title">Negotiation & Legal</h3>
              <p className="process-card-desc">We secure the best price and handle all title checks, agreement drafting, and stamp duty optimization with our in-house legal team.</p>
              <Link href="/contact" className="process-card-link">Get Started →</Link>
            </div>
            <div className="process-card-modern">
              <div className="process-card-icon"><HandoverIcon /></div>
              <p className="process-step">Step 04</p>
              <h3 className="process-card-title">Registration & Handover</h3>
              <p className="process-card-desc">From standing by you at the registrar's office to the final key handover and possession checklist — we are there every step of the way.</p>
              <Link href="/contact" className="process-card-link">Talk to Us →</Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <div className="features-header">
            <p className="process-label">Our differentiators</p>
            <h2 className="process-title">9 reasons families choose<br />Swabhagya Realty.</h2>
            <p className="process-subtitle">We've spent 14 years earning trust, one honest deal at a time.</p>
          </div>
          <div className="features-grid">
            {FEATURES.map((f, idx) => (
              <div className="feature-card-premium" key={f.title}>
                <div className="feature-image-wrapper">
                  <Image src={f.image} alt={f.title} width={400} height={180} className="feature-image" unoptimized />
                  <div className="feature-image-overlay"></div>
                  <div className="feature-icon-overlay">{f.icon}</div>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">{f.title}</h3>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Testimonials Section */}
        <div className="testimonials-premium">
          <div className="testimonials-premium-header">
            <p className="process-label">What they say</p>
            <h2 className="process-title">Stories from our clients.</h2>
            <p className="process-subtitle">Real experiences from real people who found their dream home with us</p>
          </div>
          <div className="testimonials-premium-grid">
            {PREMIUM_TESTIMONIALS.map((t, idx) => (
              <div className="testimonial-premium-card" key={idx}>
                <div className="testimonial-premium-rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="testimonial-premium-star">★</span>
                  ))}
                </div>
                <p className="testimonial-premium-quote">{t.quote}</p>
                <div className="testimonial-premium-author">
                  <Image src={t.image} alt={t.name} width={56} height={56} className="testimonial-premium-avatar" unoptimized />
                  <div className="testimonial-premium-info">
                    <div className="testimonial-premium-name">{t.name}</div>
                    <div className="testimonial-premium-role">{t.role}</div>
                    <div className="testimonial-premium-location">
                      <span>📍</span> {t.location}
                    </div>
                  </div>
                  <div className="testimonial-premium-verified">
                    <span>✓</span> Verified
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      

        <Footer />
      </main>
    </>
  );
}