import React, {useEffect, useState} from "react";
import Images from "./Images.jsx";
import {imagesData} from "../../constants/index.js";
import YearTabs from "./YearTabs.jsx";
import CountryTabs from "./CountryTabs.jsx";
import {useLocation} from "react-router-dom";

const Gallery = () => {
    const years = Array.from(new Set(imagesData.map((data) => data.year)));
    const countries = Array.from(new Set(imagesData.map((data) => data.country)));
    const [selectedYear, setSelectedYear] = useState(years[0]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const queryName = queryParams.get("name");
    const queryYear = queryParams.get("year");
    console.log(queryYear, queryName)

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setSelectedCountry(null);
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
    };
    useEffect(() => {
        handleYearSelect(queryYear);
        handleCountrySelect(queryName);
    }, []);
    console.log(selectedYear, selectedCountry)

    return (
        <section id="gallery">
            <YearTabs id={`${setSelectedCountry}${setSelectedYear}`} years={years} selectedYear={selectedYear}
                      onYearSelect={handleYearSelect}/>
            {selectedYear && <CountryTabs countries={countries} selectedCountry={selectedCountry}
                                          onCountrySelect={handleCountrySelect}/>}
            {imagesData
                .filter((data) => data.year === selectedYear && (!selectedCountry || data.country === selectedCountry))
                .map((data, index) => (
                    <article key={index} id={`${data.name}${data.year}`}>
                        <Images images={data.images}/>
                    </article>
                ))}
        </section>
    )
}
export default Gallery
