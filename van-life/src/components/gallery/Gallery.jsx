import React from "react";
import Images from "./Images.jsx";
import {france2023, germany2023, poland2022, spain2022, spain2023} from "../../constants/index.js";

const Gallery = () => {
    return (
        <section id="gallery">
            <article id="poland2022">
                <Images images={poland2022}/>
            </article>
            <article id="spain2022">
                <Images images={spain2022}/>
            </article>
            <article id="spain2023">
                <Images images={spain2023}/>
            </article>
            <article id="france2023">
                <Images images={france2023}/>
            </article>
            <article id="germany2023">
                <Images images={germany2023}/>
            </article>

        </section>
    )
}
export default Gallery
