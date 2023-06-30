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
        scrub: true,
      },
      
      ease: "ease-in-out",
      duration: 8,
      xPercent: -50,
    });
    gsap.to(".banner2", {
      scrollTrigger: {
        trigger: ".top center",
        scrub: true,
      },
     
      ease: "ease-in-out",
      duration: 8,
      xPercent: 50,
    });
  }, []);

  return (
    <div className="flex items-center flex-col">
      <p className="banner text-white overflow-hidden ">
        I LOVE CODE <span className="text-blue-500">YOU LIKE CODE</span> YOU LIKE CODE WE NEED CODE LOVE CODE  I LOVE CODE
      </p>
      <p className="banner2 text-white overflow-hidden  ">
      <span className="text-blue-500"> WE LOVE CODE</span>   YOU LIKE CODE <span className="text-blue-500">YOU LIKE CODE</span>   WE LOVE CODE I LOVE CODE
      </p>
    </div>
  );
}

export default Banner;
