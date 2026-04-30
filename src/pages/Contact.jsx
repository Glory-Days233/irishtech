import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="contact page-container animate-fade-in">
      <div className="page-header section-dark text-center">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Let's discuss how we can collaborate on your next big idea.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="contact-grid">
            
            <div className="contact-info animate-slide-up">
              <h2>Get In Touch</h2>
              <p className="contact-subtitle">
                Whether you have a question about our services, need to request a quote, or just want to say hi, my inbox is always open.
              </p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon"><Mail size={24} /></div>
                  <div>
                    <h3>Email</h3>
                    <p>enochawidi1@gmail.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon"><Phone size={24} /></div>
                  <div>
                    <h3>Phone</h3>
                    <p>+233 548 562 598</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon"><MapPin size={24} /></div>
                  <div>
                    <h3>Location</h3>
                    <p>Accra Adenta, Ghana</p>
                    <p>Available for remote worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container card animate-slide-up" style={{animationDelay: '0.2s'}}>
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary submit-btn">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
