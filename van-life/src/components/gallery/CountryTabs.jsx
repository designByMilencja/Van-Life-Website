const CountryTabs = ({ countries, selectedCountry, onCountrySelect }) => {
    return (
        <div>
            {countries.map((country) => (
                <button
                    key={country}
                    onClick={() => onCountrySelect(country)}
                    className={` text-white text-2xl p-4 m-6 ${selectedCountry === country ? 'active' : ''}`}
                >
                    {country}
                </button>
            ))}
        </div>
    );
};

export default CountryTabs;
