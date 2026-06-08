import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Work from "./Components/Work";
import Playreel from "./Components/Playreel";
import Images from "./Components/Images";
import Spread from "./Spread";
import Story from "./Components/Story";
import LocomotiveScroll from "locomotive-scroll";



const App = () => {
   useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#scroll-container"),
      smooth: true,
      multiplier: 1,          // inertia strength (ExoApe-like)
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    return () => scroll.destroy();
  }, []);


  return (
    <>
      

     
      <main >

        <Navbar />

        <section id="home">
          <Hero />
        </section>

        <section id="about" >
          <Work />
        </section>

        <section id="skills" >
          <Playreel />
        </section>

        <section id="projects">
          
          <Images />
        
        </section>
        <section id="Exposures" >
          
          <Spread />
        
        </section>

        

        <section id="contact">
          <Story />
        </section>
      
       
        
        
        


      </main>
    </>
  );
};

export default App;
