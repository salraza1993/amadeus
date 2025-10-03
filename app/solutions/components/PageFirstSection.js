'use client'
import ImageTag from '@/app/components/ImageTag'
import Link from 'next/link'
import React, { useRef } from 'react'
import { useInView } from 'framer-motion';


function useBlockInView() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const buttonRef = useRef(null);
  const imageInView = useInView(imageRef, { margin: "0px 0px -100px 0px", once: true });
  const contentInView = useInView(contentRef, { margin: "0px 0px -100px 0px", once: true });
  const buttonInView = useInView(buttonRef, { margin: "0px 0px -100px 0px", once: true });

  return { imageRef, imageInView, contentRef, contentInView, buttonRef, buttonInView };
}

function PageFirstSection({ data }) {
  const firstSectionRefs = useBlockInView();
  
  return (
    <section className="sub-page-block sub-page-block-1st">
      <div className="container">
        <div className="sub-page-block-1st__container">
          <div className="b2b-block__content">
            <div 
              style={{
                transform: firstSectionRefs.contentInView ? "none" : "translateY(25%)",
                opacity: firstSectionRefs.contentInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}  
              ref={firstSectionRefs.contentRef}>
              <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
            </div>
            {
              data?.button?.url && 
              <div style={{
                transform: firstSectionRefs.buttonInView ? "none" : "translateY(25%)",
                opacity: firstSectionRefs.buttonInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: ".8s",
              }} 
              ref={firstSectionRefs.buttonRef}>
                <Link href={data?.button?.url} alt={data?.button?.altText} className="btn btn-secondary btn-lg mt-1"> {data?.button?.title}
                </Link>
              </div>
            }
          </div>
          <div 
            style={{
              transform: firstSectionRefs.imageInView ? "none" : "translateY(25%)",
              opacity: firstSectionRefs.imageInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: ".8s",
            }} 
            ref={firstSectionRefs.imageRef}
            className="b2b-block__image">
            <ImageTag
              src={data?.image?.node?.sourceUrl}
              alt={data?.image?.node?.altText} width={'auto'} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageFirstSection;