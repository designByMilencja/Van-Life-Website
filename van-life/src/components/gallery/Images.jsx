import style from "../../style.js";
import {bus, palmCamp} from "../../assets/index.js";
import OneImage from "./OneImage.jsx";
import {useEffect, useRef, useState} from "react";

const images = [{image: bus, date: "2022/20/01"}, {image: palmCamp, date: "2022/20/01"}, {
    image: palmCamp,
    date: "2022/20/01"
}, {image: palmCamp, date: "2022/20/01"}]
const Images = () => {
    const [click, setClick] = useState(false);
    const [clickedSrc, setClickedSrc] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const popupRef = useRef();

    const nextImage = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setClickedSrc(images[nextIndex].image);
        setCurrentImageIndex(nextIndex);
    };

    const prevImage = () => {
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        setClickedSrc(images[prevIndex].image);
        setCurrentImageIndex(prevIndex);
    };

    const showPopUp = (src, index) => {
        setClick(true);
        setClickedSrc(src);
        setCurrentImageIndex(index)
    }
    const closePopUp = () => {
        setClick(false)
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.keyCode === 37) {
                prevImage();
            } else if (event.keyCode === 39) {
                nextImage();
            } else if (event.keyCode === 27) {
                closePopUp()
            }
        };
        const handleOutsideClick = (event) => {
            if (popupRef.current === event.target) {
                closePopUp();
            }
        };
        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [prevImage, nextImage, closePopUp]);

    return (
        <section id="images" className="flex flex-col justify-center items-center bg-gallery-gradient m-4 relative">
            <h2 className={`${style.heading2} p-4 mt-3`}>Spain 2022</h2>
            <ul className="flex flex-wrap list-none justify-evenly text-center mb-[80px]">
                {images.map((image, index) =>
                    <OneImage key={index}
                              src={image.image}
                              desc="one one one one one one one one one one one one one one"
                              date={image.date}
                              onClick={() => showPopUp(image.image, index)}/>)
                }
            </ul>
            {click && (
                <div ref={popupRef} className="popup">
                    <button className="arrow-btn text-gradient text-3xl p-2" onClick={prevImage}>
                        &lt;
                    </button>
                    <img alt="bigger photo from trip" src={clickedSrc} className="popup-img"/>
                    <button className="arrow-btn text-gradient text-3xl p-2" onClick={nextImage}>
                        &gt;
                    </button>
                    <button className="x-btn text-gradient text-3xl absolute top-[10px] right-[10px] cursor-pointer"
                            onClick={closePopUp}>x
                    </button>
                </div>
            )}
        </section>
    )
}
export default Images
