import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Parents from "./Components/Parents"
import Intro from "./Components/Intro";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
     <Header />
      <Hero />
      <Parents /> 
      <Intro />
      <About />
      <Contact />
      <Footer />

    </div>
  );
};

export default App;