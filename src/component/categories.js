import React from "react";

import Sort from "./categoriesSection/Sort";
import ProductSection from "./categoriesSection/ProductSection";

const Categories = () => {
  return (
    <div className="container">
      <div className=" grid">
        <div className="section1"></div>
        <div className="product-view">
          <div className="sortFilter">
            <Sort />
          </div>
          <div
            className="main-product"
            style={{ marginTop: "50px", padding: "10px" }}
          >
            <ProductSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
