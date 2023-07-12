import React from "react";

import NavbarView from "../Views/NavbarView.jsx";
import style from "../../style.js";
import {Build, Contact, Footer} from "../../components/index.js";

const Building = () => {
    return (
        <div className="bg-blend-multiply w-full overflow-hidden">
            <NavbarView/>
            <div className={`bg-primary ${style.flexStart}`}>
                <div className={`${style.boxWidth}`}>
                    <Build/>
                    <Contact/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}
export default Building
