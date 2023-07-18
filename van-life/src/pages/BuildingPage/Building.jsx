import React from "react";
import style from "../../style.js";
import {ContactView, FooterView, NavbarView} from "../Views/index.js";
import {Build} from "../../components/index.js";
import HeaderBuilding from "../../components/building/HeaderBuilding.jsx";


const Building = () => {
    return (
        <div className="bg-blend-multiply w-full overflow-hidden">
            <div className={`${style.paddingX} ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}>
                    <NavbarView/>
                </div>
            </div>

            <div className={`bg-primary ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}>
                    <HeaderBuilding/>
                </div>
            </div>
            <div className={`bg-primary ${style.flexStart}`}>
                <div className={`${style.boxWidth}`}>
                    <Build/>
                    <ContactView/>
                    <FooterView/>
                </div>
            </div>
        </div>
    )
}
export default Building
