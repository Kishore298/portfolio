// src/components/hero/EditorStack.js
// 3D Layered Code Editor Stack with live syntax typing and physical card-deck swipe transitions
import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

export const CODE_FILES = [
  {
    filename: 'ProjectDashboard.jsx',
    category: 'React Frontend',
    icon: '⚛️',
    accent: '#00f3ff',
    tokens: [
      { text: 'import ', type: 'kw' },
      { text: '{ useState, useEffect } ', type: 'punc' },
      { text: 'from ', type: 'kw' },
      { text: "'react'", type: 'str' },
      { text: ';\n\n', type: 'punc' },
      { text: 'export default function ', type: 'kw' },
      { text: 'ProjectDashboard', type: 'fn' },
      { text: '() {\n', type: 'punc' },
      { text: '  const ', type: 'kw' },
      { text: '[metrics, setMetrics]', type: 'punc' },
      { text: ' = ', type: 'op' },
      { text: 'useState', type: 'fn' },
      { text: '({ latency: ', type: 'punc' },
      { text: '42', type: 'num' },
      { text: ' });\n\n', type: 'punc' },
      { text: '  return (\n', type: 'kw' },
      { text: '    <div ', type: 'tag' },
      { text: 'className', type: 'prop' },
      { text: '="dashboard-grid"', type: 'str' },
      { text: '>\n', type: 'tag' },
      { text: '      <RealtimePulse ', type: 'fn' },
      { text: 'latency', type: 'prop' },
      { text: '={metrics.latency}', type: 'punc' },
      { text: ' />\n', type: 'fn' },
      { text: '      <DeploymentPipeline ', type: 'fn' },
      { text: 'branch', type: 'prop' },
      { text: '="main"', type: 'str' },
      { text: ' status', type: 'prop' },
      { text: '="healthy"', type: 'str' },
      { text: ' />\n', type: 'fn' },
      { text: '    </div>\n', type: 'tag' },
      { text: '  );\n', type: 'punc' },
      { text: '}', type: 'punc' },
    ],
  },
  {
    filename: 'server.js',
    category: 'Express Server',
    icon: '🚀',
    accent: '#10b981',
    tokens: [
      { text: 'const ', type: 'kw' },
      { text: 'express', type: 'punc' },
      { text: ' = ', type: 'op' },
      { text: 'require', type: 'fn' },
      { text: "('express')", type: 'str' },
      { text: ';\n', type: 'punc' },
      { text: 'const ', type: 'kw' },
      { text: 'connectDB', type: 'fn' },
      { text: ' = ', type: 'op' },
      { text: 'require', type: 'fn' },
      { text: "('./database')", type: 'str' },
      { text: ';\n', type: 'punc' },
      { text: 'const ', type: 'kw' },
      { text: 'apiRoutes', type: 'punc' },
      { text: ' = ', type: 'op' },
      { text: 'require', type: 'fn' },
      { text: "('./routes/api')", type: 'str' },
      { text: ';\n\n', type: 'punc' },
      { text: 'const ', type: 'kw' },
      { text: 'app', type: 'punc' },
      { text: ' = ', type: 'op' },
      { text: 'express', type: 'fn' },
      { text: '();\n', type: 'punc' },
      { text: 'app.', type: 'punc' },
      { text: 'use', type: 'fn' },
      { text: '(', type: 'punc' },
      { text: 'express.', type: 'punc' },
      { text: 'json', type: 'fn' },
      { text: '());\n', type: 'punc' },
      { text: 'connectDB', type: 'fn' },
      { text: '();\n\n', type: 'punc' },
      { text: 'app.', type: 'punc' },
      { text: 'use', type: 'fn' },
      { text: "('/api', ", type: 'punc' },
      { text: 'apiRoutes', type: 'punc' },
      { text: ');\n', type: 'punc' },
      { text: 'app.', type: 'punc' },
      { text: 'listen', type: 'fn' },
      { text: '(', type: 'punc' },
      { text: '5000', type: 'num' },
      { text: ', () => ', type: 'kw' },
      { text: 'console.', type: 'punc' },
      { text: 'log', type: 'fn' },
      { text: "('🚀 Server online :5000')", type: 'str' },
      { text: ');', type: 'punc' },
    ],
  },
  {
    filename: 'routes/api.js',
    category: 'REST API',
    icon: '⚡',
    accent: '#a855f7',
    tokens: [
      { text: 'const ', type: 'kw' },
      { text: 'router', type: 'punc' },
      { text: ' = ', type: 'op' },
      { text: 'express.', type: 'punc' },
      { text: 'Router', type: 'fn' },
      { text: '();\n', type: 'punc' },
      { text: 'const ', type: 'kw' },
      { text: '{ verifyToken }', type: 'punc' },
      { text: ' = ', type: 'op' },
      { text: 'require', type: 'fn' },
      { text: "('../authController')", type: 'str' },
      { text: ';\n\n', type: 'punc' },
      { text: '// GET /api/projects - Portfolio data pipeline\n', type: 'comment' },
      { text: 'router.', type: 'punc' },
      { text: 'get', type: 'fn' },
      { text: "('/projects', ", type: 'punc' },
      { text: 'async ', type: 'kw' },
      { text: '(req, res) => {\n', type: 'punc' },
      { text: '  const ', type: 'kw' },
      { text: 'projects', type: 'punc' },
      { text: ' = ', type: 'op' },
      { text: 'await ', type: 'kw' },
      { text: 'Project.', type: 'punc' },
      { text: 'find', type: 'fn' },
      { text: '().', type: 'punc' },
      { text: 'sort', type: 'fn' },
      { text: '({ rank: ', type: 'punc' },
      { text: '1', type: 'num' },
      { text: ' });\n', type: 'punc' },
      { text: '  res.', type: 'punc' },
      { text: 'status', type: 'fn' },
      { text: '(', type: 'punc' },
      { text: '200', type: 'num' },
      { text: ').', type: 'punc' },
      { text: 'json', type: 'fn' },
      { text: '({ success: ', type: 'punc' },
      { text: 'true', type: 'kw' },
      { text: ', data: projects });\n', type: 'punc' },
      { text: '});\n\n', type: 'punc' },
      { text: 'module.exports = router;', type: 'kw' },
    ],
  },
  {
    filename: 'database.js',
    category: 'MongoDB Schemas',
    icon: '🗄️',
    accent: '#ec4899',
    tokens: [
      { text: 'const ', type: 'kw' },
      { text: 'mongoose', type: 'punc' },
      { text: ' = ', type: 'op' },
      { text: 'require', type: 'fn' },
      { text: "('mongoose')", type: 'str' },
      { text: ';\n\n', type: 'punc' },
      { text: 'const ', type: 'kw' },
      { text: 'connectDB', type: 'fn' },
      { text: ' = ', type: 'op' },
      { text: 'async ', type: 'kw' },
      { text: '() => {\n', type: 'punc' },
      { text: '  try {\n', type: 'kw' },
      { text: '    const ', type: 'kw' },
      { text: 'conn', type: 'punc' },
      { text: ' = ', type: 'op' },
      { text: 'await ', type: 'kw' },
      { text: 'mongoose.', type: 'punc' },
      { text: 'connect', type: 'fn' },
      { text: '(process.env.MONGO_URI, {\n', type: 'punc' },
      { text: '      maxPoolSize: ', type: 'prop' },
      { text: '50', type: 'num' },
      { text: ',\n      wtimeoutMS: ', type: 'prop' },
      { text: '2500', type: 'num' },
      { text: '\n    });\n', type: 'punc' },
      { text: '    console.', type: 'punc' },
      { text: 'log', type: 'fn' },
      { text: "('⚡ MongoDB connected: primary-atlas');\n", type: 'str' },
      { text: '  } catch (err) {\n', type: 'kw' },
      { text: '    console.', type: 'punc' },
      { text: 'error', type: 'fn' },
      { text: '(err.message);\n', type: 'punc' },
      { text: '  }\n};\n\n', type: 'kw' },
      { text: 'module.exports = connectDB;', type: 'kw' },
    ],
  },
  {
    filename: 'authController.js',
    category: 'Auth Middleware',
    icon: '🛡️',
    accent: '#38bdf8',
    tokens: [
      { text: 'const ', type: 'kw' },
      { text: 'jwt', type: 'punc' },
      { text: ' = ', type: 'op' },
      { text: 'require', type: 'fn' },
      { text: "('jsonwebtoken')", type: 'str' },
      { text: ';\n\n', type: 'punc' },
      { text: 'exports.', type: 'punc' },
      { text: 'verifyToken', type: 'fn' },
      { text: ' = ', type: 'op' },
      { text: '(req, res, next) => {\n', type: 'punc' },
      { text: '  const ', type: 'kw' },
      { text: 'authHeader', type: 'punc' },
      { text: ' = ', type: 'op' },
      { text: "req.headers['authorization']", type: 'punc' },
      { text: ';\n', type: 'punc' },
      { text: '  if (!authHeader) return res.', type: 'kw' },
      { text: 'status', type: 'fn' },
      { text: '(', type: 'punc' },
      { text: '401', type: 'num' },
      { text: ').', type: 'punc' },
      { text: 'json', type: 'fn' },
      { text: "({ error: 'Unauthorized' });\n\n", type: 'str' },
      { text: '  const ', type: 'kw' },
      { text: 'token', type: 'punc' },
      { text: ' = ', type: 'op' },
      { text: "authHeader.split(' ')[1];\n", type: 'punc' },
      { text: '  jwt.', type: 'punc' },
      { text: 'verify', type: 'fn' },
      { text: '(token, process.env.JWT_SECRET, (err, decoded) => {\n', type: 'punc' },
      { text: '    if (err) return res.', type: 'kw' },
      { text: 'status', type: 'fn' },
      { text: '(', type: 'punc' },
      { text: '403', type: 'num' },
      { text: ').', type: 'punc' },
      { text: 'json', type: 'fn' },
      { text: "({ error: 'Forbidden' });\n", type: 'str' },
      { text: '    req.user = decoded; next();\n', type: 'punc' },
      { text: '  });\n};\n', type: 'punc' },
    ],
  },
];

