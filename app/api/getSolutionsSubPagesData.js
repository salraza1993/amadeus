import { graphQLPromise } from "../common/CommonFunctions";

// First Section Data
export async function FetchFirstSectionData(pageId) {
  return await graphQLPromise(
    "subPageFirstSection",
    `query subPageFirstSection {
      pages(where: {id: ${pageId}}) {
        nodes {
          solutionSubPages {
            firstSection {
              content
              button {
                target
                title
                url
              }
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
  );
}
export async function GetFirstSectionData(pageId) {
  const response = await FetchFirstSectionData(pageId);
  const data = response?.data?.pages?.nodes[0]?.solutionSubPages?.firstSection;
  return data;
}

// Sections Data
export async function FetchSectionsData(pageId) {
  return await graphQLPromise(
    "subPageSections",
    `query subPageSections {
      pages(where: {id: ${pageId}}) {
        nodes {
          solutionSubPages {
            additionalSections {
              backgroundColor
              content
              textColor
              button {
                target
                title
                url
              }
              image {
                node {
                  altText
                  sourceUrl
                }
              }
            }
            pageSections {
              content
              backgroundColor
              textColor
              button {
                target
                title
                url
              }
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
  );
}
export async function GetSectionsData(pageId) {
  const response = await FetchSectionsData(pageId);
  const data = response?.data?.pages?.nodes[0]?.solutionSubPages?.pageSections;
  return data;
}

// Addtional sections
export async function FetchAdditionalSectionsData(pageId) {
  return await graphQLPromise(
    "subPageSections",
    `query subPageSections {
      pages(where: {id: ${pageId}}) {
        nodes {
          solutionSubPages {
            additionalSections {
              backgroundColor
              content
              textColor
              button {
                target
                title
                url
              }
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
  );
}
export async function GetAdditionalSectionsData(pageId) {
  const response = await FetchAdditionalSectionsData(pageId);
  const data = response?.data?.pages?.nodes[0]?.solutionSubPages?.additionalSections;
  return data;
}

// Infographics sections
export async function FetchInfographicsSectionsData(pageId) {
  return await graphQLPromise(
    "subPageSections",
    `query subPageSections {
      pages(where: {id: ${pageId}}) {
        nodes {
          solutionSubPages {
            infographic {
              title
              image {
                node {
                  altText
                  sourceUrl
                }
              }
              infoList {
                content
                icon {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    }`
  );
}
export async function GetInfographicsSectionsData(pageId) {
  const response = await FetchInfographicsSectionsData(pageId);
  const data = response?.data?.pages?.nodes[0]?.solutionSubPages?.infographic;
  return data;
}