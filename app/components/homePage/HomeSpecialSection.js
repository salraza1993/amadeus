import React from 'react'
import ImageTag from '../ImageTag'
import Link from 'next/link';

function HomeSpecialSection({ data }) {
  const fallBackData = {
    content: "<h2 class=\"fs-1 font-amadeus-medium text-balance\">Talk to Our Travel Technology Experts</h2>\n<p>Transform your travel business today with the industry&#8217;s best Travel Technology. Our team is ready to help you build a successful Online Travel Agency platform that drives growth and customer happiness.</p>\n<h5 class=\"font-amadeus-medium text-balance\">What are you waiting for? Your competition isn&#8217;t.</h5>\n",
    button: {
      target: "",
      title: "Get Started",
      url: "/"
    },
    banner: {
      node: {
        altText: "Girl typing on computer",
        sourceUrl: "/assets/images/b2c-image-5th.png"
      }
    }
  }
  const content = data ? data : fallBackData;
  return (
    <div className="home-special-section section-bg-type--secondary">
      <div className='container'>
        <div className="content-block">
          <div className="content">
            <div className="text" dangerouslySetInnerHTML={{ __html: content?.content }}></div>
            {content?.button?.url && <Link
              href={content?.button?.url}
              target={content?.button?.target}
              className='btn btn-lg btn-dark max-width--max-content mt-2'>{content?.button?.title}</Link>}
          </div>
          <div className="image">
            <ImageTag src={content?.banner?.node?.sourceUrl} alt={content?.banner?.node?.altText} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSpecialSection