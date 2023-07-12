import React from "react";
import {AboutUs, EntryTravel, Hero, Stats} from "../../components/index.js";
import {ContactView, FooterView, NavbarView} from "../Views/index.js";
import style from "../../style.js";


const Home = () => {
    return (
        <div className="bg-blend-multiply w-full overflow-hidden">
            <div className={`${style.paddingX} ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}>
                    <NavbarView/>
                </div>
            </div>
            <div className={`bg-primary ${style.flexStart}`}>
                <div className={`${style.boxWidth}`}>
                    <Hero/>
                </div>
            </div>

            <div className={`bg-primary ${style.flexStart}`}>
                <div className={`${style.boxWidth}`}>
                    <Stats/>
                    <AboutUs/>
                    <EntryTravel/>
                    <ContactView/>
                    <FooterView/>
                </div>
            </div>
        </div>
    )
}
export default Home
