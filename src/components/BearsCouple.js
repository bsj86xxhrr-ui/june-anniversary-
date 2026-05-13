import React, { useState } from 'react';
import './BearsCouple.css';

const BearsCouple = ({ onLove }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hearts, setHearts] = useState([]);

  const handleBearsClick = () => {
    setIsAnimating(true);

    const newHearts = Array.from({ length: 15 }, () => ({
      id: Math.random(),
      left: 50 + (Math.random() - 0.5) * 100,
    }));
    setHearts(newHearts);
    onLove();

    setTimeout(() => {
      setIsAnimating(false);
      setHearts([]);
    }, 2000);
  };

  return (
    <section className="bears-section" onClick={handleBearsClick}>
      <h2>👫 Wir zusammen</h2>
      <div className={`bears-container ${isAnimating ? 'loving' : ''}`}>
        <div className="bear white-bear">🐻</div>
        <div className="holding-hands">👫</div>
        <div className="bear brown-bear">🐻‍❄️</div>
      </div>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animation: 'float-up 1.5s ease-out forwards',
          }}
        >
          💜
        </div>
      ))}
      <p className="bears-text">Klicke auf uns! 💜</p>
    </section>
  );
};

export default BearsCouple;
