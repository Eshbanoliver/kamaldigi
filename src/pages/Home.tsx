import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Camera, Phone, MessageCircle, Sparkles, Award, ShieldCheck, 
  Briefcase, Heart, Zap, CheckCircle2, ChevronDown, Quote, Star 
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';

export const Home: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const metrics = [
    { value: 1000, suffix: '+', label: 'Happy Clients' },
    { value: 10, suffix: '+', label: 'Years Experience' },
    { value: 500, suffix: '+', label: 'Events Covered' },
    { value: 100, suffix: '%', label: 'Client Satisfaction' },
  ];

  const previewServices = [
    {
      title: 'Wedding & Engagement',
      img: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=600&auto=format&fit=crop',
      desc: 'Eternalizing your vows and expressions in highly premium cinematic albums.',
    },
    {
      title: 'Pre Wedding Photoshoot',
      img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop',
      desc: 'Creative locations and stunning styles that speak your beautiful love story.',
    },
    {
      title: 'Headshots & Portraits',
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
      desc: 'Professional studio lightning profiles and character portfolios.',
    },
    {
      title: 'Maternity & Newborn',
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop',
      desc: 'Gentle, gorgeous shoots capturing the start of life\'s most precious chapters.',
    },
  ];

  const coreValues = [
    { icon: <Sparkles size={28} />, title: 'Creativity', desc: 'Bringing fresh perspectives and artistic storytelling to every single frame.' },
    { icon: <Award size={28} />, title: 'Quality', desc: 'Ultra high-definition resolutions, high-end gears, and professional retouches.' },
    { icon: <ShieldCheck size={28} />, title: 'Trust', desc: 'A decade of reliability, ensuring your special days are captured safely.' },
    { icon: <Briefcase size={28} />, title: 'Professionalism', desc: 'Punctual arrivals, streamlined schedules, and respectful crew interactions.' },
    { icon: <Heart size={28} />, title: 'Customer Satisfaction', desc: 'Personalized requirements focusing on creating your dream visuals.' },
    { icon: <Zap size={28} />, title: 'Innovation', desc: 'Adapting modern drones, advanced editing rigs, and premium layouts.' },
  ];

  const whyChooseUs = [
    { title: 'Experienced Team', desc: 'Professional photographers trained in lighting, posing, and timing.' },
    { title: 'Latest Equipment', desc: 'Sony Alpha cameras, drone cams, and high-end prime lenses.' },
    { title: 'Creative Editing', desc: 'Custom color grading that creates cinematic atmospheric vibes.' },
    { title: 'Affordable Packages', desc: 'Luxury outcomes tailored perfectly to fit your budget.' },
    { title: 'Personalized Service', desc: 'Tailored sessions matching your specific aesthetic goal.' },
    { title: 'Timely Delivery', desc: 'Rapid edits delivered on secure high-speed storage clouds.' },
    { title: 'Professional Quality', desc: 'Rigorous selection and detail-perfect final exports.' },
    { title: 'Local Expertise', desc: 'Deep knowledge of Udaipur\'s most beautiful photography spots.' },
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      rating: 5,
      role: 'Groom',
      content: 'Kamal Digi Studio made our wedding shoot incredibly magical. The team was supportive and their direction for poses was extremely natural. Our family is in love with the wedding album!',
    },
    {
      name: 'Priya Mehta',
      rating: 5,
      role: 'Fashion Designer',
      content: 'The product shoot they executed for my premium catalog was top-notch. High definition details, gorgeous shadows, and color precision. Absolutely Udaipur\'s premium agency.',
    },
    {
      name: 'Aditya Raj',
      rating: 5,
      role: 'Event Manager',
      content: 'We contracted them for a 3-day high profile corporate launch. Prompt deliveries, professional ethics, and stunning low-light captures. Highly recommended.',
    },
  ];

  const faqs = [
    { q: 'How early should we book our wedding photography session?', a: 'We recommend booking 4 to 6 months in advance, especially during the wedding season in Rajasthan (November to March) to guarantee date availability.' },
    { q: 'What equipment does your photography team use?', a: 'We use premium high-end full-frame Sony Mirrorless systems, professional G-Master lenses, DJI stabilization gimbals, advanced studio flashes, and DJI Drones for aerial imagery.' },
    { q: 'When can we expect our edited photos and albums to be delivered?', a: 'Sneak peek photos are shared within 3-5 days. The fully processed high-resolution digital files are delivered within 4-6 weeks, and custom physical albums take about 6-8 weeks.' },
    { q: 'Do you offer destination wedding shoots outside Udaipur?', a: 'Yes! We travel all across Rajasthan and India for pre-wedding and destination wedding coverages. Travel and lodging logistics are discussed during packaging.' },
    { q: 'Can we customize our photography package?', a: 'Absolutely. We believe every couple and client has unique needs. You can choose from cinematic reels, traditional videography, aerial shots, or heavy studio portraits.' },
    { q: 'Do you conduct outdoor pre-wedding shoots?', a: 'Yes, pre-wedding sessions are our specialty. We guide you through Udaipur\'s royal lakes, palaces, and scenic landscapes, helping arrange wardrobe themes.' },
    { q: 'What is your payment and booking cancellation policy?', a: 'We require a 30% advance deposit to block your dates. The remaining balance is split between the event dates and delivery. Custom cancellation terms apply depending on the scale.' },
    { q: 'Do you provide photo editing and retouching services separately?', a: 'Yes, we have a professional in-house editing team that does expert color grading, background cleaning, skin retouching, and restoration.' },
  ];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Glow shapes */}
      <div className="glow-shape" style={{ width: '450px', height: '450px', backgroundColor: 'var(--glow-orange)', top: '-50px', right: '-100px' }} />
      <div className="glow-shape" style={{ width: '550px', height: '550px', backgroundColor: 'var(--glow-blue)', top: '30%', left: '-150px' }} />
      <div className="glow-shape" style={{ width: '500px', height: '500px', backgroundColor: 'var(--glow-purple)', bottom: '10%', right: '-100px' }} />

      {/* 1. HERO SECTION */}
      <section 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.95)), url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1920&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: '8rem',
          paddingBottom: '4rem',
        }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="hero-grid">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', zIndex: 10 }}
            >
              <div 
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  backgroundColor: 'rgba(255, 107, 53, 0.1)', 
                  border: '1px solid rgba(255, 107, 53, 0.25)', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px', 
                  width: 'fit-content',
                  color: 'var(--primary-orange)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}
              >
                <Sparkles size={14} />
                <span>Udaipur's Premium Photography Studio</span>
              </div>
              
              <h1 style={{ fontWeight: 800 }}>
                Capture Every Moment <br />
                <span className="gradient-text-orange">Beautifully</span>
              </h1>
              
              <p style={{ fontSize: '1.2rem', maxWidth: '600px', lineHeight: '1.7' }}>
                We translate your precious memories into artistic, timeless visual stories. From royal weddings in Udaipur to sleek corporate headshots, experience photography at its peak.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
                <a href="https://wa.me/919828142098" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <MessageCircle size={18} fill="white" />
                  <span>Book Your Shoot</span>
                </a>
                <a href="tel:+919828142098" className="btn btn-secondary">
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>

            {/* Floating Glass Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 10 }}
              className="hero-image-wrapper"
            >
              <div 
                className="glass-card float-animation" 
                style={{ 
                  padding: '1rem', 
                  borderRadius: '24px', 
                  width: '100%', 
                  maxWidth: '500px',
                  background: 'rgba(255, 255, 255, 0.6)',
                  borderColor: 'var(--border-light)'
                }}
              >
                <div style={{ overflow: 'hidden', borderRadius: '18px', position: 'relative' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop" 
                    alt="Kamal Digi Studio Gear" 
                    style={{ width: '100%', height: 'auto', display: 'block', transition: 'transform 0.5s' }} 
                  />
                  <div 
                    style={{ 
                      position: 'absolute', 
                      bottom: '20px', 
                      left: '20px', 
                      right: '20px', 
                      padding: '1.25rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>Kamal Digi Studio</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Udaipur, Rajasthan</div>
                    </div>
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="var(--primary-yellow)" color="var(--primary-yellow)" />)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <style>{`
          @media (min-width: 992px) {
            .hero-grid { grid-template-columns: 1.2fr 0.8fr !important; }
          }
        `}</style>
      </section>

      {/* 2. ABOUT US PREVIEW */}
      <section style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
            
            {/* Visual Overlapping Portfolio Frames with Glow */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative', height: '480px', display: 'flex', alignItems: 'center', zIndex: 10 }}
            >
              {/* Radial backdrop glow */}
              <div 
                style={{ 
                  position: 'absolute', 
                  width: '300px', 
                  height: '300px', 
                  borderRadius: '50%', 
                  background: 'var(--glow-orange)', 
                  filter: 'blur(80px)',
                  top: '20%', 
                  left: '10%',
                  zIndex: -1 
                }} 
              />

              {/* Main Image Frame */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                style={{ 
                  width: '70%', 
                  height: '380px', 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-premium)', 
                  border: '1px solid var(--border-light)',
                  position: 'relative'
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop" 
                  alt="Wedding Couple Shoot" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(255, 255, 255, 0.4), transparent)' }} />
              </motion.div>

              {/* Overlapping Focus Image Frame */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5, rotate: 1 }}
                style={{ 
                  position: 'absolute',
                  width: '52%', 
                  height: '240px', 
                  right: '0', 
                  bottom: '30px', 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  boxShadow: '0 20px 40px rgba(15, 23, 42, 0.15)', 
                  border: '4px solid var(--bg-dark-2)',
                  zIndex: 2
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1452587925148-ce544e77e60d?q=80&w=600&auto=format&fit=crop" 
                  alt="Photographer Shooting Behind The Scenes" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </motion.div>

              {/* Experience Badge */}
              <motion.div 
                className="glass-card" 
                whileHover={{ scale: 1.08 }}
                style={{ 
                  position: 'absolute', 
                  bottom: '10px', 
                  left: '20px', 
                  padding: '1.25rem', 
                  maxWidth: '220px',
                  borderLeft: '4px solid var(--primary-orange)',
                  zIndex: 3,
                  boxShadow: '0 15px 35px rgba(15, 23, 42, 0.12)'
                }}
              >
                <h4 style={{ color: 'var(--primary-orange)', fontSize: '1.8rem', fontWeight: 800, lineHeight: '1' }}>10+ Years</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 600, marginTop: '0.25rem' }}>Of capturing memories in royal styles</p>
              </motion.div>
            </motion.div>

            {/* Text Content & Features list */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <span className="section-subtitle" style={{ margin: 0 }}>Who We Are</span>
              <h2>Preserving Precious Moments Through Modern Lenses</h2>
              <p>
                Located in Udaipur, Rajasthan, <strong>Kamal Digi Studio</strong> is a highly trusted studio offering premium photography solutions. We capture the essence of weddings, family gatherings, commercial events, and portrait headshots with absolute artistic excellence.
              </p>
              
              {/* Premium Mini feature cards grid */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '1rem', 
                  marginTop: '0.5rem', 
                  marginBottom: '0.5rem' 
                }}
              >
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    padding: '0.85rem 1rem', 
                    borderRadius: '12px', 
                    backgroundColor: 'rgba(255, 107, 53, 0.04)', 
                    border: '1px solid rgba(255, 107, 53, 0.08)' 
                  }}
                >
                  <Camera size={20} style={{ color: 'var(--primary-orange)', flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Sony G-Master Gear</span>
                </div>
                
                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    padding: '0.85rem 1rem', 
                    borderRadius: '12px', 
                    backgroundColor: 'rgba(58, 134, 255, 0.04)', 
                    border: '1px solid rgba(58, 134, 255, 0.08)' 
                  }}
                >
                  <Award size={20} style={{ color: 'var(--secondary-blue)', flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Cinematic retouches</span>
                </div>

                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    padding: '0.85rem 1rem', 
                    borderRadius: '12px', 
                    backgroundColor: 'rgba(131, 56, 236, 0.04)', 
                    border: '1px solid rgba(131, 56, 236, 0.08)' 
                  }}
                >
                  <Sparkles size={20} style={{ color: 'var(--secondary-purple)', flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Artistic storytelling</span>
                </div>

                <div 
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem', 
                    padding: '0.85rem 1rem', 
                    borderRadius: '12px', 
                    backgroundColor: 'rgba(255, 107, 53, 0.04)', 
                    border: '1px solid rgba(255, 107, 53, 0.08)' 
                  }}
                >
                  <Heart size={20} style={{ color: 'var(--primary-orange)', flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Client focused sessions</span>
                </div>
              </div>

              <p>
                Our core vision is driven by passion, creativity, and the application of state-of-the-art camera systems. We curate visual stories that keep your emotions alive for generations.
              </p>

              <div style={{ marginTop: '0.5rem' }}>
                <Link to="/about" className="btn btn-outline-orange">
                  <span>Read Our Full Story</span>
                  <ArrowRightIcon />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
        <style>{`
          @media (min-width: 992px) {
            .about-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>
      </section>

      {/* 3. KEY METRICS */}
      <section style={{ background: 'linear-gradient(to bottom, var(--bg-dark-1), var(--bg-dark-2))' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {metrics.map((m, idx) => (
              <div key={idx} className="glass-card" style={{ textAlign: 'center', padding: '2.5rem 1.5rem' }}>
                <div 
                  style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontSize: '3.5rem', 
                    fontWeight: 800, 
                    marginBottom: '0.5rem',
                    background: 'linear-gradient(135deg, var(--primary-orange) 0%, var(--primary-yellow) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  <AnimatedCounter end={m.value} suffix={m.suffix} />
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{m.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES PREVIEW */}
      <section style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-title">Our Premium Services</h2>
            <p>We provide a comprehensive range of professional photography and editing services tailored to make every shoot exceptional.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
            {previewServices.map((service, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  padding: 0, 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  display: 'flex', 
                  flexDirection: 'column' 
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }} className="image-zoom-container">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    className="service-preview-img"
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(255, 255, 255, 0.7), transparent)' }} />
                </div>
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700 }}>{service.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', flexGrow: 1 }}>{service.desc}</p>
                  <a href="https://wa.me/919828142098" target="_blank" rel="noopener noreferrer" className="btn btn-outline-orange" style={{ width: '100%', padding: '0.6rem' }}>
                    <span>Book Session</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn btn-primary">
              <span>View All 17 Services</span>
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
        
        <style>{`
          .image-zoom-container:hover .service-preview-img {
            transform: scale(1.1);
          }
        `}</style>
      </section>

      {/* 5. MISSION & VISION */}
      <section style={{ background: 'linear-gradient(to bottom, var(--bg-dark-1), var(--bg-dark-2))' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="mission-grid">
            <div className="glass-card" style={{ padding: '3.5rem 2.5rem', borderLeft: '4px solid var(--primary-orange)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <span style={{ color: 'var(--primary-orange)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Preserving Memories</span>
              <h3>Our Mission</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                "To preserve precious memories through exceptional photography and creative storytelling, delivering absolute artistic layouts and professional reliability."
              </p>
            </div>
            
            <div className="glass-card" style={{ padding: '3.5rem 2.5rem', borderLeft: '4px solid var(--secondary-blue)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <span style={{ color: 'var(--secondary-blue)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Expanding Artistry</span>
              <h3>Our Vision</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>
                "To become the most trusted and artistic photography studio in Rajasthan, renowned for our professional excellence, cutting-edge equipment, and client satisfaction."
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

      {/* 6. CORE VALUES */}
      <section style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What Guides Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <p>These values define our culture, our commitment to quality, and how we handle your milestone memories.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {coreValues.map((val, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1rem',
                  transition: 'all 0.3s'
                }}
              >
                <div 
                  style={{ 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '12px', 
                    backgroundColor: 'rgba(255, 107, 53, 0.1)', 
                    color: 'var(--primary-orange)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}
                >
                  {val.icon}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 600 }}>{val.title}</h3>
                <p style={{ fontSize: '0.95rem' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">The Studio Advantage</span>
            <h2 className="section-title">Why Choose Kamal Digi Studio</h2>
            <p>We combine modern photographic style, luxury standards, and localized expertise in Udaipur to deliver unmatched output.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {whyChooseUs.map((item, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  display: 'flex', 
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  padding: '2rem 1.5rem',
                  borderTop: '2px solid rgba(255, 107, 53, 0.2)'
                }}
              >
                <CheckCircle2 style={{ color: 'var(--primary-orange)', flexShrink: 0, marginTop: '0.15rem' }} size={20} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div 
            className="glass-card" 
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(131, 56, 236, 0.1) 100%)',
              borderColor: 'rgba(255, 107, 53, 0.3)',
              borderRadius: '24px',
              padding: '4rem 2.5rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(255, 107, 53, 0.1)'
            }}
          >
            <h2 style={{ maxWidth: '700px', margin: '0 auto', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}>
              Let's Capture Your Special Moments Together
            </h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
              Book a personalized photography consultation with our team and let us craft visual memories you will treasure forever.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
              <a href="tel:+919828142098" className="btn btn-primary">
                <Phone size={18} />
                <span>Call Now</span>
              </a>
              <a href="https://wa.me/919828142098" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <MessageCircle size={18} />
                <span>Book Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS PREVIEW */}
      <section style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Client Feedback</span>
            <h2 className="section-title">What Our Clients Say</h2>
            <p>Read review responses from couples, families, and businesses who trusted Kamal Digi Studio.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.25rem',
                  padding: '2.5rem' 
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Quote size={32} style={{ color: 'var(--primary-orange)', opacity: 0.3 }} />
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="var(--primary-yellow)" color="var(--primary-yellow)" />
                    ))}
                  </div>
                </div>
                <p style={{ fontStyle: 'italic', fontSize: '1rem', flexGrow: 1, color: 'var(--text-primary)' }}>
                  "{t.content}"
                </p>
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: 700, fontSize: '1rem' }}>{t.name}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/testimonials" className="btn btn-primary">
              <span>View All Testimonials</span>
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <span className="section-subtitle">Common Inquiries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p>Find answers to common questions about our wedding coverage, editing times, and studio policies.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="glass-card" 
                  style={{ 
                    padding: '1.25rem 2rem', 
                    borderRadius: '12px',
                    cursor: 'pointer',
                    borderColor: isOpen ? 'var(--primary-orange)' : 'var(--border-light)',
                    boxShadow: isOpen ? '0 10px 20px rgba(0,0,0,0.3)' : 'var(--shadow-premium)'
                  }}
                  onClick={() => toggleFaq(idx)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: isOpen ? 'var(--primary-orange)' : 'var(--text-primary)' }}>
                      {faq.q}
                    </h4>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: isOpen ? 'var(--primary-orange)' : 'var(--text-secondary)', display: 'flex' }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                  
                  {/* Expandable answer */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

// Internal utility component for the arrow icon to keep dependencies simple and bundle small
const ArrowRightIcon = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    style={{ transition: 'transform 0.2s' }}
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default Home;
