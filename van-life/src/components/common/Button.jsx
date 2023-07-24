import React from "react";
const Button = ({styles, text}) => {
    return (
        <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-md text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>{text}</button>
    )
}
export default Button

