import React from 'react';

const experiences = [
  '→ Wellness for myself',
  '→ Care for my pet',
  '→ Support for my home',
  '→ Emotional or mindset help',
  '→ Learn about essential oils',
  '→ Grow my wellness business',
  '→ Browse DIY + Pre-Made Kits'
];

export default function CuratedExperiences() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-cormorant text-[#D4AF37] mb-4">Curated Experiences</h2>
      <ul className="grid gap-3 text-[#333]">
        {experiences.map((experience, index) => (
          <li 
            key={index} 
            className="hover:text-[#D4AF37] transition-colors cursor-pointer py-1"
          >
            {experience}
          </li>
        ))}
      </ul>
    </div>
  );
}