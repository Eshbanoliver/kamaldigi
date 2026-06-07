import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Camera, Phone, MessageCircle, Sparkles, Award, ShieldCheck, 
  Briefcase, Heart, Zap, CheckCircle2, ChevronDown, Quote, Star,
  Users, Clock, MapPin
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import useSEO from '../hooks/useSEO';

export const Home: React.FC = () => {
  useSEO({
    title: 'Kamal Digi Studio | Best Photography Studio in Udaipur',
    description: "Kamal Digi Studio is Udaipur's premium photography studio, capturing wedding, pre-wedding, event, portrait, family, commercial, and maternity shoots with artistic excellence."
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const metrics = [
    { 
      value: 1000, 
      suffix: '+', 
      label: 'Happy Clients',
      icon: 'users',
      gradient: 'linear-gradient(135deg, #3A86FF 0%, #00F5FF 100%)',
      glowColor: 'rgba(58, 134, 255, 0.15)',
      iconColor: '#3A86FF'
    },
    { 
      value: 10, 
      suffix: '+', 
      label: 'Years Experience',
      icon: 'award',
      gradient: 'linear-gradient(135deg, #8338EC 0%, #FF007F 100%)',
      glowColor: 'rgba(131, 56, 236, 0.15)',
      iconColor: '#8338EC'
    },
    { 
      value: 500, 
      suffix: '+', 
      label: 'Events Covered',
      icon: 'camera',
      gradient: 'linear-gradient(135deg, #D2042D 0%, #FF4D6D 100%)',
      glowColor: 'rgba(210, 4, 45, 0.15)',
      iconColor: '#D2042D'
    },
    { 
      value: 100, 
      suffix: '%', 
      label: 'Client Satisfaction',
      icon: 'heart',
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
      glowColor: 'rgba(16, 185, 129, 0.15)',
      iconColor: '#10B981'
    },
  ];

  const previewServices = [
    {
      title: 'Wedding & Engagement',
      img: '/images/wedding-engagement.png',
      desc: 'Eternalizing your vows and expressions in highly premium cinematic albums.',
    },
    {
      title: 'Pre Wedding Photoshoot',
      img: '/images/prewedding.png',
      desc: 'Creative locations and stunning styles that speak your beautiful love story.',
    },
    {
      title: 'Headshots & Portraits',
      img: '/images/portrait.png',
      desc: 'Professional studio lightning profiles and character portfolios.',
    },
    {
      title: 'Maternity & Newborn',
      img: '/images/maternity.png',
      desc: 'Gentle, gorgeous shoots capturing the start of life\'s most precious chapters.',
    },
    {
      title: 'Commercial & Product',
      img: '/images/camera-gear.png',
      desc: 'High-end lighting and macro details to elevate your brand identity and catalogs.',
    },
    {
      title: 'Fashion & Editorial',
      img: '/images/wedding-couple.png',
      desc: 'Striking poses, conceptual lighting, and vogue-style editing for modeling portfolios.',
    },
    {
      title: 'Cinematic Videography',
      img: '/images/photographer-bts.png',
      desc: '4K drones and stabilizing gimbals delivering blockbuster-quality event films.',
    },
    {
      title: 'Events & Concerts',
      img: '/images/wedding-engagement.png',
      desc: 'Dynamic low-light action shots capturing the energy and vibe of live performances.',
    },
    {
      title: 'Architecture & Interior',
      img: '/images/prewedding.png',
      desc: 'Wide-angle, distortion-free captures perfect for real estate and luxury hotels.',
    },
  ];

  const coreValues = [
    { icon: <Sparkles size={28} />, title: 'Creativity', desc: 'Bringing fresh perspectives and artistic storytelling to every single frame.' },
    { icon: <Award size={28} />, title: 'Quality', desc: 'Ultra high-definition resolutions, high-end gears, and professional retouches.' },
    { icon: <ShieldCheck size={28} />, title: 'Trust', desc: 'A decade of reliability, ensuring your special days are captured safely.' },
    { icon: <Briefcase size={28} />, title: 'Professionalism', desc: 'Punctual arrivals, streamlined schedules, and respectful crew interactions.' },
    { icon: <Heart size={28} />, title: 'Customer Satisfaction', desc: 'Personalized requirements focusing on creating your dream visuals.' },
    { icon: <Zap size={28} />, title: 'Innovation', desc: 'Adapting modern drones, advanced editing rigs, and premium layouts.' },
    { icon: <Camera size={28} />, title: 'Precision', desc: 'Pixel-perfect attention to detail ensuring zero compromises in editing.' },
    { icon: <MessageCircle size={28} />, title: 'Communication', desc: 'Transparent discussions and collaborative vision mapping with clients.' },
  ];

  const whyChooseUs = [
    { title: 'Experienced Team', desc: 'Professional photographers trained in lighting, posing, and timing.', icon: 'users' },
    { title: 'Latest Equipment', desc: 'Sony Alpha cameras, drone cams, and high-end prime lenses.', icon: 'camera' },
    { title: 'Creative Editing', desc: 'Custom color grading that creates cinematic atmospheric vibes.', icon: 'sparkles' },
    { title: 'Affordable Packages', desc: 'Luxury outcomes tailored perfectly to fit your budget.', icon: 'award' },
    { title: 'Personalized Service', desc: 'Tailored sessions matching your specific aesthetic goal.', icon: 'heart' },
    { title: 'Timely Delivery', desc: 'Rapid edits delivered on secure high-speed storage clouds.', icon: 'clock' },
    { title: 'Professional Quality', desc: 'Rigorous selection and detail-perfect final exports.', icon: 'shield-check' },
    { title: 'Local Expertise', desc: 'Deep knowledge of Udaipur\'s most beautiful photography spots.', icon: 'map-pin' },
  ];

  const getFeatureIcon = (iconName: string, color: string, size = 24) => {
    switch (iconName) {
      case 'users': return <Users color={color} size={size} />;
      case 'camera': return <Camera color={color} size={size} />;
      case 'sparkles': return <Sparkles color={color} size={size} />;
      case 'award': return <Award color={color} size={size} />;
      case 'heart': return <Heart color={color} size={size} />;
      case 'clock': return <Clock color={color} size={size} />;
      case 'shield-check': return <ShieldCheck color={color} size={size} />;
      case 'map-pin': return <MapPin color={color} size={size} />;
      default: return <CheckCircle2 color={color} size={size} />;
    }
  };

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
    {
      name: 'Anjali Kothari',
      rating: 5,
      role: 'Bride',
      content: 'The pre-wedding shoot in Udaipur palaces was like a fairytale. The drone shots and sunset lighting they captured were spectacular. Very professional!',
    },
    {
      name: 'Vikram Rathore',
      rating: 5,
      role: 'Hotel Manager',
      content: 'We hired Kamal Digi for architectural and hospitality photography. Their understanding of spatial lighting and interior detail is phenomenal.',
    },
    {
      name: 'Sneha Patel',
      rating: 5,
      role: 'Maternity Client',
      content: 'Capturing my motherhood journey was so comfortable. The studio environment was warm, and the photographs are soft, artistic, and beautiful.',
    },
    {
      name: 'Rohan & Divya',
      rating: 5,
      role: 'Couple',
      content: 'Every frame feels like a movie poster. The editing team did an outstanding job with color-grading. Unmatched quality in Udaipur!',
    }
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
      <div className="glow-shape" style={{ width: '450px', height: '450px', backgroundColor: 'var(--glow-red)', top: '-50px', right: '-100px' }} />
      <div className="glow-shape" style={{ width: '550px', height: '550px', backgroundColor: 'var(--glow-blue)', top: '30%', left: '-150px' }} />
      <div className="glow-shape" style={{ width: '500px', height: '500px', backgroundColor: 'var(--glow-purple)', bottom: '10%', right: '-100px' }} />

      {/* 1. HERO SECTION */}
      <section 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.95)), url("/images/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          paddingTop: 'clamp(6rem, 10vw, 8rem)',
          paddingBottom: 'clamp(3rem, 6vw, 4rem)',
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
                  backgroundColor: 'rgba(210, 4, 45, 0.1)', 
                  border: '1px solid rgba(210, 4, 45, 0.25)', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '20px', 
                  width: 'fit-content',
                  color: 'var(--primary-red)',
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
                <span className="gradient-text-red">Beautifully</span>
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
                    src="/images/camera-gear.png" 
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
                      {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="var(--primary-pink)" color="var(--primary-pink)" />)}
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
      <section style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden' }}>
        {/* Soft colored blobs */}
        <div 
          className="glow-shape" 
          style={{ 
            width: '350px', 
            height: '350px', 
            backgroundColor: 'rgba(210, 4, 45, 0.12)', 
            top: '-50px', 
            left: '-100px',
            filter: 'blur(120px)',
            opacity: 0.8,
            position: 'absolute',
            borderRadius: '50%'
          }} 
        />
        <div 
          className="glow-shape" 
          style={{ 
            width: '400px', 
            height: '400px', 
            backgroundColor: 'rgba(58, 134, 255, 0.1)', 
            bottom: '-100px', 
            right: '-100px',
            filter: 'blur(120px)',
            opacity: 0.7,
            position: 'absolute',
            borderRadius: '50%'
          }} 
        />
        <div 
          className="glow-shape" 
          style={{ 
            width: '300px', 
            height: '300px', 
            backgroundColor: 'rgba(131, 56, 236, 0.08)', 
            top: '30%', 
            right: '25%',
            filter: 'blur(100px)',
            opacity: 0.6,
            position: 'absolute',
            borderRadius: '50%'
          }} 
        />
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem', alignItems: 'center' }} className="about-grid">
            
            {/* Visual Overlapping Portfolio Frames with Glow */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="staggered-image-container"
            >
              {/* Radial backdrop glow */}
              <div 
                style={{ 
                  position: 'absolute', 
                  width: '300px', 
                  height: '300px', 
                  borderRadius: '50%', 
                  background: 'var(--glow-red)', 
                  filter: 'blur(80px)',
                  top: '20%', 
                  left: '10%',
                  zIndex: -1 
                }} 
              />

              {/* Main Image Frame */}
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="staggered-main-frame"
              >
                <img 
                  src="/images/wedding-couple.png" 
                  alt="Wedding Couple Shoot" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(255, 255, 255, 0.4), transparent)' }} />
              </motion.div>

              {/* Overlapping Focus Image Frame */}
              <motion.div
                whileHover={{ scale: 1.05, y: -5, rotate: 1 }}
                className="staggered-overlap-frame"
              >
                <img 
                  src="/images/photographer-bts.png" 
                  alt="Photographer Shooting Behind The Scenes" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </motion.div>

              {/* Experience Badge */}
              <motion.div 
                className="glass-card experience-badge-card" 
                whileHover={{ scale: 1.08 }}
              >
                <h4 style={{ color: 'var(--primary-red)', fontSize: '1.8rem', fontWeight: 800, lineHeight: '1' }}>10+ Years</h4>
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
                    backgroundColor: 'rgba(210, 4, 45, 0.04)', 
                    border: '1px solid rgba(210, 4, 45, 0.08)' 
                  }}
                >
                  <Camera size={20} style={{ color: 'var(--primary-red)', flexShrink: 0 }} />
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
                    backgroundColor: 'rgba(210, 4, 45, 0.04)', 
                    border: '1px solid rgba(210, 4, 45, 0.08)' 
                  }}
                >
                  <Heart size={20} style={{ color: 'var(--primary-red)', flexShrink: 0 }} />
                  <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Client focused sessions</span>
                </div>
              </div>

              <p>
                Our core vision is driven by passion, creativity, and the application of state-of-the-art camera systems. We curate visual stories that keep your emotions alive for generations.
              </p>

              <div style={{ marginTop: '0.5rem' }}>
                <Link to="/about" className="btn btn-outline-red">
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
      <section 
        style={{ 
          background: 'linear-gradient(180deg, #090D1A 0%, #0E1322 100%)', 
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          position: 'relative',
          padding: '6rem 0'
        }}
      >
        {/* Soft background glows to make it look alive */}
        <div 
          className="glow-shape" 
          style={{ 
            width: '400px', 
            height: '400px', 
            backgroundColor: 'rgba(58, 134, 255, 0.08)', 
            top: '-100px', 
            left: '-100px',
            filter: 'blur(120px)'
          }} 
        />
        <div 
          className="glow-shape" 
          style={{ 
            width: '400px', 
            height: '400px', 
            backgroundColor: 'rgba(210, 4, 45, 0.08)', 
            bottom: '-100px', 
            right: '-100px',
            filter: 'blur(120px)'
          }} 
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem' }}>
            {metrics.map((m, idx) => {
              // Get the icon component dynamically
              const renderIcon = () => {
                const iconProps = { size: 28, style: { color: m.iconColor } };
                switch (m.icon) {
                  case 'users': return <Users {...iconProps} />;
                  case 'award': return <Award {...iconProps} />;
                  case 'camera': return <Camera {...iconProps} />;
                  case 'heart': return <Heart {...iconProps} />;
                  default: return null;
                }
              };

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ 
                    y: -12,
                    boxShadow: `0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 30px ${m.glowColor}`,
                    borderColor: m.iconColor
                  }}
                  className="glass-card-hover-effect"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '24px',
                    padding: '3rem 2rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.25rem',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'border-color 0.4s ease, box-shadow 0.4s ease'
                  }}
                >
                  {/* Subtle Grid Card Pattern overlay */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 0)',
                      backgroundSize: '16px 16px',
                      opacity: 0.3,
                      pointerEvents: 'none',
                      zIndex: 1
                    }}
                  />

                  {/* Icon Container with glowing base */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '18px',
                      background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)`,
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: `inset 0 0 12px ${m.glowColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 2,
                      position: 'relative'
                    }}
                  >
                    {/* Inner soft colored background blur */}
                    <div 
                      style={{
                        position: 'absolute',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: m.iconColor,
                        filter: 'blur(10px)',
                        opacity: 0.3,
                        zIndex: -1
                      }}
                    />
                    {renderIcon()}
                  </motion.div>

                  {/* Value / Number */}
                  <div 
                    style={{ 
                      fontFamily: 'var(--font-heading)', 
                      fontSize: '3.75rem', 
                      fontWeight: 800, 
                      lineHeight: 1.1,
                      background: m.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      zIndex: 2,
                      letterSpacing: '-0.02em',
                      filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
                    }}
                  >
                    <AnimatedCounter end={m.value} suffix={m.suffix} />
                  </div>

                  {/* Label */}
                  <h4 
                    style={{ 
                      fontSize: '1.05rem', 
                      fontWeight: 600, 
                      color: 'rgba(255, 255, 255, 0.7)',
                      letterSpacing: '0.02em',
                      margin: 0,
                      zIndex: 2
                    }}
                  >
                    {m.label}
                  </h4>

                  {/* Bottom Accent Line */}
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '10%',
                      width: '80%',
                      height: '3px',
                      background: m.gradient,
                      borderRadius: '3px 3px 0 0',
                      opacity: 0.3,
                      transition: 'opacity 0.4s ease, height 0.4s ease'
                    }}
                    className="card-bottom-bar"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
        
        {/* Style tag to handle custom card hover accent transitions */}
        <style>{`
          .glass-card-hover-effect:hover .card-bottom-bar {
            opacity: 1 !important;
            height: 4px !important;
          }
        `}</style>
      </section>

      {/* 4. SERVICES PREVIEW */}
      <section style={{ backgroundColor: 'var(--bg-dark-2)', position: 'relative', overflow: 'hidden', padding: '7rem 0' }}>
        {/* Vibrant glowing background blobs */}
        <div 
          className="glow-shape" 
          style={{ 
            width: '600px', 
            height: '600px', 
            backgroundColor: 'rgba(210, 4, 45, 0.06)', 
            top: '-100px', 
            right: '-150px',
            filter: 'blur(150px)',
            zIndex: 0
          }} 
        />
        <div 
          className="glow-shape" 
          style={{ 
            width: '500px', 
            height: '500px', 
            backgroundColor: 'rgba(58, 134, 255, 0.05)', 
            bottom: '-100px', 
            left: '-150px',
            filter: 'blur(150px)',
            zIndex: 0
          }} 
        />
        
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header" style={{ marginBottom: '5rem' }}>
            <span className="section-subtitle" style={{ display: 'inline-block', padding: '0.5rem 1.25rem', background: 'rgba(210, 4, 45, 0.1)', border: '1px solid rgba(210, 4, 45, 0.2)', borderRadius: '30px', color: 'var(--primary-red)', fontWeight: 700, marginBottom: '1.25rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.8rem' }}>What We Do</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem' }}>
              Our <span className="gradient-text-red">Premium Services</span>
            </h2>
            <p style={{ fontSize: '1.15rem', maxWidth: '650px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              We provide a comprehensive range of professional photography and editing services tailored to make every shoot exceptional.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', marginBottom: '4.5rem' }}>
            {previewServices.map((service, idx) => {
              const cardThemes = [
                { gradient: 'linear-gradient(135deg, #D2042D 0%, #FF4D6D 100%)', shadow: 'rgba(210, 4, 45, 0.25)', text: '#D2042D' },
                { gradient: 'linear-gradient(135deg, #3A86FF 0%, #00F5FF 100%)', shadow: 'rgba(58, 134, 255, 0.25)', text: '#3A86FF' },
                { gradient: 'linear-gradient(135deg, #8338EC 0%, #FF007F 100%)', shadow: 'rgba(131, 56, 236, 0.25)', text: '#8338EC' },
                { gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)', shadow: 'rgba(16, 185, 129, 0.25)', text: '#10B981' },
              ];
              const theme = cardThemes[idx % cardThemes.length];

              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -10, boxShadow: `0 20px 40px ${theme.shadow}` }}
                  className="glass-card service-vibrant-card" 
                  style={{ 
                    padding: 0, 
                    borderRadius: '24px', 
                    overflow: 'hidden', 
                    display: 'flex', 
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(15, 23, 42, 0.05)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                    position: 'relative'
                  }}
                >
                  <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }} className="image-zoom-container">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)' }}
                      className="service-preview-img"
                    />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)' }} />
                    
                    {/* Vibrant Category Tag */}
                    <div style={{ position: 'absolute', top: '24px', right: '24px', background: theme.gradient, color: 'white', padding: '0.5rem 1.25rem', borderRadius: '30px', fontSize: '0.8rem', fontWeight: 700, boxShadow: `0 4px 15px ${theme.shadow}`, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                      Premium
                    </div>
                  </div>
                  <div style={{ padding: '0 2rem 2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1, position: 'relative', zIndex: 2, marginTop: '-30px' }}>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0, lineHeight: '1.3' }}>{service.title}</h3>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', flexGrow: 1, lineHeight: '1.6' }}>{service.desc}</p>
                    
                    <a 
                      href="https://wa.me/919828142098" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="service-book-btn"
                      style={{ 
                        '--theme-grad': theme.gradient,
                        '--theme-shadow': theme.shadow,
                        '--theme-text': theme.text,
                        width: '100%', 
                        padding: '0.85rem', 
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        fontWeight: 700,
                        background: 'transparent',
                        border: `2px solid ${theme.text}`,
                        color: theme.text,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        marginTop: '1rem',
                        fontSize: '1rem'
                      } as React.CSSProperties}
                    >
                      <span>Book Session</span>
                      <ArrowRightIcon />
                    </a>
                  </div>
                  
                  {/* Glowing hover border effect */}
                  <div className="card-glow-border" style={{ position: 'absolute', inset: 0, borderRadius: '24px', border: '2px solid transparent', background: `${theme.gradient} border-box`, WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', opacity: 1, transition: 'opacity 0.4s ease', pointerEvents: 'none', zIndex: 10 }} />
                </motion.div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn btn-primary" style={{ padding: '1.1rem 2.5rem', fontSize: '1.1rem', borderRadius: '30px', boxShadow: '0 10px 25px rgba(210, 4, 45, 0.3)' }}>
              <Sparkles size={18} />
              <span>View All 17 Services</span>
            </Link>
          </div>
        </div>
        
        <style>{`
          .image-zoom-container:hover .service-preview-img {
            transform: scale(1.1) rotate(1.5deg);
          }
          .service-vibrant-card:hover .card-glow-border {
            opacity: 1 !important;
          }
          .service-vibrant-card:hover .service-book-btn {
            background: var(--theme-grad) !important;
            color: white !important;
            border-color: transparent !important;
            box-shadow: 0 10px 25px var(--theme-shadow) !important;
            transform: translateY(-2px);
          }
        `}</style>
      </section>

      {/* 5. MISSION & VISION */}
      <section style={{ backgroundColor: 'var(--bg-dark-1)', position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
        
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

      {/* 6. CORE VALUES */}
      <section style={{ 
        backgroundColor: 'var(--bg-dark-2)', 
        position: 'relative',
        overflow: 'hidden',
        padding: '7rem 0',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        {/* Abstract Pattern Overlay */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.03) 2px, transparent 2px)',
          backgroundSize: '30px 30px',
          opacity: 1,
          zIndex: 1,
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header" style={{ marginBottom: '4.5rem' }}>
            <span className="section-subtitle" style={{ display: 'inline-block', padding: '0.5rem 1.25rem', background: 'rgba(210, 4, 45, 0.1)', border: '1px solid rgba(210, 4, 45, 0.2)', borderRadius: '30px', color: 'var(--primary-red)', fontWeight: 700, marginBottom: '1rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.8rem' }}>What Guides Us</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Our <span className="gradient-text-red">Core Values</span></h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)' }}>These values define our culture, our commitment to quality, and how we handle your milestone memories.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {coreValues.map((val, idx) => {
              const colorPalette = [
                // Row 1
                { gradient: 'linear-gradient(135deg, #D2042D 0%, #FF4D6D 100%)', text: '#FF4D6D', bg: 'rgba(210, 4, 45, 0.08)', border: 'rgba(210, 4, 45, 0.2)' }, // Red
                { gradient: 'linear-gradient(135deg, #118AB2 0%, #06D6A0 100%)', text: '#06D6A0', bg: 'rgba(17, 138, 178, 0.08)', border: 'rgba(17, 138, 178, 0.2)' }, // Ocean
                { gradient: 'linear-gradient(135deg, #8338EC 0%, #FF007F 100%)', text: '#FF007F', bg: 'rgba(131, 56, 236, 0.08)', border: 'rgba(131, 56, 236, 0.2)' }, // Purple
                { gradient: 'linear-gradient(135deg, #FB8500 0%, #FFB703 100%)', text: '#FFB703', bg: 'rgba(251, 133, 0, 0.08)', border: 'rgba(251, 133, 0, 0.2)' }, // Orange
                // Row 2
                { gradient: 'linear-gradient(135deg, #00F5FF 0%, #00B4D8 100%)', text: '#00F5FF', bg: 'rgba(0, 180, 216, 0.08)', border: 'rgba(0, 180, 216, 0.2)' }, // Cyan
                { gradient: 'linear-gradient(135deg, #F15BB5 0%, #9B5DE5 100%)', text: '#F15BB5', bg: 'rgba(241, 91, 181, 0.08)', border: 'rgba(241, 91, 181, 0.2)' }, // Pink/Purple
                { gradient: 'linear-gradient(135deg, #00C9A7 0%, #845EC2 100%)', text: '#00C9A7', bg: 'rgba(0, 201, 167, 0.08)', border: 'rgba(0, 201, 167, 0.2)' }, // Aqua/Violet
                { gradient: 'linear-gradient(135deg, #FF9671 0%, #FFC75F 100%)', text: '#FF9671', bg: 'rgba(255, 150, 113, 0.08)', border: 'rgba(255, 150, 113, 0.2)' }, // Peach/Yellow
                // Row 3
                { gradient: 'linear-gradient(135deg, #3A0CA3 0%, #4361EE 100%)', text: '#4361EE', bg: 'rgba(58, 12, 163, 0.08)', border: 'rgba(58, 12, 163, 0.2)' }, // Indigo
                { gradient: 'linear-gradient(135deg, #F72585 0%, #B5179E 100%)', text: '#F72585', bg: 'rgba(247, 37, 133, 0.08)', border: 'rgba(247, 37, 133, 0.2)' }, // Magenta
                { gradient: 'linear-gradient(135deg, #4CC9F0 0%, #4895EF 100%)', text: '#4CC9F0', bg: 'rgba(76, 201, 240, 0.08)', border: 'rgba(76, 201, 240, 0.2)' }, // Sky Blue
                { gradient: 'linear-gradient(135deg, #06D6A0 0%, #1B9AAA 100%)', text: '#06D6A0', bg: 'rgba(6, 214, 160, 0.08)', border: 'rgba(6, 214, 160, 0.2)' }, // Teal
                // Row 4
                { gradient: 'linear-gradient(135deg, #FF5400 0%, #FF0054 100%)', text: '#FF5400', bg: 'rgba(255, 84, 0, 0.08)', border: 'rgba(255, 84, 0, 0.2)' }, // Vermilion
                { gradient: 'linear-gradient(135deg, #9D4EDD 0%, #C77DFF 100%)', text: '#9D4EDD', bg: 'rgba(157, 78, 221, 0.08)', border: 'rgba(157, 78, 221, 0.2)' }, // Light Purple
                { gradient: 'linear-gradient(135deg, #2EC4B6 0%, #CBF3F0 100%)', text: '#2EC4B6', bg: 'rgba(46, 196, 182, 0.08)', border: 'rgba(46, 196, 182, 0.2)' }, // Aqua Mint
                { gradient: 'linear-gradient(135deg, #E63946 0%, #F1FAEE 100%)', text: '#E63946', bg: 'rgba(230, 57, 70, 0.08)', border: 'rgba(230, 57, 70, 0.2)' }, // Ruby Red
              ];
              const theme = colorPalette[idx % colorPalette.length];

              return (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
                  whileHover={{ y: -8, boxShadow: `0 25px 50px ${theme.border}` }}
                  className="glass-card core-value-card" 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '1.25rem',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: `1px solid ${theme.border}`,
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(16px)',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '2rem 1.5rem',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  {/* Internal pattern / accent */}
                  <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', background: theme.gradient, opacity: 0.08, borderRadius: '50%', filter: 'blur(25px)', pointerEvents: 'none' }} />
                  
                  <div 
                    style={{ 
                      width: '64px', 
                      height: '64px', 
                      borderRadius: '16px', 
                      background: theme.gradient, 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      boxShadow: `0 12px 35px ${theme.border}`,
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    {val.icon}
                  </div>
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, margin: '0 0 0.5rem 0', color: 'var(--text-primary)' }}>{val.title}</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>{val.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section style={{ backgroundColor: 'var(--bg-dark-1)', position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle" style={{ color: 'var(--primary-red)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, fontSize: '0.8rem', display: 'inline-block', padding: '0.5rem 1.25rem', background: 'rgba(210, 4, 45, 0.1)', border: '1px solid rgba(210, 4, 45, 0.2)', borderRadius: '30px', marginBottom: '1rem' }}>The Studio Advantage</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Why Choose <span className="gradient-text-red">Kamal Digi</span></h2>
            <p style={{ color: 'var(--text-secondary)' }}>We combine modern photographic style, luxury standards, and localized expertise in Udaipur to deliver unmatched output.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="why-choose-grid">
            {/* Visual Centerpiece (Camera Viewfinder & Lens) */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem 0', zIndex: 10 }} className="why-choose-visual">
              {/* Viewfinder Outer Card */}
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '370px',
                aspectRatio: '1/1',
                padding: '20px',
                borderRadius: '24px',
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                border: '1px solid rgba(15, 23, 42, 0.04)',
                boxShadow: '0 30px 60px -25px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255,255,255,0.6)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {/* Viewfinder focus brackets */}
                {/* Top Left Bracket */}
                <div style={{ position: 'absolute', top: '15px', left: '15px', width: '12px', height: '12px', borderTop: '2px solid rgba(15, 23, 42, 0.25)', borderLeft: '2px solid rgba(15, 23, 42, 0.25)' }} />
                {/* Top Right Bracket */}
                <div style={{ position: 'absolute', top: '15px', right: '15px', width: '12px', height: '12px', borderTop: '2px solid rgba(15, 23, 42, 0.25)', borderRight: '2px solid rgba(15, 23, 42, 0.25)' }} />
                {/* Bottom Left Bracket */}
                <div style={{ position: 'absolute', bottom: '15px', left: '15px', width: '12px', height: '12px', borderBottom: '2px solid rgba(15, 23, 42, 0.25)', borderLeft: '2px solid rgba(15, 23, 42, 0.25)' }} />
                {/* Bottom Right Bracket */}
                <div style={{ position: 'absolute', bottom: '15px', right: '15px', width: '12px', height: '12px', borderBottom: '2px solid rgba(15, 23, 42, 0.25)', borderRight: '2px solid rgba(15, 23, 42, 0.25)' }} />

                {/* Viewfinder HUD overlays */}
                {/* Top Left HUD */}
                <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', flexDirection: 'column', gap: '2px', fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(15, 23, 42, 0.65)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <motion.span 
                      animate={{ opacity: [1, 0, 1] }} 
                      transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }} 
                      style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D2042D' }} 
                    />
                    <span style={{ fontWeight: 700, letterSpacing: '0.05em' }}>REC</span>
                  </div>
                  <span style={{ color: 'rgba(15, 23, 42, 0.35)' }}>00:04:12:08</span>
                </div>

                {/* Top Right HUD */}
                <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px', fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(15, 23, 42, 0.65)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>4K 60</span>
                    <div style={{ width: '16px', height: '9px', border: '1px solid rgba(15, 23, 42, 0.5)', padding: '1px', display: 'flex', borderRadius: '2px', position: 'relative' }}>
                      <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(15, 23, 42, 0.6)' }} />
                      <div style={{ position: 'absolute', right: '-2px', top: '1.5px', width: '1px', height: '4px', backgroundColor: 'rgba(15, 23, 42, 0.5)' }} />
                    </div>
                  </div>
                  <span style={{ color: 'rgba(15, 23, 42, 0.35)' }}>RAW 10-bit</span>
                </div>

                {/* Bottom Left HUD */}
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', display: 'flex', flexDirection: 'column', gap: '2px', fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(15, 23, 42, 0.65)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontWeight: 700, color: [
                      '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                      '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                    ][activeFeature % 8] }}>{['F/1.2', 'F/1.4', 'F/2.0', 'F/2.8', 'F/4.0', 'F/5.6', 'F/8.0', 'F/11'][activeFeature % 8]}</span>
                    <span style={{ color: 'rgba(15, 23, 42, 0.25)' }}>|</span>
                    <span>{['1/8000', '1/4000', '1/2000', '1/1000', '1/500', '1/250', '1/125', '1/60'][activeFeature % 8]}</span>
                  </div>
                  <span style={{ color: 'rgba(15, 23, 42, 0.35)' }}>AF-C [MULTI]</span>
                </div>

                {/* Bottom Right HUD */}
                <div style={{ position: 'absolute', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px', fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(15, 23, 42, 0.65)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>ISO {['100', '200', '400', '800', '1600', '3200', '6400', '12800'][activeFeature % 8]}</span>
                    <span style={{ color: 'rgba(15, 23, 42, 0.25)' }}>|</span>
                    <span>AWB</span>
                  </div>
                  <span style={{ color: 'rgba(15, 23, 42, 0.35)' }}>SD A: 2.1TB</span>
                </div>

                {/* Bottom Center Exposure Indicator */}
                <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', fontFamily: 'monospace', fontSize: '0.6rem', color: 'rgba(15, 23, 42, 0.4)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>-2</span>
                    <span>-1</span>
                    <span style={{ color: activeFeature === 3 || activeFeature === 4 ? '#D2042D' : 'inherit', fontWeight: activeFeature === 3 || activeFeature === 4 ? 700 : 400 }}>0</span>
                    <span>+1</span>
                    <span>+2</span>
                  </div>
                  <div style={{ width: '60px', height: '1.5px', backgroundColor: 'rgba(15, 23, 42, 0.06)', position: 'relative', marginTop: '1px' }}>
                    <motion.div 
                      animate={{ left: `${(activeFeature / 7) * 100}%` }}
                      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                      style={{ position: 'absolute', top: '-1.75px', width: '5px', height: '5px', borderRadius: '50%', backgroundColor: [
                        '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                        '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                      ][activeFeature % 8], transform: 'translateX(-50%)', boxShadow: `0 0 4px ${[
                        '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                        '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                      ][activeFeature % 8]}` }} 
                    />
                  </div>
                </div>

                {/* Internal Lens Centerpiece Container */}
                <div style={{
                  position: 'relative',
                  width: '80%',
                  height: '80%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Outer Orbit (Dashed) */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      border: '1px dashed rgba(15, 23, 42, 0.08)',
                    }}
                  />

                  {/* Radial Halo Glow */}
                  <motion.div
                    key={`glow-${activeFeature}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.15, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      position: 'absolute',
                      width: '110%',
                      height: '110%',
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${[
                        '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                        '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                      ][activeFeature % 8]} 0%, transparent 70%)`,
                      filter: 'blur(35px)',
                      pointerEvents: 'none',
                      zIndex: 1
                    }}
                  />

                  {/* Middle Ring (Aperture Scale Ticks) */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                    style={{
                      position: 'absolute',
                      width: '86%',
                      height: '86%',
                      borderRadius: '50%',
                      border: `1px solid ${[
                        '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                        '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                      ][activeFeature % 8]}25`,
                      borderLeftColor: [
                        '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                        '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                      ][activeFeature % 8],
                      borderRightColor: [
                        '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                        '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                      ][activeFeature % 8],
                    }}
                  />

                  {/* Inner Lens Core */}
                  <div style={{
                    position: 'relative',
                    width: '72%',
                    height: '72%',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.85)',
                    border: '1px solid rgba(15, 23, 42, 0.06)',
                    backdropFilter: 'blur(15px)',
                    boxShadow: `0 15px 35px -10px rgba(15, 23, 42, 0.08), inset 0 0 15px rgba(255,255,255,0.7), inset 0 0 35px ${[
                      '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                      '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                    ][activeFeature % 8]}12`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    overflow: 'hidden'
                  }}>
                    {/* Aperture blades visual effect */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: 0.06,
                      background: 'repeating-conic-gradient(from 0deg, transparent 0deg 30deg, rgba(15, 23, 42, 0.8) 30deg 31deg)',
                      pointerEvents: 'none'
                    }} />

                    {/* Camera autofocus box overlay */}
                    <div style={{
                      position: 'absolute',
                      width: '68px',
                      height: '68px',
                      border: '1.5px solid rgba(15, 23, 42, 0.04)',
                      borderRadius: '8px',
                      pointerEvents: 'none',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '5px', height: '5px', borderTop: `1.5px solid ${[
                        '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                        '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                      ][activeFeature % 8]}`, borderLeft: `1.5px solid ${[
                        '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                        '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                      ][activeFeature % 8]}` }} />
                      <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '5px', height: '5px', borderTop: `1.5px solid ${[
                        '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                        '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                      ][activeFeature % 8]}`, borderRight: `1.5px solid ${[
                        '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                        '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                      ][activeFeature % 8]}` }} />
                      <div style={{ position: 'absolute', bottom: '-1px', left: '-1px', width: '5px', height: '5px', borderBottom: `1.5px solid ${[
                        '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                        '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                      ][activeFeature % 8]}`, borderLeft: `1.5px solid ${[
                        '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                        '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                      ][activeFeature % 8]}` }} />
                      <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '5px', height: '5px', borderBottom: `1.5px solid ${[
                        '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                        '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                      ][activeFeature % 8]}`, borderRight: `1.5px solid ${[
                        '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                        '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                      ][activeFeature % 8]}` }} />
                    </div>

                    {/* Dynamic Icon */}
                    <motion.div
                      key={`icon-${activeFeature}`}
                      initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
                      animate={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
                      style={{ marginBottom: '0.4rem', zIndex: 3 }}
                    >
                      {getFeatureIcon(
                        whyChooseUs[activeFeature].icon, 
                        [
                          '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                          '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                        ][activeFeature % 8], 
                        38
                      )}
                    </motion.div>

                    {/* Center metadata */}
                    <span style={{ 
                      fontFamily: 'monospace', 
                      fontSize: '0.75rem', 
                      color: [
                        '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                        '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                      ][activeFeature % 8], 
                      letterSpacing: '0.15em', 
                      fontWeight: 700,
                      zIndex: 3
                    }}>
                      {`0${activeFeature + 1} / 08`}
                    </span>

                    {/* Lens specs */}
                    <div style={{
                      position: 'absolute',
                      bottom: '10%',
                      fontFamily: 'monospace',
                      fontSize: '0.55rem',
                      color: 'var(--text-muted)',
                      letterSpacing: '0.05em',
                      zIndex: 3,
                      textAlign: 'center'
                    }}>
                      <div>SYS: OPTIMAL</div>
                      <div style={{ 
                        color: [
                          '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                          '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                        ][activeFeature % 8],
                        fontWeight: 700 
                      }}>FOCAL: 50mm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* List Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
              {/* Timeline vertical guide line */}
              <div style={{
                position: 'absolute',
                left: '20px',
                top: '1.5rem',
                bottom: '1.5rem',
                width: '2px',
                background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 0%, rgba(15, 23, 42, 0.05) 100%)',
                zIndex: 1
              }} />

              {whyChooseUs.map((item, idx) => {
                const color = [
                  '#D2042D', '#3A86FF', '#8338EC', '#FF006E', 
                  '#06D6A0', '#FFBE0B', '#FB5607', '#00F5FF'
                ][idx % 8];
                const isActive = activeFeature === idx;

                return (
                  <motion.div
                    key={idx}
                    onMouseEnter={() => setActiveFeature(idx)}
                    onClick={() => setActiveFeature(idx)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1.5rem',
                      cursor: 'pointer',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      position: 'relative',
                      zIndex: 2,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {/* Glow Hover background (subtle highlight, not a card) */}
                    {isActive && (
                      <motion.div
                        layoutId="activeFeatureBg"
                        style={{
                          position: 'absolute',
                          inset: 0,
                          borderRadius: '12px',
                          background: `linear-gradient(90deg, ${color}0A 0%, transparent 100%)`,
                          borderLeft: `3px solid ${color}`,
                          zIndex: -1,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Timeline Node Bullet */}
                    <div style={{
                      width: '40px',
                      height: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      position: 'relative',
                    }}>
                      {/* Active outline ring */}
                      {isActive ? (
                        <motion.div
                          layoutId="activeTimelineNode"
                          style={{
                            position: 'absolute',
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            border: `2px solid ${color}`,
                            boxShadow: `0 0 10px ${color}44`,
                            background: 'var(--bg-dark-1)'
                          }}
                          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                        >
                          <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: color,
                            margin: '6px auto'
                          }} />
                        </motion.div>
                      ) : (
                        <div style={{
                          width: '10px',
                          height: '10px',
                          borderRadius: '50%',
                          background: 'rgba(15, 23, 42, 0.15)',
                          transition: 'all 0.3s ease',
                          border: '2px solid transparent'
                        }} />
                      )}
                    </div>

                    {/* Text Details */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{
                          fontFamily: 'monospace',
                          fontSize: '0.9rem',
                          color: isActive ? color : 'rgba(15, 23, 42, 0.3)',
                          fontWeight: 700,
                          transition: 'color 0.3s ease'
                        }}>
                          {`0${idx + 1}`}
                        </span>
                        <h4 style={{
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          color: isActive ? 'var(--text-primary)' : 'rgba(15, 23, 42, 0.65)',
                          margin: 0,
                          transition: 'all 0.3s ease',
                        }}>
                          {item.title}
                        </h4>
                      </div>
                      
                      {/* Transition description visibility & opacity */}
                      <p style={{
                        fontSize: '0.95rem',
                        color: isActive ? 'var(--text-secondary)' : 'rgba(15, 23, 42, 0.45)',
                        lineHeight: '1.5',
                        margin: 0,
                        transition: 'all 0.3s ease'
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        <style>{`
          .why-choose-visual { display: flex; }
          @media (min-width: 1024px) {
            .why-choose-grid { grid-template-columns: 1.2fr 1.8fr !important; }
            .why-choose-visual { position: sticky !important; top: 120px; }
          }
        `}</style>
      </section>

      {/* 8. CTA BANNER */}
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

      {/* 9. TESTIMONIALS PREVIEW */}
      <section style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        {/* Transparent Watermark */}
        <div style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(5rem, 15vw, 12rem)',
          fontWeight: 900,
          fontFamily: 'var(--font-heading)',
          color: 'rgba(15, 23, 42, 0.02)',
          letterSpacing: '0.1em',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          textAlign: 'center',
          width: '100%'
        }}>
          TRUSTED
        </div>

        {/* Ambient Bokeh Glows */}
        <div style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(210, 4, 45, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: '10%',
          left: '-50px',
          zIndex: 1,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(58, 134, 255, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)',
          bottom: '10%',
          right: '-50px',
          zIndex: 1,
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header">
            <span className="section-subtitle" style={{ color: 'var(--primary-red)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, fontSize: '0.8rem', display: 'inline-block', padding: '0.5rem 1.25rem', background: 'rgba(210, 4, 45, 0.1)', border: '1px solid rgba(210, 4, 45, 0.2)', borderRadius: '30px', marginBottom: '1rem' }}>Client Feedback</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>What Our Clients Say</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Read review responses from couples, families, and businesses who trusted Kamal Digi Studio.</p>
          </div>

          {/* Infinite Marquee Scroll Container */}
          <div style={{ overflow: 'hidden', width: '100%', margin: '4rem 0 3.5rem 0', position: 'relative', padding: '1rem 0' }} className="marquee-wrapper">
            {/* Left & Right gradient masks for a smooth fade out on edges */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(90deg, var(--bg-dark-1) 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(270deg, var(--bg-dark-1) 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />

            <div className="marquee-track">
              {/* First loop of testimonials */}
              <div className="marquee-content">
                {testimonials.map((t, idx) => {
                  const initials = t.name.split(' ').map(n => n[0]).join('');
                  const avatarColors = [
                    ['#D2042D', '#FF4D6D'],
                    ['#3A86FF', '#00F5FF'],
                    ['#8338EC', '#FF007F'],
                    ['#06D6A0', '#059669'],
                    ['#FB5607', '#FFBE0B']
                  ];
                  const colorPair = avatarColors[idx % avatarColors.length];

                  return (
                    <motion.div 
                      key={`t1-${idx}`} 
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className="glass-card testimonial-review-card" 
                      style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '1.25rem',
                        width: '350px',
                        flexShrink: 0,
                        background: 'rgba(255, 255, 255, 0.75)',
                        border: '1px solid rgba(15, 23, 42, 0.05)',
                        boxShadow: '0 15px 35px -10px rgba(15, 23, 42, 0.06)',
                        borderRadius: '24px',
                        padding: '2.5rem 2rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Quote size={28} style={{ color: colorPair[0], opacity: 0.3 }} />
                        <div style={{ display: 'flex', gap: '2px' }}>
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <Star key={i} size={14} fill={colorPair[0]} color={colorPair[0]} />
                          ))}
                        </div>
                      </div>
                      <p style={{ fontStyle: 'italic', fontSize: '1rem', flexGrow: 1, color: 'var(--text-primary)', lineHeight: '1.6' }}>
                        "{t.content}"
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                        <div style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${colorPair[0]} 0%, ${colorPair[1]} 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          boxShadow: `0 4px 12px ${colorPair[0]}33`
                        }}>
                          {initials}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{t.name}</span>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{t.role}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Second loop of testimonials (identical for seamless scroll) */}
              <div className="marquee-content">
                {testimonials.map((t, idx) => {
                  const initials = t.name.split(' ').map(n => n[0]).join('');
                  const avatarColors = [
                    ['#D2042D', '#FF4D6D'],
                    ['#3A86FF', '#00F5FF'],
                    ['#8338EC', '#FF007F'],
                    ['#06D6A0', '#059669'],
                    ['#FB5607', '#FFBE0B']
                  ];
                  const colorPair = avatarColors[idx % avatarColors.length];

                  return (
                    <motion.div 
                      key={`t2-${idx}`} 
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      className="glass-card testimonial-review-card" 
                      style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        gap: '1.25rem',
                        width: '350px',
                        flexShrink: 0,
                        background: 'rgba(255, 255, 255, 0.75)',
                        border: '1px solid rgba(15, 23, 42, 0.05)',
                        boxShadow: '0 15px 35px -10px rgba(15, 23, 42, 0.06)',
                        borderRadius: '24px',
                        padding: '2.5rem 2rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Quote size={28} style={{ color: colorPair[0], opacity: 0.3 }} />
                        <div style={{ display: 'flex', gap: '2px' }}>
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <Star key={i} size={14} fill={colorPair[0]} color={colorPair[0]} />
                          ))}
                        </div>
                      </div>
                      <p style={{ fontStyle: 'italic', fontSize: '1rem', flexGrow: 1, color: 'var(--text-primary)', lineHeight: '1.6' }}>
                        "{t.content}"
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                        <div style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${colorPair[0]} 0%, ${colorPair[1]} 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          boxShadow: `0 4px 12px ${colorPair[0]}33`
                        }}>
                          {initials}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{t.name}</span>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>{t.role}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/testimonials" className="btn btn-primary" style={{ padding: '0.8rem 2rem', borderRadius: '30px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>View All Testimonials</span>
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
        <style>{`
          .marquee-track {
            display: flex;
            width: max-content;
            animation: scrollMarquee 40s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          .marquee-content {
            display: flex;
            gap: 2rem;
            padding-right: 2rem;
          }
          @keyframes scrollMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* 10. FAQ SECTION */}
      <section style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
        {/* Transparent Watermark */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(5rem, 20vw, 15rem)',
          fontWeight: 900,
          fontFamily: 'var(--font-heading)',
          color: 'rgba(15, 23, 42, 0.015)',
          letterSpacing: '0.1em',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
          textAlign: 'center',
          width: '100%'
        }}>
          HELP
        </div>

        {/* Ambient background glows */}
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(210, 4, 45, 0.03) 0%, transparent 70%)',
          filter: 'blur(100px)',
          top: '20%',
          right: '-100px',
          zIndex: 1,
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(131, 56, 236, 0.03) 0%, transparent 70%)',
          filter: 'blur(100px)',
          bottom: '20%',
          left: '-100px',
          zIndex: 1,
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '850px', position: 'relative', zIndex: 2 }}>
          <div className="section-header">
            <span className="section-subtitle" style={{ color: 'var(--primary-red)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, fontSize: '0.8rem', display: 'inline-block', padding: '0.5rem 1.25rem', background: 'rgba(210, 4, 45, 0.1)', border: '1px solid rgba(210, 4, 45, 0.2)', borderRadius: '30px', marginBottom: '1rem' }}>Common Inquiries</span>
            <h2 className="section-title" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Find answers to common questions about our wedding coverage, editing times, and studio policies.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              const number = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;

              return (
                <motion.div 
                  key={idx} 
                  whileHover={{ y: -2, scale: 1.005 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="glass-card" 
                  style={{ 
                    borderRadius: '16px',
                    cursor: 'pointer',
                    padding: '1.5rem 2rem',
                    background: isOpen ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.65)',
                    borderTop: '1px solid rgba(15, 23, 42, 0.04)',
                    borderRight: '1px solid rgba(15, 23, 42, 0.04)',
                    borderBottom: '1px solid rgba(15, 23, 42, 0.04)',
                    borderLeft: isOpen ? `4px solid var(--primary-red)` : '4px solid rgba(15, 23, 42, 0.1)',
                    boxShadow: isOpen 
                      ? '0 20px 40px -15px rgba(210, 4, 45, 0.08), 0 2px 8px -2px rgba(210, 4, 45, 0.03)' 
                      : 'var(--shadow-premium)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onClick={() => toggleFaq(idx)}
                >
                  {/* Subtle active background flare */}
                  {isOpen && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '180px',
                      height: '100%',
                      background: 'linear-gradient(90deg, rgba(210, 4, 45, 0.02) 0%, transparent 100%)',
                      pointerEvents: 'none'
                    }} />
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
                      {/* Stylized FAQ Index Number */}
                      <span style={{
                        fontFamily: 'monospace',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        color: isOpen ? 'var(--primary-red)' : 'rgba(15, 23, 42, 0.3)',
                        transition: 'color 0.3s ease'
                      }}>
                        {number}
                      </span>
                      
                      <h4 style={{ 
                        fontSize: '1.15rem', 
                        fontWeight: 700, 
                        color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)',
                        margin: 0,
                        transition: 'color 0.3s ease',
                        lineHeight: '1.4'
                      }}>
                        {faq.q}
                      </h4>
                    </div>

                    {/* Circular Chevron Icon Badge */}
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: isOpen ? 'var(--primary-red)' : 'rgba(15, 23, 42, 0.04)',
                      color: isOpen ? 'white' : 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: isOpen ? '0 4px 15px rgba(210, 4, 45, 0.25)' : 'none',
                      transition: 'all 0.3s ease',
                      flexShrink: 0
                    }}>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ display: 'flex' }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Expandable answer */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ paddingLeft: '2.5rem' }}>
                      <p style={{ 
                        marginTop: '1.25rem', 
                        fontSize: '0.98rem', 
                        color: 'var(--text-secondary)', 
                        lineHeight: '1.65',
                        margin: 0
                      }}>
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
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
