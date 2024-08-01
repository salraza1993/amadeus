"use client";
import ImageTag from './ImageTag';

function VideoOverlay({ videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4", sendDataToParent, show }) {
  const hideVideoHandler = () => {
    sendDataToParent(false);
  }
  
  return <section className="video-overlay">
    <div className="video-overlay-container">
      <div className="close-button" onClick={() => hideVideoHandler() }>&times;</div>
      <video controls autoplay>
        <source src={video1} type="video1/mp4" />
        <ImageTag
          src={"/assets/video-fallback.png"}
          title="Your browser does not support the <video> tag"
          alt={"Video Fallback Banner"} />
      </video>
    </div>
  </section>;
}

export default VideoOverlay