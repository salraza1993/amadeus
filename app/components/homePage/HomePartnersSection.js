import React from 'react'
import ImageTag from '../ImageTag'

function HomePartnersSection({ data }) {
  const logos = data?.partnersLogoes?.edges;
  const content = data?.partnerSectionContent;
  return (
    <section className="home-partners-section text-center section-bg-type--white">
      <div className='container'>
        { content && <div className="content-block mb-4" dangerouslySetInnerHTML={{__html: content}} ></div>}
        <div className="partner-logos-wrapper gap-2 d-flex flex-wrap justify-content-center align-items-center">
          {
            logos?.map((item, index) => {
              return <div key={index} className="partner-logo ">
                <ImageTag width={'calc(100px + 5vw)'} src={item.node.sourceUrl} alt={item.node.altText} />
              </div>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default HomePartnersSection;