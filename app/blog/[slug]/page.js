import '@/app/scss/pages/BlogPage.scss';
import ImageTag from '@/app/components/ImageTag';
import Link from 'next/link';
import React from 'react'
import FooterFeaturedSection from '@/app/components/FooterFeaturedSection';
import { graphQLPromise } from '@/app/common/CommonFunctions';
import { DateTime } from 'luxon';
import { GetFooterFeaturedPostData } from '@/app/api/getFooterFeaturedData';


export async function generateMetadata({ searchParams }) {
  const postId = searchParams?.post;
  let response = await graphQLPromise(
    "metadata",
    `query metadata {
      posts(where: {id: ${postId}}) {
        nodes {
          pageMetadata {
            title
            description
            metaTags
            meta_links {
              type
              url
            }
          }
        }
      }
    }`
  );

  response = response?.data?.posts?.nodes[0]?.pageMetadata;

  const canonicalLinks = response?.meta_links?.find(link => link.type === 'canonical')?.url;
  const alternateLinks = response?.meta_links?.find(link => link.type === 'alternate')?.url;
  const keywords = response?.metaTags?.split(', ')
  return {
    title: response?.title,
    description: response?.description,
    keywords: keywords,
    alternates: {
      canonical: canonicalLinks,
      languages: { 'en-US': alternateLinks },
    },
  };
}


async function BlogDetailsPage({ searchParams }) {
  const post = await searchParams.post;
  const response = await blogDetails(post);
  const details = response?.data?.posts?.nodes[0];
  const additonalPostContent = details?.additonalPostContent || {};
  const banner = additonalPostContent?.postDetailsBanner?.node;
  const featuredContent = additonalPostContent?.featuredContent || {};
  const dateFormat = DateTime.fromISO(details?.dateGmt).toLocaleString(DateTime.DATE_MED);
  const modifiedDateFormat = DateTime.fromISO(details?.modifiedGmt).toLocaleString(DateTime.DATE_MED);
  const tags = details?.tags?.nodes || [];
  const categories = details?.categories?.nodes || [];
  const filePath = additonalPostContent?.downloadButton?.downlaodFileUrl?.node?.mediaItemUrl;
  const footerFeaturedBlock = await GetFooterFeaturedPostData(post);

  return <>
    <section className='blog-details-page'>
      <div className="container">
        <div className="blog-details-page-content">
          {
            categories && categories.map((cat, index) => {
              return <button key={index} className="btn btn-sm px-2 btn-secondary mb-3">{cat.name}</button>
            })
          }
          <div className="content mb-2">
            <h1 className='fw-bold'>{ details?.title }</h1>
          </div>
          <div className='d-flex flex-wrap align-items-center gap-md-3 gap-2 my-3'>
            {dateFormat && <small>Posted on <strong>{dateFormat}</strong></small>}
            <span>|</span>
            {modifiedDateFormat && <small>Last updated on <strong>{modifiedDateFormat}</strong></small>}
            {
              additonalPostContent?.totalReadTime && 
              <>
                <span>|</span>
                <small><i className="fa-solid fa-clock"></i> &nbsp; <strong>{additonalPostContent?.totalReadTime}</strong></small>
              </>
            }
          </div>
          {
            filePath && <Link style={{ maxWidth: 'max-content' }}
            className="btn btn-primary d-flex gap-4 px-3 btn-lg align-items-center read-download mb-3"
            href={filePath}
            download={additonalPostContent?.downloadButton?.downlaodFileUrl?.node?.mediaItemUrl}
            type={"." + additonalPostContent?.downloadButton?.downlaodFileUrl?.node?.mimeType.split('/')[1]}
            target='self'
            title={additonalPostContent?.downloadButton?.downlaodFileUrl?.node?.mediaItemUrl}
            >{ additonalPostContent?.downloadButton?.buttonLabel } <i className="fa-solid fa-download"></i>
          </Link>}
          <div className="blog-details-page-content-image mb-4">
            <ImageTag src={banner?.sourceUrl} alt={banner?.altText} />
          </div>
          <div className="post-content">
            {
              featuredContent.content && 
              <div className="special-block">
                <div className="special-content" dangerouslySetInnerHTML={{ __html: featuredContent.content }}></div>
                <ImageTag src={featuredContent?.image?.node?.sourceUrl} alt={featuredContent?.image?.node?.altText} />
              </div>
            }
            <div dangerouslySetInnerHTML={{ __html: details?.content }}></div>
          </div>
          <div className="button mt-4">
            <div className='d-flex flex-wrap gap-2'>
              {
                tags && tags.map((tag, index) => {
                  return <button key={index} className="btn btn-sm px-2 btn-dark mb-3">{tag.name}</button>
                })
              }
            </div>
            <hr />
            <Link href={'/blog'} className="btn btn-lg d-flex align-items-center gap-3 max-width--max-content btn-primary px-3">
              <i className="fa-solid fa-arrow-left"></i>
              <span>Back To Blog Page</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
    {
      footerFeaturedBlock?.content && <FooterFeaturedSection data={footerFeaturedBlock} />
    }
  </>
}

export default BlogDetailsPage;

// fetching post data
async function blogDetails(postId) {
  return await graphQLPromise(
    "blogDetails",
    `query blogDetails {
      posts(where: {id: ${postId}}) {
        nodes {
          content
          title
          postId
          categories {
            nodes {
              name
            }
          }
          dateGmt
          modifiedGmt
          tags {
            nodes {
              name
            }
          }
          additonalPostContent {
            totalReadTime
            postDetailsBanner {
              node {
                altText
                sourceUrl
              }
            }
            downloadButton {
              buttonLabel
              downlaodFileUrl {
                node {
                  mediaType
                  mediaItemUrl
                  mimeType
                }
              }
            }
            featuredContent {
              content
              image {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }`
  )
}
