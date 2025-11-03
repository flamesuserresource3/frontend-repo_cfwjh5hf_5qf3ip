import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const randomBetween = (min, max) => Math.random() * (max - min) + min;

const Grass = ({ blades = 160 }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const bladeCount = isMobile ? Math.floor(blades * 0.55) : blades; // reduce density on phones

  const data = useMemo(
    () =>
      Array.from({ length: bladeCount }).map((_, i) => ({
        id: i,
        left: randomBetween(0, 100),
        height: randomBetween(28, 68), // taller blades overall
        tilt: randomBetween(-12, 12),
        delay: randomBetween(0, 2),
        duration: randomBetween(2.5, 5.2),
        hue: randomBetween(140, 165),
      })),
    [bladeCount]
  );

  return (
    <div className="absolute inset-x-0 bottom-8 md:bottom-10 h-44 md:h-48 overflow-visible">
      {data.map((b) => (
        <motion.div
          key={b.id}
          initial={{ rotate: b.tilt * 0.6 }}
          animate={{ rotate: [b.tilt, b.tilt * -0.6, b.tilt] }}
          transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute origin-bottom"
          style={{ left: `${b.left}%`, bottom: 0 }}
        >
          <div
            className="rounded-t-full"
            style={{
              width: 2,
              height: b.height,
              background: `linear-gradient(to top, hsl(${b.hue} 50% 14%), hsl(${b.hue} 70% 35%))`,
              boxShadow: `0 0 6px hsl(${b.hue} 90% 45% / 0.25)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Grass;
