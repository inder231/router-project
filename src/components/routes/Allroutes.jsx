import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Cart from "../pages/Cart";
import ContactUs from "../pages/ContactUs";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
};

export default Allroutes;
