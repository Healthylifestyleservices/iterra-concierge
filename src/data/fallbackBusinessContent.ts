export interface FallbackBusinessContent {
  training: Array<{
    title: string;
    thumbnail: string;
    pdfUrl: string;
    category: string;
  }>;
  templates: Array<{
    id: string;
    title: string;
    description: string;
    downloadUrl: string;
    thumbnail: string;
  }>;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export const fallbackBusinessContent: FallbackBusinessContent = {
  training: [
    {
      title: "Essential Oils Business Starter Guide",
      thumbnail: "/icons/business-builder.svg",
      pdfUrl: "/training/business-starter-guide.pdf",
      category: "Getting Started"
    },
    {
      title: "Social Media Content Templates",
      thumbnail: "/icons/offerings.svg",
      pdfUrl: "/training/social-media-templates.pdf",
      category: "Marketing"
    },
    {
      title: "Wellness Workshop Planning Kit",
      thumbnail: "/icons/education.svg",
      pdfUrl: "/training/workshop-planning.pdf",
      category: "Education"
    },
    {
      title: "Customer Consultation Forms",
      thumbnail: "/icons/sanctuary.svg",
      pdfUrl: "/training/consultation-forms.pdf",
      category: "Client Care"
    }
  ],
  templates: [
    {
      id: "instagram-story-pack",
      title: "Instagram Story Template Pack",
      description: "20 professional story templates for wellness content",
      downloadUrl: "/templates/instagram-stories.zip",
      thumbnail: "/icons/offerings.svg"
    },
    {
      id: "email-sequence",
      title: "Welcome Email Sequence",
      description: "5-part email series for new wellness customers",
      downloadUrl: "/templates/welcome-emails.zip",
      thumbnail: "/icons/education.svg"
    }
  ],
  colors: {
    primary: "#D4AF37",
    secondary: "#B76E79",
    accent: "#CD7F32"
  }
};