// src/components/portfolio/ProjectDetail.js
// Interactive Deep-Dive Case Study Modal
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function CaseStudyShowcase({ images, projectTitle, accentColor }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Autoscroll every 3.8s when not hovered
  useEffect(() => {
    if (!images || images.length <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [images, isPaused]);

  if (!images || images.length === 0) return null;

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        background: 'rgba(12, 5, 30, 0.95)',
        border: `1px solid ${accentColor}40`,
        borderRadius: '0.75rem',
        padding: '1rem',
        marginBottom: '1.75rem',
        boxShadow: `0 0 25px ${accentColor}18, 0 15px 35px rgba(0, 0, 0, 0.7)`,
      }}
    >
      {/* Header bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.75rem',
        fontSize: '0.72rem',
        fontFamily: 'JetBrains Mono, monospace',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: accentColor, fontWeight: 700 }}>
          <span>{"// PLATFORM SHOWCASE"}</span>
          <span style={{ color: '#64748b' }}>•</span>
          <span style={{ color: '#cbd5e1' }}>Live Screenshots</span>
        </div>
        <div style={{
          padding: '0.2rem 0.6rem',
          borderRadius: '9999px',
          background: `${accentColor}18`,
          border: `1px solid ${accentColor}40`,
          color: '#ffffff',
          fontWeight: 600,
        }}>
          {activeIdx + 1} / {images.length}
        </div>
      </div>

      {/* Main Preview Screen */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(220px, 42vh, 420px)',
        background: '#04010a',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src={images[activeIdx]}
          alt={`${projectTitle} screenshot ${activeIdx + 1}`}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setActiveIdx((prev) => (prev - 1 + images.length) % images.length)}
              style={{
                position: 'absolute',
                left: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(10, 4, 26, 0.85)',
                border: `1px solid ${accentColor}80`,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.1rem',
                boxShadow: `0 0 12px ${accentColor}30`,
              }}
              title="Previous Screenshot"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setActiveIdx((prev) => (prev + 1) % images.length)}
              style={{
                position: 'absolute',
                right: 10,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(10, 4, 26, 0.85)',
                border: `1px solid ${accentColor}80`,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.1rem',
                boxShadow: `0 0 12px ${accentColor}30`,
              }}
              title="Next Screenshot"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div style={{
          display: 'flex',
          gap: '0.6rem',
          marginTop: '0.75rem',
          overflowX: 'auto',
          paddingBottom: '0.25rem',
        }}>
          {images.map((thumb, tIdx) => {
            const isActive = tIdx === activeIdx;
            return (
              <button
                key={tIdx}
                type="button"
                onClick={() => setActiveIdx(tIdx)}
                style={{
                  flex: '0 0 80px',
                  height: 52,
                  borderRadius: '0.35rem',
                  overflow: 'hidden',
                  padding: 0,
                  background: '#04010a',
                  border: `2px solid ${isActive ? accentColor : 'rgba(255, 255, 255, 0.12)'}`,
                  boxShadow: isActive ? `0 0 12px ${accentColor}60` : 'none',
                  cursor: 'pointer',
                  opacity: isActive ? 1 : 0.6,
                  transition: 'all 0.2s ease',
                }}
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${tIdx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  const accentColor = project.color || '#00f3ff';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(3, 1, 10, 0.88)',
        backdropFilter: 'blur(16px)',
        padding: 'clamp(0.5rem, 2.5vw, 1.5rem)',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'rgba(15, 6, 36, 0.98)',
          border: `1px solid ${accentColor}`,
          borderRadius: '1rem',
          overflow: 'hidden',
          width: '100%',
          maxWidth: 820,
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: `0 0 50px ${accentColor}30, 0 30px 80px rgba(0, 0, 0, 0.9)`,
        }}
      >
        {/* Browser Chrome Bar */}
        <div style={{
          background: 'rgba(24, 10, 52, 0.98)',
          padding: '0.75rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          borderBottom: `1px solid ${accentColor}30`,
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}>
          {['#ff5f56', '#ffbd2e', '#27c93f'].map((c, i) => (
            <div
              key={i}
              style={{
                width: 11,
                height: 11,
                borderRadius: '50%',
                background: c,
                cursor: i === 0 ? 'pointer' : 'default',
                boxShadow: `0 0 6px ${c}`,
              }}
              onClick={i === 0 ? onClose : undefined}
              title={i === 0 ? 'Close' : ''}
            />
          ))}

          <div style={{
            flex: 1,
            margin: '0 0.85rem',
            background: 'rgba(255, 255, 255, 0.06)',
            borderRadius: '0.35rem',
            padding: '0.25rem 0.85rem',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.68rem',
            color: '#cbd5e1',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            https://case-study.internal/{project.slug}
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '0.25rem',
              color: '#ffffff',
              cursor: 'pointer',
              fontSize: '0.8rem',
              lineHeight: 1,
              padding: '0.35rem 0.65rem',
              fontFamily: 'JetBrains Mono, monospace',
            }}
          >
            ✕ Close
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div id="modal-scroll-container" style={{ padding: 'clamp(1rem, 3.5vw, 2.25rem)', overflowY: 'auto' }}>
          {/* Header */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.75rem',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '2.5rem', filter: `drop-shadow(0 0 15px ${accentColor})` }}>
                  {project.icon}
                </span>
                <span style={{
                  padding: '0.3rem 0.8rem',
                  background: `${accentColor}18`,
                  border: `1px solid ${accentColor}60`,
                  borderRadius: '9999px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: accentColor,
                  letterSpacing: '0.08em',
                }}>
                  {project.badge}
                </span>
              </div>

              <span style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                color: '#94a3b8',
              }}>
                {project.presentation}
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(1.5rem, 3.2vw, 2.1rem)',
              fontWeight: 800,
              fontFamily: 'Orbitron, sans-serif',
              color: '#ffffff',
              marginBottom: '0.5rem',
              lineHeight: 1.25,
              textShadow: `0 0 20px ${accentColor}40`,
            }}>
              {project.title}
            </h2>

            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.78rem',
              color: '#ec4899',
              fontWeight: 600,
              marginBottom: '1rem',
            }}>
              {project.domain}
            </div>

            <p style={{
              fontSize: '0.98rem',
              color: '#e2e8f0',
              lineHeight: 1.75,
              marginBottom: '1.5rem',
            }}>
              {project.longDescription}
            </p>

            {/* Project Showcase Images Gallery */}
            {project.showcaseImages && project.showcaseImages.length > 0 && (
              <CaseStudyShowcase
                images={project.showcaseImages}
                projectTitle={project.title}
                accentColor={accentColor}
              />
            )}

            {/* Architecture Banner */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: `1px solid ${accentColor}35`,
              borderRadius: '0.5rem',
              padding: '1rem 1.25rem',
              marginBottom: '1.75rem',
            }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.72rem',
                color: accentColor,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '0.4rem',
              }}>
                {"// SYSTEM & SETUP SUMMARY"}
              </div>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                {project.architecture.summary}
              </p>
            </div>

            {/* DevOps Collaboration Clarification (Infysec Specific) */}
            {project.devopsNote && (
              <div style={{
                background: 'rgba(168, 85, 247, 0.08)',
                border: '1px solid rgba(168, 85, 247, 0.4)',
                borderRadius: '0.5rem',
                padding: '0.85rem 1.15rem',
                marginBottom: '1.75rem',
              }}>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  color: '#a855f7',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem',
                }}>
                  {"// DEVOPS & INFRASTRUCTURE CLARIFICATION"}
                </div>
                <p style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
                  {project.devopsNote}
                </p>
              </div>
            )}

            {/* Deployment & Hosting Details */}
            {project.deployment && (
              <div style={{
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                borderRadius: '0.5rem',
                padding: '0.85rem 1.15rem',
                marginBottom: '1.75rem',
              }}>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  color: '#38bdf8',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem',
                }}>
                  {"// DEPLOYMENT & HOSTING CONFIGURATION"}
                </div>
                <p style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
                  {project.deployment}
                </p>
              </div>
            )}
          </div>

          {/* Key Features & Contributions */}
          {project.modules && project.modules.length > 0 && (
            <div style={{ marginBottom: '2.25rem' }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: '#ec4899',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: '1rem',
              }}>
                {"// KEY FEATURES & CONTRIBUTIONS"}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.modules.map((mod, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '0.5rem',
                      padding: '1rem 1.25rem',
                    }}
                  >
                    <h4 style={{
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.6rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                    }}>
                      <span style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: accentColor,
                        boxShadow: `0 0 8px ${accentColor}`,
                      }} />
                      {mod.title}
                    </h4>

                    <ul style={{ margin: 0, paddingLeft: '1.4rem', color: '#cbd5e1', fontSize: '0.85rem', lineHeight: 1.65 }}>
                      {mod.points.map((pt, idx) => (
                        <li key={idx} style={{ marginBottom: '0.35rem' }}>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Categorized Tech Stack */}
          {project.techCategories && (
            <div style={{ marginBottom: '2.25rem' }}>
              <div style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.75rem',
                color: '#00f3ff',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: '1rem',
              }}>
                {"// CATEGORIZED TECHNOLOGY STACK"}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1rem', width: '100%', boxSizing: 'border-box' }}>
                {Object.entries(project.techCategories).map(([cat, tools]) => (
                  <div
                    key={cat}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '0.45rem',
                      padding: '0.85rem 1rem',
                    }}
                  >
                    <div style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '0.68rem',
                      color: accentColor,
                      fontWeight: 700,
                      marginBottom: '0.55rem',
                      letterSpacing: '0.05em',
                    }}>
                      {cat}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {tools.map((t) => (
                        <span
                          key={t}
                          style={{
                            padding: '0.2rem 0.5rem',
                            background: `${accentColor}12`,
                            border: `1px solid ${accentColor}30`,
                            borderRadius: '0.25rem',
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.68rem',
                            color: '#ffffff',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="btn-cyber-primary"
                style={{
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.75rem 1.6rem',
                  fontSize: '0.88rem',
                }}
              >
                View Live Site ↗
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-cyber-secondary"
                style={{
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.75rem 1.5rem',
                  fontSize: '0.88rem',
                }}
              >
                GitHub {project.githubPrivate ? '(Private Repo) 🔒' : 'Repository ↗'}
              </a>
            )}

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#cbd5e1',
                padding: '0.75rem 1.4rem',
                borderRadius: '0.375rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                marginLeft: 'auto',
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
              ← Back to Projects
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}