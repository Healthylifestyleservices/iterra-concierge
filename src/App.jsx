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
        <Route
          path="/diagnostics"
          element={<DiagnosticsTest />}
        />
        <Route
          path="/"
          element={
            <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
              <ParticleBackground />
              <FlowerOfLife />
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                padding: "2rem",
                color: "#D6B88C",
                textAlign: "center",
                fontFamily: "serif",
              }}>
                <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                  Welcome to iTERRA
                </h1>
                <nav style={{ marginTop: "1rem" }}>
                  <Link to="/diagnostics" style={{ color: "#CFAF92", textDecoration: "underline", marginRight: "1rem" }}>
                    Diagnostics
                  </Link>
                </nav>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}



