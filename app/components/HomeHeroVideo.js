"use client"

import { useRef, useState } from "react";

function HomeHeroVideo({ videoUrl = "/assets/video1.mp4" }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const togglePlay = () => {
    // play or pause the video element
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    // update the state
    setIsPlaying(!isPlaying);
  };
  return <section className='hero-video-section'>
    <div className="hero-video-container">
      <video ref={videoRef} autoPlay loop muted>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
    <div className="video-content">
      <div className="container position-relative">
        <div className="text">
          <h2 className="fs-1 heading text-balance m-0">
            <span className="font-amadeus-bold mb-3 d-block">Amadeus.</span>
            It's how travel works smarter, smoother and faster.
          </h2>
        </div>
        <div className="play-icon" onClick={togglePlay}>
          <i className={isPlaying ? "fa-regular fa-circle-pause"  : "fa-solid fa-circle-play"}></i>
        </div>
      </div>
    </div>
  </section>
}

export default HomeHeroVideo;