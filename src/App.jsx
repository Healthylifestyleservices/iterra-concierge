import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Intake from "./components/Intake";
import PetHarmony from "./components/PetHarmony";
import Assistant from "./components/Assistant";

export default function App() {
  return (
    <Router>
      <div style={{
        backgroundColor: "#1c0f0a",
        color: "#f7e7ce",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "sans-serif",
        position: "relative"
      }}>
        {/* Header */}
        <header style={{
          borderBottom: "1px solid #d4af37",
          paddingBottom: "1rem",
          marginBottom: "2rem"
        }}>
          <h1 style={{
            fontSize: "2rem",
            textShadow: "0 0 6px rgba(255,223,150,0.8), 0 0 12px rgba(255,223,150,0.6)"
          }}>
            iTERRA™ Concierge
          </h1>
          <nav style={{ marginTop: "1rem" }}>
            <Link to="/" style={{ marginRight: "1rem", color: "#f7e7ce", textDecoration: "underline" }}>Home</Link>
            <Link to="/shop" style={{ marginRight: "1rem", color: "#f7e7ce", textDecoration: "underline" }}>Shop</Link>
            <Link to="/intake" style={{ marginRight: "1rem", color: "#f7e7ce", textDecoration: "underline" }}>Intake</Link>
            <Link to="/pet" style={{ color: "#f7e7ce", textDecoration: "underline" }}>Pet Harmony</Link>
          </nav>
        </header>

        {/* Routes */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/intake" element={<Intake />} />
            <Route path="/pet" element={<PetHarmony />} />
          </Routes>
        </main>

        {/* Floating Assistant */}
        <div style={{
          position: "fixed",
          bottom: "1rem",
          right: "1rem",
          zIndex: 9999
        }}>
          <Assistant />
        </div>
      </div>
    </Router>
  );
}
