import React, {useEffect, useState} from "react";

const FooterView = () => {
    const [year, setYear] = useState(0)
    useEffect(() => {
        const handleCurrentYear = new Date().getFullYear();
        setYear(handleCurrentYear)
    }, [])
    return (
        <div className="flex flex-row p-6 rounded-[20px] glass mt-5">
            <p className="w-full text-white text-center">Website made by me: <a href="https://github.com/designByMilencja"  className="text-gradient ml-2"> DesignByMilencja </a>{year}</p>
        </div>
    )
}
export default FooterView
