import data from "../../data/index.json";
import { useState, useEffect } from "react";

export default function Testimonial() {
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonial');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const filters = [
    { id: 'all', label: 'All Certificates', icon: '🏆' },
    { id: 'recent', label: 'Recent', icon: '⭐' },
    { id: 'featured', label: 'Featured', icon: '🎯' }
  ];

  // Combine testimonial arrays for easier management
  const allCertificates = [
    ...(data?.testimonial || []).map((item, index) => ({
      ...item,
      id: `cert1-${index}`,
      category: 'featured',
      year: '2024',
      issuer: 'Professional Institute'
    })),
    ...(data?.testimonial2 || []).map((item, index) => ({
      ...item,
      id: `cert2-${index}`,
      category: 'recent',
      year: '2023',
      issuer: 'Tech Academy'
    }))
  ];

  const filteredCertificates = filter === 'all' 
    ? allCertificates 
    : allCertificates.filter(cert => cert.category === filter);

  return (
    <section className="testimonial--section" id="testimonial">
      <div className="certificates--container">
        {/* GitHub-style achievements header */}
        <div className="certificates--header">
          <div className="header--content">
            <div className="achievements--badge">
              <span className="badge--icon">🏅</span>
              <span className="badge--text">Professional Achievements</span>
            </div>
            
            <h2 className="certificates--title">
              Certificates & Certifications
            </h2>
            
            <p className="certificates--subtitle">
              Professional certifications and achievements that validate my expertise
              in various technologies and methodologies.
            </p>
          </div>

          {/* GitHub-style stats */}
          <div className="certificates--stats">
            <div className="stat--card">
              <span className="stat--number">{allCertificates.length}</span>
              <span className="stat--label">Total Certificates</span>
            </div>
            <div className="stat--card">
              <span className="stat--number">2024</span>
              <span className="stat--label">Latest Achievement</span>
            </div>
            <div className="stat--card">
              <span className="stat--number">100%</span>
              <span className="stat--label">Completion Rate</span>
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="certificates--filters">
          {filters.map(filterItem => (
            <button
              key={filterItem.id}
              className={`filter--btn ${filter === filterItem.id ? 'active' : ''}`}
              onClick={() => setFilter(filterItem.id)}
            >
              <span className="filter--icon">{filterItem.icon}</span>
              <span>{filterItem.label}</span>
              <span className="filter--count">
                {filterItem.id === 'all' 
                  ? allCertificates.length 
                  : allCertificates.filter(cert => cert.category === filterItem.id).length
                }
              </span>
            </button>
          ))}
        </div>

        {/* Certificates grid */}
        <div className="certificates--grid">
          {filteredCertificates.map((item, index) => (
            <div 
              key={item.id} 
              className={`certificate--card ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card header with GitHub-style elements */}
              <div className="card--header">
                <div className="card--badge">
                  <span className="badge--dot verified"></span>
                  <span className="badge--text">Verified</span>
                </div>
                <div className="card--actions">
                  <button className="action--btn" title="View details">
                    <span>👁️</span>
                  </button>
                  <button className="action--btn" title="Share certificate">
                    <span>📤</span>
                  </button>
                </div>
              </div>

              {/* Certificate image container */}
              <div className="certificate--image--container">
                <div className="image--overlay">
                  <button className="overlay--btn">
                    <span>🔍</span>
                    <span>View Certificate</span>
                  </button>
                </div>
                <img 
                  src={item.src} 
                  alt="Certificate"
                  className="certificate--image"
                />
              </div>

              {/* Card content */}
              <div className="card--content">
                <div className="card--info">
                  <h3 className="certificate--title">
                    Professional Certificate
                  </h3>
                  <p className="certificate--issuer">
                    Issued by {item.issuer} • {item.year}
                  </p>
                </div>

                {/* GitHub-style metadata */}
                <div className="certificate--meta">
                  <div className="meta--item">
                    <span className="meta--icon">📅</span>
                    <span className="meta--text">{item.year}</span>
                  </div>
                  <div className="meta--item">
                    <span className="meta--icon">✅</span>
                    <span className="meta--text">Verified</span>
                  </div>
                </div>

                {/* Skills tags */}
                <div className="certificate--skills">
                  {/* Sample skill tags - you can customize based on certificate type */}
                  <span className="skill--tag">JavaScript</span>
                  <span className="skill--tag">React</span>
                  <span className="skill--tag">Node.js</span>
                </div>
              </div>

              {/* Card footer */}
              <div className="card--footer">
                <div className="footer--stats">
                  <span className="footer--stat">
                    <span className="stat--icon">⭐</span>
                    <span>Achievement Unlocked</span>
                  </span>
                </div>
                <button className="view--certificate--btn">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub-style contribution summary */}
        <div className="learning--journey">
          <div className="journey--header">
            <h3>Learning Journey</h3>
            <p>Continuous professional development and skill enhancement</p>
          </div>
          
          <div className="journey--timeline">
            <div className="timeline--line"></div>
            {[2024, 2023, 2022, 2021].map((year, index) => (
              <div key={year} className="timeline--year">
                <div className="year--marker">
                  <span>{year}</span>
                </div>
                <div className="year--achievements">
                  <span>{Math.floor(Math.random() * 5) + 2} Certificates</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="certificates--cta">
          <div className="cta--content">
            <h3>Want to verify a certificate?</h3>
            <p>All certificates can be verified through their respective issuing authorities</p>
            <button className="cta--btn">
              <span>🔍</span>
              Verify Certificates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}