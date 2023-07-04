import React from "react";
import { skillsCard, skills } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger)


const SkillCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== skillsCard.length - 1 ? "mb-6" : "mb-0"
    } feature-card `}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Skills = () => {

  // useEffect(() => {

  //   gsap.to(".img_skills", {
  //     rotation:360,
  //     duration:3,
  //     pin:".img_skills",
  //     scrollTrigger:{
  //      trigger:".img_skills"

  //     }
  //   }) 

  // },[]);



  return (
    <>
      <section id="features" className={layout.section}>
        <div className={`items-center sm:items-start ${layout.sectionInfo}`}>
          <h2 className={`text-center sm:text-start ${styles.heading2}`}>
            Hello World , <br className="sm:block hidden" />
            thank you for watching.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            As a front-end developer, I am always open to new ideas and willing
            to collaborate with my team members to find the best possible
            solution. 
          </p>
          <Button styles="mt-10" />
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
          {skillsCard.map((feature, index) => (
            <SkillCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </section>

      <section>
        <section className={`${styles.flexCenter} my-4`}>
          <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {skills.map((skill) => (
              <div
                key={skill.id}
                className={` flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
              >
                <img
                  src={skill.logo}
                  alt="client"
                  className="sm:w-[97px] w-[100px] object-contain img_skills"
                />
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Skills;
