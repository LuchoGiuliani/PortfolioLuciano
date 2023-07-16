import React from "react";
import styles from "../style";
import { discount, perfil } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}   `}>
     <div className="absolute z-[0] w-[60%] h-[60%] -left-[60%] rounded-full blue__gradient">
    </div>
    
   
     
   
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row justify-between items-center w-full ">
        <h1 className="flex-1 font-poppings font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[75px] sm:text-left text-center">
          Front-End <br className="sm:block hidden" />{" "}
          <span className="">Developer</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppings font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"></h1>
      <p className={`  ${styles.paragraph} max-w-[470px] mt-5`}>
        Hi there! My name is <em className="text-sky-400 ">Luciano Giuliani</em>{" "}
        and I am a passionate front-end developer with a desire to constantly
        improve my skills. 
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexStart} md:my-0  my-6 relative  `}>
      <img
        src={perfil}
        alt="perfil"
        className="max-w-[480px] max-h-[360px] rounded-xl z-10 skew-x-1 "
      />
     {/* <div className="absolute z-[0] w-[20%] h-[25%] top-10 pink__gradient"></div>
      <div className="absolute z-[1] w-[60%] h-[80%] rounded-full top-10 bottom-40 white__gradient"></div> */}
      <div className="absolute z-[0] w-[202%] h-[20%] right-30 bottom-20 blue__gradient top-0"></div>
    </div>
    
  </section>
);

export default Hero;
