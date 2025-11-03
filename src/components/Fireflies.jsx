import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const randomBetween = (min, max) => Math.random() * (max - min) + min;

const Fireflies = ({ count = 16 }) => {
  const flies = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: randomBetween(5, 95),
        top: randomBetween(10, 70),
        size: randomBetween(3, 6),
        duration: randomBetween(4, 8),
        delay: randomBetween(0, 3),
        hue: Math.random() > 0.5 ? 160 : 300,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      {flies.map((f) => (
        <motion.div
          key={f.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 1, 0.2],
            x: [0, randomBetween(-15, 15), 0],
            y: [0, randomBetween(-10, 10), 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: f.size,
            height: f.size,
            backgroundColor: `hsl(${f.hue} 100% 70%)`,
            filter: `drop-shadow(0 0 6px hsl(${f.hue} 100% 70%)) drop-shadow(0 0 14px hsl(${f.hue} 100% 70%))`,
          }}
        />
      ))}
    </div>
  );
};

export default Fireflies;
