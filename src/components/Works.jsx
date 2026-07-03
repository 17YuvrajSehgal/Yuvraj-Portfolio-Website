import React from "react";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";

import {FaRegFileAlt} from "react-icons/fa";

import {styles} from "../styles";
import {github} from "../assets";
import {SectionWrapper} from "../hoc";
import {projects} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";

const ProjectCard = ({name, description, tags, image, source_code_link, paper_link}) => {
    const handleClick = () => {
        const link = source_code_link || paper_link;
        if (link) {
            window.open(link, "_blank", "noopener,noreferrer");
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
                className="bg-tertiary p-4 rounded-2xl w-full max-w-[320px] h-[400px] sm:h-[450px] transition-all duration-300 hover:shadow-card hover:scale-105"
            >
                <div
                    className="relative w-full h-full flex flex-col cursor-pointer"
                    onClick={handleClick}
                >
                    <div className="relative w-full aspect-video flex-shrink-0">
                        <img
                            src={image}
                            alt="project_image"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 flex justify-end gap-2 m-3 card-img_hover">
                            {paper_link && (
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(paper_link, "_blank", "noopener,noreferrer");
                                    }}
                                    title="Read the paper"
                                    className="black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer"
                                >
                                    <FaRegFileAlt className="w-1/2 h-1/2 text-white"/>
                                </div>
                            )}
                            {source_code_link && (
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(source_code_link, "_blank", "noopener,noreferrer");
                                    }}
                                    title="View source code"
                                    className="black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer"
                                >
                                    <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain"/>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-4 flex-grow">
                        <h3 className="text-white font-bold text-[16px] sm:text-[20px] hover:text-[#915eff] transition-colors cursor-pointer line-clamp-2 leading-snug">
                            {name}
                        </h3>
                        <p className="mt-2 text-secondary text-[12px] sm:text-[14px] line-clamp-4">{description}</p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2 flex-shrink-0">
                        {tags.map((tag) => (
                            <p key={tag.name} className={`text-[12px] sm:text-[14px] ${tag.color}`}>
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
                          className="mt-3 text-secondary text-[14px] sm:text-[17px] max-w-3xl leading-[30px] text-right mr-4">
                    A mix of research systems and industry-style builds — from
                    diffusion-based trace generation and LLM agents to deep learning,
                    reinforcement learning, and full-stack apps. Most cards link to the
                    code; papers are linked where published.
                </motion.p>
            </div>
            <div className="mt-20 w-full px-4 sm:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 place-items-center">
                        {projects.map((project, index) => (
                            <ProjectCard key={`project-${index}`} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Works, "projects");
