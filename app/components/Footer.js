import React from 'react';
import Logo from './icons/Logo';
import '@/app/scss/components/Footer.scss';
import Link from 'next/link';
import ContactShortIcon from './ContactShortIcon';
import { graphQLPromise } from '../common/CommonFunctions';

export default async function Footer() {
  
  // const popularLinks = [
  //   { label: "What’s New", path: '' },
  // ];
  // const resources = [
  //   { label: "Download", path: '/resources' },
  //   { label: "FAQ", path: '/resources' },
  //   { label: "Privacy Policy", path: 'https://amadeus.com/en/policies/privacy-policy' },
  // ];
  // const aboutAmadeus = [
  //   { label: "Contact us", path: '/contact' },
  //   { label: "Subscribe to know more", path: '/' },
  // ];

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
          <div className="col-12 col-lg-4 col-xl-4">
            <div className="main-footer-logo"><Logo /></div>
          </div>
          <div className="col-12 col-lg-8 col-xl-8">
            <div className="row">
              <div className="col-12 col-md-3 col-lg-3">
                <div className="main-footer__content">
                  <h6 className="__heading mb-3 fw-bold">{solutionTitle}</h6>
                  <ul className="main-footer__content__links">
                    {
                      solutionMenus.map((item, index) => {
                        return <li className="main-footer__content__links__item" key={item?.id}>
                          <Link href={item?.url}>{item?.label}</Link>
                        </li>;
                      })
                    }
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <div className="main-footer__content">
                  <h6 className="__heading mb-3 fw-bold">{ popularLinksTitle }</h6>
                  <ul className="main-footer__content__links">
                    {
                      popularLinkMenus.map((item, index) => {
                        return <li className="main-footer__content__links__item" key={item?.id}>
                          <Link href={item?.url}>{item?.label}</Link>
                        </li>;
                      })
                    }
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <div className="main-footer__content">
                  <h6 className="__heading mb-3 fw-bold">{resourcesTitle}</h6>
                  <ul className="main-footer__content__links">
                    {
                      resourceMenus.map((item, index) => {
                        return <li className="main-footer__content__links__item" key={item?.id}>
                          <Link href={item?.url}>{item?.label}</Link>
                        </li>;
                      })
                    }
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <div className="main-footer__content">
                  <h6 className="__heading mb-3 fw-bold">{aboutListTitle}</h6>
                  <ul className="main-footer__content__links">
                    {
                      aboutMenus.map((item, index) => {
                        return <li className="main-footer__content__links__item" key={item?.id}>
                          <Link href={item?.url}>{item?.label}</Link>
                        </li>;
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <div className="copyrights__links">
            <p className="m-0">© Copyright 2024 - Amadeus Gulf LLC</p>
          </div>
          <ul className="footer-social">
            <li className="footer-social__item">
              <Link target="_blank" href={"https://www.linkedin.com/company/amadeus/"}>
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
            </li>
            <li className="footer-social__item">
              <Link target="_blank" href={"https://www.facebook.com/AmadeusITGroup/"}>
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
            </li>
            <li className="footer-social__item">
              <Link target="_blank" href="https://twitter.com/AmadeusITGroup">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
            </li>
            <li className="footer-social__item">
              <Link target="_blank" href={"https://www.instagram.com/amadeusitgroup/"}>
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </li>
            <li className="footer-social__item">
              <Link target="_blank" href={"https://www.youtube.com/user/AmadeusITGroup"}>
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </>;
};


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
    "popularLinks",
    `query popularLinks {
      menu(id: "about amadeus", idType: NAME) {
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