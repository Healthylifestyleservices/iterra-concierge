import { config } from './config';
import { comprehensiveEducationalCourse } from '@/data/educationalCourseContent';

// Enhanced fallback content with comprehensive educational resources
const fallbackBusinessContent = {
  // Educational Course Integration
  educationalCourse: comprehensiveEducationalCourse,
  
  // Training Materials
  training: [
    {
      title: "doTERRA Foundation Mastery",
      category: "foundation",
      duration: "3 hours",
      pdfUrl: "/education/foundation-mastery.pdf",
      thumbnail: "/geometry/flower-of-life.svg",
      description: "Complete guide to doTERRA's mission, sourcing, and quality standards"
    },
    {
      title: "Essential Oil Business Basics", 
      category: "business",
      duration: "2.5 hours",
      pdfUrl: "/education/business-basics.pdf",
      thumbnail: "/geometry/lotus-gold.svg",
      description: "Start your wellness advocacy journey with confidence"
    },
    {
      title: "Personal Wellness Mastery",
      category: "wellness", 
      duration: "4 hours",
      pdfUrl: "/education/wellness-mastery.pdf",
      thumbnail: "/geometry/metatron-gold.svg",
      description: "Transform your daily wellness routine with essential oils"
    }
  ],
  
  // Business Templates & Resources
  templates: [
    {
      name: "New Member Welcome Kit",
      category: "onboarding",
      downloadUrl: "/templates/welcome-kit.zip",
      description: "Complete onboarding materials for new team members"
    },
    {
      name: "Class Presentation Templates",
      category: "education",
      downloadUrl: "/templates/class-presentations.zip",
      description: "Professional presentation slides for oil classes"
    }
  ],
  
  // Associate Resources
  associateResources: {
    enrollmentGuide: "/resources/enrollment-guide.pdf",
    compensationPlan: "/resources/compensation-plan.pdf",
    productCatalog: "/resources/product-catalog.pdf",
    safetyGuidelines: "/resources/safety-guidelines.pdf"
  },
  
  // Contact Integration
  associateContact: {
    defaultMessage: "Ready to start your wellness journey? Connect with your personal doTERRA consultant:",
    enrollmentCTA: "Get started with a Wholesale Customer or Wellness Advocate account",
    supportMessage: "Questions about products or business opportunity? Your consultant is here to help!"
  }
} as const;

export async function fetchBusinessTools(associateId?: string) {
  try {
    const apiKey = config.doterra?.apiKey;
    const targetAssociateId = associateId || config.doterra?.associateId || 'default';
    
    if (apiKey) {
      const res = await fetch(
        `https://api.doterra.com/v1/associates/${targetAssociateId}/tools`,
        { headers: { 'Authorization': `Bearer ${apiKey}` } }
      );
      
      if (res.ok) {
        const apiData = await res.json();
        return {
          ...fallbackBusinessContent,
          ...apiData,
          associateId: targetAssociateId
        };
      }
    }
  } catch (error) {
    console.warn('doTERRA API unavailable, using fallback content');
  }
  
  return {
    ...fallbackBusinessContent,
    associateId: associateId || config.doterra?.associateId || 'guest'
  };
}

export type BusinessTraining = {
  title: string;
  category: string;
  duration: string;
  pdfUrl: string;
  thumbnail: string;
  description: string;
};

export type BusinessTemplate = {
  name: string;
  category: string;
  downloadUrl: string;
  description: string;
};

export type BusinessContent = {
  educationalCourse: typeof comprehensiveEducationalCourse;
  training: BusinessTraining[];
  templates: BusinessTemplate[];
  associateResources: Record<string, string>;
  associateContact: {
    defaultMessage: string;
    enrollmentCTA: string;
    supportMessage: string;
  };
  associateId: string;
};