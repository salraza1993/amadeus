"use client";
import React, { useState } from 'react'
import VideoOverlay from './VideoOverlay';

function ResourcesVideoSection() {
  const [showVideo, setShowVideo] = useState(false);
  const showVideoHandler = () => {
    setShowVideo(false);
  }
  return <>
    <section className="video-section">
      <div className="container">
        <h2 className='fs-1 mb-4'>Explore Amadeus Online Suite</h2>
        <div className="video-container">
          <img src="/assets/images/video-thumbnail.png" alt="" />
          <span className="icon" onClick={() => showVideoHandler()}><img src="/assets/images/video-icon.svg" alt="" /></span>
        </div>
      </div>
    </section>
    <VideoOverlay show={showVideo} videoUrl={'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'} />
  </>
}

export default ResourcesVideoSection