import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight, MessageCircle, Users, Award, Sparkles, Phone } from 'lucide-react';
import useSEO from '../hooks/useSEO';

export const Testimonials: React.FC = () => {
  useSEO({
    title: 'Client Testimonials & Stories | Kamal Digi Studio Udaipur',
    description: 'Read reviews and success stories from clients who chose Kamal Digi Studio, Udaipur. Discover our 4.9/5 star ratings on Google for wedding shoots, corporate events, and maternity sessions.'
  });
  const stats = [
    { label: 'Aggregate Rating', value: '4.9 / 5.0', icon: 'star', color: '#FFD700', bg: 'rgba(255, 215, 0, 0.1)', border: 'rgba(255, 215, 0, 0.25)', gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' },
    { label: 'Google Business Reviews', value: '350+', icon: 'message', color: '#3A86FF', bg: 'rgba(58, 134, 255, 0.1)', border: 'rgba(58, 134, 255, 0.25)', gradient: 'linear-gradient(135deg, #3A86FF 0%, #00F5FF 100%)' },
    { label: 'Happy Couples', value: '600+', icon: 'users', color: '#D2042D', bg: 'rgba(210, 4, 45, 0.1)', border: 'rgba(210, 4, 45, 0.25)', gradient: 'linear-gradient(135deg, #D2042D 0%, #FF4D6D 100%)' },
    { label: 'Corporate Partners', value: '80+', icon: 'award', color: '#8338EC', bg: 'rgba(131, 56, 236, 0.1)', border: 'rgba(131, 56, 236, 0.25)', gradient: 'linear-gradient(135deg, #8338EC 0%, #FF007F 100%)' },
  ];

  const getStatIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'star': return <Star fill={color} color={color} size={24} />;
      case 'message': return <MessageCircle color={color} size={24} />;
      case 'users': return <Users color={color} size={24} />;
      case 'award': return <Award color={color} size={24} />;
      default: return null;
    }
  };

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
      img: '/images/wedding-couple.webp'
    },
    {
      title: 'E-commerce Brand Catalog for Mewar Crafts',
      client: 'Mewar Crafts Enterprises',
      story: 'A complete product catalog shoot of hand-painted wooden artifacts and stone sculptures. The task required macro-level lighting to bring out texture, grain, and accurate colors for international listings. We shot, edited, and formatted over 150 items with clean backgrounds. Post-launch, Mewar Crafts reported a 40% rise in conversion due to high-definition visuals.',
      img: '/images/product.webp'
    }
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background soft glows */}
      <div className="glow-shape" style={{ width: '450px', height: '450px', backgroundColor: 'var(--glow-purple)', top: '10%', left: '-100px' }} />
      <div className="glow-shape" style={{ width: '500px', height: '500px', backgroundColor: 'var(--glow-red)', bottom: '15%', right: '-80px' }} />

      {/* 1. HERO SECTION */}
      <section 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.95)), url("/images/hero-bg.webp")',
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
      <section style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: `0 20px 40px -10px rgba(15, 23, 42, 0.12), 0 0 25px ${stat.bg}`,
                  borderColor: stat.color
                }}
                className="glass-card"
                style={{
                  textAlign: 'center',
                  padding: '2.5rem 1.5rem',
                  borderRadius: '24px',
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(15, 23, 42, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'border-color 0.4s ease, box-shadow 0.4s ease'
                }}
              >
                {/* Icon Container with glowing base */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: `1px solid ${stat.border}`,
                  boxShadow: `0 8px 16px -4px ${stat.bg}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {getStatIcon(stat.icon, stat.color)}
                </div>

                <div 
                  style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontSize: '2.8rem', 
                    fontWeight: 800, 
                    lineHeight: 1.1,
                    background: stat.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    zIndex: 2,
                    letterSpacing: '-0.02em'
                  }}
                >
                  {stat.value}
                </div>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 600, zIndex: 2, margin: 0 }}>{stat.label}</h4>
                
                {/* Bottom accent indicator */}
                <div style={{ position: 'absolute', bottom: 0, left: '15%', width: '70%', height: '3px', background: stat.gradient, borderRadius: '3px 3px 0 0', opacity: 0.4 }} />
              </motion.div>
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
            {reviews.map((rev, idx) => {
              const cardThemes = [
                { gradient: 'linear-gradient(135deg, #D2042D 0%, #FF4D6D 100%)', shadow: 'rgba(210, 4, 45, 0.2)', text: '#D2042D' },
                { gradient: 'linear-gradient(135deg, #3A86FF 0%, #00F5FF 100%)', shadow: 'rgba(58, 134, 255, 0.2)', text: '#3A86FF' },
                { gradient: 'linear-gradient(135deg, #8338EC 0%, #FF007F 100%)', shadow: 'rgba(131, 56, 236, 0.2)', text: '#8338EC' },
                { gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', shadow: 'rgba(16, 185, 129, 0.2)', text: '#10B981' },
              ];
              const theme = cardThemes[idx % cardThemes.length];

              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                  whileHover={{ y: -8, boxShadow: `0 20px 40px ${theme.shadow}` }}
                  className="glass-card testimonial-vibrant-card" 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '1.5rem',
                    borderRadius: '24px',
                    padding: '2.5rem',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(15, 23, 42, 0.15)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Big Stylized Quote Icon watermark */}
                  <div className="quote-watermark" style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '10px',
                    fontSize: '9rem',
                    fontFamily: 'Georgia, serif',
                    fontWeight: 900,
                    lineHeight: 1,
                    color: theme.text,
                    opacity: 0.04,
                    transition: 'all 0.4s ease',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    zIndex: 1
                  }}>&ldquo;</div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} size={16} fill="var(--primary-pink)" color="var(--primary-pink)" />
                      ))}
                    </div>
                    
                    {/* Tiny visual card theme circle indicator */}
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: theme.gradient }} />
                  </div>

                  <p style={{ fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--text-primary)', zIndex: 2, flexGrow: 1, lineHeight: '1.7', margin: 0 }}>
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
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>{rev.name}</h4>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{rev.role}</span>
                    </div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>{rev.date}</span>
                  </div>

                  {/* Glowing hover border effect */}
                  <div className="card-glow-border" style={{ position: 'absolute', inset: 0, borderRadius: '24px', border: '2px solid transparent', background: `${theme.gradient} border-box`, WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', opacity: 0.35, transition: 'opacity 0.4s ease', pointerEvents: 'none', zIndex: 10 }} />
                </motion.div>
              );
            })}
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
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
                    <motion.div 
                      whileHover={{ scale: 1.03, rotate: isEven ? -1 : 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      style={{ 
                        borderRadius: '24px', 
                        overflow: 'hidden', 
                        boxShadow: 'var(--shadow-premium)', 
                        border: '1px solid rgba(15, 23, 42, 0.15)',
                        position: 'relative'
                      }}
                    >
                      <img loading="lazy" 
                        src={story.img} 
                        alt={story.title} 
                        style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
                        className="story-image"
                      />
                    </motion.div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', order: isEven ? 2 : 1 }} className="story-text-container">
                    <span style={{ color: 'var(--primary-red)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Client: {story.client}
                    </span>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>{story.title}</h3>
                    <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)', margin: 0 }}>
                      {story.story}
                    </p>
                    <a 
                      href={`https://wa.me/919828142098?text=Hello%20Kamal%20Digi%20Studio,%20I%20am%20interested%20in%20a%20similar%20shoot%20to%20your%20success%20story:%20${encodeURIComponent(story.title)}.`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline-red story-btn"
                      style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '12px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: 700,
                        width: 'fit-content'
                      }}
                    >
                      <span>Inquire About Similar Shoot</span>
                      <ChevronRight size={16} className="btn-chevron" />
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

      {/* 5. CTA BANNER (Imported Premium Style from Home) */}
      <section style={{ padding: '6rem 0', overflow: 'hidden', position: 'relative' }}>
        {/* Ambient background glows outside the card */}
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(210, 4, 45, 0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div 
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            className="glass-card cta-banner-card" 
            style={{ 
              background: 'linear-gradient(135deg, #090D1A 0%, #15081C 50%, #051821 100%)',
              borderColor: 'rgba(210, 4, 45, 0.25)',
              borderWidth: '1px',
              borderStyle: 'solid',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2rem',
              padding: '5rem 2.5rem',
              borderRadius: '32px',
              boxShadow: '0 30px 70px -15px rgba(9, 13, 26, 0.5), 0 0 40px rgba(210, 4, 45, 0.15)',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center'
            }}
          >
            {/* Viewfinder Rule of Thirds Lines Overlay */}
            <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255, 255, 255, 0.03)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '33.33%', width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.03)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: '66.66%', width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.03)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', left: 0, right: 0, top: '33.33%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.03)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', left: 0, right: 0, top: '66.66%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.03)', pointerEvents: 'none', zIndex: 1 }} />

            {/* Viewfinder Corner Brackets */}
            <div style={{ position: 'absolute', top: '20px', left: '20px', width: '16px', height: '16px', borderTop: '2.5px solid rgba(255, 255, 255, 0.2)', borderLeft: '2.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: '20px', right: '20px', width: '16px', height: '16px', borderTop: '2.5px solid rgba(255, 255, 255, 0.2)', borderRight: '2.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', width: '16px', height: '16px', borderBottom: '2.5px solid rgba(255, 255, 255, 0.2)', borderLeft: '2.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: '20px', right: '20px', width: '16px', height: '16px', borderBottom: '2.5px solid rgba(255, 255, 255, 0.2)', borderRight: '2.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none', zIndex: 1 }} />

            {/* Glowing Bokeh Blobs */}
            <motion.div 
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15],
                x: [0, 20, 0],
                y: [0, -20, 0]
              }}
              transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #D2042D 0%, transparent 70%)',
                filter: 'blur(70px)',
                top: '-100px',
                left: '-100px',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            />
            <motion.div 
              animate={{
                scale: [1.1, 0.9, 1.1],
                opacity: [0.12, 0.2, 0.12],
                x: [0, -30, 0],
                y: [0, 30, 0]
              }}
              transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #3A86FF 0%, transparent 70%)',
                filter: 'blur(80px)',
                bottom: '-120px',
                right: '-120px',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            />

            {/* Shutter overlay */}
            <div style={{
              position: 'absolute',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              border: '1px solid rgba(255, 255, 255, 0.02)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 0
            }}>
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', border: '1px dashed rgba(255, 255, 255, 0.015)', transform: 'scale(0.8)' }} />
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', border: '1.5px solid rgba(255, 255, 255, 0.01)', transform: 'scale(0.65)', position: 'absolute', top: 0, left: 0 }} />
            </div>

            {/* REC Dot */}
            <div style={{ 
              position: 'absolute', 
              top: '35px', 
              left: '35px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px', 
              fontFamily: 'monospace', 
              fontSize: '0.7rem', 
              color: 'rgba(255, 255, 255, 0.5)',
              zIndex: 1
            }}>
              <motion.span 
                animate={{ opacity: [1, 0, 1] }} 
                transition={{ repeat: Infinity, duration: 1.5 }} 
                style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#D2042D', boxShadow: '0 0 8px #D2042D' }} 
              />
              <span style={{ letterSpacing: '0.1em' }}>REC ACTIVE</span>
            </div>

            <div style={{ 
              position: 'absolute', 
              top: '35px', 
              right: '35px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              fontFamily: 'monospace', 
              fontSize: '0.7rem', 
              color: 'rgba(255, 255, 255, 0.5)',
              zIndex: 1
            }}>
              <span>STANDBY</span>
              <div style={{ width: '16px', height: '9px', border: '1px solid rgba(255, 255, 255, 0.4)', padding: '1px', display: 'flex', borderRadius: '2px', position: 'relative' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#10B981' }} />
              </div>
            </div>

            <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--primary-pink)',
                  background: 'rgba(255, 77, 109, 0.1)',
                  padding: '0.4rem 1rem',
                  borderRadius: '30px',
                  border: '1px solid rgba(255, 77, 109, 0.2)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                <Sparkles size={14} />
                <span>Be Our Next Success Story</span>
              </motion.div>

              <h2 style={{ 
                maxWidth: '750px', 
                margin: '0 auto', 
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', 
                lineHeight: '1.25',
                color: 'white',
                fontWeight: 800
              }}>
                Ready to Capture Your <span className="gradient-text-red" style={{ background: 'linear-gradient(135deg, #FF4D6D 0%, #D2042D 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Story</span> Together?
              </h2>
              
              <p style={{ 
                maxWidth: '650px', 
                margin: '0 auto', 
                fontSize: '1.15rem', 
                lineHeight: '1.6', 
                color: 'rgba(255, 255, 255, 0.7)' 
              }}>
                Whether it is a royal event, an engagement shoot, or e-commerce cataloging, let us capture it in high-end, luxurious styles.
              </p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                <motion.a 
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(210, 4, 45, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+919828142098" 
                  className="btn btn-primary"
                  style={{
                    backgroundColor: 'var(--primary-red)',
                    borderColor: 'var(--primary-red)',
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '1rem',
                    fontWeight: 700,
                    boxShadow: '0 8px 20px rgba(210, 4, 45, 0.3)',
                    transition: 'all 0.2s ease',
                    color: 'white'
                  }}
                >
                  <Phone size={18} />
                  <span>Call Now</span>
                </motion.a>
                
                <motion.a 
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)', borderColor: 'white' }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/919828142098" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '1rem',
                    fontWeight: 700,
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <MessageCircle size={18} />
                  <span>Book Consultation</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <style>{`
          .testimonial-vibrant-card:hover .quote-watermark {
            transform: translateY(-5px) scale(1.15);
            opacity: 0.08 !important;
          }
          .testimonial-vibrant-card:hover .card-glow-border {
            opacity: 1 !important;
          }
          .story-img-container:hover .story-image {
            transform: scale(1.06);
          }
          .story-btn {
            transition: all 0.3s ease;
          }
          .story-btn .btn-chevron {
            transition: transform 0.3s ease;
          }
          .story-btn:hover .btn-chevron {
            transform: translateX(4px);
          }
        `}</style>
      </section>

    </div>
  );
};
export default Testimonials;
