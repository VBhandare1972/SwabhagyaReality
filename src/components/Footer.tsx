'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-premium">
      <div className="footer-premium-container">
        {/* Main Footer Content */}
        <div className="footer-premium-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="footer-logo-icon">🏠</span>
              <span className="footer-logo-text">Swabhagya Realty</span>
            </div>
            <p className="footer-brand-desc">
              Nashik's most trusted real estate partner since 2012. Residential, commercial, 
              and investment properties curated with transparency and care.
            </p>
           
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4>Properties</h4>
            <ul>
              <li><Link href="/projects">All Projects</Link></li>
              <li><Link href="/projects?filter=residential">Residential</Link></li>
              <li><Link href="/projects?filter=commercial">Commercial</Link></li>
              
              <li><Link href="/projects?filter=launching">Launching Soon</Link></li>
            </ul>
          </div>

          {/* Tools Column */}
          <div className="footer-links-col">
            <h4>Smart Tools</h4>
            <ul>
              <li><Link href="/compare">Compare Properties</Link></li>
              <li><Link href="/chat">AI Assistant</Link></li>
              <li><Link href="/book">Book a Visit</Link></li>
             
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-links-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/why-us">Why Choose Us</Link></li>
              
              <li><Link href="/contact">Contact Us</Link></li>
              
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="footer-contact-col">
            <h4>Get in Touch</h4>
            <div className="contact-info-item">
              <span className="contact-icon">📍</span>
              <span>123, Swabhagya Tower, Gangapur Road, Nashik — 422013</span>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon">📞</span>
              <span>+91 253 250 0000</span>
            </div>
            <div className="contact-info-item">
              <span className="contact-icon">✉️</span>
              <span>info@swabhagyarealty.com</span>
            </div>
            
          </div>
        </div>

        {/* Footer Bottom - Centered */}
        <div className="footer-premium-bottom">
          <div className="footer-bottom-centered">
            <p>© {currentYear} Swabhagya Realty Pvt. Ltd. All rights reserved.</p>
            <div className="footer-legal">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span className="separator">|</span>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-premium {
          background: linear-gradient(135deg, #2C2C1E 0%, #1a1a10 100%);
          color: #e0e0d0;
          border-top: 1px solid rgba(154, 177, 122, 0.2);
          position: relative;
          overflow: hidden;
        }

        .footer-premium::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #9AB17A, #C3CC9B, #9AB17A);
        }

        .footer-premium-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 1.5rem 2rem;
        }

        @media (min-width: 768px) {
          .footer-premium-container {
            padding: 4rem 3rem 2rem;
          }
        }

        @media (min-width: 1024px) {
          .footer-premium-container {
            padding: 5rem 5rem 2.5rem;
          }
        }

        .footer-premium-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 768px) {
          .footer-premium-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .footer-premium-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
            gap: 2rem;
          }
        }

        .footer-brand-col {
          grid-column: 1 / -1;
        }

        @media (min-width: 768px) {
          .footer-brand-col {
            grid-column: auto;
          }
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .footer-logo-icon {
          font-size: 2rem;
        }

        .footer-logo-text {
          font-size: 1.5rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #fff 0%, #9AB17A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .footer-brand-desc {
          font-size: 0.85rem;
          line-height: 1.7;
          color: #b0b0a0;
          margin-bottom: 1.5rem;
          max-width: 350px;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(154, 177, 122, 0.1);
          border-radius: 50%;
          color: #9AB17A;
          transition: all 0.3s ease;
          font-size: 1rem;
          text-decoration: none;
        }

        .social-icon:hover {
          background: #9AB17A;
          color: #fff;
          transform: translateY(-3px);
        }

        .footer-links-col h4,
        .footer-contact-col h4 {
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9AB17A;
          margin-bottom: 1.25rem;
          position: relative;
          display: inline-block;
        }

        .footer-links-col h4::after,
        .footer-contact-col h4::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 30px;
          height: 2px;
          background: #9AB17A;
          border-radius: 2px;
        }

        .footer-links-col ul {
          list-style: none;
          padding: 0;
        }

        .footer-links-col li {
          margin-bottom: 0.75rem;
        }

        .footer-links-col a {
          color: #c0c0b0;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .footer-links-col a:hover {
          color: #9AB17A;
          padding-left: 5px;
        }

        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
          font-size: 0.85rem;
          color: #c0c0b0;
          line-height: 1.5;
        }

        .contact-icon {
          color: #9AB17A;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .footer-cta {
          margin-top: 1.5rem;
        }

        .footer-cta-btn {
          display: inline-block;
          padding: 0.6rem 1.25rem;
          background: linear-gradient(135deg, #9AB17A, #839A65);
          color: #fff;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-cta-btn:hover {
          transform: translateX(5px);
          background: linear-gradient(135deg, #839A65, #9AB17A);
        }

        .footer-premium-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(154, 177, 122, 0.15);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-bottom-centered {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media (min-width: 768px) {
          .footer-bottom-centered {
            flex-direction: row;
            gap: 1.5rem;
            align-items: center;
          }
        }

        .footer-bottom-centered p {
          font-size: 0.7rem;
          color: #909080;
          margin: 0;
        }

        .footer-legal {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }

        .footer-legal a {
          font-size: 0.7rem;
          color: #909080;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-legal a:hover {
          color: #9AB17A;
        }

        .separator {
          color: #606050;
          font-size: 0.7rem;
        }

        .footer-bottom-right {
          text-align: left;
        }

        @media (min-width: 768px) {
          .footer-bottom-right {
            text-align: right;
          }
        }

        .rera-text {
          font-size: 0.7rem;
          color: #909080;
        }
      `}</style>
    </footer>
  );
}