import {motion} from 'framer-motion';
import React from 'react';
import {SectionWrapper} from '../hoc';
import {styles} from '../styles';
import {fadeIn, textVariant} from '../utils/motion';
import GitHubContributions from "./GitHubContributions.jsx";

const highlights = [
    {value: "2+", label: "years of production experience"},
    {value: "2", label: "peer-reviewed publications (FSE · JSS)"},
    {value: "$45K+", label: "research funding & scholarships"},
    {value: "5", label: "industry roles across AI, data & QA"},
];

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>

            <motion.p
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I'm a Computer Science M.Sc. researcher and software engineer with 2+ years
                of production experience across AI services, full-stack development, data
                pipelines, and QA automation at Scotiabank and Mengalo. My current research —
                a Mitacs Accelerate industrial fellowship with Ciena — applies machine
                learning to systems, with peer-reviewed papers at FSE 2026 and the Journal of
                Systems and Software on generating and analyzing kernel traces with diffusion
                models and LLMs. I specialize in AI/ML (deep learning, NLP, LLMs, RAG, and
                agents), data-intensive backends, and reliable automation with Python, SQL,
                and cloud infrastructure.
            </motion.p>

            <motion.div
                variants={fadeIn('', '', 0.2, 1)}
                className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl"
            >
                {highlights.map((highlight) => (
                    <div
                        key={highlight.label}
                        className="bg-tertiary rounded-2xl px-5 py-6 text-center hover:shadow-card transition-all duration-300"
                    >
                        <p className="text-white font-black text-[28px] sm:text-[34px]">{highlight.value}</p>
                        <p className="mt-1 text-secondary text-[12px] sm:text-[13px] leading-[18px]">{highlight.label}</p>
                    </div>
                ))}
            </motion.div>

            <section className="relative w-full -mb-20 mt-6">
                <GitHubContributions />
            </section>
        </>
    );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
