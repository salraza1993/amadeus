"use client"

import { useRef, useState } from "react";

function HomeHeroVideo({ videoUrl = "/assets/video.mp4" }) {
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
          <h2 className="fs-1 font-amadeus-bold heading text-balance m-0">Going Online Made Easy for Travel Businesses.</h2>
          <p>
            Whether you are a small single-site travel agency or an ambitious startup, scaling your travel business to multiple markets, Amadeus Online Suite can help you succeed.
          </p>
        </div>
        <div className="play-icon" onClick={togglePlay}>
          <i className={isPlaying ? "fa-regular fa-circle-pause"  : "fa-solid fa-circle-play"}></i>
        </div>
      </div>
    </div>
  </section>
}

export default HomeHeroVideo;