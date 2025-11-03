import React, { useMemo } from 'react';

// Simple CSS-based rain effect overlay. Renders only when active.
const Rain = ({ active = false }) => {
  const drops = useMemo(() => {
    const w = typeof window !== 'undefined' ? window.innerWidth : 1024;
    const isMobile = w < 640;
    const count = isMobile ? 80 : 160;
    return Array.from({ length: count }).map((_, i) => {
      const left = Math.random() * 100; // vw
      const delay = Math.random() * 2; // s
      const duration = 0.7 + Math.random() * 0.7; // s
      const size = 0.8 + Math.random() * 0.8; // px thickness multiplier
      return { id: i, left, delay, duration, size };
    });
  }, []);

  if (!active) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-40">
      <style>{`
        @keyframes raindropFall {
          0% { transform: translate3d(0, -110%, 0); opacity: 0; }
          10% { opacity: 0.9; }
          100% { transform: translate3d(0, 110%, 0); opacity: 0.2; }
        }
      `}</style>
      {drops.map((d) => (
        <div
          key={d.id}
          className="absolute top-0 h-full"
          style={{ left: `${d.left}vw` }}
        >
          <div
            className="bg-white/70"
            style={{
              width: `${d.size}px`,
              height: '18vh',
              borderRadius: '9999px',
              filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.35))',
              animation: `raindropFall ${d.duration}s linear ${d.delay}s infinite`,
            }}
          />
        </div>
      ))}
      {/* Subtle ground ripple overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
    </div>
  );
};

export default Rain;
