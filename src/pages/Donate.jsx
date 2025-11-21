function Donate() {
  const donationOptions = [
    {
      title: "Amazon Wishlist",
      image: "/Content/Donate/Amazon_logo.jpg",
      overlayText: "Shop Our Wishlist",
      description: "Want to donate specific items we need most? Visit our",
      linkText: "Amazon Wishlist",
      fullDescription: "and have supplies shipped straight to us. These items go directly into the hands of our outreach teams and community members.",
      url: "https://www.amazon.com/hz/wishlist/ls/3RYJSQJZP3NMS?ref_=wl_share",
      buttonText: "View Wishlist",
      buttonClass: "btn-primary"
    },
    {
      title: "Direct Giving",
      image: "/Content/Donate/Give_To_Pitt.jpg",
      overlayText: "Make a Donation",
      description: "Prefer to",
      linkText: "give",
      fullDescription: "directly? Your financial support allows us to purchase essential supplies, cover distribution costs, and respond quickly when needs arise.",
      url: "https://securelb.imodules.com/s/1729/18/form-giving.aspx?sid=1729&gid=2&pgid=785&cid=1615&dids=21470&appealcode=25STMED&sort=1&bledit=1",
      buttonText: "Donate Now",
      buttonClass: "btn-secondary"
    },
    {
      title: "Shadyside Hospital Foundation",
      image: "/Content/Donate/ShadysideHospitalFoundation.png",
      overlayText: "Support Our Partner",
      description: "Support our partner organization through the",
      linkText: "Shadyside Hospital Foundation",
      fullDescription: ". Your contribution helps strengthen community healthcare initiatives and outreach programs. Please specify the Cooper Fund when donating.",
      url: "https://shadysidehospitalfoundation.org/donate/",
      buttonText: "Contribute",
      buttonClass: "btn-primary"
    }
  ];

  return (
    <>
      {/* Hero Section with Background */}
      <section className="donate-hero">
        <div 
          className="hero-background" 
          style={{ backgroundImage: "url('/Content/Donate/Bridge.jpg')" }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="page-title">Supplies and Support</h1>
        </div>
      </section>

      {/* Donation Options Section */}
      <section className="donation-section">
        <div className="container">
          <div className="donation-cards-wrapper">
            {donationOptions.map((option, index) => (
              <div key={index} className="donation-card">
                <div className="donation-image-wrapper">
                  <a 
                    href={option.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="donation-link"
                  >
                    <img 
                      src={option.image} 
                      alt={option.title} 
                      className="donation-image" 
                    />
                    <div className="donation-overlay">
                      <span className="overlay-text">{option.overlayText}</span>
                    </div>
                  </a>
                </div>
                <div className="donation-content">
                  <h2>{option.title}</h2>
                  <p>
                    {option.description} <a 
                      href={option.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-link"
                    >
                      {option.linkText}
                    </a> {option.fullDescription}
                  </p>
                  <a 
                    href={option.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`btn ${option.buttonClass}`}
                  >
                    {option.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Donate;