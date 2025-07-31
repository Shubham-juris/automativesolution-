import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/About-Us";
import SpareParts from "../pages/SpareParts";
import Repair from "../pages/Repair";
import ContactPage from "../components/conatactUs/Contact";
import ScrollToTop from "../components/scrooltotop/ScrollToTop";
import RepairBooking from "../components/conatactUs/RepairBooking";
import EngineDiagnostics from "../components/repaire/cardpage/EngineDiagnostics";
import BrakeSuspensionPage from "../components/repaire/cardpage/BrakeSuspensionPage";
import TyreAlignmentPage from "../components/repaire/cardpage/TyreAlignmentPage";
import ElectricalSystemPage from "../components/repaire/cardpage/ElectricalSystemPage";
import CoolingRepairPage from "../components/repaire/cardpage/CoolingRepairPage";
import SuspensionRebuildPage from "../components/repaire/cardpage/SuspensionRebuildPage";
import BrakeSystems from "../components/spare-parts/spareCards/BrakeSystems";
import EngineParts from "../components/spare-parts/spareCards/EngineParts";
import FiltersPage from "../components/spare-parts/spareCards/FiltersPage";
import SuspensionPage from "../components/spare-parts/spareCards/SuspensionPage";
import TransmissionPage from "../components/spare-parts/spareCards/TransmissionPage";
import LightingPage from "../components/spare-parts/spareCards/LightingPage";

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

        <Route path="engine" element={<EngineDiagnostics />} />
        <Route path="brake" element={<BrakeSuspensionPage />} />
        <Route path="tyre-alignment" element={<TyreAlignmentPage />} />
        <Route path="electrical-check" element={<ElectricalSystemPage />} />
        <Route path="ac-cabin" element={<CoolingRepairPage />} />
        <Route path="suspension-rebuild" element={<SuspensionRebuildPage />} />

        <Route path="brake-systems" element={<BrakeSystems />} />
        <Route path="engine-parts" element={<EngineParts />} />
        <Route path="filters" element={<FiltersPage />} />
        <Route path="lighting" element={<LightingPage />} />
        <Route path="suspension" element={<SuspensionPage />} />
        <Route path="transmission" element={<TransmissionPage/>} />

      </Routes>
    </>
  );
};

export default PageRoutes;
