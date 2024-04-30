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
            <h2 className='fs-1'>Unlock your growth potential with Amadeus Online Suite today!</h2>
            <p>
              Experience powerful features, tailored content, and personalized services to maximize your market presence.
            </p>
            <Link href={"/contact"} className='btn btn-secondary btn-lg'>Get in touch</Link>
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
            <ImageTag src="/assets/images/model-man.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>;
}

export default Solution4thSection