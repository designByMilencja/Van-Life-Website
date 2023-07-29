import React, {useState} from "react";
import Images from "./Images.jsx";
import { imagesData } from "../../constants/index.js";
import YearTabs from "./YearTabs.jsx";
import CountryTabs from "./CountryTabs.jsx";

const Gallery = () => {
    const years = Array.from(new Set(imagesData.map((data) => data.year)));
    const countries = Array.from(new Set(imagesData.map((data) => data.country)));
    const [selectedYear, setSelectedYear] = useState(years[0]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleYearSelect = (year) => {
        setSelectedYear(year);
        setSelectedCountry(null);
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
    };


    return (
        <section id="gallery">
            <YearTabs years={years} selectedYear={selectedYear} onYearSelect={handleYearSelect} />
            {selectedYear && <CountryTabs countries={countries} selectedCountry={selectedCountry} onCountrySelect={handleCountrySelect} />}
            {imagesData
                .filter((data) => data.year === selectedYear && (!selectedCountry || data.country === selectedCountry))
                .map((data, index) => (
                    <article key={index}>
                        <Images images={data.images} />
                    </article>
                ))}
        </section>
    )
}
export default Gallery
