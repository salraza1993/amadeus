import ImageTag from "@/app/components/ImageTag";
import FaqsAccordion from "./FaqsAccordion";

export default function SectionFaqs({ data }) {
  const faqsData = data?.rFaqs;
  const faqsSideImage = data?.rFaqsSideImage;
  return <section className="faqs-section">
    <div className="container">
      <div className="faqs-container">
        <div className="row">
          <div className="col-12 col-lg-7">
            <FaqsAccordion data={faqsData} />
          </div>
          <div className="col-12 col-lg-5">
            <div className="image">
              <ImageTag src={faqsSideImage?.node?.sourceUrl} alt={faqsSideImage?.node?.altText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
