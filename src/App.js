import React, { useState, useEffect } from 'react';
import './App.css';
import Countdown from './components/Countdown';
import SurpriseBox from './components/SurpriseBox';
import BearsCouple from './components/BearsCouple';
import TravelMap from './components/TravelMap';
import BucketList from './components/BucketList';
import PhotoGallery from './components/PhotoGallery';

function App() {
  const [confetti, setConfetti] = useState([]);

  const createConfetti = (x, y) => {
    const newConfetti = Array.from({ length: 30 }, (_, i) => ({
      id: Math.random(),
      x,
      y,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
    }));
    setConfetti([...confetti, ...newConfetti]);
    setTimeout(() => setConfetti([]), 3000);
  };

  return (
    <div className="app-container">
      {/* Konfetti */}
      {confetti.map((conf) => (
        <div
          key={conf.id}
          className="confetti"
          style={{
            left: `${conf.left}%`,
            top: 0,
            animation: `confetti-fall ${conf.duration}s linear ${conf.delay}s forwards`,
          }}
        >
          {Math.random() > 0.5 ? '❤️' : '✨'}
        </div>
      ))}

      {/* Hauptinhalt */}
      <div className="content">
        {/* 3D Überschrift */}
        <h1 className="title-3d">Unser Jahrestag</h1>

        {/* Countdown */}
        <Countdown onCountdownFinish={() => createConfetti(window.innerWidth / 2, 0)} />

        {/* Fotosektion */}
        <section className="section photo-section">
          <h2>📸 Unser Lieblingsfoto</h2>
          <PhotoGallery type="main" />
        </section>

        {/* Überraschungsbox */}
        <SurpriseBox onSurprise={() => createConfetti(window.innerWidth / 2, window.innerHeight / 2)} />

        {/* Bärchen */}
        <BearsCouple onLove={() => createConfetti(window.innerWidth / 2, window.innerHeight / 2)} />

        {/* Reisen */}
        <section className="section travel-section">
          <h2>🌍 Unsere Reisen</h2>
          <TravelMap />
        </section>

        {/* Bucketlist */}
        <section className="section bucket-section">
          <h2>✉️ Unsere Bucketlist</h2>
          <BucketList />
        </section>

        {/* Fotogalerie */}
        <section className="section gallery-section">
          <h2>📷 Unsere schönsten Momente</h2>
          <PhotoGallery type="gallery" />
        </section>
      </div>
    </div>
  );
}

export default App;
