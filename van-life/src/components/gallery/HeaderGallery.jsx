import styles from "../../style.js";
import {Subheading} from "../common/Subheading.jsx";
import {plane, we} from "../../assets/index.js";
import React from "react";
import HeadingOne from "../common/HeadingOne.jsx";

const HeaderGallery = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY} h-[65vh] w-full `}>
            <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
                <Subheading icon={plane} alt="icon plane" firstText="Here you are!" importantText="IN OUR" secondText="gallery!"/>
                <div className="flex p-2 flex-col xs:flex-row">
                    <img src={we} alt="we at the festival outfits" className="h-[300px] max-w-[300px] min-w-[250px] ml-3  items-end rounded-[10px]"/>
                    <div className="mt-[80px]">
                        <div className="absolute z-[0] w-[40%] h-[15%] top-40 pink__gradient"></div>
                        <div className="absolute z-[1] w-[10%] h-[20%] rounded-full bottom-40 white__gradient"></div>
                        <div className="absolute z-[0] w-[20%] h-[70%] right-20 bottom-20  blue__gradient"></div>
                    </div>
                <HeadingOne textOne="All photo is our" textStrong="private" textSecond="staff..."/>
                </div>
            </div>
        </section>
    )
}
export default HeaderGallery
