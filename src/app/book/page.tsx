'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/lib/data';
import Footer from '@/components/Footer';

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
    date: '',
    time: '10:00 AM',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({
      name: '',
      phone: '',
      email: '',
      project: '',
      date: '',
      time: '10:00 AM',
      message: '',
    });
  };

  return (
    <main>
      {/* ── IMAGE HERO ── */}
      <div className="inner-hero">
        <Image
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80"
          alt="Site Visit"
          fill
          className="inner-hero-img"
          priority
          unoptimized
        />
        <div className="inner-hero-overlay" />
        <div className="inner-hero-content">
          <p className="inner-hero-label">Get started</p>
          <h1 className="inner-hero-h">Book a Site Visit.</h1>
          <p className="inner-hero-sub">
            Pick a property, choose your slot, and we&apos;ll confirm within 2 hours. 
            No commitment required. Experience the space before you make a decision.
          </p>
        </div>
      </div>

      <div className="sec" style={{ paddingTop: '4rem' }}>
        <div className="book-grid">
          {/* ── FORM SECTION ── */}
          <div>
            {!submitted ? (
              <form className="form-box" onSubmit={handleSubmit}>
                <div className="field">
                  <label>
                    Full Name <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>

                <div className="field-row">
                  <div className="field">
                    <label>
                      Phone <span className="required-star">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="field">
                  <label>
                    Property Interested In <span className="required-star">*</span>
                  </label>
                  <select
                    value={form.project}
                    onChange={(e) => setForm({ ...form, project: e.target.value })}
                    required
                  >
                    <option value="">Select a project</option>
                    {PROJECTS.filter((p) => p.status !== 'sold').map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} — {p.loc}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field-row">
                  <div className="field">
                    <label>
                      Preferred Date <span className="required-star">*</span>
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      required
                    />
                  </div>
                  <div className="field">
                    <label>Preferred Time</label>
                    <select
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                    >
                      {['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'].map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="field">
                  <label>Message (optional)</label>
                  <textarea
                    placeholder="Any specific requirements, budget range, or questions…"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-p" style={{ width: '100%', justifyContent: 'center' }}>
                  Confirm Booking →
                </button>
              </form>
            ) : (
              <div className="success-msg show">
                <div className="success-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Booking Confirmed!</h3>
                <p>
                  Your site visit request has been received. Our coordinator will call you within 2 hours to confirm the slot.
                  <br /><br />
                  Thank you for choosing Swabhagya Realty.
                </p>
                <button className="btn btn-o" style={{ margin: '1.5rem auto 0', display: 'flex' }} onClick={reset}>
                  Book Another Visit
                </button>
              </div>
            )}
          </div>

          {/* ── INFO CARDS SECTION ── */}
          <div className="info-cards">
            {[
              {
                title: 'Confirmed in 2 hours',
                desc: "Our team reviews every request within 2 hours. You'll get a WhatsApp and call confirmation with exact details.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
                    <polyline points="12 6 12 12 16 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: 'Free pickup available',
                desc: 'For select properties, we offer complimentary pickup from any Nashik location. Just mention it in the message box.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L6 8H18L19 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="7" cy="17" r="2" stroke="white" strokeWidth="2" />
                    <circle cx="17" cy="17" r="2" stroke="white" strokeWidth="2" />
                    <path d="M5 13H19" stroke="white" strokeWidth="2" />
                  </svg>
                ),
              },
              {
                title: 'Zero sales pressure',
                desc: 'Site visits are purely informational. Our advisors show you the property — the decision is entirely yours, at your pace.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L3 7L5 16L12 22L19 16L21 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 8V12L14 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                title: 'Bring your checklist',
                desc: "We'll send you a pre-visit property checklist so you know exactly what to look for when you arrive.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 2H16V6H8V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 16H12" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((card, index) => (
              <div className="info-card animated-card" key={card.title} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="info-card-icon" style={{ background: '#9AB17A' }}>
                  {card.icon}
                </div>
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210?text=Hi%20Swabhagya%20Realty%2C%20I%20would%20like%20to%20book%20a%20site%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="info-card whatsapp-card animated-card"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="info-card-icon" style={{ background: '#9AB17A' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21L4.65 16.65C3.6 15.15 3 13.35 3 11.5C3 6.75 6.75 3 11.5 3C16.25 3 20 6.75 20 11.5C20 16.25 16.25 20 11.5 20C9.65 20 7.85 19.4 6.35 18.35L3 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8 8H9.5L10.5 11.5L9 12.5C10 14 11.5 15.5 13 14.5L14 13L17.5 14V15.5C17.5 17 16 17.5 14.5 17.5C11.5 17.5 7.5 13.5 7.5 10.5C7.5 9 8 7.5 9.5 7.5H11L12 11L10.5 12C11 13 12 14 13 13.5L14 12L17 13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h4>Book via WhatsApp</h4>
                <p>Prefer WhatsApp? Message us directly and we&apos;ll schedule your visit instantly.</p>
                <span className="whatsapp-badge">Click to chat →</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── WHAT TO EXPECT GALLERY (ANIMATED - NO WHITE BG) ── */}
      <section className="experience-section">
        <div className="experience-container">
          <p className="experience-label fade-in">The experience</p>
          <h2 className="experience-title slide-up">What to expect at a site visit.</h2>
          <div className="experience-gallery">
            <div className="experience-item zoom-in" style={{ animationDelay: '0.1s' }}>
              <div className="experience-image-wrapper">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
                  alt="Touring the property"
                  width={300}
                  height={200}
                  className="experience-img"
                  unoptimized
                />
                <div className="experience-overlay">
                  <p className="experience-caption">Touring the property</p>
                </div>
              </div>
            </div>
            <div className="experience-item zoom-in" style={{ animationDelay: '0.2s' }}>
              <div className="experience-image-wrapper">
                <Image
                  src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=600&q=80"
                  alt="Reviewing floor plans"
                  width={300}
                  height={200}
                  className="experience-img"
                  unoptimized
                />
                <div className="experience-overlay">
                  <p className="experience-caption">Reviewing floor plans</p>
                </div>
              </div>
            </div>
            <div className="experience-item zoom-in" style={{ animationDelay: '0.3s' }}>
              <div className="experience-image-wrapper">
                <Image
                  src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=600&q=80"
                  alt="Discussing details with advisor"
                  width={300}
                  height={200}
                  className="experience-img"
                  unoptimized
                />
                <div className="experience-overlay">
                  <p className="experience-caption">Discussing with advisor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .required-star {
          color: #e74c3c;
          margin-left: 4px;
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: #9AB17A;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: white;
        }

        .whatsapp-card {
          background: linear-gradient(135deg, #e8f8ee 0%, #d4f5e4 100%);
          border: 2px solid #9AB17A;
          transition: all 0.3s ease;
        }

        .whatsapp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(154, 177, 122, 0.2);
          border-color: #7a9a5a;
        }

        .whatsapp-badge {
          display: inline-block;
          margin-top: 8px;
          font-size: 0.85rem;
          color: #9AB17A;
          font-weight: 600;
        }

        .field input:focus,
        .field select:focus,
        .field textarea:focus {
          border-color: #9AB17A;
          box-shadow: 0 0 0 3px rgba(154, 177, 122, 0.1);
          outline: none;
        }

        .info-card {
          transition: all 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
        }

        .info-card-icon {
          transition: transform 0.3s ease;
        }

        .info-card:hover .info-card-icon {
          transform: scale(1.1);
        }

        /* Animations */
        .animated-card {
          animation: slideInFromLeft 0.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes slideInFromLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .slide-up {
          animation: slideUp 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .zoom-in {
          animation: zoomIn 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes zoomIn {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Experience section styles - No white backgrounds */
        .experience-section {
          padding: 2rem 0;
          background: #FBE8CE;
          position: relative;
          overflow: hidden;
        }

        .experience-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .experience-label {
          color: #9AB17A;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 2px;
          font-weight: 600;
          margin-bottom: 0.5rem;
          text-align: center;
          opacity: 0;
        }

        .experience-title {
          font-size: 1.5rem;
          color: #2d3748;
          margin-bottom: 1.5rem;
          text-align: center;
          font-weight: 600;
          opacity: 0;
        }

        .experience-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .experience-item {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0;
        }

        .experience-image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
        }

        .experience-img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .experience-item:hover .experience-img {
          transform: scale(1.1);
        }

        .experience-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          padding: 1rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .experience-item:hover .experience-overlay {
          transform: translateY(0);
        }

        .experience-caption {
          color: white;
          font-size: 0.8rem;
          font-weight: 500;
          margin: 0;
          text-align: center;
        }

        /* Shimmer effect on images */
        .experience-image-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
          z-index: 1;
        }

        .experience-item:hover .experience-image-wrapper::before {
          left: 100%;
        }
      `}</style>

      <style jsx global>{`
        .book-grid {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 3rem;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .form-box {
          background: white;
          border-radius: 24px;
          padding: 2rem;
          box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .form-box:hover {
          box-shadow: 0 25px 40px -12px rgba(0, 0, 0, 0.15);
        }

        .field {
          margin-bottom: 1.5rem;
        }

        .field label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #2d3748;
          font-size: 0.9rem;
        }

        .field input,
        .field select,
        .field textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
          font-family: inherit;
        }

        .field textarea {
          resize: vertical;
          min-height: 100px;
        }

        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-card {
          display: flex;
          gap: 1rem;
          padding: 1.25rem;
          background: white;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
          text-decoration: none;
        }

        .info-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-card h4 {
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
          font-weight: 700;
          color: #2d3748;
        }

        .info-card p {
          margin: 0;
          font-size: 0.85rem;
          color: #718096;
          line-height: 1.4;
        }

        .btn-p {
          background: #9AB17A;
          border: none;
          color: white;
          padding: 0.875rem 1.75rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-p:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(154, 177, 122, 0.3);
          background: #8aa36a;
        }

        .btn-o {
          background: transparent;
          border: 2px solid #9AB17A;
          color: #9AB17A;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .btn-o:hover {
          background: #9AB17A;
          color: white;
          transform: translateY(-2px);
        }

        .success-msg {
          background: white;
          border-radius: 24px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.08);
        }

        .success-msg h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #2d3748;
        }

        .success-msg p {
          color: #718096;
          line-height: 1.6;
        }

        .inner-hero {
          position: relative;
          height: 60vh;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .inner-hero-img {
          object-fit: cover;
        }

        .inner-hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.4) 100%);
        }

        .inner-hero-content {
          position: relative;
          z-index: 2;
          color: white;
          max-width: 800px;
          padding: 0 1.5rem;
        }

        .inner-hero-label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 1rem;
          font-weight: 500;
        }

        .inner-hero-h {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .inner-hero-sub {
          font-size: 1.1rem;
          opacity: 0.95;
          line-height: 1.6;
        }

        .sec {
          padding: 4rem 0;
        }

        @media (max-width: 968px) {
          .book-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .experience-gallery {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
        }

        @media (max-width: 768px) {
          .book-grid {
            padding: 0 1rem;
          }

          .form-box {
            padding: 1.5rem;
          }

          .info-card {
            padding: 1rem;
          }

          .inner-hero-h {
            font-size: 2rem;
          }

          .inner-hero-sub {
            font-size: 1rem;
          }

          .inner-hero {
            min-height: 400px;
          }
          
          .experience-title {
            font-size: 1.25rem;
          }
          
          .experience-img {
            height: 140px;
          }
        }

        @media (max-width: 640px) {
          .field-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
