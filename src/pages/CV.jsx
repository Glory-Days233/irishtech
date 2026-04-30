import React from 'react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import './CV.css';

const CV = () => {
  return (
    <div className="cv page-container animate-fade-in">
      <div className="page-header section-dark text-center">
        <div className="container">
          <h1>Enoch Awidi Akrofi</h1>
          <p>IT Technical Support | +233 548 562 598 | enochawidi1@gmail.com</p>
          <button className="btn btn-primary mt-4" style={{marginTop: '2rem'}}>
            <Download size={18} /> Download Full CV
          </button>
        </div>
      </div>

      <section className="section">
        <div className="container cv-grid">
          
          <div className="cv-main">
            <div className="cv-section animate-slide-up">
              <h2 className="cv-section-title">
                <Briefcase className="cv-icon" /> Experience
              </h2>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h3 className="timeline-title">Contract Software Support & Administrative Assistant</h3>
                  <h4 className="timeline-subtitle">Ghana Communication Technology University (Software Systems Unit) | Jan 2026 - Present</h4>
                  <p className="timeline-text">
                    Providing ongoing software support, administrative assistance, and resolving user issues efficiently while maintaining system performance.
                  </p>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h3 className="timeline-title">National Service Personnel</h3>
                  <h4 className="timeline-subtitle">Ghana Communication Technology University (Software Systems Unit) | Nov 2024 - Sep 2025</h4>
                  <p className="timeline-text">
                    Assisted with day-to-day operations and worked effectively in fast-paced environments. Used critical thinking to break down problems, evaluate solutions and make decisions. Provided support and guidance in a team setting.
                  </p>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h3 className="timeline-title">IT Technical Support Intern</h3>
                  <h4 className="timeline-subtitle">Adentan Municipal Assembly | Oct 2023 - Jan 2024</h4>
                  <p className="timeline-text">
                    Installed, configured, and updated software applications. Supported the roll-out of IT policies and procedures. Troubleshot hardware and software issues to resolve bugs, minimizing work disruptions.
                  </p>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h3 className="timeline-title">Procurement Database Handler</h3>
                  <h4 className="timeline-subtitle">Little Star Gardens | Feb 2020 - May 2023</h4>
                  <p className="timeline-text">
                    Managed and organized procurement databases, ensuring accurate record-keeping and supporting operational efficiency.
                  </p>
                </div>
              </div>
            </div>

            <div className="cv-section animate-slide-up" style={{animationDelay: '0.2s'}}>
              <h2 className="cv-section-title">
                <GraduationCap className="cv-icon" /> Education
              </h2>
              
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h3 className="timeline-title">MSc Information Technology</h3>
                  <h4 className="timeline-subtitle">Ghana Communication Technology University | Jan 2026 - Dec 2026</h4>
                  <p className="timeline-text">
                    Currently pursuing a master's degree to further specialize in advanced information systems and IT infrastructure.
                  </p>  
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h3 className="timeline-title">BSc in Information Technology</h3>
                  <h4 className="timeline-subtitle">Ghana Communication Technology University | Tesano, Accra</h4>
                  <p className="timeline-text">
                    Comprehensive study in information technology, systems administration, and technical support fundamentals.
                  </p>  
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h3 className="timeline-title">High School Education</h3>
                  <h4 className="timeline-subtitle">Akwamuman Senior High School | Akosombo</h4>
                  <p className="timeline-text">
                    Completed secondary education with a focus on foundational academic disciplines.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cv-sidebar animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="cv-card">
              <h3 className="cv-card-title"><Award className="cv-icon-small" /> Core Skills</h3>
              <div className="skill-category">
                <h4>Technical Skills</h4>
                <div className="skill-tags">
                  <span>Systems Administration</span>
                  <span>Hardware & Software Support</span>
                  <span>Basic Programming</span>
                  <span>Git & GitHub</span>
                  <span>OS Updates & Upgrades</span>
                  <span>Microsoft Office</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Soft Skills</h4>
                <div className="skill-tags">
                  <span>Project Management</span>
                  <span>Problem-solving</span>
                  <span>Customer Service</span>
                  <span>Communication</span>
                  <span>Team Collaboration</span>
                </div>
              </div>
              <div className="skill-category">
                <h4>Other Expertise</h4>
                <div className="skill-tags">
                  <span>Internet Research</span>
                  <span>Organizational Skills</span>
                  <span>Quick Learner</span>
                  <span>Leadership</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default CV;
