// iTERRA™ Lifestyle Concierge - Full Component Build for Famous AI
// Includes sacred geometry overlay, intake logic, assistant panel, and category structure

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function ITerraMain() {
  const [harmonyMode, setHarmonyMode] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#333333] font-avenir">
      {/* Header */}
      <div className="text-center border-b border-[#D4AF37]/10 py-6">
        <h1 className="text-4xl font-cormorant text-[#D4AF37] tracking-wide">iTERRA™ <span className="text-sm font-light block">Lifestyle Concierge</span></h1>
      </div>

      {/* Harmony Mode Toggle */}
      <div className="flex justify-end p-4">
        <Button variant="ghost" onClick={() => setHarmonyMode(!harmonyMode)}>
          {harmonyMode ? 'Disable Harmony Mode' : 'Enable Harmony Mode'}
        </Button>
      </div>

      {/* Sacred Geometry Background */}
      {harmonyMode && (
        <div className="fixed inset-0 z-0 opacity-10 bg-center bg-contain bg-no-repeat" style={{ backgroundImage: "url('/flower-of-life.svg')" }} />
      )}

      {/* Assistant Panel Intro Prompt */}
      <div className="max-w-xl mx-auto p-6 bg-[#E2DFD2] border border-[#CD7F32] rounded-2xl shadow-md">
        <div className="text-lg mb-4">Ask iTERRA™ for wellness guidance…</div>
        <div className="text-sm text-[#B76E79] italic">Begin your journey—ask about oils, routines, or self-care.</div>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {['Women', 'Men', 'Pets', 'Home'].map((category) => (
          <div key={category} className="bg-white rounded-xl border border-[#CD7F32] p-4 text-center shadow hover:shadow-lg transition">
            <img src={`/${category.toLowerCase()}-icon.svg`} alt={category} className="mx-auto h-12 mb-2" />
            <div className="text-[#D4AF37] font-cormorant text-xl">{category}</div>
          </div>
        ))}
      </div>

      {/* Curated Options Section */}
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-cormorant text-[#D4AF37] mb-2">Curated Experiences</h2>
        <ul className="grid gap-3 text-[#333]">
          <li>→ Wellness for myself</li>
          <li>→ Care for my pet</li>
          <li>→ Support for my home</li>
          <li>→ Emotional or mindset help</li>
          <li>→ Learn about essential oils</li>
          <li>→ Grow my wellness business</li>
          <li>→ Browse DIY + Pre-Made Kits</li>
        </ul>
      </div>

      {/* Floating Chat Assistant */}
      <div className="fixed bottom-6 right-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#F7E7CE] text-[#333] border border-[#B76E79] rounded-full px-4 py-2 shadow-md hover:shadow-lg cursor-pointer"
        >
          💬 How can I help you today?
        </motion.div>
      </div>
    </div>
  );
}