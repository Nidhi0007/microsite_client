import React from "react";
import CardComp from "../Components/Store/CardComponent/CardComp";
import NavbarComponent from "../Components/Store/Navbar/NavbarComponent";
import CenteredCard from "../Components/Store/CenteredCard/CenteredCard";
import BottomSection from "../Components/Store/BottomSection/BottomSection";
import HeroSection from "../Components/Store/HeroSection/HeroSection";
import FeaturedSec from "../Components/Store/FeaturedSec/FeaturedSec";
import { Container } from "react-bootstrap";
import AnimatedSection from "../Components/Store/AnimatedSection/AnimatedSection";
import Footer from "../Components/Store/Footer/Footer";
function Store() {
  return (
    <Container>
      <NavbarComponent />
      <HeroSection />
      <CardComp />
      <FeaturedSec />
      <AnimatedSection />
      <CenteredCard />
      <BottomSection />
      <Footer />
    </Container>
  );
}

export default Store;
