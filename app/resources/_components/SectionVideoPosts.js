import ImageTag from '@/app/components/ImageTag'

export default function SectionVideoPosts() {
  return <section className="browse-content-section">
    <div className="container">
      <div className="browse-content-container">
        <h2 className='fs-1 mb-4'>Browse through more content</h2>
        <div className="row g-md-4">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="browse-content-card">
              <div className="__image">
                <ImageTag src={"/assets/images/browse-image-1.png"} />
                <div className="icon">
                  <ImageTag width={'30px'} src={"/assets/images/video-icon.svg"} />
                  <small>Tap and Watch</small>
                </div>
              </div>
              <div className="__content">
                <h5>How Make Flight Booking</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="browse-content-card">
              <div className="__image">
                <ImageTag src={"/assets/images/browse-image-2.png"} />
                <div className="icon">
                  <ImageTag width={'30px'} src={"/assets/images/video-icon.svg"} />
                  <small>Tap and Watch</small>
                </div>
              </div>
              <div className="__content">
                <h5>How Make Hotel Booking</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div className="browse-content-card">
              <div className="__image">
                <ImageTag src={"/assets/images/browse-image-3.png"} />
                <div className="icon">
                  <ImageTag width={'30px'} src={"/assets/images/video-icon.svg"} />
                  <small>Tap and Watch</small>
                </div>
              </div>
              <div className="__content">
                <h5>How Consolidator Module works</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
