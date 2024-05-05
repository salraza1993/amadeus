import '@/app/scss/pages/SolutionsPage.scss';
import bannerImage from "/public/assets/images/tailored-made-banner.png";
import HeroBanner from '@/app/components/HeroBanner';
import PageContent from './PageContent';

function page() {
  const heroBannerContent = {
    banner: bannerImage,
    heading: "Amadeus Online Suite Tailor-made Solution",
    description: "Custom-made for your startup or online travel agency."
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