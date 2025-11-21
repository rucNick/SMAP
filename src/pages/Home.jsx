import { useState } from 'react';
import { Link } from 'react-router-dom';
import MetricCard from '../components/MetricCard';
import { DISCIPLINES } from '../utils/disciplines';

function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is homelessness?",
      answer: "Homelessness is when someone doesn't have a stable, safe, or adequate place to live. Instead, they may have to stay in shelters, cars, or outdoors until they can afford housing or receive help through a housing assistance program that provides support for finding and maintaining a home."
    },
    {
      question: "What do we do?",
      answer: "Street Med is a student-run organization that provides medical outreach, resources, and compassionate support to individuals experiencing homelessness in Pittsburgh through weekly street rounds, donation drives, educational events, research, community partnerships and more."
    },
    {
      question: "How to get involved?",
      answer: "Join us on rounds or help with resources! Check out our Get Involved page for more!"
    },
    {
      question: "How does it affect health?",
      answer: "Higher rates of wounds, infections, untreated chronic diseases, mental-health crises, and exposure injuries. Life expectancy is at least 2 decades shorter than the housed population."
    },
    {
      question: "Why don't more people use shelters?",
      answer: "Limited beds, barrier to entry, strict rules (curfews, sobriety, no pets/partners), safety concerns, crowding, lack of privacy, and past trauma push some to camp or stay in vehicles instead."
    }
  ];

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: "Medical Care",
      description: "Basic health assessments, wound care, and vital sign monitoring during weekly street rounds."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      ),
      title: "Social Support",
      description: "Building trust and relationships while distributing essential supplies and resources."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
      title: "Connections",
      description: "Linking individuals to long-term healthcare, housing, and social services."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      title: "Education",
      description: "Training healthcare students in compassionate, equitable care practices."
    }
  ];

  const involvementCards = [
    {
      image: "/Content/Home/team.jpg",
      alt: "Volunteering",
      title: "Volunteering",
      description: "Join our team of dedicated volunteers making a difference in the community every week.",
      link: "/volunteer",
      linkText: "Join Us"
    },
    {
      image: "/Content/Home/event.jpg",
      alt: "Events",
      title: "Events",
      description: "Participate in our community events, workshops, and fundraisers throughout the year.",
      link: "/events",
      linkText: "See Events"
    },
    {
      image: "/Content/Home/rounds.jpg",
      alt: "Street Rounds",
      title: "Street Rounds",
      description: "Learn about our weekly street rounds providing direct medical care and support.",
      link: "/get-involved",
      linkText: "Get Started"
    }
  ];

  const sponsors = [
    { name: "Cooper Fund of Shadyside Hospital Foundation", url: "https://shadysidehospitalfoundation.org/donate/" },
    { name: "Pitt Med", url: "https://www.medschool.pitt.edu/" },
    { name: "Pitt Public Health", url: "https://www.publichealth.pitt.edu/" },
    { name: "Pitt Philanthropy and funders", url: "https://pae.pitt.edu/s/1729/2-pittsburgh/interior.aspx?gid=2&pgid=3010" },
    { name: "Pitt Eats", url: "https://dineoncampus.com/pitt/meal-donation" },
    { name: "All our other generous donors", url: null }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div 
          className="hero-background"
          style={{ backgroundImage: 'url(/Content/Home/bridge.jpg)' }}
        >
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title animated">Street Medicine at Pitt</h1>
            <p className="hero-description animated">
              We are committed to improving health outcomes for people experiencing homelessness, reducing stigma,
              and fostering meaningful community partnerships that create lasting change.
            </p>

            {/* Metrics with Icons */}
            <div className="metrics-container">
              <MetricCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                }
                target={32}
                label="Disciplines Involved"
                disciplines={DISCIPLINES}
              />
              <MetricCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                }
                target={500}
                label="Encounters"
              />
              <MetricCard
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                target={1200}
                label="Volunteer Hours"
              />
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              <a href="/resources" className="btn btn-primary">View Resources</a>
              <a href="/donate" className="btn btn-secondary">Support Us</a>
              <a href="/volunteer" className="btn btn-tertiary">Join Our Team</a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator" onClick={scrollToContent}>
          <span className="scroll-text">Discover More</span>
          <svg viewBox="0 0 24 24">
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
          </svg>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="quick-stats-bar">
        <div className="container">
          <div className="stats-grid-expanded">
            <div className="stat-item">
              <span className="stat-value">200+</span>
              <span className="stat-label">Weeks of Service</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">50+</span>
              <span className="stat-label">Weekly Volunteers</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">5</span>
              <span className="stat-label">Locations Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Commitment</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">25+</span>
              <span className="stat-label">Learners Weekly</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">10+</span>
              <span className="stat-label">Communities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="what-we-do-photos">
        <div className="container two-col-photos">
          <div className="photos-text">
            <h2 className="section-header">Who We Are</h2>
            <div className="section-underline"></div>
            <p className="lead">
              Street Medicine at Pitt is a student-run organization dedicated to bringing compassionate,
              person-centered healthcare directly to those experiencing homelessness in Pittsburgh.
              We believe that access to care is a human right — and that meaningful change begins
              with trust, respect, and presence.
            </p>
            <p className="lead">
              Our team of students, clinicians, and community partners works together to reduce
              barriers to healthcare, advocate for social equity, and build sustainable relationships
              that extend beyond a single encounter. Every week, we meet individuals where they are —
              in encampments, shelters, and on the streets — offering medical care, connection, and dignity.
            </p>
          </div>

          <div className="photos-right-grid">
            <figure className="tile tile-tall">
              <img src="/Content/Volunteer/f87dd0d59820de4baebb8479a940b33a.jpg" alt="Prepping supplies before rounds" loading="lazy" />
            </figure>
            <figure className="tile">
              <img src="/Content/Volunteer/048132af5e4a32730088f5f14b9e7ba4.jpg" alt="Street Rounds Photo 17" className="rightTopPhoto" loading="lazy" />
            </figure>
            <figure className="tile">
              <img src="/Content/Volunteer/eaf1b7edfcb017b56e451276c2e5e1c9.jpg" alt="Street Rounds Photo 6" className="rightMiddlePhoto" loading="lazy" />
            </figure>
            <figure className="tile">
              <img src="/Content/Volunteer/f4ee4a184900cb2237bd59eb967d843b.jpg" alt="Conversation and check-ins" loading="lazy" />
            </figure>
            <figure className="tile">
              <img src="/Content/Volunteer/8a3425fc76a1229f0dfd4291a581d57a.jpg" alt="Street Rounds Photo 24" className="bottomMiddlePhoto" loading="lazy" />
            </figure>
            <figure className="tile">
              <img src="/Content/Volunteer/fb0f25152860054a46f1a88364b0230d.jpg" alt="Warm clothing and hygiene kits" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <div className="container">
          <h2 className="section-header">What We Do</h2>
          <div className="section-underline"></div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="get-involved">
        <div className="container">
          <h2 className="section-header">Get Involved</h2>
          <div className="section-underline"></div>

          {/* Course Credit Callout */}
          <div className="course-credit-callout">
            <svg className="credit-callout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <p>
              <strong>Pitt Students:</strong> <Link to="/get-involved">Street rounds can count toward course credit in Public Health,
              Nutrition, Engineering, Social Work, Medicine, Computer Science, Dental, and more!</Link>
            </p>
          </div>

          <div className="involvement-grid">
            {involvementCards.map((card, index) => (
              <div key={index} className="involvement-card">
                <div className="card-image">
                  <img src={card.image} alt={card.alt} />
                  <div className="card-overlay">
                    <Link to={card.link}>Learn More</Link>
                  </div>
                </div>
                <div className="card-content">
                  <h3><Link to={card.link}>{card.title}</Link></h3>
                  <p>{card.description}</p>
                  <Link to={card.link} className="card-link">{card.linkText} →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br /> <br /> <br />
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className="faq-arrow">▼</span>
              </div>
              <div className="faq-answer">
                {faq.question === "How does it affect health?" ? (
                  <>
                    <p>{faq.answer}</p>
                    <p>
                      <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5739436/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
                        Mortality Among the Homeless: Causes and Meteorological Relationships
                      </a>
                    </p>
                  </>
                ) : faq.question === "How to get involved?" ? (
                  <p>
                    Join us on rounds or help with resources! Check out our <Link to="/get-involved">Get Involved</Link> page for more!
                  </p>
                ) : (
                  <p>{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors" style={{ padding: '60px 0', background: 'white' }}>
        <div className="container">
          <h2 style={{
            fontFamily: "'Lora', serif",
            fontSize: '48px',
            fontWeight: '700',
            color: '#001f54',
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            Thank you to our Sponsors!
          </h2>

          <div className="sponsors-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px',
            maxWidth: '800px',
            margin: '0 auto 50px'
          }}>
            <div className="sponsors-column" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {sponsors.slice(0, 3).map((sponsor, index) => (
                sponsor.url ? (
                  <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="sponsor-item" style={{
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}>
                    <p style={{
                      fontFamily: "'Lora', serif",
                      fontSize: '17px',
                      fontWeight: '400',
                      color: '#333',
                      textAlign: 'center',
                      padding: '15px',
                      margin: '0',
                      background: 'white',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}>
                      {sponsor.name}
                    </p>
                  </a>
                ) : (
                  <div key={index} className="sponsor-item" style={{
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}>
                    <p style={{
                      fontFamily: "'Lora', serif",
                      fontSize: '17px',
                      fontWeight: '400',
                      color: '#333',
                      textAlign: 'center',
                      padding: '15px',
                      margin: '0',
                      background: 'white',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}>
                      {sponsor.name}
                    </p>
                  </div>
                )
              ))}
            </div>
            <div className="sponsors-column" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {sponsors.slice(3).map((sponsor, index) => (
                sponsor.url ? (
                  <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="sponsor-item" style={{
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}>
                    <p style={{
                      fontFamily: "'Lora', serif",
                      fontSize: '17px',
                      fontWeight: '400',
                      color: '#333',
                      textAlign: 'center',
                      padding: '15px',
                      margin: '0',
                      background: 'white',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}>
                      {sponsor.name}
                    </p>
                  </a>
                ) : (
                  <div key={index} className="sponsor-item" style={{
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}>
                    <p style={{
                      fontFamily: "'Lora', serif",
                      fontSize: '17px',
                      fontWeight: '400',
                      color: '#333',
                      textAlign: 'center',
                      padding: '15px',
                      margin: '0',
                      background: 'white',
                      border: '1px solid #e0e0e0',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}>
                      {sponsor.name}
                    </p>
                  </div>
                )
              ))}
            </div>
          </div>

          <div className="donate-section" style={{ textAlign: 'center', marginTop: '40px' }}>
            <p style={{
              fontFamily: "'Lora', serif",
              fontSize: '18px',
              fontWeight: '400',
              color: '#333',
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto 40px'
            }}>
              Want to support our mission? Consider making a donation to help us continue providing healthcare to those who need it most.
            </p>
            <Link to="/donate" className="btn btn-primary" style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: '#FFB81C',
              color: '#001f54',
              textDecoration: 'none',
              fontWeight: '600',
              borderRadius: '5px',
              transition: 'all 0.3s ease'
            }}>
              Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;