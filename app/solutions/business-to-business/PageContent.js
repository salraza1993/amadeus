"use client";
import { useRef } from 'react';
import { useInView } from "framer-motion";
import ImageTag from '@/app/components/ImageTag';
import Link from 'next/link';

function useBlockInView() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const imageInView = useInView(imageRef, { margin: "0px 0px -100px 0px", once: true });
  const contentInView = useInView(contentRef, { margin: "0px 0px -100px 0px", once: true });

  return { imageRef, imageInView, contentRef, contentInView };
}

function PageContent({data}) {
  const block1st = useBlockInView();
  const block2nd = useBlockInView();
  const block3rd = useBlockInView();
  const block4th = useBlockInView();
  const block5th = useBlockInView();
  const block6th = useBlockInView();
  
  const sec_1st_data = data?.b2b1stSections;
  const sec_2nd_data = data?.b2b2ndSections;
  const sec_3rd_data = data?.b2b3rdSections;
  const sec_4th_data = data?.b2b4thSections;
  const sec_5th_data = data?.b2b5thSections;
  const sec_6th_data = data?.b2b6thSections;
  
  // Benefit Lists
  const benefitLists = sec_5th_data?.b2bSec5thList;

  return <>
    <section className="sub-page-block sub-page-block-1st">
      <div className="container">
        <div className="sub-page-block-1st__container">
          <div
            className="b2b-block__content"
            style={{
              transform: block1st.contentInView ? "none" : "translateY(25%)",
              opacity: block1st.contentInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}  
            ref={block1st.contentRef}>
            <div dangerouslySetInnerHTML={{ __html: sec_1st_data?.b2bSec1stContent }}></div>
            <Link
              href={sec_1st_data?.b2bSec1stButton?.url}
              alt={sec_1st_data?.b2bSec1stButton?.altText}
              className="btn btn-secondary btn-lg mt-1">
              {sec_1st_data?.b2bSec1stButton?.title}
            </Link>
          </div>
          <div
            style={{
              transform: block1st.imageInView ? "none" : "translateY(25%)",
              opacity: block1st.imageInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: ".8s",
            }} 
            className="b2b-block__image"
            ref={block1st.imageRef}>
            <ImageTag
              src={sec_1st_data?.b2bSec1stImage?.node?.sourceUrl}
              alt={sec_1st_data?.b2bSec1stImage?.node?.altText} width={'auto'} />
          </div>
        </div>
      </div>
    </section>

    <section className='sub-page-block sub-page-block-2nd dark-bg'>
      <div className="container">
        <div className="sub-page-block-2nd__container">
          <div className="row g-4">
            <div className="col-12 col-lg-7 pe-lg-0 d-flex justify-content-center">
              <div className="b2b-block__image" ref={block2nd.imageRef} style={{
                transform: block2nd.imageInView ? "none" : "translateY(25%)",
                opacity: block2nd.imageInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: ".8s",
              }}>
                <ImageTag
                  src={sec_2nd_data?.b2bSec2ndImage?.node?.sourceUrl}
                  alt={sec_2nd_data?.b2bSec2ndImage?.node?.altText} />
              </div>
            </div>
            <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
              <div className="b2b-block__content"
                ref={block2nd.contentRef}
                style={{
                  transform: block2nd.contentInView ? "none" : "translateY(25%)",
                  opacity: block2nd.contentInView ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }} >
                <div className="text" dangerouslySetInnerHTML={{ __html: sec_2nd_data?.b2bSec2ndContent }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='sub-page-block sub-page-block-3rd'>
      <div className="container">
        <div className="sub-page-block-3rd__container">
          <div className="row g-4">
            <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
              <div className="b2b-block__content" ref={block3rd.contentRef}
                style={{
                  transform: block3rd.contentInView ? "none" : "translateY(25%)",
                  opacity: block3rd.contentInView ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <div className="text" dangerouslySetInnerHTML={{ __html: sec_3rd_data?.b2bSec3rdContent }}></div>
              </div>
            </div>
            <div className="col-12 col-lg-7 ps-lg-0 d-flex justify-content-center">
              <div className="b2b-block__image" ref={block3rd.imageRef} style={{
                transform: block3rd.imageInView ? "none" : "translateY(25%)",
                opacity: block3rd.imageInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: ".8s",
              }}>
                <ImageTag
                  src={sec_3rd_data?.b2bSec3rdImage?.node?.sourceUrl}
                  alt={sec_3rd_data?.b2bSec3rdImage?.node?.altText} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='sub-page-block sub-page-block-4th dark-bg'>
      <div className="container">
        <div className="sub-page-block-4th__container">
          <div className="row g-4">
            <div className="col-12 col-lg-7 pe-lg-0 d-flex justify-content-center">
              <div className="b2b-block__image" ref={block4th.imageRef} style={{
                transform: block4th.imageInView ? "none" : "translateY(25%)",
                opacity: block4th.imageInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: ".8s",
              }}>
                <ImageTag
                  src={sec_4th_data?.b2bSec4thImage?.node?.sourceUrl}
                  alt={sec_4th_data?.b2bSec4thImage?.node?.altText} />
              </div>
            </div>
            <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center">
              <div className="b2b-block__content" ref={block4th.contentRef}
                style={{
                  transform: block4th.contentInView ? "none" : "translateY(25%)",
                  opacity: block4th.contentInView ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <div className="text" dangerouslySetInnerHTML={{ __html: sec_4th_data?.b2bSec4thContent }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='sub-page-block sub-page-block-5th'>
      <div className="container">
        <div className="sub-page-block-5th__container">
          <h1 className='block-title mb-5'>
            Benefit today with
            <strong className='text-secondary'> Amadeus Online Suite</strong>
          </h1>
          
          <div className="row g-4">
            <div className="col-12 col-lg-5 d-flex justify-content-center">
              <div className="b2b-block__image" ref={block5th.imageRef} style={{
                transform: block5th.imageInView ? "none" : "translateY(25%)",
                opacity: block5th.imageInView ? 1 : 0,
                transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: ".8s",
              }}>
                <ImageTag
                  src={sec_5th_data?.b2bSec4thImage?.node?.sourceUrl}
                  alt={sec_5th_data?.b2bSec4thImage?.node?.altText} />
              </div>
            </div>
            <div className="col-12 col-lg-7 d-flex justify-content-center align-items-center">
              <div className="b2b-block__content" ref={block5th.contentRef}
                style={{
                  transform: block5th.contentInView ? "none" : "translateY(25%)",
                  opacity: block5th.contentInView ? 1 : 0,
                  transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                <ul className="content-list">
                  {
                    benefitLists.map((item, index) => {
                      return <li className="content-list__item" key={index}>
                        <span className="icon">
                          <ImageTag src={item?.b2bSec5thListIcon?.node?.sourceUrl} alt={item?.b2bSec5thListIcon?.node?.altText} />
                        </span>
                        <div className="text" dangerouslySetInnerHTML={{ __html: item?.b2bSec5thListContent }}></div>
                      </li>;
                    })
                  }
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className='sub-page-last-block'>
      <div className="b2b-block__content" ref={block6th.contentRef}
        style={{
          transform: block6th.contentInView ? "none" : "translateY(25%)",
          opacity: block6th.contentInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
        <div className="text" dangerouslySetInnerHTML={{ __html: sec_6th_data?.b2bSec6thContent }}></div>
        <Link
          href={sec_6th_data?.b2bSec6thButton?.url}
          target={sec_6th_data?.b2bSec6thButton?.target}
          className='btn btn-light btn-lg'>{sec_6th_data?.b2bSec6thButton?.title}</Link>
      </div>
      <div className="b2b-block__image">
        <ImageTag
          src={sec_6th_data?.b2bSec6thImage?.node?.sourceUrl}
          alt={sec_6th_data?.b2bSec6thImage?.node?.altText} />
      </div>
    </section>
  </>
}

export default PageContent