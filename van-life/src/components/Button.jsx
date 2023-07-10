import React from "react";
const Button = ({styles}) => {
    return (
        <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-md text-[18px] text-primary outline-none ${styles}`}> </button>
    )
}
export default Button