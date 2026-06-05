import React from 'react';
import { Star, Quote, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const stats = [
    { label: 'Aggregate Rating', value: '4.9 / 5.0' },
    { label: 'Google Business Reviews', value: '350+' },
    { label: 'Happy Couples', value: '600+' },
    { label: 'Corporate Partners', value: '80+' },
  ];

  const reviews = [
    {
      name: 'Anjali & Vikram Singhal',
      rating: 5,
      date: 'April 2026',
      role: 'Wedding Couple',
      content: 'Choosing Kamal Digi Studio for our wedding in Udaipur was the best decision we made. The pre-wedding photos around Lake Pichola were breathtaking. On the wedding day, the team was incredibly professional and captured all the candid emotional moments without being intrusive. The quality of the final leather album is outstanding!'
    },
    {
      name: 'Manish Chawla',
      rating: 5,
      date: 'March 2026',
      role: 'Marketing Director, Mewar Hotels',
      content: 'Kamal Digi Studio handles our hotel property shoots and branding events. Their understanding of light, interior structures, and twilight architectural shots is superb. The images have significantly helped our online bookings. Udaipur\'s true professionals.'
    },
    {
      name: 'Ritu & Devendra Vyas',
      rating: 5,
      date: 'January 2026',
      role: 'Maternity Session',
      content: 'The maternity shoot was exceptionally comfortable and beautiful. The team provided soft lighting, and creative props, and let us take breaks as needed. Our newborn portraits came out so clean and adorable. We are customers for life!'
    },
    {
      name: 'Siddharth Saxena',
      rating: 5,
      date: 'December 2025',
      role: 'Individual Portrait',
      content: 'I needed professional headshots for my modeling portfolio and corporate profiles. The studio session was excellent. The photographer guided me through poses and expression adjustments. Color grading was top-tier.'
    },
    {
      name: 'Meenakshi Rathore',
      rating: 5,
      date: 'November 2025',
      role: 'Mother (School Portraits)',
      content: 'Kamal Digi Studio covered our school annual portraits. They managed hundreds of kids so patiently and efficiently. Every child\'s photo is sharp, well-lit, and captured with a genuine smile.'
    },
    {
      name: 'Gaurav & Neha Kothari',
      rating: 5,
      date: 'October 2025',
      role: 'Anniversary Party',
      content: 'We booked them for our 25th anniversary celebration in Udaipur. The party photos are full of life, freezing the dance steps, family laughter, and cake cutting. Delivery was quicker than expected!'
    }
  ];

  const successStories = [
    {
      title: 'The Royal Heritage Wedding at Jagmandir',
      client: 'Sunita & Abhishek',
      story: 'Covering a massive 4-day destination wedding with over 800 guests. The project involved multi-camera traditional coverage, candid cinematographers, and aerial drone synchronization. The end result was a 5-minute premium cinematic trailer, a 45-minute documentary film, and 3 custom designed physical albums. The client praised our seamless coordination and professional behavior.',
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'E-commerce Brand Catalog for Mewar Crafts',
      client: 'Mewar Crafts Enterprises',
      story: 'A complete product catalog shoot of hand-painted wooden artifacts and stone sculptures. The task required macro-level lighting to bring out texture, grain, and accurate colors for international listings. We shot, edited, and formatted over 150 items with clean backgrounds. Post-launch, Mewar Crafts reported a 40% rise in conversion due to high-definition visuals.',
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background soft glows */}
      <div className="glow-shape" style={{ width: '450px', height: '450px', backgroundColor: 'var(--glow-purple)', top: '10%', left: '-100px' }} />
      <div className="glow-shape" style={{ width: '500px', height: '500px', backgroundColor: 'var(--glow-orange)', bottom: '15%', right: '-80px' }} />

      {/* 1. HERO SECTION */}
      <section 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.95)), url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1920&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '10rem 0 6rem 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <span className="section-subtitle">Client Reviews</span>
          <h1 style={{ fontWeight: 800, marginBottom: '1rem' }}>What Clients Say About Us</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.15rem' }}>
            We take pride in our service. Read genuine experiences from wedding couples, businesses, and families in Rajasthan.
          </p>
        </div>
      </section>

      {/* 2. RATING STATISTICS */}
      <section style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  textAlign: 'center', 
                  padding: '2rem 1rem',
                  borderTop: '2px solid var(--primary-orange)'
                }}
              >
                <div 
                  style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontSize: '2.5rem', 
                    fontWeight: 800, 
                    color: 'var(--primary-orange)', 
                    marginBottom: '0.5rem' 
                  }}
                >
                  {stat.value}
                </div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{stat.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. REVIEWS GRID */}
      <section style={{ backgroundColor: 'var(--bg-dark-2)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Feedback List</span>
            <h2 className="section-title">Verified Customer Reviews</h2>
            <p>Our commitment to quality translates into smiles and long-term relationships.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {reviews.map((rev, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.5rem',
                  padding: '2.5rem',
                  position: 'relative' 
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Quote size={40} style={{ color: 'var(--primary-orange)', opacity: 0.15, position: 'absolute', top: '20px', left: '20px' }} />
                  <div style={{ display: 'flex', gap: '2px', zIndex: 2, marginLeft: 'auto' }}>
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="var(--primary-yellow)" color="var(--primary-yellow)" />
                    ))}
                  </div>
                </div>

                <p style={{ fontStyle: 'italic', fontSize: '1rem', color: 'var(--text-primary)', zIndex: 2, flexGrow: 1, marginTop: '0.5rem' }}>
                  "{rev.content}"
                </p>

                <div 
                  style={{ 
                    borderTop: '1px solid var(--border-light)', 
                    paddingTop: '1.25rem', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    zIndex: 2
                  }}
                >
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{rev.name}</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{rev.role}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLIENT SUCCESS STORIES */}
      <section style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Detailed Portfolios</span>
            <h2 className="section-title">Client Success Stories</h2>
            <p>Go behind the scenes of some of our major coverages, and see how we solve logistics and delivery.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {successStories.map((story, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr', 
                    gap: '3rem', 
                    alignItems: 'center' 
                  }}
                  className={`story-row-${idx}`}
                >
                  <div style={{ order: isEven ? 1 : 2 }} className="story-img-container">
                    <div 
                      style={{ 
                        borderRadius: '24px', 
                        overflow: 'hidden', 
                        boxShadow: 'var(--shadow-premium)', 
                        border: '1px solid var(--border-light)' 
                      }}
                    >
                      <img 
                        src={story.img} 
                        alt={story.title} 
                        style={{ width: '100%', height: '350px', objectFit: 'cover', display: 'block' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', order: isEven ? 2 : 1 }} className="story-text-container">
                    <span style={{ color: 'var(--primary-orange)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Client: {story.client}
                    </span>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>{story.title}</h3>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                      {story.story}
                    </p>
                    <a 
                      href="https://wa.me/919828142098" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        color: 'var(--primary-orange)', 
                        fontWeight: 600,
                        marginTop: '0.5rem'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--primary-orange)')}
                    >
                      <span>Inquire About Similar Shoot</span>
                      <ChevronRight size={16} />
                    </a>
                  </div>

                  {/* Add desktop media queries inside style tag */}
                  <style>{`
                    @media (min-width: 992px) {
                      .story-row-${idx} { grid-template-columns: 1fr 1.1fr !important; }
                      .story-img-container { order: ${isEven ? '1' : '2'} !important; }
                      .story-text-container { order: ${isEven ? '2' : '1'} !important; }
                    }
                  `}</style>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div 
            className="glass-card" 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center', 
              gap: '1.5rem',
              background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.08) 0%, rgba(131, 56, 236, 0.08) 100%)',
              borderColor: 'rgba(255, 107, 53, 0.2)',
              padding: '4rem 2.5rem',
              borderRadius: '24px'
            }}
          >
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Be Our Next Success Story</h2>
            <p style={{ maxWidth: '600px', fontSize: '1.05rem' }}>
              Whether it is a royal event, an engagement shoot, or e-commerce cataloging, let us capture it in high-end styles.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              <a href="tel:+919828142098" className="btn btn-primary">
                <span>Call +91 98281 42098</span>
              </a>
              <a href="https://wa.me/919828142098" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
export default Testimonials;
