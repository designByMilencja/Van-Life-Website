import React from "react";
import {ButtonRound} from "../common/ButtonRound";

const TravelCard = ({content, name, title, year, img}) => {
    return (
        <div
            className="flex justify-between flex-col items-center px-5 py-12 rounded-[10px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 travel-card">
            <img src={img} alt={`photo from ${title}`} className="w-[370px] object-contain rounded-[10px]"/>
            <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>
            <p className="font-poppins font-normal text-dimWhite p-3">{title} {year}</p>
            <p className="font-semibold text-gradient m-2 pb-4">{name}</p>
            <ButtonRound textFirst="see" textSecond="more" url={`/gallery#${name}${year}`}/>
        </div>
    )
}
export default TravelCard
