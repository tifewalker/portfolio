import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Homescreen";
import ArticlesPage from "./Pages/Articles/ArticlesPage";
import ArticlePage from "./Pages/Articles/ArticlePage";
import SEO from "./components/SEO";

function NotFound() {
  return (
    <div style={{ padding: "80px 24px", textAlign: "center", fontFamily: "sans-serif" }}>
      <SEO
        title="Page not found | Boluwatife Olawuyi"
        description="The page you are looking for does not exist."
        robots="noindex"
      />
      <h1>404, page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/" style={{ color: "#ff5a47", fontWeight: 600 }}>
        Return to the homepage
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
