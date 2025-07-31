import { useEffect } from 'react';

export const useBannedPhraseRemover = () => {
  useEffect(() => {
    const bannedPhrases = [
      "Human Wellness",
      "Pet Wellness", 
      "Healthier Together™",
      "Your Wellness Shop",
      "Education",
      "Memberships",
      "Ask iTerra",
      "Ask about oils, protocols, or pets..."
    ];

    const hideBannedContent = () => {
      document.querySelectorAll("*").forEach((el) => {
        const element = el as HTMLElement;
        const textContent = element.textContent?.trim() || '';
        
        // Check if element contains any banned phrase
        const containsBannedPhrase = bannedPhrases.some(phrase => 
          textContent.includes(phrase)
        );
        
        if (containsBannedPhrase) {
          element.style.display = 'none';
          element.style.visibility = 'hidden';
          element.setAttribute('aria-hidden', 'true');
        }
      });
    };

    // Initial cleanup
    hideBannedContent();

    // Monitor for dynamic content changes
    const observer = new MutationObserver(() => {
      hideBannedContent();
    });

    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      characterData: true 
    });

    return () => observer.disconnect();
  }, []);
};