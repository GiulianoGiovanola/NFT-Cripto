import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Collection from "../components/Collection/Collection";
import MintGeneral from "../components/MintGeneral/MintGeneral";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import background from "../assets/background.jpg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover"
      }}
    >
      <Navbar />
      <Hero />
      <Collection />
      <MintGeneral />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
