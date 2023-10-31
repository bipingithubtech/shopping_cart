import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobal } from "./constext/Context";
import Pagenavigation from "../Pagenavigation";

import FormatNumber from "../Helpers/FormatNumber";
import { MdOutlineSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplaceFilled } from "react-icons/tb";
import Addcart from "./Addcart";
const api = "https://api.pujakaitem.com/api/products";
const SinglePage = () => {
  const { singleproduct, sigleLoading, getSingleProducts } = useGlobal();
  console.log(singleproduct);
  const {
    id: alias,
    name,

    description,
    image,
    stock,
    price,
    reviews,
  } = singleproduct;

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getSingleProducts(`${api}?id=${id}`);
  }, [id]);
  if (sigleLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "1.2rem",
        }}
      >
        ....Page is loading
      </div>
    );
  }
  return (
    <div>
      <Pagenavigation title={name} />
      <div className="container">
        <div className="grid-two-column">
          <div>
            {image &&
              image.map((img) => {
                return (
                  <figure key={id}>
                    <img style={{ width: "200px" }} src={img.url} alt="" />
                  </figure>
                );
              })}
          </div>

          <div className="product_data">
            <h1>{name}</h1>
            <p> Reviews:-{reviews}</p>

            <p className="price">
              MRP:
              <del>
                <FormatNumber price={price + 2500000} />
              </del>
            </p>
            <p className="real-data">
              <FormatNumber price={price} />
            </p>
            <p>{description}</p>
            <div className="icons">
              <div className="icons">
                <MdOutlineSecurity />
                <p>2 year waranty</p>
              </div>
              <div className="icons">
                <TbTruckDelivery />
                <p>free delivery</p>
              </div>
              <div className="icons">
                <TbReplaceFilled />
                <p>replace within 5 days</p>
              </div>
            </div>
            <div className="pro_data_info">
              <p>
                Available:
                {stock > 0 ? "in stock" : "out of stock"}
              </p>
            </div>
          </div>
        </div>
        <hr />
        {stock > 0 && <Addcart product={singleproduct} />}
      </div>
    </div>
  );
};

export default SinglePage;
