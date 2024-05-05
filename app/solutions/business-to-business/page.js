import React from 'react';
import '@/app/scss/pages/SolutionsPage.scss';
import bannerImage from "/public/assets/images/b2b-banner.png";
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';

function page() {
  const heroBannerContent = {
    banner: bannerImage,
    heading: "Amadeus Online Suite Business to Business",
    description: "Empower your affiliates, and drive your business with confidence.",
  };
  

  return <>
    <HeroBanner image={heroBannerContent.banner} heading={heroBannerContent.heading} description={heroBannerContent.description} />

    <PageContent />
  </>;
}

export default page;