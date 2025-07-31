export const getAssistantResponse = (message: string): { response: string; route?: string } => {
  const msg = message.toLowerCase();

  if (msg.includes('pet') || msg.includes('dog') || msg.includes('cat')) {
    return { response: "Let's support your pet's wellness.", route: '/pets' };
  }

  if (msg.includes('clean') || msg.includes('home') || msg.includes('laundry')) {
    return { response: 'Great! Here\'s where you\'ll find natural living essentials.', route: '/home' };
  }

  if (msg.includes('oil') || msg.includes('aroma') || msg.includes('diffuser')) {
    return { response: 'Let\'s explore essential oils tailored to your mood.', route: '/category/mood' };
  }

  if (msg.includes('immune') || msg.includes('sick') || msg.includes('tired')) {
    return { response: 'Here are oils and protocols to support your immune system.', route: '/category/immune' };
  }

  if (msg.includes('wellness') || msg.includes('custom') || msg.includes('intake')) {
    return { response: 'Let\'s begin your personalized wellness intake.', route: '/intake' };
  }

  return { response: "I'm here to help — could you clarify what kind of support you're looking for?" };
};