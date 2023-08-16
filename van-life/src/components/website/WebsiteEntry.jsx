import styles, {layout} from "../../style.js";
import Button from "../common/Button.jsx";
import React from "react";

const WebsiteEntry = () =>
    (<section className={`${layout.section} relative m-2`}>
        <div className={`${layout.sectionInfo} p-2 md:ml-[50px]`}>
            <div className=" absolute z-[0] w-[60%] h-[80%] left-[-50%] rounded-full white__gradient "></div>
            <div className="flex flex-1 flex-col ss:flex-row justify-between m-5 ss:m-1">
                <div className="flex flex-col justify-center items-center mx-4">
                    <h2 className={styles.heading2}>I can do same <br className="sm:block hidden"/>special <span
                        className="text-gradient"> for you</span></h2>
                    <p className={`${styles.paragraph} py-8 mt-5`}>We've invited you into the world of travel
                        you're about to discover, and is your online business ready for the journey of its life?
                        I'd like to invite you for a brief stop with my work. I create professional websites like the
                        one you are on now. Traveling is my passion, as is creating functional and compelling sites.
                        If your business needs its own place on the web, a great place to surprise and attract
                        attention, you've come to the right place. </p>
                    <p className={`${styles.paragraph} mt-5`}>
                        Together we can transform your vision into a website that is ready to conquer the online world.
                        If you want to learn how my skills can contribute to the success of your business, let me know.
                        I look forward to hearing from you! </p>
                </div>
                <div className="flex flex-col justify-center items-center m-3 ss:m-1">
                    <img src="/website/IMG_1531.jpg" alt="photo of me" className="max-w-[470px] max-h-[550px] mx-auto"/>
                    <Button styles="mt-10" text="Explore my projects" href="https://www.instagram.com/millencja/"/>
                </div>
                <div className=" absolute z-[2] w-[30%] h-[40%] right-[-70%] rounded-full blue__gradient "></div>
            </div>


        </div>

    </section>)

export default WebsiteEntry
