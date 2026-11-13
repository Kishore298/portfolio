// src/components/portfolio/ProjectsSection.js
// Futuristic Showcase for Production Case Studies & Freelance Platforms
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../data/projects';
import ProjectDetail from './ProjectDetail';

function ProjectCard({ project, onClick }) {
  const isFlagship = project.projectType === 'flagship';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      onClick={() => onClick(project)}
      style={{
        background: isFlagship ? 'rgba(20, 9, 45, 0.92)' : 'rgba(16, 7, 36, 0.88)',
        border: `1px solid ${project.color}${isFlagship ? '60' : '35'}`,
        borderRadius: '0.85rem',
        overflow: 'hidden',
        cursor: 'pointer',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: isFlagship
          ? `0 12px 35px rgba(0, 0, 0, 0.7), 0 0 25px ${project.color}25, inset 0 0 15px ${project.color}15`
          : `0 10px 30px rgba(0, 0, 0, 0.6), inset 0 0 15px ${project.color}10`,
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = project.color;
        e.currentTarget.style.boxShadow = `0 0 35px ${project.color}45, 0 25px 60px rgba(0, 0, 0, 0.85)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${project.color}${isFlagship ? '60' : '35'}`;
        e.currentTarget.style.boxShadow = isFlagship
          ? `0 12px 35px rgba(0, 0, 0, 0.7), 0 0 25px ${project.color}25, inset 0 0 15px ${project.color}15`
          : `0 10px 30px rgba(0, 0, 0, 0.6), inset 0 0 15px ${project.color}10`;
      }}
    >
      {/* Browser Chrome Header */}
      <div style={{
        background: 'rgba(24, 11, 52, 0.95)',
        padding: '0.6rem 0.9rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        borderBottom: `1px solid ${project.color}25`,
      }}>
        {['#ff5f56', '#ffbd2e', '#27c93f'].map((c, i) => (
          <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
        ))}
        <div style={{
          flex: 1,
          margin: '0 0.5rem',
          background: 'rgba(255, 255, 255, 0.06)',
          borderRadius: '0.25rem',
          padding: '0.2rem 0.6rem',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.62rem',
          color: '#cbd5e1',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>
          https://{project.slug}.production/live
        </div>
        <span style={{
          fontSize: '0.62rem',
          color: project.color,
          fontWeight: 700,
          fontFamily: 'JetBrains Mono, monospace',
          letterSpacing: '0.04em',
        }}>
          {project.badge}
        </span>
      </div>

      {/* Holographic Preview Area */}
      <div style={{
        height: 135,
        background: `radial-gradient(circle at center, ${project.color}22 0%, rgba(10, 4, 24, 0.95) 85%)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '0 1rem',
      }}>
        <span style={{ fontSize: '2.8rem', marginBottom: '0.3rem', filter: `drop-shadow(0 0 15px ${project.color})` }}>
          {project.icon}
        </span>
        <span style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          color: project.color,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontWeight: 700,
          textAlign: 'center',
          lineHeight: 1.3,
        }}>
          {project.presentation}
        </span>
      </div>

      {/* Project Metadata */}
      <div style={{
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
      }}>
        <div>
          {/* Domain tag */}
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.62rem',
            color: '#a855f7',
            marginBottom: '0.35rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            {project.domain}
          </div>

          <h3 style={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '0.45rem',
            lineHeight: 1.35,
            minHeight: '2.8rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {project.title}
          </h3>

          <p style={{
            fontSize: '0.82rem',
            color: '#cbd5e1',
            lineHeight: 1.5,
            marginBottom: '0.85rem',
            minHeight: '2.5rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {project.description}
          </p>
        </div>

        {/* Tags & Action Links */}
        <div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
            marginBottom: '0.75rem',
          }}>
            {project.projectType === 'freelance' && (
              <span style={{
                padding: '0.18rem 0.5rem',
                background: 'rgba(236, 72, 153, 0.15)',
                border: '1px solid rgba(236, 72, 153, 0.45)',
                borderRadius: '0.25rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.6rem',
                color: '#f472b6',
                fontWeight: 600,
              }}>
                Dual-App: Storefront + Admin
              </span>
            )}
            <span style={{
              padding: '0.18rem 0.5rem',
              background: 'rgba(0, 243, 255, 0.12)',
              border: '1px solid rgba(0, 243, 255, 0.35)',
              borderRadius: '0.25rem',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.6rem',
              color: '#38bdf8',
              fontWeight: 600,
            }}>
              {project.stats.perf}
            </span>
          </div>

          {/* Technology Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '0.75rem' }}>
            {project.tech.slice(0, 5).map((t) => (
              <span key={t} style={{
                padding: '0.18rem 0.5rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: `1px solid ${project.color}35`,
                borderRadius: '0.25rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.6rem',
                color: project.color,
                fontWeight: 600,
              }}>
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span style={{
                padding: '0.18rem 0.5rem',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '0.25rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.6rem',
                color: '#94a3b8',
                fontWeight: 600,
              }}>
                +{project.tech.length - 5}
              </span>
            )}
          </div>

          {/* Card Footer: Live Link, GitHub Link & Case Study Button */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.07)',
          }}>
            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    padding: '0.22rem 0.55rem',
                    background: 'rgba(0, 243, 255, 0.12)',
                    border: '1px solid rgba(0, 243, 255, 0.4)',
                    borderRadius: '0.25rem',
                    color: '#00f3ff',
                    fontSize: '0.66rem',
                    fontWeight: 600,
                    fontFamily: 'JetBrains Mono, monospace',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  title="View Live Platform"
                >
                  Live ↗
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    padding: '0.22rem 0.55rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    borderRadius: '0.25rem',
                    color: '#cbd5e1',
                    fontSize: '0.66rem',
                    fontWeight: 600,
                    fontFamily: 'JetBrains Mono, monospace',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  title={project.githubPrivate ? 'Private Repository' : 'View GitHub Repo'}
                >
                  GitHub {project.githubPrivate ? '🔒' : '↗'}
                </a>
              )}
            </div>

            <button
              onClick={() => onClick(project)}
              style={{
                padding: '0.25rem 0.7rem',
                background: `${project.color}18`,
                border: `1px solid ${project.color}60`,
                borderRadius: '0.25rem',
                color: '#ffffff',
                fontSize: '0.68rem',
                fontWeight: 700,
                fontFamily: 'JetBrains Mono, monospace',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Case Study ➔
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection({ onSelectProject }) {
  const [internalSelected, setInternalSelected] = useState(null);
  const [filter, setFilter] = useState('all');

  const handleSelect = onSelectProject || setInternalSelected;
  const activeProject = onSelectProject ? null : internalSelected;

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'flagship') return p.projectType === 'flagship';
    if (filter === 'freelance') return p.projectType === 'freelance';
    return true;
  });

  return (
    <section id="projects" style={{ padding: 'clamp(4rem, 8vw, 7rem) clamp(1rem, 3vw, 2rem)', maxWidth: 1240, width: '100%', margin: '0 auto', boxSizing: 'border-box', overflow: 'hidden' }}>
      {/* Section Header */}
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
          <span>{"// PRODUCTION CASE STUDIES & FREELANCE PLATFORMS"}</span>
          <span style={{
            flex: 1,
            height: 1,
            background: 'linear-gradient(to right, #00f3ff, #ec4899, transparent)',
            maxWidth: 180,
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
          Featured Projects & Case Studies
        </h2>
        <p style={{
          fontSize: '1.05rem',
          color: '#94a3b8',
          maxWidth: 680,
          lineHeight: 1.7,
          marginBottom: '2rem',
        }}>
          Explore detailed case studies across production web platforms (Quick-Commerce POS, Enterprise CRM with Cloud Telephony) and 5 freelance e-commerce systems built with a practical dual-application setup. Click any card to inspect full system breakdowns.
        </p>

        {/* Category Filter Tabs */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem',
        }}>
          {[
            { id: 'all', label: `All Projects (${PROJECTS.length})` },
            { id: 'flagship', label: 'Flagship Platforms (2)' },
            { id: 'freelance', label: 'Freelance E-Commerce (5)' },
          ].map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  background: isActive ? 'rgba(0, 243, 255, 0.18)' : 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${isActive ? '#00f3ff' : 'rgba(255, 255, 255, 0.12)'}`,
                  color: isActive ? '#00f3ff' : '#94a3b8',
                  padding: '0.5rem 1.2rem',
                  borderRadius: '0.375rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 0 15px rgba(0, 243, 255, 0.3)' : 'none',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
        gap: 'clamp(1.25rem, 3vw, 2rem)',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={handleSelect}
          />
        ))}
      </div>

      {/* Local Modal if not using global modal */}
      <AnimatePresence>
        {activeProject && (
          <ProjectDetail
            project={activeProject}
            onClose={() => setInternalSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}