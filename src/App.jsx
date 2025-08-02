import React from 'react';
import Home from './components/Home';
import Int

cat > src/App.jsx << 'EOF'
import React from 'react';
import Home from './components/Home';
import Intake from './components/Intake';
import Shop from './components/Shop';
import PetHarmony from './components/PetHarmony';
import Assistant from './components/Assistant';

export default function App() {
  return (
    <div className="app-container">
      <Home />
      <Intake />
      <Shop />
      <PetHarmony />
      <Assistant />
    </div>
  );
}
