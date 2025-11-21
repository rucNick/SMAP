// src/pages/Volunteer.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Volunteer() {
  return (
    <>
      {/* Hero Section - FIXED with content */}
      <section className="volunteer-hero">
        <div 
          className="hero-background"
          style={{ backgroundImage: "url('/Content/Volunteer/bd815a1f59d7d8b788eb5059463f5dab.jpg')" }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="page-title">Get Involved</h1>
          <p className="page-subtitle">Join our mission to provide healthcare and human connection to Pittsburgh's unhoused community</p>
        </div>
      </section>

      {/* Rest of the component stays the same... */}
      <section className="street-rounds-section">
        <div className="container">
          <h1 className="section-title">Street Rounds</h1>

          <div className="two-column-layout">
            <div className="content-column">
              <div className="intro-content">
                <p>
                  Each week, we walk through neighborhoods like Downtown and East Liberty, engaging with
                  unhoused community members through conversation, connection, and care. We offer basic
                  medical assessments, wound care, hygiene items, and harm-reduction supplies—meeting people
                  where they are and building trust over time.
                </p>
              </div>

              <div className="volunteer-benefits">
                <h3>As a volunteer, you'll gain:</h3>
                <ul>
                  <li>First-hand insight into the realities of homelessness</li>
                  <li>A deeper sense of empathy and human connection</li>
                  <li>Experience in active, judgment-free listening</li>
                  <li>A meaningful sense of purpose and service</li>
                  <li>Exposure to street-based care</li>
                  <li>A new perspective on what it means to meet people where they are</li>
                </ul>
              </div>
            </div>

            {/* Street Rounds Gallery - FIXED structure */}
            <div className="gallery-column">
              <div className="photo-carousel" id="street-rounds-carousel">
                <Carousel 
                  images={[
                    '/Content/Volunteer/f87dd0d59820de4baebb8479a940b33a.jpg',
                    '/Content/Volunteer/aa37e4ecfe3c34528d1f1ed9968bfff6.jpg',
                    '/Content/Volunteer/180f145efb178b2654b572444f7f21d2.jpg',
                    '/Content/Volunteer/fb0f25152860054a46f1a88364b0230d.jpg',
                    '/Content/Volunteer/f4ee4a184900cb2237bd59eb967d843b.jpg',
                    '/Content/Volunteer/eaf1b7edfcb017b56e451276c2e5e1c9.jpg',
                    '/Content/Volunteer/9f60f1c198f07ee22b600c1f773c8e98.jpg',
                    '/Content/Volunteer/58dfc777e8ba7b8dd9048f97ceaa96e7.jpg',
                    '/Content/Volunteer/abdc8cf316cda774054323a09c180a5b.jpg',
                    '/Content/Volunteer/4593959232964bb55c79ebd1c832b020.jpg',
                    '/Content/Volunteer/eb1b416caaab132245fce149c484ec2d.jpg',
                    '/Content/Volunteer/2739ff18735013ff508546186a09de29.jpg',
                    '/Content/Volunteer/22d53dca032d904c7721f73bffc118de.jpg',
                    '/Content/Volunteer/89212a02538fc945da580678b1e231e2.jpg',
                    '/Content/Volunteer/9c3f523290e7eadb7afa29259e27d4c2.jpg',
                    '/Content/Volunteer/4051e9ade1cd4e2d9c8d058088f5960d.jpg',
                    '/Content/Volunteer/048132af5e4a32730088f5f14b9e7ba4.jpg',
                    '/Content/Volunteer/d6434f01dabe8993bbf6bf5a39643328.jpg',
                    '/Content/Volunteer/5b8760b0b7d494a9eef82e0ef4e2e51d.jpg',
                    '/Content/Volunteer/1323de8e332ed2d12db164844192985f.jpg',
                    '/Content/Volunteer/b1bca2bd4b2cad44b6c85b9c69966323.jpg',
                    '/Content/Volunteer/6ddc58c1ce8b6209ccc038b89825463a.jpg',
                    '/Content/Volunteer/34c7bc239e1ebd4387d82bc3fb31a310.jpg',
                    '/Content/Volunteer/8a3425fc76a1229f0dfd4291a581d57a.jpg',
                    '/Content/Volunteer/d697f06026fb29588f8346755a929ee9.jpg'
                  ]}
                  altPrefix="Street Rounds Photo"
                />
              </div>
            </div>
          </div>

          <div className="cta-section">
            <Link to="/orientation" className="btn btn-primary">Volunteer for Rounds</Link>
          </div>
        </div>
      </section>

      {/* Resource Team Section */}
      <section className="resource-team-section">
        <div className="container">
          <h2 className="section-title">Resource Team</h2>

          <div className="two-column-layout reverse">
            {/* Resource Team Gallery - FIXED structure */}
            <div className="gallery-column">
              <div className="resource-carousel" id="resource-team-carousel">
                <Carousel 
                  images={[
                    '/Content/Volunteer/391cea59f8ebd1f6798ff8aae705ff43.jpg',
                    '/Content/Volunteer/df4b51c4408f0b87241df90be0aed0ac.jpg',
                    '/Content/Volunteer/0855a3509e4b77fb9880241108dcf585.jpg',
                    '/Content/Volunteer/178c3af63c3b6439a06d13f0630ba290.jpg',
                    '/Content/Volunteer/fde8675b50f757e6700969c0b76431f0.jpg'
                  ]}
                  altPrefix="Resource Team Photo"
                />
              </div>
            </div>

            <div className="content-column">
              <div className="resource-text">
                <p className="intro-text">
                  The Resource Team makes sure donations don't sit on shelves — they get
                  sorted, delivered, and used where they're needed most.
                </p>

                <div className="volunteer-benefits">
                  <h3>What you'll do:</h3>
                  <ul>
                    <li>Sort and organize donations</li>
                    <li>Deliver resources during outreach rounds</li>
                    <li>Pick up donations from partners and drop-off sites</li>
                    <li>Track inventory so nothing goes to waste</li>
                    <li>Distribute supplies and donations directly to the community</li>
                  </ul>

                  <p>
                    By joining, you'll be part of the behind-the-scenes work that keeps everything running
                    smoothly and ensures real impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <a 
              href="https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&FormId=ifT5nqDg606HzDpSYRL9DUtEKRJcjgVCtWlabZmN9yFURVBOOFk3NTEyWVBPNDQ3MFdKS1JEWFMySC4u&Token=931d868ce5d64711933a7baca8f4191d"
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-highlight"
            >
              How to Help
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// FIXED Carousel Component with proper structure
function Carousel({ images, altPrefix }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${altPrefix} ${index + 1}`}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          />
        ))}
      </div>
      <button 
        className="carousel-btn prev" 
        onClick={prevSlide} 
        aria-label="Previous image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button 
        className="carousel-btn next" 
        onClick={nextSlide} 
        aria-label="Next image"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Volunteer;