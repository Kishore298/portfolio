// src/components/UniverseIntro.js
// Unified Single-Screen Developer Showcase Intro (Pure CSS, Line-Free, High-Performance)
// Clean deep cosmic backdrop with ambient glow, glowing typography,
// infinite tech skills marquee loop, and direct action buttons.
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export const PHASES = {
  CINEMATIC: 'cinematic', // Single unified intro showcase screen
  PORTFOLIO: 'portfolio', // Full website active (Hero workspace + sections)
};

// Technology stack with clean, high-fidelity inline SVG logos
export const TECH_STACK = [
  {
    name: 'React',
    color: '#00f3ff',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f3ff" strokeWidth="1.8">
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.6" fill="#00f3ff" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#22c55e',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
        <path d="M12 2l8 4.6v9.2L12 21l-8-4.6V6.6L12 2z" />
        <path d="M12 7v10" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    name: 'Express.js',
    color: '#f472b6',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="16" rx="3" strokeDasharray="20 4" />
        <path d="M7 9h10M7 12h6M7 15h9" />
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    color: '#10b981',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8">
        <path d="M12 2C8 6 6 11 6 15a6 6 0 0012 0c0-4-2-9-6-13z" />
        <path d="M12 2v20" />
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    color: '#fbbf24',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24">
        <rect width="22" height="22" x="1" y="1" rx="4" fill="#fbbf24" fillOpacity="0.2" stroke="#fbbf24" strokeWidth="1.6" />
        <text x="12" y="15.5" fill="#fbbf24" fontSize="10.5" fontWeight="900" textAnchor="middle" fontFamily="monospace">JS</text>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    color: '#60a5fa',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24">
        <rect width="22" height="22" x="1" y="1" rx="4" fill="#3b82f6" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="1.6" />
        <text x="12" y="15.5" fill="#93c5fd" fontSize="10.5" fontWeight="900" textAnchor="middle" fontFamily="monospace">TS</text>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    color: '#38bdf8',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8">
        <path d="M6 13c2-4 5-4 7-2s5 2 7-2c-2 4-5 4-7 2s-5-2-7 2z" />
        <path d="M2 9c2-4 5-4 7-2s5 2 7-2c-2 4-5 4-7 2s-5-2-7 2z" />
      </svg>
    ),
  },
  {
    name: 'Redux Toolkit',
    color: '#c084fc',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" strokeDasharray="5 3" />
        <circle cx="12" cy="12" r="3" fill="#c084fc" />
      </svg>
    ),
  },
  {
    name: 'REST APIs',
    color: '#00f3ff',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f3ff" strokeWidth="1.8">
        <path d="M4 12h4m8 0h4M12 4v4m0 8v4" />
        <circle cx="12" cy="12" r="4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Redis',
    color: '#ef4444',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: 'AWS S3',
    color: '#f97316',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8">
        <path d="M3 7l9-4 9 4v10l-9 4-9-4V7z" />
        <path d="M3 7l9 4 9-4" />
      </svg>
    ),
  },
  {
    name: 'Cashfree Payments',
    color: '#10b981',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
        <circle cx="7" cy="15" r="1" fill="#10b981" />
      </svg>
    ),
  },
  {
    name: 'Mongoose',
    color: '#fb7185',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fb7185" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
        <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
  },
  {
    name: 'Git & GitHub',
    color: '#fb923c',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="1.8">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="12" r="3" />
        <path d="M6 9v6M9 6h4a5 5 0 015 5" />
      </svg>
    ),
  },
  {
    name: 'JWT Auth',
    color: '#ec4899',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.8">
        <path d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" />
        <circle cx="12" cy="11" r="2" fill="#ec4899" />
      </svg>
    ),
  },
  {
    name: 'Socket.IO',
    color: '#facc15',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#facc15" strokeWidth="1.8">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#facc15" fillOpacity="0.25" />
      </svg>
    ),
  },
  {
    name: 'cPanel & MilesWeb',
    color: '#38bdf8',
    renderIcon: () => (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export function useCinematicOrchestrator() {
  const [phase, setPhase] = useState(PHASES.CINEMATIC);
  const isSkippedRef = useRef(false);

  const advanceToPhase = useCallback((p) => setPhase(p), []);

  const skip = useCallback(() => {
    isSkippedRef.current = true;
    setPhase(PHASES.PORTFOLIO);
    setTimeout(() => {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  }, []);

  return {
    phase,
    skip,
    advanceToPhase,
    PHASES,
  };
}

// ===== UNIFIED SINGLE-SCREEN INTRO COMPONENT (NO LINES, NO THREE.JS) =====
export function UnifiedIntroScreen({ onExplore, onContact, onSkip }) {
  // Duplicate tech stack for infinite seamless continuous marquee
  const marqueeItems = [...TECH_STACK, ...TECH_STACK];

  // Optional: Allow scroll wheel to smoothly enter portfolio workspace
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 25) {
        onExplore();
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [onExplore]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem 1.5rem',
        background: '#03000a',
        overflow: 'hidden',
      }}
    >
      {/* Ambient Atmospheric Radial Lighting (NO LINES, pure soft deep glows) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          background: `
            radial-gradient(circle at 50% 45%, rgba(42, 14, 82, 0.45) 0%, rgba(10, 4, 26, 0.9) 65%, #03000a 100%),
            radial-gradient(circle at 12% 18%, rgba(0, 243, 255, 0.1) 0%, transparent 45%),
            radial-gradient(circle at 88% 82%, rgba(236, 72, 153, 0.1) 0%, transparent 45%)
          `,
        }}
      />

      {/* Top Bar: Skip Intro on right (No Scene Trackers) */}
      <header
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          maxWidth: '1280px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          onClick={onSkip}
          style={{
            background: 'rgba(236, 72, 153, 0.12)',
            border: '1px solid rgba(236, 72, 153, 0.45)',
            color: '#ffffff',
            padding: '0.45rem 1.15rem',
            borderRadius: '0.375rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.78rem',
            fontWeight: 700,
            cursor: 'pointer',
            letterSpacing: '0.08em',
            boxShadow: '0 0 16px rgba(236, 72, 153, 0.25)',
            backdropFilter: 'blur(8px)',
            transition: 'all 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(236, 72, 153, 0.28)';
            e.currentTarget.style.borderColor = '#00f3ff';
            e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 243, 255, 0.5)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(236, 72, 153, 0.12)';
            e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.45)';
            e.currentTarget.style.boxShadow = '0 0 16px rgba(236, 72, 153, 0.25)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Skip Intro ➔
        </motion.button>
      </header>

      {/* Main Center Content: Combined Identity & Marquee */}
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '1100px',
          width: '100%',
          marginTop: 'auto',
          marginBottom: 'auto',
          padding: '1rem 0',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* 1. Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(0.75rem, 1.4vw, 0.95rem)',
            fontWeight: 700,
            letterSpacing: '0.22em',
            color: '#00f3ff',
            textShadow: '0 0 15px rgba(0, 243, 255, 0.65)',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
          }}
        >
          {'// JUNIOR FULL-STACK DEVELOPER'}
        </motion.div>

        {/* 2. Primary Glowing Name: KISHORE */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(3.4rem, 8.8vw, 6.8rem)',
            fontWeight: 900,
            letterSpacing: '0.08em',
            lineHeight: 1.05,
            color: '#ffffff',
            textShadow:
              '0 0 25px rgba(0, 243, 255, 0.85), 0 0 55px rgba(0, 243, 255, 0.45), 0 0 100px rgba(168, 85, 247, 0.3)',
            marginBottom: '0.65rem',
            userSelect: 'none',
          }}
        >
          KISHORE
        </motion.h1>

        {/* 3. Role Title: FULL-STACK DEVELOPER (glowing magenta/pink) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(1.15rem, 2.6vw, 1.85rem)',
            fontWeight: 800,
            letterSpacing: '0.22em',
            color: '#ec4899',
            textShadow:
              '0 0 20px rgba(236, 72, 153, 0.8), 0 0 45px rgba(236, 72, 153, 0.4)',
            marginBottom: '1rem',
            textTransform: 'uppercase',
          }}
        >
          FULL-STACK DEVELOPER
        </motion.div>

        {/* 4. Tagline: "Building digital experiences from frontend to backend." */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(1.05rem, 2.1vw, 1.35rem)',
            fontWeight: 500,
            color: '#fbcfe8',
            fontStyle: 'italic',
            letterSpacing: '0.04em',
            textShadow: '0 0 20px rgba(236, 72, 153, 0.45)',
            marginBottom: '2.0rem',
            maxWidth: '680px',
          }}
        >
          "Building digital experiences from frontend to backend."
        </motion.p>

        {/* 5. CONTINUOUS TECH SKILLS MARQUEE (with authentic logos) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="tech-marquee-container"
          style={{
            marginBottom: '2.5rem',
          }}
        >
          <div className="tech-marquee-track">
            {marqueeItems.map((tech, idx) => (
              <div
                key={`${tech.name}-${idx}`}
                className="tech-marquee-item"
                style={{
                  border: `1px solid ${tech.color}45`,
                  boxShadow: `0 0 14px ${tech.color}22`,
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  {tech.renderIcon()}
                </span>
                <span
                  style={{
                    color: '#f8fafc',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                  }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 6. Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          style={{
            display: 'flex',
            gap: '1.25rem',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={onExplore}
            className="btn-cyber-primary"
            style={{
              padding: '0.85rem 2.25rem',
              fontSize: '0.98rem',
              letterSpacing: '0.08em',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Explore My Work ↓
          </button>
          <button
            onClick={onContact}
            className="btn-cyber-secondary"
            style={{
              padding: '0.85rem 2.1rem',
              fontSize: '0.98rem',
              letterSpacing: '0.06em',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Contact Me ↗
          </button>
        </motion.div>
      </main>

      {/* Bottom Subtle Scroll Indicator */}
      <footer
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.72rem',
          color: 'rgba(255, 255, 255, 0.4)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <span style={{ color: '#00f3ff' }}>◆</span> SCROLL OR CLICK TO ENTER WORKSPACE <span style={{ color: '#ec4899' }}>◆</span>
      </footer>
    </div>
  );
}

// Backwards-compatible export placeholders
export function SkipButton({ onSkip, visible = true }) {
  return null;
}
export function CinematicHud() {
  return null;
}
export function FinalRevealOverlay() {
  return null;
}