// src/App.js — Main Developer Portfolio Application
import React, { useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './index.css';

// Dedicated Living Browser Hero Workspace
import HeroWorkspace from './components/hero/HeroWorkspace';

// Intro orchestration
import {
  useCinematicOrchestrator,
  UnifiedIntroScreen,
  PHASES,
} from './components/UniverseIntro';

// Portfolio Sections
import Navigation from './components/portfolio/Navigation';
import ProjectsSection from './components/portfolio/ProjectsSection';
import ProjectDetail from './components/portfolio/ProjectDetail';
import AboutSection from './components/portfolio/AboutSection';
import SkillsSection from './components/portfolio/SkillsSection';
import ContactSection from './components/portfolio/ContactSection';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const {
    phase,
    skip,
    advanceToPhase,
  } = useCinematicOrchestrator();

  // Ensure URL is always clean (http://localhost:3000) with zero hash fragments
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

  const isIntroPlaying = phase === PHASES.CINEMATIC;
  const isPortfolioActive = phase === PHASES.PORTFOLIO;

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

      {/* ===== LAYER 2: PERSISTENT NAVIGATION ===== */}
      {isPortfolioActive && (
        <Navigation onContactClick={handleContact} />
      )}

      {/* ===== LAYER 3: MAIN PORTFOLIO SECTIONS ===== */}
      {isPortfolioActive && (
        <main>
          {/* Futuristic Hero with Live Coding Editor Stack & Fixed Bash Terminal */}
          <HeroWorkspace
            onContact={handleContact}
            onSelectProject={setSelectedProject}
          />

          {/* Featured Projects Showcase */}
          <ProjectsSection onSelectProject={setSelectedProject} />

          {/* Architecture & Engineering Workflow */}
          <AboutSection />

          {/* Technical Skills Universe */}
          <SkillsSection />

          {/* Contact & Connect Footer */}
          <ContactSection />
        </main>
      )}

      {/* Modal for viewing project details */}
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}