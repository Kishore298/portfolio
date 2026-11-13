// src/components/services/ServicesLandingPage.js
// Services Landing Page (/services) showcasing all 7 categories
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, PAYMENT_POLICY } from '../../data/services';
import { useNavigation } from '../../context/NavigationContext';

export default function ServicesLandingPage() {
  const { navigate, openEnquiry } = useNavigation();

  return (
    <div style={{ minHeight: '100vh', paddingTop: '6.5rem', paddingBottom: '6rem', position: 'relative' }}>
      {/* Background Cyber Spatial Grid */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 243, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb Navigation */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.74rem',
            color: '#64748b',
            marginBottom: '1.5rem',
          }}
        >
          <button
            onClick={() => navigate('/')}
            style={{
              background: 'none',
              border: 'none',
              color: '#00f3ff',
              cursor: 'pointer',
              padding: 0,
              fontFamily: 'inherit',
              fontSize: 'inherit',
              transition: 'color 0.2s',
            }}
          >
            ← Home
          </button>
          <span>/</span>
          <span style={{ color: '#cbd5e1' }}>Services</span>
        </div>

        {/* Page Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              color: '#00f3ff',
              textTransform: 'uppercase',
              marginBottom: '0.85rem',
            }}
          >
            <span>{"// ALL FREELANCE SERVICES & PACKAGES"}</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
              fontWeight: 900,
              fontFamily: 'Orbitron, sans-serif',
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '0.04em',
              marginBottom: '1.25rem',
              textShadow: '0 0 25px rgba(0, 243, 255, 0.35)',
            }}
          >
            Development Services & Solutions
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: '#cbd5e1',
              maxWidth: 780,
              lineHeight: 1.7,
              marginBottom: '1.75rem',
            }}
          >
            Practical digital solutions for businesses, startups and individuals. Explore development services designed around your requirements with transparent starting estimations and tailored deliverables.
          </p>

          {/* Quick Stats Banner */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.76rem',
            }}
          >
            <div
              style={{
                padding: '0.45rem 0.85rem',
                borderRadius: '0.4rem',
                background: 'rgba(0, 243, 255, 0.08)',
                border: '1px solid rgba(0, 243, 255, 0.3)',
                color: '#00f3ff',
              }}
            >
              ✓ 7 Specialized Categories
            </div>
            <div
              style={{
                padding: '0.45rem 0.85rem',
                borderRadius: '0.4rem',
                background: 'rgba(236, 72, 153, 0.08)',
                border: '1px solid rgba(236, 72, 153, 0.3)',
                color: '#ec4899',
              }}
            >
              ✓ Transparent Starting Prices (INR)
            </div>
            <div
              style={{
                padding: '0.45rem 0.85rem',
                borderRadius: '0.4rem',
                background: 'rgba(34, 197, 94, 0.08)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                color: '#22c55e',
              }}
            >
              ✓ Direct WhatsApp & Email Enquiries
            </div>
          </div>
        </motion.div>

        {/* 7 Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2rem',
            marginBottom: '4.5rem',
          }}
        >
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -6 }}
              style={{
                background: 'rgba(16, 7, 36, 0.92)',
                border: `1px solid ${service.accent}40`,
                borderRadius: '0.9rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: `0 12px 35px rgba(0, 0, 0, 0.7), inset 0 0 15px ${service.accent}0a`,
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = service.accent;
                e.currentTarget.style.boxShadow = `0 0 35px ${service.accent}40, 0 25px 60px rgba(0, 0, 0, 0.85)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${service.accent}40`;
                e.currentTarget.style.boxShadow = `0 12px 35px rgba(0, 0, 0, 0.7), inset 0 0 15px ${service.accent}0a`;
              }}
            >
              {/* Card Titlebar */}
              <div
                style={{
                  background: 'rgba(24, 11, 52, 0.98)',
                  padding: '0.65rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: `1px solid ${service.accent}25`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {['#ff5f56', '#ffbd2e', '#27c93f'].map((c, i) => (
                    <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
                  ))}
                  <span
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.64rem',
                      color: '#94a3b8',
                      marginLeft: '0.3rem',
                    }}
                  >
                    services/{service.slug}
                  </span>
                </div>

                <span
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: service.accent,
                  }}
                >
                  {service.number}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.6rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  {/* Category icon and Starting Price */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '0.6rem',
                        background: `${service.accent}18`,
                        border: `1.5px solid ${service.accent}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.4rem',
                        boxShadow: `0 0 15px ${service.accent}30`,
                      }}
                    >
                      {service.icon}
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.64rem',
                          color: '#94a3b8',
                          textTransform: 'uppercase',
                        }}
                      >
                        Starting at
                      </div>
                      <div
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '1.05rem',
                          fontWeight: 800,
                          color: '#ffffff',
                          textShadow: `0 0 10px ${service.accent}50`,
                        }}
                      >
                        {service.startingPrice}
                      </div>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      color: '#ffffff',
                      fontFamily: 'Inter, sans-serif',
                      marginBottom: '0.65rem',
                      lineHeight: 1.25,
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: '#cbd5e1',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {service.shortDescription}
                  </p>

                  {/* Suitable Customer Type */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        color: service.accent,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '0.45rem',
                      }}
                    >
                      Best Suited For
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {service.targetClients.slice(0, 3).map((client, i) => (
                        <span
                          key={i}
                          style={{
                            padding: '0.2rem 0.55rem',
                            borderRadius: '0.3rem',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            fontSize: '0.72rem',
                            color: '#cbd5e1',
                          }}
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Main Deliverables */}
                  <div style={{ marginBottom: '1.4rem' }}>
                    <div
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        color: '#64748b',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '0.45rem',
                      }}
                    >
                      Core Deliverables
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {service.homeDeliverables.map((item, i) => (
                        <li
                          key={i}
                          style={{
                            fontSize: '0.78rem',
                            color: '#e2e8f0',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.45rem',
                            lineHeight: 1.4,
                          }}
                        >
                          <span style={{ color: service.accent, flexShrink: 0 }}>✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <button
                    onClick={() => navigate(service.route)}
                    style={{
                      flex: 1,
                      padding: '0.65rem 1rem',
                      background: `${service.accent}18`,
                      border: `1px solid ${service.accent}60`,
                      borderRadius: '0.4rem',
                      color: '#ffffff',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.2s ease',
                      boxShadow: `0 0 12px ${service.accent}15`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = service.accent;
                      e.currentTarget.style.color = '#04010a';
                      e.currentTarget.style.boxShadow = `0 0 20px ${service.accent}40`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${service.accent}18`;
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.boxShadow = `0 0 12px ${service.accent}15`;
                    }}
                  >
                    View Packages & Deliverables →
                  </button>

                  <button
                    onClick={() => openEnquiry(service.slug)}
                    title="Enquire directly about this service"
                    style={{
                      padding: '0.65rem 0.85rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '0.4rem',
                      color: '#cbd5e1',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.76rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#ffffff';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.color = '#cbd5e1';
                    }}
                  >
                    Enquire ✉
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Requirements & Consultation Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(30, 12, 65, 0.95) 0%, rgba(12, 5, 28, 0.98) 100%)',
            border: '1px solid rgba(0, 243, 255, 0.4)',
            borderRadius: '1rem',
            padding: '2.5rem clamp(1.5rem, 4vw, 3rem)',
            boxShadow: '0 0 45px rgba(0, 243, 255, 0.15), 0 25px 60px rgba(0, 0, 0, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: '#00f3ff',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            {"// CUSTOM PROJECT ARCHITECTURE"}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ maxWidth: 700 }}>
              <h2
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                  color: '#ffffff',
                  fontWeight: 800,
                  marginBottom: '0.75rem',
                  lineHeight: 1.2,
                }}
              >
                Need a Custom Scope or Tailored Solution?
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.94rem', lineHeight: 1.6, margin: 0 }}>
                Every business workflow is unique. If you have custom database rules, specialized API requirements, multi-branch operations, or a specific budget in mind, I will prepare a transparent, itemized project proposal with milestones.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => openEnquiry('business-websites', 'custom')}
                className="btn-cyber-primary"
                style={{
                  padding: '0.85rem 1.8rem',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Get a Custom Quote →
              </button>

              <button
                onClick={() => navigate('/#contact')}
                className="btn-cyber-secondary"
                style={{
                  padding: '0.85rem 1.6rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                View Contact Gateway ↗
              </button>
            </div>
          </div>

          {/* Payment & Operational Terms Summary */}
          <div
            style={{
              marginTop: '1rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.7rem',
              color: '#94a3b8',
              lineHeight: 1.5,
            }}
          >
            <div>
              <strong style={{ color: '#00f3ff' }}>Payment Terms:</strong> {PAYMENT_POLICY.terms}
            </div>
            <div>
              <strong style={{ color: '#ec4899' }}>Hosting & Domain:</strong> {PAYMENT_POLICY.hostingNote}
            </div>
            <div>
              <strong style={{ color: '#22c55e' }}>Revisions Policy:</strong> {PAYMENT_POLICY.revisionPolicy}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
