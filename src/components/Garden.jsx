import React, { useMemo } from 'react';
import Flower from './Flower';
import Ground from './Ground';
import Fireflies from './Fireflies';
import Grass from './Grass';
import Background from './Background';

const Garden = () => {
  const palette = ['#F472B6', '#60A5FA', '#A78BFA', '#34D399', '#F59E0B', '#F97316', '#22D3EE'];

  const flowers = useMemo(() => ([
    { x: 10, h: 210, c: palette[0], d: 0.15, t: -6 },
    { x: 18, h: 180, c: palette[1], d: 0.22, t: 4 },
    { x: 24, h: 240, c: palette[2], d: 0.3, t: -8 },
    { x: 31, h: 200, c: palette[3], d: 0.4, t: 5 },
    { x: 38, h: 260, c: palette[4], d: 0.5, t: -3 },
    { x: 44, h: 230, c: palette[5], d: 0.6, t: 7 },
    { x: 50, h: 280, c: palette[0], d: 0.7, t: -5 },
    { x: 56, h: 220, c: palette[1], d: 0.8, t: 6 },
    { x: 62, h: 250, c: palette[2], d: 0.9, t: -7 },
    { x: 68, h: 200, c: palette[3], d: 1.0, t: 4 },
    { x: 74, h: 210, c: palette[4], d: 1.1, t: -6 },
    { x: 82, h: 190, c: palette[6], d: 1.2, t: 3 },
  ]), []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Background />

      {/* Staggered flowers with tilt */}
      {flowers.map((f, idx) => (
        <Flower key={idx} x={f.x} height={f.h} color={f.c} delay={f.d} tilt={f.t} />
      ))}

      {/* Ambient particles */}
      <Fireflies count={22} />

      {/* Ground glow and grass */}
      <Ground />
      <Grass blades={160} />
    </div>
  );
};

export default Garden;
