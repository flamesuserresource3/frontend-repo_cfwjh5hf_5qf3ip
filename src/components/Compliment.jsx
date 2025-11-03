import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Compliment = ({ delay = 2.2, onComplete }) => {
  const lines = [
    'Somaiya, words cant describe how beautiful you are, i wanna hug you and never let go.',
    'i want to kiss you till our lips are swollen, i want us to grow old together.',
    'i want us to succeed. i love you so much kuchu puchu. mwahhhh',
  ];

  useEffect(() => {
    // Trigger onComplete after final line finishes animating
    if (!onComplete) return;
    const totalDelay = delay + (lines.length - 1) * 0.7; // start time of last line
    const finalDuration = 0.9; // duration of each line
    const timeout = setTimeout(() => {
      try { onComplete(); } catch {}
    }, (totalDelay + finalDuration) * 1000);
    return () => clearTimeout(timeout);
  }, [delay, onComplete]);

  return (
    <div className="absolute inset-x-0 top-4 md:top-6 flex flex-col items-center gap-2 text-center px-4">
      {lines.map((text, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + i * 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/95 text-[18px] sm:text-xl md:text-3xl font-medium tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.35)]"
          style={{ textTransform: 'none', textShadow: '0 0 12px rgba(255, 255, 255, 0.25)' }}
        >
          {text}
        </motion.p>
      ))}
    </div>
  );
};

export default Compliment;
