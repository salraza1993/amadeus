"use client";
import React, { useState } from 'react';
import VideoOverlay from '../../components/VideoOverlay';
import SectionVideoPosts from './SectionVideoPosts';
import FullSizeVideo from './FullSizeVideo';

function ResourcesVideoSection({ data }) {
  const fullSizeVideo = data?.fullSizeVideo;
  const moreVideos = data?.moreVideos;
  const [videoUrl, setVideoUrl] = useState(null);  
  const [showVideoState, setShowVideoState] = useState(false);
  const showVideo = (url) => { 
    setVideoUrl(url);
    setShowVideoState(true); 
  };
  const hideVideo = (e) => { 
    setVideoUrl(null);
    setShowVideoState(e); 
  };

  return <>
    {fullSizeVideo.videoUrl && <FullSizeVideo data={fullSizeVideo} showVideo={showVideo} />}
    {moreVideos.length > 0 && <SectionVideoPosts data={moreVideos} showVideo={showVideo} />}
    {showVideoState && <VideoOverlay show={showVideoState} videoUrl={videoUrl} hideVideo={hideVideo} />}
  </>;
}

export default ResourcesVideoSection;