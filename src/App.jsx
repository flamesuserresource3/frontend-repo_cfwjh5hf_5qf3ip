import React from 'react';
import Garden from './components/Garden';
import Compliment from './components/Compliment';

function App() {
  return (
    <div className="w-screen h-screen bg-black text-white font-inter">
      <div className="relative w-full h-full">
        <Garden />
        <Compliment />
      </div>
    </div>
  );
}

export default App;
