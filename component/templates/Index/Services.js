import React from "react";

import ServiceItem from "@/component/module/ServiceItem/ServiceItem";

function Services({ services }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh &amp; Organic Beans</h1>
        </div>
        <div className="row">
          {services.map((item) => (
            <ServiceItem
            key = {item.id}
              title={item.title}
              img={item.img}
              desc={item.desc}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
