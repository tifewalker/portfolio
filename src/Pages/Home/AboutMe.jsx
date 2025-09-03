import { useState, useEffect } from "react";

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState('readme');
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

    const element = document.getElementById('AboutMe');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: 'readme', label: 'README.md', icon: '📄' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' }
  ];

  const technologies = [
    { name: 'React', color: '#61dafb', percentage: 95 },
    { name: 'Node.js', color: '#68a063', percentage: 90 },
    { name: 'MongoDB', color: '#47a248', percentage: 85 },
    { name: 'WordPress', color: '#21759b', percentage: 92 },
    { name: 'Zoho CRM', color: '#c8102e', percentage: 88 }
  ];

  return (
    <section id="AboutMe" className="about--section">
      <div className="about--container">
        {/* GitHub-style repository header */}
        <div className="about--repo--header">
          <div className="repo--title">
            <div className="repo--icon">
              <span>👨‍💻</span>
            </div>
            <div className="repo--info">
              <h1 className="repo--name">TifeWalker/about-me</h1>
              <p className="repo--description">
                Full-Stack Developer Profile & Experience Documentation
              </p>
            </div>
          </div>
          
          <div className="repo--stats">
            <div className="repo--stat">
              <span className="stat--icon">⭐</span>
              <span>Star</span>
            </div>
            <div className="repo--stat">
              <span className="stat--icon">👁️</span>
              <span>Watch</span>
            </div>
            <div className="repo--stat">
              <span className="stat--icon">🔄</span>
              <span>Fork</span>
            </div>
          </div>
        </div>

        {/* File tabs */}
        <div className="file--tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`file--tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab--icon">{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="about--content--container">
          <div className="about--main--content">
            {/* README Content */}
            {activeTab === 'readme' && (
              <div className="readme--content">
                <div className="code--header">
                  <div className="code--controls">
                    <span className="code--dot red"></span>
                    <span className="code--dot yellow"></span>
                    <span className="code--dot green"></span>
                  </div>
                  <span className="file--name">README.md</span>
                  <div className="code--actions">
                    <button className="code--btn">📋</button>
                    <button className="code--btn">📝</button>
                  </div>
                </div>
                
                <div className="markdown--content">
                  <div className="md--section">
                    <h1 className="md--title">
                      <span className="md--emoji">👋</span> 
                      Hi there, I'm Boluwatife Olawuyi
                    </h1>
                    
                    <div className="md--badges">
                      <span className="md--badge">🚀 MERN Stack Developer</span>
                      <span className="md--badge">🎨 Graphics Designer</span>
                      <span className="md--badge">⚡ WordPress Expert</span>
                    </div>

                    <div className="md--content">
                      <h2>🧑‍💻 About Me</h2>
                      <p>
                        I am an experienced Application Engineer specializing in MERN Stack,
                        I bring a strong focus on creating dynamic and scalable web
                        applications. My expertise extends to React Development, graphics
                        design, and WordPress, where I craft visually appealing and
                        functional solutions tailored to client needs.
                      </p>
                      
                      <p>
                        Additionally, I am proficient in Zoho CRM and automation tools, 
                        enabling businesses to streamline their processes effectively.
                        I thrive on solving complex problems, delivering impactful results,
                        and driving innovation in technology.
                      </p>

                      <h2>🛠️ Tech Stack</h2>
                      <div className="tech--grid">
                        {technologies.map((tech, index) => (
                          <div key={index} className="tech--item">
                            <div className="tech--info">
                              <span className="tech--name">{tech.name}</span>
                              <span className="tech--percentage">{tech.percentage}%</span>
                            </div>
                            <div className="tech--bar">
                              <div 
                                className="tech--progress"
                                style={{ 
                                  width: `${tech.percentage}%`,
                                  backgroundColor: tech.color
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div className="experience--content">
                <div className="timeline--container">
                  <div className="timeline--item">
                    <div className="timeline--marker"></div>
                    <div className="timeline--content">
                      <h3>Senior MERN Stack Developer</h3>
                      <p className="timeline--period">2022 - Present</p>
                      <p>Leading full-stack development projects and mentoring junior developers.</p>
                    </div>
                  </div>
                  
                  <div className="timeline--item">
                    <div className="timeline--marker"></div>
                    <div className="timeline--content">
                      <h3>React Developer</h3>
                      <p className="timeline--period">2021 - 2022</p>
                      <p>Specialized in building responsive web applications with React ecosystem.</p>
                    </div>
                  </div>
                  
                  <div className="timeline--item">
                    <div className="timeline--marker"></div>
                    <div className="timeline--content">
                      <h3>WordPress Developer</h3>
                      <p className="timeline--period">2020 - 2021</p>
                      <p>Custom theme development and plugin creation for various clients.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === 'achievements' && (
              <div className="achievements--content">
                <div className="achievements--grid">
                  <div className="achievement--card">
                    <span className="achievement--icon">🎯</span>
                    <h3>100% Client Satisfaction</h3>
                    <p>Delivered over 50+ successful projects</p>
                  </div>
                  
                  <div className="achievement--card">
                    <span className="achievement--icon">⚡</span>
                    <h3>Performance Optimizer</h3>
                    <p>Improved site speeds by 70% on average</p>
                  </div>
                  
                  <div className="achievement--card">
                    <span className="achievement--icon">🚀</span>
                    <h3>Innovation Leader</h3>
                    <p>Pioneered automation solutions for SMEs</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar with image and additional info */}
          <div className="about--sidebar">
            <div className="profile--card">
              <div className="profile--image--container">
                <img src="./img/about-me.jpg" alt="About Me" className="profile--image" />
              </div>
              
              <div className="profile--details">
                <div className="detail--item">
                  <span className="detail--icon">📍</span>
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="detail--item">
                  <span className="detail--icon">💼</span>
                  <span>Available for work</span>
                </div>
                <div className="detail--item">
                  <span className="detail--icon">🕒</span>
                  <span>UTC+1 timezone</span>
                </div>
                <div className="detail--item">
                  <span className="detail--icon">🗣️</span>
                  <span>English, Yoruba</span>
                </div>
              </div>

              <div className="quick--stats">
                <div className="quick--stat">
                  <span className="quick--number">3+</span>
                  <span className="quick--label">Years</span>
                </div>
                <div className="quick--stat">
                  <span className="quick--number">50+</span>
                  <span className="quick--label">Projects</span>
                </div>
                <div className="quick--stat">
                  <span className="quick--number">15+</span>
                  <span className="quick--label">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}