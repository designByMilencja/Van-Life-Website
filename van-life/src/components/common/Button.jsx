import React from "react";
const Button = ({styles, text, href}) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <button type="button" className={`py-4 px-6 m-1 bg-blue-gradient font-poppins font-md text-[18px] text-primary outline-none ${styles} rounded-[10px] cursor-pointer`}>{text}</button>
        </a>
    )
}
export default Button

