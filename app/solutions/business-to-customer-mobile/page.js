import '@/app/scss/pages/SolutionsPage.scss';
import bannerImage from "/public/assets/images/b2c-mobile-banner.png";
import HeroBanner from '@/app/components/HeroBanner';
import ImageTag from '@/app/components/ImageTag';

import b2b2ndImage from "/public/assets/images/b2c-image-1st.png"
import b2b3rdImage from "/public/assets/images/b2c-image-2nd.png"
import b2b4thImage from "/public/assets/images/b2c-image-3rd.png"
import b2b5thImage from "/public/assets/images/b2c-image-4th.png"
import b2b6thImage from "/public/assets/images/b2c-image-5th.png"
import b2bModelImage from "/public/assets/images/b2c-model-image.png"
import PageContent from './PageContent';

function page() {
  const heroBannerContent = {
    banner: bannerImage,
    heading: "Complete travel eco-system at your finger tips",
    description: "Empower your affiliates, drive your business."
  }
  
  return <>
    <HeroBanner image={heroBannerContent.banner} heading={heroBannerContent.heading} description={heroBannerContent.description} />    
    <PageContent />
  </>
}

export default page