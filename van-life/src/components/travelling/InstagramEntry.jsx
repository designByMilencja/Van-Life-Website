import styles, {layout} from "../../style.js";
import Button from "../common/Button.jsx";

const InstagramEntry = () =>
    (<section className={`${layout.section}`}>
        <div className={`${layout.sectionInfo} p-2 md:ml-[50px]`}>
            <h2 className={styles.heading2}>You can see my full relation <br className="sm:block hidden"/><span
                className="text-gradient">on Instagram</span></h2>
            <p className={`${styles.paragraph} max-w-[450px] mt-5`}>We invite you to visit our page on Instagram, where
                we share fascinating moments from our travels.
                Explore the beauty of different corners of the world with us and let our photos transport you to magical
                places. We look forward to seeing you there! </p>
            <Button styles="mt-10" text="Go to Instagram"/>

        </div>

    </section>)

export default InstagramEntry
