import styles from "../../style.js";
import {plane} from "../../assets/index.js";
import {useState} from "react";

export const ButtonRound = ({textFirst, textSecond}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div
            className={`${styles.flexCenter} w-[140px] min-w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px]">
                        <span className="text-gradient">{textFirst}</span>
                    </p>
                    <img src={plane} alt="plane icon" className={`w-[40px] h-40px p-1 object-contain transition-transform ${
                        isHovered ? 'hovered' : ''
                    }`}/>
                </div>
                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                    <span className="text-gradient">{textSecond}</span>
                </p>
            </div>
        </div>
    )
}
