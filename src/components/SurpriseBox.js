import React, { useState } from 'react';
import './SurpriseBox.css';

const SurpriseBox = ({ onSurprise }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [hearts, setHearts] = useState([]);

  const loveQuotes = [
    '"Du bist das Beste, was mir je passiert ist." 💜',
    '"Ich liebe dich mehr mit jedem Tag, der vergeht." 💕',
    '"Mit dir ist jeder Tag ein Abenteuer." 🌟',
    '"Du machst mein Leben perfekt." 😍',
    '"Ich kann mir ein Leben ohne dich nicht vorstellen." 💑',
    '"Du bist mein Traum, der wahr geworden ist." ✨',
    '"Liebe ist nicht das, was man sagt, sondern das, was man tut." 💖',
    '"Mit dir fühle ich mich zuhause." 🏠',
  ];

  const handleBoxClick = () => {
    const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    setMessage(randomQuote);
    setIsOpen(true);

    // Herzen sprühen
    const newHearts = Array.from({ length: 20 }, () => ({
      id: Math.random(),
      left: Math.random() * 100,
      delay: Math.random() * 0.3,
    }));
    setHearts(newHearts);
    onSurprise();

    setTimeout(() => {
      setIsOpen(false);
      setMessage('');
      setHearts([]);
    }, 4000);
  };

  return (
    <section className="surprise-section">
      <h2>🎁 Eine Überraschung für dich</h2>
      <div className="box-container">
        <div className={`gift-box ${isOpen ? 'open' : ''}`} onClick={handleBoxClick}>
          <div className="box-top">🎀</div>
          <div className="box-body">
            <div className="box-face">📦</div>
          </div>
        </div>
        {message && <div className="love-message">{message}</div>}
      </div>

      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-spray"
          style={{
            left: `${heart.left}%`,
            animation: `heart-spray 2s ease-out ${heart.delay}s forwards`,
          }}
        >
          ❤️
        </div>
      ))}
    </section>
  );
};

export default SurpriseBox;
