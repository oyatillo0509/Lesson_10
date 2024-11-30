import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      const currentSection = sectionIds
        .map(sectionId => {
          const element = document.getElementById(sectionId);
          if (!element) return { id: sectionId, position: -1 };
          
          return {
            id: sectionId,
            position: element.offsetTop
          };
        })
        .filter(section => section.position !== -1)
        .reduce((acc, section) => {
          if (section.position <= scrollPosition) {
            return section.id;
          }
          return acc;
        }, sectionIds[0]);

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}