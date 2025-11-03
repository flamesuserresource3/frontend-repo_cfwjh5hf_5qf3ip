import React from 'react';

const Ground = () => {
  return (
    <div className="absolute inset-x-0 bottom-0 h-40">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-emerald-900/20 to-transparent" />
      <div className="absolute inset-x-0 -top-8 h-16 blur-3xl pointer-events-none" style={{
        background: 'radial-gradient(50% 100% at 50% 0%, rgba(34,197,94,0.5) 0%, rgba(34,197,94,0) 70%)'
      }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.2),rgba(0,0,0,0)_60%)]" />
    </div>
  );
};

export default Ground;
