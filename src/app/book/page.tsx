'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS } from '@/lib/data';
import Footer from '@/components/Footer';

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', project: '', date: '', time: '10:00 AM', message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ name: '', phone: '', email: '', project: '', date: '', time: '10:00 AM', message: '' });
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
            Pick a property, choose your slot, and we&apos;ll confirm within 2 hours. No commitment required. Experience the space before you make a decision.
          </p>
        </div>
      </div>

      <div className="sec" style={{ paddingTop: '4rem' }}>
        <div className="book-grid">
          {/* ── FORM ── */}
          <div>
            {!submitted ? (
              <form className="form-box" onSubmit={handleSubmit}>
                <div className="field">
                  <label>Full Name</label>
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
                    <label>Phone</label>
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
                  <label>Property Interested In</label>
                  <select value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })} required>
                    <option value="">Select a project</option>
                    {PROJECTS.filter((p) => p.status !== 'sold').map((p) => (
                      <option key={p.id} value={p.name}>{p.name} — {p.loc}</option>
                    ))}
                  </select>
                </div>
                <div className="field-row">
                  <div className="field">
                    <label>Preferred Date</label>
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
                    <select value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}>
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
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
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

          {/* ── INFO CARDS ── */}
          <div className="info-cards">
            {[
              { icon: '⏱', title: 'Confirmed in 2 hours', desc: 'Our team reviews every request within 2 hours. You\'ll get a WhatsApp and call confirmation with exact details.' },
              { icon: '🚗', title: 'Free pickup available', desc: 'For select properties, we offer complimentary pickup from any Nashik location. Just mention it in the message box.' },
              { icon: '📵', title: 'Zero sales pressure', desc: 'Site visits are purely informational. Our advisors show you the property — the decision is entirely yours, at your pace.' },
              { icon: '📋', title: 'Bring your checklist', desc: 'We\'ll send you a pre-visit property checklist so you know exactly what to look for when you arrive.' },
            ].map((card) => (
              <div className="info-card" key={card.title}>
                <div className="info-card-icon">{card.icon}</div>
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
              className="info-card"
              style={{ background: '#e8f8ee', borderColor: 'rgba(37,211,102,.3)', textDecoration: 'none' }}
            >
              <div className="info-card-icon">💬</div>
              <div>
                <h4>Book via WhatsApp</h4>
                <p>Prefer WhatsApp? Message us directly and we&apos;ll schedule your visit instantly.</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── WHAT TO EXPECT GALLERY (NEW) ── */}
      <section className="sec sec-border" style={{ background: 'var(--bg1)' }}>
        <p className="label">The experience</p>
        <h2 className="h2">What to expect at a site visit.</h2>
        <div className="img-gallery">
          <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80" alt="Touring the property" width={400} height={300} className="gallery-img" unoptimized />
          <Image src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=600&q=80" alt="Reviewing floor plans" width={400} height={300} className="gallery-img" unoptimized />
          <Image src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=600&q=80" alt="Discussing details with advisor" width={400} height={300} className="gallery-img" unoptimized />
        </div>
      </section>

      <Footer />
    </main>
  );
}
