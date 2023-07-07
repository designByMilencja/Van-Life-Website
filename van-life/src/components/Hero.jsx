'use client'
import React from "react";
import styles from "../style.js";
import {dice, globe} from "../assets/index.js";
import {headingLetters, spanTexts} from "../constants/index.js";

const Hero = () => {
    // const [showUnlockText, setShowUnlockText] = useState(true);
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowUnlockText(false);
    //     }, 4000);
    //
    //     return () => clearTimeout(timer);
    // }, []);
    return (<>
            <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} h-[70vh] `}>
                <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
                    <div
                        className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
                        <img src={dice} alt="dice icon" className="w-[32px] h-[32px]"/>
                        <p className={`${styles.paragraph} ml-2`}>You've just <span
                            className="text-gradient">UNLOCKED</span> adventure!</p>
                    </div>
                    <div className="flex">
                        <video autoPlay loop muted playsInline className="items-center">
                            <source src={globe} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div className="mt-[80px]">
                            <div className=" w-[100%] h-[100%] relative z-[5] text-white hidden md:block ">
                                {headingLetters.map((letter, index)=> (
                                    <h2 key={index} className={`${styles.paragraph}`}>
                                        {letter}
                                        <span className="fade-span tracking-widest"> {spanTexts[index]} </span></h2>
                                ))}
                            </div>
                                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
                                <div className="absolute z-[1] w-[10%] h-[10%] rounded-full bottom-40 white__gradient"></div>
                                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20  blue__gradient"></div>
                        </div>
                    </div>
                        <div className="flex flex-row justify-between items-center w-full text-center">
                            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">Welcome
                                in <span className="text-gradient">OUR</span> world</h1>
                        </div>
                </div>
            </section>
        </>
    )
}
export default Hero
