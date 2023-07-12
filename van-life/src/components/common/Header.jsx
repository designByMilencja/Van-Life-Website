import styles from "../../style.js";
import {Subheading} from "./Subheading.jsx";
import {hammer, palmCamp} from "../../assets/index.js";

const Header = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY} h-[65vh] `}>
            <div className={`flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
                <Subheading icon={hammer} alt="icon hummer" firstText="Not" importantText="EXACTLY" secondText="home!"/>
                <div className="flex">
                        <img src={palmCamp} alt="palms around camper" className="items-center" />
                    <div className="mt-[80px]">
                        <div className="absolute z-[0] w-[40%] h-[15%] top-40 pink__gradient"></div>
                        <div className="absolute z-[1] w-[10%] h-[20%] rounded-full bottom-40 white__gradient"></div>
                        <div className="absolute z-[0] w-[20%] h-[70%] right-20 bottom-20  blue__gradient"></div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full text-center ">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ">How
                        it<span className="text-gradient"> ALL </span> started...</h1>
                </div>
            </div>
        </section>
    )
}
export default Header
