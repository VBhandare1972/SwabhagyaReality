import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us — Swabhagya Realty Nashik',
  description: 'Discover Swabhagya Realty — 14 years of excellence, 600+ happy families. Your trusted real estate partner in Nashik.',
};

// TEAM Data Definition with existing images
const TEAM = [
  {
    name: "Suresh Kulkarni",
    role: "Founder & Director",
    bio: "12 years in Nashik real estate. Personally oversees every major transaction and builder tie-up. His philosophy: a deal is only done when the buyer is at peace.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80"
  },
  {
    name: "Priya Marathe",
    role: "Senior Property Advisor",
    bio: "Specialist in residential properties across Gangapur Road and College Road corridors. Known for her clear explanations of complex documentation.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80"
  },
  {
    name: "Rahul Desai",
    role: "Legal & Documentation Head",
    bio: "8 years in property law. Handles all agreement drafting, stamp duty optimization, and registration workflows in-house, with zero outsourcing.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
  }
];

// Enhanced Testimonials Data
const ENHANCED_TESTIMONIALS = [
  {
    name: "Amit Deshmukh",
    role: "Software Engineer, Pune",
    quote: "Found our dream 3 BHK on College Road within 3 weeks. The team handled everything — from shortlist to registration. Truly professional.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    location: "Pune",
    achievement: "Found perfect home in 3 weeks"
  },
  {
    name: "Sunita Joshi",
    role: "IT Professional, Dubai",
    quote: "As an NRI investor, I couldn't visit Nashik. Swabhagya coordinated everything remotely — site videos, legal checks, and registration by PoA. Seamless.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    location: "Dubai",
    achievement: "100% Remote Transaction"
  },
  {
    name: "Kavita Patil",
    role: "Doctor, Nashik",
    quote: "The EMI calculator and property comparison tool helped me decide between three projects. Transparent pricing, zero pressure. Booked Greenfields in 48 hours.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    location: "Nashik",
    achievement: "Quick 48-Hour Decision"
  }
];

// SVG Icons
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 1L8.5 5L12 5.5L9.5 8L10.5 12L7 10L3.5 12L4.5 8L2 5.5L5.5 5L7 1Z" fill="#9AB17A"/>
  </svg>
);

const AwardIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="5" stroke="#9AB17A" strokeWidth="1.2"/>
    <path d="M7 4V7L9 9" stroke="#9AB17A" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M4 13L7 11L10 13" stroke="#9AB17A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 1.5H4.5L5.5 4L4 5C4.5 6.5 5.5 7.5 7 8L8 6.5L10.5 7.5V9.5C10.5 10 10 10.5 9.5 10.5C6 10.5 1.5 6 1.5 2.5C1.5 2 2 1.5 2.5 1.5Z" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MessageIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1.5H3C2 1.5 1.5 2 1.5 3V7.5C1.5 8.5 2 9 3 9H4.5L6 10.5L7.5 9H9C10 9 10.5 8.5 10.5 7.5V3C10.5 2 10 1.5 9 1.5Z" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TargetIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2"/>
    <circle cx="20" cy="20" r="12" stroke="white" strokeWidth="1.5" strokeDasharray="4 4"/>
    <circle cx="20" cy="20" r="4" fill="white"/>
    <path d="M20 2V8M20 32V38M2 20H8M32 20H38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CompassIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2"/>
    <path d="M20 2L24 12L20 16L16 12L20 2Z" fill="white"/>
    <path d="M20 38L16 28L20 24L24 28L20 38Z" fill="white"/>
    <circle cx="20" cy="20" r="3" fill="white"/>
  </svg>
);

