// src/components/portfolio/AboutSection.js
// Full-Stack Development & Connected Technology Dataflow
import React from 'react';
import { motion } from 'framer-motion';
import { TECH_DATAFLOW } from '../../data/projects';

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: 'clamp(4rem, 8vw, 6.5rem) clamp(1rem, 3vw, 2rem)', maxWidth: 1240, width: '100%', margin: '0 auto', boxSizing: 'border-box', overflow: 'hidden' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        gap: 'clamp(1.75rem, 4vw, 3.5rem)',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        {/* Left Column: Biography & Development philosophy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.3em',
            color: '#00f3ff',
            textTransform: 'uppercase',
            marginBottom: '0.85rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }}>
            <span>
              <span className="desktop-heading-text">{"// FULL-STACK DEVELOPMENT & WORKFLOW"}</span>
              <span className="mobile-heading-text">{"// DEV WORKFLOW"}</span>
            </span>
            <span style={{
              height: 1,
              width: 80,
              background: 'linear-gradient(to right, #00f3ff, transparent)',
              display: 'inline-block',
            }} />
          </div>

          <h2 style={{
            fontSize: 'clamp(1.9rem, 4vw, 2.9rem)',
            fontWeight: 800,
            fontFamily: 'Orbitron, sans-serif',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            textShadow: '0 0 20px rgba(0, 243, 255, 0.25)',
          }}>
            <span className="desktop-heading-text">Full-Stack Web Development</span>
            <span className="mobile-heading-text">Full-Stack Development</span>
          </h2>

          <div style={{ color: '#cbd5e1', lineHeight: 1.75, fontSize: '0.94rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              I am <strong style={{ color: '#ffffff', textShadow: '0 0 10px #00f3ff' }}>Kishore</strong>, a junior full-stack developer dedicated to building practical, reliable web applications — with hands-on experience developing quick-commerce grocery backends with POS checkout (<span style={{ color: '#00f3ff', fontWeight: 600 }}>Fulupo</span>), enterprise CRM platforms with cloud telephony (<span style={{ color: '#a855f7', fontWeight: 600 }}>Infysec</span>), and freelance e-commerce systems.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              For my freelance projects, I build a practical <span style={{ color: '#ec4899', fontWeight: 600 }}>Dual-Application Setup</span>: dedicated customer shopping storefronts paired with separate administrative management panels, all communicating through a unified Express.js REST API and MongoDB database.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              For hosting, I manage production setups via <span style={{ color: '#38bdf8', fontWeight: 600 }}>cPanel and MilesWeb</span>, configuring domain mapping, DNS routing, and SSL certificates, while collaborating with DevOps teams for Docker container deployment on enterprise projects.
            </p>
            <p>
              I focus on writing clean, readable code, secure payment webhook handling, and building responsive, reusable UI components.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Illuminated Technology Dataflow Network (Enhanced Card Heights & Balanced Proportion) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: 'rgba(16, 7, 36, 0.88)',
            border: '1px solid rgba(0, 243, 255, 0.3)',
            borderRadius: '1rem',
            padding: 'clamp(1.1rem, 3vw, 1.8rem)',
            boxShadow: '0 0 35px rgba(0, 243, 255, 0.12), 0 20px 50px rgba(0,0,0,0.7)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}
        >
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 'clamp(0.62rem, 1.8vw, 0.72rem)',
            color: '#ec4899',
            fontWeight: 700,
            letterSpacing: '0.08em',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            whiteSpace: 'nowrap',
            gap: '0.5rem',
            width: '100%',
          }}>
            <span style={{ whiteSpace: 'nowrap' }}>
              <span className="desktop-heading-text">{"// END-TO-END DATAFLOW PIPELINE"}</span>
              <span className="mobile-heading-text">{"// DATAFLOW PIPELINE"}</span>
            </span>
            <span style={{ color: '#00f3ff', whiteSpace: 'nowrap' }}>
              <span className="desktop-heading-text">● PRODUCTION READY</span>
              <span className="mobile-heading-text">● PROD READY</span>
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {TECH_DATAFLOW.map((flow) => (
              <div
                key={flow.step}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '0.8rem 1.15rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${flow.color}35`,
                  borderRadius: '0.55rem',
                  transition: 'all 0.25s ease',
                  boxShadow: `inset 0 0 10px ${flow.color}08`,
                }}
              >
                {/* Step badge */}
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  background: `${flow.color}18`,
                  border: `1.5px solid ${flow.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  boxShadow: `0 0 10px ${flow.color}40`,
                  flexShrink: 0,
                }}>
                  0{flow.step}
                </div>

                {/* Node info with stacked primary name + tech subtitle for larger, substantive card height */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    marginBottom: '0.2rem',
                    letterSpacing: '0.01em',
                  }}>
                    {flow.node}
                  </div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.73rem',
                    color: flow.color,
                    letterSpacing: '0.02em',
                  }}>
                    {flow.role}
                  </div>
                </div>

                {/* Status/Tag Pill */}
                {flow.tag && (
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: flow.color,
                    padding: '0.22rem 0.55rem',
                    borderRadius: '0.3rem',
                    background: `${flow.color}15`,
                    border: `1px solid ${flow.color}35`,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    letterSpacing: '0.06em',
                  }}>
                    {flow.tag}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}