"use client";
import React from 'react';
import ImageTag from './ImageTag';
import { motion } from "framer-motion";


function HeroBanner({data}) {
  const content = data?.content;
  const image = data?.featuredImage?.node;
  return <div className='hero-banner-container'>
    <ImageTag src={image?.sourceUrl} alt={image?.altText} />
    <div className="content">
      <div className="container content-container">
        <motion.div
          initial={{ y: "30%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "linear" }}
          dangerouslySetInnerHTML={{ __html: content }}></motion.div>
      </div>
    </div>
  </div>;
}

export default HeroBanner