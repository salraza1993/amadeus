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
              metaLinks {
                url
                attributes {
                  attributeKey
                  attributeValue
                }
              }
            }
          }
        }
      }
    }`
  );

  response = response?.data?.pages?.edges[0]?.node?.pageMetadata;

  const generatedLinks = response?.metaLinks?.map(link => ({
    rel: link.attributes.find(attr => attr.attributeKey === 'rel').attributeValue,
    href: link.url,
  })) || [];

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: response?.title,
    description: response?.description,
    links: generatedLinks,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}