import React, { useState, useEffect, useRef } from "react";
import "./Daygallery.css";

const DayGallery = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState("right");
  const [isSliding, setIsSliding] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  // Cursor / interaction state
  const [cursorPos, setCursorPos] = useState({ x: -9999, y: -9999 });
  const [isHoveringClose, setIsHoveringClose] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const cursorRef = useRef(null);

  // Toggle play/pause
  const togglePlayPause = () => setIsPlaying((prev) => !prev);

  // Handle manual click on thumbnail
  const handleThumbnailClick = (index, e) => {
    e.stopPropagation();
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? "right" : "left");
    triggerSlide(index);
  };

  // Auto-play logic (interval adjusts with speedMultiplier)
  useEffect(() => {
    let interval;
    const base = 3000; // base interval (ms)
    // speedMultiplier=2 means faster => smaller interval
    const intervalMs = Math.max(150, Math.round(base / Math.max(1, speedMultiplier)));

    if (isPlaying) {
      interval = setInterval(() => {
        setTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          setTransitioning(false);
        }, 400);
      }, intervalMs);
    }
    return () => clearInterval(interval);
  }, [isPlaying, images.length, speedMultiplier]);

  // Core slide logic for manual navigation
  const triggerSlide = (newIndex) => {
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsSliding(false);
    }, 500); // matches CSS duration
  };

  // When hovering the close button, restore native cursor and increase speed
  const onCloseHoverEnter = (e) => {
    e.stopPropagation();
    setIsHoveringClose(true);
    setSpeedMultiplier(2);
    document.body.classList.remove("gallery-hover"); // restore native cursor
  };

  const onCloseHoverLeave = (e) => {
    e.stopPropagation();
    setIsHoveringClose(false);
    setSpeedMultiplier(1);
    document.body.classList.add("gallery-hover");
  };

  return (
    <div
      className="gallery-overlay"
      onClick={(e) => { e.stopPropagation(); togglePlayPause(); }}
      onMouseEnter={() => document.body.classList.add("gallery-hover")}
      onMouseLeave={() => { document.body.classList.remove("gallery-hover"); setCursorPos({ x: -9999, y: -9999 }); }}
      onMouseMove={(e) => {
        // Track mouse and update floating cursor position
        const x = e.clientX + 18; // offset a bit to the right/down from pointer
        const y = e.clientY + 18;
        setCursorPos({ x, y });
      }}
    >
      {/* Close button */}
      <button
        className="close-button"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        onMouseEnter={onCloseHoverEnter}
        onMouseLeave={onCloseHoverLeave}
      >
        <svg viewBox="0 0 24 24">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Main image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className={`gallery-image ${isSliding ? (direction === "right" ? "slide-right" : "slide-left") : ""}`}
        onClick={(e) => { e.stopPropagation(); togglePlayPause(); }}
      />

      {/* Floating cursor (follows pointer). Hidden while hovering close button */}
      {!isHoveringClose && (
        <div
          ref={cursorRef}
          className={`floating-cursor ${isPlaying ? "pause" : "play"}`}
          style={{ left: cursorPos.x, top: cursorPos.y }}
          onClick={(e) => { e.stopPropagation(); togglePlayPause(); }}
          role="button"
          aria-label={isPlaying ? "Pause gallery" : "Play gallery"}
        >
          <span className="floating-text">{isPlaying ? "PAUSE" : "PLAY"}</span>
        </div>
      )}

      {/* Thumbnails */}
      <div className="thumbnail-strip">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${currentIndex === index ? "active" : ""}`}
            onClick={(e) => handleThumbnailClick(index, e)}
          />
        ))}
      </div>
    </div>
  );
};

export default DayGallery;
