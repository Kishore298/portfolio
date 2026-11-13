// src/components/portfolio/ServicesSection.js
// Homepage Services & Solutions Section (Placed above Featured Projects)
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../data/services';
import { useNavigation } from '../../context/NavigationContext';

export default function ServicesSection() {
  const { navigate } = useNavigation();

  return (
    <section id="services" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1rem, 3vw, 2rem)', maxWidth: 1240, width: '100%', margin: '0 auto', boxSizing: 'border-box', overflow: 'hidden' }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div
          style={{
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
          }}
        >
          <span>{"// SERVICES & SOLUTIONS"}</span>
          <span
            style={{
              flex: 1,
              height: 1,
              background: 'linear-gradient(to right, #00f3ff, #ec4899, transparent)',
              maxWidth: 180,
            }}
          />
        </div>

        <h2
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
            fontWeight: 800,
            fontFamily: 'Orbitron, sans-serif',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1rem',
            textShadow: '0 0 20px rgba(0, 243, 255, 0.3)',
          }}
        >
          What I Can Build For You.
        </h2>

        <p
          style={{
            fontSize: '1.05rem',
            color: '#94a3b8',
            maxWidth: 720,
            lineHeight: 1.7,
            marginBottom: '3rem',
          }}
        >
          From business websites to complete web applications, I build digital solutions that help businesses operate efficiently, establish their online presence and grow.
        </p>
      </motion.div>

      {/* Services Grid (7 Categories) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(1.25rem, 3vw, 1.75rem)',
          marginBottom: '3.5rem',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            onClick={() => navigate(service.route)}
            style={{
              background: 'rgba(16, 7, 36, 0.88)',
              border: `1px solid ${service.accent}40`,
              borderRadius: '0.85rem',
              overflow: 'hidden',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: `0 10px 30px rgba(0, 0, 0, 0.6), inset 0 0 15px ${service.accent}0a`,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = service.accent;
              e.currentTarget.style.boxShadow = `0 0 30px ${service.accent}35, 0 20px 50px rgba(0, 0, 0, 0.8)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${service.accent}40`;
              e.currentTarget.style.boxShadow = `0 10px 30px rgba(0, 0, 0, 0.6), inset 0 0 15px ${service.accent}0a`;
            }}
          >
            {/* Terminal Chrome Header */}
            <div
              style={{
                background: 'rgba(24, 11, 52, 0.95)',
                padding: '0.6rem 0.9rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderBottom: `1px solid ${service.accent}25`,
              }}
            >
              {['#ff5f56', '#ffbd2e', '#27c93f'].map((c, i) => (
                <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
              ))}
              <div
                style={{
                  flex: 1,
                  margin: '0 0.5rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.62rem',
                  color: '#94a3b8',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                pkg://services/{service.slug}
              </div>
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  color: service.accent,
                }}
              >
                {service.number}
              </span>
            </div>

            {/* Card Body */}
            <div
              style={{
                padding: '1.4rem',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Top Badge & Starting Price */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '0.85rem',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      color: service.accent,
                      background: `${service.accent}15`,
                      border: `1px solid ${service.accent}35`,
                      padding: '0.2rem 0.55rem',
                      borderRadius: '0.3rem',
                      letterSpacing: '0.08em',
                    }}
                  >
                    <span>{service.icon}</span>
                    <span>{service.badge}</span>
                  </span>

                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      textShadow: `0 0 10px ${service.accent}40`,
                    }}
                  >
                    {service.priceDisplay}
                  </span>
                </div>

                {/* Service Title */}
                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: 1.3,
                    marginBottom: '0.6rem',
                  }}
                >
                  {service.title}
                </h3>

                {/* Short Customer Description */}
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: '#cbd5e1',
                    lineHeight: 1.6,
                    marginBottom: '1.1rem',
                  }}
                >
                  {service.shortDescription}
                </p>

                {/* Key Deliverables List */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.64rem',
                      fontWeight: 700,
                      color: '#64748b',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '0.45rem',
                    }}
                  >
                    Key Highlights
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {service.homeDeliverables.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: '0.76rem',
                          color: '#e2e8f0',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.45rem',
                          lineHeight: 1.45,
                        }}
                      >
                        <span style={{ color: service.accent, flexShrink: 0 }}>▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Explore Service Button */}
              <div
                style={{
                  paddingTop: '0.9rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.7rem',
                    color: '#94a3b8',
                  }}
                >
                  3 Tailored Packages
                </span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    color: service.accent,
                    letterSpacing: '0.04em',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  Explore Service →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Prominent Section Footer CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'rgba(20, 9, 45, 0.75)',
          border: '1px solid rgba(0, 243, 255, 0.3)',
          borderRadius: '0.75rem',
          padding: '1.75rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          boxShadow: '0 0 35px rgba(0, 243, 255, 0.1)',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              color: '#00f3ff',
              fontWeight: 700,
              letterSpacing: '0.12em',
              marginBottom: '0.3rem',
            }}
          >
            TRANSPARENT ESTIMATIONS • TAILORED DELIVERABLES
          </div>
          <h4
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '1.2rem',
              color: '#ffffff',
              fontWeight: 700,
              margin: 0,
            }}
          >
            Compare All 7 Services & Detailed Packages
          </h4>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/services')}
            className="btn-cyber-primary"
            style={{
              padding: '0.75rem 1.6rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            Explore All Service Packages →
          </button>

          <button
            onClick={() => navigate('/#contact')}
            className="btn-cyber-secondary"
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Have a project in mind? Let's discuss →
          </button>
        </div>
      </motion.div>
    </section>
  );
}

