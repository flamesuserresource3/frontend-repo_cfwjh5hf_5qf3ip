import React, { useEffect, useMemo, useState } from 'react';
import Flower from './Flower';
import Ground from './Ground';
import Fireflies from './Fireflies';
import Grass from './Grass';
import Background from './Background';

const Garden = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isMobile = width < 640;

  const palette = ['#F472B6', '#60A5FA', '#A78BFA', '#34D399', '#F59E0B', '#F97316', '#22D3EE'];

  // dynamic flowers based on screen size
  const flowers = useMemo(() => {
    const count = isMobile ? 12 : 20; // more flowers overall, but capped on phones
    const arr = [];
    for (let i = 0; i < count; i++) {
      const x = 6 + (i * (88 / (count - 1))) + (Math.random() * 2 - 1); // spread across width
      const h = 190 + Math.random() * 120; // taller range
      const c = palette[i % palette.length];
      const d = 0.12 + i * 0.06;
      const t = (Math.random() * 16 - 8);
      arr.push({ x, h, c, d, t });
    }
    return arr;
  }, [isMobile]);

  const fireflyCount = isMobile ? 10 : 26;
  const grassBlades = isMobile ? 110 : 220; // denser on desktop

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Background />

      {flowers.map((f, idx) => (
        <Flower key={idx} x={f.x} height={f.h} color={f.c} delay={f.d} tilt={f.t} />
      ))}

      <Fireflies count={fireflyCount} />

      <Ground />
      <Grass blades={grassBlades} />
    </div>
  );
};

export default Garden;
