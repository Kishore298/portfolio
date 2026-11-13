// src/components/services/EnquiryModal.js
// Cyberpunk Interactive Project Enquiry Gateway (WhatsApp & Email Direct Dispatch)
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../../data/services';

export default function EnquiryModal({ isOpen, onClose, initialServiceSlug, initialPackageId }) {
  const [selectedServiceSlug, setSelectedServiceSlug] = useState(initialServiceSlug || 'business-websites');
  const [selectedPackageId, setSelectedPackageId] = useState(initialPackageId || 'business');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [budget, setBudget] = useState('');
  const [requirements, setRequirements] = useState('');
  const [statusMessage, setStatusMessage] = useState(null);

  // Sync state whenever props change
  useEffect(() => {
    if (initialServiceSlug) {
      setSelectedServiceSlug(initialServiceSlug);
    }
    if (initialPackageId) {
      setSelectedPackageId(initialPackageId);
    }
  }, [initialServiceSlug, initialPackageId]);

  // Find currently selected service and package
  const currentService = SERVICES.find((s) => s.slug === selectedServiceSlug) || SERVICES[0];
  const currentPackage = currentService?.packages?.find((p) => p.id === selectedPackageId) || currentService?.packages?.[1] || currentService?.packages?.[0];

  // Auto-populate budget and requirements hint if empty
  useEffect(() => {
    if (currentPackage && !budget) {
      setBudget(currentPackage.price);
    }
  }, [currentPackage, budget]);

  // Handle service change
  const handleServiceChange = (e) => {
    const newSlug = e.target.value;
    setSelectedServiceSlug(newSlug);
    const serviceObj = SERVICES.find((s) => s.slug === newSlug);
    if (serviceObj && serviceObj.packages && serviceObj.packages.length > 0) {
      const recPkg = serviceObj.packages.find((p) => p.recommended) || serviceObj.packages[0];
      setSelectedPackageId(recPkg.id);
      setBudget(recPkg.price);
    }
  };

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    if (!clientName.trim()) {
      setStatusMessage({ type: 'error', text: 'Please enter your name.' });
      return false;
    }
    return true;
  };

  const generateWhatsAppUrl = () => {
    if (!validate()) return;
    const phone = '916374418536';
    const lines = [
      `👋 Hi Kishore! I want to enquire about a freelance project:`,
      ``,
      `📌 *Service:* ${currentService.title}`,
      `📦 *Package:* ${currentPackage ? currentPackage.name : 'Custom Scope'} (${currentPackage ? currentPackage.price : budget || 'Custom Quote'})`,
      `👤 *Name:* ${clientName.trim()}`,
      businessName.trim() ? `🏢 *Business / Project:* ${businessName.trim()}` : null,
      clientEmail.trim() ? `✉️ *Email:* ${clientEmail.trim()}` : null,
      budget.trim() ? `💰 *Budget Range:* ${budget.trim()}` : null,
      requirements.trim() ? `📝 *Requirements:* ${requirements.trim()}` : null,
      ``,
      `Looking forward to discussing the timeline and next steps!`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join('\n'));
    setStatusMessage({
      type: 'success',
      text: 'Opening WhatsApp with your formatted project brief...',
    });
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const generateEmailUrl = () => {
    if (!validate()) return;
    const email = 'kishore103345@gmail.com';
    const subject = encodeURIComponent(`[Project Enquiry] ${currentService.title} - ${currentPackage ? currentPackage.name : 'Custom'}`);
    const bodyLines = [
      `Hi Kishore,`,
      ``,
      `I would like to enquire about your web development services:`,
      ``,
      `Service: ${currentService.title}`,
      `Package: ${currentPackage ? currentPackage.name : 'Custom Scope'} (${currentPackage ? currentPackage.price : budget || 'Custom Quote'})`,
      `Name: ${clientName.trim()}`,
      businessName.trim() ? `Business / Organization: ${businessName.trim()}` : null,
      clientEmail.trim() ? `Contact Email: ${clientEmail.trim()}` : null,
      budget.trim() ? `Estimated Budget: ${budget.trim()}` : null,
      ``,
      `Project Details & Requirements:`,
      requirements.trim() ? requirements.trim() : 'Standard package deliverables as outlined on your portfolio.',
      ``,
      `Best regards,`,
      clientName.trim(),
    ].filter(Boolean);

    const body = encodeURIComponent(bodyLines.join('\n'));
    setStatusMessage({
      type: 'success',
      text: 'Opening your default email client with your project brief...',
    });
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(0.5rem, 2vw, 1.25rem)',
          background: 'rgba(3, 0, 10, 0.88)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxSizing: 'border-box',
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          style={{
            width: '100%',
            maxWidth: '640px',
            maxHeight: '92vh',
            overflowY: 'auto',
            background: 'rgba(12, 5, 28, 0.98)',
            border: `1px solid ${currentService.accent}`,
            borderRadius: '0.85rem',
            boxShadow: `0 0 45px ${currentService.accent}35, 0 30px 70px rgba(0, 0, 0, 0.95)`,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Window Chrome Header */}
          <div
            style={{
              padding: '0.75rem 1.15rem',
              background: 'rgba(20, 8, 44, 0.98)',
              borderBottom: `1px solid ${currentService.accent}33`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              userSelect: 'none',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
              </div>
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  color: '#cbd5e1',
                  marginLeft: '0.5rem',
                }}
              >
                client-intake // project-enquiry.sh
              </span>
            </div>

            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: '#94a3b8',
                fontSize: '1.25rem',
                cursor: 'pointer',
                padding: '0.2rem 0.5rem',
                borderRadius: '0.25rem',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
              aria-label="Close Enquiry Modal"
            >
              ✕
            </button>
          </div>

          {/* Form Content */}
          <div style={{ padding: '1.5rem clamp(1.2rem, 3vw, 2rem)' }}>
            {/* Header info */}
            <div style={{ marginBottom: '1.4rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '9999px',
                  background: `${currentService.accent}15`,
                  border: `1px solid ${currentService.accent}40`,
                  fontSize: '0.68rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  color: currentService.accent,
                  fontWeight: 700,
                  marginBottom: '0.6rem',
                }}
              >
                <span>{currentService.icon}</span>
                <span>{currentService.badge}</span>
                <span>•</span>
                <span>{currentPackage ? currentPackage.price : currentService.startingPrice}</span>
              </div>

              <h3
                style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: 'clamp(1.25rem, 3vw, 1.6rem)',
                  color: '#ffffff',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: '0.35rem',
                }}
              >
                Start Your Project Enquiry
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.5 }}>
                Share your requirements below. You can send this enquiry directly to my <strong style={{ color: '#22c55e' }}>WhatsApp</strong> for an instant response or send it via <strong style={{ color: '#00f3ff' }}>Email</strong>.
              </p>
            </div>

            {/* Service & Package Selector */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                gap: '1rem',
                marginBottom: '1rem',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              {/* Service Select */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.72rem',
                    color: '#00f3ff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                    marginBottom: '0.4rem',
                  }}
                >
                  Selected Service
                </label>
                <select
                  value={selectedServiceSlug}
                  onChange={handleServiceChange}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(0, 243, 255, 0.3)',
                    borderRadius: '0.45rem',
                    color: '#ffffff',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                >
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug} style={{ background: '#0e0422', color: '#ffffff' }}>
                      {s.title} ({s.startingPrice})
                    </option>
                  ))}
                </select>
              </div>

              {/* Package Select */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.72rem',
                    color: '#ec4899',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                    marginBottom: '0.4rem',
                  }}
                >
                  Selected Package
                </label>
                <select
                  value={selectedPackageId}
                  onChange={(e) => {
                    setSelectedPackageId(e.target.value);
                    const pkg = currentService?.packages?.find((p) => p.id === e.target.value);
                    if (pkg) setBudget(pkg.price);
                  }}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(236, 72, 153, 0.35)',
                    borderRadius: '0.45rem',
                    color: '#ffffff',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                >
                  {currentService.packages.map((pkg) => (
                    <option key={pkg.id} value={pkg.id} style={{ background: '#0e0422', color: '#ffffff' }}>
                      {pkg.name} — {pkg.price} {pkg.recommended ? '★ (Recommended)' : ''}
                    </option>
                  ))}
                  <option value="custom" style={{ background: '#0e0422', color: '#ffffff' }}>
                    Custom Requirements / Scope
                  </option>
                </select>
              </div>
            </div>

            {/* Name & Email Fields */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                gap: '1rem',
                marginBottom: '1rem',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.72rem',
                    color: '#cbd5e1',
                    letterSpacing: '0.06em',
                    fontWeight: 600,
                    marginBottom: '0.4rem',
                  }}
                >
                  Your Name <span style={{ color: '#00f3ff' }}>*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '0.45rem',
                    color: '#ffffff',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#00f3ff')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.72rem',
                    color: '#cbd5e1',
                    letterSpacing: '0.06em',
                    fontWeight: 600,
                    marginBottom: '0.4rem',
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '0.45rem',
                    color: '#ffffff',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#00f3ff')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
                />
              </div>
            </div>

            {/* Business Name & Budget Range */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
                gap: '1rem',
                marginBottom: '1rem',
                width: '100%',
                boxSizing: 'border-box',
              }}
            >
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.72rem',
                    color: '#cbd5e1',
                    letterSpacing: '0.06em',
                    fontWeight: 600,
                    marginBottom: '0.4rem',
                  }}
                >
                  Business / Brand Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Apex Retailers, Solo Practice..."
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '0.45rem',
                    color: '#ffffff',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#00f3ff')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.72rem',
                    color: '#cbd5e1',
                    letterSpacing: '0.06em',
                    fontWeight: 600,
                    marginBottom: '0.4rem',
                  }}
                >
                  Budget Range (INR)
                </label>
                <input
                  type="text"
                  placeholder="e.g. ₹5,000 – ₹10,000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '0.45rem',
                    color: '#ffffff',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#00f3ff')}
                  onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
                />
              </div>
            </div>

            {/* Requirements & Notes */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  color: '#cbd5e1',
                  letterSpacing: '0.06em',
                  fontWeight: 600,
                  marginBottom: '0.4rem',
                }}
              >
                Project Goals & Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Describe your website goals, number of pages, specific features, reference sites, or target launch deadline..."
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '0.45rem',
                  color: '#ffffff',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                  outline: 'none',
                  resize: 'vertical',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#00f3ff')}
                onBlur={(e) => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
              />
            </div>

            {/* Status Feedback Notice */}
            {statusMessage && (
              <div
                style={{
                  padding: '0.65rem 0.95rem',
                  borderRadius: '0.45rem',
                  marginBottom: '1rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.78rem',
                  background: statusMessage.type === 'error' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(34, 197, 94, 0.15)',
                  border: `1px solid ${statusMessage.type === 'error' ? '#ef4444' : '#22c55e'}`,
                  color: statusMessage.type === 'error' ? '#fca5a5' : '#86efac',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span>{statusMessage.type === 'error' ? '⚠' : '✓'}</span>
                <span>{statusMessage.text}</span>
              </div>
            )}

            {/* Action Buttons: WhatsApp and Email */}
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={generateWhatsAppUrl}
                style={{
                  flex: '1 1 240px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  padding: '0.8rem 1.25rem',
                  background: '#22c55e',
                  color: '#041208',
                  border: '1px solid #16a34a',
                  borderRadius: '0.45rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(34, 197, 94, 0.35)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#16a34a';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(34, 197, 94, 0.6)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#22c55e';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(34, 197, 94, 0.35)';
                  e.currentTarget.style.color = '#041208';
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>💬</span>
                <span>Send via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={generateEmailUrl}
                className="btn-cyber-primary"
                style={{
                  flex: '1 1 200px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem',
                  padding: '0.8rem 1.25rem',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <span style={{ fontSize: '1.05rem' }}>✉</span>
                <span>Send via Email</span>
              </button>
            </div>

            {/* Policy footnote */}
            <div
              style={{
                marginTop: '1.25rem',
                paddingTop: '0.85rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.66rem',
                color: '#64748b',
                lineHeight: 1.5,
                textAlign: 'center',
              }}
            >
              🔒 Payment Policy: 50% advance before kickoff • 50% on approved staging completion before handover.
              <br />
              Direct WhatsApp: +91 6374418536 • Direct Email: kishore103345@gmail.com
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

