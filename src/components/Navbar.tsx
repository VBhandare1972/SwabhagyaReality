'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/why-us', label: 'Why Us' },
  { href: '/compare', label: 'Compare' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleIconClick = () => {
    console.log('Swabhagya');
  };

  const navBg = isHome
    ? scrolled
      ? 'rgba(0,0,0,0.85)'
      : 'rgba(0,0,0,0.3)'
    : scrolled
    ? 'rgba(245,242,234,0.98)'
    : 'rgba(245,242,234,0.98)';

  const linkColor = isHome ? 'rgba(255,255,255,0.85)' : 'var(--text3)';
  const linkHoverColor = isHome ? '#fff' : 'var(--text1)';
  const logoColor = isHome ? '#fff' : 'var(--text1)';
  const hamburgerColor = isHome ? '#fff' : 'var(--text1)';
  const borderColor = isHome ? 'rgba(255,255,255,0.15)' : 'var(--border2)';
  const boxShadow = isHome
    ? scrolled ? '0 2px 25px rgba(0,0,0,0.3)' : 'none'
    : '0 2px 20px rgba(154,177,122,0.12)';

  const buttonBg = '#C3CC9B';
  const buttonColor = '#41431B';
  const mobileButtonBg = '#C3CC9B';
  const mobileButtonColor = '#41431B';

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '1rem 2rem',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: navBg,
          borderBottom: `1px solid ${borderColor}`,
          boxShadow,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          {/* Logo - Left Side */}
          <div
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: logoColor,
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexShrink: 0,
            }}
          >
            {/* Professional Modern Building Logo */}
            <div
              onClick={handleIconClick}
              style={{
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Building outline */}
                <path
                  d="M10 36V10L20 4L30 10V36"
                  stroke="#C3CC9B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* Building floors */}
                <line x1="10" y1="16" x2="30" y2="16" stroke="#C3CC9B" strokeWidth="2" />
                <line x1="10" y1="22" x2="30" y2="22" stroke="#C3CC9B" strokeWidth="2" />
                <line x1="10" y1="28" x2="30" y2="28" stroke="#C3CC9B" strokeWidth="2" />
                {/* Windows left side */}
                <rect x="13" y="18" width="3" height="3" fill="#C3CC9B" rx="0.5" />
                <rect x="13" y="24" width="3" height="3" fill="#C3CC9B" rx="0.5" />
                <rect x="13" y="30" width="3" height="3" fill="#C3CC9B" rx="0.5" />
                {/* Windows right side */}
                <rect x="24" y="18" width="3" height="3" fill="#C3CC9B" rx="0.5" />
                <rect x="24" y="24" width="3" height="3" fill="#C3CC9B" rx="0.5" />
                <rect x="24" y="30" width="3" height="3" fill="#C3CC9B" rx="0.5" />
                {/* Door */}
                <path
                  d="M18 36V30H22V36"
                  stroke="#C3CC9B"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            
            <Link
              href="/"
              style={{
                color: logoColor,
                textDecoration: 'none',
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}
            >
              SWABHAGYA
            </Link>
          </div>

          {/* Right Side - Navigation Links + CTA Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            <div
              className="desktop-nav"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
              }}
            >
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: '0.8rem',
                    color: pathname === l.href ? (isHome ? '#fff' : 'var(--text1)') : linkColor,
                    fontWeight: pathname === l.href ? 600 : 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    transition: 'all 0.2s',
                    textDecoration: 'none',
                    position: 'relative',
                    padding: '0.5rem 0',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = linkHoverColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = pathname === l.href 
                      ? (isHome ? '#fff' : 'var(--text1)') 
                      : linkColor;
                  }}
                >
                  {l.label}
                  {pathname === l.href && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        height: '2px',
                        background: 'var(--sage)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </Link>
              ))}
            </div>

            <Link
              href="/book"
              className="book-visit-btn"
              style={{
                background: buttonBg,
                color: buttonColor,
                padding: '0.6rem 1.6rem',
                borderRadius: '40px',
                fontSize: '0.8rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              <span>Book a Visit</span>
            </Link>

            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              style={{
                display: 'none',
                flexDirection: 'column',
                gap: '4px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              <span style={{ width: '20px', height: '2px', background: hamburgerColor, borderRadius: '2px', transition: 'all 0.3s' }} />
              <span style={{ width: '20px', height: '2px', background: hamburgerColor, borderRadius: '2px', transition: 'all 0.3s' }} />
              <span style={{ width: '20px', height: '2px', background: hamburgerColor, borderRadius: '2px', transition: 'all 0.3s' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="mobile-menu-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isHome ? 'rgba(0,0,0,0.95)' : 'rgba(245,242,234,0.98)',
          backdropFilter: 'blur(20px)',
          zIndex: 1001,
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          transition: 'all 0.3s ease',
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'none',
            border: 'none',
            color: isHome ? '#fff' : 'var(--text1)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            opacity: 0.6,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
        >
          ✕
        </button>
        
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: '1.5rem',
              fontWeight: pathname === l.href ? 600 : 400,
              color: pathname === l.href ? '#C3CC9B' : (isHome ? '#fff' : 'var(--text1)'),
              textDecoration: 'none',
              transition: 'color 0.2s',
              fontFamily: 'inherit',
              padding: '0.5rem',
            }}
          >
            {l.label}
          </Link>
        ))}
        
        <Link
          href="/book"
          onClick={() => setMenuOpen(false)}
          style={{
            background: mobileButtonBg,
            color: mobileButtonColor,
            padding: '0.8rem 2rem',
            borderRadius: '40px',
            fontSize: '1rem',
            fontWeight: 600,
            textDecoration: 'none',
            marginTop: '1rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <span>Book a Visit</span>
        </Link>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
          .book-visit-btn {
            display: inline-flex !important;
          }
        }
        
        @media (max-width: 768px) {
          nav {
            padding: 0.8rem 1.2rem !important;
          }
        }
      `}</style>
    </>
  );
}