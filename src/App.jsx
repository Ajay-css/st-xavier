import React from 'react'
import LightRays from './components/LightRays';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <Home />
      <div style={{ width: '100%', height: '600px', position: 'absolute', top : 0, zIndex : 0}}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
    </div>
  )
}

export default App