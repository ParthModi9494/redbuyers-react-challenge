import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import HowItWorks from "./HowItWorks/HowItWorks";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <Testimonials />
      <HowItWorks />
    </>
  );
};

export default Home;
