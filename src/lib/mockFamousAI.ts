// Mock Famous AI service disabled - using local wellness responses
export class MockFamousAI {
  static async queryFamousAI(prompt: string): Promise<{ response: string }> {
    console.warn('Famous AI disabled - using local wellness responses');
    
    // Simulate API delay for realistic UX
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Enhanced wellness responses without AI dependency
    const responses = {
      wellness: "Based on your wellness inquiry, I recommend exploring doTERRA's CPTG Certified Pure Tested Grade essential oils. Consider starting with our Intro to Essential Oils Kit to experience the benefits safely.",
      oils: "doTERRA essential oils are rigorously tested for purity and potency. Always follow dilution guidelines and consult our safety resources. Visit your doTERRA consultant for personalized guidance.",
      protocol: "A personalized wellness protocol should align with your lifestyle and goals. Our wellness consultants can help create a customized approach using doTERRA products and resources.",
      emotional: "Essential oils like Lavender, Balance, and Serenity can support emotional wellness through aromatherapy. Create a daily routine that includes mindfulness and natural solutions.",
      business: "Building a doTERRA business starts with personal experience and authentic sharing. Focus on helping others discover natural wellness solutions while building meaningful relationships.",
      education: "doTERRA offers comprehensive education through our learning platform, including courses on essential oil science, business building, and wellness protocols.",
      default: "Thank you for connecting with iTERRA. I'm here to provide doTERRA wellness guidance and business support. How can I help you on your natural wellness journey?"
    };
    
    const lowerPrompt = prompt.toLowerCase();
    let response = responses.default;
    
    if (lowerPrompt.includes('wellness') || lowerPrompt.includes('health')) {
      response = responses.wellness;
    } else if (lowerPrompt.includes('oil') || lowerPrompt.includes('essential')) {
      response = responses.oils;
    } else if (lowerPrompt.includes('protocol') || lowerPrompt.includes('recommend')) {
      response = responses.protocol;
    } else if (lowerPrompt.includes('emotion') || lowerPrompt.includes('stress') || lowerPrompt.includes('anxiety')) {
      response = responses.emotional;
    } else if (lowerPrompt.includes('business') || lowerPrompt.includes('income') || lowerPrompt.includes('team')) {
      response = responses.business;
    } else if (lowerPrompt.includes('learn') || lowerPrompt.includes('education') || lowerPrompt.includes('course')) {
      response = responses.education;
    }
    
    return { 
      response,
      source: 'local',
      timestamp: new Date().toISOString(),
      disclaimer: 'This information is for educational purposes only and not intended as medical advice.'
    };
  }

  // Additional helper methods for wellness guidance
  static getWellnessCategories() {
    return [
      'Emotional Support',
      'Physical Wellness', 
      'Daily Routines',
      'Seasonal Support',
      'Sleep & Relaxation',
      'Energy & Focus'
    ];
  }

  static getBusinessGuidance() {
    return {
      gettingStarted: 'Begin with personal use and authentic sharing',
      buildingTeam: 'Focus on helping others achieve their wellness goals',
      education: 'Continuous learning through doTERRA resources',
      support: 'Connect with your upline and company training'
    };
  }
}