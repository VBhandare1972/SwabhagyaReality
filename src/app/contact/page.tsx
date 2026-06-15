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
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
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
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    { icon: LocationIcon, title: 'OFFICE ADDRESS', content: ['123, Swabhagya Tower, Gangapur Road', 'Near HDFC Bank, Nashik', '— 422013, Maharashtra'] },
    { icon: PhoneIcon, title: 'PHONE', content: ['+91 253 250 0000', '+91 98765 43210 (WhatsApp)'] },
    { icon: EmailIcon, title: 'EMAIL', content: ['info@swabhagyarealty.com'] },
    { icon: ClockIcon, title: 'WORKING HOURS', content: ['Monday – Saturday: 10:00 AM – 7:00 PM', 'Sunday: By appointment only'] },
  ];

  return (
    <main>
      {/* Hero Section */}
      <div className="hero-section">
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
            <div className="hero-badge">GET IN TOUCH</div>
            <h1 className="hero-title">Let's <span className="highlight">Connect.</span></h1>
            <p className="hero-subtitle">
              Have questions? We'd love to hear from you. Reach out and our team will get back to you within 24 hours.
            </p>
          </FadeInUp>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="contact-main">
        <div className="contact-container">
          {/* Contact Information Cards */}
          <div className="contact-info-grid">
            {contactInfo.map((item, idx) => (
              <FadeInUp key={idx} delay={idx * 100}>
                <div className="info-card">
                  <div className="info-icon">{<item.icon />}</div>
                  <div className="info-content">
                    <h4>{item.title}</h4>
                    {item.content.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </FadeInUp>
            ))}
            
            <FadeInUp delay={400}>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="whatsapp-card">
                <WhatsAppIcon />
                <span>Chat on WhatsApp</span>
                <ArrowRightIcon />
              </a>
            </FadeInUp>

            <FadeInUp delay={500}>
              <div className="map-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.897961586304!2d73.82903847597825!3d19.99785298140464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd9f0c2b4b8e9%3A0x5e7c3e9f9e3b5c7d!2sGangapur%20Road%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                />
                <div className="map-overlay">
                  <div className="map-pin">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9AB17A" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Gangapur Road, Nashik</span>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Contact Form */}
          <div className="form-wrapper">
            <ScaleIn>
              {!submitted ? (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-header">
                    <h3>Send us a message</h3>
                    <p>We'll respond within 24 hours</p>
                  </div>
                  
                  <div className="form-row">
                    <div className={`form-group ${focusedField === 'name' ? 'focused' : ''}`}>
                      <label>Your Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter your full name" 
                        value={form.name} 
                        onChange={(e) => setForm({ ...form, name: e.target.value })} 
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required 
                      />
                    </div>
                    
                    <div className={`form-group ${focusedField === 'phone' ? 'focused' : ''}`}>
                      <label>Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 98765 43210" 
                        value={form.phone} 
                        onChange={(e) => setForm({ ...form, phone: e.target.value })} 
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className={`form-group ${focusedField === 'email' ? 'focused' : ''}`}>
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        placeholder="you@email.com" 
                        value={form.email} 
                        onChange={(e) => setForm({ ...form, email: e.target.value })} 
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </div>
                    
                    <div className={`form-group ${focusedField === 'type' ? 'focused' : ''}`}>
                      <label>I'm looking for</label>
                      <select 
                        value={form.type} 
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        onFocus={() => setFocusedField('type')}
                        onBlur={() => setFocusedField(null)}
                      >
                        <option>Residential property</option>
                        <option>Commercial property</option>
                        <option>Investment advice</option>
                        <option>Resale / Rental</option>
                        <option>Home loan assistance</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className={`form-group full-width ${focusedField === 'message' ? 'focused' : ''}`}>
                    <label>Message</label>
                    <textarea 
                      placeholder="Tell us about your requirements…" 
                      rows={5}
                      value={form.message} 
                      onChange={(e) => setForm({ ...form, message: e.target.value })} 
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required 
                    />
                  </div>
                  
                  <button type="submit" className="submit-button">
                    Send Message
                    <SendIcon />
                  </button>
                </form>
              ) : (
                <div className="success-container">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button className="back-button" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              )}
            </ScaleIn>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-container">
          <FadeInUp>
            <div className="gallery-header">
              <span className="gallery-badge">OUR SPACE</span>
              <h2 className="gallery-title">Visit Our <span className="highlight">Workspace.</span></h2>
              <p className="gallery-subtitle">Step into our world of excellence</p>
            </div>
          </FadeInUp>
          <div className="gallery-grid">
            {[
              { img: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?w=600&q=80', title: 'Modern Reception', desc: 'Elegant welcome area with natural light' },
              { img: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=600&q=80', title: 'Advisory Desk', desc: 'Expert consultation in a comfortable setting' },
              { img: 'https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?w=600&q=80', title: 'Meeting Room', desc: 'Collaborative space for client discussions' },
            ].map((item, idx) => (
              <ScaleIn key={idx} delay={idx * 100}>
                <div className="gallery-card">
                  <div className="gallery-image-wrapper">
                    <Image src={item.img} alt={item.title} width={400} height={300} className="gallery-image" unoptimized />
                    <div className="gallery-overlay">
                      <span>View</span>
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
        <div className="quicklinks-container">
          <FadeInUp>
            <div className="quicklinks-header">
              <span className="quicklinks-badge">QUICK ACCESS</span>
              <h2 className="quicklinks-title">Explore <span className="highlight">More.</span></h2>
              <p className="quicklinks-subtitle">Discover everything we have to offer</p>
            </div>
          </FadeInUp>
          <div className="quicklinks-grid">
            {[
              { href: '/projects', label: 'Browse Projects', description: 'Explore our premium properties', icon: '🏠' },
              { href: '/book', label: 'Book a Site Visit', description: 'Schedule your personal tour', icon: '📅' },
              { href: '/compare', label: 'Compare Properties', description: 'Make informed decisions', icon: '📊' },
              { href: '/chat', label: 'AI Assistant', description: 'Get instant answers', icon: '🤖' },
            ].map((link, idx) => (
              <ScaleIn key={idx} delay={idx * 100}>
                <Link href={link.href} className="quicklink-card">
                  <div className="quicklink-icon">{link.icon}</div>
                  <div className="quicklink-content">
                    <h3>{link.label}</h3>
                    <p>{link.description}</p>
                  </div>
                  <div className="quicklink-arrow">
                    <ArrowRightIcon />
                  </div>
                </Link>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">HAPPY CUSTOMERS</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">SATISFACTION RATE</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">SUPPORT AVAILABLE</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        /* Hero Section */
        .hero-section {
          position: relative;
          height: 55vh;
          min-height: 450px;
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
          padding: 0.4rem 1.2rem;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          border: 1px solid rgba(154,177,122,0.3);
        }
        .hero-title { font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; }
        @media (min-width: 768px) { .hero-title { font-size: 3.5rem; } }
        .highlight { color: #9AB17A; }
        .hero-subtitle { font-size: 0.95rem; max-width: 550px; margin: 0 auto; opacity: 0.9; line-height: 1.6; }

        /* Main Contact Section */
        .contact-main { padding: 4rem 1.5rem; background: #F5F2EA; }
        .contact-container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 3rem; }
        @media (min-width: 1024px) { .contact-container { grid-template-columns: 1fr 1fr; gap: 4rem; } }

        /* Contact Info Grid */
        .contact-info-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 768px) { .contact-info-grid { grid-template-columns: repeat(2, 1fr); } }
        
        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.2rem;
          background: white;
          border-radius: 20px;
          border: 1px solid rgba(154,177,122,0.15);
          transition: all 0.3s ease;
        }
        .info-card:hover { transform: translateY(-3px); border-color: #9AB17A; box-shadow: 0 8px 20px rgba(0,0,0,0.05); }
        .info-icon { width: 45px; height: 45px; background: rgba(154,177,122,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .info-icon svg { width: 20px; height: 20px; color: #9AB17A; }
        .info-content h4 { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #9AB17A; margin-bottom: 0.4rem; }
        .info-content p { font-size: 0.8rem; color: #2C2C1E; line-height: 1.5; margin-bottom: 0.2rem; }

        /* WhatsApp Card */
        .whatsapp-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;
          background: #25D366;
          color: white;
          padding: 1rem 1.2rem;
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .whatsapp-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(37,211,102,0.2); }
        .whatsapp-card span { font-size: 0.85rem; font-weight: 600; flex: 1; }
        .whatsapp-card svg:first-child { width: 20px; height: 20px; }
        .whatsapp-card svg:last-child { width: 16px; height: 16px; opacity: 0.7; }

        /* Map Card */
        .map-card { position: relative; height: 200px; border-radius: 16px; overflow: hidden; transition: all 0.3s ease; }
        .map-card:hover { transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.1); }
        .map-card iframe { width: 100%; height: 100%; }
        .map-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; pointer-events: none; }
        .map-pin { display: flex; align-items: center; gap: 0.5rem; background: rgba(44,44,30,0.9); backdrop-filter: blur(8px); padding: 0.5rem 1rem; border-radius: 50px; }
        .map-pin span { font-size: 0.75rem; color: white; font-weight: 500; }

        /* Form Wrapper */
        .form-wrapper {
          background: white;
          border-radius: 24px;
          padding: 1.8rem;
          box-shadow: 0 15px 35px rgba(0,0,0,0.05);
          border: 1px solid rgba(154,177,122,0.15);
        }
        @media (min-width: 768px) { .form-wrapper { padding: 2rem; } }
        
        .form-header { text-align: center; margin-bottom: 1.5rem; }
        .form-header h3 { font-size: 1.3rem; font-weight: 600; color: #2C2C1E; margin-bottom: 0.3rem; }
        .form-header p { font-size: 0.75rem; color: #9A9A7A; }

        .contact-form { display: flex; flex-direction: column; gap: 1rem; }
        .form-row { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 768px) { .form-row { grid-template-columns: 1fr 1fr; } }
        
        .form-group { display: flex; flex-direction: column; gap: 0.3rem; }
        .full-width { grid-column: 1 / -1; }
        .form-group label { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #9A9A7A; transition: color 0.2s; }
        .form-group.focused label { color: #9AB17A; }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1.5px solid rgba(154,177,122,0.2);
          border-radius: 12px;
          font-size: 0.85rem;
          background: #F5F2EA;
          color: #2C2C1E;
          outline: none;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: #9AB17A;
          box-shadow: 0 0 0 3px rgba(154,177,122,0.1);
        }

        .submit-button {
          width: 100%;
          padding: 0.85rem;
          background: #9AB17A;
          color: white;
          border: none;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }
        .submit-button:hover { background: #8AA86A; transform: translateY(-2px); }

        /* Success Message */
        .success-container { text-align: center; padding: 2rem 1rem; }
        .success-icon { width: 60px; height: 60px; background: #9AB17A; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; color: white; margin: 0 auto 1rem; animation: successPop 0.5s ease; }
        @keyframes successPop { 0% { transform: scale(0); } 80% { transform: scale(1.1); } 100% { transform: scale(1); } }
        .success-container h3 { font-size: 1.3rem; font-weight: 600; color: #2C2C1E; margin-bottom: 0.5rem; }
        .success-container p { color: #9A9A7A; margin-bottom: 1.5rem; font-size: 0.85rem; }
        .back-button { background: transparent; border: 1.5px solid rgba(154,177,122,0.3); padding: 0.6rem 1.5rem; border-radius: 50px; font-size: 0.8rem; font-weight: 600; color: #2C2C1E; cursor: pointer; transition: all 0.2s; }
        .back-button:hover { border-color: #9AB17A; background: rgba(154,177,122,0.05); }

        /* Gallery Section */
        .gallery-section { padding: 4rem 1.5rem; background: linear-gradient(135deg, #FBE8CE 0%, #F5F2EA 100%); }
        .gallery-container { max-width: 1200px; margin: 0 auto; }
        .gallery-header { text-align: center; margin-bottom: 2rem; }
        .gallery-badge { display: inline-block; background: rgba(154,177,122,0.1); padding: 0.3rem 1rem; border-radius: 50px; font-size: 0.65rem; font-weight: 600; color: #9AB17A; letter-spacing: 0.1em; margin-bottom: 0.8rem; }
        .gallery-title { font-size: 1.8rem; font-weight: 500; color: #2C2C1E; margin-bottom: 0.3rem; }
        @media (min-width: 768px) { .gallery-title { font-size: 2.2rem; } }
        .gallery-subtitle { font-size: 0.85rem; color: #9A9A7A; }
        .gallery-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-top: 1.5rem; }
        @media (min-width: 768px) { .gallery-grid { grid-template-columns: repeat(3, 1fr); } }
        .gallery-card { background: white; border-radius: 18px; overflow: hidden; transition: all 0.3s ease; border: 1px solid rgba(154,177,122,0.15); }
        .gallery-card:hover { transform: translateY(-5px); box-shadow: 0 12px 25px rgba(0,0,0,0.08); border-color: #9AB17A; }
        .gallery-image-wrapper { position: relative; aspect-ratio: 4/3; overflow: hidden; cursor: pointer; }
        .gallery-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .gallery-card:hover .gallery-image { transform: scale(1.05); }
        .gallery-overlay { position: absolute; inset: 0; background: rgba(44,44,30,0.7); display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; }
        .gallery-image-wrapper:hover .gallery-overlay { opacity: 1; }
        .gallery-overlay span { background: #9AB17A; color: #41431B; padding: 0.3rem 0.8rem; border-radius: 50px; font-size: 0.7rem; font-weight: 600; }
        .gallery-info { padding: 1rem; text-align: left; }
        .gallery-info h4 { font-size: 0.9rem; font-weight: 600; color: #2C2C1E; margin-bottom: 0.2rem; }
        .gallery-info p { font-size: 0.7rem; color: #9A9A7A; }

        /* Quick Links Section */
        .quicklinks-section { padding: 4rem 1.5rem; background: #F5F2EA; }
        .quicklinks-container { max-width: 1200px; margin: 0 auto; }
        .quicklinks-header { text-align: center; margin-bottom: 2rem; }
        .quicklinks-badge { display: inline-block; background: rgba(154,177,122,0.1); padding: 0.3rem 1rem; border-radius: 50px; font-size: 0.65rem; font-weight: 600; color: #9AB17A; letter-spacing: 0.1em; margin-bottom: 0.8rem; }
        .quicklinks-title { font-size: 1.8rem; font-weight: 500; color: #2C2C1E; margin-bottom: 0.3rem; }
        @media (min-width: 768px) { .quicklinks-title { font-size: 2.2rem; } }
        .quicklinks-subtitle { font-size: 0.85rem; color: #9A9A7A; }
        .quicklinks-grid { display: grid; grid-template-columns: 1fr; gap: 1rem; margin-top: 1.5rem; }
        @media (min-width: 768px) { .quicklinks-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1024px) { .quicklinks-grid { grid-template-columns: repeat(4, 1fr); gap: 1.2rem; } }
        .quicklink-card {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 1rem;
          background: #EDE9DE;
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(154,177,122,0.15);
        }
        .quicklink-card:hover { transform: translateY(-3px); border-color: #9AB17A; box-shadow: 0 8px 20px rgba(0,0,0,0.05); }
        .quicklink-icon { font-size: 1.4rem; width: 40px; height: 40px; background: rgba(154,177,122,0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .quicklink-content { flex: 1; }
        .quicklink-content h3 { font-size: 0.85rem; font-weight: 600; color: #2C2C1E; margin-bottom: 0.2rem; transition: color 0.2s; }
        .quicklink-card:hover .quicklink-content h3 { color: #9AB17A; }
        .quicklink-content p { font-size: 0.65rem; color: #9A9A7A; }
        .quicklink-arrow { width: 28px; height: 28px; background: rgba(154,177,122,0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; flex-shrink: 0; }
        .quicklink-arrow svg { width: 12px; height: 12px; color: #9AB17A; }
        .quicklink-card:hover .quicklink-arrow { background: #9AB17A; transform: translateX(3px); }
        .quicklink-card:hover .quicklink-arrow svg { color: white; }

        /* Stats Section */
        .stats-section { padding: 2rem 1.5rem 3rem; background: linear-gradient(135deg, #E4DFB5 0%, #C3CC9B 100%); }
        .stats-container { max-width: 800px; margin: 0 auto; }
        .stats-grid { display: flex; justify-content: center; align-items: center; gap: 1.5rem; padding: 1.2rem; background: white; border-radius: 50px; }
        @media (max-width: 768px) { .stats-grid { flex-direction: column; gap: 1rem; border-radius: 30px; padding: 1.5rem; } }
        .stat-item { text-align: center; flex: 1; }
        .stat-number { font-size: 1.6rem; font-weight: 800; color: #9AB17A; margin-bottom: 0.2rem; letter-spacing: -0.02em; }
        .stat-label { font-size: 0.6rem; font-weight: 700; color: #9A9A7A; letter-spacing: 0.08em; }
        .stat-divider { width: 1px; height: 35px; background: rgba(154,177,122,0.2); }
        @media (max-width: 768px) { .stat-divider { width: 50px; height: 1px; } }

        @media (max-width: 768px) {
          .contact-main { padding: 2rem 1rem; }
          .info-card { padding: 1rem; }
          .info-icon { width: 40px; height: 40px; }
          .info-content p { font-size: 0.75rem; }
        }
      `}</style>
    </main>
  );
}