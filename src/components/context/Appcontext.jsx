import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { createContext } from "react";
const isAuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: true,
        token: Date.now(),
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    default:
      return state;
  }
};
export const Appcontext = createContext();
export const AppcontextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [productCartCount, setProductCartCount] = useState(0);
  const [cartProductList, setCartProductList] = useState([]);
  const initValue = {
    isAuth:false,
    token:null
  }
  const [state, dispatch] = useReducer(isAuthReducer,initValue);
  console.log(state);
  const addtocart = (product) => {

    setCartProductList([...cartProductList, product]);
    setProductCartCount((count) => count + 1);
  };
  useEffect(() => {
    axios
      .get("https://rct-restaurant-app-api.herokuapp.com/items?_limit=12")
      .then((res) => setData(res.data));
  }, []);
  return (
    <Appcontext.Provider
      value={{ data, productCartCount, addtocart, cartProductList,dispatch,state }}
    >
      {children}
    </Appcontext.Provider>
  );
};
