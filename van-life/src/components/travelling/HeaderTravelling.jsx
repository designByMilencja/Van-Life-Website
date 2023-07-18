import styles from "../../style.js";
import {Subheading} from "../common/Subheading.jsx";
import {bulb, compass} from "../../assets/index.js";
import React from "react";
import HeadingOne from "../common/HeadingOne.jsx";

const HeaderTravelling = () => {
    return (
        <section className={`flex sm:flex-row flex-col ${styles.paddingY} w-full `}>
            <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
                <Subheading icon={bulb} alt="icon hummer" firstText="Strange! We don't even" importantText="HAVE" secondText="an address!"/>
                <div className="flex flex-col md:flex-row p-2">
                    <img src={compass} alt="palm around camper van" className="h-full items-end md:mr-8"/>
                    <div className="mt-[20px]">
                        <div className="absolute z-[0] w-[40%] h-[15%] top-40 pink__gradient"></div>
                        <div className="absolute z-[1] w-[10%] h-[20%] rounded-full bottom-40 white__gradient"></div>
                        <div className="absolute z-[0] w-[20%] h-[70%] right-20 bottom-20  blue__gradient"></div>
                    </div>
                    <HeadingOne textOne="How
                        it" textStrong="ALL" textSecond="going..."/>
                </div>
            </div>
        </section>
    )
}
export default HeaderTravelling
