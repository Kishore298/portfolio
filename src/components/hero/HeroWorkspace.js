// src/components/hero/HeroWorkspace.js
// Futuristic Living Browser Developer Workspace Hero: Fixed Bash Terminal + 3D Layered Code Editor Stack
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import FixedBashTerminal from './FixedBashTerminal';
import EditorStack from './EditorStack';

export default function HeroWorkspace({ onContact, onSelectProject }) {
  const container3DRef = useRef();

  // High-performance direct DOM pointer parallax — ZERO React state re-renders
  useEffect(() => {
    const el = container3DRef.current;
    if (!el) return;

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let animId;

    const handlePointerMove = (e) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetRotX = normY * -2.2;
      targetRotY = normX * 2.8;
    };

    const updateFrame = () => {
      currentRotX += (targetRotX - currentRotX) * 0.08;
      currentRotY += (targetRotY - currentRotY) * 0.08;
      if (el) {
        el.style.transform = `rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;
      }
      animId = requestAnimationFrame(updateFrame);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    animId = requestAnimationFrame(updateFrame);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleScrollToProjects = (e) => {
    if (e) e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  const handleScrollToContact = (e) => {
    if (e) e.preventDefault();
    if (onContact) {
      onContact();
    } else {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
        paddingTop: '5rem',
        paddingBottom: '3.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(ellipse at 50% 25%, #160030 0%, #060114 65%, #04010a 100%)',
      }}
    >
      {/* Background Cyber Spatial Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 243, 255, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
          pointerEvents: 'none',
        }}
      />

      {/* Ambient Neon Blobs (strictly clipped) */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            top: '15%',
            left: '10%',
            width: 'clamp(240px, 35vw, 380px)',
            height: 'clamp(240px, 35vw, 380px)',
            background: 'radial-gradient(circle, rgba(0, 243, 255, 0.08) 0%, transparent 70%)',
            filter: 'blur(45px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            right: '5%',
            width: 'clamp(260px, 40vw, 420px)',
            height: 'clamp(260px, 40vw, 420px)',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* 1. Hero Content & Identity Presentation */}
      <div
        style={{
          textAlign: 'center',
          maxWidth: '880px',
          margin: '0 auto 2.25rem',
          padding: '0 1.5rem',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* Status Chip */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.3rem 0.85rem',
            borderRadius: '9999px',
            background: 'rgba(0, 243, 255, 0.08)',
            border: '1px solid rgba(0, 243, 255, 0.35)',
            marginBottom: '0.5rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.72rem',
            color: '#00f3ff',
            boxShadow: '0 0 18px rgba(0, 243, 255, 0.22)',
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#00f3ff',
              boxShadow: '0 0 10px #00f3ff',
            }}
          />
          <span>JUNIOR FULL-STACK DEVELOPER</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(2.2rem, 4.8vw, 3.6rem)',
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '0.08em',
            lineHeight: 1.1,
            marginBottom: '0.45rem',
            textShadow: '0 0 25px rgba(0, 243, 255, 0.5), 0 0 50px rgba(236, 72, 153, 0.3)',
          }}
        >
          KISHORE
        </motion.h1>

        {/* Professional Role & Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          style={{
            fontSize: 'clamp(0.92rem, 1.6vw, 1.1rem)',
            color: '#cbd5e1',
            maxWidth: '680px',
            margin: '0 auto 1.25rem',
            lineHeight: 1.5,
          }}
        >
          "I build web applications from clean user interfaces to reliable backend APIs."
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'flex',
            gap: '1.25rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={handleScrollToProjects}
            className="btn-cyber-primary"
            style={{ padding: '0.65rem 1.75rem', fontSize: '0.9rem' }}
          >
            Explore My Work ↓
          </button>
          <button
            onClick={handleScrollToContact}
            className="btn-cyber-secondary"
            style={{ padding: '0.65rem 1.6rem', fontSize: '0.9rem' }}
          >
            Contact Me ↗
          </button>
        </motion.div>
      </div>

      {/* 2. The Living Browser Hero Workspace: Fixed Terminal (Left) + 3D Editor Stack (Right/Center) */}
      <div
        style={{
          perspective: '1300px',
          width: '100%',
          maxWidth: '1240px',
          padding: '0 clamp(0.75rem, 3vw, 1.5rem)',
          position: 'relative',
          zIndex: 4,
          boxSizing: 'border-box',
          overflow: 'hidden',
        }}
      >
        <div
          ref={container3DRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(1rem, 3vw, 2rem)',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '100%',
            transition: 'transform 0.05s linear',
            transformStyle: 'preserve-3d',
            boxSizing: 'border-box',
          }}
        >
          {/* Left Column: Fixed Cyber Bash Terminal (Independent continuous telemetry loop) */}
          <div
            style={{
              flex: '1 1 290px',
              maxWidth: '380px',
              width: '100%',
              minWidth: 0,
              display: 'flex',
              justifyContent: 'center',
              transform: 'translateZ(10px)',
              boxSizing: 'border-box',
            }}
          >
            <FixedBashTerminal />
          </div>

          {/* Right/Center Column: 3D Layered Code Editor Stack (40-50% width, 5-file swipe deck) */}
          <div
            style={{
              flex: '1 1 310px',
              maxWidth: '680px',
              width: '100%',
              minWidth: 0,
              transform: 'translateZ(30px)',
              boxSizing: 'border-box',
            }}
          >
            <EditorStack />
          </div>
        </div>
      </div>
    </section>
  );
}