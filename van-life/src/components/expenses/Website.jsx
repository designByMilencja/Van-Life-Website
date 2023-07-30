import React from "react";
import styles, {layout} from "../../style.js";
import {ButtonRound} from "../common/ButtonRound.jsx";

const Website = () => {
    return (<section id="website" className={`${layout.sectionInfo} max-w-[1200px] m-8 p-5`}>
        <h2 className={styles.heading2}>
            If you want to check how much we spend on our travels I invite you to our <span className="text-gradient"> other </span> website.
        </h2>
        <div className=" m-4 z-[1] flex flex-col sm:flex-row justify-center items-center relative">
            <div className="flex">
                <p className={`${styles.paragraph} max-w-[470px] min-w-[220px] m-[50px] md:m-[80px] text-white`}>
                    You can find there a breakdown of our expenses by country or month. You will find there all the most important categories, as well as conversion rate to PLN.
                    If you are planning to travel by camper like us, you can check prices, cost of living or just plan a two-week vacation, knowing how much more or less money to take. Remember that the cost is calculated for two people.
                    In addition, you can also record your expenses simply by logging in and adding your categories, country and further amounts from receipts.
                </p>
            </div>
            <ButtonRound textFirst="check" textSecond="expenses" url="https://projectcamper.networkmanager.pl/"/>
        </div>
    </section>)
}
export default Website
