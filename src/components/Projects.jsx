import React from "react";
import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const {currentLanguage} = useLanguage();

  return (
    <section
      id="projects"
      className={` testimonial-section ${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient">
        {" "}
      </div>
      <div className="w-full flex items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] px-16">
        <h1 className={styles.heading2}>
        {currentLanguage === "en" ? "Project i build" : "Proyectos"}
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left `}>
            {currentLanguage === "en"
              ? "I was able to learn how to work in a team, solve problems, search for documentation, build an application from scratch, implement a database, and other things that will be reflected in my work."
              : "Gracias a estos proyectos aprendí como trabajar en equipo, arrancar un proyecto desde cero, implementar una base de datos y darle estilo a una aplicación"}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap  justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
