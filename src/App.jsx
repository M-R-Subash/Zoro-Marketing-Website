import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Grow from "./components/Grow";
import Management from "./components/Management";
import Sell from "./components/Sell";
import Support from "./components/Support";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <Grow/>
    <Management/>
    <Sell/>
    <Support/>
    <Footer/>
    </>
  );
};

export default App;
