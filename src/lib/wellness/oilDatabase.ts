export interface OilProfile {
  id: string;
  name: string;
  botanicalName: string;
  family: string;
  extraction: string;
  aroma: string;
  emotionalBenefits: string[];
  physicalBenefits: string[];
  spiritualProperties: string[];
  chakraAlignment: string[];
  blendsWith: string[];
  safetyNotes: string[];
  researchNotes: string[];
}

export interface WellnessProtocol {
  id: string;
  name: string;
  description: string;
  oils: string[];
  application: string[];
  frequency: string;
  duration: string;
  precautions: string[];
}

export const oilProfiles: Record<string, OilProfile> = {
  lavender: {
    id: 'lavender',
    name: 'Lavender',
    botanicalName: 'Lavandula angustifolia',
    family: 'Lamiaceae',
    extraction: 'Steam distillation',
    aroma: 'Floral, sweet, herbaceous',
    emotionalBenefits: ['Calming', 'Stress relief', 'Emotional balance'],
    physicalBenefits: ['Sleep support', 'Skin soothing', 'Minor pain relief'],
    spiritualProperties: ['Peace', 'Purification', 'Higher consciousness'],
    chakraAlignment: ['Crown', 'Heart'],
    blendsWith: ['Bergamot', 'Frankincense', 'Roman Chamomile'],
    safetyNotes: ['Generally safe', 'Dilute for sensitive skin'],
    researchNotes: ['Clinically studied for sleep quality', 'Proven anxiolytic effects']
  },
  frankincense: {
    id: 'frankincense',
    name: 'Frankincense',
    botanicalName: 'Boswellia carterii',
    family: 'Burseraceae',
    extraction: 'Steam distillation',
    aroma: 'Woody, spicy, haunting',
    emotionalBenefits: ['Grounding', 'Spiritual connection', 'Mental clarity'],
    physicalBenefits: ['Immune support', 'Cellular health', 'Respiratory support'],
    spiritualProperties: ['Sacred connection', 'Meditation enhancement', 'Divine wisdom'],
    chakraAlignment: ['Crown', 'Third Eye'],
    blendsWith: ['Lavender', 'Wild Orange', 'Sandalwood'],
    safetyNotes: ['Generally safe', 'High quality sources recommended'],
    researchNotes: ['Anti-inflammatory properties', 'Neuroprotective potential']
  },
  peppermint: {
    id: 'peppermint',
    name: 'Peppermint',
    botanicalName: 'Mentha piperita',
    family: 'Lamiaceae',
    extraction: 'Steam distillation',
    aroma: 'Minty, fresh, invigorating',
    emotionalBenefits: ['Mental alertness', 'Confidence', 'Refreshing'],
    physicalBenefits: ['Digestive support', 'Cooling sensation', 'Respiratory clarity'],
    spiritualProperties: ['Clarity', 'Purification', 'Energy activation'],
    chakraAlignment: ['Throat', 'Solar Plexus'],
    blendsWith: ['Eucalyptus', 'Lemon', 'Rosemary'],
    safetyNotes: ['Dilute before topical use', 'Avoid mucous membranes'],
    researchNotes: ['Digestive benefits documented', 'Cognitive enhancement studies']
  }
};

export const wellnessProtocols: Record<string, WellnessProtocol> = {
  stressRelief: {
    id: 'stressRelief',
    name: 'Stress Relief Protocol',
    description: 'Comprehensive approach to managing daily stress',
    oils: ['lavender', 'frankincense', 'bergamot'],
    application: ['Diffuse 3-4 drops', 'Apply to pulse points diluted', 'Inhale directly'],
    frequency: '2-3 times daily',
    duration: '2-4 weeks',
    precautions: ['Dilute before topical use', 'Discontinue if irritation occurs']
  },
  energyBoost: {
    id: 'energyBoost',
    name: 'Natural Energy Protocol',
    description: 'Healthy energy support without stimulants',
    oils: ['peppermint', 'wild_orange', 'rosemary'],
    application: ['Diffuse in morning', 'Apply to temples', 'Inhale from palms'],
    frequency: 'Morning and afternoon',
    duration: 'As needed',
    precautions: ['Avoid before bedtime', 'Dilute peppermint']
  }
};

export const getOilProfile = (oilId: string): OilProfile | null => {
  return oilProfiles[oilId] || null;
};

export const getProtocol = (protocolId: string): WellnessProtocol | null => {
  return wellnessProtocols[protocolId] || null;
};

export const searchOilsByBenefit = (benefit: string): OilProfile[] => {
  return Object.values(oilProfiles).filter(oil => 
    oil.emotionalBenefits.some(b => b.toLowerCase().includes(benefit.toLowerCase())) ||
    oil.physicalBenefits.some(b => b.toLowerCase().includes(benefit.toLowerCase()))
  );
};