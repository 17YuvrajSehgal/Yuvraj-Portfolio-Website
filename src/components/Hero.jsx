import React from "react";
import {styles} from "../styles";
import {ComputersCanvas} from "./canvas";
import Typewriter from "typewriter-effect";

// Toggle the 3D computer model in the hero. When hidden, the text is
// vertically centered over the background pattern instead.
const SHOW_COMPUTER = false;

const Hero = () => {
    return (
        <>
            <section className={`relative w-full mx-auto ${SHOW_COMPUTER ? "h-screen" : ""}`}>
                <div
                    className={`${
                        SHOW_COMPUTER
                            ? "absolute inset-0 sm:top-[120px] top-[150px]"
                            : "pt-32 sm:pt-40 pb-16 sm:pb-24"
                    } items-start max-w-7xl mx-auto ${styles.paddingX} flex flex-row gap-5`}>
                    <div className="flex flex-col justify-center items-center mt-5">
                        <div className="w-5 h-5 rounded-full bg-[#915EFF]"/>
                        <div className={`w-1 violet-gradient ${SHOW_COMPUTER ? "sm:h-80 h-40" : "sm:h-56 h-32"}`}/>
                    </div>

                    <div className="z-10">
                        <h1 className={`${styles.heroHeadText} text-white`}>
                            Hi, I'm <span className="text-[#915EFF]">Yuvraj</span>
                        </h1>
                        <div className={`${styles.heroSubText} mt-2 text-white-100 flex flex-wrap gap-x-3`}>
                            <span>I build</span>
                            <span className="text-[#915EFF] font-semibold">
                                <Typewriter
                                    options={{
                                        strings: [
                                            "AI & ML systems",
                                            "LLM, RAG & agentic apps",
                                            "data-intensive backends",
                                            "full-stack products",
                                            "reliable automation",
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: "natural",
                                        pauseFor: 2000,
                                    }}
                                />
                            </span>
                        </div>
                        <p className={`mt-4 text-secondary ${
                            SHOW_COMPUTER
                                ? "text-[13px] sm:text-[15px] max-w-md leading-[24px]"
                                : "text-[14px] sm:text-[17px] max-w-xl leading-[28px]"
                        }`}>
                            M.Sc. CS researcher at Brock University · Mitacs fellow
                            with Ciena · published at FSE &amp; JSS.
                        </p>
                    </div>
                </div>

                {SHOW_COMPUTER && (
                    <div className="absolute inset-0 top-[350px] sm:top-0">
                        <ComputersCanvas/>
                    </div>
                )}
            </section>
        </>
    );
};

export default Hero;
