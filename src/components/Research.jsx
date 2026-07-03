import React from "react";
import {motion} from "framer-motion";
import {FaExternalLinkAlt} from "react-icons/fa";

import {styles} from "../styles";
import {SectionWrapper} from "../hoc";
import {publications} from "../constants";
import {fadeIn, textVariant} from "../utils/motion";

const PublicationCard = ({index, title, authors, venue, publisher, badge, description, link}) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.3, 0.75)}
        className="bg-tertiary p-6 sm:p-8 rounded-2xl w-full hover:shadow-card transition-all duration-300"
    >
        <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#915eff]/20 text-[#b9a8f5] border border-[#915eff] text-[12px] sm:text-[13px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {badge}
            </span>
            <span className="text-secondary text-[13px] sm:text-[14px]">
                {venue} · {publisher}
            </span>
        </div>

        <h3 className="mt-4 text-white font-bold text-[18px] sm:text-[22px] leading-snug">
            {title}
        </h3>
        <p className="mt-1 text-secondary italic text-[14px]">{authors}</p>
        <p className="mt-3 text-secondary text-[14px] sm:text-[15px] leading-[26px] max-w-4xl">
            {description}
        </p>

        {link ? (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[#915eff] hover:text-white text-[14px] font-semibold transition-colors"
            >
                Read the paper <FaExternalLinkAlt className="text-[11px]"/>
            </a>
        ) : (
            <p className="mt-4 text-secondary text-[13px]">Full text coming soon.</p>
        )}
    </motion.div>
);

const Research = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Peer-reviewed work</p>
                <h2 className={styles.sectionHeadText}>Research & Publications</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[30px]"
            >
                My research applies machine learning to systems — generating and analyzing
                kernel traces with diffusion models and LLMs — carried out through a Mitacs
                Accelerate industrial fellowship with Ciena.
            </motion.p>

            <div className="mt-12 flex flex-col gap-8">
                {publications.map((publication, index) => (
                    <PublicationCard key={publication.title} index={index} {...publication} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Research, "research");
