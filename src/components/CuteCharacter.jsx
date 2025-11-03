import React from 'react';
import { motion } from 'framer-motion';

// A doodled, cute stick-figure style character holding a heart with arms stretched wide
const CuteCharacter = ({ x = '50%', y = '55%' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="absolute"
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
      aria-label="Cute doodled character holding a heart"
    >
      <svg width="140" height="170" viewBox="0 0 140 170" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Glow */}
        <defs>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Arms stretched wide */}
        <path d="M20 90 C50 70, 90 70, 120 90" stroke="#ffffff" strokeWidth="4" strokeLinecap="round"/>
        {/* Small hands */}
        <circle cx="18" cy="90" r="4" fill="#ffffff"/>
        <circle cx="122" cy="90" r="4" fill="#ffffff"/>

        {/* Body */}
        <line x1="70" y1="60" x2="70" y2="120" stroke="#ffffff" strokeWidth="4" strokeLinecap="round"/>

        {/* Legs */}
        <path d="M70 120 L50 155" stroke="#ffffff" strokeWidth="4" strokeLinecap="round"/>
        <path d="M70 120 L90 155" stroke="#ffffff" strokeWidth="4" strokeLinecap="round"/>

        {/* Head */}
        <circle cx="70" cy="40" r="16" stroke="#ffffff" strokeWidth="4"/>
        {/* Eyes */}
        <circle cx="64" cy="38" r="2" fill="#ffffff"/>
        <circle cx="76" cy="38" r="2" fill="#ffffff"/>
        {/* Smile */}
        <path d="M62 44 Q70 50 78 44" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round"/>

        {/* Heart held near chest */}
        <g filter="url(#softGlow)">
          <path d="M70 72 C70 62, 85 60, 85 72 C85 84, 70 90, 70 98 C70 90, 55 84, 55 72 C55 60, 70 62, 70 72 Z" fill="#ef4444"/>
          <path d="M70 72 C70 62, 85 60, 85 72 C85 84, 70 90, 70 98 C70 90, 55 84, 55 72 C55 60, 70 62, 70 72 Z" stroke="#ffffff" strokeWidth="2" fillOpacity="0"/>
        </g>

        {/* Little motion lines near hands for exuberance */}
        <path d="M10 80 L18 86" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
        <path d="M122 86 L130 80" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </motion.div>
  );
};

export default CuteCharacter;
