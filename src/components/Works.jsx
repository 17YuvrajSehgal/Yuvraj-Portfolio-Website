import React from "react";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {github} from "../assets";
import {SectionWrapper} from "../hoc";
import {projects} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";

const ProjectCard = ({name, description, tags, image, source_code_link}) => {
    const handleClick = () => {
        if (source_code_link) {
            window.open(source_code_link, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <motion.div variants={fadeIn("up", "spring")}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[320px] w-full h-[450px] transition-all duration-300 hover:shadow-card hover:scale-105"
            >
                <div
                    className="relative w-full h-full flex flex-col cursor-pointer"
                    onClick={handleClick}
                >
                    <div className="relative w-full h-[200px] flex-shrink-0">
                        <img
                            src={image}
                            alt="project_image"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                            <div
                                onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(source_code_link, "_blank", "noopener,noreferrer");
                                }}
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                            >
                                <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain"/>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 flex-grow">
                        <h3 className="text-white font-bold text-[20px] hover:text-[#915eff] transition-colors cursor-pointer truncate">
                            {name}
                        </h3>
                        <p className="mt-2 text-secondary text-[14px] line-clamp-4">{description}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2 flex-shrink-0">
                        {tags.map((tag) => (
                            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()} className="flex flex-col items-end mr-4">
                <p className={`${styles.sectionSubText}`}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
            </motion.div>
            <div className="w-full flex justify-end">
                <motion.p variants={fadeIn("", "", 0.1)}
                          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-right mr-4">
                    Following projects showcase my skills and experience through examples
                    of my work. Each project is briefly described with links to code
                    repositories in it.
                </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap justify-center gap-7">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "");
