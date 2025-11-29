import ImageTag from '@/app/components/ImageTag'

export default function SectionVideoPosts({ data, showVideo }) {
  const sectionTitle = data?.sectionTitle;
  const moreVideos = data?.videosPosts;
  return <section className="browse-content-section">
    <div className="container">
      <div className="browse-content-container">
        <h2 className='fs-1 mb-4'>{sectionTitle}</h2>
        <div className="row g-md-4">
          {
            moreVideos && moreVideos.map((video, index) => {
              const thumbnail = video?.thumbnail?.node;
              const videoUrl = video?.videoUrl;
              return <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="browse-content-card" onClick={() => showVideo(videoUrl)}>
                  <div className="__image">
                    <ImageTag src={thumbnail?.sourceUrl} alt={thumbnail?.altText || "Video Thumbnail"} />
                    <div className="icon">
                      <ImageTag width={'30px'} src={"/assets/images/video-icon.svg"} />
                      <small>Tap and Watch</small>
                    </div>
                  </div>
                  <div className="__content">
                    <h5>{video?.title}</h5>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  </section>
}
