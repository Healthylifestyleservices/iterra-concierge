// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Intake from "./pages/Intake";
import Masculine from "./pages/Masculine";
import Feminine from "./pages/Feminine";
import Pets from "./pages/Pets";
import HomeEssentials from "./pages/HomeEssentials";
import Leadership from "./pages/Leadership";
import Wisdom from "./pages/Wisdom";
import FlowerOfLife from "./components/FlowerOfLife";
import Assistant from "./components/Assistant";
import "./App.css";

const categories = [
  { label: "Crafted Wellness Intake", path: "/intake" },
  { label: "Masculine Vitality", path: "/masculine" },
  { label: "Feminine Energy", path: "/feminine" },
  { label: "Pet Harmony", path: "/pets" },
  { label: "Home Essentials", path: "/home" },
  { label: "Leadership", path: "/leadership" },
  { label: "Wisdom of Wellness", path: "/wisdom" },
];

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#2a1c1c] to-black text-white relative overflow-hidden font-serif">
        <FlowerOfLife />

        <div className="text-center pt-16 z-10 relative">
          <h1 className="text-5xl font-bold text-gold tracking-wide drop-shadow-xl">iTERRA™</h1>
          <p className="text-lg mt-2 text-gold/80 tracking-widest">LUXURY LIFESTYLE CONCIERGE</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-8 justify-items-center z-10 relative">
          {categories.map((cat, i) => (
            <Link
              key={i}
              to={cat.path}
              className="bg-[#2f1f1f]/60 border border-gold text-white px-6 py-3 rounded-2xl backdrop-blur-md hover:shadow-[0_0_20px_gold] transition-all duration-300"
            >
              {cat.label}
            </Link>
          ))}
        </div>

        <div className="absolute bottom-6 right-6 z-20">
          <Assistant />
        </div>

        <footer className="absolute bottom-0 w-full text-center text-gold/50 text-xs pb-2 z-10">
          © Health Lifestyle Education Services 2025
        </footer>
      </div>

      <Routes>
        <Route path="/intake" element={<Intake />} />
        <Route path="/masculine" element={<Masculine />} />
        <Route path="/feminine" element={<Feminine />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/home" element={<HomeEssentials />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/wisdom" element={<Wisdom />} />
      </Routes>
    </Router>
  );
}
