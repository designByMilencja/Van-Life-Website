import React from "react";
import style from "../../style.js";
import {ContactView, FooterView, NavbarView} from "../Views/index.js";
import HeaderWebsite from "../../components/website/HeaderWebsite.jsx";
import WebsiteEntry from "../../components/website/WebsiteEntry.jsx";

const Website = () => {
    return (
        <div className="bg-blend-multiply w-full overflow-hidden">
            <div className={`${style.paddingX} ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}>
                    <NavbarView/>
                </div>
            </div>
            <div className={`bg-primary ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}>
                    <HeaderWebsite/>
                </div>
            </div>

            <div className={`bg-primary ${style.flexStart}`}>
                <div className={`${style.boxWidth}`}>
                    <WebsiteEntry/>
                    <ContactView/>
                    <FooterView/>
                </div>
            </div>
        </div>
    )
}
export default Website
