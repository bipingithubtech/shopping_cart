import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import reducer from "../Resucer/ProductReducer";
const initialState = {
  loading: false,
  error: false,
  store: [],
  categoriesProducts: [],
};

export const Appcontext = createContext();
const API = "https://api.pujakaitem.com/api/products";
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getProduct = async (url) => {
    dispatch({ type: "LOADING" });
    try {
      const res = await axios.get(url);
      const store = await res.data;

      dispatch({ type: "API_DATA", payload: store });
    } catch {
      dispatch({ type: "error" });
    }
  };
  useEffect(() => {
    getProduct(API);
  }, []);
  return (
    <Appcontext.Provider value={{ ...state }}>{children}</Appcontext.Provider>
  );
};
//  custom hooks

export const useGlobal = () => {
  return useContext(Appcontext);
};
