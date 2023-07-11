import React from "react";
import style from "./style";
import {
    Navbar,
    Hero,
    EntryTravel,
    Clients,
    Stats,
    Testimonials,
    CardDeal,
    AboutUs,
    Build,
    Gallery,
    Footer,
    Contact
} from "./components";

const App = () => {
    return (
        <div className="bg-blend-multiply w-full overflow-hidden">
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
                    <AboutUs/>
                    <EntryTravel/>
                    <Contact/>
                    <CardDeal/>
                    <Testimonials/>
                    <Clients/>
                    <Footer/>
                    <Gallery/>
                    <Build/>
                </div>
            </div>
        </div>
    )
}
export default App
