import React from "react";
import TopNavBar from "./components/TopNavBar";
import NavBar from "./components/NavBar";
import DeveloperResources from "./components/DeveloperResources";
import GetStarted from "./components/GetStarted";
import DigDeeper from "./components/DigDeeper";
import GoToTheSource from "./components/GoToTheSource";
import Footer from "./components/Footer";
const NextPage = () => {
  return (
    <>
      <TopNavBar />
      <NavBar />
      <DeveloperResources />
      <GetStarted />
      <DigDeeper />
      <GoToTheSource />
      <Footer />
    </>
  );
};

export default NextPage;
