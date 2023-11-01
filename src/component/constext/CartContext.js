import { createContext, useContext, useReducer } from "react";
import reducer from "../Resucer/CartReducer";

export const CartContext = createContext();
const initialState = {
  addCart: [],
  total_item: "",
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addtocart = (id, product, color, amount) => {
    dispatch({ type: "ADD_CART", payload: { id, product, color, amount } });
  };
  return (
    <CartContext.Provider value={{ ...state, addtocart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
