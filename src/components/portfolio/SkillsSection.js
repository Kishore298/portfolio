// src/components/portfolio/SkillsSection.js
// Categorized Full-Stack Technology Grid with glowing neon status indicators
import { motion } from 'framer-motion';
import { SKILLS } from '../../data/projects';

const CATEGORY_COLORS = {
  'Backend Development': '#00f3ff',
  'Frontend & UI': '#ec4899',
  'Database & Cloud Storage': '#a855f7',
  'Integrations & Services': '#facc15',
  'Hosting, Deployment & Tools': '#10b981',
};

export default function SkillsSection() {
  return (
    <section id="skills" style={{
      padding: 'clamp(4rem, 8vw, 7rem) clamp(1rem, 3vw, 2rem)',
      maxWidth: 1200,
      width: '100%',
      margin: '0 auto',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
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
          <span>{"// TECH NETWORK"}</span>
          <span style={{
            height: 1,
            width: 80,
            background: 'linear-gradient(to right, #00f3ff, transparent)',
            display: 'inline-block',
          }} />
        </div>
        <h2 style={{
          fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
          fontWeight: 800,
          fontFamily: 'Orbitron, sans-serif',
          color: '#ffffff',
          lineHeight: 1.15,
          marginBottom: '1rem',
          textShadow: '0 0 20px rgba(0, 243, 255, 0.3)',
        }}>
          Technical Skills & Tools
        </h2>
        <p style={{
          fontSize: '1.05rem',
          color: '#94a3b8',
          maxWidth: 580,
          lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}>
          Core technologies applied to build web applications. From interactive frontend state to REST APIs and database queries.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
        gap: 'clamp(1rem, 2.5vw, 1.25rem)',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        {Object.entries(SKILLS).map(([category, items], catIndex) => {
          const color = CATEGORY_COLORS[category] || '#00f3ff';
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              style={{
                background: 'rgba(16, 7, 36, 0.88)',
                border: `1px solid ${color}35`,
                borderRadius: '0.85rem',
                padding: '1.35rem 1.45rem',
                backdropFilter: 'blur(16px)',
                boxShadow: `0 10px 30px rgba(0,0,0,0.6), inset 0 0 15px ${color}10`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = color;
                e.currentTarget.style.boxShadow = `0 0 30px ${color}35, 0 15px 40px rgba(0,0,0,0.8)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${color}35`;
                e.currentTarget.style.boxShadow = `0 10px 30px rgba(0,0,0,0.6), inset 0 0 15px ${color}10`;
              }}
            >
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: color,
                marginBottom: '1rem',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}>
                <span style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: color,
                  boxShadow: `0 0 10px ${color}`,
                }} />
                {category}
              </div>
              {items.map((skill, i) => (
                <div key={skill} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.24rem 0',
                  borderBottom: i < items.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
                  fontSize: '0.85rem',
                  color: '#cbd5e1',
                }}>
                  <span style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    background: color,
                    opacity: 0.8,
                    flexShrink: 0,
                  }} />
                  {skill}
                </div>
              ))}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}