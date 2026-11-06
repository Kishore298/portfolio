// src/components/portfolio/ContactSection.js
// Central Contact Gateway Browser representing the convergence of the digital universe
import { motion } from 'framer-motion';

const CONTACTS = [
  {
    label: 'Email',
    value: 'kishore103345@gmail.com',
    href: 'mailto:kishore103345@gmail.com',
    icon: '✉',
    color: '#00f3ff',
    isExternal: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/Kishore298',
    href: 'https://github.com/Kishore298',
    icon: '⬡',
    color: '#ec4899',
    isExternal: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kishore-k-63b4aa250',
    href: 'https://www.linkedin.com/in/kishore-k-63b4aa250',
    icon: '◈',
    color: '#3b82f6',
    isExternal: true,
  },
  {
    label: 'WhatsApp',
    value: '+91 6374418536',
    href: 'https://wa.me/916374418536',
    icon: '💬',
    color: '#22c55e',
    isExternal: true,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" style={{ padding: '7rem 2rem 5rem', maxWidth: 1200, margin: '0 auto' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.3em',
          color: '#00f3ff',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          {"// CONTACT GATEWAY"}
        </div>
        <h2 style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          fontWeight: 800,
          fontFamily: 'Orbitron, sans-serif',
          color: '#ffffff',
          lineHeight: 1.15,
          marginBottom: '1rem',
          textShadow: '0 0 25px rgba(0, 243, 255, 0.35)',
        }}>
          Have an idea worth building?
        </h2>
        <p style={{
          fontSize: '1.15rem',
          color: '#ec4899',
          fontStyle: 'italic',
          letterSpacing: '0.04em',
          fontWeight: 500,
        }}>
          "Let's build something useful."
        </p>
      </motion.div>

      {/* Converged Glowing Browser Gateway */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          maxWidth: 620,
          margin: '0 auto',
          background: 'rgba(16, 7, 36, 0.92)',
          border: '1px solid #00f3ff',
          borderRadius: '1rem',
          overflow: 'hidden',
          boxShadow: '0 0 45px rgba(0, 243, 255, 0.25), 0 25px 60px rgba(0, 0, 0, 0.85)',
          backdropFilter: 'blur(16px)',
        }}
      >
        {/* Chrome Bar */}
        <div style={{
          background: 'rgba(24, 11, 52, 0.98)',
          padding: '0.75rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          borderBottom: '1px solid rgba(0, 243, 255, 0.25)',
        }}>
          {['#ff5f56', '#ffbd2e', '#27c93f'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, boxShadow: `0 0 6px ${c}` }} />
          ))}
          <div style={{
            flex: 1,
            margin: '0 0.85rem',
            background: 'rgba(255, 255, 255, 0.06)',
            borderRadius: '0.3rem',
            padding: '0.25rem 0.85rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.66rem',
            color: '#cbd5e1',
          }}>
            mailto:kishore103345@gmail.com
          </div>
          <span style={{ fontSize: '0.65rem', color: '#00f3ff', fontWeight: 600 }}>
            ● ONLINE
          </span>
        </div>

        {/* Body */}
        <div style={{ padding: '2.5rem', textAlign: 'center' }}>
          <div style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            filter: 'drop-shadow(0 0 15px #00f3ff)',
          }}>
            💬
          </div>
          <h3 style={{
            fontSize: '1.45rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '0.75rem',
          }}>
            Start a Conversation
          </h3>
          <p style={{
            color: '#cbd5e1',
            marginBottom: '2rem',
            fontSize: '0.95rem',
            lineHeight: 1.6,
          }}>
            Whether you have a junior developer opportunity, a project to build, or a question, my inbox is open.
          </p>

          {/* Contact channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', textAlign: 'left' }}>
            {CONTACTS.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.isExternal ? '_blank' : undefined}
                rel={contact.isExternal ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.1rem',
                  padding: '1rem 1.35rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${contact.color}35`,
                  borderRadius: '0.55rem',
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  transition: 'all 0.25s ease',
                  boxShadow: `inset 0 0 10px ${contact.color}08`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = contact.color;
                  e.currentTarget.style.background = `${contact.color}15`;
                  e.currentTarget.style.boxShadow = `0 0 25px ${contact.color}35`;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${contact.color}35`;
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.boxShadow = `inset 0 0 10px ${contact.color}08`;
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <span style={{ fontSize: '1.3rem', color: contact.color, filter: `drop-shadow(0 0 8px ${contact.color})` }}>
                  {contact.icon}
                </span>
                <div>
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.64rem',
                    color: contact.color,
                    marginBottom: '0.15rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    fontWeight: 700,
                  }}>
                    {contact.label}
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 500 }}>
                    {contact.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '5rem',
        paddingTop: '2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.75rem',
        color: '#64748b',
      }}>
        Designed & Built by Kishore · Full-Stack Developer · MERN Ecosystem
      </div>
    </section>
  );
}