import React, { useState, useEffect } from 'react';
import './BucketList.css';

const BucketList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('bucketList');
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bucketList', JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const completed = items.filter((item) => item.completed).length;
  const total = items.length;

  return (
    <div className="bucket-list">
      <div className="letter-envelope">
        <div className="letter-flap"></div>
        <div className="letter-body">
          <div className="bucket-input-group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addItem()}
              placeholder="Unser Traum hinzufügen..."
              className="bucket-input"
            />
            <button onClick={addItem} className="add-btn">
              ➕ Hinzufügen
            </button>
          </div>

          {total > 0 && (
            <div className="bucket-progress">
              <span>
                {completed}/{total} erreicht
              </span>
              <div className="progress-mini">
                <div className="progress-mini-fill" style={{ width: `${(completed / total) * 100}%` }}></div>
              </div>
            </div>
          )}

          <div className="bucket-items">
            {items.length === 0 ? (
              <p className="empty-message">Träume hinzufügen, die wir zusammen erfüllen möchten! 💭</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className={`bucket-item ${item.completed ? 'completed' : ''}`}>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleItem(item.id)}
                    className="item-checkbox"
                  />
                  <span className="item-text">{item.text}</span>
                  <button onClick={() => deleteItem(item.id)} className="delete-btn">
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BucketList;
