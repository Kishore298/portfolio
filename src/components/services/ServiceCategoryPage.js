// src/components/services/ServiceCategoryPage.js
// Dedicated Service Category Detail Page with Packages, Pricing, Comparison Table, Deliverables & FAQs
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getServiceBySlug, SERVICES, PAYMENT_POLICY } from '../../data/services';
import { useNavigation } from '../../context/NavigationContext';

export default function ServiceCategoryPage({ slug }) {
  const { navigate, openEnquiry } = useNavigation();
  const service = getServiceBySlug(slug);

  // Accordion state for FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // If service not found, provide cyberpunk fallback
  if (!service) {
    return (
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8rem 2rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.9rem',
            color: '#ec4899',
            marginBottom: '1rem',
          }}
        >
          {"// ERROR 404: SERVICE_NOT_FOUND"}
        </div>
        <h1
          style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '2.5rem',
            color: '#ffffff',
            marginBottom: '1.5rem',
          }}
        >
          Service Category Not Found
        </h1>
        <p style={{ color: '#94a3b8', maxWidth: 500, marginBottom: '2rem' }}>
          The requested service category could not be resolved in the developer registry.
        </p>
        <button
          onClick={() => navigate('/services')}
          className="btn-cyber-primary"
          style={{ padding: '0.85rem 1.8rem', cursor: 'pointer' }}
        >
          ← Return to All Services
        </button>
      </div>
    );
  }

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  // General FAQs combined with service-specific FAQs
  const allFaqs = [
    ...(service.faqs || []),
    {
      q: 'What is the payment structure and policy?',
      a: `${PAYMENT_POLICY.terms} This protects both parties and guarantees dedicated milestone delivery.`,
    },
    {
      q: 'Are hosting, domain name, and API subscriptions included in the price?',
      a: `${PAYMENT_POLICY.hostingNote} I assist with complete setup, DNS configuration, and deployment on your accounts.`,
    },
    {
      q: 'How are design revisions handled during development?',
      a: `${PAYMENT_POLICY.revisionPolicy} You will receive a live staging link to review changes before final approval.`,
    },
  ];

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
            marginBottom: '1.8rem',
            flexWrap: 'wrap',
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
          <button
            onClick={() => navigate('/services')}
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
            Services
          </button>
          <span>/</span>
          <span style={{ color: '#cbd5e1' }}>{service.shortTitle || service.title}</span>
        </div>

        {/* Category Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(14, 6, 32, 0.85) 0%, rgba(6, 1, 18, 0.95) 100%)',
            border: `1px solid ${service.accent || 'rgba(0, 243, 255, 0.3)'}`,
            borderRadius: '1rem',
            padding: 'clamp(1.8rem, 4vw, 3rem)',
            marginBottom: '3.5rem',
            boxShadow: `0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px ${service.accentDim || 'rgba(0, 243, 255, 0.15)'}`,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle neon glow spot */}
          <div
            style={{
              position: 'absolute',
              top: '-30%',
              right: '-10%',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: service.accent || '#00f3ff',
              opacity: 0.08,
              filter: 'blur(70px)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Badge & Number */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                flexWrap: 'wrap',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  color: service.accent || '#00f3ff',
                  background: 'rgba(0, 243, 255, 0.08)',
                  border: '1px solid rgba(0, 243, 255, 0.25)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '2rem',
                  letterSpacing: '0.15em',
                  fontWeight: 700,
                }}
              >
                {`// SERVICE ${service.number} • ${service.badge}`}
              </span>

              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.78rem',
                  color: '#fbbf24',
                  background: 'rgba(251, 191, 36, 0.1)',
                  border: '1px solid rgba(251, 191, 36, 0.25)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '2rem',
                  fontWeight: 700,
                }}
              >
                {service.priceDisplay || `Starting at ${service.startingPrice}`}
              </span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                flexWrap: 'wrap',
              }}
            >
              <span>{service.title}</span>
            </h1>

            {/* Hero Description */}
            <p
              style={{
                color: '#cbd5e1',
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                lineHeight: 1.75,
                maxWidth: 880,
                marginBottom: '1.8rem',
              }}
            >
              {service.heroDescription}
            </p>

            {/* Target Clients Tags */}
            {service.targetClients && service.targetClients.length > 0 && (
              <div style={{ marginBottom: '2rem' }}>
                <div
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.72rem',
                    color: '#64748b',
                    letterSpacing: '0.12em',
                    marginBottom: '0.65rem',
                    textTransform: 'uppercase',
                  }}
                >
                  Ideal For:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {service.targetClients.map((client, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.74rem',
                        color: '#94a3b8',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '0.4rem',
                      }}
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                href="#packages"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-cyber-primary"
                style={{
                  padding: '0.85rem 1.8rem',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                }}
              >
                <span>View Packages & Pricing</span>
                <span>↓</span>
              </a>

              <button
                onClick={() => openEnquiry(service.slug, null)}
                className="btn-cyber-outline"
                style={{
                  padding: '0.85rem 1.8rem',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Request Custom Scope ➔
              </button>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* PACKAGES & PRICING CARDS */}
        {/* ========================================================================= */}
        <section id="packages" style={{ marginBottom: '5rem', scrollMarginTop: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: '#00f3ff',
                letterSpacing: '0.25em',
                marginBottom: '0.5rem',
              }}
            >
              {"// SELECT YOUR TIER"}
            </div>
            <h2
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                color: '#ffffff',
                fontWeight: 800,
                marginBottom: '0.75rem',
              }}
            >
              Available Development Packages
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: 620, margin: '0 auto' }}>
              Transparent pricing with clear deliverables and revision cycles. Select a package to open direct enquiry via WhatsApp or Email.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem',
              alignItems: 'stretch',
            }}
          >
            {service.packages.map((pkg, idx) => {
              const isRecommended = Boolean(pkg.recommended);

              return (
                <motion.div
                  key={pkg.id || idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  style={{
                    background: isRecommended
                      ? 'linear-gradient(180deg, rgba(20, 8, 45, 0.95) 0%, rgba(10, 3, 24, 0.98) 100%)'
                      : 'rgba(10, 4, 25, 0.85)',
                    border: isRecommended
                      ? '2px solid #ec4899'
                      : '1px solid rgba(0, 243, 255, 0.22)',
                    borderRadius: '0.85rem',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: isRecommended
                      ? '0 15px 40px rgba(236, 72, 153, 0.25), 0 0 25px rgba(236, 72, 153, 0.15)'
                      : '0 10px 30px rgba(0, 0, 0, 0.5)',
                    position: 'relative',
                    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    if (!isRecommended) {
                      e.currentTarget.style.borderColor = '#00f3ff';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 243, 255, 0.25)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    if (!isRecommended) {
                      e.currentTarget.style.borderColor = 'rgba(0, 243, 255, 0.22)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
                    }
                  }}
                >
                  {/* Top Bar / Chrome */}
                  <div
                    style={{
                      background: 'rgba(0, 0, 0, 0.45)',
                      padding: '0.65rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56' }} />
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e' }} />
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f' }} />
                      <span
                        style={{
                          marginLeft: '8px',
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.68rem',
                          color: '#64748b',
                        }}
                      >
                        package_{pkg.id}.json
                      </span>
                    </div>

                    {isRecommended && (
                      <span
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          color: '#ffffff',
                          background: 'linear-gradient(90deg, #ec4899, #8b5cf6)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '1rem',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          boxShadow: '0 0 10px rgba(236, 72, 153, 0.6)',
                        }}
                      >
                        ★ POPULAR CHOICE
                      </span>
                    )}
                  </div>

                  {/* Card Main Body */}
                  <div style={{ padding: '1.75rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: 'Orbitron, sans-serif',
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: isRecommended ? '#ffffff' : '#f8fafc',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {pkg.name}
                    </h3>

                    {/* Price Header */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '0.45rem',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'Orbitron, sans-serif',
                            fontSize: '2.1rem',
                            fontWeight: 800,
                            color: isRecommended ? '#ec4899' : '#00f3ff',
                            textShadow: isRecommended
                              ? '0 0 15px rgba(236, 72, 153, 0.4)'
                              : '0 0 15px rgba(0, 243, 255, 0.35)',
                          }}
                        >
                          {pkg.price}
                        </span>
                        <span
                          style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.72rem',
                            color: '#94a3b8',
                          }}
                        >
                          {service.slug === 'maintenance' ? '/ month' : pkg.priceSubtext ? `${pkg.priceSubtext} rate` : 'starting'}
                        </span>
                      </div>
                      <div
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.7rem',
                          color: '#64748b',
                          marginTop: '0.2rem',
                        }}
                      >
                        Fixed scope • 50% advance / 50% on completion
                      </div>
                    </div>

                    {/* Best For Tagline */}
                    <div
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderLeft: `3px solid ${isRecommended ? '#ec4899' : '#00f3ff'}`,
                        padding: '0.75rem 0.85rem',
                        borderRadius: '0 0.4rem 0.4rem 0',
                        marginBottom: '1.35rem',
                        fontSize: '0.84rem',
                        color: '#cbd5e1',
                        lineHeight: 1.5,
                      }}
                    >
                      <strong style={{ color: '#f8fafc' }}>Best For: </strong>
                      {pkg.bestFor}
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '0.86rem',
                        color: '#94a3b8',
                        lineHeight: 1.6,
                        marginBottom: '1.35rem',
                      }}
                    >
                      {pkg.description}
                    </p>

                    {/* Metadata Specs Row */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '0.5rem',
                        background: 'rgba(0, 0, 0, 0.35)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '0.5rem',
                        padding: '0.65rem 0.5rem',
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                      }}
                    >
                      <div>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#64748b' }}>
                          SCOPE
                        </div>
                        <div
                          style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: '#00f3ff',
                            marginTop: '0.15rem',
                          }}
                        >
                          {pkg.pagesOrModules || 'Custom Scope'}
                        </div>
                      </div>

                      <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.06)', borderRight: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#64748b' }}>
                          TIMELINE
                        </div>
                        <div
                          style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: '#fbbf24',
                            marginTop: '0.15rem',
                          }}
                        >
                          {pkg.timeline || 'Prompt'}
                        </div>
                      </div>

                      <div>
                        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: '#64748b' }}>
                          REVISIONS
                        </div>
                        <div
                          style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: '#10b981',
                            marginTop: '0.15rem',
                          }}
                        >
                          {pkg.revisions || 'Structured'}
                        </div>
                      </div>
                    </div>

                    {/* Features Checklist */}
                    <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                      <div
                        style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#cbd5e1',
                          letterSpacing: '0.1em',
                          marginBottom: '0.75rem',
                          textTransform: 'uppercase',
                        }}
                      >
                        Included Features:
                      </div>

                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                        {pkg.features.map((feature, fIdx) => (
                          <li
                            key={fIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '0.65rem',
                              fontSize: '0.82rem',
                              color: '#cbd5e1',
                              lineHeight: 1.45,
                            }}
                          >
                            <span style={{ color: '#00f3ff', fontWeight: 800, flexShrink: 0, marginTop: '1px' }}>✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables Highlights */}
                    {pkg.deliverables && pkg.deliverables.length > 0 && (
                      <div style={{ marginBottom: '1.35rem' }}>
                        <div
                          style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.68rem',
                            color: '#94a3b8',
                            letterSpacing: '0.08em',
                            marginBottom: '0.45rem',
                            textTransform: 'uppercase',
                          }}
                        >
                          Handover Deliverables:
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {pkg.deliverables.map((deliv, dIdx) => (
                            <span
                              key={dIdx}
                              style={{
                                fontFamily: 'JetBrains Mono, monospace',
                                fontSize: '0.68rem',
                                color: '#67e8f9',
                                background: 'rgba(0, 243, 255, 0.06)',
                                border: '1px solid rgba(0, 243, 255, 0.16)',
                                padding: '0.2rem 0.55rem',
                                borderRadius: '0.25rem',
                              }}
                            >
                              • {deliv}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Exclusions */}
                    {pkg.exclusions && pkg.exclusions.length > 0 && (
                      <div
                        style={{
                          marginBottom: '1.75rem',
                          background: 'rgba(0, 0, 0, 0.25)',
                          padding: '0.65rem 0.75rem',
                          borderRadius: '0.4rem',
                          border: '1px dashed rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.66rem',
                            color: '#64748b',
                            marginBottom: '0.35rem',
                            textTransform: 'uppercase',
                          }}
                        >
                          Exclusions:
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                          {pkg.exclusions.map((excl, eIdx) => (
                            <li
                              key={eIdx}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.45rem',
                                fontSize: '0.72rem',
                                color: '#64748b',
                              }}
                            >
                              <span style={{ color: '#ef4444', fontSize: '0.75rem' }}>✕</span>
                              <span>{excl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* CTA Button */}
                    <button
                      onClick={() => openEnquiry(service.slug, pkg.id)}
                      className={isRecommended ? 'btn-cyber-primary' : 'btn-cyber-outline'}
                      style={{
                        width: '100%',
                        padding: '0.85rem',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        textAlign: 'center',
                        letterSpacing: '0.06em',
                        marginTop: 'auto',
                      }}
                    >
                      Enquire for this Package →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SPECIAL ONE-TIME TASKS GRID (For Maintenance & Support) */}
        {/* ========================================================================= */}
        {service.slug === 'maintenance' && service.oneTimeTasks && (
          <motion.section
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'linear-gradient(180deg, rgba(16, 7, 36, 0.9) 0%, rgba(8, 2, 20, 0.95) 100%)',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              borderRadius: '1rem',
              padding: 'clamp(1.8rem, 3.5vw, 2.75rem)',
              marginBottom: '5rem',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.7), 0 0 25px rgba(251, 191, 36, 0.1)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  color: '#fbbf24',
                  background: 'rgba(251, 191, 36, 0.1)',
                  border: '1px solid rgba(251, 191, 36, 0.25)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '2rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                }}
              >
                {"// ON-DEMAND TECHNICAL SUPPORT"}
              </span>
              <h3
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: '#ffffff',
                  fontWeight: 800,
                  marginTop: '0.85rem',
                  marginBottom: '0.65rem',
                }}
              >
                Need a Quick Fix Instead of Monthly Maintenance?
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', maxWidth: 640, margin: '0 auto' }}>
                Don't need a monthly retainer? I also take on standalone ad-hoc tasks, emergency repairs, content edits, and diagnostic fixes with fast turnarounds.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {service.oneTimeTasks.map((task, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.65rem',
                    padding: '1.35rem 1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#fbbf24';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(251, 191, 36, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        marginBottom: '0.65rem',
                      }}
                    >
                      <h4
                        style={{
                          fontFamily: 'Orbitron, sans-serif',
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: '#ffffff',
                        }}
                      >
                        {task.title}
                      </h4>
                      <span
                        style={{
                          fontFamily: 'Orbitron, sans-serif',
                          fontSize: '1.15rem',
                          fontWeight: 800,
                          color: '#fbbf24',
                        }}
                      >
                        {task.price}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                      {task.description}
                    </p>
                  </div>

                  <button
                    onClick={() => openEnquiry('maintenance', 'starter')}
                    style={{
                      width: '100%',
                      background: 'rgba(251, 191, 36, 0.08)',
                      border: '1px solid rgba(251, 191, 36, 0.3)',
                      color: '#fbbf24',
                      padding: '0.6rem 0.85rem',
                      borderRadius: '0.4rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#fbbf24';
                      e.currentTarget.style.color = '#000000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(251, 191, 36, 0.08)';
                      e.currentTarget.style.color = '#fbbf24';
                    }}
                  >
                    Book Fix →
                  </button>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ========================================================================= */}
        {/* DETAILED PACKAGE COMPARISON TABLE */}
        {/* ========================================================================= */}
        {service.comparisonFeatures && service.comparisonFeatures.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '5rem' }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.75rem',
                  color: '#00f3ff',
                  letterSpacing: '0.25em',
                  marginBottom: '0.5rem',
                }}
              >
                {"// SIDE-BY-SIDE MATRIX"}
              </div>
              <h2
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  color: '#ffffff',
                  fontWeight: 800,
                  marginBottom: '0.5rem',
                }}
              >
                Detailed Feature Comparison
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                Compare package capabilities side-by-side to find the right investment for your stage.
              </p>
            </div>

            <div
              style={{
                background: 'rgba(8, 2, 22, 0.85)',
                border: '1px solid rgba(0, 243, 255, 0.2)',
                borderRadius: '0.85rem',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6)',
              }}
            >
              {/* Responsive container for horizontal scroll on mobile */}
              <div style={{ overflowX: 'auto', width: '100%' }}>
                <table
                  style={{
                    width: '100%',
                    minWidth: '650px',
                    borderCollapse: 'collapse',
                    textAlign: 'left',
                  }}
                >
                  <thead>
                    <tr
                      style={{
                        background: 'rgba(0, 0, 0, 0.65)',
                        borderBottom: '1px solid rgba(0, 243, 255, 0.25)',
                      }}
                    >
                      <th
                        style={{
                          padding: '1.1rem 1.25rem',
                          fontFamily: 'Orbitron, sans-serif',
                          fontSize: '0.88rem',
                          color: '#ffffff',
                          width: '38%',
                        }}
                      >
                        Feature / Deliverable
                      </th>
                      {service.packages.map((pkg) => (
                        <th
                          key={pkg.id}
                          style={{
                            padding: '1.1rem 1rem',
                            fontFamily: 'Orbitron, sans-serif',
                            fontSize: '0.85rem',
                            color: pkg.recommended ? '#ec4899' : '#00f3ff',
                            textAlign: 'center',
                            width: '20%',
                            background: pkg.recommended ? 'rgba(236, 72, 153, 0.08)' : 'transparent',
                          }}
                        >
                          <div>{pkg.name}</div>
                          <div
                            style={{
                              fontFamily: 'JetBrains Mono, monospace',
                              fontSize: '0.75rem',
                              color: '#cbd5e1',
                              marginTop: '0.2rem',
                            }}
                          >
                            {pkg.price}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {service.comparisonFeatures.map((row, rIdx) => {
                      const isEven = rIdx % 2 === 0;

                      return (
                        <tr
                          key={rIdx}
                          style={{
                            background: isEven ? 'rgba(255, 255, 255, 0.015)' : 'transparent',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                          }}
                        >
                          <td
                            style={{
                              padding: '0.9rem 1.25rem',
                              fontFamily: 'Inter, sans-serif',
                              fontSize: '0.84rem',
                              color: '#cbd5e1',
                              fontWeight: 500,
                            }}
                          >
                            {row.name}
                          </td>

                          {/* Starter column */}
                          <td
                            style={{
                              padding: '0.9rem 1rem',
                              textAlign: 'center',
                              fontFamily: 'JetBrains Mono, monospace',
                              fontSize: '0.82rem',
                            }}
                          >
                            {renderCellValue(row.starter)}
                          </td>

                          {/* Business column (highlighted) */}
                          <td
                            style={{
                              padding: '0.9rem 1rem',
                              textAlign: 'center',
                              fontFamily: 'JetBrains Mono, monospace',
                              fontSize: '0.82rem',
                              background: 'rgba(236, 72, 153, 0.04)',
                              fontWeight: 600,
                            }}
                          >
                            {renderCellValue(row.business)}
                          </td>

                          {/* Premium column */}
                          <td
                            style={{
                              padding: '0.9rem 1rem',
                              textAlign: 'center',
                              fontFamily: 'JetBrains Mono, monospace',
                              fontSize: '0.82rem',
                            }}
                          >
                            {renderCellValue(row.premium)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>
        )}

        {/* ========================================================================= */}
        {/* 4-STEP PRODUCTION WORKFLOW & PROCESS */}
        {/* ========================================================================= */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '5rem' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: '#00f3ff',
                letterSpacing: '0.25em',
                marginBottom: '0.5rem',
              }}
            >
              {"// PRODUCTION WORKFLOW"}
            </div>
            <h2
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                color: '#ffffff',
                fontWeight: 800,
                marginBottom: '0.5rem',
              }}
            >
              How We Work Together
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: 600, margin: '0 auto' }}>
              A structured, transparent engineering process from initial discussion to production launch and source code handover.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                step: '01',
                title: 'Discovery & Scope',
                desc: 'We clarify your exact feature requirements, reference designs, pages, third-party integrations, and timeline. I provide a fixed quotation with no surprise costs.',
                color: '#00f3ff',
              },
              {
                step: '02',
                title: 'Staging & Milestones',
                desc: 'Upon 50% advance confirmation, development begins immediately on a private staging link so you can monitor real-time progress at every milestone.',
                color: '#ec4899',
              },
              {
                step: '03',
                title: 'Review & Refinements',
                desc: 'You test the staging deployment thoroughly. We execute your package revision rounds to polish layout, content alignment, form submissions, and device responsiveness.',
                color: '#a855f7',
              },
              {
                step: '04',
                title: 'Handover & Launch',
                desc: 'Upon balance payment, we deploy to your production domain/server, connect SSL, configure environment variables, and deliver clean source code and walkthroughs.',
                color: '#10b981',
              },
            ].map((st, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(8, 2, 22, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '0.75rem',
                  padding: '1.6rem 1.4rem',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = st.color;
                  e.currentTarget.style.boxShadow = `0 10px 25px ${st.color}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: st.color,
                    marginBottom: '0.75rem',
                    opacity: 0.9,
                  }}
                >
                  {st.step}
                </div>
                <h4
                  style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.65rem',
                  }}
                >
                  {st.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.6 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ========================================================================= */}
        {/* PAYMENT POLICY & TRANSPARENCY NOTICE */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, rgba(14, 4, 34, 0.9) 0%, rgba(6, 1, 18, 0.95) 100%)',
            border: '1px solid rgba(0, 243, 255, 0.25)',
            borderRadius: '0.85rem',
            padding: '1.75rem 2rem',
            marginBottom: '5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#00f3ff',
            }}
          >
            <span>{"// PAYMENT TERMS & TRANSPARENCY"}</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
            }}
          >
            <div>
              <strong style={{ color: '#ffffff', fontSize: '0.86rem', display: 'block', marginBottom: '0.35rem' }}>
                Milestone-Based Advance:
              </strong>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.55 }}>
                {PAYMENT_POLICY.terms}
              </p>
            </div>

            <div>
              <strong style={{ color: '#ffffff', fontSize: '0.86rem', display: 'block', marginBottom: '0.35rem' }}>
                Hosting & External Subscriptions:
              </strong>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.55 }}>
                {PAYMENT_POLICY.hostingNote}
              </p>
            </div>

            <div>
              <strong style={{ color: '#ffffff', fontSize: '0.86rem', display: 'block', marginBottom: '0.35rem' }}>
                Revision Rounds & Warranty:
              </strong>
              <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.55 }}>
                {PAYMENT_POLICY.revisionPolicy} Post-launch warranty covers bug fixes on delivered code.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
        {/* ========================================================================= */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: '#ec4899',
                letterSpacing: '0.25em',
                marginBottom: '0.5rem',
              }}
            >
              {"// COMMON INQUIRIES"}
            </div>
            <h2
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                color: '#ffffff',
                fontWeight: 800,
                marginBottom: '0.5rem',
              }}
            >
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
              Clear answers to the most common questions before kicking off your project.
            </p>
          </div>

          <div style={{ maxWidth: 880, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {allFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(8, 2, 22, 0.75)',
                    border: `1px solid ${isOpen ? '#00f3ff' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '0.65rem',
                    overflow: 'hidden',
                    transition: 'border-color 0.25s ease',
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      background: 'none',
                      border: 'none',
                      padding: '1.25rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '1rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: isOpen ? '#ffffff' : '#e2e8f0',
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '1.1rem',
                        color: isOpen ? '#00f3ff' : '#64748b',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease, color 0.2s ease',
                        flexShrink: 0,
                      }}
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div
                          style={{
                            padding: '0 1.5rem 1.35rem',
                            color: '#94a3b8',
                            fontSize: '0.88rem',
                            lineHeight: 1.65,
                            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                            paddingTop: '1rem',
                          }}
                        >
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* BOTTOM CTA: CUSTOM QUOTE OR DISCUSSION */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, rgba(20, 8, 48, 0.95) 0%, rgba(8, 2, 22, 0.98) 100%)',
            border: '1px solid #00f3ff',
            borderRadius: '1rem',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 243, 255, 0.18)',
            marginBottom: '5rem',
          }}
        >
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.75rem',
              color: '#00f3ff',
              letterSpacing: '0.25em',
              marginBottom: '0.75rem',
            }}
          >
            {"// READY TO START?"}
          </div>
          <h2
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              color: '#ffffff',
              fontWeight: 800,
              marginBottom: '1rem',
            }}
          >
            Have a Specific Project in Mind?
          </h2>
          <p
            style={{
              color: '#cbd5e1',
              fontSize: '1rem',
              maxWidth: 620,
              margin: '0 auto 2.25rem',
              lineHeight: 1.65,
            }}
          >
            Let's discuss your timeline, tech requirements and budget. Reach out directly for a rapid quotation or free initial technical scoping call.
          </p>

          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => openEnquiry(service.slug, 'business')}
              className="btn-cyber-primary"
              style={{
                padding: '0.95rem 2.2rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Open Project Enquiry ➔
            </button>

            <a
              href="https://wa.me/916374418536?text=Hi%20Kishore%2C%20I'd%20like%20to%20discuss%20a%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-outline"
              style={{
                padding: '0.95rem 2.2rem',
                fontSize: '0.95rem',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <span>Chat on WhatsApp</span>
              <span style={{ color: '#10b981' }}>●</span>
            </a>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* OTHER SERVICES QUICK NAVIGATOR */}
        {/* ========================================================================= */}
        <section>
          <div
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              color: '#64748b',
              letterSpacing: '0.15em',
              marginBottom: '1.25rem',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span>Explore Other Development Services:</span>
            <span style={{ flex: 1, height: 1, background: 'rgba(255, 255, 255, 0.08)' }} />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {otherServices.map((other) => (
              <button
                key={other.id}
                onClick={() => navigate(other.route)}
                style={{
                  background: 'rgba(10, 3, 24, 0.8)',
                  border: '1px solid rgba(0, 243, 255, 0.18)',
                  borderRadius: '0.5rem',
                  padding: '0.7rem 1.1rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.78rem',
                  color: '#e2e8f0',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00f3ff';
                  e.currentTarget.style.color = '#00f3ff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 243, 255, 0.18)';
                  e.currentTarget.style.color = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>{other.title}</span>
                <span style={{ color: '#00f3ff' }}>→</span>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

// Helper to format table cells with checks, crosses, or text
function renderCellValue(val) {
  if (val === true) {
    return <span style={{ color: '#00f3ff', fontWeight: 800, fontSize: '1rem' }}>✓</span>;
  }
  if (val === false) {
    return <span style={{ color: '#64748b', fontSize: '0.9rem' }}>—</span>;
  }
  return <span style={{ color: '#e2e8f0' }}>{val}</span>;
}
