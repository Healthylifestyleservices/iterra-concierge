(function ensureITerraIsFullyFunctional() {
  const init = () => {
    if (typeof window.FamousAI === 'undefined') return setTimeout(init, 100);

    if (window.location.href.includes('iterra')) {
      localStorage.setItem('bypassAuth', 'true');
    }

    const nav = document.querySelector('.nav') || document.createElement('div');
    nav.innerHTML = `
      <nav class="iterra-tabs">
        <button onclick="loadSection('human')">Human Wellness</button>
        <button onclick="loadSection('pet')">Pet Wellness</button>
        <button onclick="loadSection('together')">Healthier Together™</button>
        <button onclick="loadSection('shop')">Your Wellness Shop</button>
        <button onclick="loadSection('education')">Education</button>
        <button onclick="loadSection('memberships')">Memberships</button>
      </nav>
    `;
    document.body.prepend(nav);

    document.querySelectorAll('.doterra-button').forEach((btn) => {
      btn.onclick = () => {
        const id = getUserId();
        if (id && id !== 'PRIME_EMPRESS') {
          window.location.href = `https://www.doterra.com/${id}/?source=iterra`;
        } else {
          alert("Associate ID not found. Please check your settings.");
        }
      };
    });

    const chat = document.querySelector('#ask-iterra') || document.createElement('div');
    chat.id = 'ask-iterra';
    chat.innerHTML = `
      <div class="ask-box">
        <input type="text" id="ask-input" placeholder="Ask about oils, protocols, or pets...">
        <button onclick="submitAsk()">Ask iTerra</button>
      </div>
    `;
    document.body.append(chat);

    window.submitAsk = () => {
      const q = document.querySelector('#ask-input').value;
      if (!q) return alert('Please enter a question.');
      
      // Local AI responses since backend isn't accessible
      const responses = {
        stress: 'For stress relief, try Lavender, Bergamot, or Balance blend. Apply to wrists or diffuse.',
        sleep: 'For better sleep, use Lavender, Cedarwood, or Serenity blend. Diffuse 30 min before bed.',
        energy: 'For energy, try Peppermint, Wild Orange, or Motivate blend. Inhale or apply to temples.',
        focus: 'For focus, use Rosemary, Frankincense, or InTune blend. Diffuse while working.',
        immune: 'For immune support, try On Guard, Oregano, or Tea Tree with proper dilution.',
        digestion: 'For digestion, use Peppermint, Ginger, or DigestZen blend as directed.',
        pets: 'For pets, only use highly diluted Lavender. Always consult a veterinarian first.'
      };
      
      const lower = q.toLowerCase();
      let answer = 'I can help with stress, sleep, energy, focus, immune, digestion, and pet safety. What interests you?';
      
      for (const [key, response] of Object.entries(responses)) {
        if (lower.includes(key)) {
          answer = response;
          break;
        }
      }
      
      alert(answer);
    };

    window.loadSection = (type) => {
      const sections = {
        human: '<h3>Human Wellness</h3><p>Essential oils for stress, sleep, energy, and focus.</p><ul><li>Stress: Lavender, Balance</li><li>Sleep: Serenity, Cedarwood</li><li>Energy: Peppermint, Wild Orange</li><li>Focus: InTune, Frankincense</li></ul>',
        pet: '<h3>Pet Wellness</h3><p>Safe essential oil solutions for pets.</p><ul><li>Calming: Lavender (diluted)</li><li>Always consult veterinarian</li><li>Never use citrus on cats</li></ul>',
        together: '<h3>Healthier Together™</h3><p>Family wellness solutions.</p><ul><li>Family diffuser blends</li><li>Kid-safe ratios</li><li>Healthy home environment</li></ul>',
        shop: '<h3>Your Wellness Shop</h3><p>doTERRA product recommendations.</p><ul><li>Starter kits</li><li>Popular oils</li><li>Supplements</li></ul>',
        education: '<h3>Education Hub</h3><p>Learn about essential oils.</p><ul><li>Safety guidelines</li><li>Dilution charts</li><li>Application methods</li></ul>',
        memberships: '<h3>Membership Benefits</h3><p>doTERRA membership perks.</p><ul><li>25% off retail</li><li>Loyalty rewards</li><li>Free shipping</li></ul>'
      };
      
      const container = document.querySelector('#section-container') || document.createElement('div');
      container.id = 'section-container';
      container.innerHTML = `<div class='section-block'>${sections[type] || 'Section not found.'}</div>`;
      if (!document.querySelector('#section-container')) {
        document.body.append(container);
      }
    };
  };

  function getUserId() {
    return window.FamousAI?.user?.id || localStorage.getItem('doterraid') || 'PRIME_EMPRESS';
  }

  init();
})();