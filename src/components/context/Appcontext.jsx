import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const Appcontext = createContext();
export const AppcontextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://rct-restaurant-app-api.herokuapp.com/items?_limit=12")
      .then((res) => setData(res.data));
  }, []);
  return <Appcontext.Provider value={[data]}>{children}</Appcontext.Provider>;
};
