import React from 'react'

function HeroBanner({ image = "assets/images/solution-hero-banner.png", heading = "Heading" }) {
  return <div className='hero-banner-container'>
    <img src={image} alt="" />
    <div className="content">
      <div className="container">
        <h2 className='title-heading fs-1'>{ heading }</h2>
      </div>
    </div>
  </div>;
}

export default HeroBanner