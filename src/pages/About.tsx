import React from 'react';
import { Camera, Calendar, Award, Heart, ShieldCheck, HeartHandshake, Smile } from 'lucide-react';

export const About: React.FC = () => {
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
      <div className="glow-shape" style={{ width: '500px', height: '500px', backgroundColor: 'var(--glow-orange)', bottom: '20%', left: '-150px' }} />

      {/* 1. HERO BANNER */}
      <section 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.95)), url("https://images.unsplash.com/photo-1452587925148-ce544e77e60d?q=80&w=1920&auto=format&fit=crop")',
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
      <section style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="story-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <span className="section-subtitle" style={{ margin: 0 }}>The Beginning</span>
              <h2>Crafting Artistic Visuals Since 2016</h2>
              <p>
                Founded in Udaipur, Rajasthan, <strong>Kamal Digi Studio</strong> was created with a singular focus: to blend fine art and photojournalism to encapsulate life's most precious celebrations.
              </p>
              <p>
                What started as a small team of passionate film enthusiasts has grown into one of Udaipur's most trusted full-service digital photography agencies. Today, we stand proud at Prem Nagar, Titrdi, offering high-end wedding coverages, maternity sessions, product catalogs, and corporate event streaming.
              </p>
              <p>
                Our crew has spent over a decade perfecting the art of catching subtle smiles, teardrops of joy, and the energetic steps of royal Rajasthani dances. We treat every click not just as a job, but as a masterpiece to be framed.
              </p>
            </div>
            
            <div>
              <div 
                style={{ 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-premium)', 
                  border: '1px solid var(--border-light)' 
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Photography team at work" 
                  style={{ width: '100%', height: '400px', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (min-width: 992px) {
            .story-grid { grid-template-columns: 1.1fr 0.9fr !important; }
          }
        `}</style>
      </section>

      {/* 3. JOURNEY & EXPERIENCE */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Timeline</span>
            <h2 className="section-title">The Journey & Milestones</h2>
            <p>A look back at how we expanded our tools, team, and reach to deliver cinematic perfection.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative' }} className="timeline">
            {/* Timeline center line */}
            <div 
              style={{ 
                position: 'absolute', 
                left: '20px', 
                top: 0, 
                bottom: 0, 
                width: '2px', 
                background: 'linear-gradient(to bottom, var(--primary-orange), var(--secondary-blue))',
                opacity: 0.3
              }}
              className="timeline-line"
            />

            {/* Milestone 1 */}
            <div style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 2 }} className="timeline-item">
              <div 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--bg-dark-2)', 
                  border: '3px solid var(--primary-orange)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Calendar size={16} style={{ color: 'var(--primary-orange)' }} />
              </div>
              <div className="glass-card" style={{ flexGrow: 1, padding: '1.75rem' }}>
                <span style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--primary-orange)', display: 'block', marginBottom: '0.5rem' }}>2016 - Studio Foundations</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>The Birth of Kamal Digi Studio</h4>
                <p style={{ fontSize: '0.95rem' }}>Opened our doors in Udaipur with basic DSLR portrait configurations and a small room, focusing purely on local events and passport portraits.</p>
              </div>
            </div>

            {/* Milestone 2 */}
            <div style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 2 }} className="timeline-item">
              <div 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--bg-dark-2)', 
                  border: '3px solid var(--primary-yellow)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Camera size={16} style={{ color: 'var(--primary-yellow)' }} />
              </div>
              <div className="glass-card" style={{ flexGrow: 1, padding: '1.75rem' }}>
                <span style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--primary-yellow)', display: 'block', marginBottom: '0.5rem' }}>2019 - Technology Upgrade</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Transition to Full Frame & Mirrorless Systems</h4>
                <p style={{ fontSize: '0.95rem' }}>Upgraded to professional Sony full-frame mirrorless architectures. Began covering large-scale destination weddings and outdoor pre-wedding projects across Rajasthan.</p>
              </div>
            </div>

            {/* Milestone 3 */}
            <div style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 2 }} className="timeline-item">
              <div 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--bg-dark-2)', 
                  border: '3px solid var(--secondary-blue)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Award size={16} style={{ color: 'var(--secondary-blue)' }} />
              </div>
              <div className="glass-card" style={{ flexGrow: 1, padding: '1.75rem' }}>
                <span style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--secondary-blue)', display: 'block', marginBottom: '0.5rem' }}>2022 - Expansion & Digital Editing Labs</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Setting up Retouching and Album Printing</h4>
                <p style={{ fontSize: '0.95rem' }}>Launched our in-house premium digital color grading lab and physical album layout design systems, achieving the milestone of 500+ happy clients.</p>
              </div>
            </div>

            {/* Milestone 4 */}
            <div style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 2 }} className="timeline-item">
              <div 
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--bg-dark-2)', 
                  border: '3px solid var(--secondary-purple)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Heart size={16} style={{ color: 'var(--secondary-purple)' }} />
              </div>
              <div className="glass-card" style={{ flexGrow: 1, padding: '1.75rem' }}>
                <span style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--secondary-purple)', display: 'block', marginBottom: '0.5rem' }}>2026 - Present & Beyond</span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Udaipur's Trusted Visionary House</h4>
                <p style={{ fontSize: '0.95rem' }}>Over 10+ years of collective team experience, offering aerial drone shoots, cinematic wedding trailers, and high-conversion commercial catalogs.</p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .timeline-line { left: 50% !important; transform: translateX(-50%); }
            .timeline-item { flex-direction: row; align-items: center; }
            .timeline-item:nth-child(even) { flex-direction: row-reverse; }
            .timeline-item:nth-child(even) .glass-card { text-align: right; }
          }
        `}</style>
      </section>

      {/* 4. MISSION & VISION */}
      <section style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="mission-grid">
            <div className="glass-card" style={{ padding: '3rem 2rem', borderTop: '4px solid var(--primary-orange)' }}>
              <h3 style={{ marginBottom: '1rem' }}>Our Mission</h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                To preserve precious memories through exceptional photography and creative storytelling. We commit to bringing aesthetic consistency, state-of-the-art camera dynamics, and timely delivery.
              </p>
            </div>
            <div className="glass-card" style={{ padding: '3rem 2rem', borderTop: '4px solid var(--secondary-blue)' }}>
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
                    backgroundColor: 'rgba(255, 107, 53, 0.1)', 
                    color: 'var(--primary-orange)',
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
            className="glass-card" 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center', 
              gap: '1.5rem',
              background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.08) 0%, rgba(58, 134, 255, 0.08) 100%)',
              borderColor: 'rgba(255, 107, 53, 0.2)',
              padding: '4rem 2.5rem',
              borderRadius: '24px'
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
