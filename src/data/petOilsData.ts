export interface PetOil {
  name: string;
  safeFor: ('cats' | 'dogs' | 'horses')[];
  uses: string[];
  dilution: {
    cats?: string;
    dogs?: string;
    horses?: string;
  };
  application: string[];
  warnings: string[];
  productLink?: string;
  foodSafe?: boolean;
  foodUses?: string[];
}

export interface PetCategory {
  name: string;
  description: string;
  oils: PetOil[];
}

export const petOilCategories: PetCategory[] = [
  {
    name: 'Pest Control',
    description: 'Natural pest repellent solutions',
    oils: [
      {
        name: 'Outdoor Protection Blend',
        safeFor: ['dogs', 'horses'],
        uses: ['Flea repellent', 'Tick prevention', 'Mosquito deterrent', 'Outdoor protection'],
        dilution: { dogs: '0.5-1%', horses: '1-2%' },
        application: ['Apply to collar', 'Spray on coat', 'Add to shampoo', 'Diffuse in kennel area'],
        warnings: ['Never use on cats', 'Avoid eyes and nose', 'Test small area first'],
        productLink: 'https://www.doterra.com/US/en/p/terrashield-outdoor-blend'
      },
      {
        name: 'Lemongrass Essential Oil',
        safeFor: ['dogs', 'horses'],
        uses: ['Flea deterrent', 'Ant repellent', 'Flying insect control'],
        dilution: { dogs: '0.25%', horses: '0.5%' },
        application: ['Diffuse around area', 'Add to cleaning solution', 'Spray diluted on bedding'],
        warnings: ['Toxic to cats', 'Highly dilute for dogs', 'Avoid direct skin contact'],
        productLink: 'https://www.doterra.com/US/en/p/lemongrass-oil'
      }
    ]
  },
  {
    name: 'Comfort & Relaxation',
    description: 'Natural calming and comfort support',
    oils: [
      {
        name: 'Lavender Essential Oil',
        safeFor: ['dogs', 'horses'],
        uses: ['Restlessness relief', 'Sleep support', 'Storm comfort', 'Travel ease'],
        dilution: { dogs: '0.5%', horses: '1%' },
        application: ['Diffuse in room', 'Apply to collar', 'Add to bedding', 'Spray in carrier'],
        warnings: ['Use sparingly with cats', 'May cause drowsiness', 'Start with minimal amounts'],
        productLink: 'https://www.doterra.com/US/en/p/lavender-oil'
      },
      {
        name: 'Calming Blend',
        safeFor: ['dogs', 'horses'],
        uses: ['Travel comfort', 'Vet visits', 'Competition nerves', 'Separation support'],
        dilution: { dogs: '0.5%', horses: '1%' },
        application: ['Diffuse 30min before event', 'Apply to chest', 'Add to travel crate'],
        warnings: ['Not for cats', 'Start with lower dilution', 'Monitor for drowsiness'],
        productLink: 'https://www.doterra.com/US/en/p/adaptiv-calming-blend'
      }
    ]
  }
];

export const safeOilsByPet = {
  cats: {
    safe: ['Frankincense (diffused)', 'Copaiba (diffused)', 'Lavender (minimal diffusion)'],
    avoid: ['Tea Tree', 'Eucalyptus', 'Peppermint', 'All citrus oils', 'Pine', 'Lemongrass', 'Outdoor blends']
  },
  dogs: {
    safe: ['Lavender', 'Frankincense', 'Copaiba', 'Cedarwood', 'Ginger', 'Digestive Blend'],
    caution: ['Peppermint (low dilution)', 'Lemongrass (very diluted)', 'Respiratory blend']
  },
  horses: {
    safe: ['Lavender', 'Frankincense', 'Copaiba', 'Peppermint', 'Eucalyptus', 'Tea Tree', 'All above oils']
  }
};