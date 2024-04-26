import React from 'react';
import '@/app/scss/pages/SolutionsPage.scss';
import bannerImage from "/public/assets/images/b2b-banner.png";
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';

function page() {
  const heroBannerContent = {
    banner: bannerImage,
    heading: "Amadeus Online Suite Business to Business",
  };
  

  return <>
    <HeroBanner image={heroBannerContent.banner} heading={heroBannerContent.heading} />

    <PageContent />
  </>;
}

export default page;