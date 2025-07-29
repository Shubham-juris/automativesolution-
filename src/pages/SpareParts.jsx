import React from "react";
import PartsHero from "../components/spare-parts/Partshero";
import PartsCategories from "../components/spare-parts/PartsCategories";
import WhyGenuineParts from "../components/spare-parts/WhyGenuineParts";
import DeliverySupport from "../components/spare-parts/DeliverySupport";

const SpareParts = () => {
  return (
    <>
      <PartsHero />
      <WhyGenuineParts />
      <PartsCategories />
      <DeliverySupport />
    </>
  );
};

export default SpareParts;
