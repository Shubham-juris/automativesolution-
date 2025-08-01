import React from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import PageRoutes from "./routes/PageRoutes";
import Footer from "./components/common/Footer";
import FloatingTruck from "./components/floting truk/FloatingTruck";

function App() {
  return (
    <>
      <Navbar />
      <FloatingTruck />
      <PageRoutes />
      <Footer />
    </>
  );
}

export default App;
