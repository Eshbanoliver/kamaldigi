import React from 'react';
import { Camera, Award, ShieldCheck, HeartHandshake, Smile, Sun, Sliders, Heart, Sparkles, Phone, MessageCircle } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import { motion } from 'framer-motion';

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
    { 
      icon: <Award size={28} color="white" />, 
      title: 'Award-Winning Quality', 
      desc: 'Renowned for our state-of-the-art photography, high-resolution cameras, and cinematic edits.',
      gradient: 'linear-gradient(135deg, #FF0076 0%, #590FB7 100%)',
      shadow: 'rgba(255, 0, 118, 0.3)'
    },
    { 
      icon: <ShieldCheck size={28} color="white" />, 
      title: 'Certified Crew', 
      desc: 'Experienced crew members who understand wedding etiquette, corporate timings, and outdoor lighting.',
      gradient: 'linear-gradient(135deg, #00C9FF 0%, #92FE9D 100%)',
      shadow: 'rgba(0, 201, 255, 0.3)'
    },
    { 
      icon: <HeartHandshake size={28} color="white" />, 
      title: '100% Transparency', 
      desc: 'No hidden charges or delays. Clear pricing structures and direct delivery timelines.',
      gradient: 'linear-gradient(135deg, #F5AF19 0%, #F12711 100%)',
      shadow: 'rgba(245, 175, 25, 0.3)'
    },
    { 
      icon: <Smile size={28} color="white" />, 
      title: 'Happy Clients', 
      desc: 'Over 1000+ satisfied clients across Udaipur and neighboring cities, endorsing our name.',
      gradient: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
      shadow: 'rgba(102, 126, 234, 0.3)'
    },
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
      <section style={{ backgroundColor: 'var(--bg-dark-1)', position: 'relative', overflow: 'hidden', padding: '6rem 0', borderBottom: '1px solid var(--border-light)' }}>
        
        {/* Decorative background typography and glows */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '20vw', fontWeight: 900, color: 'rgba(15, 23, 42, 0.02)', whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 0 }}>
          KAMAL DIGI
        </div>
        <div className="glow-shape" style={{ width: '400px', height: '400px', backgroundColor: 'rgba(210, 4, 45, 0.05)', top: '10%', left: '-10%', zIndex: 0 }} />
        <div className="glow-shape" style={{ width: '400px', height: '400px', backgroundColor: 'rgba(17, 138, 178, 0.05)', bottom: '10%', right: '-10%', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header" style={{ marginBottom: '4rem' }}>
            <span className="section-subtitle" style={{ display: 'inline-block', padding: '0.5rem 1.25rem', background: 'rgba(210, 4, 45, 0.1)', border: '1px solid rgba(210, 4, 45, 0.2)', borderRadius: '30px', color: 'var(--primary-red)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.8rem' }}>Purpose & Future</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '0' }}>
              Our <span className="gradient-text-red">Philosophy</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="mission-grid">
            {/* MISSION CARD */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(210, 4, 45, 0.15)' }}
              className="glass-card mission-vision-vibrant" 
              style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                padding: '4rem 3rem',
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.5rem',
                border: '1px solid rgba(210, 4, 45, 0.2)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
                borderRadius: '24px'
              }}
            >
              {/* Background Accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '6px', height: '100%', background: 'linear-gradient(to bottom, #D2042D, #FF4D6D)' }} />
              
              {/* Large Watermark Icon */}
              <div style={{ position: 'absolute', right: '-10%', bottom: '-20%', opacity: 0.04, transform: 'rotate(-15deg)', pointerEvents: 'none' }}>
                <Heart size={300} color="#D2042D" />
              </div>

              <div style={{ width: '70px', height: '70px', borderRadius: '20px', background: 'linear-gradient(135deg, #D2042D 0%, #FF4D6D 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(210, 4, 45, 0.3)' }}>
                <Heart size={32} color="white" />
              </div>
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <span style={{ color: 'var(--primary-red)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Preserving Memories</span>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0 1.5rem 0', color: 'var(--text-primary)' }}>Our Mission</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                  "To preserve precious memories through exceptional photography and creative storytelling, delivering absolute artistic layouts and professional reliability."
                </p>
              </div>
            </motion.div>
            
            {/* VISION CARD */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(17, 138, 178, 0.15)' }}
              className="glass-card mission-vision-vibrant" 
              style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                padding: '4rem 3rem',
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.5rem',
                border: '1px solid rgba(17, 138, 178, 0.2)',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
                borderRadius: '24px'
              }}
            >
              {/* Background Accent */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '6px', height: '100%', background: 'linear-gradient(to bottom, #118AB2, #073B4C)' }} />
              
              {/* Large Watermark Icon */}
              <div style={{ position: 'absolute', left: '-10%', bottom: '-20%', opacity: 0.04, transform: 'rotate(15deg)', pointerEvents: 'none' }}>
                <Sparkles size={300} color="#118AB2" />
              </div>

              <div style={{ width: '70px', height: '70px', borderRadius: '20px', background: 'linear-gradient(135deg, #118AB2 0%, #073B4C 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(17, 138, 178, 0.3)' }}>
                <Sparkles size={32} color="white" />
              </div>
              
              <div style={{ position: 'relative', zIndex: 2 }}>
                <span style={{ color: 'var(--secondary-blue)', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Expanding Artistry</span>
                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0 1.5rem 0', color: 'var(--text-primary)' }}>Our Vision</h3>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                  "To become the most trusted and artistic photography studio in Rajasthan, renowned for our professional excellence, cutting-edge equipment, and client satisfaction."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`
          @media (min-width: 992px) {
            .mission-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </section>

      {/* 5. WHY CLIENTS TRUST US */}
      <section style={{ backgroundColor: 'var(--bg-dark-2)', position: 'relative', overflow: 'hidden', padding: '6rem 0', borderBottom: '1px solid var(--border-light)' }}>
        {/* Glow Effects */}
        <div className="glow-shape" style={{ width: '400px', height: '400px', backgroundColor: 'rgba(102, 126, 234, 0.05)', top: '-10%', left: '-10%', zIndex: 0 }} />
        <div className="glow-shape" style={{ width: '400px', height: '400px', backgroundColor: 'rgba(245, 175, 25, 0.05)', bottom: '-10%', right: '-10%', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header" style={{ marginBottom: '4rem' }}>
            <span className="section-subtitle" style={{ display: 'inline-block', padding: '0.5rem 1.25rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '30px', color: 'var(--text-primary)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
              Our Promise
            </span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1rem' }}>
              Why Clients <span className="gradient-text-red">Trust Us</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              From prompt communications to premium custom edits, here is why Udaipur trusts Kamal Digi Studio.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {trustFactors.map((factor, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ position: 'relative', cursor: 'pointer' }}
                className="trust-card-wrapper"
              >
                {/* Glowing Background Shadow */}
                <div 
                  className="trust-card-glow"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: factor.gradient,
                    filter: 'blur(25px)',
                    opacity: 0.6,
                    borderRadius: '24px',
                    zIndex: 0,
                    transition: 'all 0.4s ease'
                  }} 
                />

                <div
                  className="trust-card-inner"
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '1.5rem', 
                    padding: '2.5rem 2rem',
                    borderRadius: '24px',
                    background: factor.gradient,
                    boxShadow: `0 20px 40px ${factor.shadow}`,
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 1,
                    height: '100%'
                  }}
                >
                  {/* Decorative Overlay */}
                  <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)', pointerEvents: 'none' }} />
                  
                  {/* Background Icon Watermark */}
                  <div style={{ position: 'absolute', right: '-15%', bottom: '-15%', opacity: 0.1, transform: 'scale(4)', pointerEvents: 'none' }}>
                    {factor.icon}
                  </div>

                  <div 
                    style={{ 
                      width: '64px', 
                      height: '64px', 
                      borderRadius: '16px', 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    {factor.icon}
                  </div>
                  
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                      {factor.title}
                    </h3>
                    <p style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.6', margin: 0 }}>
                      {factor.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`
          .trust-card-wrapper:hover .trust-card-glow {
            opacity: 1 !important;
            filter: blur(35px) !important;
          }
          .trust-card-inner {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .trust-card-inner::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 24px;
            border: 1px solid rgba(255,255,255,0.3);
            pointer-events: none;
          }
        `}</style>
      </section>

      {/* 6. CTA BANNER */}
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

            {/* Viewfinder Frame Corner Brackets */}
            <div style={{ position: 'absolute', top: '20px', left: '20px', width: '16px', height: '16px', borderTop: '2.5px solid rgba(255, 255, 255, 0.2)', borderLeft: '2.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: '20px', right: '20px', width: '16px', height: '16px', borderTop: '2.5px solid rgba(255, 255, 255, 0.2)', borderRight: '2.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', width: '16px', height: '16px', borderBottom: '2.5px solid rgba(255, 255, 255, 0.2)', borderLeft: '2.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none', zIndex: 1 }} />
            <div style={{ position: 'absolute', bottom: '20px', right: '20px', width: '16px', height: '16px', borderBottom: '2.5px solid rgba(255, 255, 255, 0.2)', borderRight: '2.5px solid rgba(255, 255, 255, 0.2)', pointerEvents: 'none', zIndex: 1 }} />

            {/* Glowing Lens Flare / Bokeh Blobs inside Card */}
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

            {/* Decorative Shutter / Aperture Concentric Ring overlay */}
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

            {/* Viewfinder REC Indicator inside card */}
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

            {/* Viewfinder battery / storage specs inside card */}
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

            {/* Content Core */}
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
                <span>Ready to Begin?</span>
              </motion.div>

              <h2 style={{ 
                maxWidth: '750px', 
                margin: '0 auto', 
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', 
                lineHeight: '1.25',
                color: 'white',
                fontWeight: 800
              }}>
                Let's Capture Your <span className="gradient-text-red" style={{ background: 'linear-gradient(135deg, #FF4D6D 0%, #D2042D 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Special Moments</span> Together
              </h2>
              
              <p style={{ 
                maxWidth: '650px', 
                margin: '0 auto', 
                fontSize: '1.15rem', 
                lineHeight: '1.6', 
                color: 'rgba(255, 255, 255, 0.7)' 
              }}>
                Book a personalized photography consultation with Udaipur's premier studio. Let us craft luxurious visual memories you will treasure forever.
              </p>
              
              {/* Dynamic Buttons */}
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
      </section>
    </div>
  );
};
export default About;
