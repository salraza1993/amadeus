"use client";
import React, { useEffect, useState } from 'react'

function VideoOverlay({ videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4", show = false }) {
  const [showVideoState, setShowVideoState] = useState(show);
  const hideVideoHandler = () => {
    setShowVideoState(false)
  }
  useEffect(() => {
    console.log(show);
  }, [showVideoState])
  return showVideoState && <section className="video-overlay">
    <div className="video-overlay-container">
      <div className="close-button" onClick={() => hideVideoHandler() }>&times;</div>
      <video controls >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  </section>;
}

export default VideoOverlay