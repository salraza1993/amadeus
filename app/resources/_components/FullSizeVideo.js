import ImageTag from '@/app/components/ImageTag'
import React from 'react'

export default function FullSizeVideo({ data, showVideo }) {
  const thumbnail = data?.thumbnail?.node;
  const videoUrl = data?.videoUrl;
  return <section className="video-section">
    <div className="container">
      <h2 className='fs-1 mb-4'>{ data?.videoTitle}</h2>
      <div className="video-container" onClick={() => showVideo(videoUrl)} >
        <ImageTag src={thumbnail?.sourceUrl || "/assets/images/video-thumbnail.png"} alt={thumbnail?.altText || "Video Thumbnail"} />
        <span className="icon">
          <ImageTag src={"/assets/images/video-icon.svg"} />
        </span>
      </div>
    </div>
  </section>
}
