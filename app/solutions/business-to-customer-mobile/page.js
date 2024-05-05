import '@/app/scss/pages/SolutionsPage.scss';
import bannerImage from "/public/assets/images/b2c-mobile-banner.png";
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';

function page() {
  const heroBannerContent = {
    banner: bannerImage,
    // heading: "Complete travel eco-system at your finger tips",
    heading: "Mobile Applications",
    description: "Go one step further with our omnichannel offering."
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