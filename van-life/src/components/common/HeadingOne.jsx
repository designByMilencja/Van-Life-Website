import React from "react";

const HeadingOne = ({textOne, textStrong, textSecond}) => {
  return (
      <div className="flex flex-row justify-between items-center w-full text-center mt-5 ">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ">
              {textOne}<span className="text-gradient"> {textStrong} </span> {textSecond}</h1>
      </div>
  )
}
export default HeadingOne
