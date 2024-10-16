import TestimonialItem from "@/component/module/Testimonial/TestimonialItem";
import React from "react";

function Testimonial({ testimonialData }) {
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
          {testimonialData.slice(0, 4).map((item) => (
            <TestimonialItem {...item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
