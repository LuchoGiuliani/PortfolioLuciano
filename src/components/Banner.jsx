import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Banner() {
  useEffect(() => {
    gsap.to(".banner", {
      scrollTrigger: {
        scrub: true,
      },
      ease: "ease-in-out",
      xPercent:-100
    });
    gsap.to(".banner2", {
      scrollTrigger: {
        scrub: true,
      },

      ease: "ease-in-out",
      xPercent: 50,
    });
  }, []);

  return (
    <div className="flex items-center flex-col p-6">
      {/* <p className="banner text-white  ">
        I LOVE CODE <span className="text-blue-500">YOU LIKE CODE</span> YOU
        LIKE CODE WE NEED CODE LOVE CODE I LOVE CODE
      </p>
      <p className="banner2 text-white overflow-hidden  ">
        <span className="text-blue-500"> WE LOVE CODE</span> YOU LIKE CODE{" "}
        <span className="text-blue-500">YOU LIKE CODE</span> WE LOVE CODE I LOVE
        CODE
      </p> */}
      <p className="banner text-white  ">
        REACT TAILWINDCSS <span className="text-blue-500"> JAVASCRIPT</span> NEXT
        JS <span className="text-blue-500"> MYSQL  NODEJS API-REST</span>  MYSQL  NODEJS API-REST <span className="text-stone-300"> GSAP </span>
        REACT  TAILWINDCSS GITHUB  WORDPRESS
      </p>
      <p className="banner2 text-white overflow-hidden  ">
        <span className="text-blue-500"> WE LOVE CODE</span> YOU LIKE CODE{" "}
        <span className="text-blue-500"> YOU LIKE CODE</span> WE LOVE CODE I LOVE
        CODE
      </p>
    </div>
  );
}

export default Banner;
