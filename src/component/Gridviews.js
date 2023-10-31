import { NavLink } from "react-router-dom";
import FormatNumber from "../Helpers/FormatNumber";

const Gridviews = ({ store }) => {
  return (
    <div className="conatiner">
      <div className="template">
        {store &&
          store.map((elem) => {
            return (
              <div key={elem.id}>
                <NavLink to={`/singlepage/${elem.id}`}>
                  <img
                    src={elem.image}
                    alt=""
                    srcset=""
                    style={{
                      width: "200px",
                      marginRight: "8px",
                    }}
                  />
                </NavLink>

                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <div>{elem.name} </div>
                  <FormatNumber price={elem.price} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gridviews;
