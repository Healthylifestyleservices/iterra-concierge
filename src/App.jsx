import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FlowerOfLife from "./components/FlowerOfLife";
import ParticleBackground from "./ParticleBackground";
import { DiagnosticsTest } from "./pages/DiagnosticsTest";

export default function App() {
  const [dropdowns, setDropdowns] = useState({});

  const toggleDropdown = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Router>
      <Routes>
        <Route path="/diagnostics" element={<DiagnosticsTest />} />
        <Route path="/" element={
          <div style={{ 
            position: "relative", 
            minHeight: "100vh", 
            background: "radial-gradient(ellipse at center, #4A2C2A 0%, #2D1B1A 50%, #1A0F0E 100%)", 
            color: "#F7E7CE", 
            overflow: "hidden" 
          }}>
            <ParticleBackground />
            <FlowerOfLife />

            {/* Diagnostics Button */}
            <div style={{ position: "absolute", top: "1vh", right: "2vw", zIndex: 100 }}>
              <Link 
                to="/diagnostics"
                style={{
                  padding: "12px 20px",
                  background: "rgba(139, 69, 19, 0.9)",
                  color: "#F7E7CE",
                  textDecoration: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  boxShadow: "0 4px 15px rgba(139, 69, 19, 0.5)",
                  border: "2px solid rgba(247, 231, 206, 0.3)"
                }}
              >
                🔧 FULL DIAGNOSTICS
              </Link>
            </div>

            <header style={{ position: "absolute", top: "3vh", left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
              <h1 style={{ fontSize: "2rem", background: "linear-gradient(to right, #F7E7CE, #D4AF37)", WebkitBackgroundClip: "text", color: "transparent" }}>
                iTERRA™
              </h1>
              <p style={{ fontSize: "1rem", color: "#F7E7CE" }}>LUXURY WELLNESS CONCIERGE</p>
            </header>

            <div style={{ position: "absolute", top: "40vh", left: "50%", transform: "translateX(-50%)", zIndex: 50 }}>
              <button
                onClick={() => toggleDropdown("intake")}
                style={{
                  padding: "12px 24px",
                  background: "rgba(139, 69, 19, 0.3)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(247, 231, 206, 0.3)",
                  borderRadius: "15px",
                  color: "#F7E7CE",
                  cursor: "pointer",
                  boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)",
                  fontSize: "16px",
                  fontWeight: "600"
                }}
              >
                Wellness Intake
              </button>
            </div>

            <footer style={{ position: "absolute", bottom: "1vh", left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
              <span style={{ padding: "5px 10px", background: "linear-gradient(to right, #D4AF37, #B8860B)", borderRadius: "5px", color: "#F7E7CE" }}>
                iTERRA™
              </span>
            </footer>
          </div>
        } />
      </Routes>
    </Router>
  );
}