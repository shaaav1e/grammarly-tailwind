import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturesTab from "./components/FeaturesTab";
import Boxes from "./components/Boxes";
import Faq from "./components/Faq";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
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
      <Pricing />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
