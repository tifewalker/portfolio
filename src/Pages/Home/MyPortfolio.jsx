import { useState, useEffect } from 'react';
import data from "../../data/index.json";

export default function MyPortfolio() {
  const [viewMode, setViewMode] = useState('pinned');
  const [sortBy, setSortBy] = useState('updated');
  const [languageFilter, setLanguageFilter] = useState('all');
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setAnimateCards(false);
    const timer = setTimeout(() => setAnimateCards(true), 100);
    return () => clearTimeout(timer);
  }, [viewMode, sortBy, languageFilter]);

  // Get unique languages from portfolio data
  const getLanguages = () => {
    const languages = new Set();
    data?.portfolio?.forEach(item => {
      if (item.language) languages.add(item.language);
    });
    data?.portfolio2?.forEach(item => {
      if (item.language) languages.add(item.language);
    });
    return Array.from(languages);
  };

  // Filter and sort projects
  const getFilteredProjects = () => {
    let allProjects = [...(data?.portfolio || []), ...(data?.portfolio2 || [])];
    
    if (languageFilter !== 'all') {
      allProjects = allProjects.filter(project => project.language === languageFilter);
    }
    
    // Sort projects
    if (sortBy === 'updated') {
      allProjects.sort((a, b) => new Date(b.updated || '2024-01-01') - new Date(a.updated || '2024-01-01'));
    } else if (sortBy === 'name') {
      allProjects.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'stars') {
      allProjects.sort((a, b) => (b.stars || 0) - (a.stars || 0));
    }
    
    return allProjects;
  };

  const languages = getLanguages();
  const filteredProjects = getFilteredProjects();
  const pinnedProjects = filteredProjects.filter(project => project.pinned);
  const displayProjects = viewMode === 'pinned' ? pinnedProjects : filteredProjects;

  return (
    <section className="portfolio--section" id="MyPortfolio">
      {/* Repository Header */}
      <div className="repo--header--container">
        <div className="repo--navigation">
          <div className="repo--nav--tabs">
            <button className="repo--tab active">
              <svg className="tab--icon" viewBox="0 0 16 16" width="16" height="16">
                <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 10.5v-8zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
              </svg>
              Repositories
            </button>
            <button className="repo--tab">
              <svg className="tab--icon" viewBox="0 0 16 16" width="16" height="16">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a.75.75 0 01-1.06 1.06l-4.816-4.816A6 6 0 012 8z"/>
              </svg>
              Projects
            </button>
          </div>
          <div className="repo--count">
            <span className="count--badge">{filteredProjects.length}</span>
          </div>
        </div>

        {/* Repository Controls */}
        <div className="repo--controls">
          <div className="repo--search">
            <svg className="search--icon" viewBox="0 0 16 16" width="16" height="16">
              <path fillRule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"/>
            </svg>
            <input 
              type="text" 
              placeholder="Find a repository..." 
              className="search--input"
            />
          </div>
          
          <div className="filter--controls">
            <select 
              value={languageFilter} 
              onChange={(e) => setLanguageFilter(e.target.value)}
              className="filter--select"
            >
              <option value="all">All languages</option>
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
            
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="filter--select"
            >
              <option value="updated">Last updated</option>
              <option value="name">Name</option>
              <option value="stars">Stars</option>
            </select>
          </div>
        </div>

        {/* View Toggle */}
        <div className="view--toggle">
          <button 
            className={`view--btn ${viewMode === 'pinned' ? 'active' : ''}`}
            onClick={() => setViewMode('pinned')}
          >
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path fillRule="evenodd" d="M4.456.734a1.75 1.75 0 012.826.504l.613 1.327a3.081 3.081 0 002.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l.832 2.94c.968.968.5 2.623-.832 2.94l-2.454.584a3.081 3.081 0 01-2.084 1.707L5.91 19.498a1.75 1.75 0 01-2.826.504L.266 17.186a1.75 1.75 0 01-.504-2.826L2.579 11.06.266 8.86a1.75 1.75 0 01.504-2.826L3.587 3.218a1.75 1.75 0 01.869-1.484z"/>
            </svg>
            Pinned
          </button>
          <button 
            className={`view--btn ${viewMode === 'all' ? 'active' : ''}`}
            onClick={() => setViewMode('all')}
          >
            <svg viewBox="0 0 16 16" width="16" height="16">
              <path fillRule="evenodd" d="M1.75 2.5a.25.25 0 00-.25.25v2.5a.25.25 0 00.25.25h12.5a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25H1.75zM0 2.75C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0114.25 7H1.75A1.75 1.75 0 010 5.25v-2.5zM1.75 9.5a.25.25 0 00-.25.25v2.5a.25.25 0 00.25.25h12.5a.25.25 0 00.25-.25v-2.5a.25.25 0 00-.25-.25H1.75zM0 9.75C0 8.784.784 8 1.75 8h12.5c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0114.25 15H1.75A1.75 1.75 0 010 12.25v-2.5z"/>
            </svg>
            All
          </button>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className={`portfolio--grid ${animateCards ? 'animate-in' : ''}`}>
        {displayProjects.map((item, index) => (
          <div 
            key={index} 
            className="repo--card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Repository Header */}
            <div className="repo--card--header">
              <div className="repo--info">
                <div className="repo--name--container">
                  <svg className="repo--icon" viewBox="0 0 16 16" width="16" height="16">
                    <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 10.5v-8zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                  </svg>
                  <h3 className="repo--name">
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </h3>
                  {item.pinned && (
                    <span className="pinned--badge">
                      <svg viewBox="0 0 16 16" width="12" height="12">
                        <path fillRule="evenodd" d="M4.456.734a1.75 1.75 0 012.826.504l.613 1.327a3.081 3.081 0 002.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l.832 2.94c.968.968.5 2.623-.832 2.94l-2.454.584a3.081 3.081 0 01-2.084 1.707L5.91 19.498a1.75 1.75 0 01-2.826.504L.266 17.186a1.75 1.75 0 01-.504-2.826L2.579 11.06.266 8.86a1.75 1.75 0 01.504-2.826L3.587 3.218a1.75 1.75 0 01.869-1.484z"/>
                      </svg>
                      Pinned
                    </span>
                  )}
                  {item.visibility === 'private' && (
                    <span className="private--badge">Private</span>
                  )}
                </div>
                <p className="repo--description">{item.description}</p>
              </div>
              
              <div className="repo--actions">
                <button className="action--btn star--btn">
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>
                  </svg>
                  Star
                </button>
                <button className="action--btn">
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25V5.372a2.25 2.25 0 10-1.5 0v.878A.75.75 0 0110.25 7H5.75a.75.75 0 01-.75-.75V5.372z"/>
                  </svg>
                  Fork
                </button>
              </div>
            </div>

            {/* Repository Preview Image */}
            {item.src && (
              <div className="repo--preview">
                <img src={item.src} alt={`${item.title} preview`} />
                <div className="preview--overlay">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="preview--link"
                  >
                    <svg viewBox="0 0 16 16" width="16" height="16">
                      <path fillRule="evenodd" d="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1zM3.75 2A1.75 1.75 0 002 3.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 12.25v-3.5a.75.75 0 00-1.5 0v3.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-8.5a.25.25 0 01.25-.25h3.5a.75.75 0 000-1.5h-3.5z"/>
                    </svg>
                    View Live
                  </a>
                </div>
              </div>
            )}

            {/* Repository Footer */}
            <div className="repo--footer">
              <div className="repo--meta">
                {item.language && (
                  <div className="language--info">
                    <span className={`language--dot ${item.language.toLowerCase()}`}></span>
                    <span className="language--name">{item.language}</span>
                  </div>
                )}
                
                <div className="repo--stats">
                  {item.stars && (
                    <span className="stat--item">
                      <svg viewBox="0 0 16 16" width="12" height="12">
                        <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"/>
                      </svg>
                      {item.stars}
                    </span>
                  )}
                  
                  {item.forks && (
                    <span className="stat--item">
                      <svg viewBox="0 0 16 16" width="12" height="12">
                        <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25V5.372a2.25 2.25 0 10-1.5 0v.878A.75.75 0 0110.25 7H5.75a.75.75 0 01-.75-.75V5.372z"/>
                      </svg>
                      {item.forks}
                    </span>
                  )}
                  
                  <span className="stat--item updated--time">
                    Updated {item.updated || '3 days ago'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links Section */}
      <div className="portfolio--quick--links">
        <div className="quick--links--header">
          <h3>Quick Links</h3>
          <p>Connect with me on professional platforms</p>
        </div>
        
        <div className="quick--links--grid">
          <a
            href="https://www.linkedin.com/in/olawuyi-boluwatife-3088632b8/"
            className="quick--link--card linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <div className="link--card--header">
              <svg className="platform--icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <div className="link--info">
                <h4>LinkedIn Profile</h4>
                <p>Professional networking</p>
              </div>
            </div>
            <div className="link--arrow">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path fillRule="evenodd" d="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z"/>
              </svg>
            </div>
          </a>

          <a href="mailto:olawuyiboluwatife2@gmail.com" className="quick--link--card email">
            <div className="link--card--header">
              <svg className="platform--icon" viewBox="0 0 16 16" width="24" height="24" fill="currentColor">
                <path fillRule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"/>
              </svg>
              <div className="link--info">
                <h4>Email Contact</h4>
                <p>Direct communication</p>
              </div>
            </div>
            <div className="link--arrow">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path fillRule="evenodd" d="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z"/>
              </svg>
            </div>
          </a>

          <a href="https://github.com/tifewalker" className="quick--link--card github" target="_blank" rel="noreferrer">
            <div className="link--card--header">
              <svg className="platform--icon" viewBox="0 0 16 16" width="24" height="24" fill="currentColor">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <div className="link--info">
                <h4>GitHub Profile</h4>
                <p>Source code & projects</p>
              </div>
            </div>
            <div className="link--arrow">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path fillRule="evenodd" d="M10.604 1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.75.75 0 01-1.06-1.06l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z"/>
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Portfolio Statistics */}
      <div className="portfolio--stats--section">
        <div className="stats--header">
          <h3>Portfolio Statistics</h3>
          <p>Overview of my development activity and project metrics</p>
        </div>
        
        <div className="stats--grid">
          <div className="stat--card">
            <div className="stat--icon">
              <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 10.5v-8z"/>
              </svg>
            </div>
            <div className="stat--content">
              <span className="stat--number">{filteredProjects.length}</span>
              <span className="stat--label">Total Projects</span>
            </div>
          </div>

          <div className="stat--card">
            <div className="stat--icon">
              <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                <path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"/>
              </svg>
            </div>
            <div className="stat--content">
              <span className="stat--number">{filteredProjects.reduce((acc, proj) => acc + (proj.stars || 0), 0)}</span>
              <span className="stat--label">Total Stars</span>
            </div>
          </div>

          <div className="stat--card">
            <div className="stat--icon">
              <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25V5.372a2.25 2.25 0 10-1.5 0v.878A.75.75 0 0110.25 7H5.75a.75.75 0 01-.75-.75V5.372z"/>
              </svg>
            </div>
            <div className="stat--content">
              <span className="stat--number">{filteredProjects.reduce((acc, proj) => acc + (proj.forks || 0), 0)}</span>
              <span className="stat--label">Total Forks</span>
            </div>
          </div>

          <div className="stat--card">
            <div className="stat--icon">
              <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                <path fillRule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z"/>
              </svg>
            </div>
            <div className="stat--content">
              <span className="stat--number">{languages.length}</span>
              <span className="stat--label">Languages Used</span>
            </div>
          </div>

          <div className="stat--card">
            <div className="stat--icon">
              <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
                <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </div>
            <div className="stat--content">
              <span className="stat--number">24/7</span>
              <span className="stat--label">Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State for when no projects match filter */}
      {displayProjects.length === 0 && (
        <div className="empty--state">
          <div className="empty--icon">
            <svg viewBox="0 0 16 16" width="64" height="64" fill="currentColor">
              <path fillRule="evenodd" d="M8.5 1.75a.75.75 0 00-1.5 0v.5a.75.75 0 001.5 0v-.5zM8 4a4 4 0 100 8 4 4 0 000-8zM2.5 8a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0z"/>
            </svg>
          </div>
          <h3>No repositories found</h3>
          <p>Try adjusting your search criteria or language filter</p>
          <button 
            className="btn-primary"
            onClick={() => {
              setLanguageFilter('all');
              setViewMode('all');
            }}
          >
            Show all repositories
          </button>
        </div>
      )}
    </section>
  );
}