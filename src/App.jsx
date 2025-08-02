import React, { useState, useEffect } from "react";
import supabase from "./lib/supabase";
import Home from "./components/Home";
import Intake from "./components/Intake";
import Shop from "./components/Shop";
import PetHarmony from "./components/PetHarmony";
import Assistant from "./components/Assistant";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await supabase.from("products").select("*");
      setProducts(data || []);
    }
    fetchProducts();
  }, []);

  const categories = [
    { label: "Crafted Wellness Intake", component: <Intake /> },
    { label: "Masculine Vitality", component: <div>Coming soon...</div> },
    { label: "Feminine Energy", component: <div>Coming soon...</div> },
    { label: "Pet Harmony", component: <PetHarmony /> },
    { label: "Home Essentials", component: <div>Coming soon...</div> },
    { label: "Leadership", component: <div>Coming soon...</div> },
    { label: "Wisdom of Wellness", component: <div>Coming soon...</div> }
  ];

  return (
    <div className="app-container">
      <div className="sacred-geo-bg" />
      <div className="title">iTERRA™ Concierge</div>
      <div className="button-grid">
        {categories.map((cat) => (
          <button
            key={cat.label}
            className="nav-button"
            onClick={() => setActiveModal(cat.component)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      {activeModal && (
        <div className="modal" onClick={() => setActiveModal(null)}>
          {activeModal}
        </div>
      )}
      <Assistant products={products} />
    </div>
  );
}