export default function AboutPage() {
  const milestones = [
    { 
      year: '2012', 
      title: 'The Humble Beginning', 
      desc: 'Founded in Nashik with a small office on Gangapur Road. Started with a team of 3 passionate visionaries who believed in transparent real estate transactions.', 
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&q=80',
      achievement: 'First successful deal closed'
    },
    { 
      year: '2015', 
      title: 'First Major Milestone', 
      desc: 'Crossed 100 families served milestone. Expanded our portfolio to include premium commercial properties. Team grew to 8 dedicated professionals.', 
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80',
      achievement: '100+ families served'
    },
    { 
      year: '2018', 
      title: 'Full-Service Integration', 
      desc: 'Launched our dedicated legal & documentation desk for end-to-end service. Partnered with top banks for home loan assistance.', 
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&q=80',
      achievement: 'Complete service ecosystem'
    },
    { 
      year: '2021', 
      title: 'Major Expansion', 
      desc: 'Opened our state-of-the-art headquarters on College Road. Reached ₹25Cr in transacted assets. Expanded team to 18 members.', 
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80',
      achievement: '₹25Cr+ transactions'
    },
    { 
      year: '2024', 
      title: 'Digital Transformation', 
      desc: 'Celebrated 12 years of unwavering trust with 500+ happy families. Launched our comprehensive digital property platform.', 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80',
      achievement: '500+ families served'
    },
    { 
      year: '2026', 
      title: 'The Future Vision', 
      desc: 'Proudly serving 600+ families with ₹75Cr+ in successful transactions. Expanding to premium villa projects.', 
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&q=80',
      achievement: '600+ families & growing'
    },
  ];

  const coreValues = [
    { 
      title: 'Transparency First', 
      desc: 'We share everything — price breakdowns, builder credentials, market data. Nothing is hidden.',
      detail: 'Complete visibility in every transaction',
      tag: 'Open Books',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&q=80',
      alt: 'Transparent glass showing clear view'
    },
    { 
      title: 'Rooted in Nashik', 
      desc: '14 years of local knowledge. We know every micro-market, every project, every builder.',
      detail: 'Deep local expertise',
      tag: 'Local Experts',
      image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=300&q=80',
      alt: 'Nashik city local landmark'
    },
    { 
      title: 'Precision at Every Step', 
      desc: 'From RERA checks to registration — every step is handled with care and accuracy.',
      detail: 'Meticulous attention to detail',
      tag: 'Zero Errors',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=300&q=80',
      alt: 'Precision measuring tools'
    },
    { 
      title: 'People First', 
      desc: 'We measure success by families settled, not units sold. Your wellbeing is our only metric.',
      detail: 'Relationships over transactions',
      tag: 'Family First',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&q=80',
      alt: 'Happy family celebrating new home'
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <div className="hero-advanced">
        <div className="hero-bg-overlay"></div>
        <video className="hero-bg-video" autoPlay loop muted playsInline>
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4" type="video/mp4" />
        </video>
        <div className="hero-content-advanced">
          <div className="hero-badge"><StarIcon /> 14 Years of Excellence <StarIcon /></div>
          <h1 className="hero-title-advanced">14 years of trust.<br />600+ families home.</h1>
          <p className="hero-desc-advanced">Swabhagya Realty was founded on a simple belief — that buying a home should feel like gaining, not losing, peace of mind.</p>
          <div className="hero-stats-advanced">
            <div className="hero-stat"><span className="stat-num">₹75Cr+</span><span>Assets Transacted</span></div>
            <div className="hero-stat"><span className="stat-num">25+</span><span>Projects</span></div>
            <div className="hero-stat"><span className="stat-num">98%</span><span>Satisfaction</span></div>
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <section className="sec sec-border">
        <p className="label">Who we are</p>
        <div className="about-story-grid">
          <div>
            <h2 className="h2">Built from Nashik,<br />for Nashik.</h2>
            <p className="sub" style={{ marginBottom: '1.5rem' }}>
              Since 2012, we&apos;ve been the quiet confidence behind some of Nashik&apos;s most
              successful property transactions. We don't just sell houses; we build lifelong relationships.
            </p>
            <div className="stats-row">
              {[
                { val: '₹75Cr+', lbl: 'Assets Transacted' },
                { val: '25+', lbl: 'Projects Completed' },
                { val: '98%', lbl: 'Client Satisfaction' },
                { val: '14', lbl: 'Years of Excellence' },
              ].map((s) => (
                <div key={s.lbl} className="stat-box">
                  <div className="stat-value">{s.val}</div>
                  <div className="stat-label">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-img-wrap">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Swabhagya Realty office Nashik"
              fill
              style={{ objectFit: 'cover' }}
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="journey-section">
        <div className="journey-header">
          <p className="label">The Journey</p>
          <h2 className="h2">Milestones That Define Us</h2>
        </div>

        <div className="journey-timeline">
          {milestones.map((item, idx) => (
            <div className={`journey-card ${idx % 2 === 0 ? 'left' : 'right'}`} key={item.year}>
              <div className="journey-card-image">
                <Image src={item.image} alt={item.title} width={400} height={260} unoptimized />
                <div className="journey-year-badge">{item.year}</div>
              </div>
              <div className="journey-card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="journey-achievement">
                  <span className="achievement-badge"><AwardIcon /> {item.achievement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-semi-dark">
        <div className="vm-container">
          <div className="vm-header">
            <p className="label">Our Direction</p>
            <h2 className="h2">Vision & Mission</h2>
            <p className="vm-subhead">Guiding principles that drive everything we do</p>
          </div>
          
          <div className="vm-grid">
            <div className="vm-card vision-card">
              <div className="vm-card-header">
                <div className="vm-icon-wrapper">
                  <div className="vm-icon-bg">
                    <TargetIcon />
                  </div>
                </div>
                <h3>Our Vision</h3>
              </div>
              <div className="vm-card-body">
                <p className="vm-quote">"To be the most trusted name in Nashik real estate"</p>
                <p className="vm-description">We envision a future where every property transaction is built on unwavering trust, complete transparency, and mutual respect.</p>
                <div className="vm-keywords">
                  <span><StarIcon /> Trust</span>
                  <span><StarIcon /> Transparency</span>
                  <span><StarIcon /> Excellence</span>
                </div>
              </div>
              <div className="vm-card-footer">
                <span>Where every transaction is as honest as a handshake.</span>
              </div>
            </div>

            <div className="vm-card mission-card">
              <div className="vm-card-header">
                <div className="vm-icon-wrapper">
                  <div className="vm-icon-bg">
                    <CompassIcon />
                  </div>
                </div>
                <h3>Our Mission</h3>
              </div>
              <div className="vm-card-body">
                <p className="vm-quote">"Simplify the most complex financial decision of your life"</p>
                <p className="vm-description">We are committed to making your home buying journey seamless, stress-free, and rewarding by providing expert guidance.</p>
                <div className="vm-keywords">
                  <span><StarIcon /> Simplify</span>
                  <span><StarIcon /> Expertise</span>
                  <span><StarIcon /> Care</span>
                </div>
              </div>
              <div className="vm-card-footer">
                <span>Through transparency, expertise, and genuine care.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-enhanced">
        <div className="cv-container">
          <div className="cv-header">
            <p className="label">What guides us</p>
            <h2 className="h2">Our Core Values</h2>
            <p className="cv-subhead">The principles that shape our culture and define our service</p>
          </div>

          <div className="cv-grid">
            {coreValues.map((value) => (
              <div className="cv-card" key={value.title}>
                <div className="cv-card-inner">
                  <div className="cv-image-wrapper">
                    <div className="cv-image-border">
                      <Image 
                        src={value.image} 
                        alt={value.alt} 
                        width={100} 
                        height={100} 
                        className="cv-image"
                        unoptimized
                      />
                    </div>
                  </div>
                  <div className="cv-tag-wrapper">
                    <span className="cv-tag">{value.tag}</span>
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                  <div className="cv-detail-line">
                    <StarIcon />
                    <span>{value.detail}</span>
                    <StarIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Both buttons go to Contact page */}
      <section className="team-vibrant">
        <div className="team-container">
          <div className="team-header">
            <p className="label">Our people</p>
            <h2 className="h2">Meet the Experts</h2>
            <p className="team-subhead">Passionate professionals dedicated to your dream home</p>
          </div>

          <div className="team-vibrant-grid">
            {TEAM.map((member) => (
              <div className="team-vibrant-card" key={member.name}>
                <div className="team-card-bg"></div>
                <div className="team-vibrant-image">
                  <Image src={member.img} alt={member.name} width={130} height={130} className="team-vibrant-avatar" unoptimized />
                  <div className="team-status-dot"></div>
                </div>
                <h3>{member.name}</h3>
                <p className="team-vibrant-role">{member.role}</p>
                <p className="team-vibrant-bio">{member.bio}</p>
                <div className="team-vibrant-contact">
                  <Link href="/contact" className="team-contact-btn">
                    <PhoneIcon /> Contact
                  </Link>
                  <Link href="/contact" className="team-message-btn">
                    <MessageIcon /> Message
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-beautiful">
        <div className="testi-container">
          <div className="testi-header">
            <p className="label">What clients say</p>
            <h2 className="h2">Trusted by Families Across Nashik</h2>
            <p className="testi-subhead">Real experiences from our happy customers</p>
          </div>

          <div className="testi-beautiful-grid">
            {ENHANCED_TESTIMONIALS.map((t, i) => (
              <div className="testi-beautiful-card" key={i}>
                <div className="testi-card-inner">
                  <div className="testi-beautiful-quote">❝</div>
                  <div className="testi-beautiful-stars">★★★★★</div>
                  <p className="testi-beautiful-text">{t.quote}</p>
                  <div className="testi-beautiful-author">
                    <Image src={t.image} alt={t.name} width={50} height={50} className="testi-beautiful-avatar" unoptimized />
                    <div>
                      <h4>{t.name}</h4>
                      <p>{t.role}</p>
                    </div>
                  </div>
                  <div className="testi-achievement-badge">
                    <span className="badge-green"><AwardIcon /> {t.achievement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        /* Hero Section */
        .hero-advanced {
          position: relative;
          width: 100%;
          height: 90vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .hero-bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        
        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%);
          z-index: 1;
        }
        
        .hero-content-advanced {
          position: relative;
          z-index: 2;
          text-align: center;
          color: #fff;
          max-width: 800px;
          padding: 2rem;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(154, 177, 122, 0.2);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.8rem;
          margin-bottom: 1.5rem;
          letter-spacing: 2px;
          color: #C3CC9B;
        }
        
        .hero-title-advanced {
          font-size: 3rem;
          font-weight: 600;
          line-height: 1.2;
          margin-bottom: 1rem;
        }
        
        @media (min-width: 768px) {
          .hero-title-advanced {
            font-size: 4.5rem;
          }
        }
        
        .hero-desc-advanced {
          font-size: 1rem;
          color: rgba(255,255,255,0.9);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .hero-stats-advanced {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }
        
        .hero-stat {
          text-align: center;
        }
        
        .hero-stat .stat-num {
          display: block;
          font-size: 1.8rem;
          font-weight: 700;
          color: #9AB17A;
        }
        
        .hero-stat span:last-child {
          font-size: 0.75rem;
          opacity: 0.9;
          letter-spacing: 1px;
        }

        /* Who We Are */
        .sec {
          padding: 5rem 1.5rem;
        }
        
        @media (min-width: 768px) {
          .sec {
            padding: 6rem 3rem;
          }
        }
        
        .label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #9AB17A;
          font-weight: 600;
          margin-bottom: 1rem;
          display: block;
        }
        
        .h2 {
          font-size: 2rem;
          font-weight: 600;
          color: #2C2C1E;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }
        
        @media (min-width: 768px) {
          .h2 {
            font-size: 2.5rem;
          }
        }
        
        .sub {
          font-size: 0.9rem;
          color: #5C5C42;
          line-height: 1.6;
        }
        
        .about-story-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        @media (min-width: 768px) {
          .about-story-grid {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
          }
        }
        
        .about-img-wrap {
          position: relative;
          height: 300px;
          border-radius: 24px;
          overflow: hidden;
        }
        
        @media (min-width: 768px) {
          .about-img-wrap {
            height: 400px;
          }
        }
        
        .stats-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 2rem;
        }
        
        @media (min-width: 768px) {
          .stats-row {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
        }
        
        .stat-box {
          text-align: left;
        }
        
        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 500;
          color: #9AB17A;
        }
        
        .stat-label {
          font-size: 0.65rem;
          color: #9A9A7A;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 0.3rem;
        }

        /* Journey Section */
        .journey-section {
          padding: 5rem 1.5rem;
          background: linear-gradient(135deg, #EDE9DE 0%, #F5F2EA 100%);
        }
        
        @media (min-width: 768px) {
          .journey-section {
            padding: 6rem 3rem;
          }
        }
        
        .journey-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        
        .journey-timeline {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .journey-card {
          display: flex;
          margin-bottom: 4rem;
          gap: 2rem;
        }
        
        .journey-card.left {
          flex-direction: row;
        }
        
        .journey-card.right {
          flex-direction: row-reverse;
        }
        
        @media (max-width: 768px) {
          .journey-card.left,
          .journey-card.right {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
        
        .journey-card-image {
          flex: 1;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          min-height: 260px;
        }
        
        .journey-card-image img {
          width: 100%;
          height: 260px;
          object-fit: cover;
        }
        
        .journey-year-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          background: #9AB17A;
          color: #fff;
          padding: 0.35rem 1rem;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 700;
          z-index: 2;
        }
        
        .journey-card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .journey-card-content h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #2C2C1E;
          margin-bottom: 0.75rem;
        }
        
        .journey-card-content p {
          font-size: 0.85rem;
          color: #5C5C42;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        
        .achievement-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.3rem 1rem;
          background: rgba(154, 177, 122, 0.12);
          border-radius: 25px;
          font-size: 0.7rem;
          color: #9AB17A;
          font-weight: 500;
        }

        /* Vision & Mission Section */
        .vision-mission-semi-dark {
          padding: 5rem 1.5rem;
          background: linear-gradient(135deg, #E4DFB5 0%, #FBE8CE 100%);
        }
        
        @media (min-width: 768px) {
          .vision-mission-semi-dark {
            padding: 6rem 3rem;
          }
        }
        
        .vm-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .vm-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .vm-subhead {
          font-size: 0.9rem;
          color: #9A9A7A;
          margin-top: 0.5rem;
        }
        
        .vm-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        @media (min-width: 768px) {
          .vm-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }
        
        .vm-card {
          background: #F5F2EA;
          border-radius: 24px;
          border: 1px solid rgba(154, 177, 122, 0.32);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .vm-card:hover {
          transform: translateY(-5px);
          border-color: #9AB17A;
          box-shadow: 0 15px 35px rgba(154, 177, 122, 0.15);
        }
        
        .vm-card-header {
          text-align: center;
          padding: 2rem 2rem 1rem;
          border-bottom: 1px solid rgba(154, 177, 122, 0.18);
        }
        
        .vm-icon-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }
        
        .vm-icon-bg {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #9AB17A, #C3CC9B);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .vm-card-header h3 {
          font-size: 1.6rem;
          font-weight: 600;
          color: #2C2C1E;
          margin: 0;
        }
        
        .vm-card-body {
          padding: 1.5rem 2rem;
        }
        
        .vm-quote {
          font-size: 1.1rem;
          font-weight: 500;
          color: #9AB17A;
          font-style: italic;
          text-align: center;
          margin-bottom: 1rem;
        }
        
        .vm-description {
          font-size: 0.9rem;
          color: #5C5C42;
          line-height: 1.7;
          text-align: center;
          margin-bottom: 1.25rem;
        }
        
        .vm-keywords {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }
        
        .vm-keywords span {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          padding: 0.3rem 0.8rem;
          background: rgba(154, 177, 122, 0.1);
          border-radius: 20px;
          color: #9AB17A;
        }
        
        .vm-card-footer {
          padding: 1rem 2rem 1.5rem;
          text-align: center;
          border-top: 1px solid rgba(154, 177, 122, 0.18);
          font-size: 0.85rem;
          color: #9A9A7A;
          font-style: italic;
        }

        /* Core Values Section */
        .core-values-enhanced {
          padding: 5rem 1.5rem;
          background: linear-gradient(135deg, #F5F2EA 0%, #EDE9DE 100%);
        }
        
        @media (min-width: 768px) {
          .core-values-enhanced {
            padding: 6rem 3rem;
          }
        }
        
        .cv-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .cv-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .cv-subhead {
          font-size: 0.9rem;
          color: #9A9A7A;
          margin-top: 0.5rem;
        }
        
        .cv-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        @media (min-width: 768px) {
          .cv-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
        
        @media (min-width: 1024px) {
          .cv-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
        }
        
        .cv-card {
          background: #F5F2EA;
          border-radius: 24px;
          padding: 2rem;
          border: 1px solid rgba(154, 177, 122, 0.32);
          transition: all 0.4s ease;
          text-align: center;
        }
        
        .cv-card:hover {
          transform: translateY(-8px);
          border-color: #9AB17A;
          box-shadow: 0 20px 40px rgba(154, 177, 122, 0.15);
        }
        
        .cv-image-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 1.25rem;
        }
        
        .cv-image-border {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          padding: 4px;
          background: linear-gradient(135deg, #9AB17A, #C3CC9B);
        }
        
        .cv-image {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }
        
        .cv-tag {
          display: inline-block;
          font-size: 0.7rem;
          padding: 0.35rem 1rem;
          background: rgba(154, 177, 122, 0.12);
          color: #9AB17A;
          border-radius: 30px;
          margin-bottom: 1rem;
        }
        
        .cv-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2C2C1E;
          margin-bottom: 0.75rem;
        }
        
        .cv-card p {
          font-size: 0.85rem;
          color: #5C5C42;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .cv-detail-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(154, 177, 122, 0.18);
          font-size: 0.75rem;
          color: #9A9A7A;
        }

        /* Team Section */
        .team-vibrant {
          padding: 5rem 1.5rem;
          background: linear-gradient(135deg, #EDE9DE 0%, #E4DFB5 100%);
        }
        
        @media (min-width: 768px) {
          .team-vibrant {
            padding: 6rem 3rem;
          }
        }
        
        .team-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .team-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .team-subhead {
          font-size: 0.9rem;
          color: #9A9A7A;
          margin-top: 0.5rem;
        }
        
        .team-vibrant-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        @media (min-width: 768px) {
          .team-vibrant-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
        
        @media (min-width: 1024px) {
          .team-vibrant-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }
        
        .team-vibrant-card {
          background: #F5F2EA;
          border-radius: 28px;
          padding: 2rem;
          text-align: center;
          position: relative;
          transition: all 0.4s ease;
          border: 1px solid rgba(154, 177, 122, 0.32);
        }
        
        .team-vibrant-card:hover {
          transform: translateY(-10px);
          border-color: #9AB17A;
          box-shadow: 0 25px 45px rgba(154, 177, 122, 0.2);
        }
        
        .team-card-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(135deg, #9AB17A, #C3CC9B);
          opacity: 0.1;
          border-radius: 28px 28px 0 0;
        }
        
        .team-vibrant-image {
          position: relative;
          display: inline-block;
          margin-bottom: 1rem;
        }
        
        .team-vibrant-avatar {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #9AB17A;
          position: relative;
          z-index: 1;
        }
        
        .team-status-dot {
          position: absolute;
          bottom: 5px;
          right: 5px;
          width: 16px;
          height: 16px;
          background: #4ade80;
          border-radius: 50%;
          border: 2px solid #F5F2EA;
          z-index: 2;
        }
        
        .team-vibrant-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2C2C1E;
          margin-bottom: 0.25rem;
        }
        
        .team-vibrant-role {
          font-size: 0.7rem;
          color: #9AB17A;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        
        .team-vibrant-bio {
          font-size: 0.8rem;
          color: #5C5C42;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        
        .team-vibrant-contact {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
        }
        
        .team-contact-btn, .team-message-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.4rem 1rem;
          border-radius: 25px;
          font-size: 0.7rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
          text-decoration: none;
        }
        
        .team-contact-btn {
          background: #9AB17A;
          color: #fff;
        }
        
        .team-contact-btn:hover {
          background: #839A65;
          transform: scale(1.05);
        }
        
        .team-message-btn {
          background: transparent;
          border: 1px solid rgba(154, 177, 122, 0.32);
          color: #2C2C1E;
        }
        
        .team-message-btn:hover {
          border-color: #9AB17A;
          transform: scale(1.05);
        }

        /* Testimonials Section */
        .testimonials-beautiful {
          padding: 5rem 1.5rem;
          background: linear-gradient(135deg, #FBE8CE 0%, #F5F2EA 100%);
        }
        
        @media (min-width: 768px) {
          .testimonials-beautiful {
            padding: 6rem 3rem;
          }
        }
        
        .testi-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .testi-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .testi-subhead {
          font-size: 0.9rem;
          color: #9A9A7A;
          margin-top: 0.5rem;
        }
        
        .testi-beautiful-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }
        
        @media (min-width: 1024px) {
          .testi-beautiful-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }
        }
        
        .testi-beautiful-card {
          background: #F5F2EA;
          border-radius: 24px;
          padding: 2rem;
          transition: all 0.4s ease;
          border: 1px solid rgba(154, 177, 122, 0.32);
          position: relative;
        }
        
        .testi-beautiful-card:hover {
          transform: translateY(-8px);
          border-color: #9AB17A;
          box-shadow: 0 20px 35px rgba(154, 177, 122, 0.15);
        }
        
        .testi-card-inner {
          position: relative;
        }
        
        .testi-beautiful-quote {
          font-size: 4rem;
          color: #9AB17A;
          font-family: 'Cormorant Garamond', serif;
          opacity: 0.2;
          position: absolute;
          top: -20px;
          left: -10px;
        }
        
        .testi-beautiful-stars {
          color: #f5b042;
          font-size: 0.85rem;
          margin-bottom: 1rem;
          letter-spacing: 3px;
        }
        
        .testi-beautiful-text {
          font-size: 0.85rem;
          color: #5C5C42;
          line-height: 1.7;
          margin-bottom: 1rem;
          font-style: italic;
          position: relative;
          z-index: 1;
        }
        
        .testi-beautiful-author {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(154, 177, 122, 0.18);
          margin-bottom: 0.75rem;
        }
        
        .testi-beautiful-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
        
        .testi-beautiful-author h4 {
          font-size: 0.9rem;
          font-weight: 600;
          color: #2C2C1E;
          margin-bottom: 0.2rem;
        }
        
        .testi-beautiful-author p {
          font-size: 0.7rem;
          color: #9A9A7A;
        }
        
        .badge-green {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.25rem 0.75rem;
          background: rgba(154, 177, 122, 0.12);
          border: 1px solid rgba(154, 177, 122, 0.3);
          border-radius: 20px;
          font-size: 0.65rem;
          color: #9AB17A;
        }
      `}</style>
    </main>
  );
}