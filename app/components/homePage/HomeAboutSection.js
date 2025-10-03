import React from 'react'
import ImageTag from '../ImageTag'
import Link from 'next/link'

function HomeAboutSection({ sectionContent }) {
  const { content, featuredImage, homeAboutCTA } = sectionContent;
  return (
    <section className="home-about-section">
        <div className="container">
          <div className="home-about-container">
            <div className="row align-items-center gy-4">
              <div className="col-12 col-lg-6 col-xl-6">
                <div className="content">
                  <div className='d-flex flex-column gap-2'
                    dangerouslySetInnerHTML={{ __html: content }}></div>
                  <Link
                    href={ homeAboutCTA?.ctaButton.url }
                    target={ homeAboutCTA?.ctaButton.target }
                    className='btn btn-primary btn-lg'>
                    {content?.homeAboutCTA?.ctaButton.title}
                  </Link>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-6 d-flex justify-content-end">
                <div className="image">
                  <ImageTag
                    src={ featuredImage?.node?.sourceUrl }
                    alt={ featuredImage?.node?.altText } />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HomeAboutSection