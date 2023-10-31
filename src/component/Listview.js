import React from "react";
import FormatNumber from "../Helpers/FormatNumber";
import { NavLink } from "react-router-dom";

const Listview = ({ store }) => {
  return (
    <div className="container" style={{ width: "700px" }}>
      {store.map((elm) => {
        return (
          <div className="template_grid">
            <figure>
              <img
                src={elm.image}
                alt=""
                srcset=""
                style={{ width: "200px" }}
              />
            </figure>
            <div className="card_data">
              <h2>{elm.name}</h2>
              <p>
                <FormatNumber price={elm.price} />
              </p>
              <p>{elm.description.split("").slice(0, 90).join("")}......</p>
              <div>
                <NavLink to={`/singlepage/${elm.id}`}>
                  <button
                    style={{
                      backgroundColor: "#152030",
                      color: "#fcfcfc",
                      fontSize: "15px",
                    }}
                  >
                    Read more
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listview;
