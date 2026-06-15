'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS, Project } from '@/lib/data';
import Footer from '@/components/Footer';

// Icon Components
const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const HomeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const RulerIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12h20M12 2v20M6 6h4M14 6h4M6 18h4M14 18h4"/>
  </svg>
);

const PriceIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const AmenitiesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg>
);

const DocumentIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

const ConstructionIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="12" width="20" height="8" rx="2"/>
    <path d="M6 8V4h12v4"/>
    <path d="M8 12v4"/>
    <path d="M16 12v4"/>
  </svg>
);

const ActionIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="10 8 16 12 10 16 10 8"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M12 8v4M12 16h.01"/>
  </svg>
);

const PercentageIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="19" cy="5" r="2"/>
    <circle cx="5" cy="19" r="2"/>
    <line x1="5" y1="5" x2="19" y2="19"/>
  </svg>
);

const MarketIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"/>
    <path d="M18 17V9"/>
    <path d="M12 17V5"/>
    <path d="M6 17v-3"/>
  </svg>
);

const LightBulbIcon = ({ className, width, height }: { className?: string; width?: number; height?: number }) => (
  <svg 
    className={className} 
    width={width || 24} 
    height={height || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const ROWS = [
  { key: 'loc', label: 'Location', icon: LocationIcon },
  { key: 'bhk', label: 'Configuration', icon: HomeIcon },
  { key: 'area', label: 'Area', icon: RulerIcon },
  { key: 'price', label: 'Price', icon: PriceIcon },
  { key: 'possession', label: 'Possession', icon: CalendarIcon },
  { key: 'amenities', label: 'Amenities', icon: AmenitiesIcon },
  { key: 'rera', label: 'RERA No.', icon: DocumentIcon },
];

const FAQS = [
  { q: 'How do you verify property titles?', a: 'Our in-house legal team conducts a 30-year search report on the land title, verifies the RERA registration, and checks for any pending litigation or encumbrances before we ever list a project.' },
  { q: 'What should I prioritize: location or amenities?', a: 'For investment, prioritize location and connectivity. For end-use (living), prioritize a balance of location, school proximity, and amenities that fit your daily lifestyle. Our advisors can help you weigh these.' },
  { q: 'Are the prices shown negotiable?', a: 'The prices listed are builder quoted base prices. However, Swabhagya Realty negotiates bulk deals, which often allows us to secure prices 3-5% lower than direct walk-ins. We pass this benefit entirely to you.' },
  { q: 'Do you charge a brokerage fee?', a: 'For new developer projects, we do not charge any brokerage fee from the buyer. For resale properties, a standard 2% advisory fee applies, which includes complete legal and registration support.' },
];

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

export default function ComparePage() {
  const [slots, setSlots] = useState<(Project | null)[]>([null, null, null]);
  const [modalSlot, setModalSlot] = useState<number | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [hoveredSlot, setHoveredSlot] = useState<number | null>(null);
  const [animatedRows, setAnimatedRows] = useState<string[]>([]);
  const [hoveredTip, setHoveredTip] = useState<number | null>(null);

  const openModal = (slot: number) => setModalSlot(slot);
  const closeModal = () => setModalSlot(null);

  const selectProject = (project: Project) => {
    if (modalSlot === null) return;
    const next = [...slots];
    next[modalSlot] = project;
    setSlots(next);
    closeModal();
  };

  const removeSlot = (i: number) => {
    const next = [...slots];
    next[i] = null;
    setSlots(next);
  };

  const filled = slots.filter(Boolean) as Project[];

  useEffect(() => {
    if (filled.length >= 2) {
      const rowKeys = ROWS.map(r => r.key);
      let index = 0;
      const interval = setInterval(() => {
        if (index < rowKeys.length) {
          setAnimatedRows(prev => [...prev, rowKeys[index]]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, 150);
      return () => clearInterval(interval);
    } else {
      setAnimatedRows([]);
    }
  }, [filled.length]);

  const advisoryTips = [
    {
      title: 'Check the UDS (Undivided Share)',
      description: 'A lower base price sometimes means a smaller share of the land. Always compare the UDS to ensure you\'re getting fair value for your investment.',
      icon: ShieldIcon,
      color: '#9AB17A',
      stat: '30%',
      statLabel: 'Land Share'
    },
    {
      title: 'Evaluate Loading Percentages',
      description: 'Carpet area vs Built-up area. Make sure you are paying for actual usable space, not just common corridors and walls.',
      icon: PercentageIcon,
      color: '#C3CC9B',
      stat: '20-35%',
      statLabel: 'Loading Range'
    },
    {
      title: 'Analyze the Micro-Market',
      description: 'A property on College Road will yield different rental returns compared to Pathardi Phata. Factor in connectivity, social infrastructure, and future development plans.',
      icon: MarketIcon,
      color: '#A8B89A',
      stat: '8-12%',
      statLabel: 'ROI Potential'
    }
  ];

  return (
    <main style={{ overflowX: 'hidden' }}>
      {/* Hero Section - Improved */}
      <div className="hero-compare-enhanced">
        <div className="hero-bg-compare-enhanced">
          <Image
            src="https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg?w=1920&q=80"
            alt="Compare Properties"
            fill
            className="hero-image-compare-enhanced"
            priority
            unoptimized
          />
        </div>
        <div className="hero-overlay-compare-enhanced"></div>
        <div className="hero-content-compare-enhanced">
          <FadeInUp>
            <div className="hero-badge-compare-enhanced">
              <StarIcon />
              <span>SMART COMPARISON TOOL</span>
            </div>
            <h1 className="hero-title-compare-enhanced">Compare <span className="highlight">Properties</span><br />Side by Side</h1>
            <p className="hero-subtitle-compare-enhanced">
              Make confident decisions with our interactive comparison tool. Select up to 3 properties and analyze every detail.
            </p>
            <div className="hero-stats-compare-enhanced">
              <div className="hero-stat-enhanced">
                <div className="hero-stat-value-enhanced">500+</div>
                <div className="hero-stat-label-enhanced">Properties Compared</div>
              </div>
              <div className="hero-stat-divider-enhanced"></div>
              <div className="hero-stat-enhanced">
                <div className="hero-stat-value-enhanced">98%</div>
                <div className="hero-stat-label-enhanced">Satisfied Users</div>
              </div>
              <div className="hero-stat-divider-enhanced"></div>
              <div className="hero-stat-enhanced">
                <div className="hero-stat-value-enhanced">3X</div>
                <div className="hero-stat-label-enhanced">Better Decisions</div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content-compare-enhanced">
        {/* Slot Selector - Improved */}
        <div className="slot-section-enhanced">
          <div className="section-header-compare-enhanced">
            <div className="section-icon-enhanced">
              <HomeIcon />
            </div>
            <h2 className="section-title-compare-enhanced">Select Properties to Compare</h2>
            <p className="section-subtitle-compare-enhanced">Choose up to 3 properties from our curated collection</p>
          </div>
          <div className="compare-selector-compare-enhanced">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`compare-slot-compare-enhanced ${slots[i] ? 'selected' : 'empty'} ${hoveredSlot === i ? 'hovered' : ''}`}
                onClick={() => !slots[i] && openModal(i)}
                onMouseEnter={() => setHoveredSlot(i)}
                onMouseLeave={() => setHoveredSlot(null)}
              >
                {slots[i] ? (
                  <>
                    <button className="slot-remove-compare-enhanced" onClick={(e) => { e.stopPropagation(); removeSlot(i); }}>×</button>
                    <div className="slot-image-compare-enhanced">
                      <Image src={slots[i]!.image!} alt={slots[i]!.name} width={80} height={80} className="slot-img-compare-enhanced" unoptimized />
                    </div>
                    <h3 className="slot-name-compare-enhanced">{slots[i]!.name}</h3>
                    <p className="slot-location-compare-enhanced">{slots[i]!.loc}</p>
                    <div className="slot-badge-compare-enhanced">
                      <CheckIcon />
                      <span>Selected</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="slot-empty-icon-compare-enhanced">
                      <span>+</span>
                    </div>
                    <p className="slot-empty-title-compare-enhanced">Property {i + 1}</p>
                    <p className="slot-empty-text-compare-enhanced">Click to select</p>
                    <div className="slot-arrow-compare-enhanced">
                      <ArrowRightIcon />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Compare Table */}
        {filled.length >= 2 && (
          <ScaleIn>
            <div className="table-section-compare-enhanced">
              <div className="table-header-compare-enhanced">
                <div className="table-title-compare-enhanced">
                  <StarIcon />
                  <span>Live Comparison</span>
                </div>
                <div className="table-count-compare-enhanced">{filled.length} Properties Selected</div>
              </div>
              <div className="table-wrapper-compare-enhanced">
                <table className="compare-table-compare-enhanced">
                  <thead>
                    <tr className="table-header-row">
                      <th className="attribute-th-compare-enhanced">Features</th>
                      {slots.map((p, i) => p ? (
                        <th key={i} className="property-th-compare-enhanced">
                          <div className="property-th-content-enhanced">
                            <HomeIcon />
                            <span>{p.name}</span>
                          </div>
                        </th>
                      ) : null)}
                    </tr>
                  </thead>
                  <tbody>
                    {ROWS.map(({ key, label, icon: Icon }) => (
                      <tr key={key} className={animatedRows.includes(key) ? 'row-animated-enhanced' : ''}>
                        <td className="feature-td-compare-enhanced">
                          <Icon />
                          <span>{label}</span>
                        </td>
                        {slots.map((p, i) => p ? (
                          <td key={i} className="value-td-compare-enhanced">
                            {(p as Project)[key as keyof Project] as string}
                          </td>
                        ) : null)}
                      </tr>
                    ))}
                    <tr className={animatedRows.includes('progress') ? 'row-animated-enhanced' : ''}>
                      <td className="feature-td-compare-enhanced">
                        <ConstructionIcon />
                        <span>Construction</span>
                      </td>
                      {slots.map((p, i) => p ? (
                        <td key={i} className="value-td-compare-enhanced">
                          <div className="progress-compare-enhanced">
                            <div className="progress-bg-compare-enhanced">
                              <div className="progress-fill-compare-enhanced" style={{ width: `${p.progress}%` }} />
                            </div>
                            <span className="progress-value-compare-enhanced">{p.progress}%</span>
                          </div>
                        </td>
                      ) : null)}
                    </tr>
                    <tr className="action-row-compare-enhanced">
                      <td className="feature-td-compare-enhanced">
                        <ActionIcon />
                        <span>Action</span>
                      </td>
                      {slots.map((p, i) => p ? (
                        <td key={i} className="action-td-compare-enhanced">
                          {p.status !== 'sold' && (
                            <Link href="/book" className="book-btn-compare-enhanced">
                              Book a Visit
                              <ArrowRightIcon />
                            </Link>
                          )}
                        </td>
                      ) : null)}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScaleIn>
        )}

        {filled.length < 2 && (
          <div className="empty-state-compare-enhanced">
            <div className="empty-icon-compare-enhanced">
              <HomeIcon />
            </div>
            <h3 className="empty-title-compare-enhanced">No Properties Selected</h3>
            <p className="empty-text-compare-enhanced">Select at least 2 properties above to start comparing</p>
            <div className="empty-tip-compare-enhanced">
              <StarIcon />
              <span>Tip: Click on any property card to add it to comparison</span>
            </div>
          </div>
        )}
      </div>

      {/* Advisory Section */}
      <section className="advisory-section-compare-enhanced">
        <div className="advisory-container-compare-enhanced">
          <FadeInUp>
            <div className="advisory-header-compare-enhanced">
              <div className="advisory-badge-compare-enhanced">
                <LightBulbIcon width={16} height={16} />
                <span>EXPERT INSIGHTS</span>
              </div>
              <h2 className="advisory-title-compare-enhanced">Expert Tips for <span className="highlight">Comparing Properties</span></h2>
              <p className="advisory-desc-compare-enhanced">Price and area are just the surface. Our experts reveal the finer details that impact long-term value.</p>
            </div>
          </FadeInUp>

          <div className="advisory-grid-compare-enhanced">
            {advisoryTips.map((tip, index) => (
              <ScaleIn key={index} delay={index * 150}>
                <div 
                  className={`advisory-card-compare-enhanced ${hoveredTip === index ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredTip(index)}
                  onMouseLeave={() => setHoveredTip(null)}
                >
                  <div className="advisory-card-header-compare-enhanced">
                    <div className="advisory-icon-compare-enhanced" style={{ background: `${tip.color}15` }}>
                      <tip.icon />
                    </div>
                    <div className="advisory-stat-compare-enhanced">
                      <div className="advisory-stat-value-enhanced">{tip.stat}</div>
                      <div className="advisory-stat-label-enhanced">{tip.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="advisory-card-title-enhanced">{tip.title}</h3>
                  <p className="advisory-card-desc-enhanced">{tip.description}</p>
                  <div className="advisory-card-footer-compare-enhanced">
                    <span className="advisory-learn-compare-enhanced">
                      Learn more <ArrowRightIcon />
                    </span>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>

          <FadeInUp delay={300}>
            <div className="advisory-cta-compare-enhanced">
              <div className="advisory-cta-content-enhanced">
                <div className="advisory-cta-icon-enhanced">
                  <StarIcon />
                </div>
                <div>
                  <h4>Need Personalized Advice?</h4>
                  <p>Book a free consultation with our property experts</p>
                </div>
              </div>
              <Link href="/contact" className="advisory-cta-btn-enhanced">
                Consult an Expert
                <ArrowRightIcon />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section-compare-enhanced">
        <div className="faq-container-compare-enhanced">
          <FadeInUp>
            <div className="faq-header-compare-enhanced">
              <div className="faq-badge-compare-enhanced">
                <StarIcon />
                <span>KNOWLEDGE BASE</span>
              </div>
              <h2 className="faq-title-compare-enhanced">Common <span className="highlight">Questions.</span></h2>
              <p className="faq-desc-compare-enhanced">Everything you need to know about buying, comparing, and investing in properties</p>
            </div>
          </FadeInUp>

          <div className="faq-grid-compare-enhanced">
            <div className="faq-stats-compare-enhanced">
              <ScaleIn delay={100}>
                <div className="faq-stat-card-compare-enhanced">
                  <div className="faq-stat-icon-enhanced"><ShieldIcon /></div>
                  <div className="faq-stat-number-enhanced">98%</div>
                  <div className="faq-stat-label-enhanced">Satisfied Clients</div>
                </div>
              </ScaleIn>
              <ScaleIn delay={200}>
                <div className="faq-stat-card-compare-enhanced">
                  <div className="faq-stat-icon-enhanced"><StarIcon /></div>
                  <div className="faq-stat-number-enhanced">500+</div>
                  <div className="faq-stat-label-enhanced">Happy Families</div>
                </div>
              </ScaleIn>
              
               
            </div>

            <div className="faq-accordion-compare-enhanced">
              {FAQS.map((faq, i) => (
                <ScaleIn key={i} delay={i * 100}>
                  <div className={`faq-item-compare-enhanced ${faqOpen === i ? 'active' : ''}`}>
                    <div className="faq-question-compare-enhanced" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                      <div className="faq-question-left-enhanced">
                        <span className="faq-number-enhanced">{(i + 1).toString().padStart(2, '0')}</span>
                        <span className="faq-question-text-enhanced">{faq.q}</span>
                      </div>
                      <span className="faq-icon-compare-enhanced">
                        {faqOpen === i ? '−' : '+'}
                      </span>
                    </div>
                    <div className="faq-answer-compare-enhanced">
                      <div className="faq-answer-content-enhanced">
                        <CheckIcon />
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>

          <FadeInUp delay={400}>
            <div className="faq-footer-compare-enhanced">
              <div className="faq-footer-image-enhanced">
                <Image 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?w=800&q=80" 
                  alt="Customer Support" 
                  width={60} 
                  height={60} 
                  className="footer-img-enhanced"
                  unoptimized
                />
              </div>
              <div className="faq-footer-content-enhanced">
                <p className="footer-title-enhanced">Still have questions?</p>
                <p className="footer-subtitle-enhanced">Our expert team is here to help you make the right decision</p>
              </div>
              <Link href="/contact" className="faq-contact-btn-compare-enhanced">
                Contact Our Experts
                <ArrowRightIcon />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Modal */}
      <div className={`modal-compare-enhanced ${modalSlot !== null ? 'open' : ''}`} onClick={closeModal}>
        <div className="modal-content-compare-enhanced" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header-compare-enhanced">
            <h3>Select a Property</h3>
            <button className="modal-close-compare-enhanced" onClick={closeModal}>×</button>
          </div>
          <div className="modal-body-compare-enhanced">
            {PROJECTS.map((p) => (
              <div className="modal-item-compare-enhanced" key={p.id} onClick={() => selectProject(p)}>
                <div className="modal-item-image-enhanced">
                  <Image src={p.image!} alt={p.name} width={50} height={50} className="modal-img-compare-enhanced" unoptimized />
                </div>
                <div className="modal-item-info-enhanced">
                  <div className="modal-item-name-enhanced">{p.name}</div>
                  <div className="modal-item-location-enhanced">{p.loc}</div>
                  <div className="modal-item-price-enhanced">{p.price}</div>
                </div>
                <div className="modal-item-select-enhanced">Select →</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        /* Hero Section - Enhanced */
        .hero-compare-enhanced {
          position: relative;
          height: 80vh;
          min-height: 650px;
          overflow: hidden;
        }

        .hero-bg-compare-enhanced {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .hero-image-compare-enhanced {
          object-fit: cover;
        }

        .hero-overlay-compare-enhanced {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 100%);
          z-index: 1;
        }

        .hero-content-compare-enhanced {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0 2rem;
          color:#E3DBBB;
        }

        .hero-badge-compare-enhanced {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(154, 177, 122, 0.2);
          backdrop-filter: blur(12px);
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(154, 177, 122, 0.4);
        }

        .hero-title-compare-enhanced {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1.2rem;
          line-height: 1.2;
        }

        @media (min-width: 768px) {
          .hero-title-compare-enhanced {
            font-size: 4.5rem;
          }
        }

        .highlight {
          color: var(--sage);
        }

        .hero-subtitle-compare-enhanced {
          font-size: 1.1rem;
          max-width: 650px;
          margin: 0 auto 2.5rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .hero-stats-compare-enhanced {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 1rem;
        }

        .hero-stat-enhanced {
          text-align: center;
        }

        .hero-stat-value-enhanced {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--sage);
          margin-bottom: 0.3rem;
        }

        .hero-stat-label-enhanced {
          font-size: 0.8rem;
          opacity: 0.85;
          letter-spacing: 0.03em;
        }

        .hero-stat-divider-enhanced {
          width: 1px;
          height: 50px;
          background: rgba(255,255,255,0.3);
        }

        /* Main Content */
        .main-content-compare-enhanced {
          max-width: 1400px;
          margin: -60px auto 0;
          padding: 0 2rem;
          position: relative;
          z-index: 3;
        }

        @media (max-width: 768px) {
          .main-content-compare-enhanced {
            padding: 0 1rem;
          }
          .hero-title-compare-enhanced {
            font-size: 2rem;
          }
          .hero-stats-compare-enhanced {
            flex-direction: column;
            gap: 1rem;
          }
          .hero-stat-divider-enhanced {
            display: none;
          }
        }

        /* Slot Section */
        .slot-section-enhanced {
          margin-bottom: 5rem;
        }

        .section-header-compare-enhanced {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .section-icon-enhanced {
          width: 60px;
          height: 60px;
          background: rgba(154, 177, 122, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: var(--sage);
        }

        .section-title-compare-enhanced {
          font-size: 2rem;
          font-weight: 600;
          color: var(--text1);
          margin-bottom: 0.5rem;
        }

        .section-subtitle-compare-enhanced {
          color: var(--text3);
          font-size: 0.95rem;
        }

        .compare-selector-compare-enhanced {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .compare-slot-compare-enhanced {
          background: var(--bg);
          border-radius: 24px;
          padding: 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
          border: 2px solid var(--border2);
        }

        .compare-slot-compare-enhanced.empty {
          background: linear-gradient(135deg, var(--bg) 0%, var(--bg1) 100%);
          border: 2px dashed var(--border2);
        }

        .compare-slot-compare-enhanced.selected {
          border: 2px solid var(--sage);
          background: linear-gradient(135deg, var(--bg) 0%, rgba(154, 177, 122, 0.05) 100%);
        }

        .compare-slot-compare-enhanced.hovered {
          transform: translateY(-6px);
          box-shadow: 0 16px 30px rgba(0,0,0,0.1);
        }

        .slot-remove-compare-enhanced {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(0,0,0,0.08);
          border: none;
          cursor: pointer;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text3);
          transition: all 0.2s;
        }

        .slot-remove-compare-enhanced:hover {
          background: rgba(0,0,0,0.15);
          color: #e53e3e;
        }

        .slot-image-compare-enhanced {
          width: 110px;
          height: 110px;
          margin: 0 auto 1rem;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--sage);
        }

        .slot-img-compare-enhanced {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .slot-name-compare-enhanced {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--text1);
          margin-bottom: 0.3rem;
        }

        .slot-location-compare-enhanced {
          font-size: 0.85rem;
          color: var(--text3);
          margin-bottom: 0.8rem;
        }

        .slot-badge-compare-enhanced {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--sage);
          color: #41431B;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .slot-empty-icon-compare-enhanced {
          width: 90px;
          height: 90px;
          margin: 0 auto 1rem;
          background: var(--bg1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          color: var(--sage);
        }

        .slot-empty-title-compare-enhanced {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text2);
          margin-bottom: 0.3rem;
        }

        .slot-empty-text-compare-enhanced {
          font-size: 0.8rem;
          color: var(--text3);
          margin-bottom: 0.6rem;
        }

        .slot-arrow-compare-enhanced {
          display: inline-block;
          animation: bounceEnhanced 1s infinite;
        }

        @keyframes bounceEnhanced {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(6px); }
        }

        /* Table Section */
        .table-section-compare-enhanced {
          margin: 3rem 0;
        }

        .table-header-compare-enhanced {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.2rem;
          padding: 0 0.5rem;
        }

        .table-title-compare-enhanced {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--sage);
          color: #41431B;
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .table-count-compare-enhanced {
          font-size: 0.85rem;
          color: var(--text3);
        }

        .table-wrapper-compare-enhanced {
          overflow-x: auto;
          border-radius: 20px;
        }

        .compare-table-compare-enhanced {
          width: 100%;
          border-collapse: collapse;
          background: var(--bg);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .compare-table-compare-enhanced th,
        .compare-table-compare-enhanced td {
          padding: 1rem 1.2rem;
          text-align: left;
          border-bottom: 1px solid var(--border2);
        }

        .table-header-row th {
          background: var(--bg1);
          font-weight: 600;
          color: var(--text1);
          font-size: 0.9rem;
        }

        .attribute-th-compare-enhanced {
          background: var(--bg1);
          font-weight: 600;
          color: var(--text1);
          width: 160px;
        }

        .property-th-compare-enhanced {
          background: var(--bg1);
          text-align: center;
        }

        .property-th-content-enhanced {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
        }

        .feature-td-compare-enhanced {
          background: var(--bg);
          font-weight: 600;
          color: var(--text2);
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .value-td-compare-enhanced {
          color: var(--text1);
          text-align: center;
        }

        .progress-compare-enhanced {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .progress-bg-compare-enhanced {
          flex: 1;
          height: 6px;
          background: var(--border2);
          border-radius: 3px;
          overflow: hidden;
        }

        .progress-fill-compare-enhanced {
          height: 100%;
          background: var(--sage);
          border-radius: 3px;
          transition: width 0.6s ease;
        }

        .progress-value-compare-enhanced {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--sage);
        }

        .action-td-compare-enhanced {
          text-align: center;
        }

        .book-btn-compare-enhanced {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--sage);
          color: #41431B;
          padding: 0.5rem 1.3rem;
          border-radius: 50px;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.2s;
        }

        .book-btn-compare-enhanced:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(154, 177, 122, 0.3);
        }

        .row-animated-enhanced {
          animation: slideInEnhanced 0.4s ease;
        }

        @keyframes slideInEnhanced {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Empty State */
        .empty-state-compare-enhanced {
          text-align: center;
          padding: 5rem 2rem;
          background: var(--bg1);
          border-radius: 28px;
          margin: 3rem 0;
        }

        .empty-icon-compare-enhanced {
          width: 100px;
          height: 100px;
          margin: 0 auto 1rem;
          background: var(--bg);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--sage);
        }

        .empty-title-compare-enhanced {
          font-size: 1.6rem;
          color: var(--text1);
          margin-bottom: 0.5rem;
        }

        .empty-text-compare-enhanced {
          color: var(--text3);
          margin-bottom: 1.5rem;
        }

        .empty-tip-compare-enhanced {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--bg);
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          border: 1px solid var(--border2);
          font-size: 0.85rem;
          color: var(--text2);
        }

        /* Advisory Section */
        .advisory-section-compare-enhanced {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, var(--bg1) 0%, var(--bg) 100%);
          margin-top: 4rem;
        }

        .advisory-container-compare-enhanced {
          max-width: 1200px;
          margin: 0 auto;
        }

        .advisory-header-compare-enhanced {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .advisory-badge-compare-enhanced {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(154, 177, 122, 0.15);
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--sage);
          margin-bottom: 1rem;
        }

        .advisory-title-compare-enhanced {
          font-size: 2.2rem;
          font-weight: 500;
          color: var(--text1);
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .advisory-title-compare-enhanced {
            font-size: 2.8rem;
          }
        }

        .advisory-desc-compare-enhanced {
          font-size: 1rem;
          color: var(--text2);
          max-width: 700px;
          margin: 0 auto;
        }

        .advisory-grid-compare-enhanced {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .advisory-card-compare-enhanced {
          background: var(--bg);
          border-radius: 24px;
          padding: 2rem;
          transition: all 0.3s ease;
          border: 1px solid var(--border2);
          cursor: pointer;
        }

        .advisory-card-compare-enhanced.hovered {
          transform: translateY(-8px);
          border-color: var(--sage);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }

        .advisory-card-header-compare-enhanced {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .advisory-icon-compare-enhanced {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--sage);
        }

        .advisory-stat-compare-enhanced {
          text-align: right;
        }

        .advisory-stat-value-enhanced {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--sage);
        }

        .advisory-stat-label-enhanced {
          font-size: 0.7rem;
          color: var(--text3);
        }

        .advisory-card-title-enhanced {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text1);
          margin-bottom: 0.8rem;
        }

        .advisory-card-desc-enhanced {
          font-size: 0.85rem;
          color: var(--text3);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .advisory-card-footer-compare-enhanced {
          padding-top: 1rem;
          border-top: 1px solid var(--border2);
        }

        .advisory-learn-compare-enhanced {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--sage);
        }

        .advisory-cta-compare-enhanced {
          background: linear-gradient(135deg, var(--sage) 0%, #839A65 100%);
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .advisory-cta-content-enhanced {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .advisory-cta-icon-enhanced {
          width: 50px;
          height: 50px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #41431B;
        }

        .advisory-cta-content-enhanced h4 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #41431B;
          margin-bottom: 0.25rem;
        }

        .advisory-cta-content-enhanced p {
          font-size: 0.85rem;
          color: rgba(65,67,27,0.8);
        }

        .advisory-cta-btn-enhanced {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #41431B;
          color: white;
          padding: 0.8rem 1.6rem;
          border-radius: 50px;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* FAQ Section */
        .faq-section-compare-enhanced {
          padding: 6rem 2rem;
          background: linear-gradient(135deg, var(--bg) 0%, var(--bg1) 100%);
          position: relative;
          overflow: hidden;
        }

        .faq-section-compare-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--sage), transparent);
        }

        .faq-container-compare-enhanced {
          max-width: 1200px;
          margin: 0 auto;
        }

        .faq-header-compare-enhanced {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .faq-badge-compare-enhanced {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(154, 177, 122, 0.1);
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--sage);
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .faq-title-compare-enhanced {
          font-size: 2.2rem;
          font-weight: 500;
          color: var(--text1);
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .faq-title-compare-enhanced {
            font-size: 2.8rem;
          }
        }

        .faq-desc-compare-enhanced {
          font-size: 1rem;
          color: var(--text2);
          max-width: 600px;
          margin: 0 auto;
        }

        .faq-grid-compare-enhanced {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 1024px) {
          .faq-grid-compare-enhanced {
            grid-template-columns: 300px 1fr;
            gap: 4rem;
            align-items: start;
          }
        }

        /* Stats Cards */
        .faq-stats-compare-enhanced {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 1.2rem;
        }

        .faq-stat-card-compare-enhanced {
          background: var(--bg);
          border-radius: 20px;
          padding: 1.8rem;
          text-align: center;
          border: 1px solid var(--border2);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .faq-stat-card-compare-enhanced:hover {
          transform: translateY(-5px);
          border-color: var(--sage);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }

        .faq-stat-icon-enhanced {
          width: 56px;
          height: 56px;
          margin: 0 auto 1rem;
          background: rgba(154, 177, 122, 0.1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--sage);
        }

        .faq-stat-number-enhanced {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--sage);
          margin-bottom: 0.3rem;
        }

        .faq-stat-label-enhanced {
          font-size: 0.75rem;
          color: var(--text3);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* FAQ Accordion */
        .faq-accordion-compare-enhanced {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item-compare-enhanced {
          background: var(--bg);
          border-radius: 18px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid var(--border2);
        }

        .faq-item-compare-enhanced.active {
          border-color: var(--sage);
          box-shadow: 0 10px 25px rgba(154, 177, 122, 0.1);
        }

        .faq-question-compare-enhanced {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.3rem 1.8rem;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .faq-question-compare-enhanced:hover {
          background: rgba(154, 177, 122, 0.05);
        }

        .faq-question-left-enhanced {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }

        .faq-number-enhanced {
          width: 40px;
          height: 40px;
          background: rgba(154, 177, 122, 0.15);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--sage);
          flex-shrink: 0;
        }

        .faq-question-text-enhanced {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text1);
          line-height: 1.4;
        }

        @media (min-width: 768px) {
          .faq-question-text-enhanced {
            font-size: 1.05rem;
          }
        }

        .faq-icon-compare-enhanced {
          width: 36px;
          height: 36px;
          background: rgba(154, 177, 122, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--sage);
          font-size: 1.3rem;
          font-weight: 600;
          flex-shrink: 0;
        }

        .faq-answer-compare-enhanced {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .faq-item-compare-enhanced.active .faq-answer-compare-enhanced {
          max-height: 300px;
        }

        .faq-answer-content-enhanced {
          display: flex;
          gap: 1rem;
          padding: 0 1.8rem 1.5rem 1.8rem;
          border-top: 1px solid var(--border2);
          margin-top: 0.5rem;
        }

        .faq-answer-content-enhanced svg {
          width: 20px;
          height: 20px;
          color: var(--sage);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        .faq-answer-content-enhanced p {
          flex: 1;
          font-size: 0.85rem;
          color: var(--text3);
          line-height: 1.7;
        }

        /* Footer CTA */
        .faq-footer-compare-enhanced {
          margin-top: 3.5rem;
          padding: 2.2rem;
          background: linear-gradient(135deg, var(--sage) 0%, #839A65 100%);
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .faq-footer-image-enhanced {
          width: 75px;
          height: 75px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(255, 255, 255, 0.3);
          flex-shrink: 0;
        }

        .footer-img-enhanced {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .faq-footer-content-enhanced {
          flex: 1;
        }

        .footer-title-enhanced {
          font-size: 1.2rem;
          font-weight: 600;
          color: #41431B;
          margin-bottom: 0.25rem;
        }

        .footer-subtitle-enhanced {
          font-size: 0.85rem;
          color: rgba(65, 67, 27, 0.8);
        }

        .faq-contact-btn-compare-enhanced {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #41431B;
          color: white;
          padding: 0.8rem 1.8rem;
          border-radius: 50px;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .faq-contact-btn-compare-enhanced:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        /* Modal */
        .modal-compare-enhanced {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.85);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .modal-compare-enhanced.open {
          opacity: 1;
          visibility: visible;
        }

        .modal-content-compare-enhanced {
          background: var(--bg);
          border-radius: 28px;
          width: 90%;
          max-width: 750px;
          max-height: 85vh;
          overflow: hidden;
          animation: modalSlideInEnhanced 0.3s ease;
        }

        @keyframes modalSlideInEnhanced {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .modal-header-compare-enhanced {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid var(--border2);
        }

        .modal-header-compare-enhanced h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text1);
        }

        .modal-close-compare-enhanced {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: var(--text3);
        }

        .modal-body-compare-enhanced {
          padding: 1rem;
          max-height: 60vh;
          overflow-y: auto;
        }

        .modal-item-compare-enhanced {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        .modal-item-compare-enhanced:hover {
          background: var(--bg1);
          border-color: var(--border2);
        }

        .modal-item-image-enhanced {
          width: 55px;
          height: 55px;
          border-radius: 10px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .modal-img-compare-enhanced {
          object-fit: cover;
        }

        .modal-item-info-enhanced {
          flex: 1;
        }

        .modal-item-name-enhanced {
          font-weight: 600;
          color: var(--text1);
          margin-bottom: 0.25rem;
        }

        .modal-item-location-enhanced {
          font-size: 0.7rem;
          color: var(--text3);
        }

        .modal-item-price-enhanced {
          font-size: 0.8rem;
          color: var(--sage);
          font-weight: 600;
        }

        .modal-item-select-enhanced {
          color: var(--sage);
          font-size: 0.85rem;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .faq-section-compare-enhanced {
            padding: 3rem 1rem;
          }
          .faq-question-compare-enhanced {
            padding: 1rem;
          }
          .faq-question-left-enhanced {
            gap: 0.75rem;
          }
          .faq-number-enhanced {
            width: 32px;
            height: 32px;
            font-size: 0.7rem;
          }
          .faq-answer-content-enhanced {
            padding: 0 1rem 1rem 1rem;
          }
          .faq-footer-compare-enhanced {
            flex-direction: column;
            text-align: center;
            padding: 1.5rem;
          }
          .faq-footer-content-enhanced {
            text-align: center;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .faq-grid-compare-enhanced {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .faq-stats-compare-enhanced {
            grid-template-columns: repeat(3, 1fr);
            max-width: 600px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}