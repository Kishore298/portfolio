// src/App.js — Main Developer Portfolio & Freelance Services Application
import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './index.css';

// Context & Routing
import { NavigationProvider, useNavigation } from './context/NavigationContext';

// Dedicated Living Browser Hero Workspace
import HeroWorkspace from './components/hero/HeroWorkspace';

// Intro orchestration
import {
  useCinematicOrchestrator,
  UnifiedIntroScreen,
  PHASES,
} from './components/UniverseIntro';

// Portfolio & Services Sections
import Navigation from './components/portfolio/Navigation';
import ServicesSection from './components/portfolio/ServicesSection';
import ProjectsSection from './components/portfolio/ProjectsSection';
import ProjectDetail from './components/portfolio/ProjectDetail';
import AboutSection from './components/portfolio/AboutSection';
import SkillsSection from './components/portfolio/SkillsSection';
import ContactSection from './components/portfolio/ContactSection';

// Dedicated Freelance Services Pages & Modal
import ServicesLandingPage from './components/services/ServicesLandingPage';
import ServiceCategoryPage from './components/services/ServiceCategoryPage';
import EnquiryModal from './components/services/EnquiryModal';

function PortfolioAppContent() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { currentPath, enquiryModal, closeEnquiry } = useNavigation();

  const {
    phase,
    skip,
    advanceToPhase,
  } = useCinematicOrchestrator();

  // If visitor lands directly on a service page, automatically bypass intro
  useEffect(() => {
    if (currentPath !== '/' && phase === PHASES.CINEMATIC) {
      skip();
    }
  }, [currentPath, phase, skip]);

  // Keep URL clean without unwanted hash fragments
  useEffect(() => {
    if (window.location.hash) {
      const hashTarget = window.location.hash.replace('#', '');
      window.history.replaceState(null, '', window.location.pathname);
      setTimeout(() => {
        const target = document.getElementById(hashTarget);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }

    const cleanHash = () => {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    };
    window.addEventListener('hashchange', cleanHash);
    return () => window.removeEventListener('hashchange', cleanHash);
  }, []);

  // "Explore My Work" and intro skip navigate directly to top of Hero section
  const handleExplore = useCallback(() => {
    advanceToPhase(PHASES.PORTFOLIO);
    setTimeout(() => {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }, 100);
  }, [advanceToPhase]);

  const handleContact = useCallback(() => {
    advanceToPhase(PHASES.PORTFOLIO);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    }, 200);
  }, [advanceToPhase]);

  const isIntroPlaying = currentPath === '/' && phase === PHASES.CINEMATIC;
  const isPortfolioActive = !isIntroPlaying;

  // Determine current service slug if on a /services/:slug route
  const isServicesLanding = currentPath === '/services';
  const isServiceCategory = currentPath.startsWith('/services/') && currentPath !== '/services';
  const categorySlug = isServiceCategory
    ? currentPath.replace('/services/', '').replace(/\/$/, '')
    : null;

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#03000a', color: '#f8fafc' }}>
      {/* ===== LAYER 1: UNIFIED SINGLE-SCREEN DEVELOPER SHOWCASE (LINE-FREE, NO THREE.JS) ===== */}
      <AnimatePresence>
        {isIntroPlaying && (
          <UnifiedIntroScreen
            key="unified-intro-screen"
            onExplore={handleExplore}
            onContact={handleContact}
            onSkip={skip}
          />
        )}
      </AnimatePresence>

      {/* ===== LAYER 2: PERSISTENT CYBERPUNK NAVIGATION ===== */}
      {isPortfolioActive && (
        <Navigation onContactClick={handleContact} />
      )}

      {/* ===== LAYER 3: ROUTED CONTENT ===== */}
      {isPortfolioActive && (
        <main>
          {/* Route: Services Landing Page (/services) */}
          {isServicesLanding && (
            <>
              <ServicesLandingPage />
              <ContactSection />
            </>
          )}

          {/* Route: Dedicated Service Category Detail Page (/services/:slug) */}
          {isServiceCategory && (
            <>
              <ServiceCategoryPage slug={categorySlug} />
              <ContactSection />
            </>
          )}

          {/* Route: Homepage (/) with Hero, Services, Projects, About, Skills & Contact */}
          {currentPath === '/' && (
            <>
              {/* Futuristic Hero with Live Coding Editor Stack & Fixed Bash Terminal */}
              <HeroWorkspace
                onContact={handleContact}
                onSelectProject={setSelectedProject}
              />

              {/* Homepage Services & Solutions (Placed immediately above Featured Projects) */}
              <ServicesSection />

              {/* Featured Projects Showcase */}
              <ProjectsSection onSelectProject={setSelectedProject} />

              {/* Architecture & Engineering Workflow */}
              <AboutSection />

              {/* Technical Skills Universe */}
              <SkillsSection />

              {/* Contact & Connect Footer */}
              <ContactSection />
            </>
          )}
        </main>
      )}

      {/* Modal for viewing project details */}
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Cyberpunk Interactive Project Enquiry Gateway (WhatsApp & Email Dispatch) */}
      <EnquiryModal
        isOpen={enquiryModal.isOpen}
        onClose={closeEnquiry}
        initialServiceSlug={enquiryModal.serviceSlug}
        initialPackageId={enquiryModal.packageId}
      />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <PortfolioAppContent />
    </NavigationProvider>
  );
}
