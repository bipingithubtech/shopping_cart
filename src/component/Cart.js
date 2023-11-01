import CartItem from "./CartIte";

import { useCartContext } from "./constext/CartContext";

const Cart = () => {
  const { addCart } = useCartContext();

  return (
    <div className="container">
      <div className="gri-five-coumn">
        <p>Item</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      <div className="cart-items">
        {addCart.map((currelm) => {
          return <CartItem key={currelm.id} {...currelm} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
