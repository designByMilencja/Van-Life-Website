import React, {useEffect, useState} from "react";
import {aboutUs} from "../../constants/index.js";
import {isElementInViewport} from "../../utils/scroll.js";

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("aboutUs");
            const isVisible = isElementInViewport(section);
            setIsVisible(isVisible);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <section id="aboutUs" className="w-full h-[100%] mt-8 md:my-[100px] glass rounded-lg">
                <div className="flex justify-center items-center flex-col sm:flex-row">
                    <div className="flex flex-col justify-center items-center mt-8">
                        <div className="text-2xl font-extrabold p-2">
                        <span className="text-white">
                           We are</span>
                        </div>
                        <div className="flex justify-center items-center relative ">
                            <img className="max-h-[300px] min-w-[200px] p-4" src="/src/assets/bus/we/we.png" alt="profile photo"/>
                            {isVisible && (
                                <div className="thunder"></div>
                            )}
                        </div>
                        <div className="text-1xl font-extrabold pb-8 mt-8">
                        <span className="text-gradient">
                           Milena and Wojciech </span>
                        </div>
                    </div>


                    <div className="justify-center mb-6 sm:mb-0">
                        <div className="flex flex-col bg-clip-text text-transparent bg-gradient-to-r from-pink-100 to-violet-500 sm:max-w-fit">
                            {aboutUs.map((paragraph, index) => (
                                <p key={index}
                                   className="text-xs px-[40px] py-3 font-mono text-dimWhite min-w-[400px] max-w-[470px] text-center">{paragraph}</p>
                            ))}
                        </div>
                    </div>
            </div>
        </section>
    )
}
export default AboutUs
