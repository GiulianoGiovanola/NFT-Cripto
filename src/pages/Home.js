import React from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Collection from "../components/Collection/Collection";
import MintGeneral from "../components/MintGeneral/MintGeneral";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import background from "../assets/background2.png";
import uno from "../assets/outputs/1.png";
import dos from "../assets/outputs/2.png";
import tres from "../assets/outputs/3.png";
import cuatro from "../assets/outputs/4.png";
import cinco from "../assets/outputs/5.png";
import seis from "../assets/outputs/6.png";
import siete from "../assets/outputs/7.png";
import ocho from "../assets/outputs/8.png";
import nueve from "../assets/outputs/9.png";
import diez from "../assets/outputs/10.png";
import once from "../assets/outputs/11.png";
import doce from "../assets/outputs/12.png";

const dataimg = [
  { src: uno, alt: "1" },
  { src: dos, alt: "2" },
  { src: tres, alt: "3" },
  { src: cuatro, alt: "4" },
  { src: cinco, alt: "5" },
  { src: seis, alt: "6" },
  { src: siete, alt: "7" },
  { src:  ocho, alt: "8" },
  { src: nueve, alt: "9" },
  { src: diez, alt: "10" },
  { src: once, alt: "11" },
  { src: doce, alt: "12" },
];

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        /*background: `linear-gradient(180deg, rgba(17, 17, 17, 0.6) rgba(60, 60, 60, 0.2)), linear-gradient(90deg, #40424b, #1c1d24), url(${background});`,*/
        /*backgroundImage: "linear-gradient(180deg, rgba(17, 17, 17, 0.6), rgba(60, 60, 60, 0.2)), url(/static/media/background.73a83ea2.jpg), linear-gradient(90deg, #40424b, #1c1d24)",*/
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Hero />
      <Collection dataimg={dataimg} />
      <MintGeneral />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
