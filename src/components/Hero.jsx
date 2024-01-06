import { useEffect } from "react";
import styles from "../style";
import { perfil } from "../assets";
import SplitType from "split-type";
import { gsap } from "gsap";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

const Hero = () => {
  const { currentLanguage } = useLanguage();
  const transition = { duration: 0.5, ease: "easeInOut" };
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(()=> {
    gsap.to(".circle", {
      x: 120,
      delay: 0.2,
      duration:4,
      ease: "ease"
      
    })
    gsap.to(".circle2",{
      scale:0.5,
      delay: 0.2,
      duration:20,
      ease: "elastic"
    })
    gsap.to(".circle3",{
      scale:-1,
      delay: 0.2,
      duration:10,
     
      
    })
    
    


  },[])



  useEffect(() => {
    const text = new SplitType("#title_h1");
    const characters = document.querySelectorAll(".char");
    gsap.to(characters, {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });
  }, []);

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} gap-6   `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[60%] rounded-full blue__gradient circle"></div>
      <div className="absolute z-[0] w-[50%] h-[80%] -left-[-40%] top-2 rounded-full blue__gradient2 circle3 overflow-x-hidden" style={{ maxWidth: '100%' }}></div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col sm:gap-6 xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full ">
          <h1
            id="title_h1"
            className="  flex-1 font-poppings font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[75px] sm:text-left text-center"
          >
            Front-End <br className="sm:block hidden" />{" "}
            <span className="">Developer</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>
        <h1 className="font-poppings font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"></h1>
        <motion.p
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={transition}
          className={` ${styles.paragraph}   max-w-[470px] mt-5`}
        >
          {currentLanguage === "en"
            ? "Hi there! My name is Luciano Giuliani and I am a passionate front-end developer with a desire to constantly improve my skills."
            : "Hola a todos! Me llamo Luciano Giuliani, me encanta el desarrollo web, principalmente el area de experiencia de usuario."}
        </motion.p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexStart} md:my-0  my-6 relative  `}
      >
        <img
          src={perfil}
          alt="perfil"
          className="max-w-[480px] max-h-[360px] rounded-xl z-10 skew-x-1 "
        />
        {/* <div className="absolute z-[0] w-[202%] h-[20%] right-30 bottom-20 blue__gradient top-0 circle2"></div> */}
      </div>
    </section>
  );
};

export default Hero;
