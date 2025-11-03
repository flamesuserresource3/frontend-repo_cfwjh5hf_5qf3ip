import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCover = () => {
  return (
    <section className="relative w-full h-[42vh] md:h-[60vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Soft gradient fade for legibility (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
      <div className="relative z-10 h-full flex items-end md:items-center">
        <div className="px-4 sm:px-8 pb-4 md:pb-0">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            A Heart Full of Love
          </h1>
          <p className="text-white/80 text-sm sm:text-base md:text-lg mt-2 max-w-xl">
            A dreamy night garden with glowing flowers and a love that fills the sky.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroCover;
