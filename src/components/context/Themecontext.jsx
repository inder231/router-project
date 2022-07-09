import React, { useState } from "react";
import { createContext } from "react";
export const Themecontext = createContext();
export const ThemecontextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    setMode((mode) => (mode === "light" ? "dark" : "light"));
  };
  return (
    <Themecontext.Provider value={{ mode, toggleMode }}>
      {children}
    </Themecontext.Provider>
  );
};

export default Themecontext;
