import React from 'react'
import ImageTag from './ImageTag';

function HeroBanner({ image = "assets/images/solution-hero-banner.png", heading = "Heading" }) {
  return <div className='hero-banner-container'>
    {/* <Image src={image} fill={true} alt="" /> */}
    <ImageTag src={image} />
    <div className="content">
      <div className="container">
        <h2 className='title-heading fs-1'>{ heading }</h2>
      </div>
    </div>
  </div>;
}

export default HeroBanner