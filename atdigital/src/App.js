import React from "react";
import Hero from "./components/Hero";
import Service from "./components/Service";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Service />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
