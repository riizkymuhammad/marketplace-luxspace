import Asidemenu from "parts/AsideMenu";
import Clients from "parts/Clients";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Browseroom from "parts/HomePage/BrowseRoom";
import Hero from "parts/HomePage/Hero";
import Justarrived from "parts/HomePage/JustArrived";
import React from "react";

const Homepage = (props) => {
  return (
    <>
      <Header />
      <Hero />
      <Browseroom />
      <Justarrived />
      <Clients />
      <Asidemenu />
      <Footer />
    </>
  );
};

export default Homepage;
