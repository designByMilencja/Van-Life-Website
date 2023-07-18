import styles, {layout} from "../../style.js";
import Button from "../common/Button.jsx";
import React from "react";

const InstagramEntry = () =>
    (<section className={`${layout.section} relative m-2`}>
        <div className={`${layout.sectionInfo} p-2 md:ml-[50px]`}>
            <div className=" absolute z-[0] w-[60%] h-[80%] left-[-50%] rounded-full white__gradient "></div>
            <h2 className={styles.heading2}>You can see my <br className="sm:block hidden"/>full relation on the <span
                className="text-gradient"> Instagram</span></h2>
            <p className={`${styles.paragraph} max-w-[450px] mt-5`}>We invite you to visit our page on Instagram, where
                we share fascinating moments from our travels.
                Explore the beauty of different corners of the world with us and let our photos transport you to magical
                places. We look forward to seeing you there! </p>
            <Button styles="mt-10" text="Go to Instagram"/>
            <div className=" absolute z-[0] w-[80%] h-[40%] right-[-70%] rounded-full pink__gradient "></div>

        </div>

    </section>)

export default InstagramEntry
