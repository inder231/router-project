import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { AppcontextProvider } from "./components/context/Appcontext";
import { ThemecontextProvider } from "./components/context/Themecontext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppcontextProvider>
      <ThemecontextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ThemecontextProvider>
    </AppcontextProvider>
  </BrowserRouter>
);
