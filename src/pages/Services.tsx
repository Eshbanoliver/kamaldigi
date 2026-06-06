import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  category: 'Weddings & Portraits' | 'Events & Corporate' | 'Studio & Creative' | 'Specialty';
  img: string;
  desc: string;
  features: string[];
}

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Weddings & Portraits', 'Events & Corporate', 'Studio & Creative', 'Specialty'];

  const servicesData: Service[] = [
    {
      id: 1,
      title: 'Photographer',
      category: 'Studio & Creative',
      img: '/images/photographer-studio.png',
      desc: 'Expert general photography for custom projects, editorial layouts, and bespoke outdoor portrait compositions.',
      features: ['Full-Frame Sony systems', 'Multiple focal prime lenses', 'Natural & flash setups', 'Digital retouching included']
    },
    {
      id: 2,
      title: 'Photography Shop',
      category: 'Specialty',
      img: '/images/photo-shop.png',
      desc: 'Get high-end physical prints, glass framings, digital canvas designs, and customizable album layouts.',
      features: ['Anti-glare museum glass', 'Matte and premium glossy paper', 'Canvas wall mounts', 'Collage layout design']
    },
    {
      id: 3,
      title: 'Wedding Portrait Studio',
      category: 'Weddings & Portraits',
      img: '/images/wedding-couple.png',
      desc: 'Dedicated indoor studio shoots focused on couples, capturing traditional outfits and regal poses under controlled lighting.',
      features: ['Luxury backdrops', 'Professional hair/makeup sync', 'Controlled flash modeling', 'Multiple wardrobe changes']
    },
    {
      id: 4,
      title: 'Event Photographer',
      category: 'Events & Corporate',
      img: '/images/event.png',
      desc: 'Punctual coverage of exhibitions, local inaugurations, festivals, and community programs with candid focuses.',
      features: ['Low-light camera configurations', 'Fast turnaround delivery', 'Candid event documentation', 'High dynamic range edits']
    },
    {
      id: 5,
      title: 'Pre Wedding Photoshoot',
      category: 'Weddings & Portraits',
      img: '/images/prewedding.png',
      desc: 'Stunning outdoor pre-wedding photography showcasing your love story in Udaipur\'s royal lakes and palaces.',
      features: ['Scenic location planning', 'Posing direction guide', 'Cinematic trailer synchronization', 'Wardrobe color consultation']
    },
    {
      id: 6,
      title: 'Wedding & Engagement Photography',
      category: 'Weddings & Portraits',
      img: '/images/wedding-engagement.png',
      desc: 'End-to-end luxury coverage of wedding ceremonies, rituals, ring exchanges, and post-wedding celebrations.',
      features: ['Dual camera operations', 'Traditional & candid mix', 'Teaser cinematic video reels', 'Premium leather-bound album']
    },
    {
      id: 7,
      title: 'Corporate Photography',
      category: 'Events & Corporate',
      img: '/images/corporate.png',
      desc: 'High-end branding photography, board of directors portfolios, factory locations, and company culture documentation.',
      features: ['Corporate branding style', 'High-res LinkedIn portraits', 'Press-release ready images', 'Group staff compositions']
    },
    {
      id: 8,
      title: 'Events & Parties Photography',
      category: 'Events & Corporate',
      img: '/images/event.png',
      desc: 'Lively, energetic captures of birthday bashes, anniversaries, dance nights, and private family get-togethers.',
      features: ['Action action-freeze lighting', 'Guest portrait zones', 'Group pictures management', 'Rapid next-day sneak peeks']
    },
    {
      id: 9,
      title: 'Family & Group Photography',
      category: 'Weddings & Portraits',
      img: '/images/family.png',
      desc: 'Warm and memorable group portraits featuring multi-generation families at home or in scenic outdoor layouts.',
      features: ['Comfortable posing guidance', 'Perfect coordinate styling', 'Large group arrangements', 'High-res canvas outputs']
    },
    {
      id: 10,
      title: 'Headshots & Portraits',
      category: 'Studio & Creative',
      img: '/images/portrait.png',
      desc: 'Premium headshots for actors, models, corporate executives, and personal bio graphics.',
      features: ['Studio backdrop variations', 'Precision face retouching', 'High/low-key lighting options', 'Expression coach assistance']
    },
    {
      id: 11,
      title: 'Honeymoon Photography',
      category: 'Specialty',
      img: '/images/honeymoon.png',
      desc: 'Discreet and stunning travel couple photography capturing your romantic getaway around Udaipur\'s lakes.',
      features: ['Lake scenery scheduling', 'Candid vacation storytelling', 'Light gear mobility', 'Quick mobile-share edits']
    },
    {
      id: 12,
      title: 'Individual Photography',
      category: 'Studio & Creative',
      img: '/images/portrait.png',
      desc: 'Bespoke creative portraiture focusing on highlighting individual character, lifestyle, and aesthetic tastes.',
      features: ['Concept mood boards', 'Creative style settings', 'Flexible session durations', 'Personalized retouched files']
    },
    {
      id: 13,
      title: 'Maternity & Newborn Photography',
      category: 'Weddings & Portraits',
      img: '/images/maternity.png',
      desc: 'Capturing the beautiful glow of pregnancy and the gentle initial days of your newborn with extreme care.',
      features: ['Warm and safe indoor studio', 'Special baby props available', 'Flexible baby-feed breaks', 'Soft artistic glow lighting']
    },
    {
      id: 14,
      title: 'Photo Editing',
      category: 'Specialty',
      img: '/images/photo-editing.png',
      desc: 'Professional grade color correction, raw development, background manipulations, and historical restoration.',
      features: ['Color grading palettes', 'Dust and blemish cleaning', 'Photoshop compositing work', 'Speedy digital dispatch']
    },
    {
      id: 15,
      title: 'Product Photography',
      category: 'Events & Corporate',
      img: '/images/product.png',
      desc: 'E-commerce white background photography, lifestyle setups, catalog imagery for jewelry, clothing, and crafts.',
      features: ['Studio tabletop lighting', 'Macro detail captures', 'Accurate product colors', 'E-commerce platform sizing']
    },
    {
      id: 16,
      title: 'Property Photography',
      category: 'Events & Corporate',
      img: '/images/property.png',
      desc: 'High dynamic range shots of hotels, heritage resorts, real estate listings, and luxury architectural properties.',
      features: ['Wide-angle architectural lenses', 'Twilight lighting sessions', 'Interior/Exterior layouts', 'High dynamic HDR bracketings']
    },
    {
      id: 17,
      title: 'School Portraits',
      category: 'Specialty',
      img: '/images/school-portraits.png',
      desc: 'Organized and high-efficiency student portraits, group classroom pictures, and graduation day coverages.',
      features: ['Fast queue management', 'Uniform backdrop layouts', 'Name tagging metadata', 'Discounted bulk prints Packages']
    }
  ];

  const filteredServices = activeTab === 'All' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeTab);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background soft glow */}
      <div className="glow-shape" style={{ width: '450px', height: '450px', backgroundColor: 'var(--glow-red)', top: '15%', right: '-80px' }} />
      <div className="glow-shape" style={{ width: '500px', height: '500px', backgroundColor: 'var(--glow-blue)', bottom: '20%', left: '-100px' }} />

      {/* 1. HERO BANNER */}
      <section 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.95)), url("/images/camera-gear.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '10rem 0 6rem 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <span className="section-subtitle">Our Portfolios</span>
          <h1 style={{ fontWeight: 800, marginBottom: '1rem' }}>Our Photography Services</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.15rem' }}>
            From royal heritage celebrations to detailed commercial catalogs, explore our 17 specialized services.
          </p>
        </div>
      </section>

      {/* 2. SERVICES LIST & TABS */}
      <section style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)', paddingTop: '4rem' }}>
        <div className="container">
          
          {/* Categories Tab Navigation */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              flexWrap: 'wrap', 
              gap: '0.75rem', 
              marginBottom: '4rem',
              position: 'relative',
              zIndex: 10
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '0.6rem 1.5rem',
                  borderRadius: '25px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'var(--transition-normal)',
                  backgroundColor: activeTab === cat ? 'var(--primary-red)' : 'rgba(255,255,255,0.05)',
                  border: activeTab === cat ? '1px solid var(--primary-red)' : '1px solid var(--border-light)',
                  color: activeTab === cat ? '#white' : 'var(--text-primary)',
                  boxShadow: activeTab === cat ? '0 4px 15px rgba(210, 4, 45, 0.25)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== cat) {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== cat) {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
              gap: '2.5rem',
              position: 'relative',
              zIndex: 10
            }}
          >
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className="glass-card" 
                style={{ 
                  padding: 0, 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  display: 'flex', 
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                {/* Card Image */}
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }} className="zoom-container">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    className="service-card-img"
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(255, 255, 255, 0.7), transparent)' }} />
                  <span 
                    style={{ 
                      position: 'absolute', 
                      top: '15px', 
                      right: '15px', 
                      backgroundColor: 'rgba(255, 255, 255, 0.85)', 
                      border: '1px solid var(--border-light)', 
                      padding: '0.35rem 0.85rem', 
                      borderRadius: '15px', 
                      fontSize: '0.75rem',
                      color: 'var(--primary-red)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {service.category}
                  </span>
                </div>

                {/* Card Content */}
                <div style={{ padding: 'clamp(1.25rem, 4vw, 2rem)', display: 'flex', flexDirection: 'column', gap: '1.25rem', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700 }}>{service.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', flexGrow: 1, lineHeight: '1.6' }}>
                    {service.desc}
                  </p>
                  
                  {/* Service Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '0.5rem 0 1rem 0' }}>
                    {service.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                        <Check size={14} style={{ color: 'var(--primary-red)', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp Call-to-action */}
                  <a 
                    href={`https://wa.me/919828142098?text=Hello%20Kamal%20Digi%20Studio,%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-red" 
                    style={{ width: '100%' }}
                  >
                    <span>Inquire / Book Service</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

        <style>{`
          .zoom-container:hover .service-card-img {
            transform: scale(1.08);
          }
        `}</style>
      </section>

      {/* 3. CALL TO ACTION */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div 
            className="glass-card cta-banner-card" 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center', 
              gap: '1.5rem',
              background: 'linear-gradient(135deg, rgba(210, 4, 45, 0.08) 0%, rgba(131, 56, 236, 0.08) 100%)',
              borderColor: 'rgba(210, 4, 45, 0.2)'
            }}
          >
            <span style={{ color: 'var(--primary-red)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Consultation Booking</span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Need A Customized Photography Package?</h2>
            <p style={{ maxWidth: '600px', fontSize: '1.05rem' }}>
              Every event has different schedules. Contact our Udaipur office directly, and we will formulate a personalized quote based on your specific days.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <a href="tel:+919828142098" className="btn btn-primary">
                <span>Call +91 98281 42098</span>
              </a>
              <a href="https://wa.me/919828142098" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <span>WhatsApp Live Chat</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
export default Services;
