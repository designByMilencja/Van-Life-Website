import React from "react";

const ContactCard = ({icon, title, href}) => {
    return (
        <div>
            <div className="bg-cyan-500 w-[90px] p-2 m-4 sm:mr-10 cursor-pointer rounded-[10px]">
                <a href={href}>
                    <img src={icon} alt="icon contact"/>
                    <p className="text-base text-center">{title}</p>
                </a>
            </div>
        </div>
    )
}
export default ContactCard
