"use client";
import React from 'react';
import ImageTag from './ImageTag';
import { motion } from "framer-motion";


function HeroBanner({ image = "assets/images/solution-hero-banner.png", heading = "Heading", description = "" }) {
  return <div className='hero-banner-container'>
    <ImageTag src={image} />
    <div className="content">
      <div className="container">
        <motion.h2
          initial={{ y: "30%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "linear" }}
          className='title-heading fs-1'>
          { heading }
        </motion.h2>
        {description  && <motion.p
          initial={{ y: "30%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ ease: "linear" }}
          className='title-heading fs-5 mt-3'>
          { description }
        </motion.p>}
      </div>
    </div>
  </div>;
}

export default HeroBanner