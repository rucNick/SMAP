import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function About() {
  useEffect(() => {
    // Timeline Animation on Scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          timelineObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    timelineItems.forEach(item => {
      item.style.animationPlayState = 'paused';
      timelineObserver.observe(item);
    });

    // Team Member Cards Hover Effect
    const teamMembers = document.querySelectorAll(
      '.board-member, .liaison-member, .resource-member, ' +
      '.events-education-member, .research-member'
    );
    
    teamMembers.forEach(member => {
      member.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
      });
      
      member.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });

    // School Cards Animation
    const schoolCards = document.querySelectorAll('.schools-column p');
    
    const schoolObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
          }, index * 100);
          schoolObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    schoolCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateX(-20px)';
      card.style.transition = 'all 0.5s ease';
      schoolObserver.observe(card);
    });

    // Cleanup
    return () => {
      timelineObserver.disconnect();
      schoolObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero Image Section */}
      <section className="hero-image-section">
        <div className="hero-image-wrapper">
          <img src="/Content/About us/Team.jpg" alt="Street Medicine at Pitt Team" className="hero-banner-image" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-wrapper">
            <div className="mission-intro">
              <h2 className="section-header">Our Mission</h2>
              <div className="section-underline"></div>
            </div>
            <div className="mission-columns">
              <div className="mission-column">
                <div className="mission-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3>Bridge the Gap</h3>
                <p>We connect traditional healthcare with the most vulnerable members of our community, ensuring no one is left behind.</p>
              </div>
              <div className="mission-column">
                <div className="mission-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3>Compassionate Care</h3>
                <p>Everyone deserves access to dignified medical care, regardless of their housing status or ability to pay.</p>
              </div>
              <div className="mission-column">
                <div className="mission-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24m-13.42 0l-4.24 4.24m18.36-4.24h-6m-6 0H1m16.24 7.22l-4.24 4.24m-6.96 0l-4.24-4.24" />
                  </svg>
                </div>
                <h3>Create Change</h3>
                <p>Through collaboration and education, we're training the next generation to understand and address health equity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline Section */}
      <section className="history-section">
        <div className="container">
          <h2>Our History</h2>
          <p className="history-intro">
            Since 2021, Street Medicine at Pitt has evolved from a student initiative into an internationally recognized model for interdisciplinary education, clinical innovation, and advocacy for people experiencing homelessness.
          </p>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <p><strong>The Beginning:</strong> Founded by students Antonio Gumucio, Rebecca Mackenzie, Paul Seraly, Cameron Metz, and Nicole Alindogan. First street rounds launched in Oakland on September 22, 2021.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <p><strong>Sustained Support:</strong> Annual funding from the Cooper Fund and UPMC Shadyside Department of Medicine enabled program growth, direct outreach, and assistance with housing, employment, and healthcare access.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <p><strong>Clinical Integration:</strong> Launched the Street Medicine Consult Service at UPMC Shadyside, integrating street medicine principles into inpatient care for people experiencing homelessness.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <p><strong>Expanding Infrastructure:</strong> Beckwith Institute grant funded social workers for the Consult Service. In August, the Center for Street Medicine was established at Pitt School of Medicine, expanding infrastructure for education, clinical care, and research.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-year">2025-Present</div>
              <div className="timeline-content">
                <p><strong>Groundbreaking Initiatives:</strong> Funded new Street Medicine positions through Shadyside Hospital Foundation and Allegheny County Opioid Settlement. Launched the world's first Street Medicine Law Practicum at Pitt School of Law and began coordinating medical teams at the Allegheny County Winter Shelter.</p>
              </div>
            </div>
          </div>

          <blockquote className="history-quote">
            <em>"Our mission has always been simple: meet people where they are, provide care without judgment, and advocate for those whose voices often go unheard."</em>
            <strong>- Founding Team</strong>
          </blockquote>

          <div className="leadership-history">
            <h3>Presidential Leadership</h3>
            <p>
              <strong>Antonio Gumucio</strong> – Founding President<br />
              <strong>Julia Lam</strong> – President<br />
              <strong>Kat O'Connor</strong> – President<br />
              <strong>Sam Ding</strong> – President<br />
              <strong>Helena Oft</strong> – President
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h1 className="section-title">The team</h1>
          <p className="section-subtitle">
            Our dedicated board members, students, and faculty advisors are the heart of Street Medicine at Pitt.
          </p>

          {/* Faculty Leadership */}
          <div className="team-category">
            <h2 className="category-title">Faculty Leadership</h2>
            <div className="board-grid">
              <div className="board-member">
                <div className="member-image"><img src="/Content/About us/AnnaWhite.jpg" alt="Dr. Anna Marie White" /></div>
                <h3>Dr. Anna Marie White</h3>
                <p>Medical Director</p>
              </div>
              <div className="board-member">
                <div className="member-image"><img src="/Content/About us/Max Hurwitz.jpg" alt="Dr. Max Hurwitz" /></div>
                <h3>Dr. Max Hurwitz</h3>
                <p>Assistant Medical Director</p>
              </div>
              <div className="board-member">
                <div className="member-image"><img src="/Content/About us/BethHoffman.jpg" alt="Dr. Beth Hoffman" /></div>
                <h3>Dr. Beth Hoffman</h3>
                <p>Public Health Advisor</p>
              </div>
              <div className="board-member">
                <div className="member-image"><img src="/Content/About us/Fisher_Lee_res.jpg" alt="Dr. Lee Fisher" /></div>
                <h3>Dr. Lee Fisher</h3>
                <p>Research Advisor</p>
              </div>
            </div>
          </div>

          {/* Student Leadership Board */}
          <div className="team-category">
            <h2 className="category-title">Student Leadership</h2>
            <div className="liaison-grid">
              {[
                { img: "HelenaOtt.jpg", name: "Helena Oft", role: "President" },
                { img: "allyson andrews.jpeg", name: "Ally Andrews", role: "Vice President" },
                { img: "jake littman.jpeg", name: "Jake Littman", role: "Business Manager" },
                { img: "SamDing.jpg", name: "Sam Ding", role: "Onboarding & Safety/QI" },
                { img: "Josh Morgenlander.jpg", name: "Josh Morgenlander", role: "SMISC Rep" }
              ].map((member, idx) => (
                <div key={idx} className="liaison-member">
                  <div className="member-image"><img src={`/Content/About us/${member.img}`} alt={member.name} /></div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Communications */}
          <div className="team-category">
            <h2 className="category-title">Communications</h2>
            <div className="resource-grid">
              {[
                { img: "MeganStafford.jpeg", name: "Megan Stafford", role: "Social Media" },
                { img: "DivyaTase.jpeg", name: "Divya Tase", role: "Social Media" },
                { img: "debbie harrington.jpg", name: "Debbie Harrington", role: "Onboarding" }
              ].map((member, idx) => (
                <div key={idx} className="resource-member">
                  <div className="member-image"><img src={`/Content/About us/${member.img}`} alt={member.name} /></div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Events & Education */}
          <div className="team-category">
            <h2 className="category-title">Events & Education</h2>
            <div className="events-education-grid">
              {[
                "Bacchi, Victoria M.jpg|Victoria Bacchi",
                "manreet cheema.jpeg|Manreet Cheema",
                "NatalieHogan.jpeg|Natalie Hogan",
                "arabella johnson.jpg|Arabella Johnson"
              ].map((item, idx) => {
                const [img, name] = item.split('|');
                return (
                  <div key={idx} className="events-education-member">
                    <div className="member-image"><img src={`/Content/About us/${img}`} alt={name} /></div>
                    <h3>{name}</h3>
                    <p></p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Documentation Team */}
          <div className="team-category">
            <h2 className="category-title">Documentation & Scheduling</h2>
            <div className="liaison-grid">
              {[
                { img: "elise berthold.jpeg", name: "Elise Berthold" },
                { img: "divya katti.jpeg", name: "Divya Katti" },
                { img: "Disha Satapathy.jpeg", name: "Disha Satapathy" },
                { img: null, name: "Allen Kim" },
                { img: "sanah handu.jpeg", name: "Sanah Handu" }
              ].map((member, idx) => (
                <div key={idx} className="liaison-member">
                  <div className={`member-image ${!member.img ? 'placeholder' : ''}`}>
                    {member.img ? (
                      <img src={`/Content/About us/${member.img}`} alt={member.name} />
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    )}
                  </div>
                  <h3>{member.name}</h3>
                  <p></p>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Coordinators */}
          <div className="team-category">
            <h2 className="category-title">Coordinators</h2>
            <div className="resource-grid">
              {[
                { img: "lindsey olivere.jpg", name: "Lindsey Olivere", role: "Vascular Clinic Coordinator" },
                { img: "divya katti.jpeg", name: "Divya Katti", role: "Vascular Clinic Coordinator" },
                { img: "HeatherDiegert.png", name: "Heather Diegert", role: "Volunteer Coordinator" },
                { img: "ronit deshpande.jpeg", name: "Ronit Deshpande", role: "Volunteer Coordinator" }
              ].map((member, idx) => (
                <div key={idx} className="resource-member">
                  <div className="member-image"><img src={`/Content/About us/${member.img}`} alt={member.name} /></div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resource Tracking */}
          <div className="team-category">
            <h2 className="category-title">Resource Tracking</h2>
            <div className="names-only-list">
              {["Helena Oft", "Allyson Andrews", "Heather Diegert", "Sydney Gregg"].map((name, idx) => (
                <div key={idx} className="name-item">
                  <h3>{name}</h3>
                  <p></p>
                </div>
              ))}
            </div>
          </div>

          {/* Research */}
          <div className="team-category">
            <h2 className="category-title">Research</h2>
            <div className="names-only-list">
              {["Simon Rodriguez", "Colin Henchy", "Ryan McConnell"].map((name, idx) => (
                <div key={idx} className="name-item">
                  <h3>{name}</h3>
                  <p></p>
                </div>
              ))}
            </div>
          </div>

          {/* Discipline Representatives */}
          <div className="team-category">
            <h2 className="category-title">Representatives</h2>
            <div className="names-only-list">
              {[
                { name: "Kieran Ziegenfus", role: "Pharmacy Rep" },
                { name: "Ryan Kielty", role: "Pharmacy Rep" },
                { name: "Ava Giatras", role: "Occupational Therapy Rep" },
                { name: "Grace Osborne", role: "Public Health Rep" },
                { name: "Christian Porter", role: "Social Work Rep" },
                { name: "Josh Kerry", role: "Emergency Medicine Rep" },
                { name: "Leah Klopp", role: "Nutrition Rep" }
              ].map((member, idx) => (
                <div key={idx} className="name-item">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Faculty Advisors & Physicians */}
          <div className="team-category">
            <h2 className="category-title">Faculty Advisors & Physicians</h2>
            <div className="names-only-list">
              {[
                { name: "Dr. Bob Hickey", role: "Physician" },
                { name: "Dr. Adriana Modesto", role: "Dental Sponsor" },
                { name: "Dr. Rebecca Mackenzie", role: "Advisor on PEH" },
                { name: "Dr. Joshua Shulman", role: "Director of Street Addiction Medicine" },
                { name: "Dr. Caroline Passerrello", role: "Director of Nutrition" },
                { name: "Dr. Mary Crossley", role: "Law Street Medicine Course" },
                { name: "Dr. Gregory Castelli", role: "Pharmacist" },
                { name: "Jeanette Valentine", role: "Social Work" },
                { name: "Justin Grotelueschen", role: "Social Work" },
                { name: "Dr. Mark Meyer", role: "Physician" },
                { name: "Dr. Heather Mikes", role: "Physician" },
                { name: "Dr. Enrico Novelli", role: "Physician" }
              ].map((member, idx) => (
                <div key={idx} className="name-item">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers From Section */}
      <section className="volunteers-section">
        <div className="container">
          <h3 className="volunteers-title">Our volunteers are from</h3>

          <div className="schools-grid">
            <div className="schools-column">
              <a href="https://www.publichealth.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>School of Public Health</p>
              </a>
              <a href="https://www.as.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>Dietrich School of Arts and Sciences</p>
              </a>
              <a href="https://www.sci.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>School of Computing and Information</p>
              </a>
              <a href="https://www.engineering.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>Swanson School of Engineering</p>
              </a>
              <a href="https://www.medschool.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>Medical School</p>
              </a>
            </div>
            <div className="schools-column">
              <a href="https://www.pharmacy.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>School of Pharmacy</p>
              </a>
              <a href="https://www.shrs.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>School of Health and Rehabilitation Sciences</p>
              </a>
              <a href="https://www.socialwork.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>School of Social Work</p>
              </a>
              <a href="https://www.law.pitt.edu/" target="_blank" rel="noopener noreferrer" className="school-link">
                <p>School of Law</p>
              </a>
              <span className="school-link">
                <p>And More</p>
              </span>
            </div>
          </div>

          <div className="volunteers-message">
            <p>We're proud to have a diverse team and are always looking for more compassionate hands to join us. Students of all majors and from any school are welcome—no experience needed, just a heart for service.</p>
          </div>

          <div className="cta-section">
            <Link to="/volunteer" className="btn btn-primary">Get Involved</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;