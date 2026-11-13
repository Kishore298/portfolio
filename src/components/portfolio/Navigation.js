// src/components/portfolio/Navigation.js
// Cyberpunk Glassmorphic Navigation with Mobile Hamburger Menu (<= 768px), Zero-Hash URLs & Services Routing
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigation } from '../../context/NavigationContext';

const NAV_LINKS = [
  { targetId: 'services', label: '// SERVICES', path: '/services' },
  { targetId: 'projects', label: '// PROJECTS' },
  { targetId: 'about', label: '// ABOUT' },
  { targetId: 'skills', label: '// SKILLS' },
  { targetId: 'contact', label: '// CONTACT' },
];

export default function Navigation({ visible = true, onContactClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath, navigate, openEnquiry } = useNavigation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop (> 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!visible) return null;

  const handleNavClick = (e, link) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);

    const isHome = currentPath === '/';

    if (link.targetId === 'services') {
      if (isHome) {
        const el = document.getElementById('services');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate('/services');
        }
      } else {
        navigate('/services');
      }
      return;
    }

    // Other section links (projects, about, skills, contact)
    if (isHome) {
      const el = document.getElementById(link.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Cross-page navigation back to homepage section
      navigate('/#' + link.targetId);
    }
  };

  const handleLogoClick = (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    if (currentPath === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleHireMe = (e) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    // Direct trigger to the cyberpunk freelance enquiry modal
    if (openEnquiry) {
      openEnquiry('business-websites', 'business');
    } else if (onContactClick) {
      onContactClick();
    } else {
      handleNavClick(null, { targetId: 'contact' });
    }
  };

  const isServicesActive = currentPath === '/services' || currentPath.startsWith('/services/');

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 99,
          padding: '0.85rem clamp(1rem, 3vw, 2.5rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled || mobileMenuOpen ? 'rgba(6, 1, 18, 0.96)' : 'rgba(6, 1, 18, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${scrolled || mobileMenuOpen ? 'rgba(0, 243, 255, 0.25)' : 'rgba(0, 243, 255, 0.12)'}`,
          boxShadow: scrolled || mobileMenuOpen ? '0 10px 30px rgba(0, 0, 0, 0.85)' : 'none',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        {/* Brand Logo (Scrolls to top, keeps clean URL) */}
        <button
          onClick={handleLogoClick}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '0.12em',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ color: '#00f3ff', textShadow: '0 0 12px #00f3ff' }}>KISHORE</span>
          <span style={{ color: '#ec4899', fontSize: '0.82rem' }}>{"// DEV"}</span>
        </button>

        {/* Desktop Nav Links (> 768px) */}
        <ul
          className="nav-desktop-links"
          style={{
            display: 'flex',
            gap: 'clamp(1.2rem, 2vw, 2.2rem)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            alignItems: 'center',
          }}
        >
          {NAV_LINKS.map((link) => {
            const isThisLinkActive = link.targetId === 'services' && isServicesActive;

            return (
              <li key={link.targetId}>
                <button
                  onClick={(e) => handleNavClick(e, link)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '0.35rem 0.2rem',
                    cursor: 'pointer',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.75rem',
                    fontWeight: isThisLinkActive ? 700 : 600,
                    color: isThisLinkActive ? '#00f3ff' : '#cbd5e1',
                    letterSpacing: '0.08em',
                    transition: 'all 0.25s ease',
                    textShadow: isThisLinkActive ? '0 0 10px rgba(0, 243, 255, 0.8)' : 'none',
                    borderBottom: isThisLinkActive ? '2px solid #00f3ff' : '2px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00f3ff';
                    e.currentTarget.style.textShadow = '0 0 10px rgba(0, 243, 255, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isThisLinkActive) {
                      e.currentTarget.style.color = '#cbd5e1';
                      e.currentTarget.style.textShadow = 'none';
                    }
                  }}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA Button (> 768px) */}
        <button
          className="nav-desktop-links"
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

        {/* Mobile Hamburger Toggle Button (<= 768px) */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none', // Controlled by CSS media query in index.css
            background: 'rgba(0, 243, 255, 0.1)',
            border: `1px solid ${mobileMenuOpen ? '#00f3ff' : 'rgba(0, 243, 255, 0.4)'}`,
            borderRadius: '0.45rem',
            padding: '0.55rem',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            boxShadow: mobileMenuOpen ? '0 0 18px rgba(0, 243, 255, 0.45)' : 'none',
            transition: 'all 0.25s ease',
          }}
        >
          {/* Animated 3-line hamburger to X */}
          <div style={{ width: '22px', height: '16px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <span
              style={{
                display: 'block',
                width: '100%',
                height: '2px',
                background: mobileMenuOpen ? '#00f3ff' : '#ffffff',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transformOrigin: 'left center',
                transform: mobileMenuOpen ? 'rotate(45deg) translate(2px, -1px)' : 'none',
                boxShadow: mobileMenuOpen ? '0 0 8px #00f3ff' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '100%',
                height: '2px',
                background: '#00f3ff',
                borderRadius: '2px',
                transition: 'all 0.2s ease',
                opacity: mobileMenuOpen ? 0 : 1,
                transform: mobileMenuOpen ? 'scaleX(0)' : 'scaleX(1)',
                boxShadow: '0 0 8px #00f3ff',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '100%',
                height: '2px',
                background: mobileMenuOpen ? '#00f3ff' : '#ffffff',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transformOrigin: 'left center',
                transform: mobileMenuOpen ? 'rotate(-45deg) translate(2px, 1px)' : 'none',
                boxShadow: mobileMenuOpen ? '0 0 8px #00f3ff' : 'none',
              }}
            />
          </div>
        </button>
      </motion.nav>

      {/* Mobile Drawer Dropdown Menu (<= 768px) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-drawer"
            className="nav-mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              right: 0,
              zIndex: 98,
              background: 'rgba(8, 2, 24, 0.98)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0, 243, 255, 0.35)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.95), 0 0 30px rgba(0, 243, 255, 0.15)',
              padding: '1.25rem 1.25rem 1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {NAV_LINKS.map((link, idx) => {
                const isThisLinkActive = link.targetId === 'services' && isServicesActive;

                return (
                  <motion.button
                    key={link.targetId}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.2 }}
                    onClick={(e) => handleNavClick(e, link)}
                    style={{
                      background: isThisLinkActive ? 'rgba(0, 243, 255, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                      border: `1px solid ${isThisLinkActive ? '#00f3ff' : 'rgba(0, 243, 255, 0.18)'}`,
                      borderRadius: '0.5rem',
                      padding: '0.85rem 1.25rem',
                      textAlign: 'left',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: isThisLinkActive ? '#00f3ff' : '#f8fafc',
                      letterSpacing: '0.1em',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease',
                      boxShadow: isThisLinkActive ? '0 0 15px rgba(0, 243, 255, 0.25)' : 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#00f3ff';
                      e.currentTarget.style.background = 'rgba(0, 243, 255, 0.12)';
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 243, 255, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isThisLinkActive) {
                        e.currentTarget.style.borderColor = 'rgba(0, 243, 255, 0.18)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <span>{link.label}</span>
                    <span style={{ color: '#00f3ff', fontSize: '0.85rem' }}>→</span>
                  </motion.button>
                );
              })}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.2 }}
              onClick={handleHireMe}
              className="btn-cyber-primary"
              style={{
                width: '100%',
                padding: '0.85rem',
                fontSize: '0.88rem',
                fontWeight: 700,
                marginTop: '0.35rem',
                cursor: 'pointer',
                textAlign: 'center',
                letterSpacing: '0.08em',
              }}
            >
              Hire Me ➔
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
