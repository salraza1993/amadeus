import React from 'react'
import ImageTag from '../ImageTag'

function HomeTrustPilotSection() {
  return (
    <section className="home-trustpilot-section text-center section-bg-type--white">
      <div className='container'>
        <ImageTag width={'calc(150px + 5vw)'} src={"/assets/images/trustpilot-stars.png"} alt="Trust Pilot" />
      </div>
    </section>
  )
}

export default HomeTrustPilotSection;