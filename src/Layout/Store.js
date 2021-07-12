import React from "react";
import CardComp from "../Components/CardComponent/CardComp";
import NavbarComponent from "../Components/Navbar/NavbarComponent";
import CenteredCard from "../Components/CenteredCard/CenteredCard";
import BottomSection from "../Components/BottomSection/BottomSection";
function Store() {
  return (
    <>
      <NavbarComponent />

      <CardComp />
      <CenteredCard />
      <BottomSection />
    </>
  );
}

export default Store;
