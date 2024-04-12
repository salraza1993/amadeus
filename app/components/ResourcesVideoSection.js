"use client";
import React, { useState } from 'react'
import VideoOverlay from './VideoOverlay';
import ImageTag from './ImageTag';

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
          <ImageTag src={"/assets/images/video-thumbnail.png"} />
          <span className="icon" onClick={() => showVideoHandler()}>
            <ImageTag src={"/assets/images/video-icon.svg"} />
          </span>
        </div>
      </div>
    </section>
    <VideoOverlay show={showVideo} videoUrl={'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'} />
  </>
}

export default ResourcesVideoSection