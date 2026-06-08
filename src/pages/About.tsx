import React from 'react';
import { Camera, Award, ShieldCheck, HeartHandshake, Smile, Sun, Sliders } from 'lucide-react';
import useSEO from '../hooks/useSEO';

export const About: React.FC = () => {
  useSEO({
    title: 'About Us | Kamal Digi Studio Udaipur',
    description: 'Learn about Kamal Digi Studio, Udaipur’s trusted photography studio since 2016. Meet our team, view our timeline, and discover our passion for capturing royal weddings and premium events.'
  });
  const [activePillar, setActivePillar] = React.useState<number>(0);
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  const autoRotateTimer = React.useRef<any>(null);

  const storyPillars = [
    {
      id: 0,
      title: 'Artistic Vision',
      subtitle: 'Fine Art & Journalism',
      desc: 'Blending fine art and candid photojournalism to capture smiles, emotional tears, and royal aesthetics as a cohesive, framing-worthy masterpiece.',
      image: '/images/wedding-couple.png',
      caption: 'Royal Rajasthani Weddings',
      color: 'var(--primary-red)',
      glow: 'rgba(210, 4, 45, 0.15)',
    },
    {
      id: 1,
      title: 'Heritage Passion',
      subtitle: 'Candid Celebrations',
      desc: 'Capturing Udaipur’s grand destination weddings, pre-wedding romance, and the rich legacy of Rajasthani cultural heritage.',
      image: '/images/wedding-engagement.png',
      caption: 'Pre-Wedding Grandeur',
      color: 'var(--primary-pink)',
      glow: 'rgba(255, 77, 109, 0.15)',
    },
    {
      id: 2,
      title: 'Technical Mastery',
      subtitle: 'State-Of-The-Art Equipment',
      desc: 'Powered by Sony mirrorless setups, cinema glass, high-speed stabilizers, and advanced digital retouching and color-grading labs.',
      image: '/images/camera-gear.png',
      caption: 'Advanced Camera Gear & BTS',
      color: 'var(--secondary-blue)',
      glow: 'rgba(17, 138, 178, 0.15)',
    }
  ];

  React.useEffect(() => {
    if (!isHovered) {
      autoRotateTimer.current = setInterval(() => {
        setActivePillar((prev) => (prev + 1) % storyPillars.length);
      }, 5000);
    }
    return () => {
      if (autoRotateTimer.current) {
        clearInterval(autoRotateTimer.current);
      }
    };
  }, [isHovered]);

  const trustFactors = [
    { icon: <Award size={24} />, title: 'Award-Winning Quality', desc: 'Renowned for our state-of-the-art photography, high-resolution cameras, and cinematic edits.' },
    { icon: <ShieldCheck size={24} />, title: 'Certified Crew', desc: 'Experienced crew members who understand wedding etiquette, corporate timings, and outdoor lighting.' },
    { icon: <HeartHandshake size={24} />, title: '100% Transparency', desc: 'No hidden charges or delays. Clear pricing structures and direct delivery timelines.' },
    { icon: <Smile size={24} />, title: 'Happy Clients', desc: 'Over 1000+ satisfied clients across Udaipur and neighboring cities, endorsing our name.' },
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Glows */}
      <div className="glow-shape" style={{ width: '400px', height: '400px', backgroundColor: 'var(--glow-purple)', top: '10%', right: '-50px' }} />
      <div className="glow-shape" style={{ width: '500px', height: '500px', backgroundColor: 'var(--glow-red)', bottom: '20%', left: '-150px' }} />

      {/* 1. HERO BANNER */}
      <section 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.95)), url("/images/photographer-studio.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '10rem 0 6rem 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <span className="section-subtitle">Get To Know Us</span>
          <h1 style={{ fontWeight: 800, marginBottom: '1rem' }}>Our Story & Passion</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.15rem' }}>
            Discover the creative team behind Udaipur's premium wedding, event, and portrait photography studio.
          </p>
        </div>
      </section>

      {/* 2. COMPANY STORY */}
      <section 
        style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="story-grid">
            {/* Left Column: Title and Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <span className="section-subtitle" style={{ margin: 0 }}>The Beginning</span>
                <h2 style={{ marginBottom: '1rem', lineHeight: '1.2' }}>
                  Crafting <span className="gradient-text-red">Artistic Visuals</span> Since 2016
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.5' }}>
                  Founded in Udaipur, Rajasthan, <strong>Kamal Digi Studio</strong> was created to blend fine art and photojournalism to encapsulate life's most precious celebrations. Hover or tap each card below to explore our core creative focus.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {storyPillars.map((pillar) => {
                  const isActive = activePillar === pillar.id;
                  return (
                    <div
                      key={pillar.id}
                      onClick={() => setActivePillar(pillar.id)}
                      onMouseEnter={() => setActivePillar(pillar.id)}
                      className={`philosophy-card ${isActive ? 'active' : ''}`}
                      style={{
                        padding: '1.25rem 1.5rem',
                        borderRadius: '16px',
                        border: '1px solid var(--border-light)',
                        backgroundColor: isActive ? 'var(--bg-dark-2)' : 'rgba(255, 255, 255, 0.4)',
                        boxShadow: isActive ? 'var(--shadow-premium)' : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        display: 'flex',
                        gap: '1.25rem',
                        alignItems: 'flex-start',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Left border accent line */}
                      <div
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          bottom: 0,
                          width: '4px',
                          backgroundColor: pillar.color,
                          transform: isActive ? 'scaleY(1)' : 'scaleY(0)',
                          transformOrigin: 'top',
                          transition: 'transform 0.4s ease',
                        }}
                      />
                      
                      <div
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.5rem',
                          fontWeight: 800,
                          color: isActive ? pillar.color : 'var(--text-muted)',
                          opacity: isActive ? 1 : 0.4,
                          lineHeight: 1,
                          marginTop: '2px',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        0{pillar.id + 1}
                      </div>

                      <div style={{ flexGrow: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: pillar.color, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {pillar.subtitle}
                          </span>
                        </div>
                        <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem', color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                          {pillar.title}
                        </h4>
                        <p 
                          style={{ 
                            fontSize: '0.92rem', 
                            lineHeight: '1.5',
                            color: isActive ? 'var(--text-secondary)' : 'var(--text-muted)',
                            margin: 0,
                            maxHeight: isActive ? '100px' : '0px',
                            opacity: isActive ? 1 : 0,
                            overflow: 'hidden',
                            transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease',
                          }}
                        >
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Right Column: Dynamic Polaroid Stack */}
            <div 
              className={`polaroid-stack-container stack-active-${activePillar}`}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '460px',
                width: '100%',
              }}
            >
              {/* Decorative floating glow behind polaroids */}
              <div 
                className="stack-glow"
                style={{
                  position: 'absolute',
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  backgroundColor: storyPillars[activePillar].color,
                  filter: 'blur(90px)',
                  opacity: 0.12,
                  zIndex: 0,
                  transition: 'background-color 0.6s ease',
                }}
              />

              {storyPillars.map((pillar) => {
                const isActive = activePillar === pillar.id;
                return (
                  <div
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    onMouseEnter={() => setActivePillar(pillar.id)}
                    className={`polaroid-card card-${pillar.id} ${isActive ? 'active' : ''}`}
                  >
                    <div className="polaroid-inner">
                      <img 
                        src={pillar.image} 
                        alt={pillar.title} 
                      />
                      <div className="polaroid-caption">
                        <Camera size={14} style={{ marginRight: '6px', opacity: 0.7 }} />
                        <span>{pillar.caption}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <style>{`
          .polaroid-card {
            position: absolute;
            width: 290px;
            background: #ffffff;
            padding: 12px 12px 20px 12px;
            border-radius: 4px;
            box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
            border: 1px solid rgba(15, 23, 42, 0.04);
            transition: all 0.6s cubic-bezier(0.25, 1, 0.5, 1);
            cursor: pointer;
          }
          
          .polaroid-card img {
            width: 100%;
            height: 240px;
            object-fit: cover;
            border-radius: 2px;
            display: block;
          }
          
          .polaroid-caption {
            font-family: var(--font-heading);
            font-size: 0.85rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 14px;
            color: var(--text-secondary);
          }
          
          /* Stacking animations using translate & rotate */
          .stack-active-0 .card-0 {
            transform: translate(0px, 0px) rotate(-3deg) scale(1.05);
            z-index: 10;
            box-shadow: 0 20px 45px rgba(210, 4, 45, 0.15);
            border-color: rgba(210, 4, 45, 0.2);
            opacity: 1;
          }
          .stack-active-0 .card-1 {
            transform: translate(90px, 20px) rotate(6deg) scale(0.95);
            z-index: 5;
            opacity: 0.75;
          }
          .stack-active-0 .card-2 {
            transform: translate(-90px, -20px) rotate(-10deg) scale(0.9);
            z-index: 3;
            opacity: 0.5;
          }
          
          .stack-active-1 .card-0 {
            transform: translate(-90px, 15px) rotate(-8deg) scale(0.95);
            z-index: 5;
            opacity: 0.75;
          }
          .stack-active-1 .card-1 {
            transform: translate(0px, 0px) rotate(3deg) scale(1.05);
            z-index: 10;
            box-shadow: 0 20px 45px rgba(255, 77, 109, 0.15);
            border-color: rgba(255, 77, 109, 0.2);
            opacity: 1;
          }
          .stack-active-1 .card-2 {
            transform: translate(90px, -25px) rotate(8deg) scale(0.9);
            z-index: 3;
            opacity: 0.5;
          }
          
          .stack-active-2 .card-0 {
            transform: translate(95px, -20px) rotate(8deg) scale(0.9);
            z-index: 3;
            opacity: 0.5;
          }
          .stack-active-2 .card-1 {
            transform: translate(-95px, 25px) rotate(-7deg) scale(0.95);
            z-index: 5;
            opacity: 0.75;
          }
          .stack-active-2 .card-2 {
            transform: translate(0px, 0px) rotate(-2deg) scale(1.05);
            z-index: 10;
            box-shadow: 0 20px 45px rgba(17, 138, 178, 0.15);
            border-color: rgba(17, 138, 178, 0.2);
            opacity: 1;
          }
          
          .polaroid-card:hover {
            z-index: 20 !important;
            transform: scale(1.08) translate(0px, -8px) !important;
            box-shadow: 0 30px 60px rgba(15, 23, 42, 0.18) !important;
            opacity: 1 !important;
          }

          .philosophy-card:hover {
            border-color: rgba(15, 23, 42, 0.15) !important;
          }
          
          .philosophy-card.active::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(130deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
            pointer-events: none;
          }

          @media (min-width: 992px) {
            .story-grid { grid-template-columns: 1.15fr 0.85fr !important; }
          }
          
          @media (max-width: 991px) {
            .polaroid-stack-container {
              height: 380px !important;
              margin-top: 2rem;
            }
            .polaroid-card {
              width: 230px !important;
              padding: 8px 8px 16px 8px !important;
            }
            .polaroid-card img {
              height: 190px !important;
            }
            .stack-active-0 .card-1 { transform: translate(60px, 15px) rotate(6deg) scale(0.95); }
            .stack-active-0 .card-2 { transform: translate(-60px, -15px) rotate(-10deg) scale(0.9); }
            .stack-active-1 .card-0 { transform: translate(-60px, 10px) rotate(-8deg) scale(0.95); }
            .stack-active-1 .card-2 { transform: translate(60px, -20px) rotate(8deg) scale(0.9); }
            .stack-active-2 .card-0 { transform: translate(65px, -15px) rotate(8deg) scale(0.9); }
            .stack-active-2 .card-1 { transform: translate(-65px, 20px) rotate(-7deg) scale(0.95); }
          }
          
          @media (max-width: 480px) {
            .polaroid-stack-container {
              height: 290px !important;
            }
            .polaroid-card {
              width: 170px !important;
              padding: 6px 6px 12px 6px !important;
            }
            .polaroid-card img {
              height: 130px !important;
            }
            .stack-active-0 .card-1 { transform: translate(45px, 10px) rotate(6deg) scale(0.95); }
            .stack-active-0 .card-2 { transform: translate(-45px, -10px) rotate(-10deg) scale(0.9); }
            .stack-active-1 .card-0 { transform: translate(-45px, 8px) rotate(-8deg) scale(0.95); }
            .stack-active-1 .card-2 { transform: translate(45px, -15px) rotate(8deg) scale(0.9); }
            .stack-active-2 .card-0 { transform: translate(50px, -10px) rotate(8deg) scale(0.9); }
            .stack-active-2 .card-1 { transform: translate(-50px, 15px) rotate(-7deg) scale(0.95); }
            .polaroid-caption {
              font-size: 0.7rem !important;
              margin-top: 8px !important;
            }
          }
        `}</style>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section style={{ backgroundColor: 'var(--bg-dark-2)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem', alignItems: 'center' }} className="why-choose-grid">
            
            {/* Left Column: Visual Stats Panel */}
            <div style={{ position: 'relative', width: '100%' }}>
              <div 
                style={{ 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-premium)', 
                  border: '1px solid var(--border-light)',
                  position: 'relative',
                  height: '480px'
                }}
                className="stats-image-wrapper"
              >
                <img 
                  src="/images/photographer-bts.png" 
                  alt="Kamal Digi Studio team behind the scenes" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.7) 100%)',
                    zIndex: 1
                  }}
                />
              </div>

              {/* Overlapping Glassmorphic Stats Board */}
              <div 
                className="glass-card stats-board-card"
                style={{
                  position: 'absolute',
                  bottom: '-30px',
                  right: '20px',
                  width: 'calc(100% - 40px)',
                  maxWidth: '380px',
                  padding: '2rem',
                  zIndex: 2,
                  background: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 20px 50px rgba(15, 23, 42, 0.15)',
                  borderRadius: '20px'
                }}
              >
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--primary-red)' }}>
                  Our Achievements
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <span style={{ display: 'block', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: '1.2' }}>9+</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Years of Craft</span>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: '1.2' }}>1000+</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Events Captured</span>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: '1.2' }}>150K+</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Edited Photos</span>
                  </div>
                  <div>
                    <span style={{ display: 'block', fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: '1.2' }}>100%</span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Transparency</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Why Choose Us Content & Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <span className="section-subtitle" style={{ margin: 0 }}>Our Distinction</span>
                <h2 style={{ marginBottom: '1rem', lineHeight: '1.2' }}>Why Choose Kamal Digi Studio</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                  We don't just capture portraits—we build visual heirlooms. Through years of covering grand Rajasthani weddings and high-end events, we have perfected the blend of art, technology, and professionalism.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="why-choose-list">
                
                {/* Point 1 */}
                <div className="choose-feature-card">
                  <div className="choose-icon-box" style={{ color: 'var(--primary-red)', backgroundColor: 'rgba(210, 4, 45, 0.08)' }}>
                    <Camera size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>Cinema-Grade Systems</h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                      Equipped with high-resolution full-frame mirrorless gear, multi-axis stabilizers, and high-fidelity aerial drone rigs.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="choose-feature-card">
                  <div className="choose-icon-box" style={{ color: 'var(--primary-pink)', backgroundColor: 'rgba(255, 77, 109, 0.08)' }}>
                    <Sun size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>Heritage Lighting Experts</h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                      Mastering palace environments, candlelit halls, fireworks, and sunset hours to deliver glowing, perfectly balanced frames.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="choose-feature-card">
                  <div className="choose-icon-box" style={{ color: 'var(--secondary-blue)', backgroundColor: 'rgba(17, 138, 178, 0.08)' }}>
                    <Sliders size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>In-House Editing Labs</h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                      Every image is individually graded and retouched by color experts to retain warm tones, vivid details, and aesthetic richness.
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="choose-feature-card">
                  <div className="choose-icon-box" style={{ color: 'var(--secondary-purple)', backgroundColor: 'rgba(7, 59, 76, 0.08)' }}>
                    <HeartHandshake size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>Absolute Transparency</h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: 0, lineHeight: '1.5' }}>
                      Clear package pricing, timely photo delivery, and certified crew members who coordinate directly with event planners.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        <style>{`
          .choose-feature-card {
            display: flex;
            gap: 1.25rem;
            align-items: flex-start;
            padding: 1rem;
            border-radius: 16px;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid transparent;
          }
          .choose-feature-card:hover {
            background-color: var(--bg-dark-1);
            border-color: var(--border-light);
            transform: translateX(6px);
          }
          .choose-icon-box {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            transition: all 0.35s ease;
          }
          .choose-feature-card:hover .choose-icon-box {
            transform: scale(1.1) rotate(5deg);
          }
          
          @media (min-width: 992px) {
            .why-choose-grid {
              grid-template-columns: 0.9fr 1.1fr !important;
            }
          }
          @media (max-width: 991px) {
            .why-choose-grid {
              gap: 5rem !important;
            }
            .stats-image-wrapper {
              height: 380px !important;
            }
            .stats-board-card {
              position: relative !important;
              width: 100% !important;
              max-width: 100% !important;
              bottom: 0 !important;
              right: 0 !important;
              margin-top: 1.5rem;
              box-shadow: var(--shadow-premium) !important;
            }
          }
          @media (max-width: 480px) {
            .stats-image-wrapper {
              height: 280px !important;
            }
            .choose-feature-card {
              padding: 0.5rem;
            }
            .choose-feature-card:hover {
              transform: none;
            }
          }
        `}</style>
      </section>

      {/* 4. MISSION & VISION */}
      <section style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="mission-grid">
            <div className="glass-card mission-vision-card" style={{ borderTop: '4px solid var(--primary-red)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                To preserve precious memories through exceptional photography and creative storytelling. We commit to bringing aesthetic consistency, state-of-the-art camera dynamics, and timely delivery.
              </p>
            </div>
            <div className="glass-card mission-vision-card" style={{ borderTop: '4px solid var(--secondary-blue)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Our Vision</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                To become the most trusted photography studio in Rajasthan, known for artistic excellence, customer satisfaction, and capturing destination royal weddings with cinematic elegance.
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (min-width: 768px) {
            .mission-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </section>

      {/* 5. WHY CLIENTS TRUST US */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Promise</span>
            <h2 className="section-title">Why Clients Trust Us</h2>
            <p>From prompt communications to premium custom edits, here is why Udaipur trusts Kamal Digi Studio.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {trustFactors.map((factor, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1rem', 
                  textAlign: 'center', 
                  alignItems: 'center' 
                }}
              >
                <div 
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(210, 4, 45, 0.1)', 
                    color: 'var(--primary-red)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {factor.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{factor.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{factor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section style={{ backgroundColor: 'var(--bg-dark-1)', padding: '5rem 0' }}>
        <div className="container">
          <div 
            className="glass-card cta-banner-card" 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center', 
              gap: '1.5rem',
              background: 'linear-gradient(135deg, rgba(210, 4, 45, 0.08) 0%, rgba(58, 134, 255, 0.08) 100%)',
              borderColor: 'rgba(210, 4, 45, 0.2)'
            }}
          >
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Ready To Co-Create Your Visual Album?</h2>
            <p style={{ maxWidth: '600px', fontSize: '1.05rem' }}>
              Contact Udaipur's finest lens handlers today. Discuss dates, location routes, wardrobe pairings, and custom templates.
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
export default About;
