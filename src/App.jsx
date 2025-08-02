import React from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import PageRoutes from "./routes/PageRoutes";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Navbar />
      <PageRoutes />
      <Footer />
    </>
  );
}

export default App;
