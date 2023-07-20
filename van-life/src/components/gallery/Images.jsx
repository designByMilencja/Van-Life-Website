import style from "../../style.js";
import {bus, palmCamp} from "../../assets/index.js";
import OneImage from "./OneImage.jsx";
import {useState} from "react";

const images = [{image:bus,date:"2022/20/01"}, {image:palmCamp,date:"2022/20/01"},{image:palmCamp,date:"2022/20/01"}, {image:palmCamp,date:"2022/20/01"}]
const Images = () => {
    const [click, setClick] = useState(false);
    const [clickedSrc, setClickedSrc] = useState('');
    const showPopUp = (src) => {
      setClick((prevState) => !prevState);
        setClickedSrc(src);
    }
    const closePopUp = () => {
      setClick((prevState) => !prevState)
    }
    return (
        <section id="images" className="flex flex-col justify-center items-center bg-gallery-gradient m-4 relative">
            <h2 className={`${style.heading2} p-4 mt-3`}>Spain 2022</h2>
            <ul className="flex flex-wrap list-none justify-evenly text-center mb-[80px]">
                {images.map((image, index) =>
                    <OneImage key={index} src={image.image} desc="one one one one one one one one one one one one one one" date={image.date} onClick={()=> showPopUp(image.image)}/>)
                }
            </ul>
            <div className={`popup ${click ? "" : "hidden" }`} onClick={closePopUp}>
                <img alt="bigger photo from trip" src={clickedSrc} className="popup-img"/>
            </div>
        </section>
    )
}
export default Images
