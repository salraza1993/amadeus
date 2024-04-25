'use client';
import React, { useRef } from 'react'
import ImageTag from '../ImageTag';
import { useInView } from "framer-motion";
import { useRouter } from 'next/navigation';

function BlockImage({ imageUrl }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px", once: true });
  return <div ref={ref}
    style={{
      transform: isInView ? "none" : "translateY(25%)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}    
    className="image">
    <ImageTag src={imageUrl} alt="" />
  </div>;
}

function BlockContent({ title, subTitle, description, path, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px", once: true });
  const router = useRouter()

  return <div ref={ref}
    style={{
      transform: isInView ? "none" : "translateY(25%)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      transitionDelay: `${1 * index / 10}s`
    }}    
    className={index % 2 === 0 ? "content odd" : 'content even'}>
    <h2>{title}</h2>
    <h5>{subTitle}</h5>
    <p>{description}</p>
    
    <a href={path} className='btn btn-secondary btn-lg' >Discover More</a>
  </div>;
}

function SolutionsBlocks({ data }) {
  return <section className="solution-blocks-section">
    {
      data.map((block, index) => {
        return <div className={index % 2 === 0 ? "solution-block odd" : 'solution-block even'} key={index}>
          <div className="container">
            <div className={index % 2 === 0 ? "row g-4" : 'row g-4 flex-row-reverse'}>
              <div className="col-12 col-lg-6 d-flex justify-content-center">
                <BlockImage imageUrl={ block.image } />
              </div>
              <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                <BlockContent 
                  title={block.title} 
                  subTitle={block.subTitle} 
                  description={block.description} 
                  path={block.path}
                  index={index} />
              </div>
            </div>
          </div>
        </div>;
      })
    }
  </section>;
}

export default SolutionsBlocks