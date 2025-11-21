// src/pages/StreetRounds.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function StreetRounds() {
  const [modalOpen, setModalOpen] = useState(false);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [modalOpen]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleMouseEnter = () => {
    if (!modalOpen) {
      hoverTimeoutRef.current = setTimeout(() => {
        openModal();
      }, 500);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current && !modalOpen) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && modalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [modalOpen]);

  return (
    <>
      {/* Hero Section */}
      <section className="street-rounds-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="page-title">Join Our Street Rounds Team</h1>
          <p className="page-subtitle">Make a direct impact in our community through weekly street medicine rounds</p>
        </div>
      </section>

      {/* Onboarding Section */}
      <section className="onboarding-section">
        <div className="container">
          <div className="onboarding-content">
            <h2 className="section-title">Signing up!</h2>
            
            <div className="important-notice">
              <p><strong>Before you begin orientation below, ensure you are also on our general <a href="https://streetmedatpitt.us9.list-manage.com/subscribe?u=ad34f48582402d8d5f518332c&id=51cdb5149f" target="_blank" rel="noopener noreferrer" className="link-primary">emailing list</a> for events and scheduling</strong></p>
            </div>

            {/* Course Credit Trigger Button */}
            <div className="credit-trigger-container">
              <button 
                id="creditTrigger" 
                className="credit-trigger-btn"
                onClick={openModal}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <svg className="credit-icon-btn" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                <span>Get Course Credit at Pitt</span>
                <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>

            {/* Course Credit Modal */}
            <div id="creditModal" className={`credit-modal ${modalOpen ? 'active' : ''}`}>
              <div className="credit-modal-overlay" onClick={closeModal}></div>
              <div className="credit-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="credit-modal-close" aria-label="Close" onClick={closeModal}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                  </svg>
                </button>
                
                <div className="credit-modal-header">
                  <svg className="credit-modal-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                  <h3>Get Course Credit at Pitt!</h3>
                </div>
                
                <p className="credit-modal-intro">Street rounds can count toward course credit for several programs at the University of Pittsburgh:</p>
                
                <div className="credit-modal-list">
                  {[
                    'Public Health Practicum',
                    'Nutrition',
                    'Engineering',
                    'Social Work Practicum',
                    'Pitt Med Community Alliance Program and Flex Weeks',
                    'Computer Science',
                    'Dental Elective'
                  ].map((program, index) => (
                    <div 
                      key={index} 
                      className="credit-modal-item"
                      style={{
                        opacity: modalOpen ? 1 : 0,
                        transform: modalOpen ? 'translateX(0)' : 'translateX(-20px)',
                        transition: `all 0.4s ease ${modalOpen ? index * 0.05 : 0}s`
                      }}
                    >
                      <span className="credit-check">✓</span>
                      <span>{program}</span>
                    </div>
                  ))}
                </div>
                
                <div className="credit-modal-footer">
                  <p><strong>Don't see your program listed?</strong> We can try our best to negotiate course credit for other programs.</p>
                  <a href="mailto:info@streetmedatpitt.org" className="credit-contact-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <path d="M22 6l-10 7L2 6"/>
                    </svg>
                    Contact Us
                  </a>
                </div>
              </div>
            </div>

            <div className="onboarding-steps">
              {/* Step 1 */}
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Complete Membership Form</h3>
                  <p>Fill out our <a href="https://forms.gle/nDHTV3u5rRhhCkTs8" target="_blank" rel="noopener noreferrer" className="link-primary">Membership Tracking Form</a> so we have your information and can track your status</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Orientation Video & Quiz</h3>
                  <p>View our <a href="https://forms.gle/KLsy9Q6aFihMDy547" target="_blank" rel="noopener noreferrer" className="link-primary">Orientation Video and take the quiz</a></p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>HIPAA Training</h3>
                  <p>If you do not already have a HIPAA certification of any sort, complete one. We accept any HIPAA training previously done through Pitt, UPMC, or other employer/volunteering, as long as it is within the certificate expiration date.</p>
                  
                  <div className="hipaa-instructions">
                    <h4>HIPAA Training Instructions:</h4>
                    <ul>
                      <li>Go to <a href="https://www.citiprogram.org/?pageID=668" target="_blank" rel="noopener noreferrer" className="link-secondary">https://www.citiprogram.org/?pageID=668</a></li>
                      <li>Type in "University of Pittsburgh" to log in with your Pitt Passport</li>
                      <li>Click "View Courses"</li>
                      <li>Click "Add a Course" at the bottom</li>
                      <li>Select "Privacy & Information Security"</li>
                      <li>Take the course and download the certificate</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="step-card">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Complete Documentation</h3>
                  <p>Complete our <a href="https://na2.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=fa519dd3-b8d8-4518-9f83-20612fe5433c&env=na2&acct=5f235d73-8911-4785-9715-399671fb99eb&v=2" target="_blank" rel="noopener noreferrer" className="link-primary">Docusign for Liability Waiver and HIPAA certificate upload</a></p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="step-card">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Verification & Access</h3>
                  <p>Once your quiz, liability waiver, and HIPAA certification are verified by a leadership member, you will be granted access to schedule in rounds, and a leadership member will reach out to you.</p>
                  
                  <div className="info-box">
                    <p><strong>Note:</strong> Scheduling instructions will be sent in batches on an interval basis so you may not get instructions immediately after finishing. If you do not hear from us within 2 weeks, email us at <a href="mailto:info@streetmedatpitt.org" className="link-secondary">info@streetmedatpitt.org</a>.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="cta-section">
              <h2>Ready to Start?</h2>
              <p>Complete all the steps above to join our street rounds team and start making a difference in the lives of those experiencing homelessness.</p>
              <div className="cta-buttons">
                <a href="https://forms.gle/nDHTV3u5rRhhCkTs8" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Start Registration</a>
                <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="info-section">
        <div className="container">
          <h2>What to Expect</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3>Weekly Rounds</h3>
              <p>Join us for regular street rounds in Downtown Pittsburgh and East Liberty, providing essential healthcare services to those in need.</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Team Support</h3>
              <p>Work alongside experienced healthcare professionals and fellow volunteers in a supportive, educational environment.</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Learning Experience</h3>
              <p>Gain hands-on experience in street medicine while developing skills in community health, patient care, and social advocacy.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StreetRounds;