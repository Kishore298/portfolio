// src/components/hero/FixedBashTerminal.js
// Dedicated fixed bash terminal displaying build & server telemetry in an independent continuous loop
import React, { useState, useEffect, useRef } from 'react';

const LOG_SCRIPT = [
  { text: '$ npm run dev', type: 'cmd', delay: 400 },
  { text: '> portfolio@production dev: live-services', type: 'output', delay: 250 },
  { text: '  [Express 5] REST API gateway online on :5000', type: 'info', delay: 300 },
  { text: '  [MongoDB] Connected to production cluster (0.6ms)', type: 'success', delay: 250 },
  { text: '  [InventoryGuard] Atomic stock deduction checks active', type: 'info', delay: 280 },
  { text: '  [Cashfree] HMAC-SHA256 webhook listener verified', type: 'success', delay: 260 },
  { text: '  [Exotel] Cloud telephony webhook stream listening', type: 'info', delay: 240 },
  { text: '  [cPanel / MilesWeb] Dual-App storefront routing ready', type: 'success', delay: 300 },
  { text: '  [System] All production services nominal • 60 FPS', type: 'output', delay: 250 },
];

const COLOR_MAP = {
  cmd: '#38bdf8',
  output: '#94a3b8',
  info: '#a855f7',
  success: '#10b981',
  br: 'transparent',
};

export default function FixedBashTerminal() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [cycleCount, setCycleCount] = useState(0);
  const bodyRef = useRef();

  useEffect(() => {
    let timeouts = [];
    let accumulatedTime = 100;

    // Reset buffer at start of cycle
    setDisplayedLines([]);

    LOG_SCRIPT.forEach((line) => {
      accumulatedTime += line.delay;
      const t = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line]);
        if (bodyRef.current) {
          bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
        }
      }, accumulatedTime);
      timeouts.push(t);
    });

    // Hold on completion for 2.8 seconds, then restart cycle
    const restartTimer = setTimeout(() => {
      setCycleCount((c) => c + 1);
    }, accumulatedTime + 2800);
    timeouts.push(restartTimer);

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [cycleCount]);

  return (
    <div
      style={{
        background: 'rgba(9, 4, 24, 0.95)',
        border: '1px solid rgba(0, 243, 255, 0.35)',
        borderRadius: '0.85rem',
        overflow: 'hidden',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.72rem',
        boxShadow: '0 0 25px rgba(0, 243, 255, 0.15), 0 20px 40px rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(14px)',
        width: '100%',
        maxWidth: '360px',
        minWidth: '260px',
        height: '380px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Terminal Titlebar */}
      <div
        style={{
          background: 'rgba(16, 7, 40, 0.98)',
          padding: '0.55rem 0.95rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          borderBottom: '1px solid rgba(0, 243, 255, 0.2)',
          userSelect: 'none',
        }}
      >
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: '#27c93f' }} />
        </div>
        <span
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: '0.68rem',
            color: '#00f3ff',
            letterSpacing: '0.06em',
            fontWeight: 600,
          }}
        >
          bash ~ dev-server: telemetry
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 8px #10b981',
              display: 'inline-block',
            }}
          />
          <span style={{ fontSize: '0.62rem', color: '#10b981', fontWeight: 700 }}>LIVE</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={bodyRef}
        style={{
          flex: 1,
          padding: '0.9rem 1.15rem',
          lineHeight: '1.75',
          overflowY: 'auto',
          color: '#e2e8f0',
        }}
      >
        {displayedLines.map((line, i) => (
          <div key={i} style={{ color: COLOR_MAP[line.type] || '#e2e8f0', minHeight: line.type === 'br' ? '0.7rem' : 'auto' }}>
            {line.type === 'cmd' && <span style={{ color: '#00f3ff' }}>&gt; </span>}
            {line.text}
          </div>
        ))}

        {/* Blinking Prompt Cursor */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
          <span style={{ color: '#00f3ff' }}>&gt; </span>
          <span
            style={{
              display: 'inline-block',
              width: '7px',
              height: '14px',
              background: '#00f3ff',
              boxShadow: '0 0 8px #00f3ff',
              animation: 'terminalCursorBlink 1s infinite',
            }}
          />
        </div>
      </div>

      {/* Terminal Footer Status Bar */}
      <div
        style={{
          background: 'rgba(12, 5, 30, 0.95)',
          padding: '0.35rem 0.9rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          fontSize: '0.62rem',
          color: '#64748b',
        }}
      >
        <span>PORT: 5000 / 3000</span>
        <span>MERN STACK ONLINE</span>
      </div>

      <style>{`
        @keyframes terminalCursorBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}