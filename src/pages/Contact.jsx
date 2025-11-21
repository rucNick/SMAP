import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      {/* Hero Section with Background */}
      <section className="hero-section contact-hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="contact-hero-text">
            <h1 className="page-title">Contact us</h1>
            <p className="page-subtitle">
              Join our email list to get updates on events, volunteering opportunities, and street rounds.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-wrapper">
            {/* Simplified Email Signup Form */}
            <form
              action="https://streetmedatpitt.us9.list-manage.com/subscribe/post?u=ad34f48582402d8d5f518332c&amp;id=51cdb5149f&amp;f_id=006f05e1f0"
              method="post"
              id="email-signup-form"
              target="_blank"
            >
              <h2>Stay Connected</h2>

              <p className="form-description">* indicates required</p>

              <div className="form-group">
                <label htmlFor="FNAME">First Name *</label>
                <input type="text" name="FNAME" id="FNAME" required />
              </div>

              <div className="form-group">
                <label htmlFor="LNAME">Last Name *</label>
                <input type="text" name="LNAME" id="LNAME" required />
              </div>

              <div className="form-group">
                <label htmlFor="EMAIL">Email Address *</label>
                <input type="email" name="EMAIL" id="EMAIL" required />
              </div>

              {/* Hidden field for bot protection */}
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input type="text" name="b_ad34f48582402d8d5f518332c_51cdb5149f" tabIndex="-1" />
              </div>

              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>

          {/* Additional Contact Information */}
          <div className="contact-info">
            <h2>Other Ways to Connect</h2>
            <div className="contact-cards">
              <div className="contact-card">
                <h3>Email Us</h3>
                <p>For general inquiries, partnership opportunities, or questions about our programs.</p>
                <a href="mailto:info@streetmedatpitt.org" className="contact-link">
                  info@streetmedatpitt.org
                </a>
              </div>
              <div className="contact-card">
                <h3>Get Involved</h3>
                <p>Interested in volunteering? Learn more about our weekly street rounds.</p>
                <Link to="/volunteer" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;