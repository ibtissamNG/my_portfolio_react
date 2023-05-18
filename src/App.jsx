import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AnimatedCursor from "./utils/AnimatedCursor";
import Education from "./components/Education";

const App = () => {
  return (
    <div>
       {/* <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="226, 222 ,222"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div> */}
      <Navbar />
      <Hero/>
      <About />
      <Education/>
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
