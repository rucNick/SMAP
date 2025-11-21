// src/pages/Resources.jsx
import { useState } from 'react';

function Resources() {
  const [activeTab, setActiveTab] = useState('emergency');
  const [activeFilter, setActiveFilter] = useState('all');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
  };

  const shouldShowShelter = (shelterData) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'wheelchair' && shelterData.wheelchair) return true;
    if (activeFilter === 'youth' && shelterData.youth) return true;
    if (activeFilter === 'no-curfew' && shelterData.noCurfew) return true;
    return false;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="resources-hero">
        <div 
          className="hero-background"
          style={{ backgroundImage: "url('/Content/Resources/bd815a1f59d7d8b788eb5059463f5dab.jpg')" }}
        ></div>
        <div className="hero-content">
          <h1 className="page-title">Resources</h1>
          <p className="page-subtitle">Connecting our community with essential services and support</p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="resource-tabs">
        <div className="container">
          <div className="tab-navigation">
            <button 
              className={`tab-button ${activeTab === 'emergency' ? 'active' : ''}`}
              onClick={() => handleTabClick('emergency')}
            >
              <span className="emoji">🚨</span><span className="text">Emergency</span>
            </button>
            <button 
              className={`tab-button ${activeTab === 'shelters' ? 'active' : ''}`}
              onClick={() => handleTabClick('shelters')}
            >
              <span className="emoji">🏠</span><span className="text">Shelters</span>
            </button>
            <button 
              className={`tab-button ${activeTab === 'dropin' ? 'active' : ''}`}
              onClick={() => handleTabClick('dropin')}
            >
              <span className="emoji">☕</span><span className="text">Drop-in</span>
            </button>
            <button 
              className={`tab-button ${activeTab === 'healthcare' ? 'active' : ''}`}
              onClick={() => handleTabClick('healthcare')}
            >
              <span className="emoji">🏥</span><span className="text">Healthcare</span>
            </button>
            <button 
              className={`tab-button ${activeTab === 'food' ? 'active' : ''}`}
              onClick={() => handleTabClick('food')}
            >
              <span className="emoji">🍽️</span><span className="text">Food</span>
            </button>
            <button 
              className={`tab-button ${activeTab === 'support' ? 'active' : ''}`}
              onClick={() => handleTabClick('support')}
            >
              <span className="emoji">💬</span><span className="text">Support</span>
            </button>
            <button 
              className={`tab-button ${activeTab === 'bigburgh' ? 'active' : ''}`}
              onClick={() => handleTabClick('bigburgh')}
            >
              <span className="emoji">🐦</span><span className="text">BigBurgh</span>
            </button>
          </div>
        </div>
      </section>

      {/* Emergency Tab Content */}
      <section className={`tab-content ${activeTab === 'emergency' ? 'active' : ''}`} id="emergency-tab">
        <div className="container">
          <h2 className="section-title">24/7 Emergency Services</h2>
          <div className="resource-cards">
            <div className="resource-card emergency-card">
              <h3>Immediate Crisis</h3>
              <ul className="resource-list">
                <li>
                  <strong>Emergency Services</strong>
                  <span className="resource-details">📞 911<br />
                    Medical, Police, Fire</span>
                </li>
                <li>
                  <strong>Suicide & Crisis Lifeline</strong>
                  <span className="resource-details">📞 988<br />
                    24/7 Mental Health Support</span>
                </li>
                <li>
                  <strong>Poison Control</strong>
                  <span className="resource-details">📞 1-800-222-1222</span>
                </li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Local Crisis Services</h3>
              <ul className="resource-list">
                <li>
                  <strong>Resolve Crisis Services</strong>
                  <span className="resource-details">📞 1-888-796-8226<br />
                    📍 <a href="https://maps.google.com/?q=333+North+Braddock+Ave+Pittsburgh+PA+15208" target="_blank" rel="noopener noreferrer">333 North Braddock Ave</a><br />
                    24/7 Crisis Support</span>
                </li>
                <li>
                  <strong>Allegheny Link</strong>
                  <span className="resource-details">📞 1-866-730-2368<br />
                    Housing Crisis Support<br />
                    🌐 <a href="https://www.alleghenycounty.us/Services/Housing/Allegheny-Link" target="_blank" rel="noopener noreferrer">Visit Allegheny Link Website</a></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Shelters Tab Content */}
      <section className={`tab-content ${activeTab === 'shelters' ? 'active' : ''}`} id="shelters-tab">
        <div className="container">
          <h2 className="section-title">Emergency Shelters</h2>

          <div className="shelter-info-cards">
            <a href="https://connect.alleghenycounty.us/wp-content/uploads/2022/09/Allegheny-County-CoC-Drop-in-and-Engagement-Centers.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/Content/Resources/Dropin_1.jpg" alt="Comprehensive Shelter List" className="info-card-img" />
            </a>
            <a href="https://connect.alleghenycounty.us/wp-content/uploads/2022/09/Allegheny-County-CoC-Drop-in-and-Engagement-Centers.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/Content/Resources/dropin_2.jpg" alt="Shelters by Gender Identity" className="info-card-img" />
            </a>
          </div>

          <div className="filter-container">
            <div className="filter-buttons">
              <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => handleFilterClick('all')}>All Shelters</button>
              <button className={`filter-btn ${activeFilter === 'wheelchair' ? 'active' : ''}`} onClick={() => handleFilterClick('wheelchair')}>♿ Wheelchair Accessible</button>
              <button className={`filter-btn ${activeFilter === 'youth' ? 'active' : ''}`} onClick={() => handleFilterClick('youth')}>Youth (18-24)</button>
              <button className={`filter-btn ${activeFilter === 'no-curfew' ? 'active' : ''}`} onClick={() => handleFilterClick('no-curfew')}>No Curfew</button>
            </div>
          </div>

          <div className="resource-cards" id="shelter-cards">
            <div className={`resource-card shelter-item ${shouldShowShelter({ wheelchair: true }) ? '' : 'hidden'}`} style={{ display: shouldShowShelter({ wheelchair: true }) ? 'block' : 'none' }}>
              <h3>All Gender Shelters</h3>
              <ul className="resource-list">
                <li className={activeFilter === 'wheelchair' || activeFilter === 'all' ? '' : 'hidden'} style={{ display: activeFilter === 'wheelchair' || activeFilter === 'all' ? 'block' : 'none' }}>
                  <strong>Second Avenue Commons</strong>
                  <span className="resource-details">📍 <a href="https://maps.app.goo.gl/WUTxzTCraWisnhBL7" target="_blank" rel="noopener noreferrer">700 Second Avenue</a><br />
                    📞 412-775-9001 (24/7)<br />
                    <span className="wheelchair-tag">♿ Wheelchair accessible</span> • Walk-ins OK<br />
                    ⏰ Curfew: 11:00 PM</span>
                </li>
                <li className={activeFilter === 'wheelchair' || activeFilter === 'all' ? '' : 'hidden'} style={{ display: activeFilter === 'wheelchair' || activeFilter === 'all' ? 'block' : 'none' }}>
                  <strong>East End Cooperative Ministry</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=6140+Station+Street+Pittsburgh+PA+15206" target="_blank" rel="noopener noreferrer">6140 Station Street, East Liberty</a><br />
                    📞 412-345-7135<br />
                    <span className="wheelchair-tag">♿ Wheelchair accessible</span><br />
                    ⏰ Curfew: 6:00 PM</span>
                </li>
                <li className={activeFilter === 'youth' || activeFilter === 'wheelchair' || activeFilter === 'all' ? '' : 'hidden'} style={{ display: activeFilter === 'youth' || activeFilter === 'wheelchair' || activeFilter === 'all' ? 'block' : 'none' }}>
                  <strong>FAMILY LINKS <span className="youth-tag">(Youth 18-24)</span></strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=1601+Fifth+Avenue+Pittsburgh+PA+15219" target="_blank" rel="noopener noreferrer">1601 Fifth Avenue, Uptown</a><br />
                    📞 412-924-0494 (24/7)<br />
                    <span className="wheelchair-tag">♿ Wheelchair accessible</span><br />
                    ⏰ Curfew: 11:00 PM</span>
                </li>
                <li className={activeFilter === 'no-curfew' || activeFilter === 'wheelchair' || activeFilter === 'all' ? '' : 'hidden'} style={{ display: activeFilter === 'no-curfew' || activeFilter === 'wheelchair' || activeFilter === 'all' ? 'block' : 'none' }}>
                  <strong>McKeesport Downtown Housing</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=523+Sinclair+Street+McKeesport+PA+15132" target="_blank" rel="noopener noreferrer">523 Sinclair Street, McKeesport</a><br />
                    📞 412-664-9168 (24/7)<br />
                    <span className="wheelchair-tag">♿ Wheelchair accessible</span><br />
                    <span className="no-curfew-tag">⏰ No Curfew</span></span>
                </li>
                <li className={activeFilter === 'wheelchair' || activeFilter === 'all' ? '' : 'hidden'} style={{ display: activeFilter === 'wheelchair' || activeFilter === 'all' ? 'block' : 'none' }}>
                  <strong>Team PSBG Low Barrier Shelter McKeesport</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=523+Sinclair+Street+McKeesport+PA+15132" target="_blank" rel="noopener noreferrer">523 Sinclair Street, Rear McKeesport</a><br />
                    📞 724-244-6565 (24/7)<br />
                    <span className="wheelchair-tag">♿ Wheelchair accessible</span><br />
                    ⏰ Curfew: 10:00 PM</span>
                </li>
              </ul>
            </div>

            <div className={`resource-card shelter-item ${shouldShowShelter({ wheelchair: true }) ? '' : 'hidden'}`} style={{ display: shouldShowShelter({ wheelchair: true }) ? 'block' : 'none' }}>
              <h3>Gender-Specific Shelters</h3>
              <ul className="resource-list">
                <li className={activeFilter === 'wheelchair' || activeFilter === 'all' ? '' : 'hidden'} style={{ display: activeFilter === 'wheelchair' || activeFilter === 'all' ? 'block' : 'none' }}>
                  <strong>Bethlehem Haven (Women/Trans/NB)</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=903+Watson+Street+Pittsburgh+PA+15219" target="_blank" rel="noopener noreferrer">903 Watson Street</a><br />
                    📞 412-389-9702 (24/7)<br />
                    <span className="wheelchair-tag">♿ Wheelchair accessible</span><br />
                    ⏰ Curfew: 10:00 PM (exceptions for special circumstances)</span>
                </li>
                <li className={activeFilter === 'wheelchair' || activeFilter === 'all' ? '' : 'hidden'} style={{ display: activeFilter === 'wheelchair' || activeFilter === 'all' ? 'block' : 'none' }}>
                  <strong>Light of Life (Men/Trans/NB)</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=234+Voeghtly+Street+Pittsburgh+PA+15212" target="_blank" rel="noopener noreferrer">234 Voeghtly St, Northside</a><br />
                    📞 412-803-4120 (24/7)<br />
                    <span className="wheelchair-tag">♿ Wheelchair accessible</span><br />
                    ⏰ Curfew: 6:30 PM</span>
                </li>
                <li className={activeFilter === 'wheelchair' || activeFilter === 'all' ? '' : 'hidden'} style={{ display: activeFilter === 'wheelchair' || activeFilter === 'all' ? 'block' : 'none' }}>
                  <strong>Pleasant Valley (Men/NB)</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=1601+Brighton+Road+Pittsburgh+PA+15212" target="_blank" rel="noopener noreferrer">1601 Brighton Rd, Northside</a><br />
                    📞 412-321-4272<br />
                    <span className="wheelchair-tag">♿ Wheelchair accessible</span><br />
                    ⏰ Curfew: 7:30 PM (exceptions for employment)</span>
                </li>
              </ul>
            </div>

            <div className={`resource-card shelter-item ${shouldShowShelter({ noCurfew: true }) ? '' : 'hidden'}`} style={{ display: shouldShowShelter({ noCurfew: true }) ? 'block' : 'none' }}>
              <h3>Veterans Shelter</h3>
              <ul className="resource-list">
                <li>
                  <strong>Project Journey (Veterans Only)</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=2934+Smallman+Street+Pittsburgh+PA+15201" target="_blank" rel="noopener noreferrer">2934 Smallman St, Strip District</a><br />
                    📞 844-VLP-VETS<br />
                    Walk-in or online: <a href="https://www.neverforgetvets.org" target="_blank" rel="noopener noreferrer">neverforgetvets.org</a><br />
                    <span className="no-curfew-tag">⏰ No Curfew</span></span>
                </li>
              </ul>
            </div>

            <div className="resource-card">
              <h3>Domestic Violence Shelters</h3>
              <ul className="resource-list">
                <li>
                  <strong>Alle-Kiski Hope Center</strong>
                  <span className="resource-details">📞 1-888-299-4673<br />
                    *Serves anyone regardless of identified gender</span>
                </li>
                <li>
                  <strong>Center for Victims</strong>
                  <span className="resource-details">📞 1-866-644-2882<br />
                    *Serves anyone regardless of identified gender</span>
                </li>
                <li>
                  <strong>Women's Center and Shelter</strong>
                  <span className="resource-details">📞 412-687-8005<br />
                    *Serves anyone regardless of identified gender</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Drop-in Centers Tab Content */}
      <section className={`tab-content ${activeTab === 'dropin' ? 'active' : ''}`} id="dropin-tab">
        <div className="container">
          <h2 className="section-title">Drop-in & Engagement Centers</h2>

          <div className="dropin-info-cards">
            <a href="https://connect.alleghenycounty.us/wp-content/uploads/2022/09/Allegheny-County-CoC-Drop-in-and-Engagement-Centers.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/Content/Resources/dropin_3.jpg" alt="Drop-in Centers List" className="info-card-img" />
            </a>
            <a href="https://connect.alleghenycounty.us/wp-content/uploads/2022/09/Allegheny-County-CoC-Drop-in-and-Engagement-Centers.pdf" target="_blank" rel="noopener noreferrer">
              <img src="/Content/Resources/dropin_4.jpg" alt="Drop-in Centers Services" className="info-card-img" />
            </a>
          </div>

          <div className="resource-cards">
            <div className="resource-card">
              <h3>Day Centers - Open to All</h3>
              <ul className="resource-list">
                <li>
                  <strong>Pittsburgh Mercy 2AC Center</strong>
                  <span className="resource-details">📍 <a href="https://maps.app.goo.gl/WUTxzTCraWisnhBL7" target="_blank" rel="noopener noreferrer">700 Second Avenue</a><br />
                    📞 412-775-9001<br />
                    ⏰ Daily 7am-7pm • Overnight 5pm-8am<br />
                    ♿ Wheelchair accessible<br />
                    Services: Meals, Showers, Laundry, Computers, Medical</span>
                </li>
                <li>
                  <strong>412 Youth Zone (Ages 16-23)</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=304+Wood+Street+Pittsburgh+PA" target="_blank" rel="noopener noreferrer">304 Wood St, 6th Floor</a><br />
                    📞 412-902-4068<br />
                    ⏰ M-F: 12pm-5pm (T/TH until 6:30pm), Sat: By appointment<br />
                    Services: Meals, Showers, Laundry, Lockers, Toiletries, Social Support</span>
                </li>
                <li>
                  <strong>Unity Recovery Center</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=801+Bingham+Street+Pittsburgh+PA+15203" target="_blank" rel="noopener noreferrer">801 Bingham St, Southside</a><br />
                    📞 412-586-5372<br />
                    ⏰ 7 days/week 5pm-8am<br />
                    Services: Snacks, Showers, Clothing</span>
                </li>
                <li>
                  <strong>Jubilee Kitchen</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=2005+Wyandotte+Street+Pittsburgh+PA+15219" target="_blank" rel="noopener noreferrer">2005 Wyandotte St, Uptown</a><br />
                    📞 412-261-5417<br />
                    ⏰ Daily 6:30am-1pm (3pm on Code Blue)<br />
                    Services: Breakfast, Lunch, To-go Dinner, Showers, Groceries</span>
                </li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Specialized Centers</h3>
              <ul className="resource-list">
                <li>
                  <strong>Veteran's Place (Veterans Only)</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=945+Washington+Blvd+Pittsburgh+PA" target="_blank" rel="noopener noreferrer">945 Washington Blvd, Homewood</a><br />
                    📞 412-363-0500<br />
                    ⏰ M-F: 8am-3pm<br />
                    Services: Meals, Showers, Laundry, Counseling, Computers</span>
                </li>
                <li>
                  <strong>Light of Life</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=234+Voeghtly+Street+Pittsburgh+PA+15212" target="_blank" rel="noopener noreferrer">234 Voeghtly St, Northside</a><br />
                    📞 412-398-7373<br />
                    ⏰ M-F: 9am-4pm<br />
                    Services: Meals, Limited Showers</span>
                </li>
                <li>
                  <strong>Pleasant Valley (Men Only)</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=1601+Brighton+Road+Pittsburgh+PA+15212" target="_blank" rel="noopener noreferrer">1601 Brighton Road, Northside</a><br />
                    📞 412-321-4272<br />
                    ⏰ M-F: 9am-11am (Limited)<br />
                    Services: Limited services available</span>
                </li>
                <li>
                  <strong>Proud Haven QMNTY Center & YOUth Drop In</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=525+East+Ohio+Street+Pittsburgh+PA" target="_blank" rel="noopener noreferrer">525 East Ohio St, Northside</a><br />
                    📞 412-346-1324<br />
                    ⏰ YOUth: M-F 12-6pm | QMNTY: M-F 6-10pm<br />
                    LGBTQIA+ All ages<br />
                    Services: Light Snacks, Social Support, Counseling, Medical</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Tab Content */}
      <section className={`tab-content ${activeTab === 'healthcare' ? 'active' : ''}`} id="healthcare-tab">
        <div className="container">
          <h2 className="section-title">Healthcare Services</h2>
          <div className="resource-cards">
            <div className="resource-card">
              <h3>Free & Low-Cost Medical Care</h3>
              <ul className="resource-list">
                <li>
                  <strong>Birmingham Free Clinic</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=1515+Locust+St+Suite+705+Pittsburgh+PA+15219" target="_blank" rel="noopener noreferrer">1515 Locust St, Suite 705</a><br />
                    📞 412-246-3053<br />
                    Free care for uninsured adults • By appointment only</span>
                </li>
                <li>
                  <strong>Operation Safety Net (Street Medicine)</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=249+South+9th+Street+Pittsburgh+PA+15203" target="_blank" rel="noopener noreferrer">249 South 9th St, 2nd Floor</a><br />
                    📞 412-240-7366<br />
                    Street medicine outreach • Medical care where people are</span>
                </li>
                <li>
                  <strong>UPMC Second Avenue Commons Health Center</strong>
                  <span className="resource-details">📍 <a href="https://maps.app.goo.gl/WUTxzTCraWisnhBL7" target="_blank" rel="noopener noreferrer">700 Second Avenue</a><br />
                    📞 412-232-7544<br />
                    ⏰ M, W, F: 12pm-4pm<br />
                    Services: Treatment of chronic diseases (diabetes, high blood pressure, COPD), wound care, MAT & substance use disorder treatment, behavioral health assessment & linkage to care, linkage to primary care, eye glasses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Food Tab Content */}
      <section className={`tab-content ${activeTab === 'food' ? 'active' : ''}`} id="food-tab">
        <div className="container">
          <h2 className="section-title">Food Resources</h2>
          <div className="resource-cards">
            <div className="resource-card">
              <h3>Community Meals</h3>
              <ul className="resource-list">
                <li>
                  <strong>Red Door Ministry</strong>
                  <span className="resource-details">📍 <a href="https://maps.app.goo.gl/BHANcu7gQKsMwXJg7" target="_blank" rel="noopener noreferrer">202 Stanwix St</a><br />
                    Regular meal service</span>
                </li>
                <li>
                  <strong>Shepherd's Heart Church</strong>
                  <span className="resource-details">📍 <a href="https://maps.app.goo.gl/rU52ehCraTEgZ6nm7" target="_blank" rel="noopener noreferrer">13 Pride St</a><br />
                    Breakfast service</span>
                </li>
                <li>
                  <strong>Jubilee Kitchen</strong>
                  <span className="resource-details">📍 <a href="https://maps.google.com/?q=2005+Wyandotte+Street+Pittsburgh+PA+15219" target="_blank" rel="noopener noreferrer">2005 Wyandotte St, Uptown</a><br />
                    📞 412-261-5417<br />
                    Breakfast, Lunch, To-go Dinner daily</span>
                </li>
                <li>
                  <strong>Greater Pittsburgh Food Bank</strong>
                  <span className="resource-details">📍 <a href="https://maps.app.goo.gl/dQBZrFbuHm6zFpgy5" target="_blank" rel="noopener noreferrer">1 N Linden St</a><br />
                    📞 412-460-3663<br />
                    🌐 <a href="https://findfood.pittsburghfoodbank.org/" target="_blank" rel="noopener noreferrer">Find food locations online</a></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Tab Content */}
      <section className={`tab-content ${activeTab === 'support' ? 'active' : ''}`} id="support-tab">
        <div className="container">
          <h2 className="section-title">Additional Support Services</h2>
          <div className="additional-grid">
            <div className="additional-card">
              <h3>Legal Aid</h3>
              <p><strong>Public Defender</strong><br />
                <a href="https://maps.google.com/?q=542+Forbes+Ave+Pittsburgh+PA+15219" target="_blank" rel="noopener noreferrer">542 Forbes Ave</a>
              </p>
              <p><strong>Neighborhood Legal Services</strong><br />
                📞 866-761-6572</p>
            </div>
            <div className="additional-card">
              <h3>Harm Reduction</h3>
              <p><strong>Prevention Point Pittsburgh</strong><br />
                Multiple mobile locations - Open different days:</p>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px' }}>
                <li><strong>Sunday</strong>: East Liberty - <a href="https://maps.google.com/?q=5913+Penn+Ave+Pittsburgh+PA+15206" target="_blank" rel="noopener noreferrer">5913 Penn Ave</a> (12-3pm)</li>
                <li><strong>Tuesday</strong>: Perry Hilltop - <a href="https://maps.google.com/?q=N+Charles+St+%26+Perrysville+Ave+Pittsburgh+PA+15214" target="_blank" rel="noopener noreferrer">N. Charles St & Perrysville Ave</a> (1-4pm)</li>
                <li><strong>Wednesday</strong>: Hill District - <a href="https://maps.google.com/?q=Bentley+Dr+%26+Kirkpatrick+St+Pittsburgh+PA+15219" target="_blank" rel="noopener noreferrer">Bentley Dr & Kirkpatrick St</a> (1-4pm)</li>
                <li><strong>Thursday</strong>: Carrick - <a href="https://maps.google.com/?q=2415+Saw+Mill+Run+Blvd+Pittsburgh+PA" target="_blank" rel="noopener noreferrer">2415 Saw Mill Run Blvd</a> (12-3pm)</li>
                <li><strong>Friday</strong>: Homewood - <a href="https://maps.google.com/?q=7240+Frankstown+Ave+Pittsburgh+PA" target="_blank" rel="noopener noreferrer">7240 Frankstown Ave</a> (1-4pm)</li>
              </ul>
              <p><strong>Bridge Outreach</strong><br />
                📞 412-699-0462</p>
            </div>
            <div className="additional-card">
              <h3>ID Support</h3>
              <p><strong>Birth Certificates</strong><br />
                Free through 2AC/DHS Link</p>
              <p><strong>State ID Waiver</strong><br />
                Available at shelters</p>
            </div>
            <div className="additional-card">
              <h3>Street Outreach</h3>
              <p><strong>ROOTs Program</strong><br />
                Contact Allegheny Link for connection</p>
              <p><strong>Central Outreach Wellness Center</strong><br />
                Multiple locations throughout Pittsburgh</p>
            </div>
          </div>
        </div>
      </section>

      {/* BigBurgh Tab Content */}
      <section className={`tab-content ${activeTab === 'bigburgh' ? 'active' : ''}`} id="bigburgh-tab">
        <div className="container">
          <h2 className="section-title">BigBurgh Resource Directory</h2>
          <div className="resource-cards">
            <div className="resource-card">
              <h3>Community Resource Platform</h3>
              <ul className="resource-list">
                <li>
                  <strong>BigBurgh Pittsburgh</strong>
                  <span className="resource-details">
                    🌐 <a href="https://www.bigburgh.com/#/" target="_blank" rel="noopener noreferrer">www.bigburgh.com</a><br />
                    Comprehensive searchable database connecting Pittsburgh residents to essential services
                  </span>
                </li>
              </ul>
            </div>
            <div className="resource-card">
              <h3>Available Resources</h3>
              <ul className="resource-list">
                <li>
                  <strong>Food & Nutrition</strong>
                  <span className="resource-details">Food banks, meal programs, SNAP assistance</span>
                </li>
                <li>
                  <strong>Housing & Shelter</strong>
                  <span className="resource-details">Emergency shelters, transitional housing, rental assistance</span>
                </li>
                <li>
                  <strong>Healthcare Services</strong>
                  <span className="resource-details">Medical clinics, dental care, mental health support</span>
                </li>
                <li>
                  <strong>Employment & Training</strong>
                  <span className="resource-details">Job placement, career counseling, skill development</span>
                </li>
                <li>
                  <strong>Legal Aid</strong>
                  <span className="resource-details">Free legal services, advocacy, rights protection</span>
                </li>
                <li>
                  <strong>Financial Assistance</strong>
                  <span className="resource-details">Utility help, emergency funds, benefits enrollment</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bigburgh-info-banner">
            <div className="banner-content">
              <div className="banner-icon">🔍</div>
              <div className="banner-text">
                <h4>Find the Help You Need</h4>
                <p>Search hundreds of local resources organized by category, location, and service type</p>
              </div>
              <a href="https://www.bigburgh.com/#/" target="_blank" rel="noopener noreferrer" className="banner-button">
                Visit BigBurgh
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resources;