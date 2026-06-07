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
      <section style={{ backgroundColor: 'var(--bg-dark-1)', borderBottom: '1px solid var(--border-light)', paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            
            {/* Phone Card */}
            <a 
              href="tel:+919828142098"
              className="glass-card contact-info-card" 
            >
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(210, 4, 45, 0.1)', color: 'var(--primary-red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Phone Call</h3>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-red)' }}>+91 98281 42098</span>
              <p style={{ fontSize: '0.85rem' }}>Call us directly for immediate inquiries.</p>
            </a>

            {/* Location Card */}
            <div 
              className="glass-card contact-info-card" 
            >
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(58, 134, 255, 0.1)', color: 'var(--secondary-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Our Studio</h3>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                Prem Nagar, Rata Para, Titrdi, Sector 9, Udaipur, Rajasthan 313003
              </span>
              <p style={{ fontSize: '0.85rem' }}>Visit us for a face-to-face consultation.</p>
            </div>

            {/* Instagram Card */}
            <a 
              href="https://www.instagram.com/kamaldigi_studio/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-card contact-info-card" 
            >
              <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(131, 56, 236, 0.1)', color: 'var(--secondary-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <InstagramIcon size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>Instagram</h3>
              <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--secondary-purple)' }}>@kamaldigi_studio</span>
              <p style={{ fontSize: '0.85rem' }}>Send a direct message on Instagram.</p>
            </a>

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
                    className="btn btn-primary" 
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
                  {businessHours.map((h, index) => (
                    <div 
                      key={index} 
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        borderBottom: '1px solid rgba(255,255,255,0.05)', 
                        paddingBottom: '0.5rem' 
                      }}
                    >
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{h.day}</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{h.hours}</span>
                    </div>
                  ))}
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
        `}</style>
      </section>

      {/* 4. GOOGLE MAP */}
      <section style={{ padding: 0 }}>
        <div style={{ width: '100%', height: '450px', display: 'block', overflow: 'hidden', borderBottom: '1px solid var(--border-light)' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.4412461423435!2d73.72795577536061!3d24.539409578140262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e50b0e7f8aaf%3A0xec3938c003d92812!2sKamal%20Digi%20Studio!5e0!3m2!1sen!2sin!4v1780651968722!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Kamal Digi Studio Location in Udaipur"
          />
        </div>
      </section>

    </div>
  );
};
export default Contact;
