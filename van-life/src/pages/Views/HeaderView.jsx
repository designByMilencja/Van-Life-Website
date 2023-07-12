import style from "../../style.js";
import React from "react";
import Header from "../../components/common/Header.jsx";

const HeaderView = () => {
return (
    <div className={`bg-primary ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
         <Header/>
        </div>
    </div>
)
}
export default HeaderView
