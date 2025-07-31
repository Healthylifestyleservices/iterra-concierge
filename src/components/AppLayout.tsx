import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Header from './Header';
import Sidebar from './Sidebar';
import WellnessConsultantSection from './WellnessConsultantSection';
import CollectionsSection from './CollectionsSection';
import HealthVitalitySection from './HealthVitalitySection';
import MembershipSection from './MembershipSection';
import BusinessSection from './BusinessSection';
import EducationHub from './EducationHub';
import HolidayToolsSection from './HolidayToolsSection';
import ExperiencesSection from './ExperiencesSection';
import PetSection from './PetSection';
import MonthlySpecial from './MonthlySpecial';
import ProductCatalog from './ProductCatalog';
import MensSection from './MensSection';
import WomensSection from './WomensSection';
import iTerraAssistantBubble from './iTerraAssistantBubble';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('en');
  const [region, setRegion] = useState('US');

  useEffect(() => {
    const detectUserPreferences = () => {
      const browserLanguage = navigator.language.split('-')[0] || 'en';
      const browserRegion = navigator.language.split('-')[1] || 'US';
      
      setLanguage(browserLanguage);
      setRegion(browserRegion);
      
      localStorage.setItem('selectedLanguage', browserLanguage);
      localStorage.setItem('selectedRegion', browserRegion);
    };

    detectUserPreferences();
  }, []);

  const renderContent = () => {
    switch (activeSection) {
      case 'mens':
        return <MensSection />;
      case 'womens':
        return <WomensSection />;
      case 'products':
        return <ProductCatalog />;
      case 'collections':
        return <CollectionsSection />;
      case 'health-vitality':
        return <HealthVitalitySection />;
      case 'membership':
        return <MembershipSection />;
      case 'business':
        return <BusinessSection />;
      case 'education':
        return <EducationHub />;
      case 'holiday':
        return <HolidayToolsSection />;
      case 'experiences':
        return <ExperiencesSection />;
      case 'pets':
        return <PetSection />;
      case 'monthly':
        return <MonthlySpecial />;
      case 'home':
      default:
        return <WellnessConsultantSection onSectionChange={handleSectionChange} />;
    }
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    if (isMobile) {
      toggleSidebar();
    }
  };

  React.useEffect(() => {
    const handleNavigate = (event: CustomEvent) => {
      setActiveSection(event.detail);
    };

    window.addEventListener('navigate', handleNavigate as EventListener);
    return () => window.removeEventListener('navigate', handleNavigate as EventListener);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 via-blue-50 via-green-50 to-yellow-50">
      <Header onMenuClick={toggleSidebar} />
      
      <div className="flex">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={toggleSidebar}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
        <main className={`flex-1 transition-all duration-300 ${sidebarOpen && !isMobile ? 'ml-64' : 'ml-0'}`}>
          <div className="p-4">
            {renderContent()}
          </div>
        </main>
      </div>
      
      <iTerraAssistantBubble />
    </div>
  );
};

export default AppLayout;
export { AppLayout };