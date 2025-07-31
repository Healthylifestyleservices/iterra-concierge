
import React, { useState } from 'react'
import { supabase } from '../utils/supabaseClient'

const OnboardForm = () => {
  const [siteName, setSiteName] = useState('jennawilliams1')
  const [displayName, setDisplayName] = useState('Jenna Williams')
  const [recognitionName, setRecognitionName] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      alert('User not authenticated')
      setLoading(false)
      return
    }

    const { error } = await supabase
      .from('associates')
      .upsert({
        id: user.id,
        site_name: siteName,
        display_name: displayName,
        recognition_name: recognitionName,
      })

    if (error) {
      alert('Failed to save data.')
    } else {
      setSuccess(true)
    }

    setLoading(false)
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', color: '#fff' }}>
      <h2 style={{ marginBottom: '1rem' }}>Customize Your Concierge Site</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Site Name"
          value={siteName}
          onChange={(e) => setSiteName(e.target.value)}
          style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
        />
        <input
          type="text"
          placeholder="Your Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
        />
        <input
          type="text"
          placeholder="Recognition Name"
          value={recognitionName}
          onChange={(e) => setRecognitionName(e.target.value)}
          style={{ display: 'block', marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#8C5523',
            color: '#FFD700',
            padding: '0.75rem 2rem',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
          }}
        >
          {loading ? 'Saving...' : 'Activate My Concierge Site'}
        </button>
        {success && <p style={{ marginTop: '1rem', color: '#FFD700' }}>Success! Your site info was saved.</p>}
      </form>
    </div>
  )
}

export default OnboardForm
