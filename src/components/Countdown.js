import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = ({ onCountdownFinish }) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date('2026-06-01T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setFinished(true);
        onCountdownFinish();
        clearInterval(interval);
      } else {
        setTime({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [onCountdownFinish]);

  if (finished) {
    return (
      <div className="countdown celebration">
        <h3>🎉 Es ist soweit! 🎉</h3>
      </div>
    );
  }

  return (
    <div className="countdown">
      <div className="countdown-item">
        <div className="countdown-number">{time.days}</div>
        <div className="countdown-label">Tage</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{time.hours}</div>
        <div className="countdown-label">Stunden</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{time.minutes}</div>
        <div className="countdown-label">Minuten</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-number">{time.seconds}</div>
        <div className="countdown-label">Sekunden</div>
      </div>
    </div>
  );
};

export default Countdown;
