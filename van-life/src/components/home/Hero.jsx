import React from "react";
import styles from "../../style.js";
import {dice} from "../../assets/index.js";
import {headingLetters, spanTexts} from "../../constants/index.js";
import {Subheading} from "../common/Subheading.jsx";
import HeadingOne from "../common/HeadingOne.jsx";

const Hero = () => {
    return (<>
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} h-[70vh] `}>
                <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
                    <Subheading icon={dice} alt="icon dice" firstText="You've just" importantText="UNLOCKED" secondText="adventure!"/>
                    <div className="flex">
                        <video autoPlay loop muted playsInline className="items-center">
                            <source src="/home/globe.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="mt-[80px]">
                            <div className=" w-[100%] h-[100%] relative z-[5] hidden md:block ml-[100px] ">
                                {headingLetters.map((letter, index) => (
                                    <p key={index} className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
                                        {letter}
                                        <span className="fade-span font-poppins font-normal leading-[30.8px] p-1 text-white text-lg tracking-wider"> {spanTexts[index]} </span></p>
                                ))}
                            </div>
                            <div className="absolute z-[0] w-[40%] h-[15%] top-40 pink__gradient"></div>
                            <div className="absolute z-[1] w-[10%] h-[20%] rounded-full bottom-40 white__gradient"></div>
                            <div className="absolute z-[0] w-[20%] h-[70%] right-20 bottom-20  blue__gradient"></div>
                        </div>
                    </div>
                    <HeadingOne textOne="Welcome
                            in" textStrong="OUR" textSecond="world..."/>
                </div>
            </section>
        </>
    )
}
export default Hero
