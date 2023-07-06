import React from "react";
import style from "./style.js";
import {
    Navbar,
    Hero,
    Billing,
    Footer,
    Clients,
    Business,
    Stats,
    Testimonials,
    CardDeal,
    AboutUs,
    Build,
    Gallery
} from "./components";

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${style.paddingX} ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}>
                    <Navbar/>
                </div>
            </div>

            <div className={`bg-primary ${style.flexStart}`}>
                <div className={`${style.boxWidth}`}>
                    <Hero/>
                </div>
            </div>

            <div className={`bg-primary ${style.flexStart}`}>
                <div className={`${style.boxWidth}`}>
                    <Stats/>
                    <Business/>
                    <Billing/>
                    <CardDeal/>
                    <Testimonials/>
                    <Clients/>
                    <Footer/>
                    <AboutUs/>
                    <Gallery/>
                    <Build/>
                </div>
            </div>
        </div>
    )
}
export default App
