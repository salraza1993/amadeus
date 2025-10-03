import Link from 'next/link'
import React from 'react'
import ImageTag from './ImageTag'

function FooterFeaturedSection({ data }) {
  const fallBackData = {
    content: "<h2 class=\"fs-1\">Don't get left behind. Try Online Suite today!</h2>\n",
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

  return <section className='sub-page-last-block'>
      <div className="b2b-block__content">
        <div className="text" dangerouslySetInnerHTML={{ __html: content?.content }}></div>
        {content?.button?.url && <Link
          href={content?.button?.url}
          target={content?.button?.target}
          className='btn btn-light btn-lg'>{content?.button?.title}</Link>}
      </div>
      <div className="b2b-block__image">
        <ImageTag
          src={content?.banner?.node?.sourceUrl}
          alt={content?.banner?.node?.altText} />
      </div>
    </section>
}

export default FooterFeaturedSection