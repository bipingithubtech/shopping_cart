import React from "react";
import FormatNumber from "../Helpers/FormatNumber";
import ToogelCart from "./ToogelCart";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "./constext/CartContext";

const CartItem = ({ name, id, image, color, price, max }) => {
  const { setRemoveItem } = useCartContext();
  const [amount, setAmount] = useState(1);

  const setDecrimennt = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(amount);
  };
  const setIncriment = () => {
    amount < max ? setAmount(amount + 1) : setAmount(max);
  };

  return (
    <div className="gri-five-coumn">
      <div className="image">
        <figure>
          <img style={{ width: "50px" }} src={image} alt="" srcset="" />
        </figure>
        <div>{name}</div>
        <div style={{ backgroundColor: color, color: color }}> color</div>
      </div>
      <div>
        <ToogelCart
          amount={amount}
          setIncriment={setIncriment}
          setDecrimennt={setDecrimennt}
        />
      </div>

      <div>
        <FormatNumber price={price} />
      </div>
      <div>
        {" "}
        <FormatNumber price={price * amount} />{" "}
      </div>
      <div>
        <FaTrash onClick={() => setRemoveItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
