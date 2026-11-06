// src/components/portfolio/Navigation.js
// Cyberpunk Glassmorphic Navigation with smooth anchor jumps
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { href: '#projects', label: '// PROJECTS' },
  { href: '#about', label: '// ABOUT' },
  { href: '#skills', label: '// SKILLS' },
  { href: '#contact', label: '// CONTACT' },
];

export default function Navigation({ visible = false }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

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
        padding: '1.1rem 2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(6, 1, 18, 0.94)' : 'rgba(6, 1, 18, 0.45)',
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(0, 243, 255, 0.25)' : 'rgba(0, 243, 255, 0.1)'}`,
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.8)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Brand Logo */}
      <a
        href="#top"
        style={{
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '1.15rem',
          fontWeight: 800,
          color: '#ffffff',
          letterSpacing: '0.12em',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ color: '#00f3ff', textShadow: '0 0 12px #00f3ff' }}>KISHORE</span>
        <span style={{ color: '#ec4899', fontSize: '0.85rem' }}>{"// DEV"}</span>
      </a>

      {/* Nav Links */}
      <ul style={{
        display: 'flex',
        gap: '2.2rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      }}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#cbd5e1',
                textDecoration: 'none',
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
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href="#contact"
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
          textDecoration: 'none',
          boxShadow: '0 0 15px rgba(0, 243, 255, 0.25)',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(0, 243, 255, 0.3)';
          e.target.style.boxShadow = '0 0 25px rgba(0, 243, 255, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(0, 243, 255, 0.15)';
          e.target.style.boxShadow = '0 0 15px rgba(0, 243, 255, 0.25)';
        }}
      >
        Hire Me ➔
      </a>
    </motion.nav>
  );
}