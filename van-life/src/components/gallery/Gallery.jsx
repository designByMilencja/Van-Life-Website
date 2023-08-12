import React, {useEffect, useState} from "react";
import Images from "./Images.jsx";
import {imagesData} from "../../constants/index.js";
import YearTabs from "./YearTabs.jsx";
import CountryTabs from "./CountryTabs.jsx";
import {useLocation} from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";


const Gallery = () => {
    const years = Array.from(new Set(imagesData.map((data) => data.year)));
    const countries = Array.from(new Set(imagesData.map((data) => data.country)));
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const queryName = queryParams.get("name");
    const queryYear = queryParams.get("year");

    const scrollToGallery = () => {
        const scrollTimeout = setTimeout(() => {
            scroll.scrollTo("gallery", {
                smooth: 'easeInOutQuart',
                duration: 900,
                offset: -100,
            });
        }, 3000);

        return () => clearTimeout(scrollTimeout);
    };

    useEffect(() => {
        const parsedQueryYear = parseInt(queryYear, 10);
        if (parsedQueryYear === 2022 || parsedQueryYear === 2023) {
            setSelectedYear(parsedQueryYear);
            setSelectedCountry(queryName);
            scrollToGallery()
        }
    }, [queryYear, queryName]);
    const handleYearSelect = (year) => {
        setSelectedYear(year);
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
    };

    return (<section>
            <YearTabs years={years} selectedYear={selectedYear} selectedCountry={selectedCountry}
                      onYearSelect={handleYearSelect}/>
            {selectedYear && <CountryTabs countries={countries} selectedCountry={selectedCountry}
                                          onCountrySelect={handleCountrySelect}/>}
            {imagesData
                .filter((data) => data.year === selectedYear && (!selectedCountry || data.country === selectedCountry))
                .map((data, index) => (
                    <article id="gallery" key={index}>
                        <Images selectedC={selectedCountry} selectedY={selectedYear} images={data.images}/>
                    </article>
                ))}
        </section>
    )
}
export default Gallery
