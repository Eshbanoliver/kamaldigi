import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 110,
          transition: 'var(--transition-normal)',
          padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.05)',
          backdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'blur(0px)',
          WebkitBackdropFilter: isScrolled ? 'blur(16px) saturate(180%)' : 'blur(0px)',
          borderBottom: isScrolled ? '1px solid var(--border-light)' : '1px solid transparent',
          pointerEvents: 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pointerEvents: 'auto' }}>
          {/* Logo / Brand Name */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', zIndex: 110 }}>
            <img 
              src="/logo_icon.png" 
              alt="Kamal Digi Studio Logo" 
              style={{ 
                height: '52px', 
                marginTop: '-7px',
                marginBottom: '-7px',
                width: 'auto', 
                display: 'block',
                filter: 'drop-shadow(0 2px 8px rgba(210, 4, 45, 0.15))' 
              }} 
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.1rem, 4.5vw, 1.5rem)',
                  letterSpacing: '-0.02em',
                  background: 'linear-gradient(135deg, var(--primary-red) 0%, var(--primary-pink) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  whiteSpace: 'nowrap'
                }}
              >
                KAMAL DIGI
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  fontSize: 'clamp(0.9rem, 3.5vw, 1.25rem)',
                  color: 'var(--text-primary)',
                  letterSpacing: '0.05em',
                  whiteSpace: 'nowrap'
                }}
              >
                STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
            }}
            className="desktop-nav"
          >
            <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', alignItems: 'center' }}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        position: 'relative',
                        padding: '0.25rem 0',
                        color: isActive ? 'var(--primary-red)' : 'var(--text-primary)',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.color = 'var(--primary-red)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
                      }}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '2px',
                            background: 'linear-gradient(90deg, var(--primary-red) 0%, var(--primary-pink) 100%)',
                          }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Button */}
          <div style={{ display: 'none', gap: '1rem', alignItems: 'center' }} className="desktop-actions">
            <a
              href="tel:+919828142098"
              className="btn btn-primary"
              style={{
                padding: '0.6rem 1.25rem',
                fontSize: '0.85rem',
              }}
            >
              <Phone size={14} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'block',
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              zIndex: 110,
            }}
            className="hamburger-btn"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* CSS overrides for desktop responsive support natively with vanilla style tags */}
        <style>{`
          @media (min-width: 992px) {
            .desktop-nav { display: block !important; }
            .desktop-actions { display: flex !important; }
            .hamburger-btn { display: none !important; }
          }
        `}</style>
      </header>

      {/* Mobile Slide Navigation Backdrop & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(15, 23, 42, 0.4)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                zIndex: 100,
              }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                maxWidth: '300px',
                backgroundColor: 'rgba(255, 255, 255, 0.98)',
                borderLeft: '1px solid var(--border-light)',
                padding: '6rem 2rem 2rem 2rem',
                zIndex: 105,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '-10px 0 30px rgba(15, 23, 42, 0.15)',
              }}
            >
              <nav>
                <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', gap: '1.75rem' }}>
                  {navLinks.map((link, idx) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <motion.li
                        key={link.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          style={{
                            fontFamily: 'var(--font-heading)',
                            fontWeight: 600,
                            fontSize: '1.25rem',
                            color: isActive ? 'var(--primary-red)' : 'var(--text-primary)',
                            display: 'block',
                            padding: '0.25rem 0',
                          }}
                        >
                          {link.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              >
                <a href="tel:+919828142098" className="btn btn-primary" style={{ width: '100%' }}>
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
                <div style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Prem Nagar, Udaipur, Rajasthan
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default Header;
