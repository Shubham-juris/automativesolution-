import React from "react";
import PartsHero from "../components/spare-parts/Partshero";
import PartsCategories from "../components/spare-parts/PartsCategories";
import WhyGenuineParts from "../components/spare-parts/WhyGenuineParts";
import DeliverySupport from "../components/spare-parts/DeliverySupport";
import PartsInquiryForm from "../components/spare-parts/PartsForm";

const SpareParts = () => {
  return (
    <>
      <PartsHero />
      <WhyGenuineParts />
      <PartsCategories />
      <PartsInquiryForm/>
      <DeliverySupport />
    </>
  );
};

export default SpareParts;
