import '@/app/scss/pages/SolutionsPage.scss';
import HeroBanner from '@/app/components/HeroBanner';
import { getPageMetadata } from '@/app/api/getPageMetadata';
import PageFirstSection from '../components/PageFirstSection';
import { GetAdditionalSectionsData, GetFirstSectionData, GetInfographicsSectionsData, GetPageHeroBanner, GetSectionsData } from '@/app/api/getSolutionsSubPagesData';
import { pagesIds } from '@/app/helpers/helpers';
import FooterFeaturedSection from '@/app/components/FooterFeaturedSection';
import { GetFooterFeaturedPageData } from '@/app/api/getFooterFeaturedData';
import SubSections from '../components/SubSections';
import InfographicSection from '../components/InfographicSection';

export const metadata = await getPageMetadata(373);

export default async function page() {
  const pageId = pagesIds.b2CMobilePage;
  const heroBannerContent = await GetPageHeroBanner(pageId);
  const firstSectionData = await GetFirstSectionData(pageId);
  const subSections = await GetSectionsData(pageId);
  const additionalSections = await GetAdditionalSectionsData(pageId);
  const infographicSections = await GetInfographicsSectionsData(pageId);
  const footerFeaturedBlock = await GetFooterFeaturedPageData(pageId);
  
  return <>
    <HeroBanner data={heroBannerContent} />
    {firstSectionData?.content && <PageFirstSection data={firstSectionData} />}
    {
      subSections?.length > 0 && subSections?.map((section, index) => (
        <SubSections key={index} data={section} isEven={index % 2 === 0} />
      ))
    }
    { infographicSections?.title && <InfographicSection data={infographicSections} /> }
    {
      additionalSections?.length > 0 && additionalSections?.map((section, index) => (
        <SubSections key={index} data={section} isEven={index % 2 === 0} />
      ))
    }
    {footerFeaturedBlock?.content && <FooterFeaturedSection data={footerFeaturedBlock} />}
  </>
}