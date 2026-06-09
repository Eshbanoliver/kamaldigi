import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowRight } from 'lucide-react';

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = 2026;

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const servicesLinks = [
    { name: 'Wedding & Engagement', path: '/services' },
    { name: 'Pre Wedding Photoshoot', path: '/services' },
    { name: 'Wedding Portrait Studio', path: '/services' },
    { name: 'Maternity & Newborn', path: '/services' },
    { name: 'Event Photographer', path: '/services' },
    { name: 'Corporate & Product', path: '/services' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#090D1A',
        borderTop: '1px solid var(--border-footer-light)',
        padding: '3rem 0 1.5rem 0',
        position: 'relative',
        zIndex: 5,
        overflow: 'hidden',
      }}
    >
      {/* Background soft glow */}
      <div
        className="glow-shape"
        style={{
          width: '350px',
          height: '350px',
          background: 'var(--glow-purple)',
          bottom: '10%',
          right: '5%',
          opacity: 0.15,
        }}
      />
      <div
        className="glow-shape"
        style={{
          width: '300px',
          height: '300px',
          background: 'var(--glow-red)',
          top: '10%',
          left: '5%',
          opacity: 0.15,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Studio Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <img 
                src="/logo_icon.png" 
                alt="Kamal Digi Studio Logo" 
                style={{ 
                  height: '32px', 
                  width: 'auto', 
                  display: 'block',
                  filter: 'brightness(1.15) drop-shadow(0 2px 8px rgba(210, 4, 45, 0.35))'
                }} 
              />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.35rem',
                  background: 'linear-gradient(135deg, var(--primary-red) 0%, var(--primary-pink) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                KAMAL DIGI
              </span>
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-footer-secondary)' }}>
              Capture every moment beautifully with Udaipur's premier photography studio. Specializing in luxury wedding shoots, events, and portrait photography.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <a
                href="https://www.instagram.com/kamaldigi_studio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Link"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-footer-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-footer-primary)',
                  transition: 'var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-red)';
                  e.currentTarget.style.borderColor = 'var(--primary-red)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'var(--border-footer-light)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4
              style={{
                fontSize: '1.15rem',
                borderBottom: '2px solid var(--primary-red)',
                width: 'fit-content',
                paddingBottom: '0.5rem',
                marginBottom: '0.5rem',
                color: 'var(--text-footer-primary)',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{
                      color: 'var(--text-footer-secondary)',
                      fontSize: '0.95rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--primary-red)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-footer-secondary)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowRight size={14} style={{ color: 'var(--primary-red)' }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4
              style={{
                fontSize: '1.15rem',
                borderBottom: '2px solid var(--primary-red)',
                width: 'fit-content',
                paddingBottom: '0.5rem',
                marginBottom: '0.5rem',
                color: 'var(--text-footer-primary)',
              }}
            >
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    style={{
                      color: 'var(--text-footer-secondary)',
                      fontSize: '0.95rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--primary-red)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-footer-secondary)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <ArrowRight size={14} style={{ color: 'var(--primary-red)' }} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4
              style={{
                fontSize: '1.15rem',
                borderBottom: '2px solid var(--primary-red)',
                width: 'fit-content',
                paddingBottom: '0.5rem',
                marginBottom: '0.5rem',
                color: 'var(--text-footer-primary)',
              }}
            >
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={20} style={{ color: 'var(--primary-red)', flexShrink: 0, marginTop: '0.15rem' }} />
                <span style={{ fontSize: '0.95rem', color: 'var(--text-footer-secondary)', lineHeight: '1.5' }}>
                  Prem Nagar, Rata Para, Titrdi, Sector 9, Udaipur, Rajasthan 313003
                </span>
              </div>
              <a
                href="tel:+919828142098"
                style={{ display: 'inline-flex', gap: '0.75rem', alignItems: 'center', color: 'var(--text-footer-primary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-red)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-footer-primary)')}
              >
                <Phone size={20} style={{ color: 'var(--primary-red)' }} />
                <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>+91 98281 42098</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--border-footer-light), transparent)',
            marginBottom: '1.5rem',
          }}
        />

        {/* Footer Bottom / Attribution */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '0.875rem', color: 'var(--text-footer-muted)' }}>
            ©️ Copyright {currentYear} |{' '}
            <Link
              to="/"
              style={{ 
                color: 'var(--text-footer-primary)', 
                fontWeight: 600, 
                transition: 'color var(--transition-fast)' 
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary-red)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-footer-primary)')}
            >
              Kamal Digi Studio
            </Link>{' '}
            | All Rights Reserved | Powered by{' '}
            <a
              href="https://www.futurexdigitalmarketing.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#28a745', fontWeight: 600, transition: 'color var(--transition-fast)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#34ce57')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#28a745')}
            >
              Future X Digital Marketing
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
