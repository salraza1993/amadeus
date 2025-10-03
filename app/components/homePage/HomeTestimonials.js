import React from 'react'
import Testimonial from '../Testimonial'

function HomeTestimonials({ data }) {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="testimonial-container">
          <h2 className='fs-1 text-center font-amadeus-medium'>What Our Customers Say</h2>
          <div className="testimonial-card-container">
            <Testimonial data={data} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonials