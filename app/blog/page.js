import '@/app/scss/pages/BlogPage.scss';
import React from 'react'
import HeroBanner from '../components/HeroBanner'
import { graphQLPromise } from '../common/CommonFunctions';
import BlogFeaturedSection from './components/BlogFeaturedSection';
import { getPageMetadata } from '../api/getPageMetadata';
import BlogCardListing from './components/BlogCardListing';
import FooterFeaturedSection from '../components/FooterFeaturedSection';
import { GetFooterFeaturedPageData } from '../api/getFooterFeaturedData';

export const metadata = await getPageMetadata(878);

async function BlogPage() {
  const pageId = 878;
  let pageData = await getPageData();
  const topBannerData = pageData.data?.pages?.edges[0]?.node;
  const blogLists = await getPosts();
  const featuredBlogPosts = await featuredPosts();
  const footerFeaturedBlock = await GetFooterFeaturedPageData(pageId);

  return (
    <>
      <HeroBanner data={topBannerData} />
      <BlogFeaturedSection data={featuredBlogPosts.data.posts.nodes} />
      <BlogCardListing data={blogLists?.data?.posts} />
      {
        footerFeaturedBlock?.content && <FooterFeaturedSection data={footerFeaturedBlock} />
      }
    </>
  )
}

export default BlogPage;

// Fetching Counter
async function getPageData() {
  return await graphQLPromise(
    "topBanner",
    `query topBanner {
      pages(where: {id: 878}) {
        edges {
          node {
            content
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }`
  );
}

// fetching blog posts
async function getPosts() {
  return await graphQLPromise(
    "blogPosts",
    `query blogPosts {
      posts {
        nodes {
          title
          date
          excerpt
          id
          postId
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }`
  )
}
// fetching featured blog posts
async function featuredPosts() {
  return await graphQLPromise(
    "featuredBlogPosts",
    `query featuredBlogPosts {
      posts(where: {categoryName: "Featured", orderby: {field: DATE, order: DESC}}) {
        nodes {
          date
          title
          postId
          excerpt
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          additonalPostContent {
            downloadButton {
              buttonLabel
              downlaodFileUrl {
                node {
                  mediaItemUrl
                  title
                  mediaType
                  mimeType
                }
              }
            }
          }
        }
      }
    }`
  )
}

