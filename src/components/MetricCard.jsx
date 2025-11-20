import { useState, useEffect, useRef } from 'react';

function MetricCard({ icon, target, label, disciplines = null }) {
  const [count, setCount] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);
  const [touchOpen, setTouchOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCount();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
  };

  const handleTouchStart = (e) => {
    if (disciplines) {
      e.preventDefault();
      setTouchOpen(!touchOpen);
      setShowOverlay(!touchOpen);
    }
  };

  return (
    <div
      ref={cardRef}
      className={`metric-card ${disciplines ? 'has-overlay' : ''}`}
      onMouseEnter={() => disciplines && setShowOverlay(true)}
      onMouseLeave={() => disciplines && setShowOverlay(false)}
      onTouchStart={handleTouchStart}
      tabIndex={disciplines ? 0 : -1}
    >
      <div className="metric-icon">{icon}</div>
      <span className="metric-number">{count}{target >= 100 ? '+' : ''}</span>
      <span className="metric-label">{label}</span>

      {disciplines && (
        <div 
          className={`discipline-overlay ${showOverlay ? 'show' : ''}`}
          role="dialog"
          aria-live="polite"
          aria-hidden={!showOverlay}
        >
          <div className="overlay-header"></div>
          <ul className="discipline-list">
            {disciplines.map((discipline, index) => (
              <li key={index}>
                <span className="bullet" aria-hidden="true">•</span>
                <span>{discipline}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MetricCard;