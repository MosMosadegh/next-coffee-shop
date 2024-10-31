import Card from "@/component/module/Card/Card";
import React from "react";

function Menu({ menuData }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Menu &amp; Pricing
          </h4>
          <h1 className="display-4">Competitive Pricing</h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5">Hot Coffee</h1>
            {menuData
              .filter((item) => item.type === "hot")
              .slice(0, 3)
              .map((item) => (
                <Card {...item} key={item._id}/>
              ))}
          </div>

          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>
            {menuData
              .filter((item) => item.type === "cold")
              .slice(0, 3)
              .map((item) => (
                <Card {...item} key={item._id}/>
              ))}

            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Menu;
