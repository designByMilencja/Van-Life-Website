import styles from "../../style.js";
import React from "react";
import HeadingOne from "../common/HeadingOne.jsx";

const HeaderWebsite = () => {
    return (
        <section className={`flex sm:flex-row flex-col ${styles.paddingY} w-full `}>
            <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
                <div className="flex flex-col md:flex-row p-2">
                    <div className="mt-[20px]">
                        <div className="absolute z-[0] w-[40%] h-[15%] top-40 pink__gradient"></div>
                        <div className="absolute z-[1] w-[10%] h-[50%] rounded-full bottom-40 white__gradient"></div>
                        <div className="absolute z-[0] w-[20%] h-[70%] right-20 bottom-20  blue__gradient"></div>
                    </div>
                    <HeadingOne textOne="Do you like" textStrong="this" textSecond="website?"/>
                </div>
            </div>
        </section>
    )
}
export default HeaderWebsite
