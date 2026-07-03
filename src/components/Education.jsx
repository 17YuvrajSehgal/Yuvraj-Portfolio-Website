import React from "react";
import {motion} from "framer-motion";
import {FaAward} from "react-icons/fa";

import {styles} from "../styles";
import {SectionWrapper} from "../hoc";
import {awards, education} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";

const EducationCard = ({index, degree, school, date, icon, points}) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.3, 0.75)}
        className="bg-tertiary p-6 sm:p-8 rounded-2xl w-full hover:shadow-card transition-all duration-300"
    >
        <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-[#161329] flex justify-center items-center flex-shrink-0">
                <img src={icon} alt={school} className="w-[60%] h-[60%] object-contain"/>
            </div>
            <div>
                <h3 className="text-white font-bold text-[18px] sm:text-[20px] leading-snug">{degree}</h3>
                <p className="text-secondary text-[14px] sm:text-[15px] font-semibold">{school}</p>
                <p className="text-secondary text-[13px] mt-1">{date}</p>
            </div>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
            {points.map((point, pointIndex) => (
                <li key={`education-point-${pointIndex}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider">
                    {point}
                </li>
            ))}
        </ul>
    </motion.div>
);

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Academic background</p>
                <h2 className={styles.sectionHeadText}>Education & Awards</h2>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {education.map((entry, index) => (
                    <EducationCard key={entry.degree} index={index} {...entry} />
                ))}
            </div>

            <motion.div variants={fadeIn("", "", 0.2, 1)} className="mt-10">
                <div className="flex flex-wrap gap-3">
                    {awards.map((award) => (
                        <span
                            key={award}
                            className="inline-flex items-center gap-2 bg-tertiary text-secondary border border-[#37325a] text-[13px] sm:text-[14px] px-4 py-2 rounded-full"
                        >
                            <FaAward className="text-[#915eff]"/>
                            {award}
                        </span>
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Education, "education");
