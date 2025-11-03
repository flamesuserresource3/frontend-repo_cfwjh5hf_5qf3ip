import React, { useMemo } from 'react';

const Background = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const starsCount = isMobile ? 50 : 140;

  const stars = useMemo(
    () =>
      Array.from({ length: starsCount }).map((_, i) => ({
        id: i,
        cx: Math.random() * 100,
        cy: Math.random() * (isMobile ? 55 : 65),
        r: Math.random() * 1.2 + 0.2,
        o: Math.random() * 0.8 + 0.2,
      })),
    [starsCount, isMobile]
  );

  return (
    <div className="absolute inset-0">
      {/* Deep night gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 100% at 50% 100%, #052e2b 0%, #020617 55%, #000 100%)',
        }}
      />

      {/* Aurora waves */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-screen">
        <div
          className="absolute -left-20 -top-10 w-[60%] h-[50%] blur-3xl"
          style={{
            background:
              'conic-gradient(from 120deg at 50% 50%, rgba(34,197,94,0.15), rgba(59,130,246,0.15), rgba(168,85,247,0.15), rgba(34,197,94,0.15))',
          }}
        />
        <div
          className="absolute right-0 top-1/3 w-[55%] h-[45%] blur-3xl"
          style={{
            background:
              'conic-gradient(from 220deg at 50% 50%, rgba(16,185,129,0.12), rgba(244,114,182,0.12), rgba(59,130,246,0.12))',
          }}
        />
      </div>

      {/* Soft vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      {/* Stars */}
      <svg className="absolute inset-0 w-full h-full opacity-60">
        {stars.map((s) => (
          <circle key={s.id} cx={`${s.cx}%`} cy={`${s.cy}%`} r={s.r} fill="white" opacity={s.o} />
        ))}
      </svg>
    </div>
  );
};

export default Background;
