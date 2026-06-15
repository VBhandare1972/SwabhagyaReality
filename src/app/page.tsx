'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/lib/data';
import Footer from '@/components/Footer';

// --- Icon Components ---
const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
    <path d="M4 22h16"/>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
  </svg>
);

// --- HERO COMPONENTS ---

function FadeIn({ children, delay = 0, duration = 1000, className = '' }: { children: React.ReactNode; delay?: number; duration?: number; className?: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity ${duration}ms ease-in-out`,
      }}
    >
      {children}
    </div>
  );
}

function AnimatedHeading({ text, className = '' }: { text: string; className?: string }) {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStart(true), 200);
    return () => clearTimeout(t);
  }, []);

  const lines = text.split('\n');
  return (
    <h1 className={className} style={{ letterSpacing: '-0.02em' }}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} style={{ display: 'block', overflow: 'visible' }}>
          {line.split('').map((char, charIndex) => {
            const prevLinesLength = lines.slice(0, lineIndex).reduce((acc, l) => acc + l.length, 0);
            const delay = (prevLinesLength + charIndex) * 30;
            const isSpace = char === ' ';
            return (
              <span
                key={charIndex}
                style={{
                  display: 'inline-block',
                  opacity: start ? 1 : 0,
                  transform: start ? 'translateX(0)' : 'translateX(-18px)',
                  transition: `opacity 500ms ease-out ${delay}ms, transform 500ms cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}ms`,
                  whiteSpace: 'pre',
                }}
              >
                {isSpace ? '\u00A0' : char}
              </span>
            );
          })}
        </div>
      ))}
    </h1>
  );
}

// --- MAIN PAGE ---

const SERVICES = [
  { 
    title: 'Residential Sales', 
    desc: 'From premium 2 & 3 BHK apartments to exclusive villas. We only list RERA-verified properties with clear titles.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    alt: 'Luxury modern residential apartment building'
  },
  { 
    title: 'Commercial Spaces', 
    desc: 'Find the perfect retail shop, office space, or warehouse. We help you identify high-footfall areas for maximum ROI.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80',
    alt: 'Modern corporate office interior with glass walls'
  },
  { 
    title: 'Investment Advisory', 
    desc: 'Looking for rental yields or capital appreciation? Get data-backed recommendations on Nashik\'s fastest-growing corridors.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    alt: 'Business investment growth chart and analytics'
  },
  { 
    title: 'Resale & Rental', 
    desc: 'End-to-end management for property owners. We find verified tenants/buyers and handle all the paperwork.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    alt: 'Beautiful residential property for rent or sale'
  },
  { 
    title: 'Home Loans', 
    desc: 'Live tie-ups with SBI, HDFC, and ICICI. We secure the lowest interest rates with zero hidden processing fees.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    alt: 'Home loan approval documents and calculator'
  },
  { 
    title: 'Legal & Vastu', 
    desc: 'In-house legal team for safe transactions, plus expert Vastu consultants to ensure your new home brings prosperity.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
    alt: 'Legal documents and gavel on desk'
  },
];

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
  },
  {
    name: "Rajesh Mehta",
    role: "Business Owner, Nashik",
    quote: "Excellent service and complete transparency. They helped me find the perfect commercial space for my business. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
    location: "Nashik",
    achievement: "Commercial Space Found"
  },
  {
    name: "Priya Sharma",
    role: "Banker, Mumbai",
    quote: "Their home loan assistance made the process so smooth. Got the best interest rate and quick approval within 14 days.",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 5,
    location: "Mumbai",
    achievement: "Loan Approved in 14 Days"
  },
  {
    name: "Vikram Singh",
    role: "Architect, Nashik",
    quote: "The Vastu consultation and legal team were exceptional. They ensured every document was perfect before registration.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
    location: "Nashik",
    achievement: "Hassle-free Registration"
  }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = document.querySelectorAll('.fu');
    const obs = new IntersectionObserver((es) => {
      es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1 });
    els.forEach(e => obs.observe(e));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % ENHANCED_TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
        setMousePosition({ x, y });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const featuredProjects = PROJECTS.slice(0, 3);
  const currentTestimonial = ENHANCED_TESTIMONIALS[activeTestimonial];

  return (
    <main style={{ background: '#000' }}>
      {/* ── PROFESSIONAL HERO SECTION ── */}
      <div className="hero-professional" ref={heroRef}>
        <video
          className="hero-bg-video"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-overlay-lighter"></div>

        <div className="hero-content-professional">
          <div className="hero-container-professional">
            {/* Left Column */}
            <div className="hero-left-professional">
              <div className="hero-trust-badge">
                <TrophyIcon />
                <span className="trust-text">India's Most Trusted Realty Partner 2024</span>
              </div>
              
              <AnimatedHeading text={"Your Dream Home\nAwaits in Nashik."} className="hero-title-professional" />
              
              <p className="hero-description-professional">
                14 years of trust. 500+ families served. RERA-verified properties
                across Nashik's finest locations — zero hidden charges, complete peace of mind.
              </p>
              
              <div className="hero-stats-professional">
                <div className="hero-stat">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Families</div>
                </div>
                <div className="stat-separator"></div>
                <div className="hero-stat">
                  <div className="stat-number">₹50Cr+</div>
                  <div className="stat-label">Transactions</div>
                </div>
                <div className="stat-separator"></div>
                <div className="hero-stat">
                  <div className="stat-number">12+</div>
                  <div className="stat-label">Years of Trust</div>
                </div>
              </div>
              
              <div className="hero-buttons-professional">
                <Link href="/projects" className="btn-primary-professional">
                  Explore Properties
                </Link>
                <Link href="/book" className="btn-secondary-professional">
                  Book a Visit
                </Link>
              </div>
            </div>

            {/* Right Column - Compact Info Cards */}
            
          </div>
        </div>

        {/* Scroll Indicator */}
        
      </div>

      {/* Wrapping the rest of the site with white/corporate background */}
      <div style={{ background: 'var(--bg)', color: 'var(--text1)' }}>
        
        {/* ── TICKER ── */}
        <div className="ticker-wrap">
          <div className="ticker-inner">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} style={{ display: 'flex', gap: '4rem' }}>
                <span className="ticker-item"><span className="ticker-dot"/> Trusted by 500+ Families</span>
                <span className="ticker-item"><span className="ticker-dot"/> ₹50Cr+ Transacted</span>
                <span className="ticker-item"><span className="ticker-dot"/> 100% RERA Verified</span>
                <span className="ticker-item"><span className="ticker-dot"/> 12 Years in Nashik</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── ABOUT HIGHLIGHT ── */}
        <section className="sec sec-border">
          <div className="about-story-grid" style={{ alignItems: 'center' }}>
            <div>
              <p className="label fu">The Swabhagya Standard</p>
              <h2 className="h2 fu">Built from Nashik, for Nashik.</h2>
              <p className="sub fu" style={{ marginBottom: '1.5rem' }}>
                Since 2012, we&apos;ve been the quiet confidence behind some of Nashik&apos;s most successful property transactions. We don&apos;t just sell houses; we guide you through the complex financial and emotional journey of finding your perfect home.
              </p>
              <div className="fu" style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                {[
                  { num: '500+', lbl: 'Happy Families' },
                  { num: '18', lbl: 'Projects Delivered' },
                  { num: '97%', lbl: 'Client Satisfaction' },
                ].map((s) => (
                  <div key={s.lbl}>
                    <div style={{ fontFamily: '\'Cormorant Garamond\', serif', fontSize: '2.5rem', fontWeight: 300, color: 'var(--sage)' }}>{s.num}</div>
                    <div style={{ fontSize: '.68rem', color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '.1em', marginTop: '.3rem' }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
              <div className="fu" style={{ marginTop: '2.5rem' }}>
                <Link href="/about" className="btn btn-o">Learn Our Story</Link>
              </div>
            </div>
            <div className="about-img-wrap fu">
              <Image
                src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80"
                alt="Swabhagya Realty Office"
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* ── SERVICES SECTION ── */}
        <section className="sec sec-border" style={{ background: 'var(--bg1)' }}>
          <div className="fu" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <p className="label">What we do</p>
              <h2 className="h2" style={{ marginBottom: 0 }}>End-to-end expertise.</h2>
            </div>
          </div>
          <div className="services-with-images-grid" style={{ marginTop: '3rem' }}>
            {SERVICES.map((s, index) => (
              <div className="service-card-with-image fu" key={s.title} style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="service-image-wrapper">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    width={400}
                    height={250}
                    className="service-image"
                    unoptimized
                  />
                </div>
                <div className="service-content">
                  <p className="svc-title">{s.title}</p>
                  <p className="svc-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section className="sec sec-border">
          <div className="fu" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <p className="label">Handpicked</p>
              <h2 className="h2" style={{ marginBottom: 0 }}>Featured Projects.</h2>
            </div>
            <Link href="/projects" className="btn btn-o">View All Properties</Link>
          </div>
          <div className="proj-grid fu">
            {featuredProjects.map((p) => (
              <Link href="/projects" className="proj-card" key={p.id}>
                <div className="proj-img-wrap">
                  <Image src={p.image || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80'} alt={p.name} fill unoptimized />
                </div>
                <div className="proj-content">
                  <p className="proj-name">{p.name}</p>
                  <p className="proj-loc">📍 {p.loc}</p>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '.75rem', color: 'var(--text3)' }}>
                    <span>{p.bhk}</span><span>•</span><span>{p.area}</span>
                  </div>
                  <div className="proj-price">
                    <span>{p.price}</span>
                    <span className="proj-price-arrow">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── TESTIMONIALS SECTION ── */}
        <section className="sec sec-border testimonials-enhanced">
          <div className="testimonials-header fu">
            <p className="label">Real Stories, Real People</p>
            <h2 className="h2">What Our <span style={{ color: 'var(--sage)' }}>500+ Families</span> Say</h2>
          </div>

          <div className="testimonial-carousel fu">
            <div className="testimonial-featured">
              <p className="testimonial-featured-quote">{currentTestimonial.quote}</p>
              <div className="testimonial-featured-author">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  width={70}
                  height={70}
                  className="testimonial-avatar-large"
                  unoptimized
                />
                <div className="testimonial-author-info">
                  <h4>{currentTestimonial.name}</h4>
                  <p>{currentTestimonial.role}</p>
                  <div className="testimonial-rating">
                    {'★'.repeat(currentTestimonial.rating)}
                    {'☆'.repeat(5 - currentTestimonial.rating)}
                  </div>
                </div>
              </div>
              <div className="testimonial-badge">
                <span className="badge-green">{currentTestimonial.achievement}</span>
              </div>
            </div>

            <div className="testimonial-controls">
              <button 
                className="testimonial-nav-btn"
                onClick={() => {
                  setAutoplay(false);
                  setActiveTestimonial((prev) => (prev - 1 + ENHANCED_TESTIMONIALS.length) % ENHANCED_TESTIMONIALS.length);
                }}
              >
                ←
              </button>
              <div className="testimonial-dots">
                {ENHANCED_TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    className={`testimonial-dot ${idx === activeTestimonial ? 'active' : ''}`}
                    onClick={() => {
                      setAutoplay(false);
                      setActiveTestimonial(idx);
                    }}
                  />
                ))}
              </div>
              <button 
                className="testimonial-nav-btn"
                onClick={() => {
                  setAutoplay(false);
                  setActiveTestimonial((prev) => (prev + 1) % ENHANCED_TESTIMONIALS.length);
                }}
              >
                →
              </button>
            </div>
          </div>
        </section>

        {/* ── QUICK CONTACT SECTION ── */}
        <section className="contact-section-premium">
          <div className="contact-premium-container">
            <div className="contact-premium-left fu">
              <div className="contact-premium-badge">
                <span>📞 Get Priority Access</span>
              </div>
              <h2 className="contact-premium-title">
                Talk to a <span className="highlight">Property Expert</span>
              </h2>
              <p className="contact-premium-desc">
                Get personalized guidance from our senior advisors. We understand your needs and find properties that match your budget and preferences.
              </p>
              
              <div className="contact-premium-features">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div>
                    <h4>Free Consultation</h4>
                    <p>No charges, no commitments</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div>
                    <h4>2-Hour Response</h4>
                    <p>Guaranteed callback within 2 hours</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div>
                    <h4>Expert Guidance</h4>
                    <p>12+ years of experience</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-premium-right fu">
              <div className="contact-premium-form">
                <h3>Request a Callback</h3>
                <p>Fill in your details below</p>
                
                <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Our advisor will call you within 2 hours.'); }}>
                  <div className="form-group">
                    <input type="text" placeholder="Your Full Name" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="+91 98765 43210" required />
                  </div>
                  <div className="form-row">
                    <select className="form-select">
                      <option>Looking for Residential</option>
                      <option>Looking for Commercial</option>
                      <option>Investment Advice</option>
                      <option>Resale Property</option>
                    </select>
                  </div>
                  <button type="submit" className="contact-submit-btn">
                    Schedule a Call
                    <span className="btn-arrow-animated">→</span>
                  </button>
                </form>
                
                <p className="contact-note">
                  <span className="lock-icon">🔒</span> Your information is safe with us. No spam calls.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        /* Professional Hero Section */
        .hero-professional {
          position: relative;
          height: 100vh;
          min-height: 700px;
          overflow: hidden;
        }

        .hero-bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .hero-overlay-lighter {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(105deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 50%, rgba(65,67,27,0.3) 100%);
          z-index: 1;
        }

        .hero-content-professional {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 5%;
        }

        .hero-container-professional {
          max-width: 1300px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        /* Left Column */
        .hero-left-professional {
          color: white;
        }

        .hero-trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(195, 204, 155, 0.15);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1.2rem;
          border-radius: 100px;
          margin-bottom: 1.8rem;
          border: 1px solid rgba(195, 204, 155, 0.3);
        }

        .trust-text {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.03em;
          color: rgba(255,255,255,0.9);
        }

        .hero-title-professional {
          font-size: 3.2rem;
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 1.2rem;
        }

        @media (min-width: 768px) {
          .hero-title-professional {
            font-size: 4rem;
          }
        }

        @media (min-width: 1024px) {
          .hero-title-professional {
            font-size: 4.8rem;
          }
        }

        .hero-description-professional {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          opacity: 0.85;
          max-width: 90%;
        }

        .hero-stats-professional {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .hero-stat {
          text-align: center;
        }

        .stat-number {
          font-size: 1.6rem;
          font-weight: 700;
          color: #C3CC9B;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.7;
        }

        .stat-separator {
          width: 1px;
          height: 35px;
          background: rgba(255,255,255,0.2);
        }

        /* Buttons - Solid and Visible */
        .hero-buttons-professional {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .btn-primary-professional {
          background: #9AB17A;
          color: #dede9e;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(154, 177, 122, 0.3);
        }

        .btn-primary-professional:hover {
          background: #8AA86A;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(154, 177, 122, 0.4);
        }

        .btn-secondary-professional {
          background: #41431B;
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.95rem;
          border: none;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(65, 67, 27, 0.3);
        }

        .btn-secondary-professional:hover {
          background: #2C2C1E;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(65, 67, 27, 0.4);
        }

        /* Right Column - Compact Info Cards */
        .hero-right-professional {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          align-items: flex-end;
        }

        .info-card {
          background: rgba(195, 204, 155, 0.92);
          backdrop-filter: blur(8px);
          border-radius: 16px;
          padding: 0.9rem 1.2rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          transition: transform 0.1s ease-out;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
          border: none;
          width: auto;
          min-width: 240px;
          max-width: 280px;
        }

        .info-card-offer {
          animation: floatCard 4s ease-in-out infinite;
        }

        .info-card-verified {
          animation: floatCardSecondary 4.5s ease-in-out infinite;
        }

        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes floatCardSecondary {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        .info-card-icon {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.25);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #2C2C1E;
          flex-shrink: 0;
        }

        .info-card-content h4 {
          font-size: 0.85rem;
          font-weight: 600;
          color: #2C2C1E;
          margin-bottom: 0.2rem;
        }

        .info-card-content p {
          font-size: 0.7rem;
          color: #41431B;
          margin-bottom: 0.3rem;
          opacity: 0.8;
          line-height: 1.3;
        }

        .info-card-badge {
          display: inline-block;
          background: rgba(255,255,255,0.35);
          color: #2C2C1E;
          padding: 0.2rem 0.5rem;
          border-radius: 50px;
          font-size: 0.6rem;
          font-weight: 600;
        }

        /* Scroll Indicator */
        .hero-scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .scroll-mouse {
          width: 26px;
          height: 40px;
          border: 2px solid rgba(255,255,255,0.5);
          border-radius: 20px;
          position: relative;
        }

        .scroll-wheel {
          width: 4px;
          height: 8px;
          background: white;
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: scrollWheel 2s ease-in-out infinite;
        }

        @keyframes scrollWheel {
          0% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
        }

        .hero-scroll-indicator span {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.1em;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .hero-container-professional {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .hero-right-professional {
            display: none;
          }
          
          .hero-title-professional {
            font-size: 2.5rem;
          }
          
          .hero-stats-professional {
            flex-wrap: wrap;
            gap: 1rem;
          }
          
          .hero-description-professional {
            max-width: 100%;
          }
          
          .hero-buttons-professional {
            flex-direction: row;
          }
        }

        @media (max-width: 480px) {
          .hero-title-professional {
            font-size: 2rem;
          }
          
          .hero-buttons-professional {
            flex-direction: column;
            align-items: center;
          }
          
          .btn-primary-professional,
          .btn-secondary-professional {
            text-align: center;
            justify-content: center;
            width: 100%;
            max-width: 250px;
          }
        }

        /* Contact Section Styles */
        .contact-section-premium {
          padding: 5rem 1.5rem;
          background: linear-gradient(135deg, #F5F2EA 0%, #EDE9DE 100%);
          border-top: 1px solid var(--border2);
          border-bottom: 1px solid var(--border2);
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .contact-section-premium {
            padding: 6rem 3rem;
          }
        }

        @media (min-width: 1024px) {
          .contact-section-premium {
            padding: 7rem 5rem;
          }
        }

        .contact-premium-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 1024px) {
          .contact-premium-container {
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
            align-items: center;
          }
        }

        .contact-premium-badge {
          display: inline-block;
          margin-bottom: 1.5rem;
        }

        .contact-premium-badge span {
          background: var(--sage);
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #41431B;
          letter-spacing: 0.5px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .contact-premium-title {
          font-size: 2.2rem;
          font-weight: 500;
          line-height: 1.2;
          color: var(--text1);
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .contact-premium-title {
            font-size: 2.8rem;
          }
        }

        .contact-premium-title .highlight {
          color: var(--sage);
          font-weight: 600;
          position: relative;
          display: inline-block;
        }

        .contact-premium-desc {
          font-size: 1rem;
          color: var(--text2);
          line-height: 1.7;
          margin-bottom: 2.5rem;
        }

        .contact-premium-features {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem;
          border-radius: 12px;
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          background: #9AB17A;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #41431B;
          font-size: 1.2rem;
          font-weight: bold;
          flex-shrink: 0;
        }

        .feature-item h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text1);
          margin-bottom: 0.3rem;
        }

        .feature-item p {
          font-size: 0.85rem;
          color: var(--text3);
          line-height: 1.4;
        }

        .contact-premium-right {
          background: white;
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid var(--border2);
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 768px) {
          .contact-premium-right {
            padding: 3rem;
          }
        }

        .contact-premium-form h3 {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--text1);
          margin-bottom: 0.5rem;
        }

        .contact-premium-form > p {
          font-size: 0.9rem;
          color: var(--text3);
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.2rem;
        }

        .form-group input,
        .form-row select {
          width: 100%;
          padding: 1rem 1.2rem;
          border: 2px solid var(--border2);
          border-radius: 12px;
          font-size: 0.95rem;
          background: var(--bg);
          color: var(--text1);
          outline: none;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-row select:focus {
          border-color: var(--sage);
          box-shadow: 0 0 0 3px rgba(154, 177, 122, 0.1);
        }

        .form-row {
          margin-bottom: 1.5rem;
        }

        .form-select {
          width: 100%;
          padding: 1rem 1.2rem;
          border: 2px solid var(--border2);
          border-radius: 12px;
          font-size: 0.95rem;
          background: var(--bg);
          color: var(--text1);
          cursor: pointer;
          outline: none;
        }

        .contact-submit-btn {
          width: 100%;
          padding: 1rem;
          background: #9AB17A;
          color: #41431B;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          margin-top: 0.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }

        .btn-arrow-animated {
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .contact-submit-btn:hover .btn-arrow-animated {
          transform: translateX(5px);
        }

        .contact-note {
          text-align: center;
          margin-top: 1.5rem;
          font-size: 0.75rem;
          color: var(--text3);
        }

        .lock-icon {
          display: inline-block;
          margin-right: 0.3rem;
        }

        @media (max-width: 768px) {
          .feature-item {
            padding: 0.3rem;
          }
          
          .feature-icon {
            width: 35px;
            height: 35px;
            font-size: 1rem;
          }
          
          .contact-premium-form h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </main>
  );
}