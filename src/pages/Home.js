import React from 'react';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import Collection from '../components/Collection/Collection';
import MintGeneral from '../components/MintGeneral/MintGeneral';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Collection />
      <MintGeneral />
      <About />
      <Footer />
    </>
  );
};

export default Home;
