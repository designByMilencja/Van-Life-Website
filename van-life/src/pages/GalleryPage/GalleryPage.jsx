import React from "react";
import style from "../../style.js";
import {ContactView, FooterView, NavbarView} from "../Views/index.js";
import HeaderGallery from "../../components/gallery/HeaderGallery.jsx";

const GalleryPage = () => {
    return (
        <div className="bg-blend-multiply w-full overflow-hidden">
            <div className={`${style.paddingX} ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}>
                    <NavbarView/>
                </div>
            </div>
            <div className={`bg-primary ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}>
                    <HeaderGallery/>
                </div>
            </div>

            <div className={`bg-primary ${style.flexStart}`}>
                <div className={`${style.boxWidth}`}>

                    <ContactView/>
                    <FooterView/>
                </div>
            </div>
        </div>
    )
}
export default GalleryPage
