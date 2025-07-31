
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import OnboardForm from './pages/OnboardForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/onboard" element={<OnboardForm />} />
        <Route path="*" element={
          <div style={{ padding: '2rem', color: '#FFD700', backgroundColor: '#3C2F2F' }}>
            Page not found. Try <a href="/onboard" style={{ color: '#FFD700', textDecoration: 'underline' }}>Onboarding</a>.
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
