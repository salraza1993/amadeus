"use client";
import ImageTag from './ImageTag';
import videoFallbackImage from "/public/assets/images/slider-1.jpg";

function VideoOverlay({ videoUrl, hideVideo }) {
  const hideVideoHandler = () => {
    hideVideo(false);
  }
  return <section className="video-overlay">
    <div className="video-overlay-container">
      <div className="close-button" onClick={() => hideVideoHandler() }>&times;</div>
      <video autoPlay controls>
          <source src={videoUrl} type="video/mp4" alt="Lady With Laptop | Video" />
          <p>Lady With Laptop | Video</p>
          <ImageTag src={videoFallbackImage} title="Your browser does not support the <video> tag" alt={"Lady With Laptop | Video"} />
      </video>
    </div>
  </section>;
}

export default VideoOverlay