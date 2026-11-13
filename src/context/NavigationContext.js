// src/context/NavigationContext.js
// Client-side Router and Global Enquiry System Context
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getServiceBySlug } from '../data/services';

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');
  const [enquiryModal, setEnquiryModal] = useState({
    isOpen: false,
    serviceSlug: null,
    packageId: null,
  });

  // Keep path synced with browser Back/Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update document title dynamically based on active route
  useEffect(() => {
    if (currentPath === '/') {
      document.title = 'Kishore | Junior Full-Stack Developer & Freelance Solutions';
    } else if (currentPath === '/services') {
      document.title = 'Freelance Services & Development Packages | Kishore';
    } else if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      const service = getServiceBySlug(slug);
      if (service) {
        document.title = `${service.title} Packages & Deliverables | Kishore`;
      } else {
        document.title = 'Service Details | Kishore';
      }
    }
  }, [currentPath]);

  // Navigate helper
  const navigate = useCallback((path, options = {}) => {
    const { scrollToId, scrollToTop = true } = options;

    // Handle hash on same page or cross-page
    if (path.includes('#')) {
      const [basePath, hashPart] = path.split('#');
      const targetBase = basePath || '/';

      if (window.location.pathname !== targetBase) {
        window.history.pushState({}, '', targetBase);
        setCurrentPath(targetBase);
        setTimeout(() => {
          const el = document.getElementById(hashPart);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      } else {
        const el = document.getElementById(hashPart);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }

    if (scrollToId) {
      setTimeout(() => {
        const el = document.getElementById(scrollToId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Modal open/close helpers
  const openEnquiry = useCallback((serviceSlug = 'business-websites', packageId = null) => {
    setEnquiryModal({
      isOpen: true,
      serviceSlug,
      packageId,
    });
  }, []);

  const closeEnquiry = useCallback(() => {
    setEnquiryModal((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        openEnquiry,
        closeEnquiry,
        enquiryModal,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
