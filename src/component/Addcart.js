import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import ToogelCart from "./ToogelCart";
import { NavLink } from "react-router-dom";
import { useCartContext } from "./constext/CartContext";

const Addcart = ({ product }) => {
  const { addtocart } = useCartContext();
  const { id, colors, stock } = product;
  const [colour, setColour] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const setDecrimennt = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(amount);
  };
  const setIncriment = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <div className="container">
      <div className="colors">
        <p style={{ display: "flex", justifyContent: "space-between" }}>
          {" "}
          Colors:
          {colors.map((color) => {
            return (
              <button
                style={{ backgroundColor: color, border: "solid 3px black" }}
                key={color.id}
                className={colour === color ? "btnstyle active" : "btnstyle"}
                onClick={() => setColour(color)}
              >
                {colour === color ? <FaCheck /> : null}
                {color}
              </button>
            );
          })}
        </p>
      </div>
      <ToogelCart
        setDecrimennt={setDecrimennt}
        setIncriment={setIncriment}
        amount={amount}
      />
      <NavLink
        to="/cart"
        onClick={() => addtocart(id, product, colors, amount)}
      >
        <button>Add To Cart</button>
      </NavLink>
    </div>
  );
};

export default Addcart;
