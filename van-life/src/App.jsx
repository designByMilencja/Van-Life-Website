import React from "react";
import style from "./style";
import {
    Hero,
    EntryTravel,
    Clients,
    Stats,
    Testimonials,
    CardDeal,
    AboutUs,
    Build,
    Gallery,
} from "./components";
import NavbarView from "./pages/Views/NavbarView.jsx";
import {ContactView, FooterView} from "./pages/Views/index.js";

const App = () => {
    return (
        <div className="bg-blend-multiply w-full overflow-hidden">
            <div className={`${style.paddingX} ${style.flexCenter}`}>
                <div className={`${style.boxWidth}`}>
                    <NavbarView/>
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
                    <ContactView/>
                    <CardDeal/>
                    <Testimonials/>
                    <Clients/>
                    <FooterView/>
                    <Gallery/>
                    <Build/>
                </div>
            </div>
        </div>
    )
}
export default App
