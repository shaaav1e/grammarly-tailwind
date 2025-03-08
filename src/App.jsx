import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      {/* <h1 class="container text-3xl  bg-amber-600">Hello world!</h1> */}
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
