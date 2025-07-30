import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/About-Us";
import SpareParts from "../pages/SpareParts";
import Repair from "../pages/Repair";
import ContactPage from "../components/conatactUs/Contact";
import ScrollToTop from "../components/scrooltotop/ScrollToTop";
import RepairBooking from "../components/conatactUs/RepairBooking";

const PageRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="spareparts" element={<SpareParts />} />
        <Route path="repair" element={<Repair />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="Booking" element={<RepairBooking />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
