import React, { useState, useCallback } from 'react';
import HeroCover from './components/HeroCover';
import Garden from './components/Garden';
import Compliment from './components/Compliment';
import Rain from './components/Rain';

function App() {
  const [isRaining, setIsRaining] = useState(false);

  const handleComplimentComplete = useCallback(() => {
    // Start rain after the compliment fully appears
    setIsRaining(true);
  }, []);

  return (
    <div className="w-screen h-screen bg-black text-white font-inter">
      <div className="relative w-full h-full flex flex-col">
        {/* Hero Cover with Spline 3D scene */}
        <HeroCover />

        {/* Garden fills the remainder of the screen */}
        <div className="relative flex-1">
          <Garden />
          <Compliment onComplete={handleComplimentComplete} />
          <Rain active={isRaining} />
        </div>
      </div>
    </div>
  );
}

export default App;
