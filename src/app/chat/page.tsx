'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

const RESPONSES: Record<string, string> = {
  'available': 'We currently have several available projects: **Greenfields Residency** (₹58L–₹82L, Gangapur Road), **Skyline Heights** (₹1.1Cr–₹1.45Cr, College Road), **Palm Grove Villas** (₹2.2Cr–₹3.1Cr, Trimbak Road), **Commerce Square** and **Silver Arcade** (commercial). Would you like details on any specific one?',
  'projects': 'We have 9 projects across Nashik — residential and commercial. Our flagship ones are Greenfields Residency, Skyline Heights, and Palm Grove Villas. Visit our **Projects** page for the full list with filtering by type and status.',
  '2 bhk': '2 BHK flats in Nashik range from ₹35L to ₹82L depending on location and amenities. Greenfields Residency on Gangapur Road offers 2 BHK starting at ₹58L, and Swabhagya Vista on Nashik Road starts at ₹28L. Shall I help you compare them?',
  '3 bhk': '3 BHK options: Greenfields Residency (₹68L–₹82L) and Skyline Heights (₹1.1Cr–₹1.45Cr) with sky lounge views. Both are RERA verified with clear title. Would you like to schedule a site visit?',
  'price': 'Our properties range from ₹18L (Anand Nagar Plots) to ₹3.1Cr (Palm Grove Villas). Residential apartments start at ₹28L and go up to ₹1.45Cr. What is your budget range?',
  'book': 'Booking a site visit is easy! Go to our **Book a Visit** page, select your preferred property, choose a date and time, and we confirm within 2 hours. No commitment required. Would you like to proceed?',
  'visit': 'You can book a site visit directly on our website — it takes 2 minutes. Select the property, preferred date, and time slot. Our coordinator will call to confirm. Shall I guide you there?',
  'loan': 'We have tie-ups with SBI, HDFC, ICICI, Axis Bank, Bank of Baroda, Kotak, and PNB Housing Finance. Our loan desk processes applications in parallel — typical approval is 10–14 days. Use our **EMI Calculator** to plan your budget!',
  'emi': 'Our EMI Calculator (available on the EMI page) lets you set loan amount (up to ₹5Cr), interest rate (5%–18%), and tenure (1–30 years) to get your exact monthly installment. For ₹50L at 8.5% over 20 years, EMI is approximately ₹43,391/month.',
  'rera': 'All projects listed on our platform are RERA registered under MahaRERA. Each project card shows the RERA number which you can verify at maharerait.mahaonline.gov.in for complete transparency.',
  'gangapur': 'Gangapur Road is one of Nashik\'s prime residential corridors. We have Greenfields Residency there — a gated township with 2 & 3 BHK flats from ₹58L. Great connectivity, schools, and hospitals nearby.',
  'nashik': 'Nashik is an excellent investment destination with steady capital appreciation of 8–12% annually. We specialize in Gangapur Road, College Road, Nashik Road, Cidco, and Trimbak Road micro-markets.',
  'contact': 'You can reach us at: 📞 +91 253 250 0000 | 📱 +91 98765 43210 (WhatsApp) | ✉️ info@swabhagyarealty.com. Office at 123, Swabhagya Tower, Gangapur Road, Nashik. Open Mon–Sat, 10AM–7PM.',
  'default': 'Thank you for your question! Our team specializes in residential and commercial properties across Nashik. Could you tell me more about what you\'re looking for — budget range, location preference, or property type? I\'d be happy to help narrow it down.',
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, val] of Object.entries(RESPONSES)) {
    if (key !== 'default' && lower.includes(key)) return val;
  }
  return RESPONSES['default'];
}

const SUGGESTIONS = [
  'Available projects?',
  '2 BHK price range?',
  'How to book a visit?',
  'Home loan options',
  'Projects in Gangapur Road',
  'RERA verified listings',
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'bot',
      text: 'Hi! I\'m the Swabhagya Realty assistant. I can help you find projects, check prices, calculate EMIs, or book a site visit. What are you looking for today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: 'bot', text: getResponse(text) }]);
    }, 1200 + Math.random() * 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') send(input);
  };

  return (
    <main>
      {/* ── IMAGE HERO ── */}
      <div className="inner-hero">
        <Image
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&q=80"
          alt="AI Assistant"
          fill
          className="inner-hero-img"
          priority
          unoptimized
        />
        <div className="inner-hero-overlay" />
        <div className="inner-hero-content">
          <p className="inner-hero-label">Always online</p>
          <h1 className="inner-hero-h">AI Property Assistant.</h1>
          <p className="inner-hero-sub">
            Get instant answers to your questions about Nashik real estate. From finding the perfect 2BHK to checking RERA compliance, our AI is ready to help 24/7.
          </p>
        </div>
      </div>

      <section className="sec" style={{ paddingTop: '4rem', background: 'var(--bg1)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--bg)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1.5px solid var(--border2)', boxShadow: '0 8px 32px rgba(154,177,122,0.12)', height: '600px', display: 'flex', flexDirection: 'column' }}>
          <div className="chat-header">
            <h2 style={{ fontFamily: '\'Cormorant Garamond\', serif', fontSize: '1.3rem', fontWeight: 600, color: 'var(--text1)', margin: 0 }}>
              Chat with Swabhagya Assistant
            </h2>
            <p style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: '.2rem' }}>Typically replies instantly</p>
          </div>

          <div className="chat-messages" ref={messagesRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.role}`}>
                <div className={`chat-avatar ${msg.role === 'bot' ? 'bot' : 'user-av'}`}>
                  {msg.role === 'bot' ? 'SR' : 'U'}
                </div>
                <div className="chat-bubble">{msg.text}</div>
              </div>
            ))}
            {typing && (
              <div className="chat-msg bot">
                <div className="chat-avatar bot">SR</div>
                <div className="chat-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
          </div>

          <div className="chat-footer">
            <div className="chat-suggestions" style={{ marginBottom: '.75rem', marginTop: 0 }}>
              {SUGGESTIONS.map((s) => (
                <button key={s} className="chat-sug" onClick={() => send(s)}>{s}</button>
              ))}
            </div>
            <div className="chat-input-row" style={{ maxWidth: '100%' }}>
              <input
                className="chat-input"
                id="chatInput"
                placeholder="Ask about projects, prices, locations…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button className="chat-send" onClick={() => send(input)}>Send</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
