import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about page-container animate-fade-in">
      <div className="page-header section-dark text-center">
        <div className="container">
          <h1>About Us</h1>
          <p>Discover the story, mission, and vision driving our innovation.</p>
        </div>
      </div>

      <section className="section">
        <div className="container grid grid-cols-2 about-grid">
          <div className="about-content animate-slide-up">
            <h2 className="section-title">Our Story</h2>
            <p>
              Founded with the goal of bridging the gap between complex technical requirements and accessible user experiences, Irish Analytics has evolved into a premier tech startup.
            </p>
            <p>
              We believe that technology should empower businesses, streamline operations, and be intuitively beautiful. Our approach combines rigorous analytical thinking with cutting-edge software engineering.
            </p>
            
            <h2 className="section-title mt-4">Mission & Vision</h2>
            <div className="mission-box">
              <h3>Mission</h3>
              <p>To provide robust, scalable, and intuitive IT solutions that solve real-world problems for businesses of all sizes.</p>
            </div>
            <div className="mission-box">
              <h3>Vision</h3>
              <p>To be the leading innovator in web technologies and systems engineering, setting standards for excellence and client satisfaction.</p>
            </div>
          </div>
          
          <div className="founder-card card animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="founder-image-container" style={{ textAlign: 'center', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <img 
                src="/profile.jpg" 
                alt="Enoch Awidi Akrofi" 
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid #2ecc71',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  if (document.getElementById('fallback-initials')) {
                    document.getElementById('fallback-initials').style.display = 'flex';
                  }
                }}
              />
              <div 
                id="fallback-initials"
                className="founder-image-placeholder" 
                style={{ display: 'none', margin: '0' }}
              >
                <span>EA</span>
              </div>
            </div>
            <h2 className="founder-name">Enoch Awidi Akrofi</h2>
            <h4 className="founder-title">IT Technical Support</h4>
            
            <div className="founder-bio">
              <p>
                Dedicated IT Technical Support professional with knowledge in troubleshooting equipment and testing alternative pathways to address complicated issues. Organized in documenting user requests and providing useful fixes.
              </p>
              <ul className="founder-highlights">
                <li><strong>IT Systems Support:</strong> Skilled in hardware/software troubleshooting, OS upgrades, and peripheral installation.</li>
                <li><strong>Operations & Procurement:</strong> Experienced in maintaining accurate procurement databases and supporting daily ops.</li>
                <li><strong>Communication & Leadership:</strong> Confident communicator who works well in teams to deliver exceptional customer service.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
