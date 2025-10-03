import { graphQLPromise } from "../common/CommonFunctions";

// fetching post data
export async function PostFooterFeaturedBlock(postId) {
  return await graphQLPromise(
    "poseFooterFeatured",
    `query poseFooterFeatured {
      posts(where: {id: ${postId}}) {
        nodes {
          footerFeaturedBlock {
            button {
              target
              title
              url
            }
            content
            banner {
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

export async function GetFooterFeaturedPostData(pageId) {
  const response = await PostFooterFeaturedBlock(pageId);
  const data = response?.data?.posts?.nodes[0]?.footerFeaturedBlock;
  return data;
}

export async function PageFooterFeaturedBlock(postId) {
  return await graphQLPromise(
    "featuredPageFooter",
    `query featuredPageFooter {
      pages(where: {id: ${postId}}) {
        nodes {
          footerFeaturedBlock {
            button {
              target
              title
              url
            }
            content
            banner {
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

export async function GetFooterFeaturedPageData(pageId) {
  const response = await PageFooterFeaturedBlock(pageId);
  const data = response?.data?.pages?.nodes[0]?.footerFeaturedBlock;
  return data;
}