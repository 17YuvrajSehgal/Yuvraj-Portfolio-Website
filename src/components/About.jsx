import {motion} from 'framer-motion';
import React from 'react';
import {SectionWrapper} from '../hoc';
import {styles} from '../styles';
import {fadeIn, textVariant} from '../utils/motion';
import GitHubContributions from "./GitHubContributions.jsx";

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
                I am an AI and Full-Stack Engineer passionate about building intelligent, scalable, and high-performance systems. With expertise in AI-driven automation, backend development, and cloud infrastructure, I have developed AI-powered inboxes, smart CRMs, and data-driven applications using React, Node.js, Java, Spring Boot, and FastAPI. My work blends cutting-edge AI models with full-stack engineering, driving innovation in automation and data intelligence. Let’s connect to build the future of AI-powered solutions! 🚀
            </motion.p>

            <section className="relative w-full -mb-20">
                <GitHubContributions />
            </section>
        </>
    );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
