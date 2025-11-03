import React from 'react';
import Flower from './Flower';
import Ground from './Ground';
import Fireflies from './Fireflies';

const Garden = () => {
  const palette = ['#F472B6', '#60A5FA', '#A78BFA', '#34D399', '#F59E0B'];
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      {/* Staggered flowers */}
      <Flower x={18} height={190} color={palette[0]} delay={0.2} />
      <Flower x={32} height={230} color={palette[1]} delay={0.35} />
      <Flower x={46} height={260} color={palette[2]} delay={0.5} />
      <Flower x={60} height={210} color={palette[3]} delay={0.65} />
      <Flower x={74} height={200} color={palette[4]} delay={0.8} />

      {/* Ambient particles */}
      <Fireflies />

      {/* Ground and glow */}
      <Ground />
    </div>
  );
};

export default Garden;
