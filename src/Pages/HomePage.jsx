import React from "react";
import AppointmentSection from "../components/AppointmentPage";
import BoostPlatform from "../components/BoostPlatform";
import LandingPage from "../components/landingPage";
// import Navbar from "./components/Navbar";
import PaymentsSection from "../components/PaymentSection";
import PricingPlans from "../components/Pricingplans";
import SecurityFeatures from "../components/SecurityFeatures";
import ServicesSection from "../components/ServiceCard";
import TherapyFeatures from "../components/TherapyFeatures";
import TherapyLandingSection from "../components/TherapyPage";
const HomePage = () => {
  return (
    <div>
      <LandingPage />
      <ServicesSection />
      <AppointmentSection />
      <PaymentsSection />
      <TherapyLandingSection />
      <BoostPlatform />
      <TherapyFeatures />
      <SecurityFeatures />
      <PricingPlans />
    </div>
  );
};

export default HomePage;
