import React from "react";

const ContactCard = ({icon, title, href}) => {
    return (
        <div>
            <div className="bg-cyan-500 w-[90px] p-2 m-2 cursor-pointer">
                <a href={href}>
                    <img src={icon} alt="icon contact"/>
                    <p className="text-base text-center">{title}</p>
                </a>
            </div>
        </div>
    )
}
export default ContactCard
