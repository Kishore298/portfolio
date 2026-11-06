// src/components/portfolio/Navigation.js
// Cyberpunk Glassmorphic Navigation with smooth anchor jumps (Zero-Hash URL management)
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { targetId: 'projects', label: '// PROJECTS' },
  { targetId: 'about', label: '// ABOUT' },
  { targetId: 'skills', label: '// SKILLS' },
  { targetId: 'contact', label: '// CONTACT' },
];

export default function Navigation({ visible = true, onContactClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  const scrollToSection = (e, sectionId) => {
    if (e) e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    // Keep URL clean as http://localhost:3000 without #hash
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  const scrollToTop = (e) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  const handleHireMe = (e) => {
    if (e) e.preventDefault();
    if (onContactClick) {
      onContactClick();
    } else {
      scrollToSection(null, 'contact');
    }
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        padding: '0.9rem clamp(1rem, 3vw, 2.5rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(6, 1, 18, 0.94)' : 'rgba(6, 1, 18, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(0, 243, 255, 0.25)' : 'rgba(0, 243, 255, 0.1)'}`,
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.8)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Brand Logo (Scrolls to top, keeps clean URL) */}
      <button
        onClick={scrollToTop}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '1.15rem',
          fontWeight: 800,
          color: '#ffffff',
          letterSpacing: '0.12em',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ color: '#00f3ff', textShadow: '0 0 12px #00f3ff' }}>KISHORE</span>
        <span style={{ color: '#ec4899', fontSize: '0.85rem' }}>{"// DEV"}</span>
      </button>

      {/* Nav Links (Zero-hash smooth scrolling) */}
      <ul
        style={{
          display: 'flex',
          gap: 'clamp(0.85rem, 2vw, 2.2rem)',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          alignItems: 'center',
        }}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.targetId}>
            <button
              onClick={(e) => scrollToSection(e, link.targetId)}
              style={{
                background: 'none',
                border: 'none',
                padding: '0.35rem 0.2rem',
                cursor: 'pointer',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 'clamp(0.68rem, 1.2vw, 0.75rem)',
                fontWeight: 600,
                color: '#cbd5e1',
                letterSpacing: '0.08em',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#00f3ff';
                e.target.style.textShadow = '0 0 10px rgba(0, 243, 255, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#cbd5e1';
                e.target.style.textShadow = 'none';
              }}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA Button (Scrolls to contact, keeps clean URL) */}
      <button
        onClick={handleHireMe}
        style={{
          padding: '0.45rem 1.15rem',
          border: '1px solid #00f3ff',
          borderRadius: '0.35rem',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.72rem',
          fontWeight: 600,
          color: '#ffffff',
          background: 'rgba(0, 243, 255, 0.15)',
          cursor: 'pointer',
          transition: 'all 0.25s ease',
          boxShadow: '0 0 15px rgba(0, 243, 255, 0.25)',
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(0, 243, 255, 0.3)';
          e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 243, 255, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0, 243, 255, 0.15)';
          e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 243, 255, 0.25)';
        }}
      >
        Hire Me ➔
      </button>
    </motion.nav>
  );
}