'use client'
import ImageTag from '@/app/components/ImageTag'
import { useInView } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react'

function useBlockInView() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);
  const imageInView = useInView(imageRef, { margin: "0px 0px -100px 0px", once: true });
  const contentInView = useInView(contentRef, { margin: "0px 0px -100px 0px", once: true });
  const buttonInView = useInView(buttonRef, { margin: "0px 0px -100px 0px", once: true });

  return { imageRef, imageInView, contentRef, contentInView, buttonRef, buttonInView };
}
function SubSections({ data, isEven }) {
  const subSectionRefs = useBlockInView();
  return (
    <section className={`sub-section-block ${isEven ? 'even' : 'odd'}`}
      style={{ '--block-bg': data?.backgroundColor, '--block-color': data?.textColor }}>
      <div className="container">
        <div className="sub-section-block__content-wrapper">
          <div className={`g-4 ${isEven ? '' : 'flex-row-reverse'} row`}>
            <div className="col-12 col-lg-7 pe-lg-0 d-flex justify-content-center">
              <div className="b2b-block__image" ref={subSectionRefs.imageRef} style={{
                transform: subSectionRefs.imageInView ? "none" : "translateY(25%)",
                opacity: subSectionRefs.imageInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: ".8s",
              }}>
                <ImageTag
                  src={data?.image?.node?.sourceUrl}
                  alt={data?.image?.node?.altText} />
              </div>
            </div>
            <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
              <div className={`sub-section-block__content ${isEven ? 'even' : 'odd'}`} ref={subSectionRefs.contentRef}
                style={{
                  transform: subSectionRefs.contentInView ? "none" : "translateY(25%)",
                  opacity: subSectionRefs.contentInView ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <div className="text" dangerouslySetInnerHTML={{ __html: data?.content }}></div>
                {
                  data?.button?.url && 
                  <div>
                    <Link href={data?.button?.url} alt={data?.button?.altText} className="btn btn-secondary btn-lg mt-1"> {data?.button?.title}
                    </Link>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubSections