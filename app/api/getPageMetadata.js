import { graphQLPromise } from "../common/CommonFunctions";

export async function getPageMetadata(pageId) {
  let response = await graphQLPromise(
    "metadata",
    `query metadata {
      pages(where: {id: ${pageId}}) {
        edges {
          node {
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
      }
    }`
  );

  response = response?.data?.pages?.edges[0]?.node?.pageMetadata;

  const canonicalLinks = response?.meta_links.find(link => link.type === 'canonical').url;
  const alternateLinks = response?.meta_links.find(link => link.type === 'alternate').url;
  const keywords = response?.metaTags.split(', ')
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