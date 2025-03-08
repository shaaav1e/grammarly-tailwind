import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturesTab from "./components/FeaturesTab";

function App() {
  return (
    <>
      {/* <h1 class="container text-3xl  bg-amber-600">Hello world!</h1> */}
      <Navbar />
      <Hero />
      <Features />
      <FeaturesTab />
    </>
  );
}

export default App;
