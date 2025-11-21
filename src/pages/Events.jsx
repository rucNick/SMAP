import { useState } from 'react';
import { Link } from 'react-router-dom';

function Events() {
  const [showAllPastEvents, setShowAllPastEvents] = useState(false);

  const upcomingEvents = [
    {
      date: { day: "Dec", month: "2025" },
      category: "fundraiser",
      categoryLabel: "Community Event",
      title: "Annual Holiday Card Making Event",
      time: "TBD",
      location: "TBD",
      description: "Join us for our annual holiday card making event to create heartfelt cards for individuals experiencing homelessness."
    },
    {
      date: { day: "Jan", month: "2026" },
      category: "journal-club",
      categoryLabel: "Journal Club",
      title: "Journal Club #3 — TBD",
      time: "TBD",
      location: "TBD",
      description: "Details for our third Journal Club session to be announced. Stay tuned for speaker and topic information."
    },
    {
      date: { day: "Mar", month: "2026" },
      category: "journal-club",
      categoryLabel: "Journal Club",
      title: "Journal Club #4 — TBD",
      time: "TBD",
      location: "TBD",
      description: "Details for our fourth Journal Club session to be announced. Stay tuned for speaker and topic information."
    }
  ];

  const pastEvents = [
    {
      date: "Nov 2025",
      image: "/Content/Events/bridge.jpg",
      title: "Journal Club #2 w/ Dr. Julia Lam OT and Housing Transitions",
      description: "Dr. Julia Lam discussed occupational therapy approaches to housing transitions and supporting individuals experiencing homelessness. The session provided valuable insights into the role of OT in addressing housing instability and improving quality of life for vulnerable populations.",
      stat: { label: "6 pm", value: "WPU 540" }
    },
    {
      date: "Nov 2025",
      image: "/Content/Events/bridge.jpg",
      title: "Scenario Night",
      description: "Interactive scenario-based learning session where members practiced street medicine skills and decision-making in realistic situations. Participants engaged in hands-on exercises to prepare for real-world encounters.",
      stat: { label: "Workshop", value: "Training" }
    },
    {
      date: "Oct 2025",
      image: "/Content/Events/Community Map Night.jpg",
      title: "Community Map Night",
      description: "SM@P leaders guided members through Pittsburgh's community resources in real-time, creating comprehensive handouts for volunteers to reference during street rounds.",
      stat: { label: "Community", value: "Resources" },
      download: "/Content/Events/events_slide/2024-2025Events/Community Map Night 10_14.pptx"
    },
    {
      date: "Sep 2025",
      image: "/Content/Events/talk with mary hawk.jpg",
      title: "Journal Club #1 w/ Dr. Mary Hawk Discussion of Relational Harm Reduction",
      description: "Our first Journal Club of the 2025-2026 school year featured Dr. Mary Hawk discussing relational harm reduction - an evidence-based approach that highlights human connection and trust as the foundation for healing and care.",
      stat: { label: "Harm", value: "Reduction" },
      download: "/Content/Events/events_slide/2024-2025Events/NGH Presentation 9_26_.pptx"
    },
    {
      date: "Sep 2025",
      image: "/Content/Events/info night.jpg",
      title: "Intro Event",
      description: "An engaging information session introducing new members to our work and mission. Attendees learned about street medicine, our community impact, and various ways to get involved with hands-on volunteer opportunities.",
      stat: { label: "New", value: "Members" },
      download: "/Content/Events/events_slide/2024-2025Events/General Information 9_16_25 Event _.pptx"
    },
    {
      date: "Apr 2025",
      image: "/Content/Events/street hospice.jpg",
      title: "Guest Speaker Lecture on Street Hospice w/ Marla Caplan and Dr. Tim Campbell",
      description: "An insightful guest lecture session featuring street hospice experts who shared their knowledge and experiences. Attendees gained valuable insights into end-of-life care for vulnerable populations.",
      stat: { label: "Street", value: "Hospice" }
    },
    {
      date: "Mar 2025",
      image: "/Content/Events/book club.jpg",
      title: "Book Club #2 — American Sirens by Kevin Hazzard w/ John Moon",
      description: "A special book club session featuring the second half of \"American Sirens\" with invited guest John Moon. Members and newcomers alike enjoyed learning incredible stories about emergency medical services history.",
      stat: { label: "American", value: "Sirens" }
    },
    {
      date: "Feb 2025",
      image: "/Content/Events/dr hurwitz lecture.jpg",
      title: "Dr. Hurwitz's Lecture, Social Determinants of Health",
      description: "Dr. Max Hurwitz, Assistant Medical Director of Street Medicine at Pitt, delivered an engaging lecture on the Social Determinants of Health. The session explored how social and economic factors impact health outcomes and provided strategies for addressing health inequities in vulnerable populations.",
      stat: { label: "Health", value: "Equity" }
    },
    {
      date: "Jan 2025",
      image: "/Content/Events/book club.jpg",
      title: "Book Club #1 — American Sirens by Kevin Hazzard w/ John Moon, Philip Halen, and Dr. Emily Lovallo",
      description: "The first book club session of 2025 featuring \"American Sirens\" with distinguished guests John Moon, Philip Halen, and Dr. Emily Lovallo sharing insights about emergency medical services and community care.",
      stat: { label: "Special", value: "Guests" }
    },
    {
      date: "Dec 2024",
      image: "/Content/Events/card making.jpg",
      title: "Annual Holiday Card Making Event",
      description: "A heartwarming community gathering where members created handmade holiday cards for individuals experiencing homelessness, spreading joy and connection during the holiday season.",
      stat: { label: "Holiday", value: "Cards" },
      download: "/Content/Events/events_slide/2024-2025Events/Holiday Cards.pptx"
    },
    {
      date: "Nov 2024",
      image: "/Content/Events/bridge.jpg",
      title: "Film Screening and Discussion with Special Guest Dr. Withers",
      description: "A powerful film screening followed by an engaging Q&A session with Dr. Withers, exploring themes of community connection, healthcare access, and the impact of street medicine work.",
      stat: { label: "Dr.", value: "Withers" }
    },
    {
      date: "Oct 2024",
      image: "/Content/Events/Anna White Talk.jpg",
      title: "Dr. White's Lecture, Barriers Beneath Bridges: Street Medicine for Healthcare Education",
      description: "Dr. White presented on barriers faced in street medicine and the importance of healthcare education in serving vulnerable populations, providing valuable insights for aspiring healthcare professionals.",
      stat: { label: "Healthcare", value: "Education" }
    },
    {
      date: "Sep 2024",
      image: "/Content/Events/sandwich making .jpg",
      title: "Intro Event + Sandwich Making",
      description: "Thank you to everyone who visited Street Medicine at Pitt during the undergraduate activity fair! Our first event kicked off the 2024-2025 school year with a brief introduction to Street Medicine, an overview of the Street Medicine Institute (SMI) for newcomers, and a recap of the recent International Street Medicine Symposium conference. Members came together for hands-on sandwich-making while earning service credit and building community connections.",
      stat: { label: "Sandwich", value: "Making" },
      download: "/Content/Events/events_slide/2024-2025Events/General Information 9_24_24 Event _.pptx"
    }
  ];

  const visiblePastEvents = showAllPastEvents ? pastEvents : pastEvents.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="events-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="page-title">Events & Activities</h1>
          <p className="page-subtitle">
            Join us in making a difference through community engagement, fundraisers, and educational workshops.
          </p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming-events">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="event-card upcoming">
                <div className="event-date">
                  <span className="date-day">{event.date.day}</span>
                  <span className="date-month">{event.date.month}</span>
                </div>
                <div className="event-content">
                  <span className={`event-category ${event.category}`}>{event.categoryLabel}</span>
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-details">
                    <div className="detail-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="detail-item">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="event-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Weekly Rounds Notice */}
          <div className="weekly-rounds-notice">
            <div className="notice-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
            </div>
            <div className="notice-content">
              <h3>Weekly Street Rounds</h3>
              <p>
                Street rounds happen every Saturday and Sunday. Check our <Link to="/volunteer">Street Rounds page</Link> for detailed schedules and how to join.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="past-events">
        <div className="container">
          <h2 className="section-title">Past Events</h2>
          <p className="section-subtitle">
            See what we've accomplished together and the impact we've made in our community.
          </p>

          <div className="past-events-grid">
            {visiblePastEvents.map((event, index) => (
              <div key={index} className="past-event-card" style={{
                opacity: !showAllPastEvents && index >= 6 ? 0 : 1,
                transform: !showAllPastEvents && index >= 6 ? 'translateY(20px)' : 'translateY(0)',
                transition: 'opacity 0.5s ease, transform 0.5s ease',
                transitionDelay: showAllPastEvents && index >= 6 ? `${(index - 6) * 100}ms` : '0ms'
              }}>
                <div className="past-event-image">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTBlMGUwIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV2ZW50IEltYWdlPC90ZXh0Pgo8L3N2Zz4=';
                    }}
                  />
                  <div className="event-overlay">
                    <span className="event-date-overlay">{event.date}</span>
                  </div>
                </div>
                <div className="past-event-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div className="event-stats">
                    <span className="stat">
                      <strong>{event.stat.label}</strong> {event.stat.value}
                    </span>
                  </div>
                  {event.download && (
                    <a href={event.download} className="event-resource-btn" download>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      Download Presentation
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          {pastEvents.length > 6 && (
            <div className="view-more-section">
              <button 
                className="btn btn-secondary" 
                onClick={() => setShowAllPastEvents(!showAllPastEvents)}
                disabled={showAllPastEvents && pastEvents.length === visiblePastEvents.length}
              >
                {showAllPastEvents ? 'All Events Loaded' : 'View More Past Events'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="events-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Want to Collaborate with Us?</h2>
            <p>
              We're always looking for partners to help us organize fundraisers, educational workshops, and community events. 
              Get in touch to discuss how we can work together to make a difference.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/volunteer" className="btn btn-secondary">Join Our Team</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Events;