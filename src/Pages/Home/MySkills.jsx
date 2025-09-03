import data from "../../data/index.json";
import { useState, useEffect } from "react";

export default function MySkills() {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
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

    const element = document.getElementById('mySkills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills--section" id="mySkills">
      {/* Header section with GitHub-style controls */}
      <div className="skills--header">
        <div className="skills--title--container">
          <div className="skills--badge">
            <span>⚡</span>
            <span>Skills & Expertise</span>
          </div>
          <h2 className="skills--section--heading">
            Pinned Technologies
          </h2>
          <p className="skills--subtitle">
            Core technologies and frameworks I work with
          </p>
        </div>

        {/* View toggle buttons (GitHub-style) */}
        <div className="skills--view--controls">
          <button 
            className={`view--btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            aria-label="Grid view"
          >
            <span>⊞</span>
          </button>
          <button 
            className={`view--btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
            aria-label="List view"
          >
            <span>☰</span>
          </button>
        </div>
      </div>

      {/* Skills container with dynamic layout */}
      <div className={`skills--section--container ${viewMode}`}>
        {data?.skills?.map((item, index) => (
          <div 
            key={index} 
            className={`skills--section--card ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Card header with GitHub-style elements */}
            <div className="card--header">
              <div className="card--icon--container">
                <img src={item.src} alt={item.title} className="skills--section--img" />
              </div>
              <div className="card--status">
                <div className="status--dot active"></div>
                <span className="status--text">Active</span>
              </div>
            </div>

            {/* Card content */}
            <div className="skills--section--card--content">
              <div className="card--title--row">
                <h3 className="skills--section--title">{item.title}</h3>
                <div className="card--meta">
                  <span className="skill--level">Expert</span>
                </div>
              </div>
              
              <p className="skills--section--description">{item.description}</p>
              
              {/* GitHub-style progress bar */}
              <div className="skill--progress">
                <div className="progress--bar">
                  <div 
                    className="progress--fill"
                    style={{ width: `${85 + Math.random() * 15}%` }}
                  ></div>
                </div>
                <span className="progress--percentage">
                  {Math.floor(85 + Math.random() * 15)}%
                </span>
              </div>

              {/* Card footer with GitHub-style stats */}
              <div className="card--footer">
                <div className="card--stats">
                  <span className="stat--item">
                    <span className="stat--icon">⭐</span>
                    <span>{Math.floor(Math.random() * 50) + 10}</span>
                  </span>
                  <span className="stat--item">
                    <span className="stat--icon">🔄</span>
                    <span>{Math.floor(Math.random() * 20) + 5}</span>
                  </span>
                </div>
                <div className="card--actions">
                  <button className="action--btn" aria-label="Star this skill">
                    ⭐
                  </button>
                  <button className="action--btn" aria-label="Learn more">
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub-style summary statistics */}
      <div className="skills--summary">
        <div className="summary--card">
          <h4>Technology Stack</h4>
          <div className="tech--languages">
            <div className="language--bar">
              <div className="language--segment javascript" style={{width: '35%'}}></div>
              <div className="language--segment react" style={{width: '30%'}}></div>
              <div className="language--segment css" style={{width: '20%'}}></div>
              <div className="language--segment other" style={{width: '15%'}}></div>
            </div>
            <div className="language--legend">
              <span><span className="legend--dot javascript"></span>JavaScript 35%</span>
              <span><span className="legend--dot react"></span>React 30%</span>
              <span><span className="legend--dot css"></span>CSS 20%</span>
              <span><span className="legend--dot other"></span>Other 15%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}