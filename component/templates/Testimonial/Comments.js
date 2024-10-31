import TestimonialItem from '@/component/module/Testimonial/TestimonialItem'
import React from 'react'

function Comments({ data }) {
  return (
    <div className="container-fluid py-5">
    <div className="container">
      <div className="section-title">
        <h4
          className="text-primary text-uppercase"
          style={{ letterSpacing: "5px" }}
        >
          Testimonial
        </h4>
        <h1 className="display-4">Our Clients Say</h1>
      </div>
      <div className="owl-carousel testimonial-carousel">
        {data.map((item) => (
          <TestimonialItem {...item} key={item._id} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Comments