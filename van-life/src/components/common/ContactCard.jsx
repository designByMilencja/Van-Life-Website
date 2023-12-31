import React from "react";

const ContactCard = ({icon, title, href, target}) => {
    return (
        <div>
            <div className="bg-cyan-500 w-[80px] p-1 m-1 ss:m-3 sm:mr-10 cursor-pointer rounded-[10px]">
                <a href={href} target={target}>
                    <img src={icon} alt="icon contact" className="w-[60px] h-[60px] mx-auto"/>
                    <p className="text-base text-center">{title}</p>
                </a>
            </div>
        </div>
    )
}
export default ContactCard
