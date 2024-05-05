import React from 'react'
import '@/app/scss/pages/SolutionsPage.scss';
import bannerImage from "/public/assets/images/b2c-enterprise-banner.png";
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';

function page() {
  const heroBannerContent = {
    banner: bannerImage,
    heading: "Amadeus Online Suite Online Travel Engine",
    description: "Transform your travel experience with efficiency and reliability using the cutting-edge capabilities of Amadeus Online Suite."
  }
  
  return <>
    <HeroBanner image={heroBannerContent.banner} heading={heroBannerContent.heading} description={heroBannerContent.description} />    
    
    <PageContent />
  </>
}

export default page