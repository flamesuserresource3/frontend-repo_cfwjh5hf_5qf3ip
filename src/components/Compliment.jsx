import React from 'react';
import { motion } from 'framer-motion';

const Compliment = ({ name = 'somaiya', delay = 2.4 }) => {
  const lines = [
    `${name} you feel like soft morning sun to me`,
    'with you the world slows and my chest feels light',
    'i want to hold your hand and stay right here',
  ];

  return (
    <div className="absolute inset-x-0 top-16 md:top-20 flex flex-col items-center gap-2 text-center px-4">
      {lines.map((text, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + i * 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/95 text-2xl md:text-4xl font-medium tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]"
          style={{ textTransform: 'none', textShadow: '0 0 12px rgba(255, 255, 255, 0.25)' }}
        >
          {text}
        </motion.p>
      ))}
    </div>
  );
};

export default Compliment;
