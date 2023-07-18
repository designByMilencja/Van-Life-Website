import React from "react";

const TravelCard = ({content, name, title, img}) => {
    return (
        <div
            className="flex justify-between flex-col px-5 py-12 rounded-[10px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 travel-card">
            <img src={img} alt={`photo from ${title}`} className="w-[370px] object-contain rounded-[10px]"/>
            <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10 ">{content}</p>
            <p className="font-poppins font-normal text-dimWhite">{title}</p>
            <p className="font-semibold text-gradient">{name}</p>
        </div>
    )
}
export default TravelCard
