"use client";
import React from 'react';
import ImageTag from './ImageTag';
import { motion } from "framer-motion";


function HeroBanner({data}) {
  return <div className='hero-banner-container'>
    <ImageTag src={data?.featuredImage?.node?.sourceUrl} alt={data?.featuredImage?.node?.altText} />
    <div className="content">
      <div className="container">
        <motion.div
          initial={{ y: "30%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "linear" }}
          dangerouslySetInnerHTML={{ __html: data?.content }}></motion.div>
      </div>
    </div>
  </div>;
}

export default HeroBanner