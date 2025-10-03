'use client'
import React, { useState } from 'react'
import BlogCard from './BlogCard'

function BlogCardListing( { data }) {
  const [cards, setCards] = useState(data.nodes || []);
  return <section className="blog-list-section">
    <div className="container">
      <div className="row gy-3">
        {
          cards.map((post, index) => {
            return <BlogCard key={index} cardData={post} />
          })
        }
      </div>
    </div>
  </section>
}

export default BlogCardListing