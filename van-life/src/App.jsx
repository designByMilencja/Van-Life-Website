import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/HomePage/Home.jsx";
import Building from "./pages/BuildingPage/Building.jsx";
import Travelling from "./pages/TravellingPage/Travelling.jsx";
import GalleryPage from "./pages/GalleryPage/GalleryPage.jsx";



const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/building" element={<Building />} />
                <Route exact path="/travelling" element={<Travelling />} />
                <Route exact path="/gallery" element={<GalleryPage />} />
            </Routes>
        </Router>
    );
};

export default App;
