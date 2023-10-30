import { FaCheck } from "react-icons/fa";
import { useState } from "react";
import ToogelCart from "./ToogelCart";

const Addcart = ({ product }) => {
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
        <p style={{ display: "flex" }}>
          {" "}
          Colors:
          {colors.map((color, ind) => {
            return (
              <button
                style={{ backgroundColor: color }}
                key={ind}
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
    </div>
  );
};

export default Addcart;
