import React from "react";
import styles, {layout} from "../../style.js";
import {ButtonRound} from "../common/ButtonRound.jsx";

const EntryTravel = () => {
    return (
        <section id="entryTravel" className={`${layout.sectionInfo} max-w-[1200px] m-8 p-5`}>
            <h2 className={styles.heading2}>
                Our first longer, foreign trip <span className="text-gradient"> Spain </span> 2022
            </h2>
            <div className=" m-4 z-[1] flex flex-col sm:flex-row justify-center items-center relative">
                <div className="flex">
                    <p className={`${styles.paragraph} max-w-[470px] min-w-[220px] m-[50px] md:m-[80px] text-white`}>
                        We started with the most accessible direction for van life, which is, of course, Spain. Because
                        winter in
                        Poland is giving in and lasts almost half a year (maybe I exaggerated, but not much) we choose warm,
                        sunny direction.
                        First the continental part - the eastern coast, and then Tenerife and Gran Canaria.
                    </p>
                    <img alt="map of Spain" className="hidden lg:block absolute top-0 right-[0] h-[300px] transform translate-x-full transition-transform duration-500" src='/spainMap.png'/>
                </div>
                <ButtonRound textFirst="see" textSecond="more"/>
            </div>
        </section>
    )
}
export default EntryTravel
