import {motion} from 'framer-motion';
import React from 'react';
import {Tilt} from 'react-tilt';
import {frameworks, services} from '../constants';
import {SectionWrapper} from '../hoc';
import {styles} from '../styles';
import {fadeIn, textVariant} from '../utils/motion';

const ServiceCard = ({index, title, icon}) => (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
            >
                <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy"/>

                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
            </div>
        </motion.div>
    </Tilt>
);

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

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>

        </>
    );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
