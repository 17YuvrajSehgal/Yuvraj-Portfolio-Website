import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences, technologies, frameworks } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const TechIcon = ({ index, name, icon }) => (
  <motion.div
    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      show: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          delay: index * 0.2
        }
      }
    }}
  >
    <div className="w-full h-full rounded-full flex justify-center items-center bg-tertiary cursor-pointer hover:shadow-card transition-all duration-300">
      <img 
        src={icon} 
        alt={name} 
        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain"
        loading="lazy"
      />
    </div>
    <p className="text-center text-secondary mt-2 text-[10px] sm:text-[12px] md:text-[14px]">{name}</p>
  </motion.div>
);

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()} className="flex flex-col items-end mr-4">
      <p className={`${styles.sectionSubText}`}>
        What I have done so far
      </p>
      <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>

    <motion.div variants={textVariant()} className="flex flex-col items-start ml-4 mt-32">
      <p className={`${styles.sectionSubText}`}>
        What am I proficient at
      </p>
      <h2 className={`${styles.sectionHeadText}`}>Techstack</h2>
    </motion.div>

    <div className="mt-20 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-8 sm:gap-10 px-2 sm:px-8 place-items-center">
      {technologies.map((technology, index) => (
        <TechIcon key={technology.name} index={index} {...technology} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Experience, "work");
