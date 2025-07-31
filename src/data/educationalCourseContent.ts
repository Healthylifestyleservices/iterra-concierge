export const comprehensiveEducationalCourse = {
  // Core doTERRA Education Modules
  foundationCourse: {
    title: "doTERRA Foundation Course",
    modules: [
      {
        id: "company-mission",
        title: "Company Mission & Values",
        duration: "45 min",
        resources: [
          { type: "pdf", title: "doTERRA Story & Mission", url: "/education/doterra-story.pdf" },
          { type: "video", title: "Founders Vision", url: "/education/founders-vision.mp4" },
          { type: "ebook", title: "Global Impact Report", url: "/education/global-impact.pdf" }
        ]
      },
      {
        id: "sourcing-quality",
        title: "Sourcing & Quality Control",
        duration: "60 min",
        resources: [
          { type: "pdf", title: "CPTG Testing Standards", url: "/education/cptg-standards.pdf" },
          { type: "podcast", title: "Farm to Bottle Journey", url: "/education/farm-to-bottle.mp3" },
          { type: "video", title: "Co-Impact Sourcing", url: "/education/co-impact.mp4" }
        ]
      },
      {
        id: "clinical-research",
        title: "Clinical Research & Science",
        duration: "90 min",
        resources: [
          { type: "pdf", title: "Research Studies Compilation", url: "/education/research-studies.pdf" },
          { type: "ebook", title: "Scientific Evidence Guide", url: "/education/science-guide.pdf" },
          { type: "webinar", title: "Research Team Insights", url: "/education/research-webinar.mp4" }
        ]
      }
    ]
  },
  
  // Personal Wellness Track
  personalWellness: {
    title: "Personal Wellness Mastery",
    modules: [
      {
        id: "essential-oil-basics",
        title: "Essential Oil Fundamentals",
        duration: "75 min",
        resources: [
          { type: "pdf", title: "Essential Oil Chemistry", url: "/education/oil-chemistry.pdf" },
          { type: "video", title: "Safe Usage Guidelines", url: "/education/safety-guidelines.mp4" },
          { type: "ebook", title: "Beginner's Complete Guide", url: "/education/beginners-guide.pdf" }
        ]
      },
      {
        id: "daily-wellness",
        title: "Daily Wellness Routines",
        duration: "60 min",
        resources: [
          { type: "pdf", title: "Morning & Evening Protocols", url: "/education/daily-protocols.pdf" },
          { type: "podcast", title: "Wellness Lifestyle Tips", url: "/education/wellness-tips.mp3" },
          { type: "video", title: "DIY Recipe Masterclass", url: "/education/diy-recipes.mp4" }
        ]
      }
    ]
  },
  
  // Business Building Track
  businessBuilding: {
    title: "Business Building Excellence",
    modules: [
      {
        id: "getting-started",
        title: "Getting Started as a Wellness Advocate",
        duration: "90 min",
        resources: [
          { type: "pdf", title: "New Advocate Handbook", url: "/education/new-advocate.pdf" },
          { type: "video", title: "First 30 Days Action Plan", url: "/education/30-day-plan.mp4" },
          { type: "ebook", title: "Enrollment Process Guide", url: "/education/enrollment-guide.pdf" }
        ]
      },
      {
        id: "team-building",
        title: "Building Your Team",
        duration: "120 min",
        resources: [
          { type: "pdf", title: "Leadership Development", url: "/education/leadership.pdf" },
          { type: "webinar", title: "Team Building Strategies", url: "/education/team-building.mp4" },
          { type: "podcast", title: "Mentoring Excellence", url: "/education/mentoring.mp3" }
        ]
      },
      {
        id: "financial-freedom",
        title: "Financial Freedom Path",
        duration: "105 min",
        resources: [
          { type: "pdf", title: "Compensation Plan Deep Dive", url: "/education/compensation.pdf" },
          { type: "ebook", title: "Rank Advancement Guide", url: "/education/rank-advancement.pdf" },
          { type: "video", title: "Success Stories & Strategies", url: "/education/success-stories.mp4" }
        ]
      }
    ]
  }
};

export const courseCategories = [
  { id: 'foundation', title: 'Foundation Course', icon: '🏛️' },
  { id: 'wellness', title: 'Personal Wellness', icon: '🌿' },
  { id: 'business', title: 'Business Building', icon: '💼' }
];

export type CourseResource = {
  type: 'pdf' | 'video' | 'ebook' | 'podcast' | 'webinar';
  title: string;
  url: string;
};

export type CourseModule = {
  id: string;
  title: string;
  duration: string;
  resources: CourseResource[];
};

export type CourseTrack = {
  title: string;
  modules: CourseModule[];
};