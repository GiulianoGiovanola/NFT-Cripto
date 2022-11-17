import React from 'react';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import MintGeneral from '../components/MintGeneral/MintGeneral';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MintGeneral />
      <Footer />
    </>
  );
};

export default Home;
