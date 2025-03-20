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
                As a Computer Science student specializing in Intelligent Systems at Brock University with an 87% GPA,
                I combine academic excellence with practical expertise in AI development and software engineering.
                Currently working as an AI Developer at Mengalo and previously at Scotiabank, I've delivered impactful
                solutions that reduced testing time by 75% and improved efficiency by 90% through AI-powered tools.
                My technical stack includes Java, Python, JavaScript, and various modern frameworks, complemented by
                extensive experience in both SQL and NoSQL databases. As a Match of Minds Scholarship recipient,
                I bring a proven track record in AI/ML development, automation engineering, and innovative research
                in computer science.
            </motion.p>

            <section className="relative w-full">
                <GitHubContributions />
            </section>
        </>
    );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
