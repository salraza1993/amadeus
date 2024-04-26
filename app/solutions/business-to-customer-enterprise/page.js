import React from 'react'
import '@/app/scss/pages/SolutionsPage.scss';
import bannerImage from "/public/assets/images/b2c-enterprise-banner.png";
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';

function page() {
  const heroBannerContent = {
    banner: bannerImage,
    heading: "Amadeus Online Suite Online Travel Engine",
    description: "Empower your affiliates, drive your business."
  }
  
  return <>
    <HeroBanner image={heroBannerContent.banner} heading={heroBannerContent.heading} description={heroBannerContent.description} />    
    
    <PageContent />
  </>
}

export default page