import Card from "@/component/module/Card/Card";
import React from "react";

function Result({ searchResult }) {
  const hotItems = searchResult.filter((item) => item.type === "hot");
  const coldItems = searchResult.filter((item) => item.type === "cold");
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5">Hot Coffee</h1>
            {hotItems.length > 0 ? (
              hotItems.map((item) => <Card {...item} key={item.id} />)
            ) : (
                <h3 className="text-danger">Nothing to show...</h3>
            )}
          </div>

          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>
            {coldItems.length > 0 ? (
              coldItems.map((item) => <Card {...item} key={item.id} />)
            ) : (
              <h3 className="text-danger">Nothing to show...</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
