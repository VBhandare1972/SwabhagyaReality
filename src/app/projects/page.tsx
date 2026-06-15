'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PROJECTS } from '@/lib/data';
import Footer from '@/components/Footer';

type Filter = 'all' | 'residential' | 'commercial' | 'available' | 'launching';

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'residential', label: 'Residential' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'available', label: 'Available' },
  { key: 'launching', label: 'Launching Soon' },
];

const NEIGHBORHOODS = [
  { name: 'Gangapur Road', desc: 'Premium lifestyle & top schools', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80', price: '₹80L - ₹3Cr', features: ['Premium Villas', 'Top Schools', 'High ROI'] },
  { name: 'College Road', desc: 'The vibrant heart of Nashik', img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=80', price: '₹60L - ₹2Cr', features: ['Shopping Hubs', 'Restaurants', 'Nightlife'] },
  { name: 'Pathardi Phata', desc: 'Rapid growth & highway access', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80', price: '₹40L - ₹1.5Cr', features: ['IT Parks', 'Expressway', 'Affordable'] },
  { name: 'Nashik Road', desc: 'Excellent transit connectivity', img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80', price: '₹35L - ₹1.2Cr', features: ['Railway Station', 'Bus Depot', 'Schools'] },
];

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#9AB17A" stroke="#9AB17A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="7" stroke="#9AB17A" strokeWidth="1.2"/>
    <circle cx="8" cy="8" r="3" fill="#9AB17A"/>
  </svg>
);

const SmallLocationIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="5" stroke="#9AB17A" strokeWidth="1"/>
    <circle cx="6" cy="6" r="2" fill="#9AB17A"/>
  </svg>
);

const GrowthIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 20L8 14L12 18L22 8" stroke="#9AB17A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 8H22V13" stroke="#9AB17A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RoadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21M6 6L5 10H19L18 6M6 18L5 14H19L18 18" stroke="#9AB17A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="7" cy="18" r="2" stroke="#9AB17A" strokeWidth="2"/>
    <circle cx="17" cy="18" r="2" stroke="#9AB17A" strokeWidth="2"/>
  </svg>
);

const CityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="16" height="12" rx="1" stroke="#9AB17A" strokeWidth="2"/>
    <path d="M8 4H16V8H8V4Z" stroke="#9AB17A" strokeWidth="2"/>
    <path d="M9 11H15M9 14H15" stroke="#9AB17A" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const NatureIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9 6 5 10 5 15C5 18 8 22 12 22C16 22 19 18 19 15C19 10 15 6 12 2Z" stroke="#9AB17A" strokeWidth="2"/>
    <path d="M12 9V15" stroke="#9AB17A" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="1" fill="#9AB17A"/>
  </svg>
);

const RoomIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="12" height="12" rx="1" stroke="#C3CC9B" strokeWidth="1.2"/>
    <path d="M5 5H11M5 8H11M5 11H8" stroke="#C3CC9B" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const SizeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="12" height="12" rx="1" stroke="#C3CC9B" strokeWidth="1.2"/>
    <path d="M5 13L13 5" stroke="#C3CC9B" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const DateIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="12" height="11" rx="1" stroke="#C3CC9B" strokeWidth="1.2"/>
    <path d="M2 6H14M5 2V4M11 2V4" stroke="#C3CC9B" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const AddIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 7H11M7 3L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="7" stroke="#9AB17A" strokeWidth="2"/>
    <path d="M20 20L17 17" stroke="#9AB17A" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#C3CC9B" stroke="#C3CC9B" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="9" r="2.5" fill="#2C2C1E"/>
  </svg>
);

const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#9AB17A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 22V12H15V22" stroke="#9AB17A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ShopIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="16" height="12" rx="1" stroke="#9AB17A" strokeWidth="2"/>
    <path d="M8 4H16V8H8V4Z" stroke="#9AB17A" strokeWidth="2"/>
    <path d="M9 11H15M9 14H15M9 17H15" stroke="#9AB17A" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const SparkleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z" fill="#9AB17A" stroke="#9AB17A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ParkingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="6" width="16" height="12" rx="2"/>
    <path d="M8 12h8M12 8v8"/>
  </svg>
);

const LiftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="2" width="16" height="20" rx="2"/>
    <line x1="9" y1="6" x2="9" y2="10"/>
    <line x1="15" y1="6" x2="15" y2="10"/>
    <circle cx="9" cy="14" r="2"/>
    <circle cx="15" cy="14" r="2"/>
  </svg>
);

const SecurityIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L3 7v7c0 5 9 8 9 8s9-3 9-8V7l-9-5z"/>
    <path d="M12 8v4M12 16h.01"/>
  </svg>
);

const GymIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 4h12v16H6zM4 8h2M18 8h2M4 12h2M18 12h2M4 16h2M18 16h2"/>
  </svg>
);

const PoolIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 15l4-4 4 4 4-4 4 4 4-4"/>
    <path d="M2 19l4-4 4 4 4-4 4 4 4-4"/>
    <line x1="2" y1="11" x2="2" y2="15"/>
    <line x1="22" y1="11" x2="22" y2="15"/>
  </svg>
);

const GardenIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v4M6 4l2 2M18 4l-2 2"/>
    <path d="M8 10h8M12 14v4M10 16l-2 2M14 16l2 2"/>
    <circle cx="12" cy="10" r="2"/>
  </svg>
);

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const shown = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => {
        if (filter === 'residential') return p.type === 'residential';
        if (filter === 'commercial') return p.type === 'commercial';
        if (filter === 'available') return p.status === 'available';
        if (filter === 'launching') return p.status === 'launching';
        return true;
      });

  const detailProject = selected !== null ? PROJECTS.find((p) => p.id === selected) : null;

  // Enhanced specifications for projects
  const getProjectSpecs = (project: any) => {
    const specs = {
      type: project.bhk || '2 & 3 BHK',
      size: project.area || '720 - 950 sq.ft',
      possession: project.possession || 'Dec 2027',
      floor: 'G+12 Floors',
      totalUnits: '128 Units',
      carpetArea: '650 - 850 sq.ft',
      balcony: 'Yes (2 Balconies)',
      facing: 'East & North Facing',
      parking: 'Stilt + Covered',
      maintenance: '₹3.5/sq.ft',
      amenities: project.amenities || 'Clubhouse, Gym, Swimming Pool, Kids Play Area, Landscape Garden, 24/7 Security, Power Backup, Rainwater Harvesting, EV Charging',
      highlights: project.highlights || 'RERA Registered, Vaastu Compliant, Premium Finishes, Modular Kitchen, Vitrified Tiles, Branded Fittings'
    };
    return specs;
  };

  return (
    <main>
      {/* Hero Section */}
      <div className="projects-hero-theme">
        <Image
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80"
          alt="Modern Real Estate Property"
          fill
          className="hero-theme-image"
          priority
          unoptimized
        />
        <div className="hero-theme-overlay"></div>
        <div className="hero-theme-content">
          <div className="hero-theme-badge">
            <StarIcon />
            <span>Premium Properties</span>
          </div>
          <h1 className="hero-theme-title">Find Your<br />Dream Space</h1>
          <p className="hero-theme-description">Handpicked homes and shops across Nashik's best areas. Simple, honest, and just right for you.</p>
          <div className="hero-theme-stats">
            <div className="hero-theme-stat">
              <span className="stat-number">25+</span>
              <span>Properties</span>
            </div>
            <div className="hero-theme-stat">
              <span className="stat-number">14+</span>
              <span>Years Trust</span>
            </div>
            <div className="hero-theme-stat">
              <span className="stat-number">98%</span>
              <span>Happy Clients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Nashik Section */}
      <section className="invest-theme">
        <div className="invest-theme-container">
          <div className="invest-theme-image">
            <div className="invest-image-card-theme">
              <Image
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80"
                alt="Nashik City Skyline"
                fill
                style={{ objectFit: 'cover' }}
                unoptimized
              />
            </div>
          </div>
          <div className="invest-theme-content">
            <div className="invest-theme-badge">
              <GrowthIcon />
              <span>Growing City</span>
            </div>
            <h2 className="invest-theme-title">Why Choose Nashik?</h2>
            <p className="invest-theme-description">
              Nashik is growing fast into Maharashtra's next big city. With new IT parks, better roads, 
              and the expressway to Mumbai, property values keep going up. Plus, you get clean air, 
              good weather, and a peaceful life that big cities can't offer.
            </p>
            <div className="invest-theme-grid">
              {[
                { icon: <GrowthIcon />, title: 'Good Returns', desc: '8-12% growth in value every year' },
                { icon: <RoadIcon />, title: 'Easy Travel', desc: 'Just 2 hours to Mumbai by highway' },
                { icon: <CityIcon />, title: 'More Jobs', desc: 'New IT companies and factories' },
                { icon: <NatureIcon />, title: 'Better Life', desc: 'Clean air, cool weather, open spaces' },
              ].map((item, i) => (
                <div key={i} className="invest-theme-feature">
                  <div className="invest-feature-icon-theme">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Areas */}
      <section className="neighborhoods-theme">
        <div className="neighborhoods-theme-header">
          <div className="neighborhoods-theme-badge">
            <MapPinIcon />
            <span>Popular Areas</span>
          </div>
          <h2 className="neighborhoods-theme-title">Top Locations.</h2>
          <p className="neighborhoods-theme-subhead">Most loved areas for living and business in Nashik</p>
        </div>
        <div className="neighborhoods-theme-grid">
          {NEIGHBORHOODS.map((n) => (
            <div className="neighborhood-theme-card" key={n.name}>
              <div className="neighborhood-card-inner-theme">
                <div className="neighborhood-card-front-theme">
                  <div className="neighborhood-image-theme">
                    <Image src={n.img} alt={n.name} fill style={{ objectFit: 'cover' }} unoptimized />
                    <div className="neighborhood-image-overlay-theme"></div>
                    <div className="neighborhood-price-theme">{n.price}</div>
                  </div>
                  <div className="neighborhood-info-theme">
                    <h3>{n.name}</h3>
                    <p>{n.desc}</p>
                    <div className="neighborhood-tags-theme">
                      {n.features.slice(0, 2).map((f, i) => (
                        <span key={i} className="neighborhood-tag-theme">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="neighborhood-card-back-theme">
                  <div className="back-icon-theme">
                    <MapPinIcon />
                  </div>
                  <h4>Explore {n.name}</h4>
                  <div className="back-features-theme">
                    {n.features.map((f, i) => (
                      <span key={i}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="filter-bar-theme">
        <div className="filter-container-theme">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-btn-theme ${filter === f.key ? 'active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.key === 'residential' && <HomeIcon />}
              {f.key === 'commercial' && <ShopIcon />}
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Property Cards */}
      <div className="projects-grid-theme">
        <div className="projects-grid-container-theme">
          {shown.map((p, idx) => {
            const specs = getProjectSpecs(p);
            return (
              <div
                className={`project-card-theme ${loaded ? 'loaded' : ''}`}
                key={p.id}
                onClick={() => setSelected(p.id)}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="project-card-inner-theme">
                  <div className="project-card-media-theme">
                    <Image
                      src={p.image || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80'}
                      alt={p.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      unoptimized
                    />
                    <div className="project-media-gradient-theme"></div>
                    <div className="project-status-badge-theme">
                      <span className={`status-badge-theme ${p.status === 'available' ? 'available' : p.status === 'launching' ? 'launching' : 'sold'}`}>
                        {p.status === 'available' ? 'Available' : p.status === 'launching' ? 'Coming Soon' : 'Sold Out'}
                      </span>
                    </div>
                    <div className="project-icon-badge-theme">
                      {p.type === 'residential' ? <HomeIcon /> : <ShopIcon />}
                    </div>
                  </div>
                  <div className="project-details-theme">
                    <h3>{p.name}</h3>
                    <div className="project-location-theme">
                      <SmallLocationIcon />
                      <span>{p.loc}</span>
                    </div>
                    
                    {/* Enhanced Specifications Grid */}
                    <div className="project-specs-grid">
                      <div className="spec-item-new">
                        <RoomIcon />
                        <div>
                          <span className="spec-label-new">Type</span>
                          <span className="spec-value-new">{specs.type}</span>
                        </div>
                      </div>
                      <div className="spec-item-new">
                        <SizeIcon />
                        <div>
                          <span className="spec-label-new">Size</span>
                          <span className="spec-value-new">{specs.size}</span>
                        </div>
                      </div>
                      <div className="spec-item-new">
                        <DateIcon />
                        <div>
                          <span className="spec-label-new">Ready By</span>
                          <span className="spec-value-new">{specs.possession}</span>
                        </div>
                      </div>
                      <div className="spec-item-new">
                        <ParkingIcon />
                        <div>
                          <span className="spec-label-new">Parking</span>
                          <span className="spec-value-new">{specs.parking}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="project-footer-theme">
                      <div className="project-price-theme">{p.price}</div>
                      {p.status !== 'sold' && (
                        <button className="project-book-theme" onClick={(e) => { e.stopPropagation(); window.location.href = '/book'; }}>
                          Book Visit
                          <AddIcon />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {shown.length === 0 && (
          <div className="no-results-theme">
            <div className="no-results-icon">
              <SearchIcon />
            </div>
            <h3>No properties found</h3>
            <p>Try changing your filter</p>
          </div>
        )}
      </div>

      {/* Quick View Modal with Enhanced Content */}
      {detailProject && (
        <div className="modal-theme" onClick={() => setSelected(null)}>
          <div className="modal-container-theme" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-theme" onClick={() => setSelected(null)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="modal-grid-theme">
              <div className="modal-image-theme">
                <Image
                  src={detailProject.image || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80'}
                  alt={detailProject.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
                <div className="modal-image-overlay-theme"></div>
                <div className="modal-thumb-theme">
                  {detailProject.type === 'residential' ? <HomeIcon /> : <ShopIcon />}
                </div>
                <div className="modal-badge-theme">
                  <span className={`status-badge-theme ${detailProject.status === 'available' ? 'available' : detailProject.status === 'launching' ? 'launching' : 'sold'}`}>
                    {detailProject.status === 'available' ? 'Available' : detailProject.status === 'launching' ? 'Coming Soon' : 'Sold Out'}
                  </span>
                </div>
              </div>
              <div className="modal-content-theme">
                <h2>{detailProject.name}</h2>
                <div className="modal-location-theme">
                  <LocationIcon />
                  <span>{detailProject.loc}</span>
                </div>
                <p className="modal-description-theme">{detailProject.desc}</p>
                
                {/* Enhanced Modal Specifications */}
                <div className="modal-specs-enhanced">
                  <div className="specs-row">
                    <div className="spec-card">
                      <span className="spec-card-label">Property Type</span>
                      <span className="spec-card-value">{detailProject.bhk || '2 & 3 BHK'}</span>
                    </div>
                    <div className="spec-card">
                      <span className="spec-card-label">Total Area</span>
                      <span className="spec-card-value">{detailProject.area || '720 - 950 sq.ft'}</span>
                    </div>
                    <div className="spec-card">
                      <span className="spec-card-label">Carpet Area</span>
                      <span className="spec-card-value">650 - 850 sq.ft</span>
                    </div>
                    <div className="spec-card">
                      <span className="spec-card-label">Possession</span>
                      <span className="spec-card-value">{detailProject.possession || 'Dec 2027'}</span>
                    </div>
                  </div>
                  <div className="specs-row">
                    <div className="spec-card">
                      <span className="spec-card-label">Floor</span>
                      <span className="spec-card-value">G+12 Floors</span>
                    </div>
                    <div className="spec-card">
                      <span className="spec-card-label">Total Units</span>
                      <span className="spec-card-value">128 Units</span>
                    </div>
                    <div className="spec-card">
                      <span className="spec-card-label">Facing</span>
                      <span className="spec-card-value">East & North</span>
                    </div>
                    <div className="spec-card">
                      <span className="spec-card-label">Parking</span>
                      <span className="spec-card-value">Stilt + Covered</span>
                    </div>
                  </div>
                </div>

                

                {/* Amenities Section */}
                <div className="modal-amenities">
                  <h4>Amenities</h4>
                  <div className="amenities-grid">
                    <div className="amenity-item"><PoolIcon /> Swimming Pool</div>
                    <div className="amenity-item"><GymIcon /> Gymnasium</div>
                    <div className="amenity-item"><GardenIcon /> Landscape Garden</div>
                    <div className="amenity-item"><SecurityIcon /> 24/7 Security</div>
                    <div className="amenity-item"><LiftIcon /> High-speed Elevators</div>
                    <div className="amenity-item"><ParkingIcon /> EV Charging</div>
                  </div>
                </div>

                <div className="modal-actions-theme">
                  <Link href="/book" className="modal-btn-primary-theme">Book a Visit</Link>
                  <Link href="/contact" className="modal-btn-secondary-theme">Ask a Question</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style jsx global>{`
        :root {
          --sage: #9AB17A;
          --moss: #C3CC9B;
          --fern: #E4DFB5;
          --parch: #FBE8CE;
          --bg: #F5F2EA;
          --bg1: #EDE9DE;
          --text1: #2C2C1E;
          --text2: #5C5C42;
          --text3: #9A9A7A;
        }

        /* Existing styles remain the same until project-specs-grid */

        /* Enhanced Project Specs Grid */
        .project-specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.6rem;
          margin: 0.8rem 0;
          padding: 0.6rem;
          background: #FBE8CE20;
          border-radius: 12px;
        }

        .spec-item-new {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
        }

        .spec-item-new svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        .spec-item-new div {
          display: flex;
          flex-direction: column;
        }

        .spec-label-new {
          font-size: 0.55rem;
          color: #9A9A7A;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .spec-value-new {
          font-size: 0.7rem;
          font-weight: 500;
          color: #2C2C1E;
        }

        /* Enhanced Modal Specs */
        .modal-specs-enhanced {
          background: #FBE8CE;
          border-radius: 16px;
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .specs-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 0.8rem;
        }

        .specs-row:last-child {
          margin-bottom: 0;
        }

        .spec-card {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .spec-card-label {
          font-size: 0.6rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #9AB17A;
        }

        .spec-card-value {
          font-size: 0.85rem;
          font-weight: 500;
          color: #2C2C1E;
        }

        /* Highlights Section */
        .modal-highlights {
          margin-bottom: 1rem;
        }

        .modal-highlights h4 {
          font-size: 0.85rem;
          font-weight: 600;
          color: #2C2C1E;
          margin-bottom: 0.6rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
        }

        .highlights-grid span {
          font-size: 0.7rem;
          color: #5C5C42;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        /* Amenities Section */
        .modal-amenities {
          margin-bottom: 1rem;
        }

        .modal-amenities h4 {
          font-size: 0.85rem;
          font-weight: 600;
          color: #2C2C1E;
          margin-bottom: 0.6rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.5rem;
        }

        .amenity-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          color: #5C5C42;
          padding: 0.4rem;
          background: rgba(154, 177, 122, 0.08);
          border-radius: 8px;
        }

        .amenity-item svg {
          width: 14px;
          height: 14px;
          color: #9AB17A;
        }

        /* Rest of existing styles */
        .projects-hero-theme {
          position: relative;
          width: 100%;
          height: 85vh;
          overflow: hidden;
        }
        
        .hero-theme-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        
        .hero-theme-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(96, 96, 76, 0.6) 0%, rgba(44, 44, 30, 0.3) 100%);
          z-index: 1;
        }
        
        .hero-theme-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: #F8F3E1;
          padding: 2rem;
        }
        
        .hero-theme-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(42, 49, 32, 0.2);
          backdrop-filter: blur(8px);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-size: 0.75rem;
          letter-spacing: 2px;
          color: #F8F3E1;
          border: 1px solid rgba(154, 177, 122, 0.3);
          margin-bottom: 1rem;
        }
        
        .hero-theme-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        
        @media (min-width: 768px) {
          .hero-theme-title {
            font-size: 4rem;
          }
        }
        
        .hero-theme-description {
          font-size: 1rem;
          color: rgba(255,255,255,0.9);
          max-width: 600px;
          margin-bottom: 2rem;
        }
        
        .hero-theme-stats {
          display: flex;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        
        .hero-theme-stat {
          text-align: center;
        }
        
        .hero-theme-stat .stat-number {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: #AEB784;
        }
        
        .hero-theme-stat span:last-child {
          font-size: 0.7rem;
          opacity: 0.8;
        }

        .invest-theme {
          padding: 5rem 1.5rem;
          background: linear-gradient(135deg, #FBE8CE 0%, #F5F2EA 100%);
        }
        
        @media (min-width: 768px) {
          .invest-theme {
            padding: 6rem 3rem;
          }
        }
        
        .invest-theme-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }
        
        @media (min-width: 1024px) {
          .invest-theme-container {
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }
        }
        
        .invest-image-card-theme {
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
        }
        
        .invest-image-card-theme img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .invest-theme-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(154, 177, 122, 0.15);
          padding: 0.3rem 1rem;
          border-radius: 50px;
          font-size: 0.7rem;
          color: #9AB17A;
          margin-bottom: 1rem;
        }
        
        .invest-theme-badge svg {
          width: 16px;
          height: 16px;
        }
        
        .invest-theme-title {
          font-size: 2rem;
          font-weight: 600;
          color: #2C2C1E;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        @media (min-width: 768px) {
          .invest-theme-title {
            font-size: 2.5rem;
          }
        }
        
        .invest-theme-description {
          font-size: 0.85rem;
          color: #5C5C42;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }
        
        .invest-theme-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        
        .invest-theme-feature {
          background: #fff;
          padding: 1rem;
          border-radius: 14px;
          transition: all 0.3s;
          border: 1px solid #E4DFB5;
        }
        
        .invest-theme-feature:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
          border-color: #9AB17A;
        }
        
        .invest-feature-icon-theme svg {
          width: 22px;
          height: 22px;
          margin-bottom: 0.5rem;
        }
        
        .invest-theme-feature h4 {
          font-size: 0.85rem;
          font-weight: 600;
          color: #2C2C1E;
          margin-bottom: 0.25rem;
        }
        
        .invest-theme-feature p {
          font-size: 0.65rem;
          color: #9A9A7A;
        }

        .neighborhoods-theme {
          padding: 5rem 1.5rem;
          background: linear-gradient(135deg, #E4DFB5 0%, #EDE9DE 100%);
        }
        
        @media (min-width: 768px) {
          .neighborhoods-theme {
            padding: 6rem 3rem;
          }
        }
        
        .neighborhoods-theme-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        
        .neighborhoods-theme-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(154, 177, 122, 0.1);
          padding: 0.3rem 1rem;
          border-radius: 50px;
          font-size: 0.7rem;
          color: #9AB17A;
          margin-bottom: 0.75rem;
        }
        
        .neighborhoods-theme-title {
          font-size: 2rem;
          font-weight: 600;
          color: #2C2C1E;
          margin-bottom: 0.5rem;
        }
        
        @media (min-width: 768px) {
          .neighborhoods-theme-title {
            font-size: 2.5rem;
          }
        }
        
        .neighborhoods-theme-subhead {
          font-size: 0.8rem;
          color: #9A9A7A;
        }
        
        .neighborhoods-theme-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        @media (min-width: 768px) {
          .neighborhoods-theme-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .neighborhoods-theme-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        .neighborhood-theme-card {
          perspective: 1000px;
          height: 300px;
        }
        
        .neighborhood-card-inner-theme {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.5s;
          transform-style: preserve-3d;
        }
        
        .neighborhood-theme-card:hover .neighborhood-card-inner-theme {
          transform: rotateY(180deg);
        }
        
        .neighborhood-card-front-theme, .neighborhood-card-back-theme {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 20px;
          overflow: hidden;
        }
        
        .neighborhood-card-front-theme {
          background: #fff;
        }
        
        .neighborhood-card-back-theme {
          background: linear-gradient(135deg, #2a3e0e, #C3CC9B);
          transform: rotateY(180deg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.5rem;
          color: #fff;
        }
        
        .back-icon-theme svg {
          width: 24px;
          height: 24px;
          margin-bottom: 0.5rem;
        }
        
        .neighborhood-card-back-theme h4 {
          font-size: 1rem;
          margin-bottom: 0.75rem;
        }
        
        .back-features-theme {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 0.75rem;
        }
        
        .back-features-theme span {
          font-size: 0.65rem;
          opacity: 0.9;
        }
        
        .neighborhood-image-theme {
          position: relative;
          height: 160px;
          overflow: hidden;
        }
        
        .neighborhood-image-theme img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .neighborhood-image-overlay-theme {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(44, 44, 30, 0.5), transparent);
        }
        
        .neighborhood-price-theme {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: #9AB17A;
          color: #fff;
          padding: 0.2rem 0.6rem;
          border-radius: 16px;
          font-size: 0.6rem;
          font-weight: 600;
        }
        
        .neighborhood-info-theme {
          padding: 1rem;
        }
        
        .neighborhood-info-theme h3 {
          font-size: 0.95rem;
          font-weight: 600;
          color: #2C2C1E;
          margin-bottom: 0.2rem;
        }
        
        .neighborhood-info-theme p {
          font-size: 0.65rem;
          color: #9A9A7A;
          margin-bottom: 0.5rem;
        }
        
        .neighborhood-tags-theme {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }
        
        .neighborhood-tag-theme {
          font-size: 0.55rem;
          padding: 0.15rem 0.5rem;
          background: rgba(154, 177, 122, 0.15);
          border-radius: 10px;
          color: #9AB17A;
        }

        .filter-bar-theme {
          position: sticky;
          top: 70px;
          z-index: 100;
          background: #F5F2EA;
          padding: 0.8rem 1.5rem;
          border-bottom: 1px solid #E4DFB5;
        }
        
        @media (min-width: 768px) {
          .filter-bar-theme {
            padding: 0.8rem 3rem;
          }
        }
        
        .filter-container-theme {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .filter-btn-theme {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 1.2rem;
          border-radius: 40px;
          font-size: 0.7rem;
          font-weight: 500;
          border: none;
          background: #E4DFB5;
          color: #9A9A7A;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .filter-btn-theme:hover {
          background: #C3CC9B;
          color: #2C2C1E;
        }
        
        .filter-btn-theme.active {
          background: #9AB17A;
          color: #fff;
          box-shadow: 0 2px 8px rgba(154, 177, 122, 0.3);
        }
        
        .filter-btn-theme svg {
          width: 14px;
          height: 14px;
        }

        .projects-grid-theme {
          padding: 2.5rem 1.5rem 4rem;
          background: #F5F2EA;
        }
        
        @media (min-width: 768px) {
          .projects-grid-theme {
            padding: 2.5rem 3rem 5rem;
          }
        }
        
        .projects-grid-container-theme {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        @media (min-width: 768px) {
          .projects-grid-container-theme {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .projects-grid-container-theme {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        .project-card-theme {
          cursor: pointer;
          opacity: 0;
          animation: fadeInUp 0.4s ease forwards;
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .project-card-inner-theme {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          border: 1px solid #E4DFB5;
        }
        
        .project-card-theme:hover .project-card-inner-theme {
          transform: translateY(-6px);
          box-shadow: 0 15px 30px rgba(154, 177, 122, 0.12);
          border-color: #9AB17A;
        }
        
        .project-card-media-theme {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        
        .project-card-media-theme img {
          transition: transform 0.4s;
        }
        
        .project-card-theme:hover .project-card-media-theme img {
          transform: scale(1.05);
        }
        
        .project-media-gradient-theme {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(44, 44, 30, 0.3), transparent);
        }
        
        .project-status-badge-theme {
          position: absolute;
          top: 10px;
          left: 10px;
          z-index: 2;
        }
        
        .status-badge-theme {
          display: inline-block;
          padding: 0.25rem 0.7rem;
          border-radius: 16px;
          font-size: 0.55rem;
          font-weight: 600;
          letter-spacing: 0.3px;
        }
        
        .status-badge-theme.available {
          background: #9AB17A;
          color: #fff;
        }
        
        .status-badge-theme.launching {
          background: #C3CC9B;
          color: #2C2C1E;
        }
        
        .status-badge-theme.sold {
          background: #9A9A7A;
          color: #fff;
        }
        
        .project-icon-badge-theme {
          position: absolute;
          bottom: -15px;
          right: 12px;
          background: #fff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          z-index: 2;
          border: 2px solid #9AB17A;
        }
        
        .project-icon-badge-theme svg {
          width: 20px;
          height: 20px;
        }
        
        .project-details-theme {
          padding: 1.2rem;
        }
        
        .project-details-theme h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #2C2C1E;
          margin-bottom: 0.3rem;
        }
        
        .project-location-theme {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin-bottom: 0.8rem;
        }
        
        .project-location-theme span {
          font-size: 0.65rem;
          color: #9A9A7A;
        }
        
        .project-footer-theme {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          border-top: 1px solid #E4DFB5;
        }
        
        .project-price-theme {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 700;
          color: #9AB17A;
        }
        
        .project-book-theme {
          background: transparent;
          border: 1px solid #E4DFB5;
          padding: 0.35rem 0.9rem;
          border-radius: 25px;
          font-size: 0.65rem;
          font-weight: 500;
          color: #2C2C1E;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        
        .project-book-theme:hover {
          background: #9AB17A;
          color: #fff;
          border-color: #9AB17A;
        }
        
        .project-book-theme:hover svg {
          transform: rotate(90deg);
        }
        
        .project-book-theme svg {
          transition: transform 0.2s;
        }

        .no-results-theme {
          text-align: center;
          padding: 3rem;
          background: #fff;
          border-radius: 24px;
          max-width: 400px;
          margin: 2rem auto;
          border: 1px solid #E4DFB5;
        }
        
        .no-results-icon {
          margin-bottom: 0.5rem;
          display: flex;
          justify-content: center;
        }
        
        .no-results-theme h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #2C2C1E;
          margin-bottom: 0.3rem;
        }
        
        .no-results-theme p {
          font-size: 0.7rem;
          color: #9A9A7A;
        }

        .modal-theme {
          position: fixed;
          inset: 0;
          background: rgba(44, 44, 30, 0.85);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          animation: modalFade 0.25s ease;
        }
        
        @keyframes modalFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .modal-container-theme {
          background: #fff;
          border-radius: 28px;
          max-width: 850px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
          animation: modalSlide 0.3s ease;
          border: 1px solid #E4DFB5;
        }
        
        @keyframes modalSlide {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .modal-close-theme {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(44, 44, 30, 0.7);
          border: none;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          z-index: 10;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .modal-close-theme:hover {
          background: #9AB17A;
        }
        
        .modal-grid-theme {
          display: grid;
          grid-template-columns: 1fr;
        }
        
        @media (min-width: 768px) {
          .modal-grid-theme {
            grid-template-columns: 1fr 1.2fr;
          }
        }
        
        .modal-image-theme {
          position: relative;
          height: 280px;
          overflow: hidden;
        }
        
        @media (min-width: 768px) {
          .modal-image-theme {
            height: 100%;
            min-height: 450px;
          }
        }
        
        .modal-image-theme img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .modal-image-overlay-theme {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(44, 44, 30, 0.3), transparent);
        }
        
        .modal-thumb-theme {
          position: absolute;
          bottom: -20px;
          right: 14px;
          background: #fff;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          border: 2px solid #9AB17A;
        }
        
        .modal-thumb-theme svg {
          width: 24px;
          height: 24px;
        }
        
        .modal-badge-theme {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
        }
        
        .modal-content-theme {
          padding: 1.5rem;
        }
        
        .modal-content-theme h2 {
          font-size: 1.4rem;
          font-weight: 600;
          color: #2C2C1E;
          margin-bottom: 0.3rem;
        }
        
        .modal-location-theme {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          margin-bottom: 0.8rem;
        }
        
        .modal-location-theme span {
          font-size: 0.75rem;
          color: #9A9A7A;
        }
        
        .modal-description-theme {
          font-size: 0.8rem;
          color: #5C5C42;
          line-height: 1.6;
          margin-bottom: 1.2rem;
        }
        
        .modal-actions-theme {
          display: flex;
          gap: 0.8rem;
          margin-top: 1rem;
        }
        
        .modal-btn-primary-theme {
          flex: 1;
          text-align: center;
          padding: 0.7rem;
          border-radius: 10px;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          background: #9AB17A;
          color: #fff;
        }
        
        .modal-btn-primary-theme:hover {
          background: #7a9a5a;
          transform: translateY(-2px);
        }
        
        .modal-btn-secondary-theme {
          flex: 1;
          text-align: center;
          padding: 0.7rem;
          border-radius: 10px;
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          background: transparent;
          border: 1px solid #E4DFB5;
          color: #2C2C1E;
        }
        
        .modal-btn-secondary-theme:hover {
          border-color: #9AB17A;
          background: rgba(154, 177, 122, 0.05);
          transform: translateY(-2px);
        }
      `}</style>
    </main>
  );
}