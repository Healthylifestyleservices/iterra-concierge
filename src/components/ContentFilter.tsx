import React, { useEffect, useRef } from 'react';

interface ContentFilterProps {
  children: React.ReactNode;
}

const ContentFilter: React.FC<ContentFilterProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

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

    const filterContent = () => {
      if (!containerRef.current) return;
      
      const walker = document.createTreeWalker(
        containerRef.current,
        NodeFilter.SHOW_TEXT,
        null
      );

      const textNodes: Text[] = [];
      let node;
      
      while (node = walker.nextNode()) {
        textNodes.push(node as Text);
      }

      textNodes.forEach(textNode => {
        const text = textNode.textContent || '';
        const containsBanned = bannedPhrases.some(phrase => 
          text.includes(phrase)
        );
        
        if (containsBanned) {
          const parent = textNode.parentElement;
          if (parent) {
            parent.style.display = 'none';
            parent.setAttribute('data-banned', 'true');
          }
        }
      });
    };

    // Filter on mount and when content changes
    const observer = new MutationObserver(filterContent);
    
    if (containerRef.current) {
      filterContent();
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
        characterData: true
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="content-filter">
      {children}
    </div>
  );
};

export default ContentFilter;