import styles from "../../style.js";
import {Subheading} from "../common/Subheading.jsx";
import {construction, hammer} from "../../assets/index.js";
import React from "react";
import HeadingOne from "../common/HeadingOne.jsx";

const HeaderBuilding = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY} w-full `}>
            <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
                <Subheading icon={hammer} alt="icon hummer" firstText="Not" importantText="EXACTLY" secondText="home yet!"/>
                <div className="flex p-2">
                    <img src={construction} alt="scratch map of building" className="h-full items-end rounded-[10px]"/>
                    <div className="mt-[80px]">
                        <div className=" w-[100%] h-[100%] z-[5] hidden md:block">
                            <p className={`font-poppins font-normal leading-[30.8px] ml-[70px] p-1 max-w-[350px] min-w-[300px] text-white text-xl`}>"Travel
                                is the most inspiring building material for my imagination. I always start designing by
                                reflecting on where I've been and where I want to go next"</p>
                            <p className={`font-poppins font-normal leading-[30.8px] ml-[100px] p-1 text-white text-lg`}>Frank
                                Gehry</p>
                        </div>
                        <div className="absolute z-[0] w-[40%] h-[15%] top-40 pink__gradient"></div>
                        <div className="absolute z-[1] w-[10%] h-[20%] rounded-full bottom-40 white__gradient"></div>
                        <div className="absolute z-[0] w-[20%] h-[70%] right-20 bottom-20  blue__gradient"></div>
                    </div>
                </div>
                <HeadingOne textOne="How
                        it" textStrong="ALL" textSecond="started..."/>
            </div>
        </section>
    )
}
export default HeaderBuilding
