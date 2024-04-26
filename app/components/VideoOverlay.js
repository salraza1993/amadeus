"use client";
import { useEffect, useRef, useState } from 'react'

function VideoOverlay({ videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4", sendDataToParent, show }) {
  const hideVideoHandler = () => {
    sendDataToParent(false);
  }
  
  return <section className="video-overlay">
    <div className="video-overlay-container">
      <div className="close-button" onClick={() => hideVideoHandler() }>&times;</div>
      <video controls autoPlay>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  </section>;
}

export default VideoOverlay