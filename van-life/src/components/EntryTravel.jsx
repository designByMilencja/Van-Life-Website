import React from "react";
import styles, {layout} from "../style.js";
import {ButtonRound} from "./ButtonRound";

const EntryTravel = () => {
    return (
        <section id="entryTravel" className={`${layout.sectionInfo} m-5 p-5`}>
            <h2 className={styles.heading2}>
                Our first longer, foreign trip
                <br className="sm:block hidden"/><span className="text-gradient"> Spain </span> 2022
            </h2>
            <div className="sm:flex m-4 ">
                <p className={`${styles.paragraph} max-w-[470px] m-[50px] md:m-[80px] text-white`}>
                    We started with the most accessible direction for van life, which is, of course, Spain. Winter in
                    Poland is giving in and lasts almost half a year (maybe I exaggerated, but not much). First the
                    continental part - the eastern coast, and then Tenerife and Gran Canaria.
                </p>

                <ButtonRound textFirst="see" textSecond="more"/>
            </div>
        </section>
    )
}
export default EntryTravel
