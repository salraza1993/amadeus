'use client';

import { useRef, useState } from "react";
import ImageTag from '@/app/components/ImageTag';
import videoFallbackImage from "/public/assets/images/slider-1.jpg";

export default function SectionVideo({ videoData }) {
  const videoUrl = videoData?.videoUrl;
  const contentRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);

  return <section className="section-video" style={{ '--block-bg': videoData?.videoBackgroundColor, '--block-color': videoData?.videoTextColor }}>
    <div className="container">
      <div className="video-container">
        <div className="video-wrapper">
          <video ref={videoRef} autoPlay loop muted>
              <source src={videoUrl} type="video/mp4" alt="Lady With Laptop | Video" />
              <p>Lady With Laptop | Video</p>
              {/* <img src={videoFallbackImage} */}
              <ImageTag src={videoFallbackImage} title="Your browser does not support the <video> tag" alt={"Lady With Laptop | Video"} />
          </video>
        </div>
        <div className="video-content">
          <div className="text" dangerouslySetInnerHTML={{ __html: videoData?.videoContent }}></div>
          {videoData?.videoButton?.url && <a
            href={videoData?.videoButton?.url}
            target={videoData?.videoButton?.target}
            className='btn btn-light btn-lg'>{videoData?.videoButton?.title}</a>}
        </div>
      </div>
    </div>
  </section>
};
