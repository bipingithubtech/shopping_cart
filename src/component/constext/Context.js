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
  singleproduct: {},
  sigleLoading: false,
  sigleError: false,
  grid: true,
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

  // single prducts
  const getSingleProducts = async (url) => {
    dispatch({ type: "Loading" });
    try {
      const result = await axios.get(url);
      const singleProduct = await result.data;
      dispatch({ type: "sigle_product_api", payload: singleProduct });
    } catch {
      dispatch({ type: "error" });
    }
  };
  const setGrid = () => {
    dispatch({ type: "set_grid" });
  };
  const setList = () => {
    dispatch({ type: "set_list" });
  };
  const sort = () => {
    dispatch({ type: "sorts" });
  };

  useEffect(() => {
    getProduct(API);
  }, []);
  return (
    <Appcontext.Provider
      value={{
        ...state,
        getSingleProducts,
        setGrid,
        setList,
        sort,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};
//  custom hooks

export const useGlobal = () => {
  return useContext(Appcontext);
};
