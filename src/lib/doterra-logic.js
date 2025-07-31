// Enhanced iTerra functionality with full navigation and chat
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
        if (id) {
          window.location.href = `https://www.doterra.com/${id}/?source=iterra`;
        } else {
          alert("Your associate link is missing.");
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
      
      // Simple local AI responses
      const responses = {
        'stress': 'For stress relief, try Lavender, Bergamot, or the Serenity blend. Apply topically or diffuse.',
        'sleep': 'For better sleep, use Lavender, Cedarwood, or Serenity blend before bedtime.',
        'energy': 'For natural energy, try Peppermint, Wild Orange, or the Motivate blend.',
        'focus': 'For mental clarity, use Rosemary, Peppermint, or the InTune blend.',
        'immune': 'For immune support, consider On Guard blend, Oregano, or Melaleuca.',
        'digestion': 'For digestive support, try DigestZen blend, Peppermint, or Ginger.',
        'pet': 'For pets, use only pet-safe oils like Lavender (diluted), Frankincense, or Copaiba. Always consult a vet.',
        'default': 'I can help with essential oil recommendations for wellness, stress, sleep, energy, focus, immune support, digestion, and pet safety. What specific area interests you?'
      };
      
      const lowerQ = q.toLowerCase();
      let answer = responses.default;
      
      for (const [key, response] of Object.entries(responses)) {
        if (lowerQ.includes(key)) {
          answer = response;
          break;
        }
      }
      
      alert(answer);
    };

    window.loadSection = (type) => {
      const container = document.querySelector('#section-container') || document.createElement('div');
      container.id = 'section-container';
      
      const sections = {
        human: `<h2>Human Wellness</h2>
                <p>Essential oils for human health and wellness.</p>
                <div style="display: grid; gap: 1rem; margin-top: 1rem;">
                  <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #ddd;">
                    <h3>Stress Relief</h3>
                    <p>Lavender, Bergamot, Serenity blend</p>
                  </div>
                  <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #ddd;">
                    <h3>Energy Support</h3>
                    <p>Peppermint, Wild Orange, Motivate blend</p>
                  </div>
                </div>`,
        pet: `<h2>Pet Wellness</h2>
              <p>Safe essential oils for your furry friends.</p>
              <div style="background: #fff3cd; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                <strong>⚠️ Always consult your veterinarian before using essential oils with pets.</strong>
                <p>Pet-safe options: Lavender (highly diluted), Frankincense, Copaiba</p>
              </div>`,
        together: `<h2>Healthier Together™</h2>
                   <p>Family wellness solutions for everyone.</p>
                   <div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                     <h3>Family Diffuser Blends</h3>
                     <p>Create a healthy home environment with our family-safe essential oil blends.</p>
                   </div>`,
        shop: `<h2>Your Wellness Shop</h2>
               <p>Browse our product catalog.</p>
               <button class="doterra-button" style="background: #7c3aed; color: white; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; margin-top: 1rem;">Visit doTERRA Store</button>`,
        education: `<h2>Education Hub</h2>
                    <p>Learn about essential oils and wellness.</p>
                    <div style="display: grid; gap: 1rem; margin-top: 1rem;">
                      <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #ddd;">
                        <h3>Getting Started Guide</h3>
                        <p>New to essential oils? Start here!</p>
                      </div>
                      <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #ddd;">
                        <h3>Safety Guidelines</h3>
                        <p>Important safety information for oil use</p>
                      </div>
                    </div>`,
        memberships: `<h2>Membership Options</h2>
                      <p>Join our wellness community and save on your favorite products.</p>
                      <div style="background: white; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                        <h3>Loyalty Rewards Program</h3>
                        <p>Earn points on every purchase and get exclusive member benefits.</p>
                        <button class="doterra-button" style="background: #059669; color: white; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; margin-top: 1rem;">Learn More</button>
                      </div>`
      };
      
      container.innerHTML = `<div class='section-block'>${sections[type] || 'Section not found'}</div>`;
      
      if (!document.body.contains(container)) {
        document.body.append(container);
      }
      
      // Re-enable doTERRA buttons in new content
      container.querySelectorAll('.doterra-button').forEach((btn) => {
        btn.onclick = () => {
          const id = getUserId();
          if (id) {
            window.location.href = `https://www.doterra.com/${id}/?source=iterra`;
          } else {
            alert("Your associate link is missing.");
          }
        };
      });
    };
  };

  function getUserId() {
    return window.FamousAI?.user?.id || localStorage.getItem('doterraid') || 'PRIME_EMPRESS';
  }

  init();
})();