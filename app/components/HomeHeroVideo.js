"use client"

import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

function HomeHeroVideo({ videoUrl = "/assets/video.mp4" }) {
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { margin: "0px 0px -100px 0px", once: true });
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
        <div className="text" style={{
          transform: contentInView ? "none" : "translateY(25%)",
          opacity: contentInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
          ref={contentRef}>
          <h2 className="fs-1 font-amadeus-bold heading text-balance m-0">Going Online Made Easy for Travel Businesses.</h2>
          <p>
            Whether you are a single-site travel agency or an ambitious startup, scaling your travel business to multiple markets, Amadeus Online Suite can help you succeed.
          </p>
          <Link href={"/solutions"} className="btn btn-lg btn-secondary">Discover More</Link>
        </div>
        <div className="play-icon" onClick={togglePlay}>
          <i className={isPlaying ? "fa-regular fa-circle-pause"  : "fa-solid fa-circle-play"}></i>
        </div>
      </div>
    </div>
  </section>
}

export default HomeHeroVideo;