import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

// Lazy load pages for code splitting (Performance optimization)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main style={{ flexGrow: 1, minHeight: '80vh', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
        <Suspense fallback={
          <div style={{ 
            minHeight: '80vh', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '1rem',
            backgroundColor: 'var(--bg-dark-2)'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid rgba(210, 4, 45, 0.1)',
              borderTop: '3px solid var(--primary-red)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <FloatingButtons />
      <Footer />
    </Router>
  );
};

export default App;
