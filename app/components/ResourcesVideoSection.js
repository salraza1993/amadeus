"use client";
import React, { useState } from 'react';
import VideoOverlay from './VideoOverlay';
import ImageTag from './ImageTag';

function ResourcesVideoSection() {
  const videoUrl = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm";
  const [showVideoState, setShowVideoState] = useState(false);
  const showVideo = () => { setShowVideoState(true); };
  const hideVideo = (e) => { setShowVideoState(e); };
  return <>
    <section className="video-section">
      <div className="container">
        <h2 className='fs-1 mb-4'>Explore Amadeus Online Suite</h2>
        <div className="video-container" onClick={() => showVideo()} >
          <ImageTag src={"/assets/images/video-thumbnail.png"} />
          <span className="icon">
            <ImageTag src={"/assets/images/video-icon.svg"} />
          </span>
        </div>
      </div>
    </section>
    {showVideoState && <VideoOverlay show={showVideoState} videoUrl={videoUrl} sendDataToParent={hideVideo} />}
  </>;
}

export default ResourcesVideoSection;