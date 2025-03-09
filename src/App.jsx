import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturesTab from "./components/FeaturesTab";
import Boxes from "./components/Boxes";
import Faq from "./components/Faq";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
      {/* <h1 class="container text-3xl  bg-amber-600">Hello world!</h1> */}
      <Navbar />
      <Hero />
      <Features />
      <FeaturesTab />
      <Boxes />
      <Faq />
      <Newsletter />
    </>
  );
}

export default App;
