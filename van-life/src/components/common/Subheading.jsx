import styles from "../../style.js";
import React from "react";

export const Subheading = ({firstText, importantText, secondText, icon, alt}) => {
  return (
      <div
          className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={icon} alt={alt} className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>{firstText} <span
              className="text-gradient">{importantText}</span> {secondText}</p>
      </div>
  )
}
