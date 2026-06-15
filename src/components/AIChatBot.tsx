'use client';
import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

const RESPONSES: Record<string, string> = {
  'available': 'We have several available projects: **Greenfields Residency** (₹58L–₹82L, Gangapur Road), **Skyline Heights** (₹1.1Cr–₹1.45Cr, College Road), **Palm Grove Villas** (₹2.2Cr–₹3.1Cr). Want details?',
  'projects': 'We have 9 projects across Nashik — residential and commercial. Our flagship ones are Greenfields Residency, Skyline Heights, and Palm Grove Villas. Visit our Projects page for the full list!',
  '2 bhk': '2 BHK flats range from ₹35L to ₹82L. Greenfields Residency on Gangapur Road offers 2 BHK starting at ₹58L. Shall I help you compare?',
  '3 bhk': '3 BHK options: Greenfields Residency (₹68L–₹82L) and Skyline Heights (₹1.1Cr–₹1.45Cr). Both RERA verified. Want to schedule a site visit?',
  'price': 'Our properties range from ₹18L (plots) to ₹3.1Cr (villas). Apartments start at ₹28L. What is your budget range?',
  'book': 'Booking a site visit is easy! Go to our Book a Visit page, select your property, date and time. We confirm within 2 hours. No commitment required!',
  'loan': 'We have tie-ups with SBI, HDFC, ICICI, Axis Bank, and more. Our loan desk processes applications quickly — typical approval is 10–14 days.',
  'emi': 'Our EMI Calculator helps you plan your budget. For ₹50L at 8.5% over 20 years, EMI is approximately ₹43,391/month.',
  'rera': 'All projects on our platform are RERA registered under MahaRERA. You can verify at maharerait.mahaonline.gov.in.',
  'contact': 'Reach us at: 📞 +91 253 250 0000 | 📱 +91 98765 43210 (WhatsApp) | ✉️ info@swabhagyarealty.com. Office: 123, Swabhagya Tower, Gangapur Road, Nashik.',
  'default': 'Hi! I can help you find projects, check prices, or book a site visit in Nashik. What are you looking for?',
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, val] of Object.entries(RESPONSES)) {
    if (key !== 'default' && lower.includes(key)) return val;
  }
  return RESPONSES['default'];
}

const QUICK_REPLIES = ['Available projects?', '2 BHK options?', 'Book a visit', 'Home loan info'];

export default function AIChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi! 👋 I\'m your Swabhagya Realty assistant. Ask me about properties, prices, or bookings!' },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [pulsing, setPulsing] = useState(true);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, typing]);

  // Stop pulsing after 5 seconds
  useEffect(() => {
    const t = setTimeout(() => setPulsing(false), 5000);
    return () => clearTimeout(t);
  }, []);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { role: 'bot', text: getResponse(text) }]);
    }, 1000 + Math.random() * 600);
  };

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div className="ai-chat-window">
          {/* Header */}
          <div className="ai-chat-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
              <div className="ai-bot-avatar-sm">🤖</div>
              <div>
                <div style={{ fontSize: '.85rem', fontWeight: 600, color: '#fff' }}>Swabhagya AI</div>
                <div style={{ fontSize: '.68rem', color: 'rgba(255,255,255,.7)', display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                  Online · Replies instantly
                </div>
              </div>
            </div>
            <button className="ai-chat-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Messages */}
          <div className="ai-chat-messages" ref={messagesRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`ai-msg ${msg.role}`}>
                {msg.role === 'bot' && <div className="ai-msg-avatar">🤖</div>}
                <div className="ai-msg-bubble">{msg.text}</div>
              </div>
            ))}
            {typing && (
              <div className="ai-msg bot">
                <div className="ai-msg-avatar">🤖</div>
                <div className="ai-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          <div className="ai-quick-replies">
            {QUICK_REPLIES.map((q) => (
              <button key={q} className="ai-quick-btn" onClick={() => send(q)}>{q}</button>
            ))}
          </div>

          {/* Input */}
          <div className="ai-chat-input-row">
            <input
              className="ai-chat-input"
              placeholder="Ask about properties…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send(input)}
            />
            <button className="ai-send-btn" onClick={() => send(input)}>→</button>
          </div>
        </div>
      )}

      {/* Floating Bot Button */}
      <button
        className={`ai-bot-btn${pulsing ? ' pulsing' : ''}`}
        onClick={() => { setOpen((v) => !v); setPulsing(false); }}
        aria-label="Open AI Chat"
        title="Chat with AI Assistant"
      >
        {open ? '✕' : '🤖'}
        {!open && (
          <span className="ai-bot-label">Ask AI</span>
        )}
      </button>
    </>
  );
}
