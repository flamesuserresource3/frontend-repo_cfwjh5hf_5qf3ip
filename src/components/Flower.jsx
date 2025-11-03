import React from 'react';
import { motion } from 'framer-motion';

const Flower = ({ x = 50, height = 200, color = '#F472B6', delay = 0, tilt = 0 }) => {
  const stemDuration = 1.8;
  const bloomDelay = delay + stemDuration - 0.2;

  return (
    <motion.div
      className="absolute bottom-12"
      style={{ left: `${x}%`, transform: 'translateX(-50%)' }}
      initial={{ rotate: 0 }}
      animate={{ rotate: [tilt * 0.6, tilt * -0.2, tilt] }}
      transition={{ duration: 6, delay, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Stem */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: stemDuration, delay, ease: [0.22, 1, 0.36, 1] }}
        className="origin-bottom rounded"
        style={{ height, width: 4, background: 'linear-gradient(to top, #064E3B, #10B981)' }}
      />

      {/* Leaves */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: bloomDelay, duration: 0.8 }}
        className="absolute"
        style={{ bottom: height * 0.48, left: -7 }}
      >
        <div
          className="w-3.5 h-2 rounded-full"
          style={{ background: '#10B981', transform: 'rotate(-25deg)' }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: bloomDelay + 0.05, duration: 0.8 }}
        className="absolute"
        style={{ bottom: height * 0.62, left: 6 }}
      >
        <div
          className="w-3.5 h-2 rounded-full"
          style={{ background: '#10B981', transform: 'rotate(20deg)' }}
        />
      </motion.div>

      {/* Bloom */}
      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: bloomDelay + 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute"
        style={{ bottom: height - 6, left: -10, filter: `drop-shadow(0 0 12px ${color})` }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="4" fill={color} />
          <circle cx="14" cy="3" r="3" fill={color} opacity="0.9" />
          <circle cx="25" cy="14" r="3" fill={color} opacity="0.9" />
          <circle cx="14" cy="25" r="3" fill={color} opacity="0.9" />
          <circle cx="3" cy="14" r="3" fill={color} opacity="0.9" />
          <circle cx="21.5" cy="6.5" r="3" fill={color} opacity="0.8" />
          <circle cx="21.5" cy="21.5" r="3" fill={color} opacity="0.8" />
          <circle cx="6.5" cy="21.5" r="3" fill={color} opacity="0.8" />
          <circle cx="6.5" cy="6.5" r="3" fill={color} opacity="0.8" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default Flower;
