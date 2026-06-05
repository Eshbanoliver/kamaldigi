import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingButtons: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Left Side Quick Contacts */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          zIndex: 90,
        }}
      >
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/919828142098"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.1, translateY: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#25D366',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            cursor: 'pointer',
            border: 'none',
            position: 'relative',
          }}
        >
          {/* Pulsing overlay */}
          <span
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              opacity: 0.3,
              zIndex: -1,
              animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
            }}
          />
          <MessageCircle size={24} fill="white" />
        </motion.a>

        {/* Direct Call Button */}
        <motion.a
          href="tel:+919828142098"
          aria-label="Call Kamal Digi Studio"
          whileHover={{ scale: 1.1, translateY: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'var(--primary-orange)',
            boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            cursor: 'pointer',
            border: 'none',
          }}
        >
          <Phone size={22} fill="white" />
        </motion.a>
      </div>

      {/* Right Side Scroll to Top */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 90,
        }}
      >
        <AnimatePresence>
          {showScroll && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 50 }}
              whileHover={{ scale: 1.1, translateY: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to Top"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid var(--border-light)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary-orange)';
                e.currentTarget.style.color = 'var(--primary-orange)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              <ArrowUp size={22} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};
export default FloatingButtons;
