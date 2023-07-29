const YearTabs = ({ years, selectedYear, onYearSelect }) => {
    return (
        <div>
            {years.map((year) => (
                <button
                    key={year}
                    onClick={() => onYearSelect(year)}
                    className={`z-5 text-white text-2xl p-4 m-6 ${selectedYear === year ? 'active' : ''}`}
                >
                    {year}
                </button>
            ))}
        </div>
    );
};

export default YearTabs;
