import { NavLink } from "react-router-dom";
import FormatNumber from "../Helpers/FormatNumber";

const Product = (element) => {
  const { name, id, image, category, price } = element;
  return (
    <NavLink to={`/singlepage/${id}`}>
      <div className="out-fame">
        <figure>
          <figcaption className="caption">{category}</figcaption>
          <img src={image} alt="" style={{ width: "300px" }} />
        </figure>

        <div style={{ marginLeft: "50px" }}>
          {name}{" "}
          <span style={{ marginLeft: "50px" }}>
            {" "}
            {<FormatNumber price={price} />}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