const SYNTAX_COLORS = {
  kw: '#c084fc',     // Keywords in vibrant purple
  fn: '#60a5fa',     // Functions in bright blue
  str: '#34d399',    // Strings in emerald green
  num: '#fbbf24',    // Numbers in amber
  tag: '#f472b6',    // JSX tags in neon pink
  prop: '#38bdf8',   // Properties in sky blue
  comment: '#64748b',// Comments in muted slate
  op: '#ec4899',     // Operators in magenta
  punc: '#e2e8f0',   // Punctuation in white/slate
};

export default function EditorStack() {
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [typedCharsCount, setTypedCharsCount] = useState(0);
  const activeFile = CODE_FILES[activeFileIndex];

  // Flatten active file tokens into an array of characters
  const charStream = useMemo(() => {
    const chars = [];
    activeFile.tokens.forEach((token) => {
      for (let i = 0; i < token.text.length; i++) {
        chars.push({
          char: token.text[i],
          type: token.type,
          isNewline: token.text[i] === '\n',
        });
      }
    });
    return chars;
  }, [activeFile]);

  // Live typing engine for the active foreground editor
  useEffect(() => {
    setTypedCharsCount(0);
    let count = 0;
    let timerId;
    let isCancelled = false;

    const typeNext = () => {
      if (isCancelled) return;
      if (count < charStream.length) {
        count++;
        setTypedCharsCount(count);

        const currentCh = charStream[count - 1];
        let delay = 22 + Math.random() * 20;
        if (currentCh.isNewline) delay = 140 + Math.random() * 60;
        else if (currentCh.char === ';') delay = 160;

        timerId = setTimeout(typeNext, delay);
      } else {
        // Typing complete! Hold for 2.6s for reading, then perform sideways swipe transition
        timerId = setTimeout(() => {
          if (isCancelled) return;
          setIsSwiping(true);

          // Wait 680ms for swipe transition to complete, then rotate to next file
          setTimeout(() => {
            if (isCancelled) return;
            setActiveFileIndex((prev) => (prev + 1) % CODE_FILES.length);
            setIsSwiping(false);
          }, 680);
        }, 2600);
      }
    };

    timerId = setTimeout(typeNext, 250);

    return () => {
      isCancelled = true;
      clearTimeout(timerId);
    };
  }, [activeFileIndex, charStream]);

  // Reconstruct displayed tokens from typedCharsCount
  const { displayedLines, currentLineNumber } = useMemo(() => {
    const lines = [[]];
    let lineIdx = 0;

    for (let i = 0; i < typedCharsCount && i < charStream.length; i++) {
      const item = charStream[i];
      if (item.isNewline) {
        lineIdx++;
        lines[lineIdx] = [];
      } else {
        const curLine = lines[lineIdx];
        if (curLine.length > 0 && curLine[curLine.length - 1].type === item.type) {
          curLine[curLine.length - 1].text += item.char;
        } else {
          curLine.push({ text: item.char, type: item.type });
        }
      }
    }

    return { displayedLines: lines, currentLineNumber: lineIdx + 1 };
  }, [typedCharsCount, charStream]);

  return (
    <div
      className="editor-stack-outer"
      style={{
        position: 'relative',
        width: '100%',
        minWidth: 0,
        perspective: '1200px',
        overflow: 'visible',
        boxSizing: 'border-box',
      }}
    >
      {/* Stacked Editor Windows Layered in 3D */}
      {CODE_FILES.map((file, i) => {
        // Calculate relative index in the 5-card deck
        const relIdx = (i - activeFileIndex + CODE_FILES.length) % CODE_FILES.length;
        const isForeground = relIdx === 0;

        // Visual transforms for genuine stacking depth (compact on mobile to avoid overflow)
        const isMobileScreen = typeof window !== 'undefined' && window.innerWidth < 860;
        let xOffset = isMobileScreen ? relIdx * 2 : relIdx * 4;
        let yOffset = isMobileScreen ? -relIdx * 3 : -relIdx * 5;
        let scale = 1 - relIdx * 0.035;
        let opacity = isForeground ? 1 : Math.max(0.2, 0.85 - relIdx * 0.18);
        let zIndex = 10 - relIdx * 2;
        let rotateY = isMobileScreen ? 0 : -relIdx * 1.5;
        const swipeDistance = isMobileScreen ? 90 : 260;

        return (
          <motion.div
            key={file.filename}
            animate={{
              x: isForeground && isSwiping ? swipeDistance : xOffset,
              y: isForeground && isSwiping ? 8 : yOffset,
              scale: isForeground && isSwiping ? 0.92 : scale,
              opacity: isForeground && isSwiping ? 0 : opacity,
              rotateY: isForeground && isSwiping ? 18 : rotateY,
            }}
            transition={{
              duration: 0.65,
              ease: [0.25, 1, 0.5, 1],
            }}
            onClick={() => {
              if (!isForeground) {
                setActiveFileIndex(i);
              }
            }}
            style={{
              position: 'absolute',
              top: isMobileScreen ? 14 : 22,
              left: 0,
              right: isMobileScreen ? 8 : 18,
              bottom: 0,
              zIndex,
              borderRadius: '0.85rem',
              background: 'rgba(9, 4, 26, 0.96)',
              border: `1px solid ${isForeground ? file.accent : 'rgba(255, 255, 255, 0.12)'}`,
              boxShadow: isForeground
                ? `0 0 32px ${file.accent}33, 0 20px 45px rgba(0, 0, 0, 0.85)`
                : '0 12px 25px rgba(0, 0, 0, 0.65)',
              overflow: 'hidden',
              cursor: isForeground ? 'default' : 'pointer',
              display: 'flex',
              flexDirection: 'column',
              fontFamily: 'JetBrains Mono, monospace',
              backdropFilter: 'blur(16px)',
              pointerEvents: isForeground ? 'auto' : 'auto',
              boxSizing: 'border-box',
            }}
          >
            {/* Window Titlebar & File Tabs */}
            <div
              style={{
                background: 'rgba(15, 6, 38, 0.98)',
                padding: '0.45rem 0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderBottom: `1px solid ${isForeground ? file.accent + '44' : 'rgba(255, 255, 255, 0.08)'}`,
                userSelect: 'none',
              }}
            >
              {/* Traffic Light Window Buttons */}
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f56' }} />
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffbd2e' }} />
                <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#27c93f' }} />
              </div>

              {/* Active Tab Badge */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.2rem 0.65rem',
                  borderRadius: '0.35rem',
                  background: isForeground ? `${file.accent}22` : 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${isForeground ? file.accent : 'transparent'}`,
                  fontSize: '0.7rem',
                  color: isForeground ? '#ffffff' : '#94a3b8',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '160px',
                }}
              >
                <span>{file.icon}</span>
                <span>{file.filename}</span>
              </div>

              {/* Stack Category Pill */}
              <span
                style={{
                  fontSize: '0.62rem',
                  color: isForeground ? file.accent : '#64748b',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginLeft: 'auto',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '110px',
                }}
              >
                {file.category}
              </span>
            </div>

            {/* Code Body */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                overflow: 'hidden',
                padding: '0.6rem 0',
                fontSize: '0.74rem',
                lineHeight: '1.7',
              }}
            >
              {/* Dynamic Line Numbers Gutter — types lines in real-time as code writes */}
              <div
                style={{
                  padding: '0 0.75rem',
                  textAlign: 'right',
                  color: '#475569',
                  userSelect: 'none',
                  borderRight: '1px solid rgba(255, 255, 255, 0.06)',
                  minWidth: '2.4rem',
                }}
              >
                {Array.from({
                  length: isForeground ? Math.max(1, displayedLines.length) : 6,
                }).map((_, li) => {
                  const lineNo = li + 1;
                  const isCurrent = isForeground && lineNo === currentLineNumber;
                  return (
                    <div
                      key={li}
                      style={{
                        color: isCurrent ? file.accent : '#475569',
                        fontWeight: isCurrent ? 800 : 400,
                        transition: 'color 0.15s ease',
                      }}
                    >
                      {lineNo}
                    </div>
                  );
                })}
              </div>

              {/* Code Content Area */}
              <div
                style={{
                  flex: 1,
                  padding: '0 0.95rem',
                  overflowY: 'auto',
                  position: 'relative',
                }}
              >
                {isForeground ? (
                  <>
                    {displayedLines.map((lineTokens, li) => (
                      <div
                        key={li}
                        style={{
                          minHeight: '1.25rem',
                          background:
                            li + 1 === currentLineNumber
                              ? `${file.accent}12`
                              : 'transparent',
                          borderRadius: '2px',
                        }}
                      >
                        {lineTokens.map((token, ti) => (
                          <span
                            key={ti}
                            style={{
                              color: SYNTAX_COLORS[token.type] || '#f8fafc',
                              fontWeight: token.type === 'kw' ? 600 : 400,
                            }}
                          >
                            {token.text}
                          </span>
                        ))}
                        {/* Blinking Cursor at the end of the active line */}
                        {li + 1 === currentLineNumber && (
                          <span
                            style={{
                              display: 'inline-block',
                              width: '7px',
                              height: '14px',
                              background: file.accent,
                              boxShadow: `0 0 8px ${file.accent}`,
                              marginLeft: '2px',
                              verticalAlign: 'text-bottom',
                              animation: 'editorCursorBlink 0.9s infinite',
                            }}
                          />
                        )}
                      </div>
                    ))}
                  </>
                ) : (
                  // Static dimmed preview for stacked background editors
                  <div style={{ opacity: 0.65 }}>
                    {file.tokens.slice(0, 10).map((tok, ti) => (
                      <span
                        key={ti}
                        style={{ color: SYNTAX_COLORS[tok.type] || '#64748b' }}
                      >
                        {tok.text}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div
              style={{
                background: 'rgba(12, 5, 30, 0.95)',
                padding: '0.3rem 0.95rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                fontSize: '0.62rem',
                color: '#64748b',
                userSelect: 'none',
              }}
            >
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span>UTF-8</span>
                <span>JavaScript React</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ color: file.accent, fontWeight: 700 }}>
                  FILE {i + 1} OF 5
                </span>
                <span>Ln {isForeground ? currentLineNumber : 1}, Col 1</span>
              </div>
            </div>
          </motion.div>
        );
      })}

      <style>{`
        .editor-stack-outer {
          max-width: 440px;
          height: clamp(310px, 45vh, 370px);
        }
        @media (min-width: 861px) {
          .editor-stack-outer {
            max-width: 680px;
            height: 380px;
          }
        }
        @keyframes editorCursorBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}