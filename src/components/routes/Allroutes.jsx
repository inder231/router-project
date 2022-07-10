import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Cart from "../pages/Cart";
import ContactUs from "../pages/ContactUs";
import ErrorPage from "../pages/ErrorPage";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Product from "../pages/Product";
import Products from "../pages/Products";
import { PrivatedRoute } from "./PrivatedRoute";
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/cart"
          element={
            <PrivatedRoute>
              <Cart />
            </PrivatedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivatedRoute>
              <Products />
            </PrivatedRoute>
          }
        />
        <Route
          path="/products/:product_id"
          element={
            <PrivatedRoute>
              <Product />
            </PrivatedRoute>
          }
        />
        <Route path="/login" element={<Login/>} />
      </Routes>
      
    </div>
  );
};

export default Allroutes;
