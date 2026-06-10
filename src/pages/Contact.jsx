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
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '3eb989d9-3a82-41d4-8e96-e37879a0cca7';

    const submissionData = new FormData();
    submissionData.append("access_key", accessKey);
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("message", formData.message);
    submissionData.append("subject", "New Message from Irish Tech Contact Form");
    submissionData.append("from_name", "Irish Tech Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMsg(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please verify your connection and try again.");
    } finally {
      setSubmitting(false);
    }
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
                  {errorMsg && (
                    <div className="error-message">
                      {errorMsg}
                    </div>
                  )}
                  
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
                  
                  <button type="submit" className="btn btn-primary submit-btn" disabled={submitting}>
                    {submitting ? 'Sending...' : <><Send size={18} /> Send Message</>}
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
