import React from "react";
import TopNavBar from "./components/TopNavBar";
import NavBar from "./components/NavBar";
import PowerFulHero from "./components/PowerFulHero";
import JoinCommunity from "./components/JoinCommunity";
import BuildGrowth from "./components/BuildGrowth";
import ThrivingCommunity from "./components/ThrivingCommunity";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="bg_img min-vh-100">
        <TopNavBar />
        <NavBar />
        <PowerFulHero />
      </div>
      <JoinCommunity />
      <BuildGrowth />
      <ThrivingCommunity />
      <Footer />
    </>
  );
};

export default HomePage;
