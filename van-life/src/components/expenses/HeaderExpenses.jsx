import styles from "../../style.js";
import {Subheading} from "../common/Subheading.jsx";
import {gift} from "../../assets/index.js";
import React from "react";
import HeadingOne from "../common/HeadingOne.jsx";

const HeaderExpenses = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY} w-full `}>
            <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
                <Subheading icon={gift} alt="icon hummer" firstText="Here you have" importantText="LITTLE" secondText="bonus!"/>
                <HeadingOne textOne="Expenses" textStrong="WITHOUT" textSecond="secret..."/>
                    <div className="mt-[20px]">
                        <div className="absolute z-[0] w-[40%] h-[15%] top-40 pink__gradient"></div>
                        <div className="absolute z-[1] w-[10%] h-[20%] rounded-full bottom-40 white__gradient"></div>
                        <div className="absolute z-[0] w-[20%] h-[70%] right-20 bottom-20  blue__gradient"></div>
                </div>
            </div>
        </section>
    )
}
export default HeaderExpenses
