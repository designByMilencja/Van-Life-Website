import React from "react";
import styles from "../../style.js";
import {travels} from "../../constants/index.js";
import {TravelCard} from "../index.js";

const Travel = () => {
    return (
        <section id="travel"
                 className={`${styles.paddingY} ${styles.flexCenter} flex-col relative m-5`}>
            <div className=" absolute z-[0] w-[60%] h-[80%] right-[-50%] rounded-full blue__gradient "></div>
            <div className="w-full flex justify-between item-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h1 className={styles.heading2}>Our <span
                    className="text-gradient"> first test trip</span> by camper <br className="sm:block hidden"/> was over the polish Baltic sea coast for a month </h1>
                <div className="w-full md:mt-0 mt-6">
                    <p className={`${styles.paragraph} text-left max-w-[650px] pl-5`}>In the summer of 2022 we visited cities from Swinoujscie to Gdansk, along the way passing two festivals: Summer Contrast and Sun. The weather was great, and the month in the camper passed very quickly, we stayed in the wild, so the trip was low-budget, which compensated for the rising prices at the seaside.</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center w-full travel-container relative z-[1] ">
                {travels.map((travel) => (<TravelCard key={travel.id} {...travel}/>))}
            </div>
        </section>

    )
}
export default Travel
