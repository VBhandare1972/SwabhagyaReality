'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';

// Animation Components
function FadeInUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ScaleIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.95)',
        transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Icon Components
const LocationIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9AB17A" strokeWidth="1.8">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9AB17A" strokeWidth="1.8">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9AB17A" strokeWidth="1.8">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9AB17A" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2C2C1E" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
);

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', type: 'Residential property', message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: LocationIcon, title: 'OFFICE ADDRESS', lines: ['123, Swabhagya Tower, Gangapur Road', 'Near HDFC Bank, Nashik', '— 422013, Maharashtra'] },
    { icon: PhoneIcon, title: 'PHONE', lines: ['+91 253 250 0000', '+91 98765 43210 (WhatsApp)'] },
    { icon: EmailIcon, title: 'EMAIL', lines: ['info@swabhagyarealty.com'] },
    { icon: ClockIcon, title: 'WORKING HOURS', lines: ['Monday – Saturday: 10:00 AM – 7:00 PM', 'Sunday: By appointment only'] },
  ];

  const quickLinks = [
    { href: '/projects', label: 'Browse Projects', description: 'Explore our premium properties', image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=100&q=80', alt: 'Browse Projects' },
    { href: '/book', label: 'Book a Site Visit', description: 'Schedule your personal tour', image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?w=100&q=80', alt: 'Book a Site Visit' },
    { href: '/compare', label: 'Compare Properties', description: 'Make informed decisions', image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?w=100&q=80', alt: 'Compare Properties' },
    { href: '/chat', label: 'AI Assistant', description: 'Get instant answers', image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?w=100&q=80', alt: 'AI Assistant' },
  ];

  const galleryItems = [
    { img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=600&q=80', title: 'Modern Reception', desc: 'Elegant welcome area with natural light' },
    { img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=600&q=80', title: 'Advisory Desk', desc: 'Expert consultation in a comfortable setting' },
    { img: 'https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?w=600&q=80', title: 'Meeting Room', desc: 'Collaborative space for client discussions' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=1920&q=80"
            alt="Contact Us"
            fill
            className="hero-image"
            priority
            unoptimized
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <FadeInUp>
            <span className="hero-badge">GET IN TOUCH</span>
            <h1 className="hero-title">Let's <span className="highlight">Connect.</span></h1>
            <p className="hero-subtitle">Have questions? We'd love to hear from you. Reach out and our team will get back to you within 24 hours.</p>
          </FadeInUp>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-section">
        <div className="contact-wrapper">
          {/* Left Column - Contact Info */}
          <div className="contact-left">
            <div className="contact-info-vertical">
              {contactInfo.map((item, idx) => (
                <FadeInUp key={idx} delay={idx * 100}>
                  <div className="contact-item-vertical">
                    <div className="contact-icon-vertical">
                      <item.icon />
                    </div>
                    <div className="contact-content-vertical">
                      <h4>{item.title}</h4>
                      {item.lines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>

            <FadeInUp delay={400}>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                <WhatsAppIcon />
                <span>Chat on WhatsApp</span>
                <ArrowRightIcon />
              </a>
            </FadeInUp>

            <FadeInUp delay={500}>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.897961586304!2d73.82903847597825!3d19.99785298140464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd9f0c2b4b8e9%3A0x5e7c3e9f9e3b5c7d!2sGangapur%20Road%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                />
                <div className="map-pin">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9AB17A" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Gangapur Road, Nashik</span>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right Column - Contact Form - Vertical Layout */}
          <div className="contact-right">
            <ScaleIn>
              {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-header">
                    <h3>Send us a message</h3>
                    <p>We'll respond within 24 hours</p>
                  </div>

                  <div className="form-group-vertical">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your full name" 
                      value={form.name} 
                      onChange={(e) => setForm({ ...form, name: e.target.value })} 
                      required 
                    />
                  </div>

                  <div className="form-group-vertical">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      value={form.phone} 
                      onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                      required 
                    />
                  </div>

                  <div className="form-group-vertical">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      placeholder="you@email.com" 
                      value={form.email} 
                      onChange={(e) => setForm({ ...form, email: e.target.value })} 
                    />
                  </div>

                  <div className="form-group-vertical">
                    <label>I'm looking for</label>
                    <select 
                      value={form.type} 
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                    >
                      <option>Residential property</option>
                      <option>Commercial property</option>
                      <option>Investment advice</option>
                      <option>Resale / Rental</option>
                      <option>Home loan assistance</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-group-vertical">
                    <label>Message</label>
                    <textarea 
                      placeholder="Tell us about your requirements…" 
                      rows={4}
                      value={form.message} 
                      onChange={(e) => setForm({ ...form, message: e.target.value })} 
                      required 
                    />
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message
                    <SendIcon />
                  </button>
                </form>
              ) : (
                <div className="success-box">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button className="back-btn" onClick={() => setSubmitted(false)}>Send Another Message</button>
                </div>
              )}
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-wrapper">
          <FadeInUp>
            <div className="section-header">
              <span className="section-badge">OUR SPACE</span>
              <h2 className="section-title">Visit Our <span className="highlight">Workspace.</span></h2>
              <p className="section-subtitle">Step into our world of excellence</p>
            </div>
          </FadeInUp>

          <div className="gallery-grid">
            {galleryItems.map((item, idx) => (
              <ScaleIn key={idx} delay={idx * 100}>
                <div className="gallery-card">
                  <div className="gallery-img-wrap">
                    <Image src={item.img} alt={item.title} width={500} height={350} className="gallery-img" unoptimized />
                    <div className="gallery-overlay">
                      
                    </div>
                  </div>
                  <div className="gallery-info">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quicklinks-section">
        <div className="quicklinks-wrapper">
          <FadeInUp>
            <div className="section-header">
              <span className="section-badge">QUICK ACCESS</span>
              <h2 className="section-title">Explore <span className="highlight">More.</span></h2>
              <p className="section-subtitle">Discover everything we have to offer</p>
            </div>
          </FadeInUp>

          <div className="quicklinks-grid">
            {quickLinks.map((link, idx) => (
              <ScaleIn key={idx} delay={idx * 100}>
                <Link href={link.href} className="quicklink-card">
                  <div className="quicklink-image-wrapper">
                    <Image 
                      src={link.image} 
                      alt={link.alt} 
                      width={50} 
                      height={50} 
                      className="quicklink-img"
                      unoptimized
                    />
                  </div>
                  <div className="quicklink-info">
                    <h3>{link.label}</h3>
                    <p>{link.description}</p>
                  </div>
                  <ArrowRightIcon />
                </Link>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-wrapper">
          <div className="stats-row">
            <div className="stat-box">
              <div className="stat-number">500+</div>
              <div className="stat-label">HAPPY CUSTOMERS</div>
            </div>
            <div className="stat-line"></div>
            <div className="stat-box">
              <div className="stat-number">98%</div>
              <div className="stat-label">SATISFACTION RATE</div>
            </div>
            <div className="stat-line"></div>
            <div className="stat-box">
              <div className="stat-number">24/7</div>
              <div className="stat-label">SUPPORT AVAILABLE</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        /* Hero Section */
        .hero {
          position: relative;
          height: 50vh;
          min-height: 400px;
          overflow: hidden;
        }
        .hero-bg { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .hero-image { object-fit: cover; }
        .hero-overlay {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(135deg, rgba(44,44,30,0.85) 0%, rgba(44,44,30,0.5) 100%);
          z-index: 1;
        }
        .hero-content {
          position: relative; z-index: 2;
          height: 100%; display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          padding: 0 2rem;
        }
        .hero-badge {
          display: inline-block;
          background: rgba(154,177,122,0.2);
          backdrop-filter: blur(10px);
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          border: 1px solid rgba(154,177,122,0.3);
        }
        .hero-title { font-size: 2.5rem; font-weight: 700; margin-bottom: 0.8rem; }
        @media (min-width: 768px) { .hero-title { font-size: 3.5rem; } }
        .highlight { color: #9AB17A; }
        .hero-subtitle { font-size: 0.9rem; max-width: 500px; margin: 0 auto; opacity: 0.9; line-height: 1.6; }

        /* Contact Section */
        .contact-section { 
          padding: 4rem 1.5rem; 
          background: #F5F2EA; 
        }
        .contact-wrapper { 
          max-width: 1200px; 
          margin: 0 auto; 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 3rem; 
        }
        @media (min-width: 1024px) { 
          .contact-wrapper { 
            grid-template-columns: 1fr 1fr; 
            gap: 4rem; 
            align-items: start;
          } 
        }

        /* Contact Left - Vertical Layout */
        .contact-left { 
          display: flex; 
          flex-direction: column; 
          gap: 1.2rem; 
        }
        
        .contact-info-vertical {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          background: white;
          border-radius: 24px;
          padding: 1.5rem;
          border: 1px solid rgba(154,177,122,0.15);
        }
        
        .contact-item-vertical {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(154,177,122,0.1);
        }
        .contact-item-vertical:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        
        .contact-icon-vertical {
          width: 45px;
          height: 45px;
          background: rgba(154,177,122,0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-icon-vertical svg { width: 20px; height: 20px; }
        
        .contact-content-vertical { flex: 1; }
        .contact-content-vertical h4 {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #9AB17A;
          margin-bottom: 0.4rem;
        }
        .contact-content-vertical p {
          font-size: 0.85rem;
          color: #2C2C1E;
          line-height: 1.5;
          margin-bottom: 0.2rem;
        }

        /* WhatsApp Button */
        .whatsapp-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;
          background: #9AB17A;
          color: white;
          padding: 1rem 1.2rem;
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .whatsapp-button:hover { 
          background: #8AA86A;
          transform: translateY(-3px); 
          box-shadow: 0 8px 20px rgba(154,177,122,0.3);
        }
        .whatsapp-button span { font-size: 0.85rem; font-weight: 600; flex: 1; }

        /* Map Container */
        .map-container {
          position: relative;
          height: 200px;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .map-container iframe { width: 100%; height: 100%; object-fit: cover; }
        .map-pin {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(44,44,30,0.9);
          backdrop-filter: blur(8px);
          padding: 0.4rem 1rem;
          border-radius: 50px;
          z-index: 10;
        }
        .map-pin span { font-size: 0.7rem; color: white; font-weight: 500; }

        /* Contact Right - Form - Vertical Layout */
        .contact-right {
          background: white;
          border-radius: 24px;
          padding: 2rem;
          box-shadow: 0 15px 35px rgba(0,0,0,0.05);
          border: 1px solid rgba(154,177,122,0.15);
          height: fit-content;
        }
        @media (min-width: 768px) { 
          .contact-right { 
            padding: 2rem; 
          } 
        }

        .form-header { 
          text-align: center; 
          margin-bottom: 1.5rem; 
        }
        .form-header h3 { 
          font-size: 1.4rem; 
          font-weight: 600; 
          color: #2C2C1E; 
          margin-bottom: 0.3rem; 
        }
        .form-header p { 
          font-size: 0.8rem; 
          color: #9A9A7A; 
        }

        .contact-form { 
          display: flex; 
          flex-direction: column; 
          gap: 1rem; 
        }

        /* Vertical Form Groups */
        .form-group-vertical { 
          display: flex; 
          flex-direction: column; 
          gap: 0.4rem; 
        }
        .form-group-vertical label { 
          font-size: 0.7rem; 
          font-weight: 700; 
          text-transform: uppercase; 
          letter-spacing: 0.08em; 
          color: #9A9A7A; 
        }
        .form-group-vertical input, 
        .form-group-vertical select, 
        .form-group-vertical textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1.5px solid rgba(154,177,122,0.2);
          border-radius: 12px;
          font-size: 0.85rem;
          background: #F5F2EA;
          color: #2C2C1E;
          outline: none;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        .form-group-vertical input:focus, 
        .form-group-vertical select:focus, 
        .form-group-vertical textarea:focus {
          border-color: #9AB17A;
          box-shadow: 0 0 0 3px rgba(154,177,122,0.1);
        }

        .submit-btn {
          width: 100%;
          padding: 0.85rem;
          background: #9AB17A;
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }
        .submit-btn:hover { 
          background: #8AA86A; 
          transform: translateY(-2px); 
          box-shadow: 0 4px 12px rgba(154,177,122,0.3);
        }

        /* Success Box */
        .success-box { 
          text-align: center; 
          padding: 2rem; 
        }
        .success-icon { 
          width: 60px; 
          height: 60px; 
          background: #9AB17A; 
          border-radius: 50%; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 1.8rem; 
          color: white; 
          margin: 0 auto 1rem; 
          animation: pop 0.5s ease; 
        }
        @keyframes pop { 
          0% { transform: scale(0); } 
          80% { transform: scale(1.1); } 
          100% { transform: scale(1); } 
        }
        .success-box h3 { 
          font-size: 1.3rem; 
          font-weight: 600; 
          color: #2C2C1E; 
          margin-bottom: 0.5rem; 
        }
        .success-box p { 
          color: #9A9A7A; 
          margin-bottom: 1.5rem; 
          font-size: 0.85rem; 
        }
        .back-btn { 
          background: transparent; 
          border: 1.5px solid rgba(154,177,122,0.3); 
          padding: 0.6rem 1.5rem; 
          border-radius: 50px; 
          font-size: 0.8rem; 
          font-weight: 600; 
          color: #2C2C1E; 
          cursor: pointer; 
          transition: all 0.2s; 
        }
        .back-btn:hover { 
          border-color: #9AB17A; 
          background: rgba(154,177,122,0.05); 
        }

        /* Gallery Section */
        .gallery-section { 
          padding: 4rem 1.5rem; 
          background: linear-gradient(135deg, #FBE8CE 0%, #F5F2EA 100%); 
        }
        .gallery-wrapper { 
          max-width: 1200px; 
          margin: 0 auto; 
        }
        .section-header { 
          text-align: center; 
          margin-bottom: 2rem; 
        }
        .section-badge { 
          display: inline-block; 
          background: rgba(154,177,122,0.1); 
          padding: 0.3rem 1rem; 
          border-radius: 50px; 
          font-size: 0.65rem; 
          font-weight: 600; 
          color: #9AB17A; 
          letter-spacing: 0.1em; 
          margin-bottom: 0.8rem; 
        }
        .section-title { 
          font-size: 1.8rem; 
          font-weight: 500; 
          color: #2C2C1E; 
          margin-bottom: 0.3rem; 
        }
        @media (min-width: 768px) { 
          .section-title { 
            font-size: 2.2rem; 
          } 
        }
        .section-subtitle { 
          font-size: 0.85rem; 
          color: #9A9A7A; 
        }
        .gallery-grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 1.5rem; 
          margin-top: 1.5rem; 
        }
        @media (min-width: 768px) { 
          .gallery-grid { 
            grid-template-columns: repeat(3, 1fr); 
          } 
        }
        .gallery-card { 
          background: white; 
          border-radius: 18px; 
          overflow: hidden; 
          transition: all 0.3s ease; 
          border: 1px solid rgba(154,177,122,0.15); 
        }
        .gallery-card:hover { 
          transform: translateY(-5px); 
          box-shadow: 0 12px 25px rgba(0,0,0,0.08); 
          border-color: #9AB17A; 
        }
        .gallery-img-wrap { 
          position: relative; 
          aspect-ratio: 4/3; 
          overflow: hidden; 
          cursor: pointer; 
        }
        .gallery-img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          transition: transform 0.5s ease; 
        }
        .gallery-card:hover .gallery-img { 
          transform: scale(1.05); 
        }
        .gallery-overlay { 
          position: absolute; 
          inset: 0; 
          background: rgba(44,44,30,0.7); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          opacity: 0; 
          transition: opacity 0.3s ease; 
        }
        .gallery-img-wrap:hover .gallery-overlay { 
          opacity: 1; 
        }
        .gallery-overlay span { 
          background: #9AB17A; 
          color: #41431B; 
          padding: 0.3rem 0.8rem; 
          border-radius: 50px; 
          font-size: 0.7rem; 
          font-weight: 600; 
        }
        .gallery-info { 
          padding: 1rem; 
          text-align: left; 
        }
        .gallery-info h4 { 
          font-size: 0.9rem; 
          font-weight: 600; 
          color: #2C2C1E; 
          margin-bottom: 0.2rem; 
        }
        .gallery-info p { 
          font-size: 0.7rem; 
          color: #9A9A7A; 
        }

        /* Quick Links Section */
        .quicklinks-section { 
          padding: 4rem 1.5rem; 
          background: #F5F2EA; 
        }
        .quicklinks-wrapper { 
          max-width: 1200px; 
          margin: 0 auto; 
        }
        .quicklinks-grid { 
          display: grid; 
          grid-template-columns: 1fr; 
          gap: 1rem; 
          margin-top: 1.5rem; 
        }
        @media (min-width: 768px) { 
          .quicklinks-grid { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 1.2rem; 
          } 
        }
        @media (min-width: 1024px) { 
          .quicklinks-grid { 
            grid-template-columns: repeat(4, 1fr); 
            gap: 1.2rem; 
          } 
        }

        .quicklink-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #EDE9DE;
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(154,177,122,0.15);
        }
        .quicklink-card:hover { 
          transform: translateY(-3px); 
          border-color: #9AB17A; 
          box-shadow: 0 8px 20px rgba(0,0,0,0.05); 
        }

        .quicklink-image-wrapper {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          overflow: hidden;
          flex-shrink: 0;
          background: rgba(154,177,122,0.1);
        }
        .quicklink-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .quicklink-card:hover .quicklink-img {
          transform: scale(1.05);
        }

        .quicklink-info { 
          flex: 1; 
        }
        .quicklink-info h3 { 
          font-size: 0.9rem; 
          font-weight: 600; 
          color: #2C2C1E; 
          margin-bottom: 0.2rem; 
          transition: color 0.2s; 
        }
        .quicklink-card:hover .quicklink-info h3 { 
          color: #9AB17A; 
        }
        .quicklink-info p { 
          font-size: 0.7rem; 
          color: #9A9A7A; 
          line-height: 1.4; 
        }

        .quicklink-card svg:last-child { 
          width: 16px; 
          height: 16px; 
          color: #2C2C1E;
          opacity: 0.5; 
          transition: all 0.3s ease; 
          flex-shrink: 0;
        }
        .quicklink-card:hover svg:last-child { 
          opacity: 1; 
          transform: translateX(3px); 
          color: #9AB17A;
        }

        /* Stats Section */
        .stats-section { 
          padding: 2rem 1.5rem 3rem; 
          background: linear-gradient(135deg, #E4DFB5 0%, #C3CC9B 100%); 
        }
        .stats-wrapper { 
          max-width: 800px; 
          margin: 0 auto; 
        }
        .stats-row { 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          gap: 1.5rem; 
          padding: 1.2rem; 
          background: white; 
          border-radius: 50px; 
        }
        @media (max-width: 768px) { 
          .stats-row { 
            flex-direction: column; 
            gap: 1rem; 
            border-radius: 30px; 
            padding: 1.5rem; 
          } 
        }
        .stat-box { 
          text-align: center; 
          flex: 1; 
        }
        .stat-number { 
          font-size: 1.6rem; 
          font-weight: 800; 
          color: #9AB17A; 
          margin-bottom: 0.2rem; 
        }
        .stat-label { 
          font-size: 0.6rem; 
          font-weight: 700; 
          color: #9A9A7A; 
          letter-spacing: 0.08em; 
        }
        .stat-line { 
          width: 1px; 
          height: 35px; 
          background: rgba(154,177,122,0.2); 
        }

        @media (max-width: 768px) {
          .contact-section { padding: 2rem 1rem; }
          .contact-right { padding: 1.5rem; }
          .contact-info-vertical { padding: 1rem; }
          .contact-icon-vertical { width: 40px; height: 40px; }
          .contact-content-vertical p { font-size: 0.75rem; }
          .form-header h3 { font-size: 1.2rem; }
          .submit-btn { padding: 0.7rem; }
          .quicklink-card { padding: 0.8rem; }
          .quicklink-image-wrapper { width: 45px; height: 45px; }
          .quicklink-info h3 { font-size: 0.85rem; }
          .quicklink-info p { font-size: 0.65rem; }
          .stat-line { width: 50px; height: 1px; }
        }
      `}</style>
    </main>
  );
}