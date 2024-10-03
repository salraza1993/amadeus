import '@/app/scss/components/Footer.scss';
import Logo from './icons/Logo';
import ContactShortIcon from './ContactShortIcon';
import { graphQLPromise } from '../common/CommonFunctions';
import FooterLinks from './FooterLinks';
import FooterSocialLinks from './FooterSocialLinks';

export default async function Footer() {
  let socialList = await getSocialLinks();
  socialList = socialList?.data?.socialLinks?.edges;  

  const solutionsMenus = await getSolutionsMenus();
  const solutionTitle = solutionsMenus?.data?.menu?.name;
  const solutionMenus = solutionsMenus?.data?.menu?.menuItems?.nodes;

  const resourcesMenus = await getResourceMenus();
  const resourcesTitle = resourcesMenus?.data?.menu?.name;
  const resourceMenus = resourcesMenus?.data?.menu?.menuItems?.nodes;

  const popularLinksMenus = await getPopularLinksMenus();
  const popularLinksTitle = popularLinksMenus?.data?.menu?.name;
  const popularLinkMenus = popularLinksMenus?.data?.menu?.menuItems?.nodes;

  const aboutListMenus = await getAboutMenus();
  const aboutListTitle = aboutListMenus?.data?.menu?.name;
  const aboutMenus = aboutListMenus?.data?.menu?.menuItems?.nodes;
  

  return <>
    <ContactShortIcon />
    <footer className="main-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-4 col-xl-3">
            <div className="main-footer-logo"><Logo /></div>
          </div>
          <div className="col-12 col-lg-8 col-xl-9">
            <div className="row">
              <div className="col-12 col-md-3 col-lg-4">
                <FooterLinks data={solutionMenus} title={solutionTitle} />
              </div>
              <div className="col-12 col-md-3 col-lg-2">
                <FooterLinks data={popularLinkMenus} title={popularLinksTitle} />
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <FooterLinks data={resourceMenus} title={resourcesTitle} />
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <FooterLinks data={aboutMenus} title={aboutListTitle} />
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <div className="copyrights__links">
            <p className="m-0">© Copyright 2024 - Amadeus Gulf LLC</p>
          </div>
          <FooterSocialLinks links={socialList} />
        </div>
      </div>
    </footer>
  </>;
};

// Social Links
async function getSocialLinks() {
  return await graphQLPromise(
    "social_link",
    `query social_link {
      socialLinks {
        edges {
          node {
            socialLinksInfo {
              iconName
              link
            }
          }
        }
      }
    }`
  );
}

// Solutions Menus fetching
async function getSolutionsMenus() {
  return await graphQLPromise(
    "solutionsMenus",
    `query solutionsMenus {
      menu(id: "solutions", idType: NAME) {
        count
        id
        databaseId
        name
        slug
        menuItems {
          nodes {
            id
            databaseId
            title
            url
            cssClasses
            description
            label
            linkRelationship
            target
            parentId
          }
        }
      }
    }`
  );
}

// Resources Menus fetching
async function getResourceMenus() {
  return await graphQLPromise(
    "resources",
    `query resources {
      menu(id: "resources", idType: NAME) {
        count
        id
        databaseId
        name
        slug
        menuItems {
          nodes {
            id
            databaseId
            title
            url
            cssClasses
            description
            label
            linkRelationship
            target
            parentId
          }
        }
      }
    }`
  );
}

// Popular Links Menus fetching
async function getPopularLinksMenus() {
  return await graphQLPromise(
    "popularLinks",
    `query popularLinks {
      menu(id: "popular links", idType: NAME) {
        count
        id
        databaseId
        name
        slug
        menuItems {
          nodes {
            id
            databaseId
            title
            url
            cssClasses
            description
            label
            linkRelationship
            target
            parentId
          }
        }
      }
    }`
  );
}

// About Menus Menus fetching
async function getAboutMenus() {
  return await graphQLPromise(
    "aboutLinks",
    `query aboutLinks {
      menu(id: "about", idType: NAME) {
        count
        id
        databaseId
        name
        slug
        menuItems {
          nodes {
            id
            databaseId
            title
            url
            cssClasses
            description
            label
            linkRelationship
            target
            parentId
          }
        }
      }
    }`
  );
}