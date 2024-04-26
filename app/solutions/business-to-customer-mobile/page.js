import '@/app/scss/pages/SolutionsPage.scss';
import bannerImage from "/public/assets/images/b2c-mobile-banner.png";
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';

function page() {
  const heroBannerContent = {
    banner: bannerImage,
    heading: "Complete travel eco-system at your finger tips",
    description: "Empower your affiliates, drive your business."
  }
  
  return <>
    <HeroBanner
      image={heroBannerContent.banner}
      heading={heroBannerContent.heading}
      description={heroBannerContent.description} />    
    
    <PageContent />
  </>
}

export default page