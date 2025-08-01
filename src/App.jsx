import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  const categories = [
    { label: "Crafted Wellness Intake", path: "/intake" },
    { label: "Masculine Vitality", path: "/masculine" },
    { label: "Feminine Energy", path: "/feminine" },
    { label: "Pet Harmony", path: "/pets" },
    { label: "Home Essentials", path: "/home" },
    { label: "Leadership", path: "/leadership" },
    { label: "Wisdom of Wellness", path: "/wisdom" }
  ];

  return (
    <Router>
      <div className="app-container">
        <div className="sacred-geo-bg" />
        <div className="title">iTERRA™ Concierge</div>
        <div className="button-grid">
          {categories.map((cat) => (
            <Link key={cat.path} to={cat.path} className="nav-button">
              {cat.label}
            </Link>
          ))}
        </div>
        <Routes>
          <Route path="/intake" element={<Placeholder title="Crafted Wellness Intake" />} />
          <Route path="/masculine" element={<Placeholder title="Masculine Vitality" />} />
          <Route path="/feminine" element={<Placeholder title="Feminine Energy" />} />
          <Route path="/pets" element={<Placeholder title="Pet Harmony" />} />
          <Route path="/home" element={<Placeholder title="Home Essentials" />} />
          <Route path="/leadership" element={<Placeholder title="Leadership" />} />
          <Route path="/wisdom" element={<Placeholder title="Wisdom of Wellness" />} />
        </Routes>
      </div>
    </Router>
  );
}

function Placeholder({ title }) {
  return (
    <div className="placeholder">
      <h2>{title}</h2>
      <p>Page content coming soon...</p>
    </div>
  );
}

