"use client"
import { useRef } from 'react';
import { useInView } from "framer-motion";
import ImageTag from '../ImageTag';
import Link from 'next/link';

function Solution4thSection({ data }) {
  const blockImageRef = useRef(null);
  const blockContentRef = useRef(null);
  const imageInView = useInView(blockImageRef, { margin: "0px 0px -100px 0px", once: true });
  const contentInView = useInView(blockContentRef, { margin: "0px 0px -100px 0px", once: true });
  return <section className="amadeus-online-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6">
          <div
            ref={blockImageRef}
            style={{
              transform: contentInView ? "none" : "translateY(25%)",
              opacity: contentInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}    
            className="content">
            <div className='d-flex flex-column gap-2' dangerouslySetInnerHTML={{ __html: data?.s4thContent }}></div>
            <Link href={data?.s4thLink?.url} target={data?.s4thLink?.target} className='btn btn-secondary btn-lg'>{data?.s4thLink?.title}</Link>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-end">
          <div
            ref={blockContentRef}
            style={{
              transform: imageInView ? "none" : "translateY(25%)",
              opacity: imageInView ? 1 : 0,
              transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: "1s",
            }} 
            className="image">
            <ImageTag src={data?.s4thImage?.node?.sourceUrl} alt={data?.s4thImage?.node?.altText} />
          </div>
        </div>
      </div>
    </div>
  </section>;
}

export default Solution4thSection