import React, { useState } from 'react';
import { Phone, MapPin, Calendar, Mail, Send, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import useSEO from '../hooks/useSEO';

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 22 }) => (
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
export const Contact: React.FC = () => {
  useSEO({
    title: 'Contact Us | Kamal Digi Studio Udaipur',
    description: 'Get in touch with Kamal Digi Studio in Udaipur, Rajasthan. Book our wedding, portrait, or commercial photography services, find our address in Titrdi, or call us at +91 98281 42098.'
  });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Wedding & Engagement',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesList = [
    'Wedding & Engagement Photography',
    'Pre Wedding Photoshoot',
    'Wedding Portrait Studio',
    'Event Photographer',
    'Maternity & Newborn Photography',
    'Headshots & Portraits',
    'Corporate Photography',
    'Product Photography',
    'Property Photography',
    'School Portraits',
    'Photo Editing',
    'Other'
  ];

  const businessHours = [
    { day: 'Monday', hours: '09:00 AM - 08:30 PM' },
    { day: 'Tuesday', hours: '09:00 AM - 08:30 PM' },
    { day: 'Wednesday', hours: '09:00 AM - 08:30 PM' },
    { day: 'Thursday', hours: '09:00 AM - 08:30 PM' },
    { day: 'Friday', hours: '09:00 AM - 08:30 PM' },
    { day: 'Saturday', hours: '09:00 AM - 08:30 PM' },
    { day: 'Sunday', hours: '10:00 AM - 05:00 PM' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your Name and Phone Number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate database / mail delivery delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Wedding & Engagement',
        message: ''
      });
    }, 1500);
  };

  const currentDayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = daysOfWeek[currentDayIndex];

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Glow Backdrops */}
      <div className="glow-shape" style={{ width: '450px', height: '450px', backgroundColor: 'var(--glow-red)', top: '10%', right: '-50px' }} />
      <div className="glow-shape" style={{ width: '500px', height: '500px', backgroundColor: 'var(--glow-blue)', bottom: '25%', left: '-150px' }} />

      {/* 1. CONTACT BANNER */}
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
          <span className="section-subtitle">Reach Out</span>
          <h1 style={{ fontWeight: 800, marginBottom: '1rem' }}>Contact Kamal Digi Studio</h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.15rem' }}>
            Book your slot or coordinate dates with Udaipur's premier photography studio.
          </p>
        </div>
      </section>

      {/* 2. QUICK CONTACT CARDS */}
      <section style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)', paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            {/* Phone Card */}
            <motion.a 
              href="tel:+919828142098"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(210, 4, 45, 0.15)' }}
              className="glass-card contact-info-card contact-vibrant-card" 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(15, 23, 42, 0.15)',
                borderRadius: '24px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(210, 4, 45, 0.1)', color: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                <Phone size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, zIndex: 2 }}>Phone Call</h3>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-red)', zIndex: 2 }}>+91 98281 42098</span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', zIndex: 2, margin: 0 }}>Call us directly for immediate inquiries.</p>
              
              {/* Glow border overlay */}
              <div className="card-glow-border" style={{ position: 'absolute', inset: 0, borderRadius: '24px', border: '2px solid transparent', background: 'linear-gradient(135deg, #D2042D 0%, #FF4D6D 100%) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', opacity: 0.35, transition: 'opacity 0.4s ease', pointerEvents: 'none', zIndex: 10 }} />
            </motion.a>

            {/* Location Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(58, 134, 255, 0.15)' }}
              className="glass-card contact-info-card contact-vibrant-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(15, 23, 42, 0.15)',
                borderRadius: '24px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(58, 134, 255, 0.1)', color: 'var(--secondary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                <MapPin size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, zIndex: 2 }}>Our Studio</h3>
              <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: '1.5', fontWeight: 700, zIndex: 2 }}>
                Prem Nagar, Rata Para, Titrdi, Sector 9, Udaipur, Rajasthan 313003
              </span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', zIndex: 2, margin: 0 }}>Visit us for a face-to-face consultation.</p>
              
              {/* Glow border overlay */}
              <div className="card-glow-border" style={{ position: 'absolute', inset: 0, borderRadius: '24px', border: '2px solid transparent', background: 'linear-gradient(135deg, #3A86FF 0%, #00F5FF 100%) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', opacity: 0.35, transition: 'opacity 0.4s ease', pointerEvents: 'none', zIndex: 10 }} />
            </motion.div>

            {/* Instagram Card */}
            <motion.a 
              href="https://www.instagram.com/kamaldigi_studio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(131, 56, 236, 0.15)' }}
              className="glass-card contact-info-card contact-vibrant-card" 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(15, 23, 42, 0.15)',
                borderRadius: '24px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: 'rgba(131, 56, 236, 0.1)', color: 'var(--secondary-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                <InstagramIcon size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, zIndex: 2 }}>Instagram</h3>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--secondary-purple)', zIndex: 2 }}>@kamaldigi_studio</span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', zIndex: 2, margin: 0 }}>Send a direct message on Instagram.</p>
              
              {/* Glow border overlay */}
              <div className="card-glow-border" style={{ position: 'absolute', inset: 0, borderRadius: '24px', border: '2px solid transparent', background: 'linear-gradient(135deg, #8338EC 0%, #FF007F 100%) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', opacity: 0.35, transition: 'opacity 0.4s ease', pointerEvents: 'none', zIndex: 10 }} />
            </motion.a>

          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM & HOURS */}
      <section style={{ backgroundColor: 'var(--bg-dark-2)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="contact-grid">
            
            {/* Form Column */}
            <div className="glass-card contact-form-card">
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail style={{ color: 'var(--primary-red)' }} />
                <span>Send A Message</span>
              </h2>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ 
                    textAlign: 'center', 
                    padding: '3rem 1.5rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: '1rem' 
                  }}
                >
                  <CheckCircle2 size={56} style={{ color: '#28a745' }} />
                  <h3 style={{ fontSize: '1.5rem' }}>Message Sent Successfully!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Thank you for reaching out to Kamal Digi Studio. Our team will contact you back on your phone number shortly.
                  </p>
                  <button onClick={() => setIsSubmitted(false)} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    <span>Send Another Message</span>
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  {/* Name field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Your Name *</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name" 
                      className="custom-input"
                      style={{ 
                        padding: '0.85rem 1rem', 
                        borderRadius: '8px', 
                        backgroundColor: 'rgba(15, 23, 42, 0.03)', 
                        border: '1px solid var(--border-light)', 
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.95rem'
                      }} 
                    />
                  </div>

                  {/* Phone and Email Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="form-row">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="phone" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number" 
                        className="custom-input"
                        style={{ 
                          padding: '0.85rem 1rem', 
                          borderRadius: '8px', 
                          backgroundColor: 'rgba(15, 23, 42, 0.03)', 
                          border: '1px solid var(--border-light)', 
                          color: 'var(--text-primary)',
                          fontFamily: 'inherit',
                          fontSize: '0.95rem'
                        }} 
                      />
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Email Address (Optional)</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address" 
                        className="custom-input"
                        style={{ 
                          padding: '0.85rem 1rem', 
                          borderRadius: '8px', 
                          backgroundColor: 'rgba(15, 23, 42, 0.03)', 
                          border: '1px solid var(--border-light)', 
                          color: 'var(--text-primary)',
                          fontFamily: 'inherit',
                          fontSize: '0.95rem'
                        }} 
                      />
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="service" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Service Required</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="custom-input"
                      style={{ 
                        padding: '0.85rem 1rem', 
                        borderRadius: '8px', 
                        backgroundColor: 'var(--bg-dark-1)', 
                        border: '1px solid var(--border-light)', 
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.95rem',
                        cursor: 'pointer'
                      }}
                    >
                      {servicesList.map((srv, index) => (
                        <option key={index} value={srv} style={{ backgroundColor: 'var(--bg-dark-2)', color: 'var(--text-primary)' }}>{srv}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Shoot Description & Dates</label>
                    <textarea 
                      id="message"
                      name="message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share details about your shooting plans, event locations, dates, etc." 
                      className="custom-input"
                      style={{ 
                        padding: '0.85rem 1rem', 
                        borderRadius: '8px', 
                        backgroundColor: 'rgba(15, 23, 42, 0.03)', 
                        border: '1px solid var(--border-light)', 
                        color: 'var(--text-primary)',
                        fontFamily: 'inherit',
                        fontSize: '0.95rem',
                        resize: 'vertical'
                      }} 
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="btn btn-primary form-submit-btn" 
                    disabled={isSubmitting}
                    style={{ 
                      width: '100%', 
                      marginTop: '0.5rem',
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                  >
                    <Send size={18} />
                    <span>{isSubmitting ? 'Sending Message...' : 'Submit Message'}</span>
                  </button>

                </form>
              )}
            </div>

            {/* Business Hours Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Hours Card */}
              <div className="glass-card business-hours-card">
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Calendar style={{ color: 'var(--primary-red)' }} />
                  <span>Business Hours</span>
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {businessHours.map((h, index) => {
                    const isToday = h.day === todayName;
                    return (
                      <div 
                        key={index} 
                        style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          borderBottom: '1px solid rgba(15, 23, 42, 0.05)', 
                          paddingBottom: '0.65rem',
                          color: isToday ? 'var(--primary-red)' : 'var(--text-primary)',
                          fontWeight: isToday ? 700 : 500,
                          transform: isToday ? 'scale(1.02)' : 'none',
                          transformOrigin: 'left',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          {isToday && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary-red)', display: 'inline-block', boxShadow: '0 0 8px var(--primary-red)' }} />}
                          <span>{h.day}</span>
                          {isToday && <span style={{ fontSize: '0.75rem', padding: '0.15rem 0.5rem', borderRadius: '10px', backgroundColor: 'rgba(210, 4, 45, 0.1)', color: 'var(--primary-red)', marginLeft: '0.25rem' }}>Today</span>}
                        </div>
                        <span style={{ color: isToday ? 'var(--primary-red)' : 'var(--text-secondary)', fontSize: '0.95rem' }}>{h.hours}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Booking tip card */}
              <div className="glass-card" style={{ padding: 'clamp(1.25rem, 4vw, 2rem)', borderLeft: '4px solid var(--primary-red)' }}>
                <h4 style={{ color: 'var(--primary-red)', marginBottom: '0.5rem' }}>Need Immediate Booking?</h4>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Call our live helpline directly on <strong>+91 98281 42098</strong>. We can dispatch crew members for urgent corporate coverages and coordinate immediate passport portraits in Udaipur.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Media Queries for form rows */}
        <style>{`
          @media (min-width: 768px) {
            .form-row { grid-template-columns: 1fr 1fr !important; }
          }
          @media (min-width: 992px) {
            .contact-grid { grid-template-columns: 1.25fr 0.75fr !important; }
          }
          .contact-vibrant-card:hover .card-glow-border {
            opacity: 1 !important;
          }
          .custom-input {
            transition: all 0.3s ease;
          }
          .custom-input:focus {
            outline: none;
            border-color: var(--primary-red) !important;
            box-shadow: 0 0 0 3px rgba(210, 4, 45, 0.15) !important;
            background-color: white !important;
          }
          .form-submit-btn {
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(210, 4, 45, 0.25);
          }
          .form-submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(210, 4, 45, 0.4);
          }
        `}</style>
      </section>

      {/* 4. GOOGLE MAP */}
      <section style={{ padding: '0 0 5rem 0' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              width: '100%', 
              height: '450px', 
              display: 'block', 
              overflow: 'hidden', 
              borderRadius: '24px', 
              border: '1px solid rgba(15, 23, 42, 0.15)',
              boxShadow: '0 20px 50px rgba(9, 13, 26, 0.1)',
              position: 'relative'
            }}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.4412461423435!2d73.72795577536061!3d24.539409578140262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e50b0e7f8aaf%3A0xec3938c003d92812!2sKamal%20Digi%20Studio!5e0!3m2!1sen!2sin!4v1780651968722!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Kamal Digi Studio Location in Udaipur"
            />
          </motion.div>
        </div>
      </section>

    </div>
  );
};
export default Contact;
