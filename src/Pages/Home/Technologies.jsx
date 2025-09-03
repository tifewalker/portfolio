import { useState, useEffect } from "react";

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredTech, setHoveredTech] = useState(null);
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

  // Technology data with categories and experience levels
  const technologies = [
    // Frontend Technologies
    { name: 'React', src: './img/tech/react.png', category: 'frontend', experience: 95, color: '#61dafb', description: 'Modern JavaScript library for building user interfaces' },
    { name: 'TypeScript', src: './img/tech/typescript.png', category: 'frontend', experience: 90, color: '#3178c6', description: 'Typed superset of JavaScript' },
    { name: 'HTML5', src: './img/tech/html.png', category: 'frontend', experience: 98, color: '#e34f26', description: 'Standard markup language for web pages' },
    { name: 'CSS3', src: './img/tech/css.png', category: 'frontend', experience: 95, color: '#1572b6', description: 'Cascading Style Sheets for styling' },
    { name: 'jQuery', src: './img/tech/jquery.png', category: 'frontend', experience: 85, color: '#0769ad', description: 'Fast JavaScript library' },
    { name: 'Bootstrap', src: './img/tech/bootstrap.png', category: 'frontend', experience: 90, color: '#7952b3', description: 'CSS framework for responsive design' },
    { name: 'Tailwind CSS', src: './img/tech/tailwind.png', category: 'frontend', experience: 88, color: '#06b6d4', description: 'Utility-first CSS framework' },
    { name: 'Material-UI', src: './img/tech/mui.png', category: 'frontend', experience: 87, color: '#0081cb', description: 'React component library' },

    // Backend Technologies  
    { name: 'Node.js', src: './img/tech/node.png', category: 'backend', experience: 92, color: '#339933', description: 'JavaScript runtime for server-side development' },
    { name: 'PHP', src: './img/tech/php.png', category: 'backend', experience: 85, color: '#777bb4', description: 'Server-side scripting language' },
    { name: 'WordPress', src: './img/tech/wordpress.png', category: 'backend', experience: 93, color: '#21759b', description: 'Content management system' },

    // Database Technologies
    { name: 'MongoDB', src: './img/tech/mongodb.png', category: 'database', experience: 88, color: '#47a248', description: 'NoSQL document database' },
    { name: 'MySQL', src: './img/tech/mysql.png', category: 'database', experience: 90, color: '#4479a1', description: 'Relational database management system' },

    // Design & System Tools
    { name: 'Photoshop', src: './img/tech/photoshop.png', category: 'design', experience: 92, color: '#31a8ff', description: 'Digital imaging and photo editing' },
    { name: 'After Effects', src: './img/tech/after-effect.png', category: 'design', experience: 88, color: '#9999ff', description: 'Motion graphics and visual effects' },
    { name: 'Ubuntu', src: './img/tech/ubuntu.png', category: 'system', experience: 85, color: '#e95420', description: 'Linux operating system' }
  ];

  const categories = [
    { id: 'all', label: 'All Technologies', icon: '🚀', count: technologies.length },
    { id: 'frontend', label: 'Frontend', icon: '🎨', count: technologies.filter(t => t.category === 'frontend').length },
    { id: 'backend', label: 'Backend', icon: '⚙️', count: technologies.filter(t => t.category === 'backend').length },
    { id: 'database', label: 'Database', icon: '🗄️', count: technologies.filter(t => t.category === 'database').length },
    { id: 'design', label: 'Design', icon: '🎭', count: technologies.filter(t => t.category === 'design').length },
    { id: 'system', label: 'System', icon: '💻', count: technologies.filter(t => t.category === 'system').length }
  ];

  const filteredTechnologies = activeCategory === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  // Calculate average experience for current category
  const avgExperience = Math.round(
    filteredTechnologies.reduce((sum, tech) => sum + tech.experience, 0) / filteredTechnologies.length
  );

  return (
    <section className="technologies--section" id="mySkills">
      <div className="tech--container">
        {/* GitHub-style header */}
        <div className="tech--header">
          <div className="tech--title--section">
            <div className="tech--badge">
              <span className="badge--icon">⚡</span>
              <span className="badge--text">Tech Arsenal</span>
            </div>
            
            <h2 className="tech--title">Technology Stack</h2>
            
            <p className="tech--subtitle">
              A comprehensive overview of technologies, frameworks, and tools I use to build 
              exceptional digital experiences and robust applications.
            </p>
          </div>

          {/* Tech stats overview */}
          <div className="tech--overview">
            <div className="overview--stat">
              <span className="overview--number">{technologies.length}</span>
              <span className="overview--label">Technologies</span>
            </div>
            <div className="overview--stat">
              <span className="overview--number">{avgExperience}%</span>
              <span className="overview--label">Avg Proficiency</span>
            </div>
            <div className="overview--stat">
              <span className="overview--number">{categories.length - 1}</span>
              <span className="overview--label">Categories</span>
            </div>
          </div>
        </div>

        {/* Category filters */}
        <div className="tech--filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`tech--filter ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="filter--icon">{category.icon}</span>
              <span className="filter--label">{category.label}</span>
              <span className="filter--count">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Technologies grid */}
        <div className="tech--grid">
          {filteredTechnologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`tech--card ${isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              {/* Card header with GitHub-style elements */}
              <div className="tech--card--header">
                <div className="tech--status">
                  <div className="status--dot active"></div>
                  <span className="status--label">Active</span>
                </div>
                <div className="tech--actions">
                  <button className="tech--action" title="View projects">
                    <span>👁️</span>
                  </button>
                  <button className="tech--action" title="Star technology">
                    <span>⭐</span>
                  </button>
                </div>
              </div>

              {/* Technology icon */}
              <div className="tech--icon--container">
                <div className="tech--icon--bg" style={{ backgroundColor: `${tech.color}15` }}>
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="tech--icon"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="tech--glow" style={{ boxShadow: `0 0 30px ${tech.color}40` }}></div>
              </div>

              {/* Card content */}
              <div className="tech--card--content">
                <h3 className="tech--name">{tech.name}</h3>
                <p className="tech--description">{tech.description}</p>

                {/* Experience bar */}
                <div className="tech--experience">
                  <div className="experience--header">
                    <span className="experience--label">Proficiency</span>
                    <span className="experience--percentage">{tech.experience}%</span>
                  </div>
                  <div className="experience--bar">
                    <div
                      className="experience--fill"
                      style={{
                        width: `${tech.experience}%`,
                        backgroundColor: tech.color
                      }}
                    ></div>
                  </div>
                </div>

                {/* Tech metadata */}
                <div className="tech--meta">
                  <div className="meta--item">
                    <span className="meta--icon">📊</span>
                    <span className="meta--text">{tech.category}</span>
                  </div>
                  <div className="meta--item">
                    <span className="meta--icon">🏆</span>
                    <span className="meta--text">Expert</span>
                  </div>
                </div>
              </div>

              {/* Hover tooltip */}
              {hoveredTech === tech.name && (
                <div className="tech--tooltip">
                  <div className="tooltip--content">
                    <strong>{tech.name}</strong>
                    <p>{tech.description}</p>
                    <div className="tooltip--stats">
                      <span>Experience: {tech.experience}%</span>
                      <span>Category: {tech.category}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* GitHub-style language statistics */}
        <div className="tech--summary">
          <div className="summary--header">
            <h3>Technology Distribution</h3>
            <p>Based on project usage and expertise level</p>
          </div>
          
          <div className="tech--languages--chart">
            <div className="languages--bar">
              <div className="lang--segment frontend" style={{width: '35%'}}></div>
              <div className="lang--segment backend" style={{width: '25%'}}></div>
              <div className="lang--segment database" style={{width: '20%'}}></div>
              <div className="lang--segment design" style={{width: '15%'}}></div>
              <div className="lang--segment system" style={{width: '5%'}}></div>
            </div>
            
            <div className="languages--legend">
              <div className="legend--item">
                <span className="legend--dot frontend"></span>
                <span>Frontend 35%</span>
              </div>
              <div className="legend--item">
                <span className="legend--dot backend"></span>
                <span>Backend 25%</span>
              </div>
              <div className="legend--item">
                <span className="legend--dot database"></span>
                <span>Database 20%</span>
              </div>
              <div className="legend--item">
                <span className="legend--dot design"></span>
                <span>Design 15%</span>
              </div>
              <div className="legend--item">
                <span className="legend--dot system"></span>
                <span>System 5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}