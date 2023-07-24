import styles from "./style";
import {
  Navbar,
  Hero,
  Stats,
  Skills,
  Projects,
  ContactMe,
  Footer,
  Banner,
} from "./components";
import { motion } from "framer-motion"
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [mousePosition,setMousePosition] = useState({
    x:0,
    y:0
  })

  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }
  window.addEventListener("mousemove",mouseMove)
  return () => {
    window.removeEventListener("mousemove",mouseMove)
  } 
  }, [])

  const variants = {
    default : {
      x: mousePosition.x -10,
      y: mousePosition.y -10
    },
    text:{
      height: 80,
      width: 80,
      x: mousePosition.x -3,
      y: mousePosition.y -3,
    },
    
  }
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  
  const main = useRef()
  useEffect(() => {
    const colorChange = gsap.utils.toArray(".box");
    console.log(colorChange);
    
  colorChange.forEach((box) => {
    ScrollTrigger.create({  
      trigger: box,
      start: "top",
      end:"bottom top -50px",
      

      onEnter: () => {
        gsap.to(box, {
          backgroundColor: "#003d58",
          duration: 1.5,
        });
      },
      onLeaveBack: () => {
        gsap.to(box, {
          backgroundColor: "#00040f",
          duration: 1.5,
          
        });
      },
    });
  });
}, [main]);



  return (
    <div className="bg-primary w-full  cont body overflow-hidden" onMouseEnter={textEnter}
    onMouseLeave={textLeave}>
 <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} panel h-screen`}>
          <Hero className="" />
          <Stats />
        </div>
      </div>

          <Banner />
      <div className={`bg-primary pb-8 box ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <Skills  className=""/>


        </div>
      </div>
          <Projects />

          <ContactMe />

          <Footer />
    </div>
  );
};

export default App;
