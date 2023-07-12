'use client'
import React from "react";
import styles from "../../style.js";
import {dice, globe} from "../../assets/index.js";
import {headingLetters, spanTexts} from "../../constants/index.js";
import {Subheading} from "../common/Subheading.jsx";

const Hero = () => {
    return (<>
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} h-[65vh] `}>
                <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
                    <Subheading icon={dice} alt="icon dice" firstText="You've just" importantText="UNLOCKED" secondText="adventure!"/>
                    <div className="flex">
                        <video autoPlay loop muted playsInline className="items-center">
                            <source src={globe} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="mt-[80px]">
                            <div className=" w-[100%] h-[100%] relative z-[5] hidden md:block ">
                                {headingLetters.map((letter, index) => (
                                    <h2 key={index} className={`${styles.paragraph}`}>
                                        {letter}
                                        <span className="fade-span tracking-widest"> {spanTexts[index]} </span></h2>
                                ))}
                            </div>
                            <div className="absolute z-[0] w-[40%] h-[15%] top-40 pink__gradient"></div>
                            <div className="absolute z-[1] w-[10%] h-[20%] rounded-full bottom-40 white__gradient"></div>
                            <div className="absolute z-[0] w-[20%] h-[70%] right-20 bottom-20  blue__gradient"></div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full text-center ">
                        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ">Welcome
                            in <span className="text-gradient">OUR</span> world...</h1>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero
