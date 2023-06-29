import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Banner() {
  useEffect(() => {
    gsap.to(".banner", {
      scrollTrigger: {
        trigger: "bottom center",
        markers: true,
        
        scrub: true,
      },
      x: 100,
     
      ease: "ease-in-out",
      duration: 6,
      xPercent: -100,
    });
    gsap.to(".banner2", {
      scrollTrigger: {
        trigger: ".top center",
        markers: true,
        scrub: true,
        
      },
      x: -100,
      ease: "ease-in-out",
      duration: 6,
      xPercent: 100,
    });
  }, []);

  return (
    <div className="flex items-center flex-col">
      <p className="banner text-white overflow-hidden ">
       I LOVE CODE YOU LIKE CODE WE NEED CODE LOVE CODE     &#9197;
      </p>
      <p className="banner2 text-white overflow-hidden  ">
      &#x23EE; WE LOVE CODE WE LOVE CODE 
      </p>
    </div>
  );
}

export default Banner;
