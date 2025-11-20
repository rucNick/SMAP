import { useState, useEffect, useRef } from 'react';

function MetricCard({ icon, target, label, disciplines = null }) {
  const [count, setCount] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef(null);

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
    const hasPlus = target >= 100;
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

  return (
    <div
      ref={cardRef}
      className={`metric-card ${disciplines ? 'has-overlay' : ''}`}
      onMouseEnter={() => disciplines && setShowOverlay(true)}
      onMouseLeave={() => disciplines && setShowOverlay(false)}
      onTouchStart={(e) => {
        if (disciplines) {
          e.preventDefault();
          setShowOverlay(!showOverlay);
        }
      }}
    >
      <div className="metric-icon">{icon}</div>
      <span className="metric-number">{count}{target >= 100 ? '+' : ''}</span>
      <span className="metric-label">{label}</span>

      {disciplines && (
        <div className={`discipline-overlay ${showOverlay ? 'show' : ''}`}>
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