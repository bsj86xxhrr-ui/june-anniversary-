import React, { useState, useEffect } from 'react';
import './PhotoGallery.css';

const PhotoGallery = ({ type }) => {
  const [photos, setPhotos] = useState([]);
  const storageKey = `photos_${type}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setPhotos(JSON.parse(saved));
    }
  }, [storageKey]);

  const handleImageUpload = (e) => {
    const files = e.target.files;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newPhoto = {
          id: Date.now() + Math.random(),
          src: event.target.result,
        };
        const updatedPhotos = [...photos, newPhoto];
        setPhotos(updatedPhotos);
        localStorage.setItem(storageKey, JSON.stringify(updatedPhotos));
      };
      reader.readAsDataURL(file);
    });
  };

  const deletePhoto = (id) => {
    const updatedPhotos = photos.filter((photo) => photo.id !== id);
    setPhotos(updatedPhotos);
    localStorage.setItem(storageKey, JSON.stringify(updatedPhotos));
  };

  if (type === 'main') {
    return (
      <div className="photo-section-main">
        <label htmlFor={`upload-${type}`} className="photo-upload-box">
          <div className="upload-content">
            <span className="upload-icon">📸</span>
            <span className="upload-text">Klick zum Hochladen</span>
          </div>
          <input
            id={`upload-${type}`}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </label>

        {photos.length > 0 && (
          <div className="main-photo-display">
            <img src={photos[photos.length - 1].src} alt="Main" />
            <button
              className="delete-photo-btn"
              onClick={() => deletePhoto(photos[photos.length - 1].id)}
            >
              ✕ Löschen
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="photo-gallery">
      <label htmlFor={`upload-${type}`} className="photo-upload-box-small">
        <span className="upload-icon-small">+</span>
        <input
          id={`upload-${type}`}
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
      </label>

      <div className="gallery-grid">
        {photos.map((photo) => (
          <div key={photo.id} className="gallery-item">
            <img src={photo.src} alt="Gallery item" />
            <button
              className="delete-photo-btn-small"
              onClick={() => deletePhoto(photo.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
