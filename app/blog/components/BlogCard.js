import ImageTag from '@/app/components/ImageTag';
import { DateTime } from 'luxon';
import Link from 'next/link';
import React from 'react'

function BlogCard({ cardData }) {
  const image = cardData?.featuredImage?.node;
  const categories = cardData?.categories?.nodes || [];
  const dateFormat = DateTime.fromISO(cardData?.date).toLocaleString(DateTime.DATE_MED);
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="blog-card">
        <div className="blog-card-image">
          <ImageTag src={image?.sourceUrl || '/assets/images/blog-feature-bg.jpg'} alt={image?.altText || 'Blog Image'} />
        </div>
        <div className="blog-card-content">
          <span className='d-flex flex-wrap gap-2'>
            {
              categories.map((cat, index) => {
                return <span className="badge text-bg-primary" key={index}>{cat.name}{index !== categories.length - 1 ? ', ' : ''}</span>
              })
            }
          </span>
          <h4 className='fs--4 fw--bold font-amadeus-medium post-title'>
            <Link href={`/blog/details?post=${cardData?.postId}`}>
              { cardData?.title }
            </Link>
            </h4>
          <span className="blog-card-date">{dateFormat}</span>
          <Link href={`/blog/details?post=${cardData?.postId}`} className='read-more-arrow'>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;