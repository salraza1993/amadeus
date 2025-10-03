import ImageTag from '@/app/components/ImageTag'
import { DateTime } from 'luxon';
import Link from 'next/link';
import React from 'react'

function BlogFeaturedSection({data}) {
  const featuredPosts = data || [];
  const latestPost = featuredPosts[0] || {};
  const image = latestPost?.featuredImage?.node;
  const downloadReport = latestPost?.additonalPostContent?.downloadButton;
  const categories = latestPost?.categories?.nodes || [];
  const dateFormat = DateTime.fromISO(latestPost?.date).toLocaleString(DateTime.DATE_MED);
  const filePath = downloadReport?.downlaodFileUrl?.node?.mediaItemUrl;

  return <section className="featured-section pb-0">
    <div className="container">
      <h2 className="font-amadeus-bold featured-section-title text-primary">
        <span className="icon"><ImageTag src={'/assets/images/coffe-icon.png'} alt={'Coffee Icon'} /></span>
        <span>Featured Articles</span>
      </h2>
      <div className="featured-articles">
        <div className="featured-article-image">
          <ImageTag src={image?.sourceUrl} alt={image?.altText} />
        </div>
        <div className="featured-article-content">
          <h1 className="font-amadeus-bold article-title">
            <Link href={`/blog/details?post=${latestPost?.postId}`}>{latestPost?.title}</Link>
          </h1>
          <p>
            As the world continues to evolve, so do the ways we travel. In 2025, new trends will reshape the travel industry, from personalized in-flight entertainment and nostalgic vacations to the rise of unique hotels and Asia's travel renewal.
          </p>
          {filePath && <Link
            className="btn btn-primary d-flex gap-4 px-3 btn-lg align-items-center read-download mb-3"
            href={filePath}
            download={downloadReport?.downlaodFileUrl?.node?.title}
            type={"." + downloadReport?.downlaodFileUrl?.node?.mimeType.split('/')[1]}
            target='self'
            title={downloadReport?.downlaodFileUrl?.node?.title}
            >{downloadReport?.buttonLabel} <i className="fa-solid fa-download"></i>
          </Link>}
          <p>{dateFormat}</p>
          <Link href={`/blog/details?post=${latestPost?.postId}`} className='read-more-arrow'>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  </section>
}

export default BlogFeaturedSection