import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Resucer/CartReducer";

const getLocaldata = () => {
  let localStorageDate = localStorage.getItem("localData");
  // console.log(localStorageDate);
  if (localStorageDate) {
    return JSON.parse(localStorage.getItem("localData"));
  } else {
    return [];
  }
};
export const CartContext = createContext();
const initialState = {
  // addCart: [],
  addCart: getLocaldata(),

  total_item: "",
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addtocart = (id, product, color, amount) => {
    dispatch({ type: "ADD_CART", payload: { id, product, color, amount } });
  };
  const setRemoveItem = (id) => {
    dispatch({ type: "remove_item", payload: id });
  };

  useEffect(() => {
    localStorage.setItem("localData", JSON.stringify(state.addCart));
  }, [state.addCart]);
  return (
    <CartContext.Provider value={{ ...state, addtocart, setRemoveItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
