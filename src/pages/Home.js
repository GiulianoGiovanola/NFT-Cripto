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
        /*background: `linear-gradient(180deg, rgba(17, 17, 17, 0.6) rgba(60, 60, 60, 0.2)), linear-gradient(90deg, #40424b, #1c1d24), url(${background});`,*/
        /*backgroundImage: "linear-gradient(180deg, rgba(17, 17, 17, 0.6), rgba(60, 60, 60, 0.2)), url(/static/media/background.73a83ea2.jpg), linear-gradient(90deg, #40424b, #1c1d24)",*/
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
