import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faFile, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--container">
        {/* GitHub-style profile header */}
        <div className="hero--profile--header">
          <div className="hero--avatar--container">
            <div className="hero--avatar">
              <img src="./img/hero_img.jpeg" alt="Boluwatife Olawuyi" />
              <div className="hero--status--indicator"></div>
            </div>
          </div>
          
          <div className="hero--profile--info">
            <div className="hero--username">
              <h1 className="hero--name">Boluwatife Olawuyi</h1>
              <span className="hero--handle">@TifeWalker</span>
            </div>
            
            <div className="hero--bio">
              <p className="hero--title">
                <span className="hero--typewriter">
                  <Typewriter
                    words={[
                      "WordPress Expert",
                      "MERN Stack Developer", 
                      "React Developer",
                      "Graphics Designer",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </p>
              <p className="hero--description">
                An experienced Application Engineer specializing in MERN Stack. 
                Building innovative web solutions and crafting exceptional user experiences.
              </p>
            </div>

            {/* GitHub-style stats */}
            <div className="hero--stats">
              <div className="hero--stat">
                <span className="stat--number">50+</span>
                <span className="stat--label">Projects</span>
              </div>
              <div className="hero--stat">
                <span className="stat--number">3+</span>
                <span className="stat--label">Years Experience</span>
              </div>
              <div className="hero--stat">
                <span className="stat--number">100%</span>
                <span className="stat--label">Client Satisfaction</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="hero--actions">
             <Link
  to="Contact"
  spy={true}
  smooth={true}
  offset={-70}
  duration={500}
  className="btn btn-primary hero--cta"
>
  <FontAwesomeIcon icon={faComment} />
  Get In Touch
</Link>
              
            <button 
  className="btn btn-outline-primary hero--secondary"
  onClick={() => window.open('./img/my resume.pdf', '_blank')}
>
  <FontAwesomeIcon icon={faFile} />
  View Resume
</button>
              
             <div className="hero--social--links">
  <a href="https://github.com/tifewalker" className="social--link" aria-label="GitHub">
    <FontAwesomeIcon icon={faGithub} />
  </a>
  <a href="https://www.linkedin.com/in/olawuyi-boluwatife-3088632b8/" className="social--link" aria-label="LinkedIn">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
  <a href="https://x.com/tife_d_walker?s=21" className="social--link" aria-label="Twitter">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
</div>
            </div>
          </div>
        </div>

        {/* GitHub-style contribution graph concept */}
        <div className="hero--activity--section">
          <div className="activity--header">
            <h3>Recent Activity</h3>
            <span className="activity--subtitle">Building amazing projects</span>
          </div>
          
          <div className="activity--grid">
            {[...Array(7)].map((_, weekIndex) => (
              <div key={weekIndex} className="activity--week">
                {[...Array(7)].map((_, dayIndex) => {
                  const intensity = Math.floor(Math.random() * 5);
                  return (
                    <div 
                      key={dayIndex} 
                      className={`activity--day activity--level-${intensity}`}
                      title={`${intensity} contributions`}
                    ></div>
                  );
                })}
              </div>
            ))}
          </div>
          
          <div className="activity--legend">
            <span>Less</span>
            <div className="legend--colors">
              {[0, 1, 2, 3, 4].map(level => (
                <div key={level} className={`legend--color activity--level-${level}`}></div>
              ))}
            </div>
            <span>More</span>
          </div>
        </div>

        {/* Scroll indicator */}
       <div className="scroll--indicator">
  <div className="scroll--arrow">
    <FontAwesomeIcon icon={faArrowDown} />
  </div>
  <span className="scroll--text">Scroll to explore</span>
</div>
      </div>
    </section>
  );
}