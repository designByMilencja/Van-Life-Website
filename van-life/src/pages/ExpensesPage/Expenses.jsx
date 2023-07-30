import React from "react";
import style from "../../style.js";
import {ContactView, FooterView, NavbarView} from "../Views/index.js";
import HeaderExpenses from "../../components/expenses/HeaderExpenses.jsx";
import Website from "../../components/expenses/Website.jsx";


const Expenses = () => {
    return (
        <div className="bg-blend-multiply w-full overflow-hidden">
            <div className={`${style.paddingX} ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}>
                    <NavbarView/>
                </div>
            </div>

            <div className={`bg-primary ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}>
                    <HeaderExpenses/>
                </div>
            </div>
            <div className={`bg-primary ${style.flexStart}`}>
                <div className={`${style.boxWidth}`}>
                    <Website/>
                    <ContactView/>
                    <FooterView/>
                </div>
            </div>
        </div>
    )
}
export default Expenses
